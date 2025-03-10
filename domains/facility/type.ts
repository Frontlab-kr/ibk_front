import type {
  CommonAttachFileOutVo,
  ResortFacilityInVo, ResortFacilityOutVo, ResortFacilityRequestInVo,
  FacilityInVo, FacilityOutVo, FacilityRequestInVo,
  ResortFacilityRequestPageInqInVo, ResortFacilityRequestOutVo, FacilityRequestPageInqInVo, FacilityRequestOutVo
} from '~/api-client';
import type { DialogOptions } from '~/types/globaltype';

export interface ResortFacilityOptions extends ResortFacilityInVo, ResortFacilityOutVo {
  resortFacilityImageList: CommonAttachFileOutVo[],
  uploadFileList: File[],
}

export interface ResortFacilityRequestDialogOptions extends DialogOptions {
  visible: boolean,
  item: ResortFacilityRequestOptions | null;
}

export interface FacilityOptions extends FacilityInVo, FacilityOutVo {
  facilityImageList: CommonAttachFileOutVo[],
  uploadFileList: File[],
}

export interface FacilityRequestOptions extends FacilityRequestInVo {

}


export interface FacilityRequestDialogOptions extends DialogOptions {
  visible: boolean,
  item: FacilityRequestOptions | null;
}

export interface ResortFacilityRequestOptions extends ResortFacilityRequestInVo, ResortFacilityRequestPageInqInVo, ResortFacilityRequestOutVo {

}

export interface FacilityRequestOptions extends FacilityRequestPageInqInVo, FacilityRequestOutVo {

}
