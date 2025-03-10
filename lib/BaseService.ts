import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "~/types/globaltype";
import * as api from '../api-client';
import {
  Configuration,
} from '../api-client';

export interface AppRequestConfig extends AxiosRequestConfig {
  slientAlert?: boolean;
}
export interface ApiFactoryType extends
  api.ApiControllerApi,
  api.CommonCodeControllerApi,
  api.DefaultApi,
  api.ExamCloudControllerApi,
  api.FileControllerApi,
  api.QuestionControllerApi,
  api.QuestionAnswerControllerApi,
  api.CourseNoticeControllerApi,
  api.CourseQuestionControllerApi,
  api.CourseQuestionAnswerControllerApi,
  api.CourseLibraryControllerApi,
  api.MenuControllerApi,
  api.BoardContentsControllerApi,
  api.BoardContentsCommentControllerApi,
  api.BoardCategoryControllerApi,
  api.BoardControllerApi,
  api.FaqControllerApi,
  api.FaqCategoryControllerApi,
  api.CourseInterestControllerApi,
  api.LoginControllerApi,
  api.MainControllerApi,
  api.CourseReviewControllerApi,
  api.ResortFacilityControllerApi,
  api.ResortFacilityRequestControllerApi,
  api.FacilityControllerApi,
  api.FacilityRequestControllerApi,
  api.UserControllerApi,
  api.CourseDegreeLessonSummaryControllerApi,
  api.ApprovalControllerApi,
  api.AddressControllerApi,
  api.CommonSurveyQuestionControllerApi,
  api.IdiMileageControllerApi,
  api.SkillRoadmapControllerApi,
  api.IdiLicenseControllerApi,
  api.IdiLicenseHistoryControllerApi,
  api.IdiLicenseSupplyControllerApi,
  api.IdiEduCostControllerApi,
  api.IdiSupportDevDescControllerApi,
  api.IdiExamCostControllerApi,
  api.IdiMyCostControllerApi
{
}
export default class BaseService {
  apiFactory: ApiFactoryType;
  configuration: Configuration;

  static _instance: BaseService;
  readonly prefix: string = "/v1";
  resource: string;
  constructor(resource: string) {
    this.resource = `${this.prefix}${resource}`;

    const runtime = useRuntimeConfig();
    const baseURL = runtime.public.apiBase;
    const env = runtime.public.env;


    // local 은 nuxt.config 에 있는 proxy 를 타야 되므로 baseUrl 을 안탐.
    // Configuration 객체 생성
    this.configuration = new Configuration({
      basePath: `${baseURL}`,
      baseOptions: {
        withCredentials: true,
      }
    });

    // Authorization 헤더 설정 메서드 호출
    this.changeAuthorizationHeaderAndApiFactory();
  }
  static getIns(): BaseService {
    if (this._instance == null) {
      this._instance = new BaseService("");
    }
    return this._instance;
  }

  changeAuthorizationHeaderAndApiFactory() {
    const userKey = localStorage.getItem("userKey");
    if (userKey) {
      this.configuration.baseOptions = this.configuration.baseOptions || {};
      this.configuration.baseOptions.headers = this.configuration.baseOptions.headers || {};
      this.configuration.baseOptions.headers['Authorization'] = userKey;


    }
    // apiFactory 재초기화
    this.initApiFactory();
  }

  initApiFactory() {
    // TODO : 추후 session token 이 추가되면 여기에 추가한다.
    this.apiFactory = {
      ...api.DefaultApiFactory(this.configuration),
      ...api.FileControllerApiFactory(this.configuration),
      ...api.ExamCloudControllerApiFactory(this.configuration),
      ...api.CommonCodeControllerApiFactory(this.configuration),
      ...api.ApiControllerApiFactory(this.configuration),
      ...api.PopupControllerApiFactory(this.configuration),
      ...api.QuestionControllerApiFactory(this.configuration),
      ...api.QuestionAnswerControllerApiFactory(this.configuration),
      ...api.FaqCategoryControllerApiFactory(this.configuration),
      ...api.FaqControllerApiFactory(this.configuration),
      ...api.CourseNoticeControllerApiFactory(this.configuration),
      ...api.CourseLibraryControllerApiFactory(this.configuration),
      ...api.CourseQuestionControllerApiFactory(this.configuration),
      ...api.CourseQuestionAnswerControllerApiFactory(this.configuration),
      ...api.MenuControllerApiFactory(this.configuration),
      ...api.BoardContentsControllerApiFactory(this.configuration),
      ...api.BoardContentsCommentControllerApiFactory(this.configuration),
      ...api.BoardCategoryControllerApiFactory(this.configuration),
      ...api.BoardControllerApiFactory(this.configuration),
      ...api.FaqControllerApiFactory(this.configuration),
      ...api.FaqCategoryControllerApiFactory(this.configuration),
      ...api.CourseInterestControllerApiFactory(this.configuration),
      ...api.LoginControllerApiFactory(this.configuration),
      ...api.MainControllerApiFactory(this.configuration),
      ...api.CourseReviewControllerApiFactory(this.configuration),
      ...api.ResortFacilityControllerApiFactory(this.configuration),
      ...api.ResortFacilityRequestControllerApiFactory(this.configuration),
      ...api.FacilityControllerApiFactory(this.configuration),
      ...api.FacilityRequestControllerApiFactory(this.configuration),
      ...api.UserControllerApiFactory(this.configuration),
      ...api.ApprovalControllerApiFactory(this.configuration),
      ...api.CourseDegreeLessonSummaryControllerApiFactory(this.configuration),
      ...api.ApprovalControllerApiFactory(this.configuration),
      ...api.AddressControllerApiFactory(this.configuration),
      ...api.CommonSurveyQuestionControllerApiFactory(this.configuration),
      ...api.IdiMileageControllerApiFactory(this.configuration),
      ...api.SkillRoadmapControllerApiFactory(this.configuration),
      ...api.IdiLicenseControllerApiFactory(this.configuration),
      ...api.IdiLicenseHistoryControllerApiFactory(this.configuration),
      ...api.IdiLicenseSupplyControllerApiFactory(this.configuration),
      ...api.IdiEduCostControllerApiFactory(this.configuration),
      ...api.IdiSupportDevDescControllerApiFactory(this.configuration),
      ...api.IdiExamCostControllerApiFactory(this.configuration),
      ...api.IdiMyCostControllerApiFactory(this.configuration),
      
    }

  }
  static defaultInfinitePaging(): PagingRequest {
    return {

      pageSize: 9999,
      // sort: "desc",
      // order: "createdAt"
    }
  }
  get<T>(url: string = "", config?: AppRequestConfig) {
    return $api.get<ApiResponse<T>>(`${this.resource}${url}`, config);
  }

  post<T>(url: string = "", data?: any, config?: AppRequestConfig) {
    return $api.post<ApiResponse<T>>(`${this.resource}${url}`, data, config);
  }
  postForm<T>(url: string = "", data?: any, config?: AppRequestConfig) {
    alert("ddd");
    return $api.postForm<ApiResponse<T>>(`${this.resource}${url}`, data, config);
  }
  put<T>(url: string = "", data?: any, config?: AppRequestConfig) {
    return $api.put<ApiResponse<T>>(`${this.resource}${url}`, data, config);
  }

  delete<T>(url: string = "", config?: AppRequestConfig) {
    return $api.delete<ApiResponse<T>>(`${this.resource}${url}`, config);
  }

  // postExternal<T>(url: string = "", data?: any, config?: AxiosRequestConfig) {
  // 	return $apiExternal.post<ApiResponse<T>>(url, data, config);
  // }
  // getExternal<T>(url: string = "", data?: any) {
  // 	return $apiExternal.get<ApiResponse<T>>(url, data);
  // }
}


