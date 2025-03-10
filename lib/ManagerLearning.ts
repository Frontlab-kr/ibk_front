import { useMyLearnStore } from "@/domains/myLearn/store";
import { useLearningStore } from "../domains/learning/store";
import type { CourseDegreeChapterOutVo, CourseDegreeLessonOutVo, CourseDegreeLessonSummaryInVo, CourseDegreeOutVo, StudyRoomAttendanceQRInVo, StudyRoomExamAnswerOutVo, StudyRoomExamInVo, StudyRoomExamSubmitInVo, StudyRoomLastLessonOutVo, StudyRoomProgressInVo, StudyRoomReportDetailInVo, StudyRoomReportSubmitInVo, StudyRoomSurveyInVo, StudyRoomSurveySubmitInVo } from "../api-client";
import { eLessonType } from "../domains/course/education/type";
import dayjs from "dayjs";
import { useAuthStore } from "../domains/auth";
import Utility from "./Utility";
import moment from 'moment-timezone';
export enum eLessonStatus {
    BEFORE = '진행전',
    PROGRESS = '진행중',
    COMPLETED = '학습종료',
    SUBMITTED = '제출완료',
    NOT_SUBMITTED = '미제출',
    UNKNOWN = '알수없음'
}
export default class ManagerLearning {
    static isSequencialLearning(courseDegree: CourseDegreeOutVo | undefined): boolean {
        return courseDegree?.pgrsMthdVl == "S";
    }



    private static instance: ManagerLearning | null = null;
    private myLearnStore = useMyLearnStore();
    private learningStore = useLearningStore();
    edctDsprLssoNo: number | null = null;
    edctDsprNo: number | null = null;
    dutyEdctCd: string | null = null;

    private constructor() {
        // Private constructor to prevent direct instantiation
    }

    public static getIns(): ManagerLearning {
        if (!ManagerLearning.instance) {
            ManagerLearning.instance = new ManagerLearning();
        }
        return ManagerLearning.instance;
    }

    public async init() {
        const route = useRoute();
        const { edctDsprLssoNo, edctDsprNo, dutyEdctCd } = route.query;
        this.edctDsprLssoNo = edctDsprLssoNo as unknown as number;
        this.edctDsprNo = edctDsprNo as unknown as number;
        this.dutyEdctCd = dutyEdctCd as string;

        const compLearning = useCompLearning();
        await compLearning.readyToStartLesson(this.edctDsprNo, this.dutyEdctCd);


        watch(() => this.myLearnStore.chapterLesson?.courseDegreeChapter, (newVal) => {
            if (ManagerLearning.isSequencialLearning(this.myLearnStore.chapterLesson?.courseDegree)) {
                ManagerLearning.refineForSequentialLearning(newVal || []);
            }
        }, {
            immediate: true,  // 초기에 한 번 실행
            deep: true,
        });

    }
    makeLessonStartPercentage(){
        const lesson = ManagerLearning.getIns().getLesson(this.edctDsprLssoNo!);
        if (lesson) {
            lesson.acmlCnfgRto = 1;
        }
    }
    // ui 에만 일시적으로 수정한다.
    makeLesson100Percentage() {

        const lesson = ManagerLearning.getIns().getLesson(this.edctDsprLssoNo!);
        if (lesson) {
            lesson.acmlCnfgRto = 100;
        }
        // 메뉴 열어두기
        this.learningStore.visibleMenu = true;
    }
    public getChapter(edctDsprLssoNo: number): CourseDegreeChapterOutVo | null {
        const chapter = this.myLearnStore.chapterLesson?.courseDegreeChapter?.find(chapter => chapter.lessonList?.some(lesson => lesson.edctDsprLssoNo == edctDsprLssoNo));
        return chapter || null;
    }
    public getLesson(edctDsprLssoNo: number): CourseDegreeLessonOutVo | null {
        const chapter = this.getChapter(edctDsprLssoNo);
        if (!chapter) {
            return null;
        }

        return chapter?.lessonList?.find(lesson => lesson.edctDsprLssoNo == edctDsprLssoNo) || null;
    }

    static isCompletedLesson(lesson: CourseDegreeLessonOutVo): boolean {
        return lesson.acmlCnfgRto == 100;
    }
    public static getLessonStatus(lesson: CourseDegreeLessonOutVo): eLessonStatus {


        let status = "";
        if (lesson.courseResult?.ctcrYn == 'Y') {
            status = eLessonStatus.COMPLETED;
        }
        else if (lesson.acmlCnfgRto === null || lesson.acmlCnfgRto === 0) {
            status = eLessonStatus.BEFORE;

        } else if (lesson.acmlCnfgRto! < 100) {
            status = eLessonStatus.PROGRESS;
        } else if (lesson.acmlCnfgRto == 100) {
            status = eLessonStatus.COMPLETED;
        }
        else {
            status = eLessonStatus.UNKNOWN;
        }
        // status = eLessonStatus.COMPLETED
        return status as eLessonStatus;
    }
    public static isLessonCompleted(lesson?: CourseDegreeLessonOutVo | null): boolean {
        if (lesson == null) {
            return false;
        }
        return this.getLessonStatus(lesson) == eLessonStatus.COMPLETED;
    }
    public static getLessonStatusName(lesson: CourseDegreeLessonOutVo): string {

        let isSubmitTypeLesson = false;
        if ([eLessonType.EXAM, eLessonType.SURVEY, eLessonType.REPORT].includes(lesson.connKcd as eLessonType)) {

            isSubmitTypeLesson = true;
        }
        const status = this.getLessonStatus(lesson);
        if (status == eLessonStatus.BEFORE) {
            if (isSubmitTypeLesson) {
                return eLessonStatus.NOT_SUBMITTED;
            }
            return eLessonStatus.BEFORE;
        } else if (status == eLessonStatus.PROGRESS) {
            return lesson.acmlCnfgRto + '%';
        } else if (status == eLessonStatus.COMPLETED) {
            if (isSubmitTypeLesson) {

                return eLessonStatus.SUBMITTED;
            }
            return eLessonStatus.COMPLETED;
        } else {
            return eLessonStatus.UNKNOWN;
        }
    }
    public static getLessonTypeName(lessonType?: eLessonType): string {
        if (!lessonType) return '-';
        if (lessonType === eLessonType.VOD) {
            return 'VOD';
        } else if (lessonType === eLessonType.EXTERNAL) {
            return '외부CP및링크';
        } else {
            return lessonType;
        }
    }
    public getEdctCdAndNo(): {
        dutyEdctCd: string;
        edctDsprNo: number;
    } {
        const route = useRoute();
        return {
            dutyEdctCd: this.dutyEdctCd ?? route.query.dutyEdctCd as string,
            edctDsprNo: this.edctDsprNo ?? route.query.edctDsprNo as unknown as number,
        }
    }
    public getQrAttendanceUrl(): string {

        const userInfo = useAuthStore().userInfo;
        if ($isEmpty(userInfo)) {
            $alert('로그인 상태가 아닙니다.</br>로그인 후 출석을 진행해주세요.');
            return '';
        }
        // current domain
        const domain = window.location.origin;
        // @ts-ignore
        return `${domain}/myLearn/studyRoom/learning/attendance?${new URLSearchParams({
            dutyEdctCd: this.getEdctCdAndNo().dutyEdctCd as string,
            edctDsprNo: this.getEdctCdAndNo().edctDsprNo as unknown as number,
            edctDsprChpaNo: this.learningStore.currentLesson?.edctDsprChpaNo as unknown as number,
            edctDsprLssoNo: this.learningStore.currentLesson?.edctDsprLssoNo as unknown as number,
            userId: userInfo?.userId as string,
        }).toString()}`
    }
    public openExternalLink() {
        window.open(this.learningStore.currentLesson?.extlCrtcUrlAdr, '_blank')
    }
    public moveToStudyRoom() {
        this.learningStore.currentLesson = null;
        this.learningStore.visibleMenu = false;
        const router = useRouter();
        router.replace({
            path: '/myLearn/studyRoom',
            query: {
                dutyEdctCd: this.getEdctCdAndNo().dutyEdctCd as string,
                edctDsprNo: this.getEdctCdAndNo().edctDsprNo as unknown as number,
            }
        });
    }

    public moveToMyLearnList() {

        const router = useRouter();
        router.push({
            path: '/myLearn',
        });
    }

    // 시간포함 날짜 체크
    async showAlertIfNotTodayInLessonDateRange(lesson: CourseDegreeLessonOutVo) {
        const currentDate = Utility.currentDate();  // 현재 시간 (한국 시간)
        const startDate = moment(lesson.lssoSttgTs);
        const endDate = moment(lesson.lssoFnshTs);

     /*    if ($isLocal()) {
            return true;
        }
 */
        // console.log('Date Check:', {
        //     current: currentDate.format('YYYY-MM-DD HH:mm:ss'),
        //     start: startDate.format('YYYY-MM-DD HH:mm:ss'),
        //     end: endDate.format('YYYY-MM-DD HH:mm:ss'),
        // });

        // 외부레슨 타입의 경우 차수 기간내에서 무조건 수행이므로 시간 체크를 하지 않는다.
        if (lesson.connKcd == eLessonType.EXTERNAL) {
            return true;
        }

        if (currentDate.isBefore(startDate)) {
            await $alert(`해당 레슨이 시작 전입니다.</br>시작 시간은 ${startDate.format('YYYY-MM-DD HH:mm')} 입니다.`);
            return false;
        }

        if (currentDate.isAfter(endDate)) {
            await $alert(`해당 레슨이 종료 되었습니다.</br>종료 시간은 ${endDate.format('YYYY-MM-DD HH:mm')} 입니다.`);
            return false;
        }

        return true;
    }
    async moveToLesson(dutyEdctCd: string, edctDsprNo: number, edctDsprLssoNo: number | null, isMoveOrReplace = true) {

        let lastLessonInfo = this.learningStore.lastLesson;
        if (this.learningStore.lastLessonParam == null || this.learningStore.lastLessonParam.edctDsprNo != edctDsprNo || this.learningStore.lastLessonParam.dutyEdctCd != dutyEdctCd) {
            lastLessonInfo = await this.learningStore.getLastLesson({
                edctDsprNo: edctDsprNo as any,
                dutyEdctCd: dutyEdctCd as any,
            });
        }

        let hasLastLesson = false;
        if (edctDsprLssoNo == null && $isEmpty(lastLessonInfo) == false) {
            hasLastLesson = true;
        }
        let lesson = this.getLesson(edctDsprLssoNo!);

        if (lesson?.connKcd == eLessonType.GROUP) {
            $alert('오프라인 집합교육입니다')
            return;
        }



        this.edctDsprLssoNo = edctDsprLssoNo;
        if (this.edctDsprLssoNo) {
            // url 에 lesson No 가 이미 들어있다면
            this.learningStore.currentLesson = this.getLesson(this.edctDsprLssoNo);
        } else {
            // url 에 lesson No 가 없다면
            if (hasLastLesson) {
                this.learningStore.currentLesson = this.getLesson(lastLessonInfo!.lastLrngLssoNo as any);
            } else {
                // 첫 lesson 또는 완료 안된 lesson 을 시작점으로.
                this.learningStore.currentLesson = this.myLearnStore.chapterLesson?.courseDegreeChapter?.[0]?.lessonList?.[0]!;
            }
            this.edctDsprLssoNo = this.learningStore.currentLesson?.edctDsprLssoNo!;
        }

        if (lesson == null) {
            lesson = this.getLesson(this.edctDsprLssoNo);
        }
        const isTodayInLessonDateRange = await this.showAlertIfNotTodayInLessonDateRange(lesson!);
        if (isTodayInLessonDateRange == false) {

            return;
        }
        const router = useRouter();
        const query = {
            dutyEdctCd: dutyEdctCd,
            edctDsprNo: edctDsprNo,
            edctDsprLssoNo: this.edctDsprLssoNo
        }
        // if (isMoveOrReplace) {
        router.push({
            path: '/myLearn/studyRoom/learning',
            query: query
        });
        /*  } else {
             router.replace({
                 path: '/myLearn/studyRoom/learning',
                 query: query
             });
         } */

    }

    static refineForSequentialLearning(chapters: CourseDegreeChapterOutVo[]) {
        // console.log('refineForSequentialLearning');
        let prevLesson: CourseDegreeLessonOutVo | null = null;

        chapters.forEach((chapter, chapterIndex) => {
            chapter.lessonList?.forEach((lesson, lessonIndex) => {
                // 첫 번째 챕터의 첫 번째 레슨은 항상 수강 가능
                if (chapterIndex === 0 && lessonIndex === 0) {
                    (lesson as any).isDisabled = false;
                    prevLesson = lesson;
                    return;
                }

                if (prevLesson) {
                    // 이전 레슨이 EXTERNAL, GROUP, LIVE 타입인 경우
                    const isPrevLessonSpecialType = [
                        eLessonType.EXTERNAL,
                        eLessonType.GROUP,
                        eLessonType.LIVE
                    ].includes(prevLesson.connKcd as eLessonType);

                    // 이전 레슨이 완료 상태인지 확인
                    const isPrevLessonCompleted = prevLesson.acmlCnfgRto === 100;

                    // 이전 레슨이 disabled 상태인지 확인
                    const isPrevLessonDisabled = (prevLesson as any).isDisabled === true;

                    // isDisabled 조건 체크
                    (lesson as any).isDisabled = !(
                        // 이전 레슨이 특수 타입이고 disabled가 아닐 때
                        (isPrevLessonSpecialType && !isPrevLessonDisabled) ||
                        // 또는 이전 레슨이 완료 상태일 때
                        isPrevLessonCompleted
                    );
                }

                prevLesson = lesson;
            });
        });

        console.count('Sequential learning refined:');
    }


    moveToNextLesson() {
        const router = useRouter();
        const currentLessonNo = this.learningStore.currentLesson?.edctDsprLssoNo;

        if (currentLessonNo === undefined) {
            alert("현재 학습중인 컨텐츠가 없습니다.");
            return;
        }

        const currentChapter = this.getChapter(currentLessonNo);

        if (!currentChapter || !currentChapter.lessonList) {
            alert("현재 챕터가 없습니다.");
            return;
        }

        const currentIndex = currentChapter.lessonList.findIndex(lesson => lesson.edctDsprLssoNo === currentLessonNo);

        if (currentIndex === -1) {
            alert("현재 컨텐츠가 없습니다.");
            return;
        }

        let nextLesson = currentChapter.lessonList[currentIndex + 1];
        let nextChapter = currentChapter;

        // 다음 챕터로 이동
        if (!nextLesson) {
            const allChapters = this.myLearnStore.chapterLesson?.courseDegreeChapter || [];
            const currentChapterIndex = allChapters.findIndex(chapter => chapter.edctDsprChpaNo === currentChapter.edctDsprChpaNo);

            if (currentChapterIndex !== -1 && currentChapterIndex < allChapters.length - 1) {
                nextChapter = allChapters[currentChapterIndex + 1];
                nextLesson = nextChapter.lessonList?.[0] as any;
            }
        }

        if (nextLesson) {
            router.push({
                path: '/myLearn/studyRoom/learning',
                query: {
                    dutyEdctCd: this.getEdctCdAndNo().dutyEdctCd as string,
                    edctDsprNo: this.getEdctCdAndNo().edctDsprNo as unknown as number,
                    edctDsprLssoNo: nextLesson.edctDsprLssoNo
                }
            });

            this.learningStore.currentLesson = nextLesson;
        } else {
            // console.log("마지막 챕터다");
            this.moveToStudyRoom();
        }
    }
    sendSummary(currentAcmlPictLen: number | null, currentValue: number,) {
        if (this.learningStore.currentLesson) {

            let params: CourseDegreeLessonSummaryInVo = {
                dutyEdctCd: this.learningStore.currentLesson?.dutyEdctCd,
                edctDsprNo: this.learningStore.currentLesson?.edctDsprNo,
                edctDsprLssoNo: this.learningStore.currentLesson?.edctDsprLssoNo,
                edctDsprChpaNo: this.learningStore.currentLesson?.edctDsprChpaNo,
                currentAcmlPictLen: currentAcmlPictLen as any,
                currentValue: currentValue,
            }


            if (this.learningStore.currentLesson.connKcd == eLessonType.VOD) {
                // 얘네는 currentAcmlPictLen 을 보내야함.  
                this.learningStore.updateLessonSummary(params)
            }

            
            
            // 진도율
            const currentAcmlCnfgRto  = this.learningStore.currentLesson.acmlCnfgRto;
            if(currentAcmlCnfgRto == 100){
                this.learningStore.sendLastProgress(params);
            } else{
                // 100프로가 아닐때는,
                const learningStore = useLearningStore();
                if(parseInt(learningStore.lastLesson?.lastVl as string ?? '0') < currentValue){
                    // currentValue 가 더 크면, 진도율을 보낸다.
                    this.learningStore.sendLastProgress(params);
                }
                 
            }
            
        }
    }

}
