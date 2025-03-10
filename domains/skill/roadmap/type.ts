import type {
  SklRoadmapBranchStatisticsUserInVo, SklRoadmapCourseInVo, SklRoadmapCourseOutVo,
  SklRoadmapHistoryMonthlyInVo,
  SklRoadmapItemOutVo,
  SklRoadmapOutVo,
} from '~/api-client';
import type { DialogOptions, PaginationState } from '~/types/globaltype';

export interface SkillRoadmap extends SklRoadmapOutVo {

}

export interface SkillRoadmapHistoryMonthlyOptions extends SklRoadmapHistoryMonthlyInVo {

}

export interface SkillRoadmapBranchStatisticsUserOptions extends SklRoadmapBranchStatisticsUserInVo {

}

export interface SkillRoadmapItem extends SklRoadmapItemOutVo {
  active?: boolean;
}

export interface SkillCourseListDialogOptions extends DialogOptions {
  skllCd: string;
  skllClsfPathNm: string;
}

export interface SkillCourseSearchOptions extends SklRoadmapCourseInVo {

}

export interface SkillCourseData {
  contents: SklRoadmapCourseOutVo[],
  paging: PaginationState,
}

export interface SkillBranchSearchDialogOptions extends DialogOptions {
  deptDsncVl: string;
  deptDsncNm: string;
}
