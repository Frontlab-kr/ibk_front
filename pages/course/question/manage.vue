<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined @click="navigateTo(`/myLearn/studyRoom?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"/>
        </div>
      </div>
      <div class="ibk-board-list-head">
        <div class="ibk-board-list-head__start">
          <h2>
            Q&A
            <strong>{{totalCount}}</strong>
          </h2>
        </div>
        <div class="ibk-board-list-head__end">
          <div class="ibk-board-search">
            <IconField>
              <InputIcon class="ibk-icon-16-search" />
              <InputText placeholder="검색어를 입력하세요." v-model="searchParam.searchText"/>
            </IconField>
            <div class="ibk-board-search__button">
              <Button label="검색" severity="primary" @click="getCourseQna"/>
            </div>
          </div>
          <div class="ibk-board-list-head__write">
            <Button icon="ibk-icon-16-pencil" label="글쓰기" severity="primary" rounded outlined @click="navigateTo(`/course/question/write?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}&edctQstnNo=0`)"/>
          </div>
        </div>
      </div>
      <div v-if="totalCount > 0" class="ibk-board-list">
        <NuxtLink v-for="(item, idx) of courseQna" @click="questionDetail(item.edctQstnNo)" class="ibk-lectureroom-board-list-item">
          <div class="ibk-lectureroom-board-list-item__start">
            <div class="ibk-lectureroom-board-list-item__title">
              <div class="ibk-lectureroom-board-list-item__badge">
                <Badge :value="item.answText" :style="item.answStyle"/>
              </div>
              <i v-if="item.secrtPtngYn == 'Y'" class="ibk-icon-24-lock"></i>
              <p>{{ item.edctQstnTtlNm }}</p>
              <i v-if="item.atchCnt > 0" class="ibk-icon-24-clip"></i>
            </div>
            <div class="ibk-lectureroom-board-list-item__date">{{ item.cretTs }}</div>
          </div>
        </NuxtLink>
        <Paginator :rows="searchParam.pageSize" :totalRecords="totalCount" @page="changePage" />
      </div>
      <div v-else>
        <div class="ibk-board-list-none">
          <div class="ibk-board-list-none__text">
            <span class="text-primary">{{ searchedText }}</span> 에 대한 검색 결과가 없습니다.
          </div>
          <Button label="목록으로 돌아가기" severity="primary" rounded outlined @click="navigateTo(`/myLearn/studyRoom?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { CourseQuestionPageInqInVo } from '~/api-client';
import { useQuestionStore } from '~/domains/course/question';
import { useAuthStore } from '~/domains/auth';
const route = useRoute();
const dutyEdctCd = ref<string | null>(route.query.dutyEdctCd as string);
const edctDsprNo = ref<string | null>(route.query.edctDsprNo as string);

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const store = useQuestionStore();
const courseQna = ref<any>();
const totalCount = ref<number>(0);
const searchedText = ref<string>('');
const authStore = useAuthStore();

const searchParam = reactive<CourseQuestionPageInqInVo>({
  pageNo: 1,
  pageSize: 10,
  searchText: '',
  dutyEdctCd: dutyEdctCd.value,
  edctDsprNo: Number(edctDsprNo.value)
});

const getCourseQna = async () => {
  courseQna.value = [];
  await store.getCourseQuestionList(searchParam);
  if(store.courseQuestionData.data && store.courseQuestionData.data.response.contentsNbi > 0) {
    courseQna.value = store.courseQuestionData.data.response.contents;
    totalCount.value = store.courseQuestionData.data.response.ttalDataNbi;
    courseQna.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0,10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-','.') + ' ~ ' + x.answCretTs.replaceAll('-','.') : x.cretTs;
      x.answText = x.answCretTs && x.answCretTs.length > 0 ? '답변완료' : '답변대기';
      x.answStyle = x.answCretTs && x.answCretTs.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
    })
  } else {
    searchedText.value = searchParam.searchText;
    totalCount.value = 0;
    courseQna.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const changePage = (page: any) => {
  searchParam.pageNo = page.page+1;
  getCourseQna();
}

const questionDetail = (edctQstnNo: number) => {
  const detailItem =  store.courseQuestionData.data.response.contents.find((x: any) => x.edctQstnNo === edctQstnNo);
  if(detailItem.secrtPtngYn == 'Y'){
    //본인 1차 검증
    if(detailItem.cncrId != authStore.userInfo.userId){
      $alert('본인만 확인 가능합니다.');
      return;
    }
  }

  navigateTo(`/course/question/detail?edctQstnNo=${edctQstnNo}`);
}

onMounted(async () => {
  await getCourseQna();
});

</script>
