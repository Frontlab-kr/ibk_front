<template>
  <div class="ibk-roadmap-title">
    <h4>Score 누적 이력</h4>
  </div>
  <div class="ibk-roadmap-history">
    <div class="ibk-roadmap-history-head">
      <RoadMapStatus1LevelItem v-for="(item, index) in roadmap1LevelItems" :item="item" :key="`${item.skllClsfVl}_${index}`" v-model:current1Level="current1Level" />
    </div>
    <div class="ibk-roadmap-history-contents">
      <div class="flex justify-content-between">
        <h5>월별 현황</h5>
        <Select v-model="params.searchYear" :options="yearOptions" class="align-self-end"/>
      </div>
      <div class="ibk-roadmap-history-chart-line">
        <Chart type="line" :data="chartData" :options="setChartOptions" />
      </div>
      <RoadmapHistoryCourseList />
      <RoadmapHistoryLicenseList />
    </div>
  </div>
</template>

<script setup lang="ts">
import RoadMapStatus1LevelItem from '~/domains/skill/roadmap/components/RoadmapStatus1LevelItem.vue';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import type { SkillRoadmapHistoryMonthlyOptions } from '~/domains/skill/roadmap/type';
import Utility from '~/lib/Utility';
import { ref } from 'vue';

const store = useSkillRoadmapStore();
const roadmap1LevelItems = computed(() => store.skillRoadmap.roadmapCategoryList?.filter(v => v.lvlNo === 1) || []);
const current1Level = ref<SklRoadmapCategoryOutVo|null>(null);

const INIT_PARAMS = (): SkillRoadmapHistoryMonthlyOptions => ({
  searchYear: Utility.getCurrentYear(),
  skllClsfVl: '',
});

const params = reactive<SkillRoadmapHistoryMonthlyOptions>(INIT_PARAMS());

const yearOptions = computed(() => {
  const startYear = Utility.getCurrentYear();
  const range = 10; // +10년까지
  return Array.from({ length: range + 1 }, (_, i) => startYear - i);
});

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3.5,
    scales: {
      y: {
        beginAtZero: true,
        //max: 100,
      },
    },
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
};

const chartData = computed(()=>{
  return {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월별 데이터
    datasets: [
      {
        data: store.skillRoadmapHistoryStatusMonthly.filter(v=>v.qlfcTrngDcd === 'L').map((x)=> { return Number(x.cpctLvlAcqtScr) }), // 그래프 값
        backgroundColor: 'rgba(113, 81, 255, 0.1)', // 차트 아래에 색을 채워주는 부분
        borderColor: '#7F56D9', // 라인 색상
        borderWidth: 2,
        fill: true, // 라인 아래 색 채우기
        tension: 0.4, // 부드러운 곡선
        label: '연수'
      },
      {
        data: store.skillRoadmapHistoryStatusMonthly.filter(v=>v.qlfcTrngDcd === 'C').map((x)=> { return Number(x.cpctLvlAcqtScr) }), // 그래프 값
        backgroundColor: 'rgba(113, 81, 255, 0.1)', // 차트 아래에 색을 채워주는 부분
        borderColor: 'rgba(113, 81, 255, 0.50)', // 라인 색상
        borderWidth: 2,
        fill: true, // 라인 아래 색 채우기
        tension: 0.4, // 부드러운 곡선
        label: '자격증'
      },
    ],
  };
})

watch(()=>current1Level.value, ()=>{
  params.skllClsfVl = current1Level.value?.skllClsfVl || '';
  fetchRoadmapHistoryStatusData();
  fetchRoadmapHistoryData();
}, { deep: true })

watch(()=>params.searchYear, ()=>{
  params.skllClsfVl = current1Level.value?.skllClsfVl || '';
  fetchRoadmapHistoryStatusData();
  fetchRoadmapHistoryData();
}, { deep: true })

const fetchData = async () => {
  await store.getSkillRoadmap();
  current1Level.value = roadmap1LevelItems.value[0] || null;
}

const fetchRoadmapHistoryData = async () => {
  await store.getSkillRoadmapHistory(params);
}

const fetchRoadmapHistoryStatusData = async () => {
  await store.getSkillRoadmapHistoryStatus(params);
}

onBeforeMount(async () => {
  await fetchData();

  fetchRoadmapHistoryStatusData();
  fetchRoadmapHistoryData();
});
</script>

<style scoped>

</style>
