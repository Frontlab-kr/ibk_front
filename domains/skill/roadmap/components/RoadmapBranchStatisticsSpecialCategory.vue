<template>
  <div class="ibk-roadmap-state-info">
    <div class="ibk-roadmap-state-info-chart">
      <div class="ibk-roadmap-state-info-chart-head">
        <h6>전문분야</h6>
      </div>

      <div class="ibk-roadmap-state-info-chart-body">
        <Chart type="radar" :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <div class="ibk-roadmap-state-info-table">
      <div class="ibk-table ibk-table--scroll-x">
        <table>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
          </colgroup>
          <thead>
            <tr>
              <th>레벨</th>
              <th v-for="column in categorizedMatrix.columns.slice(0, 5)" :key="column.vl">{{ column.nm }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in categorizedMatrix.rows" :key="row.cpctStgDcd">
              <td>{{ row.cpctStgNm }}</td>
              <td v-for="column in categorizedMatrix.columns.slice(0, 5)" :key="column.vl">{{ row[column.vl] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ibk-table ibk-table--scroll-x">
        <table>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
            <col style="width: 132px" />
          </colgroup>
          <thead>
            <tr>
              <th>레벨</th>
              <th :class="{ result : column.vl === 'avg'}"  v-for="column in categorizedMatrix.columns.slice(5)" :key="column.vl">{{ column.nm }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in categorizedMatrix.rows" :key="row.cpctStgDcd">
              <td>{{ row.cpctStgNm }}</td>
              <td :class="{ result : column.vl === 'avg'}" v-for="column in categorizedMatrix.columns.slice(5)" :key="column.vl">{{ row[column.vl] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';

const store = useSkillRoadmapStore();

const props = defineProps<{ items: any[] }>();

const chartData = computed(()=>{
  return {
    labels: chartList.value.map((v)=>v.skllClsfNm),
    datasets: [
      {
        label: '부점최고점',
        backgroundColor: 'rgba(255, 204, 0, 0.4)', // Yellow background
        borderWidth: 0,
        pointRadius: 0,
        data: chartList.value.map((v)=>v.maxCpctLvlAcqtScr), // Data for "부점최고점"
      },
      {
        label: '부점평균',
        backgroundColor: 'rgba(42, 202, 200, 0.4)', // Light green-blue background
        borderWidth: 0,
        pointRadius: 0,
        data: chartList.value.map((v)=>v.avgCpctLvlAcqtScr), // Data for "부점평균"
      },
    ],
  };
});

const chartOptions = computed(()=>{
  return {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100, // Assuming the maximum value is 100
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
  };
})

const chartList = computed(() => {
  const statisticsMap = props.items.reduce((map, item) => {
    if (!map[item.skllClsfVl]) {
      map[item.skllClsfVl] = [];
    }
    map[item.skllClsfVl].push(item);
    return map;
  }, {});

  // `store.skillCategoryList` 기준으로 결과 생성
  return store.skillCategoryList.map((category) => {
    const { skllClsfVl, skllClsfNm } = category;
    const relevantItems = statisticsMap[skllClsfVl] || [];

    const maxCpctLvlAcqtScr = Math.max(...relevantItems.map((item) => item.cpctLvlAcqtScr), 0);
    const avgCpctLvlAcqtScr = relevantItems.reduce((sum, item) => sum + item.cpctLvlAcqtScr, 0) / (relevantItems.length || 1);

    return {
      skllClsfVl,
      skllClsfNm,
      maxCpctLvlAcqtScr,
      avgCpctLvlAcqtScr,
    };
  });
}, {});

const categorizedMatrix = computed(() => {
  // `store.skillStandard`를 기준으로 레벨 초기화
  const skillStandardMap = store.skillStandard.reduce((map, standard) => {
    map[standard.cpctStgDcd] = {
      cpctStgDcd: standard.cpctStgDcd,
      cpctStgNm: standard.cpctStgNm,
      minBaseScr: standard.minBaseScr,
      maxBaseScr: standard.maxBaseScr,
      skllClsfVlCounts: {}, // skllClsfVl별 카운트 초기화
    };
    return map;
  }, {});

  // `props.items` 데이터를 순회하며 레벨 및 skllClsfVl별 카운트 계산
  props.items.forEach((item) => {
    const score = item.cpctLvlAcqtScr;
    const matchedLevel = Object.values(skillStandardMap).find(
      (level) => score >= level.minBaseScr && score <= level.maxBaseScr
    );

    if (matchedLevel) {
      const skllClsfVl = item.skllClsfVl;
      matchedLevel.skllClsfVlCounts[skllClsfVl] = (matchedLevel.skllClsfVlCounts[skllClsfVl] || 0) + 1;
    }
  });

  // 결과 정리: 행(레벨) 및 열(skllClsfVl) 형태로 변환
  const allSkillCategories = store.skillCategoryList.map((category) => ({
    vl: category.skllClsfVl,
    nm: category.skllClsfNm,
  }));

  // 레벨 내림차순으로 정렬
  const result = Object.values(skillStandardMap)
    .sort((a, b) => b.cpctStgDcd - a.cpctStgDcd)  // 내림차순 정렬
    .map((level) => {
      const row = { cpctStgDcd: level.cpctStgDcd, cpctStgNm: level.cpctStgNm };
      allSkillCategories.forEach((category) => {
        row[category.vl] = level.skllClsfVlCounts[category.vl] || 0; // 없는 값은 0으로 초기화
      });
      return row;
    });

  // 각 cpctStgDcd별 평균을 계산하여 열에 추가
  const avgColumn = {
    vl: 'avg',
    nm: '평균',
  };

  result.forEach((row) => {
    const sum = Object.keys(row)
      .filter((key) => key !== 'cpctStgDcd' && key !== 'cpctStgNm') // cpctStgDcd, cpctStgNm 제외
      .reduce((acc, key) => acc + row[key], 0);
    const count = Object.keys(row)
      .filter((key) => key !== 'cpctStgDcd' && key !== 'cpctStgNm') // cpctStgDcd, cpctStgNm 제외
      .length;

    const avg = count ? Math.round((sum / count) * 10) / 10 : 0; // 평균을 소수 첫 번째 자리까지 반올림
    row['avg'] = avg; // 평균 열 추가
  });

  // 평균 열을 columns 배열에 추가 (정렬은 하지 않음)
  allSkillCategories.push(avgColumn);

  return { rows: result, columns: allSkillCategories };
});

onBeforeMount(async () => {

});
</script>

<style scoped>

</style>
