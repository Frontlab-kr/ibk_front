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
                    수강기간 2022.12.19 - 2023.02.08
                    <hr />
                    12pt

                    <div>
                      콘텐츠 4개
                      <hr />
                      평가 2회
                      <hr />
                      설문 1회
                      <hr />
                      자격증 최소 2개 획득
                      <hr />
                      인재개발원
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

        <Card v-if="noticeCount > 0" class="ibk-lectureroom-notice">
          <template #content>
            <div class="ibk-lectureroom-notice-head">
              <h3>공지사항</h3>
              <Button as="a" label="더보기" :href="`/course/notice/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`" rel="noopener" link icon="ibk-icon-16-arrow" iconPos="right" />
            </div>
            <div class="ibk-lectureroom-notice-list">
              <NuxtLink v-for="(item, idx) of courseNotice" :to="`/course/notice/detail?edctPbnsNo=${item.edctPbnsNo}`" class="ibk-lectureroom-notice-list-item">
                <div class="ibk-lectureroom-notice-list-item__start">
                  <div class="ibk-lectureroom-notice-list-item__title">
                    <div class="ibk-lectureroom-notice-list-item__badge">
                      <Badge value="공지" severity="secondary"></Badge>
                    </div>
                    <p>{{ item.edctPbnsTtlNm }}</p>
                    <i v-if="item.atchCnt > 0" class="ibk-icon-24-clip"></i>
                  </div>
                </div>
                <div class="ibk-lectureroom-notice-list-item__end">
                  <div class="ibk-lectureroom-notice-list-item__date">{{ item.cretTs }}</div>
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
                  <div class="ibk-lectureroom-index-list__title">Chapter 1 <span>데이터 라벨링 기초 이론</span></div>
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
                          <div class="ibk-lectureroom-index-list-item__text">출석</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">출석</div>
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
                          <div class="ibk-lectureroom-index-list-item__text">30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-intersection"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>4회차 집합연수</p>
                          <div class="ibk-lectureroom-index-list-item__text">30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-book"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>5회차 과제</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
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
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-chat"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>7호차 설문</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="참여예정"
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
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="ibk-lectureroom-index-list__title">Chapter 2 <span>데이터 라벨링 기초 이론</span></div>
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
                          <div class="ibk-lectureroom-index-list-item__text">출석</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">출석</div>
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
                          <div class="ibk-lectureroom-index-list-item__text">30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-intersection"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>4회차 집합연수</p>
                          <div class="ibk-lectureroom-index-list-item__text">30분</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">30분</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-book"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>5회차 과제</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
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
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
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
                    <div class="ibk-lectureroom-index-list-item">
                      <div class="ibk-lectureroom-index-list-item__start">
                        <div class="ibk-lectureroom-index-list-item__icon">
                          <i class="ibk-icon-lectureroom-chat"></i>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__title">
                          <p>7호차 설문</p>
                          <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        </div>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__end">
                        <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                        <div class="ibk-lectureroom-index-list-item__badge">
                          <Badge
                            value="참여예정"
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
          <Card v-if="questionCount > 0">
            <template #content>
              <div class="ibk-lectureroom-board">
                <div class="ibk-lectureroom-board-head">
                  <h3>Q&A</h3>
                  <Button as="a" label="전체보기" :href="`/course/question/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`" rel="noopener" link />
                </div>
                <div class="ibk-lectureroom-board-list">
                  <NuxtLink v-for="(item, idx) of courseQna" :to="`/course/question/detail?edctQstnNo=${item.edctQstnNo}`" class="ibk-lectureroom-board-list-item">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge :value="item.answText" :style="item.answStyle"/>
                        </div>
                        <p>{{ item.edctQstnTtlNm }}</p>
                        <i v-if="item.atchCnt > 0" class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">{{ item.cretTs }}</div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </Card>
          <Card v-if="libraryCount > 0">
            <template #content>
              <div class="ibk-lectureroom-board">
                <div class="ibk-lectureroom-board-head">
                  <h3>자료실</h3>
                  <Button as="a" label="전체보기" :href="`/course/library/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`" rel="noopener" link />
                </div>
                <div class="ibk-lectureroom-board-list">
                  <NuxtLink v-for="(item, idx) of courseLibrary" :to="`/course/library/detail?atchNo=${item.atchNo}`" class="ibk-lectureroom-board-list-item">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge value="자료실" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                        </div>
                        <p>{{ item.ttlNm }}</p>
                        <i v-if="item.atchCnt > 0" class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">{{ item.cretTs }}</div>
                    </div>
                    <div class="ibk-lectureroom-board-list-item__end">
                      <div class="ibk-lectureroom-board-list-item__view">
<!--                        <i class="ibk-icon-20-view"></i> 355-->
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
<!--  <ConfirmDialog></ConfirmDialog>
  <Dialog v-model:visible="modal01" modal header="QR 출석 코드 스캔" class="ibk-dialog p-confirmdialog">
    출석을 위해 QR 코드를 스캔해주세요.
    <div class="ibk-dialog-qr">
      <div class="ibk-dialog-qr__code">
        <img src="../../assets/images/QR_code.png" alt="" />
      </div>
    </div>
    <template #footer>
      <Button type="button" label="확인" severity="secondary" @click="modal01 = false"></Button>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="QR 출석 확인"></Button><br /><br />
    <Button @click="modal01 = true" label="QR 출석 코드 스캔"></Button>
  </div>-->
</template>

<script setup lang="ts">
import { useQuestionStore } from '~/domains/course/question';
import { useLibraryStore } from '~/domains/course/library';
import type { CourseQuestionPageInqInVo } from '~/api-client';
import { ref, onMounted } from 'vue';
import { useNoticeStore } from '~/domains/course/notice';
import { useEducationStore } from '~/domains/course/education';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const confirm = useConfirm();
const courseNoticeStore = useNoticeStore();
const courseQnaStore = useQuestionStore();
const courseLibraryStore = useLibraryStore();
const courseNotice = ref<any>();
const courseQna = ref<any>();
const courseLibrary = ref<any>();
const route = useRoute();
const dutyEdctCd = ref<string | null>(route.query.dutyEdctCd as string);
const edctDsprNo = ref<string | null>(route.query.edctDsprNo as string);
const noticeCount = ref<number>(0);
const questionCount = ref<number>(0);
const libraryCount = ref<number>(0);


const pageParam = reactive<CourseQuestionPageInqInVo>({
  pageNo: 1,
  pageSize: 3,
  dutyEdctCd: dutyEdctCd.value,
  edctDsprNo: Number(edctDsprNo.value)
});

const getCourseNoticeList = async () => {
  courseNotice.value = [];
  await courseNoticeStore.getCourseNoticeList(pageParam);
  if(courseNoticeStore.courseNoticeData.data && courseNoticeStore.courseNoticeData.data.response.contentsNbi > 0) {
    courseNotice.value = courseNoticeStore.courseNoticeData.data.response.contents;
    noticeCount.value = courseNotice.value.length;
    // console.log('notice : ',courseNotice.value)
    courseNotice.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0,10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-','.') + ' ~ ' + x.answCretTs.replaceAll('-','.') : x.cretTs;
    })
  } else {
    noticeCount.value = 0;
    courseNotice.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const getCourseQnaList = async () => {
  courseQna.value = [];
  await courseQnaStore.getCourseQuestionList(pageParam);
  if(courseQnaStore.courseQuestionData.data && courseQnaStore.courseQuestionData.data.response.contentsNbi > 0) {
    courseQna.value = courseQnaStore.courseQuestionData.data.response.contents;
    questionCount.value = courseQna.value.length;
    // console.log('qna : ',courseQna.value)
    courseQna.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0,10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-','.') + ' ~ ' + x.answCretTs.replaceAll('-','.') : x.cretTs;
      x.answText = x.answCretTs && x.answCretTs.length > 0 ? '답변완료' : '답변대기';
      x.answStyle = x.answCretTs && x.answCretTs.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
    })
  } else {
    questionCount.value = 0;
    courseQna.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const getCourseLibraryList = async () => {
  courseLibrary.value = [];
  await courseLibraryStore.getCourseLibraryList(pageParam);
  if(courseLibraryStore.courseLibraryData.data && courseLibraryStore.courseLibraryData.data.response.contentsNbi > 0) {
    courseLibrary.value = courseLibraryStore.courseLibraryData.data.response.contents;
    libraryCount.value = courseLibrary.value.length;
    // console.log('library : ',courseLibrary.value)
    courseLibrary.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0,10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0,10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-','.') + ' ~ ' + x.answCretTs.replaceAll('-','.') : x.cretTs;
    })
  } else {
    libraryCount.value = 0;
    courseLibrary.value = {
      success: true,
      response: {contents:[], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0},
      error: null
    };
  }
}

const confirm1 = () => {
  confirm.require({
    header: 'QR 출석 확인',
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

onMounted(async () => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});

</script>
