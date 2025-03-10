<template>
  <div class="ibk-background">
    <div class="ibk-inner">
      <div class="ibk-lectureroom">
        <div class="ibk-lectureroom-back">
          <Button icon="ibk-icon-24-arrowleft" label="목록" severity="secondary" linki @click="handleBackClick" />
        </div>
        <Card>
          <template #content>
            <div class="ibk-lectureroom-head">
              <div class="ibk-lectureroom-head__start">
                <div class="ibk-lectureroom-head-chart">

                  <Chart type="doughnut" :data="chartData" :options="chartOptions" />
                  <div class="ibk-lectureroom-head-chart__title">{{ learningStatus }}</div>
                </div>
                <div class="ibk-lectureroom-head-title">
                  <h3>{{ myLearnStore.chapterLesson?.courseDegreeInfo?.dutyEdctNm }}</h3>
                  <div class="ibk-lectureroom-head-title__text">
                    <div>
                      수강기간 {{ formatDateRange(myLearnStore.chapterLesson?.courseDegreeInfo?.lrngSttgTs,
                      myLearnStore.chapterLesson?.courseDegreeInfo?.lrngFnshTs) }}
                      <!-- <hr /> -->
                      <div v-if="false">
                        12pt
                      </div>
                    </div>

                    <div>
                      <template v-if="myLearnStore.chapterLesson?.courseDegreeInfo">
                        <template v-for="(count, type) in compLearning.contentCounts.value" :key="type">
                          <template v-if="count && count > 0">
                            {{ compLearning.contentLabels[type] }} {{ count }}{{ compLearning.contentUnits[type] }}
                            <hr />
                          </template>
                        </template>
                      </template>
                      {{ myLearnStore.chapterLesson?.courseDegreeInfo?.parentDutyEdctNm }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-lectureroom-head__end">
                <div class="ibk-lectureroom-head-button">
                  <div class="ibk-lectureroom-head-button__book">
                    <Button icon="ibk-icon-16-book" label="교재파일" severity="secondary" outlined
                      @click="downloadBookFiles" />
                  </div>
                  <div class="ibk-lectureroom-head-button__play">
                    <Button icon="ibk-icon-16-play" label="학습하기" rounded
                      @click="() => ManagerLearning.getIns().moveToLesson(dutyEdctCd, edctDsprNo, null)" />
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
              <Button as="a" label="더보기"
                @click="navigateTo(`/course/notice/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"
                rel="noopener" link icon="ibk-icon-16-arrow" iconPos="right" />
            </div>
            <div class="ibk-lectureroom-notice-list">
              <div v-if="courseNotice.length > 0">
                <NuxtLink v-for="(item, idx) of courseNotice"
                  :to="`/course/notice/detail?edctPbnsNo=${item.edctPbnsNo}`" class="ibk-lectureroom-notice-list-item">
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
              <div v-else class="ibk-lectureroom-notice-list-empty pb-3" >
                공지사항이 없습니다.
              </div>
            </div>
          </template>
        </Card>

        <Card class="ibk-lectureroom-index">
          <template #content>
            <div class="ibk-lectureroom-index__title">
              과정 목차
              <strong>{{ compLearning.completedLessonsCount }}/{{ compLearning.totalLessonsCount }} 완료됨</strong>
            </div>
            <Accordion :value="['0']" multiple>
              <AccordionPanel v-for="(chapter, chapterIndex) in myLearnStore.chapterLesson?.courseDegreeChapter"
                :key="chapter.edctDsprChpaNo" :value="chapterIndex.toString()">
                <AccordionHeader>
                  <div class="ibk-lectureroom-index-list__title">
                    <p>Chapter {{ chapter.chpaSqc }} <span>{{ chapter.dutyEdctChpaNm }}</span></p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="ibk-lectureroom-index-list">
                    <div v-for="lesson in chapter.lessonList" :key="lesson.edctDsprLssoNo">
                      <log :item="lesson" />
                      
                      <div class="ibk-lectureroom-index-list-item" :class="{'disabled': (lesson as any).isDisabled}"
                         
                        @click="!(lesson as any).isDisabled && handleLessonClick(lesson)"
                      >
                        <div class="ibk-lectureroom-index-list-item__start">
                          <div class="ibk-lectureroom-index-list-item__icon">
                            <i :class="compLearning.getLessonIcon(lesson.connKcd!)"></i>
                          </div>
                          <div class="ibk-lectureroom-index-list-item__title">
                            <p>{{ lesson.dutyEdctLssoNm }}</p>
                            <div class="ibk-lectureroom-index-list-item__text">{{ compLearning.getLessonDuration(lesson)
                              }}</div>
                          </div>
                        </div>
                        <div class="ibk-lectureroom-index-list-item__end" style="align-items: center;">
                          <div class="ibk-lectureroom-index-list-item__text" style="font-size:0.9rem">
                            {{ compLearning.getLessonDuration(lesson) }}
                          </div>
                          <div v-if="lesson.connKcd === eLessonType.GROUP"
                            style="cursor: pointer; margin-right: 10px; margin-left: 10px;    align-items: center;">
                            <Button style="padding: 0; color: black;background-color: white;border:none;"
                              @click.stop="compLearning.openQRCodeModal(lesson)">
                              <i class="bi bi-qr-code"></i>
                            </Button>
                          </div>
                          <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge :value="ManagerLearning.getLessonStatusName(lesson)" 
                              size="large"
                              class="p-badge-rounded" 
                              :style="compLearning.getLessonStatusStyle(lesson)"
                            />
                          </div>
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
                  <Button as="a" label="더보기"
                    @click="navigateTo(`/course/question/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)" rel="noopener"
                    link icon="ibk-icon-16-arrow" iconPos="right" />
                </div>
                <div class="ibk-lectureroom-board-list" v-if="courseQna.length > 0">
                  <NuxtLink v-for="(item, idx) of courseQna"
                    :to="`/course/question/detail?edctQstnNo=${item.edctQstnNo}`"
                    class="ibk-lectureroom-board-list-item">
                    <div class="ibk-lectureroom-board-list-item__start">
                      <div class="ibk-lectureroom-board-list-item__title">
                        <div class="ibk-lectureroom-board-list-item__badge">
                          <Badge :value="item.answText" :style="item.answStyle" />
                        </div>
                        <p>{{ item.edctQstnTtlNm }}</p>
                        <i v-if="item.atchCnt > 0" class="ibk-icon-24-clip"></i>
                      </div>
                      <div class="ibk-lectureroom-board-list-item__date">{{ item.cretTs }}</div>
                    </div>
                  </NuxtLink>
                </div>
                <div v-else class="ibk-lectureroom-board-list-empty">
                  Q&A가 없습니다.
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template #content>
              <div class="ibk-lectureroom-board">
                <div class="ibk-lectureroom-board-head">
                  <h3>자료실</h3>
                  <Button as="a" label="더보기"
                    @click="navigateTo(`/course/library/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"
                    rel="noopener" link icon="ibk-icon-16-arrow" iconPos="right" />
                </div>
                <div class="ibk-lectureroom-board-list" v-if="courseLibrary.length > 0">
                  <NuxtLink v-for="(item, idx) of courseLibrary" :to="`/course/library/detail?atchNo=${item.atchNo}`"
                    class="ibk-lectureroom-board-list-item">
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
                <div v-else class="ibk-lectureroom-board-list-empty">
                  자료가 없습니다.
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>

  <LearnAttendanceQrCodeDialog v-if="learningStore.visibleLearnAttendanceQrCodeDialog"
    v-model:visible="learningStore.visibleLearnAttendanceQrCodeDialog" />

</template>

<script setup lang="ts">
import type { CourseDegreeLessonOutVo, CourseQuestionPageInqInVo } from '../../../api-client';
import { eLessonType } from '~/domains/course/education/type'; // Adjust the import path as needed

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});
;

import { useMyLearnStore } from '../../myLearn/store';
import ManagerLearning from '../../../lib/ManagerLearning';
import { useLearningStore } from '../store';
import { useCompLearning } from '../../../composables/compLearning';
import { useMainStore } from '../../main';
import { useCommunityStore } from '../../community';
import { useNoticeStore } from '../../course/notice';
import { useQuestionStore } from '../../course/question';
import { useLibraryStore } from '../../course/library';

const myLearnStore = useMyLearnStore();
const learningStore = useLearningStore();
const mainStore = useMainStore();
const communityStore = useCommunityStore();
const compLearning = useCompLearning();
const courseNoticeStore = useNoticeStore();
const courseQnaStore = useQuestionStore();
const courseLibraryStore = useLibraryStore();
const courseNotice = ref<any>([]);
const courseQna = ref<any>([]);
const courseLibrary = ref<any>([]);
const noticeCount = ref<number>(0);
const questionCount = ref<number>(0);
const libraryCount = ref<number>(0);


const chartData = ref();
const chartOptions = ref({
  cutout: `80%`,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
});


const route = useRoute();
const edctDsprNo = route.query.edctDsprNo as unknown as number;
const dutyEdctCd = route.query.dutyEdctCd as unknown as string;

const pageParam = reactive<CourseQuestionPageInqInVo>({
  pageNo: 1,
  pageSize: 3,
  dutyEdctCd: dutyEdctCd,
  edctDsprNo: Number(edctDsprNo)
});

const getCourseNoticeList = async () => {
  courseNotice.value = [];
  await courseNoticeStore.getCourseNoticeList(pageParam as any);
  // @ts-ignore
  if (courseNoticeStore.courseNoticeData.data && courseNoticeStore.courseNoticeData.data.response.contentsNbi > 0) {
    // @ts-ignore
    courseNotice.value = courseNoticeStore.courseNoticeData.data.response.contents;
    noticeCount.value = courseNotice.value.length;
    // console.log('notice : ', courseNotice.value)
    courseNotice.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0, 10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0, 10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-', '.') + ' ~ ' + x.answCretTs.replaceAll('-', '.') : x.cretTs;
    })
  } else {
    noticeCount.value = 0;
    courseNotice.value = []
  }
}

const getCourseQnaList = async () => {
  courseQna.value = [];
  await courseQnaStore.getCourseQuestionList(pageParam as any);
  // @ts-ignore
  if (courseQnaStore.courseQuestionData.data && courseQnaStore.courseQuestionData.data.response.contentsNbi > 0) {
    // @ts-ignore
    courseQna.value = courseQnaStore.courseQuestionData.data.response.contents;

    questionCount.value = courseQna.value.length;

    courseQna.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0, 10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0, 10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-', '.') + ' ~ ' + x.answCretTs.replaceAll('-', '.') : x.cretTs;
      x.answText = x.answCretTs && x.answCretTs.length > 0 ? '답변완료' : '답변대기';
      x.answStyle = x.answCretTs && x.answCretTs.length > 0 ? 'background: #234eaa; color: #ffffff' : 'background: #e4f2ff; color: #1654d1';
    })
  } else {
    questionCount.value = 0;
    courseQna.value =
    []
  }
}

const getCourseLibraryList = async () => {
  courseLibrary.value = [];
  await courseLibraryStore.getCourseLibraryList(pageParam as any);
  // @ts-ignore
  if (courseLibraryStore.courseLibraryData.data && courseLibraryStore.courseLibraryData.data.response.contentsNbi > 0) {
    // @ts-ignore
    courseLibrary.value = courseLibraryStore.courseLibraryData.data.response.contents;
    libraryCount.value = courseLibrary.value.length;
    // console.log('library : ', courseLibrary.value)
    courseLibrary.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0, 10) : '';
      x.answCretTs = x.answCretTs && x.answCretTs.length > 0 ? x.answCretTs.substring(0, 10) : '';
      x.period = x.answCretTs.length > 0 ? x.cretTs.replaceAll('-', '.') + ' ~ ' + x.answCretTs.replaceAll('-', '.') : x.cretTs;
    })
  } else {
    libraryCount.value = 0;
    courseLibrary.value =[]
  }
}
const setChartData = (totalProgress: number) => {

  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [totalProgress, 100 - totalProgress],
        backgroundColor: ['#308AF2', '#eee'],
        borderColor: 'transparent', // 테두리 색상을 투명으로 설정
        borderWidth: 0, // 테두리의 두께를 0으로 설정
      },
    ],
  };
};






const handleBackClick = () => {
  ManagerLearning.getIns().moveToMyLearnList();
};

const handleLessonClick = (lesson: CourseDegreeLessonOutVo) => {
  ManagerLearning.getIns().moveToLesson(lesson.dutyEdctCd!, lesson.edctDsprNo!, lesson.edctDsprLssoNo!, false);
};
const learningStatus = computed(() => {
  const totalProgress = (myLearnStore.chapterLesson?.courseDegreeInfo?.totalProgress ?? 0);
  if (totalProgress == 100) {
    return '수강완료'
  }
  return '수강중'
})
function changeChartData() {
  // console.log('changeChartData')
  const totalProgress = myLearnStore.chapterLesson?.courseDegreeInfo?.totalProgress ?? 0
  chartData.value = setChartData(totalProgress);
}
function downloadBookFiles() {
}
watch(() => myLearnStore.chapterLesson?.courseDegreeInfo?.totalProgress, (newValue, oldValue) => {

  if (newValue == null || newValue == 0) {
    return;
  }
  if (oldValue != newValue) {
    changeChartData();
  }
}, { deep: true, });


await compLearning.readyToStartLesson(edctDsprNo, dutyEdctCd);

changeChartData();
getCourseNoticeList();
getCourseQnaList();
getCourseLibraryList();


onMounted(() => {

});
</script>
<style scoped>
.ibk-lectureroom-board-list-empty {
  text-align: center;
  padding-top: 20px;
}
 
</style>
