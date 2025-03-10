<template>
  <div class="ibk-board-list-head">
    <div class="pc">
      <div class="ibk-board-list-head__start">
        <h2>
          전체
          <strong>{{ totalCount }}</strong>
        </h2>
      </div>
    </div>
    <div class="ibk-board-list-head__end">
      <div class="ibk-board-search">
        <IconField>
          <InputIcon class="ibk-icon-16-search" />
          <InputText placeholder="검색어를 입력하세요." v-model="searchParam.blbrQstnTtlNm" />
        </IconField>
        <div class="ibk-board-search__button">
          <Button label="검색" severity="primary" @click="getQuestion" />
        </div>
      </div>
      <div class="pc">
        <div class="ibk-board-list-head__write">
          <Button label="1:1 문의하기" severity="primary" rounded outlined @click="navigateTo('/support/question/write')" />
        </div>
      </div>
    </div>
  </div>
  <div class="ibk-board-list">
    <div class="mo">
      <h2>
        전체
        <strong>{{ totalCount }}</strong>
      </h2>
    </div>

    <template v-if="totalCount > 0">
      <NuxtLink class="ibk-board-list-item" v-for="(item, idx) of question">
        <div class="ibk-board-list-item__start" @click="questionDetail(item.blbrQstnId)">
          <div class="ibk-board-list-item__number">{{ Utility.getRowNumber(totalCount, store.questionData.data.response.pageNo, store.questionData.data.response.pageSize, idx )}}</div>
          <div class="ibk-board-list-item__title">
            <div class="ibk-board-list-item__badge">
              <Badge :value="item.answText" :style="item.answStyle" />
            </div>
            <i v-if="item.secrtPtngYn == 'Y'" class="ibk-icon-24-lock"></i>
            <p>{{ item.blbrQstnTtlNm }}</p>
            <i v-if="item.atchCount > 0" class="ibk-icon-24-clip"></i>
          </div>
        </div>
        <div class="ibk-board-list-item__end">
          <div class="ibk-board-list-item__date">{{ item.cretTs }}</div>
        </div>
      </NuxtLink>
    </template>
    <template v-else>
      <div class="ibk-board-list-none">
        <div class="ibk-board-list-none__text">
          <span class="text-primary">{{ searchedText }}</span> 에 대한 검색 결과가 없습니다.
        </div>
        <!--        <Button label="목록으로 돌아가기" severity="primary" rounded outlined @click="navigateTo(`/myLearn/studyRoom?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"/>-->
      </div>
    </template>
    <Paginator :rows="searchParam.pageSize" :totalRecords="totalCount" @page="changePage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSupportStore } from '~/domains/support/store';
import type { QuestionOptions } from '~/domains/support/type';
import type { QuestionPageInqInVo } from '~/api-client';
import Utility from '../../../lib/Utility';
import { useAuthStore } from '~/domains/auth';
const props = withDefaults(
	defineProps<{
    items: QuestionOptions | null
	}>(),
	{
    items: null,
  }
);
const question = ref<any>();
const totalCount = ref<number>(0);
const searchedText = ref<string>('');

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const route = useRoute();
const store = useSupportStore();
const authStore = useAuthStore();
const searchParam = reactive<QuestionPageInqInVo>({
  pageNo: 1,
  pageSize: 10,
  blbrQstnTtlNm: '',
});

const questionDetail = (blbrQstnId: number) => {
  const detailItem =  store.questionData.data.response.contents.find((x: any) => x.blbrQstnId === blbrQstnId);
  if(detailItem.secrtPtngYn == 'Y'){
    //본인 1차 검증
    if(detailItem.cncrId != authStore.userInfo.userId){
      $alert('본인만 확인 가능합니다.');
      return;
    }
  }

  navigateTo(`/support/question/detail?blbrQstnId=${blbrQstnId}`);
}



const getQuestion = async () => {
  question.value = [];
  await store.getQuestionList(searchParam);
  if(store.questionData.data && store.questionData.data.response.contentsNbi > 0) {
    question.value = store.questionData.data.response.contents;
    totalCount.value = store.questionData.data.response.ttalDataNbi;
    question.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
      x.answText = x.answCretTs && x.answCretTs.length > 0 ? '답변완료' : '답변대기';
      x.answStyle = x.answCretTs && x.answCretTs.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
    })
  } else {
    searchedText.value = searchParam.blbrQstnTtlNm;
    totalCount.value = 0;
    question.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const changePage = (page: any) => {
  searchParam.pageNo = page.page+1;
  getQuestion();
}

onMounted(async () => {
  await getQuestion();
})
</script>

<style>
</style>
