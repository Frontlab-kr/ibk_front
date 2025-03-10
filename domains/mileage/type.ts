import type { DialogOptions } from '~/types/globaltype';
import type { IdiMileageGiftRequestInVo } from '~/api-client';

export interface MileageGiftOptions extends IdiMileageGiftRequestInVo {

}

export interface MileageApplyDialogOptions extends DialogOptions {
  visible: boolean,
  item: MileageGiftOptions | null;
}
