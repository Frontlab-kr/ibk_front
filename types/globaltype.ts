
export enum GridStatus {
  ADD = 'added',
  MOD = 'modified',
  DEL = 'deleted',
}

export enum LinkType {
  PAGE = 'P',
  WINDOW = 'L'
}

export type TrueButtonType = 'LEFT' | 'RIGHT';
export type OrderType = '' | 'ASC' | 'DESC';
export interface ApiResponseStatus {
    code: number;
    message: string;
    errorCode: string;
    errorMessage: string;
}

export interface ApiResponse<T> {

    error: string;
    response: T;
    success: boolean;
}

export interface CoreResponse {
    cretTs?: string; //등록일시
    cncrId?: string; //등록자ID
    hrdSysLastMdfcTs?: string; //최종변경일시
    hrdSysLastMdfcId?: string; //최종변경아이디
    // statusCd?: eStatusCd;
}

export interface Pagination {
	orderColumn: string | null;
	orderType: string | null;
	hasMore: boolean;
	startNo: number;

	indexPageAscStartNo: number;
	indexPageDescStartNo: number;
}

export interface PaginationData {
	paging?: Pagination;
}

export interface DialogOptions {
  visible: boolean;
}
export interface DropdownOption  {
    label: string;
    value: string | number;
};

export interface UtilityDropdownOptions {
  allLabel?: string;
  yesLabel?: string;
  noLabel?: string;
}
export interface PaginationState {
  pageSize?: number;
  pageNo?: number;
  totalCount?: number;
}

export interface Pagination extends PaginationState {
  pageFrom: number;
  orderColumn: string | null;
  orderType: string | null;
  hasMore: boolean;
  startNo: number;

  indexPageAscStartNo: number;
  indexPageDescStartNo: number;
}

export interface PaginationData {
  paging?: Pagination;
}

export interface PaginationOptions {
  pageNo: number;
  pageSize: number | string;
  orderColumn: string;
  orderType: OrderType;
}


export interface CustomConfirmOptions {
  title?: string;
  message: string;
  small?: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  trueButton?: TrueButtonType;
}

export interface RequiredField {
  name: string,
  key: string,
}

export interface CachedData {
	seq: string;
  type: string;
	lastOpenedDate?: Date;
}
