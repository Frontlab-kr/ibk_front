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
            <div class="pc" style="background: #f60">
              <!-- <img src="/assets/images/main01.png" alt="" /> -->
              <img src="https://picsum.photos/1920/400" alt="" />
            </div>
            <div class="mo" style="background: #f60">
              <!-- <img src="/assets/images/mo-main01.png" alt="" /> -->
              <img src="https://picsum.photos/1000/1000" alt="" />
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
            <div class="pc" style="background: blue">
              <img src="/assets/images/main02.png" alt="" />
            </div>
            <div class="mo" style="background: blue">
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
            <div class="pc" style="background: green">
              <img src="/assets/images/main03.png" alt="" />
            </div>
            <div class="mo" style="background: green">
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
            <div class="pc" style="background: red">
              <img src="/assets/images/main04.png" alt="" />
            </div>
            <div class="mo" style="background: red">
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
            <img src="/assets/images/icon/56/quick01.svg" alt="" />
          </p>
          <span> 학습자료실 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick02.svg" alt="" />
          </p>
          <span> 학원수강료 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick03.svg" alt="" />
          </p>
          <span> 시험응시료 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick04.svg" alt="" />
          </p>
          <span> 어학성적등록 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick05.svg" alt="" />
          </p>
          <span> 학자금등록 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick06.svg" alt="" />
          </p>
          <span> 학술연수신청 </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick07.svg" alt="" />
          </p>
          <span> IBK Tube </span>
        </NuxtLink>
        <NuxtLink to="/" class="ibk-main-quick-item">
          <p>
            <img src="/assets/images/icon/56/quick08.svg" alt="" />
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
              <Tab value="0">My Skill</Tab>
              <Tab value="1">My HRD</Tab>
              <Tab value="2">학습자료</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
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
              </TabPanel>
              <TabPanel value="1">
                <div class="ibk-main-my-hrd">
                  <div class="ibk-main-my-hrd-head">
                    <p>
                      <i class="ibk-icon-24-radioCheck"></i>
                      3급 부점장 보임자격
                    </p>
                    <span>연수 평정점수(10점) : 기본점수 (3점) + 학점취득점수(7점)</span>
                  </div>
                  <div class="ibk-main-my-hrd-state">
                    <div class="ibk-main-my-hrd-state-section">
                      <h4><i class="ibk-icon-24-medal"></i>학점이수</h4>
                      <dl>
                        <dt class="checked">
                          <span class="text-primary">이수완료</span>
                        </dt>
                        <dd>
                          <div class="ibk-main-my-skill-state-item checked">
                            <strong>필수학점</strong>
                            <p>4/4 이수완료</p>
                          </div>
                          <div class="ibk-main-my-skill-state-item">
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
                          <div class="ibk-main-my-skill-state-item none">
                            <strong>연수평균</strong>
                            <p>97점</p>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
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

  <Dialog v-model:visible="modal01" modal class="ibk-dialog-main">
    <div class="ibk-dialog-main__contents">
      <img src="https://picsum.photos/1080/520" alt="" />
    </div>
    <div class="ibk-dialog-main__foot">
      <p>
        <Checkbox v-model="checked" :binary="true" />
        <label>오늘 하루 열지않음</label>
      </p>
      <Button icon="pi pi-times" severity="secondary" text rounded @click="modal01 = false" />
    </div>
  </Dialog>

  <Dialog
    v-model:visible="modal02"
    modal
    class="ibk-dialog-main ibk-dialog-main--text"
    header="제목이 들어갑니다. 제목이 들어갑니다. 제목이 들어갑니다. "
  >
    <div class="ibk-dialog-main__contents">
      <div>
        <p>2222</p>
        <p><br /></p>
        <p><br /></p>
        <p>
          222323ㅇㄴ리ㅏㄴ어리나어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏ넝리ㅏㄴ어리ㅏㄴ어리ㅏㄴ얼
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>\ㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇ</p>
        <p><br /></p>
        <p>ㄴㅇㄹㄴㄹㄴㄹ</p>
        <p><br /></p>
        <p id="isPasted">
          222323ㅇㄴ리ㅏㄴ어리나어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏㄴ어리ㅏ넝리ㅏㄴ어리ㅏㄴ어리ㅏㄴ얼
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>\ㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇ</p>
        <p><br /></p>
        <p>ㄴㅇㄹㄴㄹㄴㄹ</p>
      </div>
    </div>
    <div class="ibk-dialog-main__foot">
      <p>
        <Checkbox v-model="checked" :binary="true" />
        <label>오늘 하루 열지않음</label>
      </p>
      <Button label="닫기" severity="secondary" outlined @click="modal01 = false" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'pub',
});

const rating = ref(3);

import pubProduct02 from '@/components/pubProduct02.vue';

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['여권심사', '자산운영', '외환', '개인소호', '디지털', 'PB', '컴플라이언스', 'IB'],
    datasets: [
      {
        data: [50, 30, 20, 10, 5, 5, 5, 5],
        backgroundColor: ['#308AF2', '#30D158', '#FFCC00', '#FF81AE', '#8756ED', '#2ACAC8', '#666666', '#BBB'],
        borderColor: 'transparent', // 테두리 색상을 투명으로 설정
        borderWidth: 0, // 테두리의 두께를 0으로 설정
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10, // 아이콘 너비
          boxHeight: 8, // 아이콘 높이
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
};

onMounted(async () => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});

const modal01 = ref(false);
const modal02 = ref(false);
const checked = ref(false);
</script>
