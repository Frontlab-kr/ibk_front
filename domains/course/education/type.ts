import type { MasterCourseListOutVo } from '~/api-client';
import type { PaginationState } from '../../../types/globaltype';
export enum eLessonType {
  VOD = '01', //     동영상

  EXAM = '02', // 시험
  REPORT = '03', // 과제

  SURVEY = '04', // 설문

  // 집합연수
  GROUP = '05',

  // LIVE 연수
  LIVE = '06',
  // 외부 연수
  EXTERNAL = '07',


}
export interface CourseDegree  {
  contents: MasterCourseListOutVo[];
  paging: PaginationState;

}
export interface CommonAuthMemberUserSearchOptions extends AuthMemberUserPageInqInVo {

}
