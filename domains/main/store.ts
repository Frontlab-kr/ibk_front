import type { MainCourse, MainCourseDegree, MainModule, MainNotice, MainPopup, MainReview } from '~/domains/main/type';
import type { ApprovalMyCountOutVo, MainPopupOutVo } from '../../api-client';
import Utility from '~/lib/Utility';

interface State {
  mainModuleList: MainModule[];
  mainPopularCourseList: MainCourse[];
  mainRecentCourseList: MainCourse[];
  mainReviewList: MainReview[];
  mainNoticeList: MainNotice[];
  mainCourseDegreeList: MainCourseDegree[];
  mainPopupList: MainPopup[];
  mainMyApproval: ApprovalMyCountOutVo | null;
}

export const useMainStore = defineStore("main", {
    persist: false,
    state: (): State => ({
      mainModuleList: [],
      mainPopularCourseList: [],
      mainRecentCourseList: [],
      mainReviewList: [],
      mainNoticeList: [],
      mainCourseDegreeList: [],
      mainPopupList: [],
      mainMyApproval: null,
    }),

    actions: {
      async getMainModuleList() {
        const data = await $wrap($request().inqMainModuleList());
        this.mainModuleList = $item(data);
      },

      async getMainPopularCourseList() {
        const data = await $wrap($request().inqMainPopularCourseList());
        this.mainPopularCourseList = $item(data);
      },

      async getMainRecentCourseList() {
        const data = await $wrap($request().inqMainRecentCourseList());
        this.mainRecentCourseList = $item(data);
      },

      async getMainReviewList() {
        const data = await $wrap($request().inqMainReviewList());
        this.mainReviewList = $item(data);
      },

      async getMainNoticeList() {
        const data = await $wrap($request().inqMainNoticeList());
        this.mainNoticeList = $item(data);
      },

      async getMyCourseDegree() {
        const data =  await $wrap($request().inqIngCourseDegree({pageNo: 1, pageSize: 3}));
        const result = $item(data);
        this.mainCourseDegreeList = result?.contents || [];
      },
      async getMainPopupList() {
        const data = await $wrap($request().inqMainPopupList());
        this.mainPopupList = $item(data);
      },
      async getMyApprovalCount() {
        const data = await $wrap($request().inqApprovalMyCount());
        this.mainMyApproval = $item(data);
      }
    },

    getters: {

    },
});

