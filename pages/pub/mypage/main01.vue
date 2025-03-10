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
            <Tabs value="0">
              <TabList>
                <Tab value="0">영업점 전문분야</Tab>
                <Tab value="1">본부 전문분야</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <div class="ibk-mypage-main-roadmap-button">
                    <Button label="개인금융" severity="secondary" text class="active" />
                    <Button label="PB" severity="secondary" text />
                    <Button label="여신" severity="secondary" text />
                    <Button label="외환" severity="secondary" text />
                  </div>
                  <Chart type="radar" :data="chartData01" :options="chartOptions01" />
                </TabPanel>
                <TabPanel value="1"> 2 </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        <div class="ibk-mypage-main-myskill">
          <div class="ibk-mypage-main-myskill-head">
            <h5>My Skill</h5>
          </div>
          <div class="ibk-mypage-main-myskill-body">
            <div class="ibk-myskill">
              <div class="ibk-myskill-title">
                전체학습시간
                <strong>124H</strong>
              </div>
              <div class="ibk-myskill-chart">
                <div class="ibk-myskill-chart-bubble">
                  <p>
                    재무회계
                    <strong>20H</strong>
                  </p>
                  <p>
                    PB
                    <strong>15H</strong>
                  </p>
                  <p>
                    여신
                    <strong>10H</strong>
                  </p>
                  <p>
                    외환
                    <strong>8H</strong>
                  </p>
                  <p>
                    컴플라이언스
                    <strong>5H</strong>
                  </p>
                </div>
                <div class="ibk-myskill-chart-label">
                  <span class="purple">재무회계</span>
                  <span class="blue">PB</span>
                  <span class="cyan">여신</span>
                  <span class="lavender">외환</span>
                  <span class="orange">컴플라이언스</span>
                </div>
              </div>
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
                3급 부점장 보임자격
              </p>
              <span>연수 평정점수(10점) : 기본점수 (3점) + 학점취득점수(7점)</span>
            </div>
            <div class="ibk-main-my-hrd-state">
              <div class="ibk-main-my-hrd-state-section" style="min-width: 800px">
                <h4><i class="ibk-icon-24-medal"></i>학점이수</h4>
                <dl>
                  <dt class="checked">
                    <span class="text-primary">이수완료</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-hrd-state-item checked">
                      <strong>필수학점</strong>
                      <p>4/4 이수완료</p>
                    </div>
                    <div class="ibk-main-my-hrd-state-item">
                      <strong>선택학점</strong>
                      <p>4/4 이수</p>
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="ibk-main-my-hrd-state-section">
                <h4><i class="ibk-icon-24-medal"></i>연수평정점수</h4>
                <dl>
                  <dt class="none">
                    <span class="text-primary">9.79 / 10</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-hrd-state-item none">
                      <strong>연수평균</strong>
                      <p>97점</p>
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

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="자료실"></Button><br /><br />
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-skill">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-skill__title">나의 대표 skill 설정</div>
    </template>

    <div class="ibk-dialog-skill-list">
      <div class="ibk-radio ibk-radio--type2">
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio1" value="radio1" />
          <label for="radio1" class="ml-2">여권심사</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio2" value="radio2" />
          <label for="radio2" class="ml-2">자산운영</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio3" value="radio3" />
          <label for="radio3" class="ml-2">외환</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio4" value="radio4" />
          <label for="radio4" class="ml-2">개인소호</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio5" value="radio5" />
          <label for="radio5" class="ml-2">디지털</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio6" value="radio6" />
          <label for="radio6" class="ml-2">PB</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio7" value="radio7" />
          <label for="radio7" class="ml-2">컴플라이언스</label>
        </div>
        <div class="ibk-radio-item">
          <RadioButton v-model="radio" inputId="radio8" value="radio8" />
          <label for="radio8" class="ml-2">IB</label>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-skill__button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>
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
    labels: ['마케팅기획', '수신', '제도', '개인여신'], // 이미지에 맞게 수정
    datasets: [
      {
        label: '나',
        backgroundColor: 'rgba(72, 157, 255, 0.3)', // 이미지와 유사한 파란색 배경
        borderWidth: 0,
        pointRadius: 0,
        data: [90, 70, 50, 30], // 예제 데이터 (이미지 참고)
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
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100, // 최대값을 100으로 설정
        ticks: {
          stepSize: 20,
          display: true, // 눈금 표시
        },
        grid: {
          color: '#ddd', // 그리드 색상 연하게
        },
        angleLines: {
          color: '#eee', // 축선 색상 연하게
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 제거
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

const modal01 = ref(false);
const radio = ref('');
</script>
