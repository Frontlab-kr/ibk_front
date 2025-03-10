import type {
  BoardContentsCommentInVo,
  BoardContentsCommentOutVo, BoardContentsCommentRankOutVo,
  BoardContentsInVo,
  BoardContentsOutVo,
  BoardContentsPageInqInVo,
  BoardOutVo,
} from '~/api-client';
import type { PaginationState } from '~/types/globaltype';

export interface SocialBoard extends BoardOutVo{
  active?: boolean;
}

export interface SocialBoardContentsOptions extends BoardContentsInVo, BoardContentsOutVo {
  uploadFileList: File[]
}

export interface SocialBoardContents extends BoardContentsOutVo {

}

export interface SocialBoardContentsData {
  contents: SocialBoardContents[],
  paging: PaginationState,
}

export interface SocialBoardContentsSearchOptions extends BoardContentsPageInqInVo {

}

export interface SocialBoardContentsComments extends BoardContentsCommentOutVo {
  children?: SocialBoardContentsComments[];
  isActive?: boolean;
  isEdit?: boolean;
}

export interface SocialBoardContentsCommentOptions extends BoardContentsCommentInVo {

}

export interface SocialBoardContentsCommentRank extends BoardContentsCommentRankOutVo {

}
