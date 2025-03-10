import type {
  CommonAttachFileOutVo,
  QuestionAnswerInVo, QuestionAnswerOutVo,
  QuestionInVo, QuestionOutVo, QuestionPageInqInVo,
  FaqPageInqInVo, FaqOutVo, CommonAttachFilehInVo,
} from '~/api-client';

export interface QuestionOptions extends QuestionPageInqInVo, QuestionInVo, QuestionOutVo, CommonAttachFilehInVo {
  uploadFileList: File[],
}

export interface AnswerOptions extends QuestionAnswerInVo, QuestionAnswerOutVo {
  answerAttachFileOutList: CommonAttachFileOutVo[],
  uploadFileList: File[],
}

export interface FaqOptions extends FaqPageInqInVo, FaqOutVo {

}
