import type { CourseLibraryOptions } from '~/domains/course/library/type';
interface State {
  courseLibraryData: {};
}

export const useLibraryStore = defineStore("library", {
  persist: false,
  state: (): State => ({
    courseLibraryData: {

    }
  }),

  actions: {
    async getCourseLibraryList(params: CourseLibraryOptions) {
      this.courseLibraryData = await $request().inqCourseLibraryPage(params);
    },
    async saveCourseLibrary(params: CourseLibraryOptions) {
      const { data } = await $request().rgsnCourseLibrary(params, params.uploadFileList);
      return data;
    },
    async modifyCourseLibrary(params: CourseLibraryOptions) {
      const { data } = await $request().mdfcCourseLibrary(params, params.uploadFileList);
      return data;
    },
  },
  getters: {

  },
});
