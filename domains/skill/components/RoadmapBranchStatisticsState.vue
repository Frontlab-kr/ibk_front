<template>
  <div class="ibk-roadmap-state-chart">
    <div class="ibk-roadmap-state-chart-item">
      <div class="ibk-roadmap-state-chart-item-text">
        <h6>권장학습 이수율</h6>
        <p>60 / 100</p>
      </div>
      <div class="ibk-roadmap-state-chart-chart">
        <p>
          60 / 100
          <strong> 60% </strong>
        </p>
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
      </div>
      <Button label="상세보기" severity="secondary" outlined class="w-full" />
    </div>
    <div class="ibk-roadmap-state-chart-item">
      <div class="ibk-roadmap-state-chart-item-text">
        <h6>창구필수 자격증</h6>
        <p>60 / 100</p>
      </div>
      <div class="ibk-roadmap-state-chart-chart">
        <p>
          60 / 100
          <strong> 60% </strong>
        </p>
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
      </div>
      <Button label="상세보기" severity="secondary" outlined class="w-full" />
    </div>
    <div class="ibk-roadmap-state-chart-item">
      <div class="ibk-roadmap-state-chart-item-text">
        <h6>법정의무 교육</h6>
        <p>60 / 100</p>
      </div>
      <div class="ibk-roadmap-state-chart-chart">
        <p>
          60 / 100
          <strong> 60% </strong>
        </p>
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
      </div>
      <Button label="상세보기" severity="secondary" outlined class="w-full" />
    </div>
    <div class="ibk-roadmap-state-chart-item">
      <div class="ibk-roadmap-state-chart-item-text">
        <h6>책임자시험 합격</h6>
        <p>60 / 100</p>
      </div>
      <div class="ibk-roadmap-state-chart-chart">
        <p>
          60 / 100
          <strong> 60% </strong>
        </p>
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
      </div>
      <Button label="상세보기" severity="secondary" outlined class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const chartData = computed(() => {
  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#308AF2', '#eee'],
        borderColor: 'transparent', // 테두리 색상을 투명으로 설정
        borderWidth: 0, // 테두리의 두께를 0으로 설정
      },
    ],
  };
});

const chartOptions = computed(() => {
  return {
    cutout: '86%',
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
});


</script>

<style scoped>

</style>
