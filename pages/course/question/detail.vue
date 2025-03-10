<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-inner">
        <div class="ibk-board-head">
          <div class="ibk-board-head__button">
            <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined @click="moveToList"/>
          </div>
        </div>
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <div class="ibk-board-detail-head__badge">
                <Badge :value="answText" :style="answStyle"></Badge>
              </div>
              <p>{{ questionParams.edctQstnTtlNm }}</p>
              <div class="ibk-board-detail-head__clip">
                <i v-if="questionParams.atchCnt > 0" class="ibk-icon-24-clip"/>
              </div>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__date">
                {{ questionParams.cretTs && questionParams.cretTs.length > 0 ? questionParams.cretTs.substring(0,10) : '' }}
              </div>
              <div v-if="!isAnswered" class="ibk-board-detail-head__button">
                <Button label="삭제" severity="secondary" outlined class="text-red-500" @click="delCourseQuestion"/>
                <Button label="수정" severity="secondary" outlined @click="navigateTo(`/course/question/write?dutyEdctCd=${questionParams.dutyEdctCd}&edctDsprNo=${questionParams.edctDsprNo}&edctQstnNo=${questionParams.edctQstnNo}`)"/>
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents">
            <p v-html="questionParams.qstnCon"/>
          </div>
          <div v-if="questionParams.courseBoardAtchOutList && questionParams.courseBoardAtchOutList.length > 0" class="ibk-board-detail-file">
            <ul>
              <li v-for="(item, index) of questionParams.courseBoardAtchOutList">
                <NuxtLink @click="handleFileDownload(
                  item.dutyEdctCd,
                  item.edctDsprNo,
                  item.objcDsncVl,
                  item.edctAtchObjcNo,
                  item.edctAtchSqn
                )" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p>{{item.orcpFileNm}}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div v-if="answerParams.cretTs && answerParams.cretTs.length > 0" class="ibk-board-detail-reply">
            <div class="ibk-board-detail-reply__inner">
              <div class="ibk-board-detail-reply__title">안녕하세요 {{ questionParams.cncrName }}님. 문의 주신 내용 답변드립니다.</div>
              <div class="ibk-board-detail-reply__date">{{ answerParams.cretTs && answerParams.cretTs.length > 0 ? answerParams.cretTs.substring(0,10) : '' }} 관리자 답변완료</div>
              <div class="ibk-board-detail-reply__contents" v-html="answerParams.rplyDtlCon"></div>
              <div v-if="answerParams.courseBoardAtchOutList && answerParams.courseBoardAtchOutList.length > 0" class="ibk-board-detail-file mt-3">
            <ul>
              <li v-for="(item, index) of answerParams.courseBoardAtchOutList">
                <NuxtLink @click="handleFileDownload(
                  item.dutyEdctCd,
                  item.edctDsprNo,
                  item.objcDsncVl,
                  item.edctAtchObjcNo,
                  item.edctAtchSqn
                )" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p>{{item.orcpFileNm}}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
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
import type { CourseQuestionOutVo,CourseQuestionAnswerOutVo, } from '~/api-client';
import type { CourseQuestionOptions,CourseQuestionAnswerOptions } from '~/domains/course/question/type';
import downloadFile from '~/lib/CommonFileDown';
import { useAuthStore } from '~/domains/auth';

const route = useRoute();
const edctQstnNo = ref<string | null>(route.query.edctQstnNo as string);
const answText = ref('');
const answStyle = ref('');
const isAnswered = ref(false);
const authStore = useAuthStore();

const questionParams = reactive<CourseQuestionOptions>({
  edctQstnNo: Number(edctQstnNo.value),
  edctDsprNo: 0,
  dutyEdctNm: '',
  edctQstnTtlNm: '',
  edctQstnCon: '',
  useYn: 'Y',
  cretTs: '',
  cncrId: '',
  courseBoardAtchOutList: [],
});

const answerParams = reactive<CourseQuestionAnswerOptions>({
  edctQstnNo: Number(edctQstnNo.value),
  edctQstnRplyNo: 0,
  dutyEdctCd: '',
  rplyDtlCon: '',
  useYn: 'Y',
  courseBoardAtchOutList: [],
  courseBoardAtchDelletInList: [],
  uploadFileList: [],
});

const getCourseQuestionDetail = async () => {
  let questionRes;
  try {
    questionRes = await $wrap($request().inqCourseQuestionDtl({edctQstnNo: Number(edctQstnNo.value)}));
  }catch (e) {
    router.back();
  }

  const questionData = $response<CourseQuestionOutVo>(questionRes);
  if(Utility.isSuccess(questionData)){
    Object.assign(questionParams, questionData.response);
    await isSecretQuestion();
    let ansRes = await $request().inqCourseQuestionAnswerDtl({edctQstnNo: Number(edctQstnNo.value)});
    const answerData = $response<CourseQuestionAnswerOutVo>(ansRes);
    if(Utility.isSuccess(answerData) && answerData.response){
      Object.assign(answerParams, answerData.response);
    }
    answText.value = answerParams.rplyDtlCon && answerParams.rplyDtlCon.length > 0 ? '답변완료' : '답변대기';
    isAnswered.value = !!(answerParams.rplyDtlCon && answerParams.rplyDtlCon.length > 0);
    answStyle.value = answerParams.rplyDtlCon && answerParams.rplyDtlCon.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
  }
}

const isSecretQuestion = async () => {
  if (questionParams.secrtPtngYn === 'Y' && questionParams.cncrId !== authStore.userInfo.userId) {
    $alert('본인만 확인 가능합니다.');
    navigateTo('/support');
  }
};

const delCourseQuestion = async () => {
  const isYesOrNo = await Utility.confirm('문의글을 삭제하시겠습니까?');
  if (isYesOrNo) {
    const res = await $request().delCourseQuestion(questionParams);
    if (res && res.status === 200) {
      alert('문의글이 삭제되었습니다.');
      await navigateTo(`/course/question/manage?dutyEdctCd=${questionParams.dutyEdctCd}&edctDsprNo=${questionParams.edctDsprNo}`);
    }else {
      alert('삭제 처리중 오류가 발생하였습니다')
    }
  }
}

const router = useRouter();
const moveToList = () => {
  // 마이페이지에도 쓰고 있으므로 뒤로 보내 버림
  router.back();
}

const handleFileDownload = async (dutyEdctCd: string,
                                  edctDsprNo: number,
                                  objcDsncVl: string,
                                  edctAtchObjcNo: number,
                                  edctAtchSqn: number
) => {
  const url = `/v1/file/download/course/${dutyEdctCd}/${edctDsprNo}/${objcDsncVl}/${edctAtchObjcNo}/${edctAtchSqn}`;
  await downloadFile(url, "");
};

onMounted(async () => {
  if(Number(edctQstnNo.value) > 0){
    await getCourseQuestionDetail();
  }
})
</script>
