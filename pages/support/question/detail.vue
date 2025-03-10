<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-inner">
        <div class="ibk-board-head">
          <div class="ibk-board-head__button">
            <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined
                    @click="navigateTo('/support')" />
          </div>
        </div>
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <div class="ibk-board-detail-head__badge">
                <Badge :value="answText" :style="answStyle"></Badge>
              </div>
              <p>{{ questionParams.blbrQstnTtlNm }}</p>
              <div class="ibk-board-detail-head__clip">
                <i v-if="questionParams.atchCount > 0" class="ibk-icon-24-clip" />
              </div>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>{{ questionParams.cncrName }}</li>
                  <li>
                    {{ questionParams.cretTs && questionParams.cretTs.length > 0 ? questionParams.cretTs.substring(0, 10) : ''
                    }}
                  </li>
                </ul>
              </div>
              <div v-if="!isAnswered" class="ibk-board-detail-head__button">
                <Button label="삭제" severity="secondary" outlined class="text-red-500" @click="delQuestion" />
                <Button label="수정" severity="secondary" outlined
                        @click="navigateTo(`/support/question/write?blbrQstnId=${blbrQstnId}`)" />
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents">
            <p v-html="questionParams.qstnCon" />
          </div>
          <div v-if="questionParams.questionAttachFileOutList && questionParams.questionAttachFileOutList.length > 0"
               class="ibk-board-detail-file">
            <ul>
              <li v-for="(item, index) of questionParams.questionAttachFileOutList">
                <NuxtLink @click="handleFileDownload(item.atchId, item.atchSqn, item.orcpFileNm)" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p style="cursor: pointer">{{ item.orcpFileNm }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div v-if="answerParams.cretTs && answerParams.cretTs.length > 0" class="ibk-board-detail-reply">
            <div class="ibk-board-detail-reply__inner">
              <div class="ibk-board-detail-reply__title">안녕하세요 {{ questionParams.cncrName }}님. 문의 주신 내용 답변드립니다.</div>
              <div class="ibk-board-detail-reply__date">
                {{ answerParams.cretTs && answerParams.cretTs.length > 0 ? answerParams.cretTs.substring(0, 10) : '' }}
                관리자 답변완료
              </div>
              <div class="ibk-board-detail-reply__contents" v-html="answerParams.rplyCon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Utility from '~/lib/Utility';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

import { ref } from 'vue';
import type { QuestionOutVo, QuestionAnswerOutVo } from '~/api-client';
import type { QuestionOptions, AnswerOptions } from '~/domains/support/type';
import downloadFile from '~/lib/CommonFileDown';
import { useAuthStore } from '~/domains/auth';
import { de } from 'date-fns/locale';

const route = useRoute();
const blbrQstnId = ref<string | null>(route.query.blbrQstnId as string);
const isAnswered = ref(false);
const answText = ref('');
const answStyle = ref('');
const authStore = useAuthStore();

const questionParams = reactive<QuestionOptions>({
  blbrQstnId: Number(blbrQstnId.value),
  blbrQstnTtlNm: '',
  qstnCon: '',
  useYn: 'Y',
  secrtPtngYn: 'N',
  cretTs: '',
  cncrId: '',
  questionAttachFileOutList: [],
});

const answerParams = reactive<AnswerOptions>({
  blbrQstnId: Number(blbrQstnId.value),
  rplyCon: '',
  useYn: 'Y',
  answerAttachFileOutList: [],
});

const getQuestionDetail = async () => {
  let questionRes;
  try {
    questionRes = await $wrap($request().inqQuestionDtl({ blbrQstnId: Number(blbrQstnId.value) }));
  } catch (e) {
    navigateTo('/support');
  }

  const questionData = $response<QuestionOutVo>(questionRes);

  if (Utility.isSuccess(questionData)) {
    Object.assign(questionParams, questionData.response);
    await isSecretQuestion();
    let ansRes = await $request().inqQuestionAnswerDtl({ blbrQstnId: Number(blbrQstnId.value) });
    const answerData = $response<QuestionAnswerOutVo>(ansRes);
    if (Utility.isSuccess(answerData) && answerData.response) {
      Object.assign(answerParams, answerData.response);
    }
    answText.value = answerParams.rplyCon && answerParams.rplyCon.length > 0 ? '답변완료' : '답변대기';
    isAnswered.value = !!(answerParams.rplyCon && answerParams.rplyCon.length > 0);
    answStyle.value = answerParams.rplyCon && answerParams.rplyCon.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
  }
};

//비밀글 본인여부
const isSecretQuestion = async () => {
  if (questionParams.secrtPtngYn === 'Y' && questionParams.cncrId !== authStore.userInfo.userId) {
    $alert('본인만 확인 가능합니다.');
    navigateTo('/support');
  }
};

const delQuestion = async () => {
  const isYesOrNo = await Utility.confirm('문의글을 삭제하시겠습니까?');
  if (isYesOrNo) {
    const res = await $request().delQuestion(questionParams);
    if (res && res.status === 200) {
      alert('문의글이 삭제되었습니다.');
      await navigateTo('/support');
    } else {
      alert('삭제 처리중 오류가 발생하였습니다');
    }
  }
};

const handleFileDownload = async (atchId: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/question/${atchId}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

onMounted(async () => {
  if (Number(blbrQstnId.value) > 0) {
    await getQuestionDetail();
  }
});
</script>
