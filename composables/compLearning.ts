import { ref, computed } from 'vue';
import { useMyLearnStore } from '~/domains/myLearn/store';
import { useLearningStore } from '~/domains/learning/store';
import ManagerLearning, { eLessonStatus } from '~/lib/ManagerLearning';
import type { CourseDegreeChapterOutVo, CourseDegreeLessonOutVo } from '~/api-client';
import { eLessonType } from '~/domains/course/education/type';
import Utility from '../lib/Utility';

export function useCompLearning() {
  const myLearnStore = useMyLearnStore();
  const learningStore = useLearningStore();




  const contentLabels = {
    vodCnt: '콘텐츠',
    examCnt: '평가',
    surveyCnt: '설문',
    reportCnt: '과제',
    groupCnt: '그룹',
    externalCnt: '외부',
    liveCnt: '라이브'
  };

  const contentUnits = {
    vodCnt: '개',
    examCnt: '회',
    surveyCnt: '회',
    reportCnt: '개',
    groupCnt: '개',
    externalCnt: '개',
    liveCnt: '개'
  };
  const contentCounts = computed(() => {
    const info = myLearnStore.chapterLesson?.courseDegreeInfo;
    if (!info) return {};
    return {
      vodCnt: info.vodCnt || 0,
      examCnt: info.examCnt || 0,
      surveyCnt: info.surveyCnt || 0,
      reportCnt: info.reportCnt || 0,
      groupCnt: info.groupCnt || 0,
      externalCnt: info.externalCnt || 0,
      liveCnt: info.liveCnt || 0
    };
  });

  const completedLessonsCount = computed(() => {
    return myLearnStore.chapterLesson?.courseDegreeChapter?.reduce((acc, chapter) => {
      return acc + (chapter.lessonList?.filter(lesson => ManagerLearning.isCompletedLesson(lesson))?.length || 0);
    }, 0) || 0;
  });

  const totalLessonsCount = computed(() => {
    return myLearnStore.chapterLesson?.courseDegreeChapter?.reduce((acc, chapter) => {
      return acc + (chapter.lessonList?.length ?? 0)
    }, 0) || 0;
  });
  function getLessonIconActive(connKcd: string) {
    return `${getLessonIcon(connKcd)}-on`;
  }

  const getLessonIcon = (connKcd: string) => {
    const iconMap = {
      [eLessonType.VOD]: 'ibk-icon-lectureroom-camera',
      [eLessonType.EXTERNAL]: 'ibk-icon-lectureroom-tv',
      [eLessonType.LIVE]: 'ibk-icon-lectureroom-play',
      [eLessonType.GROUP]: 'ibk-icon-lectureroom-intersection',
      [eLessonType.REPORT]: 'ibk-icon-lectureroom-book',
      [eLessonType.EXAM]: 'ibk-icon-lectureroom-document',
      [eLessonType.SURVEY]: 'ibk-icon-lectureroom-chat'
    };
    return iconMap[connKcd as eLessonType] || 'ibk-icon-lectureroom-camera';
  };

  const getLessonDuration = (lesson: CourseDegreeLessonOutVo) => {
    if ([eLessonType.REPORT, eLessonType.EXAM, eLessonType.SURVEY].includes(lesson.connKcd as eLessonType)) {
      return `${formatDate(lesson.lssoSttgTs!)} - ${formatDate(lesson.lssoFnshTs!)}`;
    } else if (lesson.connKcd == eLessonType.VOD) {
      return `${((lesson.vod?.connLen || 0) / 60).toFixed(1)} 분`;
    }
    return `${lesson.lcteTim ? lesson.lcteTim : 0} 분`;
  };

  const getLessonStatusStyle = (lesson: CourseDegreeLessonOutVo) => {
    const styleMap = {
      [eLessonStatus.BEFORE]: { background: '#e4f2ff', color: '#234eaa' },
      [eLessonStatus.PROGRESS]: { background: '#308af2', color: '#ffffff' },
      [eLessonStatus.COMPLETED]: { background: '#f3f4f7', color: '#5a5e6c' },
      [eLessonStatus.SUBMITTED]: { background: '#f3f4f7', color: '#5a5e6c' },
      [eLessonStatus.NOT_SUBMITTED]: { background: '#fae1df', color: '#ee473d' },
      [eLessonStatus.UNKNOWN]: { background: '#f3f4f7', color: '#5a5e6c' }
    };

    // 진도율이 없거나 0인 경우의 특수 처리
    if (lesson.acmlCnfgRto === null || lesson.acmlCnfgRto === 0) {
      if ([eLessonType.EXAM, eLessonType.SURVEY, eLessonType.REPORT].includes(lesson.connKcd as eLessonType)) {
        return styleMap[eLessonStatus.NOT_SUBMITTED];  // 미제출 스타일
      }
      // return styleMap[eLessonStatus.BEFORE];  // 진행전 스타일
    }

    const status = ManagerLearning.getLessonStatus(lesson);

    return styleMap[status]
  };


  function openQRCodeModal(lesson: CourseDegreeLessonOutVo) {

    learningStore.currentLesson = lesson;
    learningStore.visibleLearnAttendanceQrCodeDialog = true;

  }


  function formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  function getLessonInfo(lesson: CourseDegreeLessonOutVo) {
    switch (lesson.connKcd) {

      case eLessonType.EXAM:
      case eLessonType.REPORT:
        const str = getLessonDuration(lesson);
        if (lesson.courseResult == null) {
          return str;
        }
        return `${str} ${lesson.courseResult?.acqmScr || 0}점`;
      case eLessonType.VOD:
      case eLessonType.SURVEY:
      case eLessonType.GROUP:
      case eLessonType.EXTERNAL:
        return getLessonDuration(lesson)
      default:
        return '';
    }
  }
  function isActiveLesson(lesson: CourseDegreeLessonOutVo) {
    return lesson.edctDsprLssoNo === learningStore.currentLesson?.edctDsprLssoNo;
  }

  function getLessonStatusClass(lesson: CourseDegreeLessonOutVo) {

    return ManagerLearning.getLessonStatus(lesson) == eLessonStatus.COMPLETED ? 'text-primary-600' : 'text-red-500';
  }


  function moveToNextLesson() {
    if (learningStore.currentLesson == null) {
      alert('현재 학습중인 컨텐츠가 없습니다.');
    } else {
      ManagerLearning.getIns().moveToNextLesson();
    }
  }



  async function readyToStartLesson(edctDsprNo: number, dutyEdctCd: string): Promise<boolean> {
    if (edctDsprNo == undefined || dutyEdctCd == undefined) {
      await $alert('차수 또는 직무교육코드가 없습니다.');
      return false;
    } else {
      // 얘가 호출되고나서 반드시 Lesson 목차를 가져와야됨.
      const status = await learningStore.getCourseStatus(
        {
          dutyEdctCd: dutyEdctCd,
          edctDsprNo: edctDsprNo,
        }
      )

      let isMyCourse = status.courseDegreeCheck == 'Y';

      if (isMyCourse) {
        // 수강중. do nothing
        try {
          await learningStore.createLessonSummary({
            dutyEdctCd: dutyEdctCd,
            edctDsprNo: edctDsprNo,
          })
        } catch (e) {
          console.error(e);
          Utility.moveBack();
        }
      } else {
        /* if($isLocal()){

        }
        else{ */
        $alert('수강중이 아닙니다.');

        window.history.back();

        return false;
        // }
      }

      await myLearnStore.getChapterLesson({
        edctDsprNo: edctDsprNo,
        dutyEdctCd: dutyEdctCd,
      });


      // S 가 순차
      if (ManagerLearning.isSequencialLearning(myLearnStore.chapterLesson?.courseDegree)) {
        ManagerLearning.refineForSequentialLearning(myLearnStore.chapterLesson?.courseDegreeChapter || []);
      }

      return isMyCourse;
    }
  }


  function onLessonMounted() {
    // console.log('onLessonMounted', learningStore.currentLesson);

    let currentAcmlPictLen = null;
    if (learningStore.currentLesson?.connKcd == eLessonType.LIVE) {
      currentAcmlPictLen = 100;
    }

    if (learningStore.currentLesson?.connKcd == eLessonType.VOD) {
    } else {
      ManagerLearning.getIns().sendSummary(currentAcmlPictLen, 100);
    }
  }
  function onLearningExit() {
    // console.log('onLearningExit');
    learningStore.currentLesson = null;
    learningStore.lastLesson = null;
    learningStore.lastLessonParam = null;
  }
  function onLearningEntered() {
    // console.log('onLearningEntered');
  }
  return {
    completedLessonsCount,
    totalLessonsCount,
    getLessonIcon,
    getLessonDuration,
    getLessonStatusStyle,
    getLessonIconActive,
    formatDate,
    openQRCodeModal,
    contentLabels,
    contentUnits,
    contentCounts,
    getLessonInfo,
    isActiveLesson,
    getLessonStatusClass,
    getLessonStatus: ManagerLearning.getLessonStatus,
    moveToNextLesson,
    readyToStartLesson,
    onLessonMounted,
    onLearningExit,
    onLearningEntered,
  };
}
