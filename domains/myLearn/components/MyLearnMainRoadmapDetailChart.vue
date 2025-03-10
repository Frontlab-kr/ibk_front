<template>
  <Chart v-if="currentChartSkillCategory.vl" type="bar" :data="chartDataForChart" :options="chartOptions" />
  <span v-else>데이터가 없습니다.</span>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart';
import type { SkillCategory } from '~/domains/myLearn/type';
import { useMyLearnStore } from '~/domains/myLearn/store';

const { currentChartSkillCategory } = defineModels<{
  currentChartSkillCategory: SkillCategory;
}>();

const store = useMyLearnStore();

// Chart Data
const chartData = computed(() => {
  return {
    labels: store.mySkillCategoryStatisticsDetail?.map((item) => ({
      skllClsfVl: item.skllClsfVl,
      skllClsfNm: item.skllClsfNm
    })) || [],
    datasets: [
      {
          label: '부점평균',
          data: store.mySkillCategoryStatisticsDetail?.map(item => item.deptAvgScore) || [], // Data for "부점평균"
          backgroundColor: '#2ACAC8',
          borderRadius: 10,
          barThickness: 14,
          borderWidth: 2,
          borderColor: '#fff',
      },
      {
          label: '그룹',
          data: store.mySkillCategoryStatisticsDetail?.map(item => item.groupAvgScore) || [], // Data for "그룹"
          backgroundColor: '#A0A9C0',
          borderRadius: 10,
          barThickness: 14,
          borderWidth: 2,
          borderColor: '#fff',
      },
      {
          label: '직급',
          data: store.mySkillCategoryStatisticsDetail?.map(item => item.positionAvgScore) || [], // Data for "직급"
          backgroundColor: '#FFCC00',
          borderRadius: 10,
          barThickness: 14,
          borderWidth: 2,
          borderColor: '#fff',
      },
      {
          label: '나',
          data: store.mySkillCategoryStatisticsDetail?.map(item => item.myScore) || [], // Data for "나"
          backgroundColor: '#308AF2',
          borderRadius: 10,
          barThickness: 14,
          borderWidth: 2,
          borderColor: '#fff',
      },
    ],
  };
});


const chartDataForChart = computed(()=>{
  return {
    labels: chartData.value.labels.map((v) => v.skllClsfNm),
    datasets: chartData.value.datasets,
  }
});

// Chart Options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true,
      },
  },
  layout: {
      padding: 20,
  },
  plugins: {
      legend: {
          display: true,
          position: 'bottom',
          labels: {
              usePointStyle: true, // Makes the point style circular or rounded
              padding: 20, // Adds padding for a better visual look
              boxWidth: 12, // Smaller box width
              boxHeight: 12, // Smaller box height to make it more rounded
          },
      },
  },
});

onBeforeMount(async ()=>{

});

onMounted(() => {

});
</script>
