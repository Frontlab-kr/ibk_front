import type { QuestionOptions, FaqOptions } from '~/domains/support/type';

interface State {
  currentTab: string;
  questionData: {};
  faqData: {};
}

export const useSupportStore = defineStore("support", {
    persist: false,
    state: (): State => ({
      currentTab: 'question',
      questionData: {

      },
      faqData: {

      }
    }),

    actions: {
      async saveQuestion(params: QuestionOptions) {
        const { data } = await $request().rgsnQuestion(params, params.uploadFileList);
        return data;
      },
      async modifyQuestion(params: QuestionOptions) {
        const { data } = await $request().mdfcQuestion(params, params.uploadFileList);
        return data;
      },
      async getQuestionList(params: QuestionOptions) {
        this.questionData = await $request().inqQuestionPage(params);
      },
      async getFaqList(params: FaqOptions) {
        this.faqData = await $request().inqFaqPage(params);
      },
    },

    getters: {

    },
});

