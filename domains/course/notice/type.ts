import type {
  CourseNoticePageInqInVo, CourseNoticeInVo, CourseNoticeOutVo, CourseBoardAtchOutVo, CourseNoticeAddInVo
} from '~/api-client';

export interface CourseNoticeOptions extends CourseNoticePageInqInVo, CourseNoticeInVo, CourseNoticeOutVo, CourseNoticeAddInVo {
  courseBoardAtchOutList: CourseBoardAtchOutVo[],
  uploadFileList: File[],
}

