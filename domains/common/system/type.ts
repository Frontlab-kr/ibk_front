import type { CoreResponse, DialogOptions } from '~/types/globaltype';
import type { CommonCodeDetailInVo, CommonCodeInVo } from '~/api-client';

export interface CommonCode extends CoreResponse{
  cmcdId: string;
  comCdNm: string;
  comCdDescCon: string;
  useYn: string;
}

export interface CommonCodeData {
  items: CommonCode[];
}

export interface CommonCodeDetail extends CoreResponse{
  cmcdId: string;
  cmcdVl: string;
  cmcdVlNm: string;
  comCdDescCon: string;
  comCdSqc: number;
  useYn: string;
}

export interface CommonCodeDetailData {
  items: CommonCodeDetail[];
}

export interface CommonCodeOptions extends CommonCodeInVo {

}

export interface CommonCodeDetailOptions extends CommonCodeDetailInVo {

}

export interface CommonCodeDialogOptions extends DialogOptions {
  item: CommonCode | null;
}

export interface CommonCodeDetailDialogOptions extends DialogOptions {
  item: CommonCodeDetail | null;
  cmcdId: string;
}

