import type {
  SkillCourseSearchOptions,
  SkillRoadmap, SkillRoadmapBranchStatisticsUserOptions,
  SkillRoadmapHistoryMonthlyOptions, SkillCourseData,
} from '~/domains/skill/roadmap/type';
import type {
  SklRoadmapBranchSearchInVo, SklRoadmapBranchSearchOutVo,
  SklRoadmapBranchStatisticsUserInVo,
  SklRoadmapBranchStatisticsUserOutVo,
  SklRoadmapCategoryInVo,
  SklRoadmapCategoryOutVo, SklRoadmapCourseOutVo,
  SklRoadmapHistoryMonthlyOutVo,
  SklRoadmapLevelStandardOutVo,
  SklRoadmapLicenseGradeStandardOutVo,
  SklRoadmapLicenseOutVo,
} from '~/api-client';
import Utility from '~/lib/Utility';

interface State {
  skillRoadmap: SkillRoadmap;
  skillStandard: SklRoadmapLevelStandardOutVo[];
  skillRoadmapLicense: SklRoadmapLicenseOutVo[];
  skillRoadmapLicenseStandard: SklRoadmapLicenseGradeStandardOutVo[];
  skillRoadmapHistoryMonthly: SklRoadmapHistoryMonthlyOutVo[];
  skillRoadmapHistoryStatusMonthly: SklRoadmapHistoryMonthlyOutVo[];
  skillRoadmapBranchStatisticsUserList: SklRoadmapBranchStatisticsUserOutVo[];
  skillCategoryList: SklRoadmapCategoryOutVo[];
  skillCourseData: SkillCourseData;
  skillBranchList: SklRoadmapBranchSearchOutVo[];
}

export const useSkillRoadmapStore = defineStore("skillRoadmap", {
  persist: false,
  state: (): State => ({
    skillRoadmap: {
      roadmapCategoryList: [],
      roadmapItemList: [],
    },
    skillStandard: [],
    skillRoadmapLicense: [],
    skillRoadmapLicenseStandard: [],
    skillRoadmapHistoryMonthly: [],
    skillRoadmapHistoryStatusMonthly: [],
    skillRoadmapBranchStatisticsUserList: [],
    skillCategoryList: [],
    skillCourseData: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    skillBranchList: [],
  }),

  actions: {
    async getSkillRoadmap() {
      const data = await $wrap($request().inqSklRoadmap());
      const result = $item(data);
      this.skillRoadmap = result;
    },

    async getSkillLevelStandard() {
      const data = await $wrap($request().inqSklRoadmapLevelStandard());
      const result = $item(data);
      this.skillStandard = result;
    },

    async getSkillRoadmapLicenseStandard() {
      const data = await $wrap($request().inqSklRoadmapLicenseGradeStandard());
      const result = $item(data);
      this.skillRoadmapLicenseStandard = result;
    },

    async getSkillRoadmapLicense() {
      const data = await $wrap($request().inqSklRoadmapLicenseList());
      const result = $item(data);
      this.skillRoadmapLicense = result;
    },

    async getSkillRoadmapHistory(params: SkillRoadmapHistoryMonthlyOptions) {
      const data = await $wrap($request().inqSklRoadmapHistoryMonthly(params));
      const result = $item(data);
      this.skillRoadmapHistoryMonthly = result;
    },

  async getSkillRoadmapHistoryStatus(params: SkillRoadmapHistoryMonthlyOptions) {
      const data = await $wrap($request().inqSklRoadmapHistoryStatusMonthly(params));
      const result = $item(data);
      this.skillRoadmapHistoryStatusMonthly = result;
    },

    async getSkillCategoryList(params: SklRoadmapCategoryInVo) {
      const data = await $wrap($request().inqSklRoadmapCategoryList(params));
      const result = $item(data);
      this.skillCategoryList = result;
    },

    async getSkillRoadmapBranchStatistics(params: SkillRoadmapBranchStatisticsUserOptions) {
      const data = await $wrap($request().inqSklRoadmapBranchStatisticsUserList(params));
      const result = $item(data);
      this.skillRoadmapBranchStatisticsUserList = result;
    },

    async getSkillRoadmapCourseList(params: SkillCourseSearchOptions, isFirst = true) {
      const data = await $wrap($request().inqSklRoadmapCourseList(params));
      const result = $item(data) as SkillCourseData;

      if(isFirst) {
        this.skillCourseData = result;
      } else {
        this.skillCourseData = {
          contents: this.skillCourseData.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },

    async getSkillRoadmapBranchSearch(params: SklRoadmapBranchSearchInVo) {
      const data = await $wrap($request().inqSklRoadmapBranchSearchList(params));
      this.skillBranchList = $item(data);
    }
  },

  getters: {

  },
});
