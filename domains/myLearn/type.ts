import type {
  CourseInterestPageInqInVo,
  CourseInterestOutVo,
  CourseReviewPageInqInVo,
  CourseReviewOutVo,
  CourseReviewInVo,
} from '~/api-client';
import type { PaginationState } from '~/types/globaltype';

export interface CourseInterestOptions extends CourseInterestPageInqInVo, CourseInterestOutVo {
}

export interface CourseInterestContents extends CourseInterestOutVo {

}

export interface CourseInterestContentsData {
  contents: CourseInterestContents[],
  paging: PaginationState,
}

export interface CourseReviewContentsData {
  contents: CourseReviewContents[],
  paging: CourseReviewPageOptions,
}

export interface CourseReviewContents extends CourseReviewOutVo {

}

export interface CourseReviewPageOptions extends CourseReviewPageInqInVo {

}
export interface CourseReviewOptions extends CourseReviewInVo {

}

export interface SkillCategory {
  vl: string;
  nm: string;
}
