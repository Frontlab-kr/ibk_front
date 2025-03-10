import type { CourseQuestionOptions, CourseQuestionAnswerOptions } from '~/domains/course/question/type';

interface State {
  courseQuestionData: {};
}

export const useQuestionStore = defineStore("question", {
    persist: false,
    state: (): State => ({
      courseQuestionData: {

      }
    }),

    actions: {
      async saveCourseQuestion(params: CourseQuestionOptions) {
        const { data } = await $request().rgsnCourseQuestion(params, params.uploadFileList);
        return data;
      },
      async modifyCourseQuestion(params: CourseQuestionOptions) {
        const { data } = await $request().mdfcCourseQuestion(params, params.uploadFileList);
        return data;
      },
      async getCourseQuestionList(params: CourseQuestionOptions) {
        this.courseQuestionData = await $request().inqCourseQuestionPage(params);
      },
      async saveCourseQuestionAnswer(params: CourseQuestionOptions) {
        const { data } = await $request().rgsnCourseQuestionAnswer(params, params.uploadFileList);
        return data;
      },
      async modifyCourseQuestionAnswer(params: CourseQuestionAnswerOptions) {
        const { data } = await $request().mdfcCourseQuestionAnswer(params, params.uploadFileList);
        return data;
      },
    },
    getters: {

    },
});
