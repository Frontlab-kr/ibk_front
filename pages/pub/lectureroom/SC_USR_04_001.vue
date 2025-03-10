<template>
  <div class="ibk-background">
    <div class="ibk-inner">
      <div class="ibk-lectureroom">
        <div class="ibk-lectureroom-back">
          <Button icon="ibk-icon-24-arrowleft" label="목록" severity="secondary" link />
        </div>
        <Card>
          <template #content>
            <div class="ibk-lectureroom-head">
              <div class="ibk-lectureroom-head__start">
                <div class="ibk-lectureroom-head-chart">
                  <Chart type="doughnut" :data="chartData" :options="chartOptions" />
                  <div class="ibk-lectureroom-head-chart__title">수강중</div>
                </div>
                <div class="ibk-lectureroom-head-title">
                  <h3>IBK 사이버 기업회계</h3>
                  <div class="ibk-lectureroom-head-title__text">
                    <div>
                      수강기간 2022.12.19 - 2023.02.08
                      <hr />
                      12pt
                    </div>

                    <div>
                      콘텐츠 4개
                      <hr />
                      평가 2회
                      <hr />
                      설문 1회
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-lectureroom-head__end">
                <div class="ibk-lectureroom-head-button">
                  <div class="ibk-lectureroom-head-button__book">
                    <Button icon="ibk-icon-16-book" label="교재파일" severity="secondary" outlined />
                  </div>
                  <div class="ibk-lectureroom-head-button__play">
                    <Button icon="ibk-icon-16-play" label="학습하기" rounded />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <Card class="ibk-lectureroom-notice">
          <template #content>
            <div class="ibk-lectureroom-notice-head">
              <h3>공지사항</h3>
              <Button as="a" label="더보기" href="" rel="noopener" link icon="ibk-icon-16-arrow" iconPos="right" />
            </div>
            <div class="ibk-lectureroom-notice-list">
              <NuxtLink to="/" class="ibk-lectureroom-notice-list-item" v-for="i of 3">
                <div class="ibk-lectureroom-notice-list-item__start">
                  <div class="ibk-lectureroom-notice-list-item__title">
                    <div class="ibk-lectureroom-notice-list-item__badge">
                      <Badge value="공지" severity="secondary"></Badge>
                    </div>
                    <p>
                      온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미
                      수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청
                      안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내
                    </p>
                    <i class="ibk-icon-24-clip"></i>
                  </div>
                </div>
                <div class="ibk-lectureroom-notice-list-item__end">
                  <div class="ibk-lectureroom-notice-list-item__date">2024.07.23</div>
                </div>
              </NuxtLink>
            </div>
          </template>
        </Card>

        <Card class="ibk-lectureroom-index">
          <template #content>
            <div class="ibk-lectureroom-index__title">
              과정 목차
              <strong>10/30 완료됨</strong>
            </div>
            <Accordion :value="['0']" multiple>
              <AccordionPanel value="0">
                <AccordionHeader>
                  <div class="ibk-lectureroom-index-list__title">
                    <p>Chapter 1 <span>사이버 기업회계 이론</span></p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="ibk-lectureroom-index-list">
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-camera"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>
                            1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상
                            콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차
                            동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상
                            콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠
                          </p>
                          <div class="ibk-lectureroom-index-list-item__text">출석 / 50분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">출석 / 50분</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="학습종료"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #f3f4f7; color: #5a5e6c"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-tv"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>2회차 외부콘텐츠</p>
                          <div class="ibk-lectureroom-index-list-item__text">73% / 30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">73% / 30분</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="진행중"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #308af2; color: #ffffff"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-play"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>3회차 LIVE</p>
                          <div class="ibk-lectureroom-index-list-item__text">30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">97% / 45분</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="학습종료"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #f3f4f7; color: #5a5e6c"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-intersection"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>4회차 집합연수</p>
                          <div class="ibk-lectureroom-index-list-item__text">55% / 2시간</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">55% / 2시간</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="진행중"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #308af2; color: #ffffff"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-book"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>5회차 과제</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.00~2025.00.00</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.00~2025.00.00</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="미제출"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #fae1df; color: #ee473d"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-document"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>6회차 시험</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="미응시"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #fae1df; color: #ee473d"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-chat"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>7호차 설문</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="진행예정"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #e4f2ff; color: #234eaa"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="ibk-lectureroom-index-list__title">
                    <p>Chapter 2 <span>사이버 기업회계 실무</span></p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="ibk-lectureroom-index-list">
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-camera"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>1회차 동영상 콘텐츠</p>
                          <div class="ibk-lectureroom-index-list-item__text">출석 / 50분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">출석 / 50분</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="학습종료"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #f3f4f7; color: #5a5e6c"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-tv"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>2회차 외부콘텐츠</p>
                          <div class="ibk-lectureroom-index-list-item__text">97% / 45분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">97% / 45분</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="진행중"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #308af2; color: #ffffff"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-play"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>3회차 LIVE</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.00.00</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="응시완료"
                            size="large"
                            class="p-badge-rounded"
                            style="background: #f3f4f7; color: #5a5e6c"
                          ></Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </template>
        </Card>

        <div class="ibk-lectureroom-foot">
          <Card>
            <template #content>
              <div class="ibk-lectureroom-board">
                <div class="ibk-lectureroom-board-head">
                  <h3>Q&A</h3>
                  <Button as="a" label="전체보기" href="" rel="noopener" link />
                </div>
                <div class="ibk-lectureroom-board-list">
                  <NuxtLink to="/" class="ibk-lectureroom-board-list-item" v-for="i of 2">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge value="답변 대기" style="background: #e4f2ff; color: #1654d1"></Badge>
                        </div>
                        <p>온라인아카데미 수강신청 안내온라인아카데미</p>
                        <i class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">2022.02.01-2022.02.14</div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/" class="ibk-lectureroom-board-list-item">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge value="답변 완료" style="background: #234eaa; color: #ffffff"></Badge>
                        </div>
                        <p>온라인아카데미</p>
                        <i class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">2022.02.01-2022.02.14</div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template #content>
              <div class="ibk-lectureroom-board">
                <div class="ibk-lectureroom-board-head">
                  <h3>자료실</h3>
                  <Button as="a" label="전체보기" href="" rel="noopener" link />
                </div>
                <div class="ibk-lectureroom-board-list">
                  <NuxtLink to="/" class="ibk-lectureroom-board-list-item" v-for="i of 3">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                        </div>
                        <p>
                          온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청
                          안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청
                          안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내온라인아카데미 수강신청 안내
                        </p>
                        <i class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">2022.02.01-2022.02.14</div>
                    </div>
                    <div class="ibk-lectureroom-board-list-item__end">
                      <div class="ibk-lectureroom-board-list-item__view">
                        <i class="ibk-icon-20-view"></i>
                        355
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
  <Dialog v-model:visible="modal01" modal header="QR 출석 코드 스캔" class="p-confirmdialog">
    <div class="ibk-dialog-qr">
      출석을 위해 QR 코드를 스캔해주세요.
      <div class="ibk-dialog-qr__code">
        <img src="../../../assets/images/QR_code.png" alt="" />
      </div>
    </div>
    <template #footer>
      <Button type="button" label="확인" severity="secondary" @click="modal01 = false"></Button>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="QR 출석 확인"></Button><br /><br />
    <Button @click="modal01 = true" label="QR 출석 코드 스캔"></Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const modal01 = ref(false);
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: 'QR  출석이 확인 되었습니다.',
    rejectProps: {
      label: '닫기',
      severity: 'link',
      size: 'large',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
    reject: () => {
      confirm.close();
    },
  });
};

import { ref, onMounted } from 'vue';

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

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
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    cutout: '77%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
};
</script>
