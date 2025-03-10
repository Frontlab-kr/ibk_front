import type { CommonAuthMemberUserSearchOptions, CourseDegree } from './type';
import Utility from '../../../lib/Utility';
import type {
  AddressOutVo,
  AddressPageInVo,
  ApprovalLinlnVo,
  ApprovalLinOutVo,
  AuthMemberUserPageInqInVo,
  CourseApplicationInVo,
  MasterCourseDetailInVo,
  MasterCourseDisplayCategoryOutVo,
  MasterCourseListInVo,
  MasterCourseListOutVo,
  PreviousAddressOutVo,
} from '../../../api-client';
import type { PaginationState } from '../../../types/globaltype';
interface State {
  searchParams: MasterCourseListInVo;
  list: CourseDegree,
  detail: MasterCourseListOutVo,
  categoryList: MasterCourseDisplayCategoryOutVo[],
  filterKeyword : string[],

  activeCategories: string[],
  activeKeywords: string[],
  filterActive: boolean,
  toggleStates: boolean[],
  approvalLineList: ApprovalLinOutVo[],
  commonAuthMemberUserData: {
    contents: [],
    paging: PaginationState ,
  } ,
  addressList: {
    contents: AddressOutVo[],
    paging: PaginationState,
  }
}

export const useEducationStore = defineStore("education", {
  persist: {

    storage: localStorage,
  },
  state: (): State => ({
    searchParams: {},
    list: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
    detail: {},
    categoryList: [],
    filterKeyword: [],
    activeCategories: [],
    activeKeywords: [],
    filterActive: false,
    toggleStates: [],
    approvalLineList: [],
    commonAuthMemberUserData: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
    addressList: {
      contents: [],
      paging: Utility.defaultPaging(),
    },
  }),

  actions: {

    async getList(params: MasterCourseListInVo, isLoading = true) {

      const data = await $wrap($request().rgsnMasterCourseList(params), { isLoading });
      this.list = $item<CourseDegree>(data);
    },
    async getDetail(params: { dutyEdctCd: string }, isLoading = true) {
      const data = await $wrap($request().rgsnMasterCourseDetail(params), { isLoading });
      this.detail = $item<MasterCourseListOutVo>(data);
    },
    async getCategoryList(isLoading = true) {
      const data = await $wrap($request().inqMasterCourseDisplayCategoryList(), { isLoading });
      this.categoryList = $item<MasterCourseDisplayCategoryOutVo[]>(data);
    },
    async getFilterKeyword(isLoading = true) {
      const data = await $wrap($request().rgsnMasterCourseFilterKeyword(), { isLoading });
      this.filterKeyword = $item<string[]>(data);
      // 중복 제거
      this.filterKeyword = [...new Set(this.filterKeyword)];
    },
    async getElse(isLoading = true) {
      const aPromise = []
      aPromise.push(this.getFilterKeyword(isLoading));
      aPromise.push(this.getCategoryList(isLoading));
      const data = await Promise.all(aPromise);

    },
    // 수강신청
    async requestCourse(params: CourseApplicationInVo, attachments: File[], isLoading = true) {
      const data = await $wrap($request().rgsnCourseApplication(params, attachments), { isLoading });
    },
    async toggleLike(params: { dutyEdctCd: string }, isLoading = false) {
      const data = await $wrap($request().rgsnMasterCourseFavorite(params), { isLoading });
      const index = this.list.contents.findIndex((item) => item.dutyEdctCd === params.dutyEdctCd);
      if (index !== -1) {
        let isFavoriteYnOriginal = this.list.contents[index].isFavoriteYn;
        if ($isEmpty(isFavoriteYnOriginal)) {
          isFavoriteYnOriginal = "N";
        }
        this.list.contents[index].isFavoriteYn = (isFavoriteYnOriginal == "Y" ? "N" : "Y");
      }
    },

    async getApprovalLineList(params: ApprovalLinlnVo, isLoading = true) {
      const data = await $wrap($request().inqApprovalLineList(params), { isLoading });
      this.approvalLineList = $item<ApprovalLinOutVo[]>(data);
    },
    async fetchAuthMemberUserList(params: AuthMemberUserPageInqInVo) {
      const data = await $wrap($request().inqAuthMemberUserPage(params));
      const result = $item(data);

      this.commonAuthMemberUserData = result as any;
      return { data };
    },
    async getAddressList(params: AddressPageInVo, isLoading = true) {
      const data = await $wrap($request().inqAddress(params), { isLoading });
      const result = $item(data);
      this.addressList = result as any;
    },
    async getPreviousAddress(): Promise<PreviousAddressOutVo | null> {
      const data = await $wrap($request().inqPreviousAddress());
      return $item(data);
    }
  },

  getters: {

  },
});
