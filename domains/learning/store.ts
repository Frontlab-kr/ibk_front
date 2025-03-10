import type { CourseDegreeLessonOutVo, CourseDegreeLessonSummaryInVo,  ReportOutVo,  StudyRoomAttendanceQRInVo, StudyRoomContentsInVo, StudyRoomCourseDegreeCheckInVo, StudyRoomCourseDegreeCheckOutVo, StudyRoomExamInVo,  StudyRoomExamOutVo,  StudyRoomExamOutVoWrapper,  StudyRoomExamSubmitInVo, StudyRoomLastLessonOutVo, StudyRoomProgressInVo, StudyRoomReportDetailInVo, StudyRoomReportDetailOutVo, StudyRoomReportSubmitInVo, StudyRoomSurveyInVo, StudyRoomSurveyOutVo, StudyRoomSurveySubmitInVo } from "../../api-client/api";

interface State {

  visibleMenu: boolean;
  currentLesson: CourseDegreeLessonOutVo | null;
  visibleLearnAttendanceQrCodeDialog: boolean;

  reportDetail: StudyRoomReportDetailOutVo | null;
  surveyDetail: StudyRoomSurveyOutVo | null;
  testQuestionList: StudyRoomExamOutVo[] | null;
  testRemainingTime: number;
  lastLesson: StudyRoomLastLessonOutVo | null;
  lastLessonParam: StudyRoomContentsInVo | null;
}

export const useLearningStore = defineStore("learning", {
  persist: false,
  state: (): State => ({
    visibleMenu: false,
    currentLesson: null,
    visibleLearnAttendanceQrCodeDialog: false,

    reportDetail: null,
    surveyDetail: null,
    testQuestionList: null,
    testRemainingTime: 20,
    lastLesson: null,
    lastLessonParam: null,
  }),

  actions: {
    async getLastLesson(params:StudyRoomContentsInVo):Promise<StudyRoomLastLessonOutVo>{
      this.lastLessonParam = params;
      const data = await $wrap($request().inqLastLesson(params));
      this.lastLesson = $item<StudyRoomLastLessonOutVo>(data);
      return this.lastLesson;
    },
    async sendLastProgress(params: CourseDegreeLessonSummaryInVo){
      const data = await $wrap($request().mdfcCourseDegreeLessonLastInfo(params));
    },
    async sendProgressLog(params: StudyRoomProgressInVo) {
      const data = await $wrap($request().inqProgressLog(params));
    },

    async submitReport(params: StudyRoomReportSubmitInVo, files: File[]) {
      const data = await $wrap($request().rgsnAssignmentSubmit(params, files));
    },


    async getReportDetail(params: StudyRoomReportDetailInVo) {
      const data = await $wrap($request().inqAssignmentDetail(params));
      this.reportDetail = $item(data);
    },
    async getSubmittedReport(params: StudyRoomReportSubmitInVo) {
      const data = await $wrap($request().inqAssignmentSubmit(params));
      return $item<ReportOutVo[]>(data);
    },
    async getSurveyDetail(params: StudyRoomSurveyInVo) {
      const data = await $wrap($request().inqSurvey(params));
      this.surveyDetail = $item(data);

      return this.surveyDetail;
    },
    async submitSurvey(params: Array<StudyRoomSurveySubmitInVo>) {

      const data = await $wrap($request().rgsnSurveySubmit({ inVo: params }));
    },
    async doAttendanceQR(params: StudyRoomAttendanceQRInVo) {
      const data = await $wrap($request().rgsnAttendanceQR(params));
      return data;
    },
    async updateLessonSummary(params: CourseDegreeLessonSummaryInVo) {

      const data = await $wrap($request().mdfcCourseDegreeLessonVodSummary(params));
    },
    async createLessonSummary(params: { dutyEdctCd: string, edctDsprNo: number }) {
      const data = await $wrap($request().rgsnCourseDegreeLessonSummary(params));
    },
    async getCourseStatus(params: StudyRoomCourseDegreeCheckInVo) {
      const data = await $wrap($request().checkCourseDegree(params));
      const res = $item<StudyRoomCourseDegreeCheckOutVo>(data);
      return res;
    },
    async getTest(params: StudyRoomExamInVo) {
      const data = await $wrap($request().inqExamEnter(params));
      const res = $item < StudyRoomExamOutVoWrapper>(data);
      this.testQuestionList = res.exam ?? [];
      
      return res.answer;
    },
    async submitTest(params: Array<StudyRoomExamSubmitInVo>, isLoading: boolean = false) {
      const data = await $wrap($request().rgsnExamSubmit(params), {isLoading:isLoading});
    }
  },

  getters: {

  },
});
