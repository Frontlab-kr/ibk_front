import type { CoreResponse, DialogOptions } from '~/types/globaltype';
import type {
  BoardInVo,
  BoardContentsPageInqInVo,
  BoardContentsInVo,
  BoardContentsOutVo,
  BoardContentsCommentOutVo,
  BoardContentsCommentInVo,
  BoardContentsCommentPageInqInVo, CommonAttachFileOutVo,
} from '~/api-client';

export interface Board extends CoreResponse{
  blbrId: number;
  cybrTriuBlbrKcd: string;
  blbrNm: string;
  lkngUsayClsfVl: string;
  wrtnUsayClsfVl: string;
  rpcmUsayClsfVl: string;
  stsfUseYn: string;
  rpcmUseYn: string;
  apndUseYn: string;
  ctgyUseYn: string;
  cretTs: string;
  useyn: string;
  cncrId: string;
  categoryList: BoardCategoryInVoList[];
}

export interface BoardCategoryInVoList extends CoreResponse{
  blbrId: number;
  blbrCtgyId: number;
  ctgyNm: string;
  useYn: string;
  ctgyStatusType: string;
}

export interface BoardData {
  items: Board[];
}

export interface BoardContents extends CoreResponse{
  blbrId: number;
  blbrPtngId: number;
  blbrCtgyId: number;
  ptngNm: string;
  ptngCon: string;
  inqCnt: number;
  useYn: string;
  cncrId: string;
  cretTs: string;
  hrdSysLastMdfcId: string;
}

export interface BoardContentsData {
  items: BoardContents[];
}

export interface BoardOptions extends BoardInVo {

}

export interface BoardContentsOptions extends BoardContentsInVo {
  commonAttachFileOutList: CommonAttachFileOutVo[],
  uploadFileList: File[],
}

export interface BoardContentsOutVoOptions extends BoardContentsOutVo {

}

export interface BoardContentsCommentOptions extends BoardContentsCommentOutVo, BoardContentsCommentInVo, BoardContentsCommentPageInqInVo {

}

export interface BoardPageOptions extends BoardContentsPageInqInVo {

}

export interface BoardDialogOptions extends DialogOptions {
  item: Board | null;
}


