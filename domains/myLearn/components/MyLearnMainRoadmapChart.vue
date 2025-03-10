<template>
  <Chart ref="chartRef" type="radar" :data="chartDataForChart" :options="chartOptions" @loaded="onLoadChart" />
</template>

<script setup lang="ts">
import Chart from 'primevue/chart';
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import type { SkillCategory } from '~/domains/myLearn/type';
import { useMyLearnStore } from '~/domains/myLearn/store';

const { currentChartSkillCategory } = defineModels<{
  currentChartSkillCategory: SkillCategory;
}>();

const store = useMyLearnStore();

// Chart Reference
const chartRef = ref<any>();

// Chart Data
const chartData = computed(() => {
  return {
    labels: store.mySkillCategoryStatistics?.map((item) => ({
      skllClsfVl: item.skllClsfVl,
      skllClsfNm: item.skllClsfNm
    })) || [],
    datasets: [
      {
        label: '부점평균',
        backgroundColor: 'rgba(42, 202, 200, 0.4)', // Light green-blue background
        borderWidth: 0,
        pointRadius: 0,
        data: store.mySkillCategoryStatistics?.map(item => item.deptAvgScore) || [], // Data for "부점평균"
      },
      {
        label: '그룹',
        backgroundColor: 'rgba(160, 169, 192, 0.4)', // Light gray background
        borderWidth: 0,
        pointRadius: 0,
        data: store.mySkillCategoryStatistics?.map(item => item.groupAvgScore) || [], // Data for "그룹"
      },
      {
        label: '직급',
        backgroundColor: 'rgba(255, 204, 0, 0.4)', // Yellow background
        borderWidth: 0,
        pointRadius: 0,
        data: store.mySkillCategoryStatistics?.map(item => item.positionAvgScore) || [], // Data for "직급"
      },
      {
        label: '나',
        backgroundColor: 'rgba(48, 138, 242, 0.4)', // Blue background
        borderWidth: 0,
        pointRadius: 0,
        data: store.mySkillCategoryStatistics?.map(item => item.myScore) || [], // Data for "나"
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
  scale: {
    ticks: {
      beginAtZero: true,
    },
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

const handleSelect = (event) => {
  console.log('Select event triggered:', event);
  alert(`Selected element: ${event.element}, Dataset: ${event.dataset}`);
};

// Reference for Chart.js instance
const chartInstance = ref<any>(null);

// Handle the loaded event
const onLoadChart = (loadedChart) => {
  if (loadedChart && loadedChart.canvas) {
    loadedChart.canvas.addEventListener('click', (event: MouseEvent) => {
      const elements = loadedChart.getElementsAtEventForMode(event, 'nearest', { intersect: false }, false);

      if (elements.length > 0) {
        const element = elements[0];
        const dataIndex = element.index;

        const clickedLabel = chartData.value.labels[dataIndex];
        //const value = chartData.value.datasets[0]?.data[dataIndex];

        currentChartSkillCategory.value.vl = clickedLabel.skllClsfVl;
        currentChartSkillCategory.value.nm = clickedLabel.skllClsfNm;

        //console.log(`Clicked: Key = ${clickedLabel.skllClsfVl}, Value = ${clickedLabel.skllClsfNm}, Data = ${value}`);
        //alert(`Clicked: Key = ${clickedLabel.skllClsfVl}, Value = ${clickedLabel.skllClsfNm}, Data = ${value}`);
      } else {
        //console.log('No elements found.');
      }
    });
  }
};

onBeforeMount(async ()=>{
});

onMounted(() => {

});
</script>
