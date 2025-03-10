<template>
  <div class="ibk-main">
    <div class="ibk-main-kv">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectFade, SwiperNavigation, SwiperMousewheel]"
        :effect="'fade'"
        :navigation="true"
        :pagination="{ type: 'fraction' }"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide>
          <div class="ibk-main-kv__bg">
            <div class="pc">
              <img src="/assets/images/main01.png" alt="" />
            </div>
            <div class="mo">
              <img src="/assets/images/mo-main01.png" alt="" />
            </div>
          </div>
          <div class="ibk-inner">
            <div class="ibk-main-kv__info">
              <div class="ibk-main-kv__wrap">
                <div class="ibk-main-kv__title">사이버연수 신청기간안내</div>
                <div class="ibk-main-kv__text">매월 최대 2개 과정 설립가능!</div>
              </div>
              <div class="ibk-main-kv__button">
                <Button label="자세히보기" severity="white" class="w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="ibk-main-kv__bg">
            <div class="pc">
              <img src="/assets/images/main02.png" alt="" />
            </div>
            <div class="mo">
              <img src="/assets/images/mo-main01.png" alt="" />
            </div>
          </div>
          <div class="ibk-inner">
            <div class="ibk-main-kv__info">
              <div class="ibk-main-kv__wrap">
                <div class="ibk-main-kv__title">사이버연수 신청기간안내</div>
                <div class="ibk-main-kv__text">매월 최대 2개 과정 설립가능!</div>
              </div>
              <div class="ibk-main-kv__button">
                <Button label="자세히보기" severity="white" class="w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="ibk-main-kv__bg">
            <div class="pc">
              <img src="/assets/images/main03.png" alt="" />
            </div>
            <div class="mo">
              <img src="/assets/images/mo-main01.png" alt="" />
            </div>
          </div>
          <div class="ibk-inner">
            <div class="ibk-main-kv__info">
              <div class="ibk-main-kv__wrap">
                <div class="ibk-main-kv__title">I-Book 연수 실시 - 디지털 독서 연수</div>
                <div class="ibk-main-kv__text">
                  2024년 하반기 필독도서 「 몰입(저자 황농문) 」<br />
                  이북리더기, PC 및 모바일 등 최대 5개 기기 동시접속 가능<br />
                  ㅣ학습기간ㅣ 7월 1일 ~ 12월 31일
                </div>
              </div>
              <div class="ibk-main-kv__button">
                <Button label="자세히보기" severity="white" class="w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="ibk-main-kv__bg">
            <div class="pc">
              <img src="/assets/images/main04.png" alt="" />
            </div>
            <div class="mo">
              <img src="/assets/images/mo-main01.png" alt="" />
            </div>
          </div>
          <div class="ibk-inner">
            <div class="ibk-main-kv__info">
              <div class="ibk-main-kv__wrap">
                <div class="ibk-main-kv__title">I-Book 연수 실시 - 디지털 독서 연수</div>
                <div class="ibk-main-kv__text">
                  2024년 하반기 필독도서 「 몰입(저자 황농문) 」<br />
                  이북리더기, PC 및 모바일 등 최대 5개 기기 동시접속 가능<br />
                  ㅣ학습기간ㅣ 7월 1일 ~ 12월 31일
                </div>
              </div>
              <div class="ibk-main-kv__button">
                <Button label="자세히보기" severity="white" class="w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperControls />
      </Swiper>
    </div>

    <div class="ibk-main-quick">
      <div class="ibk-inner">
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick01"></i>
          </p>
          <span> 학습자료실 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick02"></i>
          </p>
          <span> 학원수강료 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick03"></i>
          </p>
          <span> 시험응시료 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick04"></i>
          </p>
          <span> 어학성적등록 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick05"></i>
          </p>
          <span> 학자금등록 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick06"></i>
          </p>
          <span> 학술연수신청 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick07"></i>
          </p>
          <span> IBK Tube </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <i class="ibk-icon-56-quick08"></i>
          </p>
          <span> I B@@K </span>
        </NuxtLink>
      </div>
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-my">
        <div class="ibk-main-my-info">
          <div class="ibk-main-my-info-head">
            <h5>김기은님, 환영합니다</h5>
            <span> 결제건수 <strong>3</strong>건 </span>
          </div>
          <div class="ibk-main-my-info-body">
            <NuxtLink to="/" class="ibk-main-my-info-body-item" v-for="i in 3">
              <div class="ibk-main-my-info-body-item__title">
                <Badge value="진행중" style="background: #30323b; color: #fff"></Badge>
                <p>사모펀드의 이해와 투자 전략</p>
              </div>
              <div class="ibk-main-my-info-body-item__date">2025.01.01-2025.01.01</div>
            </NuxtLink>
          </div>
        </div>
        <div class="ibk-main-my-tabs">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Talents Board</Tab>
              <Tab value="1">학습자료</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="ibk-main-my-talents">
                  <div class="ibk-main-my-talents-head">
                    <h5>
                      <i class="ibk-icon-24-radioCheck"></i>
                      스킬현황
                    </h5>
                    <Button label="자세히보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" />
                  </div>
                  <div class="ibk-main-my-talents-body">
                    <div class="ibk-main-my-talents-chart">
                      <div class="pc">
                        <Chart type="radar" :data="chartData01" :options="chartOptions01" />
                      </div>
                      <div class="mo">
                        <Chart type="radar" :data="chartData02" :options="chartOptions02" />
                      </div>
                    </div>
                    <hr />
                    <div class="ibk-main-my-talents-list">
                      <NuxtLink to="/" class="ibk-main-my-talents-list-item">
                        <div class="ibk-main-my-talents-list-item__title">
                          <strong>사용</strong>
                          <p>목표설정</p>
                        </div>
                        <div class="ibk-main-my-talents-list-item__date">2025.01.01-2025.01.01</div>
                        <div class="ibk-main-my-talents-list-item__badge">
                          <Badge value="200명" style="background: #308af2; color: #fff"></Badge>
                        </div>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-main-my-talents-list-item">
                        <div class="ibk-main-my-talents-list-item__title">
                          <strong>사용</strong>
                          <p>목표미설정</p>
                        </div>
                        <div class="ibk-main-my-talents-list-item__date">2025.01.01-2025.01.01</div>
                        <div class="ibk-main-my-talents-list-item__badge">
                          <Badge value="10명" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
                        </div>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-main-my-talents-list-item">
                        <div class="ibk-main-my-talents-list-item__title">
                          <strong>사용</strong>
                          <p>목표설정율</p>
                        </div>
                        <div class="ibk-main-my-talents-list-item__date">2025.01.01-2025.01.01</div>
                        <div class="ibk-main-my-talents-list-item__badge">
                          <Badge value="95%" style="background: #308af2; color: #fff"></Badge>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="ibk-main-my-data">
                  <div class="ibk-main-my-data-head">
                    <h5>
                      <i class="ibk-icon-24-radioCheck"></i>
                      학습자료
                    </h5>
                    <Button label="자세히보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" />
                  </div>
                  <div class="ibk-main-my-data-body">
                    <NuxtLink to="/" class="ibk-main-my-data-body-item" v-for="i in 3">
                      <div class="ibk-main-my-data-body-item__title">
                        <Badge value="카테고리" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                        <p>1월 IBK사이버 학습자료 안내</p>
                      </div>
                      <div class="ibk-main-my-data-body-item__date">2025.01.01</div>
                    </NuxtLink>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-swiper ibk-main-swiper--grid-view02" id="ibkMainSwiper01">
        <div class="ibk-main-swiper-head">
          <h5>지금 주목받는 인기 강의</h5>
          <div class="ibk-main-swiper-head-button">
            <Button icon="ibk-icon-32-main-prev" text rounded />
            <Button icon="ibk-icon-32-main-next" text rounded />
          </div>
        </div>
        <div class="ibk-main-swiper-body">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
            :space-between="0"
            :slides-per-view="4"
            :loop="true"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :navigation="{
              nextEl: '#ibkMainSwiper01 .ibk-icon-32-main-next',
              prevEl: '#ibkMainSwiper01 .ibk-icon-32-main-prev',
            }"
            :breakpoints="{
              '993': {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }"
          >
            <SwiperSlide v-for="slide in 10" :key="slide">
              <pubProduct02 :thumb="true" :heart="true" :eyebrow="true" :title="true" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-swiper ibk-main-swiper--per-view02" id="ibkMainSwiper02">
        <div class="ibk-main-swiper-head">
          <h5>실시간 최신 업데이트 강의 </h5>
          <div class="ibk-main-swiper-head-button">
            <Button icon="ibk-icon-32-main-prev" text rounded />
            <Button icon="ibk-icon-32-main-next" text rounded />
          </div>
        </div>
        <div class="ibk-main-swiper-body">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
            :space-between="8"
            :slides-per-view="2"
            :loop="true"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :navigation="{
              nextEl: '#ibkMainSwiper02 .ibk-icon-32-main-next',
              prevEl: '#ibkMainSwiper02 .ibk-icon-32-main-prev',
            }"
            :breakpoints="{
              '993': {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }"
          >
            <SwiperSlide v-for="slide in 10" :key="slide">
              <pubProduct02 :thumb="true" :heart="true" :eyebrow="true" :title="true" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-review">
        <div class="ibk-main-review-head">
          <h5>베스트 수강후기</h5>
          <div class="ibk-main-review-head-button">
            <Button icon="ibk-icon-32-main-prev" text rounded />
            <Button icon="ibk-icon-32-main-next" text rounded />
          </div>
        </div>
        <div class="ibk-main-review-body" id="ibkMainReview">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
            :space-between="16"
            :slides-per-view="1"
            :loop="true"
            :navigation="{
              nextEl: '#ibkMainReview .swiper-button-next',
              prevEl: '#ibkMainReview .swiper-button-prev',
            }"
            :breakpoints="{
              '993': {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }"
          >
            <SwiperSlide v-for="slide in 10" :key="slide">
              <div class="ibk-main-review-item">
                <div class="ibk-main-review-item-head">
                  <div class="ibk-main-review-item-head__thumb">
                    <img src="https://picsum.photos/114/64" alt="" />
                  </div>
                  <div class="ibk-main-review-item-head__title">
                    <strong>
                      계약서 작성 실무 Ⅱ (일상업무 사전검토 기준)계약서 작성 실무 Ⅱ (일상업무 사전검토 기준)계약서 작성
                      실무 Ⅱ (일상업무 사전검토 기준)
                    </strong>
                    <p>업무지식</p>
                  </div>
                </div>
                <div class="ibk-main-review-item-body">
                  <div class="ibk-main-review-item-body-head">
                    <span>김기은</span>
                    <Rating v-model="rating" readonly />
                    <strong>5.0</strong>
                  </div>
                  <p>
                    생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직 갈 길은 많이 남았지만, 나아가는 방향과 생각의
                    패러다임을 근본적으로 바꿔준 강의였습니다. 아직은가야할 길은 많이 남았지만, 나아가는 방향과 생각의
                    패러다임을 근본적으로 바꿔준 강의였습니다. 생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직 갈
                    길은 많이 남았지만, 나아가는 방향과 생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직은가야할
                    길은 많이 남았지만, 나아가는 방향과 생각의 패러다임을 근본적으로 바꿔준 강의였습니다.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-board">
        <div class="ibk-main-board-section">
          <div class="ibk-main-board-head">
            <h5>공지사항</h5>
            <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" />
          </div>
          <div class="ibk-main-board-list">
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <div class="ibk-main-board-list-item__badge">
                    <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                  </div>
                  <p>1월 IBK사이버제휴 변경과정 목록</p>
                </div>
              </div>
              <div class="ibk-main-board-list-item__end">
                <div class="ibk-main-board-list-item__date">2025.01.01</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <div class="ibk-main-board-list-item__badge">
                    <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                  </div>
                  <p>어학과정 신청 시 유의사항</p>
                </div>
              </div>
              <div class="ibk-main-board-list-item__end">
                <div class="ibk-main-board-list-item__date">2025.01.01</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <div class="ibk-main-board-list-item__badge">
                    <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                  </div>
                  <p>스마트러닝 APP 설치방법 안내</p>
                </div>
              </div>
              <div class="ibk-main-board-list-item__end">
                <div class="ibk-main-board-list-item__date">2025.01.01</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <p>1월 IBK사이버제휴 변경과정 목록</p>
                  <i class="ibk-icon-24-clip"></i>
                </div>
              </div>
              <div class="ibk-main-board-list-item__end">
                <div class="ibk-main-board-list-item__date">2025.01.01</div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="ibk-main-board-section">
          <div class="ibk-main-board-head">
            <h5>연간 연수일정</h5>
            <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" />
          </div>
          <div class="ibk-main-board-list">
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <p>[바른경영전담역 25년 상반기] 직무과정</p>
                </div>
                <div class="ibk-main-board-list-item__date">2025.01.01-2025.01.01</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <p>「차세대리더 Re:Boot 연수」 1회차</p>
                </div>
                <div class="ibk-main-board-list-item__date">2025.01.01-2025.01.01</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="ibk-main-board-list-item">
              <div class="ibk-main-board-list-item__start">
                <div class="ibk-main-board-list-item__title">
                  <p>「차세대리더 Re:Boot 연수」 2 회차</p>
                </div>
                <div class="ibk-main-board-list-item__date">2025.01.01-2025.01.01</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'pub',
});

const rating = ref(3);

import pubProduct02 from '@/components/pubProduct02.vue';

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
        position: 'right',
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

const setChartOptions02 = () => {
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
  chartData02.value = setChartData02();
  chartOptions02.value = setChartOptions02();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});
</script>
