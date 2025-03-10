import type {
  IdiCostCardPageInVo,
  IdiEduCostInVo,
  IdiExamCostInVo,
  IdiLicensePageInVo,
  IdiLicenseSupplyPageInVo,
} from '~/api-client';
import type { DialogOptions } from '~/types/globaltype';
export interface LicenseSearchOptions extends IdiLicensePageInVo {
}

export interface LicenseDialogOptions extends DialogOptions {
  visible: boolean,
  item: LicenseSearchOptions | null;
}

export interface LicenseSupplySearchOptions extends IdiLicenseSupplyPageInVo {
}

export interface LicenseDetailDialogOptions extends DialogOptions {
  visible: boolean,
  item: LicenseSupplySearchOptions | null;
}

export interface EduCostApplyOptions extends IdiEduCostInVo {
  uploadFileList: File[],
}

export interface ExamCostApplyOptions extends IdiExamCostInVo {
  uploadFileList: File[],
}

export interface WelfareFeeOptions extends IdiCostCardPageInVo {

}

export interface CostApplyDialogOptions extends DialogOptions {
  visible: boolean,
  eduItem: EduCostApplyOptions | null;
  examItem: ExamCostApplyOptions | null;
  employmentItem: EduCostApplyOptions | null;
}

export interface CostApplyStatusDialogOptions extends DialogOptions {
  visible: boolean
}

export interface WelfareFeeDialogOptions extends DialogOptions {
  visible: boolean,
  item: WelfareFeeOptions | null;
}
