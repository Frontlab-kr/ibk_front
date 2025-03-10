import type { CourseNoticeOptions } from '~/domains/course/notice/type';

interface State {
  courseNoticeData: {};
}

export const useNoticeStore = defineStore("notice", {
    persist: false,
    state: (): State => ({
      courseNoticeData: {

      }
    }),

    actions: {
      async getCourseNoticeList(params: CourseNoticeOptions) {
        this.courseNoticeData = await $request().inqCourseNoticePage(params);
      },
      async saveCourseNotice(params: CourseNoticeOptions) {
        const { data } = await $request().rgsnCourseNotice(params, params.uploadFileList);
        return data;
      },
      async modifyCourseNotice(params: CourseNoticeOptions) {
        const { data } = await $request().mdfcCourseNotice(params, params.uploadFileList);
        return data;
      },
    },
    getters: {

    },
});
