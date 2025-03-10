import type {
  CommonCodeData,
  CommonCodeDetailData,
  CommonCodeDetailOptions,
  CommonCodeOptions,
} from '~/domains/common/system/type';

interface State {
  commonCodeData: CommonCodeData;
  commonCodeDetailData: CommonCodeDetailData;
}

export const useCommonCodeStore = defineStore("code", {
    persist: false,
    state: (): State => ({
      commonCodeData: {
        items: []
      },
      commonCodeDetailData: {
        items: []
      }
    }),

    actions: {
      async getCommonCodeList() {
        const { data }  = await $request().inqCommonCodeList({});
        this.commonCodeData.items = data.response;
      },

      async getCommonCodeDetailList(cmcdId: string) {
        const { data }  = await $request().inqCommonCodeDetailList({ cmcdId });
        this.commonCodeDetailData.items = data.response;
      },

      async saveCommonCode(params: CommonCodeOptions) {
        const { data } = await $request().rgsnCommonCode(params);
        return data;
      },

      async modifyCommonCode(params: CommonCodeOptions) {
        const { data } = await $request().mdfcCommonCode(params);
        return data;
      },

      async saveCommonCodeDetail(params: CommonCodeDetailOptions) {
        const { data } = await $request().rgsnCommonCodeDetail(params);
        return data;
      },

      async modifyCommonCodeDetail(params: CommonCodeDetailOptions) {
        const { data } = await $request().mdfcCommonCodeDetail(params);
        return data;
      }


    },
    getters: {

    },
});
