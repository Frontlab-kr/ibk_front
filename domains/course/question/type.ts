import type {
  CourseQuestionPageInqInVo, CourseQuestionInVo, CourseQuestionOutVo, CourseBoardAtchOutVo,
  CourseQuestionAnswerInVo, CourseQuestionAnswerOutVo
} from '~/api-client';


export interface CourseQuestionOptions extends CourseQuestionPageInqInVo, CourseQuestionInVo, CourseQuestionOutVo {
  courseBoardAtchOutList: CourseBoardAtchOutVo[],
  uploadFileList: File[],
}

export interface CourseQuestionAnswerOptions extends CourseQuestionAnswerOutVo, CourseQuestionAnswerInVo {
  courseBoardAtchOutList: CourseBoardAtchOutVo[],
  uploadFileList: File[],
}
