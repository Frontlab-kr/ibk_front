import type {
  CourseLibraryPageInqInVo,
  CourseLibraryInVo,
  CourseLibraryOutVo,
  CourseLibraryAddInVo,
  CourseBoardAtchOutVo,
} from '~/api-client';

export interface CourseLibraryOptions extends CourseLibraryPageInqInVo, CourseLibraryInVo, CourseLibraryOutVo, CourseLibraryAddInVo {
  courseBoardAtchOutList: CourseBoardAtchOutVo[],
  uploadFileList: File[],
}
