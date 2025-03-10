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
            자료실
            <strong>{{ totalCount }}</strong>
          </h2>
        </div>
        <div class="ibk-board-list-head__end">
          <div class="ibk-board-search">
            <IconField>
              <InputIcon class="ibk-icon-16-search" />
              <InputText placeholder="검색어를 입력하세요." v-model="searchParam.searchText"/>
            </IconField>
            <div class="ibk-board-search__button">
              <Button label="검색" severity="primary" @click="getCourseLibrary"/>
            </div>
          </div>
        </div>
      </div>
      <div v-if="totalCount > 0" class="ibk-board-list">
        <NuxtLink v-for="(item, idx) of courseLibrary" :to="`/course/library/detail?atchNo=${item.atchNo}`" class="ibk-lectureroom-board-list-item">
          <div class="ibk-lectureroom-board-list-item__start">
            <div class="ibk-lectureroom-board-list-item__title">
              <div class="ibk-lectureroom-board-list-item__badge">
                <Badge value="자료실" style="background: #f2f2f2; color: #5a5e6c"></Badge>
              </div>
              <p>{{ item.ttlNm }}</p>
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
import type { CourseLibraryPageInqInVo } from '~/api-client';
import { useLibraryStore } from '~/domains/course/library';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const store = useLibraryStore();
const courseLibrary = ref<any>();
const totalCount = ref<number>(0);
const route = useRoute();
const dutyEdctCd = ref<string | null>(route.query.dutyEdctCd as string);
const edctDsprNo = ref<string | null>(route.query.edctDsprNo as string);
const searchedText = ref<string>('');

const searchParam = reactive<CourseLibraryPageInqInVo>({
  pageNo: 1,
  pageSize: 10,
  searchText: '',
  dutyEdctCd: dutyEdctCd.value,
  edctDsprNo: Number(edctDsprNo.value)
});

const getCourseLibrary = async () => {
  courseLibrary.value = [];
  await store.getCourseLibraryList(searchParam);
  if(store.courseLibraryData.data && store.courseLibraryData.data.response.contentsNbi > 0) {
    courseLibrary.value = store.courseLibraryData.data.response.contents;
    totalCount.value = store.courseLibraryData.data.response.ttalDataNbi;
    courseLibrary.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
    })
  } else {
    searchedText.value = searchParam.searchText;
    totalCount.value = 0;
    courseLibrary.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const changePage = (page: any) => {
  searchParam.pageNo = page.page+1;
  getCourseLibrary();
}

onMounted(async () => {
  await getCourseLibrary();
});

</script>
