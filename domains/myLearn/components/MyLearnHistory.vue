<template>
  <div class="ibk-lectureroom-my-contents">
    <div class="ibk-lectureroom-my-table">
      <div class="ibk-lectureroom-my-table-head">
        <div class="ibk-lectureroom-my-table__title">연수이력<strong>{{ store.studyRoomHistory?.paging?.totalCount || 0
            }}</strong></div>
        <div class="mo">
          <Button label="인쇄하기" severity="primary" outlined rounded icon="ibk-icon-16-print"
            @click="visiblePrintDialog = true" />
        </div>
      </div>
      <div class="ibk-lectureroom-my-table-search">
        <div class="ibk-lectureroom-my-table-search__button">
          <Calendar v-model="dateRange" selectionMode="range" showIcon dateFormat="y/mm/dd" :manualInput="true">
            <template #inputicon>
              <i class="ibk-icon-16-calendar" />
            </template>
          </Calendar>
          <div class="ibk-lectureroom-my-table-search__select">
            <div class="ibk-lectureroom-my-table-search__select-br">
              <!-- 스킬은 정해진게 없어 일단 빠짐 -->
              <Select v-if="false" v-model="selectedLevel" :options="selectedLevelOption" optionLabel="name" />
              <Select v-model="selectedEducationMethod" :options="selectedEducationMethodOptions" optionLabel="name" />
            </div>
            <Select v-model="selectedCtcr" :options="selectedCtcrOption" optionLabel="name" />
          </div>
        </div>
        <div class="ibk-lectureroom-my-table-search__form">
          <div class="ibk-lectureroom-my-table-search__form-search">
            <IconField>
              <InputIcon class="ibk-icon-16-search" />
              <InputText v-model="params.dutyEdctNm" placeholder="연수명을 입력하세요." @keyup.enter="search" />
            </IconField>
            <div class="pc">
              <Button label="검색" severity="primary" @click="search" />
            </div>
          </div>
          <div class="pc">
            <Button label="인쇄하기" severity="primary" outlined rounded icon="ibk-icon-16-print"
              @click="visiblePrintDialog = true" />
          </div>
        </div>
      </div>

      <div class="ibk-lectureroom-my-table-table">
        <div class="ibk-table ibk-table--scroll-x">
          <MyLearnHistoryTable style="width: 100%;height: 100%;" />
        </div>
      </div>

      <Paginator :rows="params.pageSize" :totalRecords="store.studyRoomHistory?.paging?.totalCount || 0"
        @page="onPage" />
    </div>
  </div>


  <MyLearnHistoryPrintDialog v-if="visiblePrintDialog" v-model:visible="visiblePrintDialog" />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import { useMyLearnStore } from '../store';
import type { CourseDegreeLessonHistoryInVo } from '../../../api-client';
import Utility from '../../../lib/Utility';

const store = useMyLearnStore();
const visiblePrintDialog = ref(false);

const params = reactive<CourseDegreeLessonHistoryInVo>({
  pageNo: 1,
  pageSize: 10,
  lrngSttgTs: '',
  lrngEndTs: '',
  jbclCd: '',
  edctMthdTcd: '',
  ctcrYn: '',
  dutyEdctNm: '',
});

const dateRange = ref<[Date, Date] | null>(null);

watch(dateRange, (newRange) => {
  if (newRange && newRange[0] && newRange[1]) {
    params.lrngSttgTs = formatDate(newRange[0].toISOString());
    params.lrngEndTs = formatDate(newRange[1].toISOString());
  } else {
    params.lrngSttgTs = '';
    params.lrngEndTs = '';
  }
});

const selectedLevelOption = ref([

]);
const selectedLevel = ref();

const selectedEducationMethodOptions = ref([

]);
const selectedEducationMethod = ref(selectedEducationMethodOptions.value[0]);

const selectedCtcrOption = ref([
  { name: '전체', value: '' },
  { name: '수료', value: 'Y' },
  { name: '미수료', value: 'N' }
]);
const selectedCtcr = ref(selectedCtcrOption.value[0]);

watch([selectedLevel, selectedEducationMethod, selectedCtcr], ([newJbcl, newEdct, newCtcr]) => {
  params.jbclCd = newJbcl.value;
  params.edctMthdTcd = (newEdct as any).value ;
  params.ctcrYn = newCtcr.value;
});



const search = async () => {
  params.pageNo = 1;
  await fetchData();
};

const resetSearch = () => {
  dateRange.value = null;
  params.dutyEdctNm = '';
  params.lrngSttgTs = '';
  params.lrngEndTs = '';
  selectedLevel.value = selectedLevelOption.value[0];
  selectedEducationMethod.value = selectedEducationMethodOptions.value[0];
  selectedCtcr.value = selectedCtcrOption.value[0];
  search();
};

const onPage = (event: any) => {
  params.pageNo = event.page + 1;
  fetchData();
};

const fetchData = async () => {
  await store.getStudyRoomHistory(params);
};
Utility.getCommonCodeAsync('LMS00008').then((codes) => {
  // console.log(codes);

  // 교육방식 코드 옵션 설정
  // @ts-ignore
  selectedEducationMethodOptions.value = [
    // @ts-ignore
    { name: '전체', value: '' },
    // @ts-ignore
    ...codes.map((code) => ({
      name: code.cmcdVlNm,
      value: code.cmcdVl
    }))
  ];
  selectedEducationMethod.value = selectedEducationMethodOptions.value[0];
  const codesLevel = Utility.getCommonCode('SKL00006');
  // console.log('codesLevel', codesLevel);

  // @ts-ignore
  selectedLevelOption.value = [
    // @ts-ignore
    { name: '전체', value: '' },
    // @ts-ignore
    ...codesLevel.map((code) => ({
      name: code.cmcdVlNm,
      value: code.cmcdVl
    }))
  ];
  selectedLevel.value = selectedLevelOption.value[0];
});
onMounted(() => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 6); // 6개월 전

  dateRange.value = [startDate, endDate];

  fetchData();
});
</script>
