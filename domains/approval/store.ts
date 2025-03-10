import type { ApprovalPageInVo, ApprovalMyPageInVo, ApprovalLinStateInVo, ApprovalDetaillnVo } from '~/api-client';

interface State {
  approvalList : {} | null;
  approvalMyCount: {} | null;
  approvalDetail: {} | null
}

export const useApprovalStore = defineStore("approval", {
  persist: false,
  state: (): State => ({
    approvalList: {},
    approvalMyCount: {},
    approvalDetail: {}
  }),
  actions: {
    async getPageApprovalList(params: ApprovalPageInVo){
      this.approvalList = await $request().inqPageApproval(params);
    },
    async getApprovalMyCount(){
      this.approvalMyCount = await $request().inqApprovalMyCount();
    },
    async getMyPageApprovalList(params: ApprovalMyPageInVo){
      this.approvalList = await $request().inqMyPageApproval(params);
    },
    async saveApprovalLineStates(params: Array<ApprovalLinStateInVo>){
      const {data} = await $wrap($request().mdfcApprovalLineStates(params));
      return data;
    },
    async getApprovalDtl(parmas: ApprovalDetaillnVo){
      this.approvalDetail = await $request().inqApprovalDtl(parmas);
    }
  },
  getters: {},
});
