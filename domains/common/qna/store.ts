import type { AnswerOptions, QnaOptions } from '~/domains/common/qna/type';

interface State {
  qnaData: {};
}

export const useQnaStore = defineStore("qna", {
    persist: false,
    state: (): State => ({
      qnaData: {

      }
    }),

    actions: {
      async saveQna(params: QnaOptions) {
        const { data } = await $request().rgsnQuestion(params);
        return data;
      },

/*      async modifyQna(params: QnaOptions) {
        const { data } = await $request().mdfcQuestion(params);
        return data;
      },

      async getQnaList(params: QnaOptions) {
        this.qnaData = await $request().inqQuestionPage(params);
      },

      async saveQuestionAnswer(params: AnswerOptions) {
        const { data } = await $request().rgsnQuestionAnswer(params, params.uploadFileList);
        return data;
      },

      async modifyQuestionAnswer(params: AnswerOptions) {
        const { data } = await $request().mdfcQuestionAnswer(params, params.uploadFileList);
        return data;
      },*/
    },
    getters: {

    },
});
