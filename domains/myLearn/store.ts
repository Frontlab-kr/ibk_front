import type { CourseInterestContentsData, CourseInterestOptions } from '~/domains/myLearn/type';
import Utility from '~/lib/Utility';
import type {
  CourseDegreeLessonHistoryInVo,
  CourseDegreeLessonHistoryOutVo,
  CourseDegreeMyPageOutVo,
  CourseDegreeOutVo,
  CourseReviewInVo,
  CourseReviewOutVo,
  CourseReviewPageInqInVo,
  IdiMyCostOutVo,
  MyPageInVo, MySkillCategoryStatisticsDetailOutVo, MySkillCategoryStatisticsOutVo,
  MySkillInVo, MySkillOutVo,
  PageCourseDegreeMyPageOutVo,
  PageCourseLikeMyPageOutVo,
  PageCourseReviewOutVo,
  PageStudyRoomHistoryOutVo,
  StudyRoomContentsInVo,
  StudyRoomContentsOutVo,
  StudyRoomCourseDegreeCancelInVo,
  StudyRoomCourseDegreeCancelListInVo,
  StudyRoomHeaderCountOutVo,
  StudyRoomHistoryInVo,
  StudyRoomReportDetailInVo,
  StudyRoomReportDetailOutVo,
  UserPswdCheckInVo,
  UserUpdateInVo,
} from '../../api-client';
import type { PaginationState } from '../../types/globaltype';

interface State {

  studyRoomHistory: {
    contents: CourseDegreeLessonHistoryOutVo[],
    paging: PaginationState,
  } |null;
  studyRoomHeaderCount: StudyRoomHeaderCountOutVo|null;
  selectedProductForChangeDegreeDialog: CourseDegreeMyPageOutVo|null;
  visibleChangeDegreeDialog: boolean;
  courseDegreeInterest: {
    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } | null;
  courseDegreeWait: {

    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } | null;
  courseDegreeMyLesson: {

    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } |null;
  courseDegreeLike: {

    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } | null;
  courseDegreeIng: {

    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } | null;
  courseDegreeEnd: {

    contents: CourseDegreeMyPageOutVo[],
    paging: PaginationState,
  } | null;
  courseReviewList: {
    contents: CourseReviewOutVo[],
    paging: PaginationState,
  } | null;
  studyRoomCourseDegreeCancelList: CourseDegreeOutVo[]
  chapterLesson: StudyRoomContentsOutVo|null;
  courseReviewCount: {
    rvwCount: string,
    noRvwCount: string,
  } | null;
  studyRoomTab: string|null;
  myCostList: IdiMyCostOutVo[];
  mySkill: MySkillOutVo;
  mySkillCategoryStatistics: MySkillCategoryStatisticsOutVo[];
  mySkillCategoryStatisticsDetail: MySkillCategoryStatisticsDetailOutVo[];
}


export const useMyLearnStore = defineStore("myLearn", {
  persist: false,
  state: (): State => ({


    studyRoomHistory: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    studyRoomHeaderCount: null,
    selectedProductForChangeDegreeDialog: null,
    visibleChangeDegreeDialog: false,
    courseDegreeInterest: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseDegreeWait: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseDegreeMyLesson: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseDegreeLike: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseDegreeIng: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseDegreeEnd: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    chapterLesson: null,
    studyRoomCourseDegreeCancelList: [],
    courseReviewList: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    courseReviewCount: {
      rvwCount: "",
      noRvwCount: ""
    },
    studyRoomTab:null,
    myCostList : [],
    mySkill: undefined,
    mySkillCategoryStatisticsDetail: [],
    mySkillCategoryStatistics: [],
  }),

  actions: {

    /* async getStudyRoomHistory(params: StudyRoomHistoryInVo) {
      const data = await $wrap($request().inqHistoryCourseDegree(params));
      this.studyRoomHistory = $item(data);
    }, */
    async getStudyRoomHistory(params: CourseDegreeLessonHistoryInVo) {
      const data = await $wrap($request().inqCourseDegreeLessonHistory(params));
      this.studyRoomHistory = $item(data);
    },

    async getStudyRoomCourseDegreeCancelList(params: StudyRoomCourseDegreeCancelListInVo) {
      const data = await $wrap($request().inqCourseDegreeCancelList(params));
      this.studyRoomCourseDegreeCancelList = $item(data);
    },

    async getStudyRoomHeaderCount() {
      const data = await $wrap($request().inqMyPageHeader({}));
      this.studyRoomHeaderCount = $item(data);
    },

    async getCourseInterestList(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeInterest!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqCourseInterestPage(this.courseDegreeInterest!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeInterest = result;
      } else {
        this.courseDegreeInterest = {
          contents: this.courseDegreeInterest!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getCourseDegreeWait(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeWait!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqWaitCourseDegree(this.courseDegreeWait!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeWait = result;
      } else {
        this.courseDegreeWait = {
          contents: this.courseDegreeWait!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getCourseDegreeMyLesson(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeMyLesson!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqMyLessonCourseDegree(this.courseDegreeMyLesson!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeMyLesson = result;
      } else {
        this.courseDegreeMyLesson = {
          contents: this.courseDegreeMyLesson!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getCourseDegreelike(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeLike!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqLikeCourseDegree(this.courseDegreeLike!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeLike = result;
      } else {
        this.courseDegreeLike = {
          contents: this.courseDegreeLike!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getCourseDegreeIng(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeIng!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqIngCourseDegree(this.courseDegreeIng!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeIng = result;
      } else {
        this.courseDegreeIng = {
          contents: this.courseDegreeIng!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getCourseDegreeEnd(isFirst = true) {
      if (!isFirst) {
        this.courseDegreeEnd!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqEndCourseDegree(this.courseDegreeEnd!.paging));
      const result = $item(data) as CourseInterestContentsData;
      if (isFirst) {
        this.courseDegreeEnd = result;
      } else {
        this.courseDegreeEnd = {
          contents: this.courseDegreeEnd!.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },
    async getCourseReviewPage(params: CourseReviewPageInqInVo, isFirst = true) {
      if (!isFirst) {
        this.courseReviewList!.paging.pageNo!++;
      }
      const data = await $wrap($request().inqCourseReviewPage(params));
      const result = $item(data) as any;
      if (isFirst) {
        this.courseReviewList = result;
      } else {
        this.courseReviewList = {
          contents: this.courseReviewList!.contents.concat(result.contents),
          paging: result.paging
        }
      }

      const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);

      return ret;
    },
    async getChapterLesson(params: StudyRoomContentsInVo) {
      const data = await $wrap($request().inqChapterLesson(params));
      this.chapterLesson = $item(data);
      if($isLocal()){
        // this.chapterLesson.courseDegreeChapter[0].lessonList[0].acmlCnfgRto = 33;
      }
    },

    async changeDegree(params: StudyRoomCourseDegreeCancelInVo) {
      const data = await $wrap($request().mdfcCourseDegreeCancel(params));
    },

    async getCourseReviewCount(params: CourseReviewInVo) {
      const data = await $wrap($request().inqCourseReviewCount(params));
      const result = $item(data) as any;
      this.courseReviewCount = {
        rvwCount: result.rvwCount,
        noRvwCount: result.noRvwCount
      }
    },

    async saveCourseReview(params: CourseReviewInVo) {
      const { data } = await $wrap($request().rgsnCourseReview(params));
      return data;
    },
    async modCourseReview(params: CourseReviewInVo) {
      const { data } = await $wrap($request().mdfcCourseReview(params));
      return data;
    },
    async modUserInfo(params: UserUpdateInVo) {
      const { data } = await $wrap($request().mdfcUserInfo(params));
      return data;
    },
    async getUserInfoDetail(){
      const { data } = await $wrap($request().inqUserInfoDtl());
      return data.response;
    },
    async getMyCostList(){
      const data  = await $wrap($request().inqIdiMyCostList());
      this.myCostList = $item(data);
    },
    async getMySkill() {
      const data = await $wrap($request().inqMySkill());
      this.mySkill = $item(data);
    },
    async saveMySkill(params: MySkillInVo) {
      const { data } = await $wrap($request().rgsnMySkill(params));
      return data;
    },
    async getMySkillCategoryStatistics() {
      const data = await $wrap($request().inqMySkillCategoryStatistics());
      this.mySkillCategoryStatistics = $item(data);
    },
    async getMySkillCategoryStatisticsDetail(skllClsfVl: string) {
      const data = await $wrap($request().inqMySkillCategoryStatisticsDetail({ skllClsfVl }));
      this.mySkillCategoryStatisticsDetail = $item(data);
    },
  },

  getters: {

  },
});
