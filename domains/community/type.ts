import type {
  BoardContentsCommentInVo, BoardContentsCommentPageInqInVo,
  BoardContentsCommentOutVo, BoardContentsCommentRankOutVo,
  BoardContentsInVo,
  BoardContentsOutVo,
  BoardContentsPageInqInVo,
  BoardOutVo,
  CommonSurveyQuestionOutVo, CommonSurveyQuestionInVo, CommonSurveyQuestionPageInqInVo, CommonSurveyQuestionDetailOutVo
} from '~/api-client';
import type { DialogOptions, PaginationState } from '~/types/globaltype';

export interface CommunityBoard extends BoardOutVo{
  active?: boolean;
}

export interface CommunityBoardContentsOptions extends BoardContentsInVo {

}

export interface CommunityBoardContents extends BoardContentsOutVo, BoardContentsInVo {

}

export interface CommunityBoardContentsData {
  contents: CommunityBoardContents[],
  paging: PaginationState,
}

export interface CommunityBoardContentsSearchOptions extends BoardContentsPageInqInVo {

}

export interface CommunityBoardContentsComments extends BoardContentsCommentOutVo {
  children?: CommunityBoardContentsComments[];
  isActive?: boolean;
  isEdit?: boolean;
}

export interface CommunityBoardContentsCommentOptions extends BoardContentsCommentInVo {

}

export interface CommunitySurveyContents extends CommonSurveyQuestionOutVo, CommonSurveyQuestionInVo, CommonSurveyQuestionDetailOutVo {

}

export interface CommunitySurveyData {
  contents: CommunitySurveyContents[],
  paging: PaginationState,
}

export interface CommunitySurveySearchOptions extends CommonSurveyQuestionPageInqInVo {

}

export interface CommunitySurveyDialogOptions extends DialogOptions {
  visible: boolean,
  item: CommunitySurveyContents | null;
}

export interface CommunitySurveyPreviewSearchOptions extends CommonSurveyQuestionInVo {

}

export interface CommunitySurveyPreviewContents extends CommonSurveyQuestionDetailOutVo {

}

export interface CommunitySurveyPreviewData {
  contents: CommunitySurveyPreviewContents[]
}
