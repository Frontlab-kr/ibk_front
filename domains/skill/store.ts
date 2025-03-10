import type {
  IdiCostCardPageInVo,
  IdiLicenseHistoryInVo,
  IdiLicenseHistoryOutVo, IdiSupportDevDescInVo,
  IdiSupportDevDescOutVo, IdiEduCostDtlInVo, IdiEduCostAuthListInVo, IdiExamCostAuthListInVo
} from '~/api-client';
import type {
  EduCostApplyOptions,
  ExamCostApplyOptions,
  LicenseSearchOptions,
  LicenseSupplySearchOptions,
} from '~/domains/skill/type';
import Utility from '~/lib/Utility';
import type { PaginationState } from '~/types/globaltype';

interface State {
  licenseData: {};
  licenseHistoryData: {
    contents: IdiLicenseHistoryOutVo[],
  };
  licenseSupplyData: {};
  myRegisterStatusList: {
    contents: IdiSupportDevDescOutVo[],
    paging: PaginationState,
  };
  myApprovalStatusList: {
    contents: IdiSupportDevDescOutVo[],
    paging: PaginationState,
  };
  myRejectStatusList: {
    contents: IdiSupportDevDescOutVo[],
    paging: PaginationState,
  };
  eduInstitutionData: {};
  eduCostApplyDetailData: {};
  employmentCostApplyDetailData: {};
  examCostApplyDetailData: {};
  welfareFeeData: {};
  eduCostApplyStatusData: {};
  examCostApplyStatusData: {};
}

export const useSkillStore = defineStore('skill', {
  persist: false,
  state: (): State => ({
    licenseData: {
      contents: [],
    },
    licenseHistoryData: {
      contents: [],
    },
    licenseSupplyData: {
      contents: [],
    },
    myRegisterStatusList: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
    myApprovalStatusList: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
    myRejectStatusList: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
    eduInstitutionData: {
      contents: [],
    },
    eduCostApplyDetailData: {
      contents: [],
    },
    examCostApplyDetailData: {
      contents: [],
    },
    employmentCostApplyDetailData: {
      contents: [],
    },
    welfareFeeData: {
      contents: [],
    },
    eduCostApplyStatusData: {
      contents: [],
    },
    examCostApplyStatusData: {
      contents: [],
    },
  }),

  actions: {
    async fetchLicenseList(params: LicenseSearchOptions) {
      const data = await $wrap($request().inqIdiLicensePage(params));
      this.licenseData = $item(data);
    },
    async fetchIdiLicenseHistoryList(params: IdiLicenseHistoryInVo) {
      const data = await $wrap($request().inqIdiLicenseHistoryPage(params));
      this.licenseHistoryData = $item(data) as any;
    },
    async fetchIdiLicenseSupplyList(params: LicenseSupplySearchOptions) {
      const data = await $wrap($request().inqIdiLicenseSupplyCoursePage(params));
      this.licenseSupplyData = $item(data) as any;
    },
    async saveIdiEduCost(params: EduCostApplyOptions) {
      const { data } = await $wrap($request().rgsIdiEduCost(params, params.uploadFileList));
      return data;
    },
    async fetchMyRegisterStatusList(params: IdiSupportDevDescInVo) {
      const data = await $wrap($request().inqMyAppStatus(params));
      // 데이터 파싱
      const newData = $item(data) as any;
      if (params.pageNo > 1) {
        // 더 보기: 기존 데이터에 새 데이터를 병합
        this.myRegisterStatusList.contents = [
          ...this.myRegisterStatusList.contents,
          ...newData.contents,
        ];
      } else {
        // 초기 로드: 새 데이터로 대체
        this.myRegisterStatusList = newData;
      }

      // 새 데이터 반환 (필요시 컴포넌트에서 활용 가능)
      return newData;
    },
    async modifyIdiEduCost(params: EduCostApplyOptions) {
      const { data } = await $wrap($request().mdfcIdiEduCost(params, params.uploadFileList));
      return data;
    },
    async fetchEduInstitutionList(params: {}) {
      const data = await $wrap($request().inqEducationInstitutionList(params));
      this.eduInstitutionData = $item(data);
    },
    async fetchEduCostApplyDetail(params: IdiEduCostDtlInVo) {
      const data = await $wrap($request().inqIdiEduCostDtl(params));
      this.eduCostApplyDetailData = $item(data);
    },
    async fetchWelfareFeeList(params: IdiCostCardPageInVo) {
      const data = await $wrap($request().inqIdiCostCardPage(params));
      this.welfareFeeData = $item(data);
    },
    async fetchEduCostApplyStatusList(params: IdiEduCostAuthListInVo) {
      const data = await $wrap($request().inqIdiEduCostAuthList(params));
      this.eduCostApplyStatusData = $item(data);
    },
    async fetchExamCostApplyStatusList(params: IdiExamCostAuthListInVo) {
      const data = await $wrap($request().inqIdiExamCostAuthList(params));
      this.examCostApplyStatusData = $item(data);
    },
    async saveIdiExamCost(params: EduCostApplyOptions) {
      const { data } = await $wrap($request().rgsIdiExamCost(params, params.uploadFileList));
      return data;
    },
    async modifyIdiExamCost(params: EduCostApplyOptions) {
      const { data } = await $wrap($request().mdfcIdiExamCost(params, params.uploadFileList));
      return data;
    },
    async fetchExamCostApplyDetail(params: IdiEduCostDtlInVo) {
      const data = await $wrap($request().inqIdiExamCostDtl(params));
      this.examCostApplyDetailData = $item(data);
    },
    async fetchEmploymentCostApplyDetail(params: {}) {
      const data = await $wrap($request().inqIdiEduCostDtl(params));
      this.employmentCostApplyDetailData = $item(data);
    },
    async delIdiEduCost(params: EduCostApplyOptions) {
      const { data } = await $wrap($request().delIdiEduCost(params));
      return data;
    },
    async delIdiExamCost(params: ExamCostApplyOptions) {
      const { data } = await $wrap($request().delIdiExamCost(params));
      return data;
    },
    async fetchApprovalStatusList(params: IdiSupportDevDescInVo) {
      const data = await $wrap($request().inqApprovalStatus(params));

      const newData = $item(data) as any;
      if (params.pageNo > 1) {
        // 더 보기: 기존 데이터에 새 데이터를 병합
        this.myApprovalStatusList.contents = [
          ...this.myApprovalStatusList.contents,
          ...newData.contents,
        ];
      } else {
        // 초기 로드: 새 데이터로 대체
        this.myApprovalStatusList = newData;
      }

      // 새 데이터 반환 (필요시 컴포넌트에서 활용 가능)
      return newData;
    },
    async fetchRejectStatusList(params: IdiSupportDevDescInVo) {
      const data = await $wrap($request().inqRejectStatus(params));

      const newData = $item(data) as any;
      if (params.pageNo > 1) {
        // 더 보기: 기존 데이터에 새 데이터를 병합
        this.myRejectStatusList.contents = [
          ...this.myRejectStatusList.contents,
          ...newData.contents,
        ];
      } else {
        // 초기 로드: 새 데이터로 대체
        this.myRejectStatusList = newData;
      }

      // 새 데이터 반환 (필요시 컴포넌트에서 활용 가능)
      return newData;
    },
  },
  getters: {},
});
