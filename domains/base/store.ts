import BaseService from "@/lib/BaseService";
import type { CommonCodeAll, Menu } from '~/domains/base/type';


interface State {
  isLoading: boolean;
  commonCodeList: CommonCodeAll[];
  topMenuList: Menu[];
  alertDialog: {
    visible: boolean;
    message: string;
    alertDialogCallback: () => void;
  };
  topSearchHistoryList: string[];
  lastRequestTime: Date | null;
}

export const useBaseStore = defineStore("base", {
  persist: {

    storage: localStorage,
  },
  state: (): State => ({
    isLoading: false,
    commonCodeList : [],
    topMenuList: [],
    lastRequestTime: null,
    alertDialog: {
      visible: false,
      message: '',
      alertDialogCallback: () => {},
    },
    topSearchHistoryList: [],
  }),
  actions: {
    async getTopMenuList() {
      const data  = await $wrap($request().inqMenuAll({menuLvlNo: 1, screTcd: 'U', useYn: 'Y', authModeYn: 'Y'}));
      this.topMenuList = $item(data);
    },
    async getCommonCodeList() {
      const data  = await $wrap($request().inqCommonCodeListAll());
      this.commonCodeList = $item(data);
    },
  },
  getters: {
    getTestCode({commonCodeList}) {
      return commonCodeList.filter((v: CommonCodeAll) => v.cmcdId === 'TEST01');
    },

  }
});
