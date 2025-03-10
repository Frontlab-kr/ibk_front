import type {
  CommonAttachFileOutVo,
  QuestionAnswerInVo, QuestionAnswerOutVo,
  QuestionInVo, QuestionOutVo,
} from '~/api-client';
import type { CoreResponse } from '~/types/globaltype';

export interface Qna extends CoreResponse{
  qstnId: number;
  qstnTitlNm: string;
  cofeQstnCon: string;
  useYn: string;
}

export interface QnaOptions extends QuestionInVo, QuestionOutVo {

}

export interface AnswerOptions extends QuestionAnswerInVo, QuestionAnswerOutVo {
  answerAttachFileOutList: CommonAttachFileOutVo[],
  uploadFileList: File[],
}
