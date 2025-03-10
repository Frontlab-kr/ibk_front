<template>
  <div class="ibk-mypage-main">
    <pubMypagehead />
    <div class="ibk-inner">
      <div class="ibk-mypage-main-chart">
        <div class="ibk-mypage-main-roadmap">
          <div class="ibk-mypage-main-roadmap-head">
            <h5>Skill Roadmap 달성 현황</h5>
            <Button label="로드맵 바로가기" outlined severity="secondary" />
          </div>
          <div class="ibk-mypage-main-roadmap-body">
            <Chart type="radar" :data="chartData01" :options="chartOptions01" />
          </div>
        </div>
        <div class="ibk-mypage-main-chartdetail">
          <div class="ibk-mypage-main-chartdetail-head">
            <h5>상세</h5>
          </div>
          <div class="ibk-mypage-main-chartdetail-body">
            <div class="ibk-mypage-main-chartdetail-title">
              <p><i class="ibk-icon-24-medal"></i>디지털 LV.2 스코어</p>
              <span class="text-primary">142.5 pt</span>
            </div>
            <div class="ibk-mypage-main-chartdetail-chart">
              <Chart type="bar" :data="chartData02" :options="chartOptions02" />
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-mypage-main-hrd">
        <div class="ibk-mypage-main-hrd-head">
          <h5>개인연수평균</h5>
        </div>
        <div class="ibk-mypage-main-hrd-body">
          <div class="ibk-main-my-hrd">
            <div class="ibk-main-my-hrd-head">
              <p>
                <i class="ibk-icon-24-radioCheck"></i>
                4급 행내 연수 운용기준
              </p>
              <span>연수 평정점수(10점) : 기본점수 (3점) + 행내점수(5점) + 행외점수(2점)</span>
            </div>
            <div class="ibk-main-my-hrd-state">
              <div class="ibk-main-my-hrd-state-section">
                <h4><i class="ibk-icon-24-medal"></i>연수평정점수</h4>
                <dl>
                  <dt class="none">
                    <span class="text-primary">9.79 / 10</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>행내평정</strong>
                      <p>4.7/5</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>행외평정</strong>
                      <p>2/2</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>기본점수</strong>
                      <p>3</p>
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="ibk-main-my-hrd-state-section ibk-main-my-hrd-state-section--grid">
                <h4><i class="ibk-icon-24-medal"></i>연수점수</h4>
                <dl>
                  <dd>
                    <div class="ibk-main-my-hrd-state-item none active">
                      <strong>행내평균</strong>
                      <p>97</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>행외평균</strong>
                      <p>100</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>행외최고</strong>
                      <p>100</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>행외차상위</strong>
                      <p>100</p>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-mypage-main-state">
        <div class="ibk-mypage-main-state-head">
          <h5>역량개발 지원현황</h5>
          <NuxtLink to="/"> 더보기 </NuxtLink>
        </div>
        <div class="ibk-mypage-main-state-body">
          <div class="pc">
            <div class="ibk-table">
              <table>
                <colgroup>
                  <col style="width: 200px" />
                  <col style="width: 200px" />
                  <col style="width: 200px" />
                  <col style="width: 200px" />
                  <col style="width: 200px" />
                  <col style="width: 200px" />
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="6">2024년</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>학원수강료</th>
                    <th>시험수강료</th>
                    <th>자격증</th>
                    <th>어학</th>
                    <th>학자금</th>
                    <th>학술연수</th>
                  </tr>
                  <tr>
                    <td><a href="">20건 / 250,000원</a></td>
                    <td><a href="">20건 / 250,000원</a></td>
                    <td><a href="">20건 / 250,000원</a></td>
                    <td><a href="">20건 / 250,000원</a></td>
                    <td><a href="">20건 / 250,000원</a></td>
                    <td><a href="">20건 / 250,000원</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mo">
            <div class="ibk-mypage-main-state-list">
              <h6>2024년</h6>
              <ul>
                <li>
                  <strong>학원수강료</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
                <li>
                  <strong>시험수강료</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
                <li>
                  <strong>자격증</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
                <li>
                  <strong>어학</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
                <li>
                  <strong>학자금</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
                <li>
                  <strong>학술연수</strong>
                  <a href="">20건 / 250,000원</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-mypage-main-state">
        <div class="ibk-mypage-main-state-head">
          <h5>연수 마일리지 현황</h5>
          <NuxtLink to="/"> 더보기 </NuxtLink>
        </div>
        <div class="ibk-mypage-main-state-body">
          <div class="ibk-table">
            <table class="table-bordered">
              <colgroup>
                <col style="width: 300px" />
                <col style="width: 300px" />
                <col style="width: 300px" />
                <col style="width: 300px" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>
                    취득<br class="mo" />
                    마일리지
                  </th>
                  <th>합계</th>
                  <th>
                    누적<br class="mo" />
                    마일리지
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>연수</td>
                  <td>연수</td>
                  <td rowspan="3">2,634</td>
                  <td rowspan="3">0</td>
                </tr>
                <tr>
                  <td>자격증</td>
                  <td>연수</td>
                </tr>
                <tr>
                  <td>기타</td>
                  <td>연수</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-mypage-main-board">
        <div class="ibk-mypage-main-board-head">
          <h5>시설신청 및 결제관리</h5>
        </div>
        <div class="ibk-mypage-main-board-body">
          <div class="ibk-mypage-main-board-list">
            <div class="ibk-mypage-main-board-list-head">
              <h6>사설신청</h6>
              <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" />
            </div>
            <NuxtLink to="/" class="ibk-mypage-main-board-list-item" v-for="i in 3">
              <div class="ibk-mypage-main-board-list-item__title">
                <div class="ibk-mypage-main-board-list-item__badge">
                  <Badge value="배정" style="background: #234eaa; color: #ffffff"></Badge>
                </div>
                <p>휴양동 연수원</p>
              </div>
              <div class="ibk-mypage-main-board-list-item__date">
                신청일 2028.12.30
                <hr class="pc" />
                <div>
                  입실일 2028.12.31
                  <hr />
                  퇴실일 2028.12.31
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="ibk-mypage-main-board-list">
            <div class="ibk-mypage-main-board-list-head">
              <h6>결제관리</h6>
              <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" />
            </div>
            <NuxtLink to="/" class="ibk-mypage-main-board-list-item" v-for="i in 3">
              <div class="ibk-mypage-main-board-list-item__title">
                <div class="ibk-mypage-main-board-list-item__badge">
                  <Badge value="미승인" style="background: rgba(35, 78, 170, 0.08); color: #234eaa"></Badge>
                </div>
                <p>결제(건) 제목이 노출됩니다.</p>
              </div>
              <div class="ibk-mypage-main-board-list-item__date">
                <div>
                  신청일 2028.12.30
                  <hr />
                  입실기간 2025.01.01-2025.01.01
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';

const chartData01 = ref();
const chartOptions01 = ref();

const setChartData01 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['여신심사', '자산운용', '외환', '재무회계', '자산운용', '디지털', 'PB', 'IB', '컴플라이언스'],
    datasets: [
      {
        label: '부점평균',
        backgroundColor: 'rgba(42, 202, 200, 0.4)', // Light green-blue background
        borderWidth: 0,
        pointRadius: 0,
        data: [70, 50, 60, 40, 65, 45, 55, 60, 75], // Data for "부점평균"
      },
      {
        label: '그룹',
        backgroundColor: 'rgba(160, 169, 192, 0.4)', // Light gray background
        borderWidth: 0,
        pointRadius: 0,
        data: [60, 55, 70, 50, 60, 60, 45, 55, 80], // Data for "그룹"
      },
      {
        label: '직급',
        backgroundColor: 'rgba(255, 204, 0, 0.4)', // Yellow background
        borderWidth: 0,
        pointRadius: 0,
        data: [65, 60, 55, 45, 70, 50, 60, 65, 85], // Data for "직급"
      },
      {
        label: '나',
        backgroundColor: 'rgba(48, 138, 242, 0.4)', // Blue background
        borderWidth: 0,
        pointRadius: 0,
        data: [15, 50, 60, 10, 85, 85, 85, 80, 65], // Data for "나"
      },
    ],
  };
};

const setChartOptions01 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

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
};

onMounted(async () => {
  chartData01.value = setChartData01();
  chartOptions01.value = setChartOptions01();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});

const chartData02 = ref();
const chartOptions02 = ref();

const setChartData02 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['비지니스', '데이터', '신기술', '정보화전략', '인프라', 'IT개발', '정보보안'],
    datasets: [
      {
        label: '부점평균',
        data: [60, 70, 60, 80, 70, 70, 70],
        backgroundColor: '#2ACAC8',
        borderRadius: 10,
        barThickness: 14,
        borderWidth: 2,
        borderColor: '#fff',
      },
      {
        label: '그룹',
        data: [50, 60, 50, 60, 60, 60, 60],
        backgroundColor: '#A0A9C0',
        borderRadius: 10,
        barThickness: 14,
        borderWidth: 2,
        borderColor: '#fff',
      },
      {
        label: '직급',
        data: [30, 40, 40, 50, 40, 40, 40],
        backgroundColor: '#FFCC00',
        borderRadius: 10,
        barThickness: 14,
        borderWidth: 2,
        borderColor: '#fff',
      },
      {
        label: '나',
        data: [30, 40, 40, 50, 40, 40, 40],
        backgroundColor: '#308AF2',
        borderRadius: 10,
        barThickness: 14,
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };
};

const setChartOptions02 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
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
  };
};

onMounted(async () => {
  chartData02.value = setChartData02();
  chartOptions02.value = setChartOptions02();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});
</script>
