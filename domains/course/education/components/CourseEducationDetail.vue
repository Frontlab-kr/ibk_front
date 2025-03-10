<template>
  <div class="ibk-inner">
    <div class="ibk-breadcrumb">
      <Breadcrumb :model="breadcrumpItems" />
    </div>
    <div class="ibk-academy-detail">
      <Card class="ibk-academy-detail-head">
        <template #content>
          <div class="ibk-academy-detail-head__start">
            <div class="ibk-academy-detail-head-thumb">
              <img :src="educationStore.detail.pcImgUrlAdr" alt="" />
            </div>
            <div class="ibk-academy-detail-head-title">

              <h3>{{ educationStore.detail.dutyEdctNm }}</h3>
              <div class="ibk-academy-detail-head-title__text">
                <div>
                  수강기간 {{ formatDateRange(selectedCourseDegree?.lrngSttgTs, selectedCourseDegree?.lrngFnshTs) }}
                  <hr />
                  {{ educationStore.detail.deg3BaseScr || educationStore.detail.deg4BaseScr }}pt
                </div>
                <div>
                  콘텐츠 {{ selectedCourseDegree?.courseDegreeChapter?.length || 0 }}개
                  <hr />
                  평가 {{ educationStore.detail.evltYn === 'Y' ? '있음' : '없음' }}
                  <hr />
                  과제 {{ selectedCourseDegree?.courseOtherCompletion?.allTaskSbmsYn === 'Y' ? '있음' : '없음' }}
                  <hr />
                  설문 {{ selectedCourseDegree?.courseOtherCompletion?.allQstrSbmsYn === 'Y' ? '있음' : '없음' }}
                  <hr />
                  {{ educationStore.detail.qlcrAcqtYn === 'Y' ? '자격증 획득 가능' : '' }}
                  <hr />
                  {{ educationStore.detail.edctSyopNm }}
                </div>
              </div>
            </div>
          </div>
          <div class="ibk-academy-detail-head__end">
            <div class="ibk-academy-detail-head-button">
              <div class="ibk-academy-detail-head-button__book">
                <Button icon="ibk-icon-16-book" label="교재파일" severity="secondary" outlined
                  @click="downloadAttachments" />
              </div>
              <!-- <div class="ibk-academy-detail-head-button__play">
                <Button label="수강신청" rounded @click="visibleRequestDialog = true" :disabled="!edctDsprNo" />
              </div> -->
            </div>
          </div>
        </template>
      </Card>
      <div class="ibk-academy-detail-contents">
        <div class="ibk-academy-detail-menu" ref="menu">
          <a href="#contents01" :class="{ active: activeTab === 'contents01' }"
            @click.prevent="scrollToSection('#contents01')">
            학습내용
          </a>
          <a href="#contents02" :class="{ active: activeTab === 'contents02' }"
            @click.prevent="scrollToSection('#contents02')">
            수강신청
          </a>
          <a href="#contents03" :class="{ active: activeTab === 'contents03' }"
            @click.prevent="scrollToSection('#contents03')">
            학습목차
          </a>
          <a href="#contents04" :class="{ active: activeTab === 'contents04' }"
            @click.prevent="scrollToSection('#contents04')">
            수료기준
          </a>
          <a href="#contents05" :class="{ active: activeTab === 'contents05' }"
            @click.prevent="scrollToSection('#contents05')">
            수강후기 {{ totalReviews }}
          </a>
        </div>
        <div class="ibk-academy-list">
          <div class="ibk-academy-list-item" id="contents01">
            <div class="ibk-academy-list-item__title">학습내용</div>
            <div class="ibk-academy-list-item__text">
              {{ educationStore.detail.dutyEdctCn }}
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents02">
            <div class="ibk-academy-list-item__title">수강신청</div>
            <div class="pc">
              <div class="ibk-academy-list-item__table">
                <table>
                  <colgroup>
                    <col style="width: 80px" />
                    <col style="width: 425px" />
                    <col style="width: 218px" />
                    <col style="width: 218px" />
                    <col style="width: 91px" />
                    <col style="width: 104px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">선택</th>
                    <th>연수차수명</th>
                    <th>신청기간</th>
                    <th>교육기간</th>
                    <th>정원</th>
                    <th>신청인원</th>
                  </thead>
                  <tbody>

                    <tr v-for="(course, index) in educationStore.detail?.courseDegreeList" :key="index"
                      :class="{ active: edctDsprNo === course.edctDsprNo , disabled: course.isReg == 'N'}"
                      @click="selectRow(course.edctDsprNo)">
                      <td class="text-center">

                        <RadioButton v-model="edctDsprNo" :value="course.edctDsprNo" variant="filled"
                          />
                      </td>
                      <td>
                        <strong>{{ course.dutyEdctNm }}</strong>
                      </td>
                      <td>{{ formatDateRange(course.aplcSttgTs, course.aplcFnshTs) }}</td>
                      <td>{{ formatDateRange(course.lrngSttgTs, course.lrngFnshTs) }}</td>
                      <td>{{ course.edctNmprCnt }}명</td>
                      <td>{{ course.edctAplcCnt }}명</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mo">
              <div class="ibk-academy-list-item__list">
                <ul>
                  <li v-for="(course, index) in educationStore.detail?.courseDegreeList" :key="index"
                    @click="selectRow(course.edctDsprNo)" :disabled="course.isReg == 'N'"
                    :class="{ active: edctDsprNo == course.edctDsprNo , disabled: course.isReg == 'N'}">
                    <RadioButton class="radio-button" v-model="edctDsprNo" :value="course.edctDsprNo" variant="filled"
                     />
                    <p>{{ course.dutyEdctNm }}</p>
                    <table>
                      <tbody>
                        <tr>
                          <th>신청기간</th>
                          <td>{{ formatDateRange(course.aplcSttgTs, course.aplcFnshTs) }}</td>
                        </tr>
                        <tr>
                          <th>교육기간</th>
                          <td>{{ formatDateRange(course.lrngSttgTs, course.lrngFnshTs) }}</td>
                        </tr>
                        <tr>
                          <th>정원</th>
                          <td>{{ course.edctNmprCnt }}명</td>
                        </tr>
                        <tr>
                          <th>신청인원</th>
                          <td>{{ course.edctAplcCnt }}명</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ibk-academy-list-item__button">
              <Button label="수강신청" size="large" @click="onClickRequestCourse" :disabled="isClickRequestCourseEnable == false" />
            </div>
          </div>
          <div v-if="hasCourseDegreeData" class="ibk-academy-list-item" id="contents03">
            <div class="ibk-academy-list-item__title">
              학습목차
              <strong>{{ completedLessonsCount }}/{{ totalLessonsCount }} 완료됨</strong>
            </div>
            <div class="ibk-academy-list-item__index">
              <template v-for="(chapter, chapterIndex) in courseDegreeChapters" :key="chapterIndex">
                <div class="ibk-lectureroom-index-list__title">
                  <p>
                    <strong>Chapter {{ chapterIndex + 1 }}</strong>
                    <span>{{ chapter.dutyEdctChpaNm }}</span>
                  </p>
                  <!--    <Button v-if="chapter.lessonList[0]?.prvwUrlAdr" label="미리보기" link size="large"
                    @click="openPreview(chapter.lessonList[0].prvwUrlAdr)" /> -->
                  <!-- <div>강의보기</div> -->
                </div>
                <div class="ibk-lectureroom-index-list">
                  <div v-for="(lesson, lessonIndex) in chapter.lessonList" :key="lessonIndex"
                    class="ibk-lectureroom-index-list-item">
                    <div class="ibk-lectureroom-index-list-item__start">
                      <div class="ibk-lectureroom-index-list-item__icon">
                        <i :class="getLessonIcon(lesson.connKcd)"></i>
                      </div>
                      <div class="ibk-lectureroom-index-list-item__title">
                        <p>{{ lesson.dutyEdctLssoNm }}</p>
                        <div class="ibk-lectureroom-index-list-item__text">
                          {{ getLessonInfo(lesson) }}
                        </div>
                      </div>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__end">
                      <!--  <div class="ibk-lectureroom-index-list-item__text">
                        {{ getLessonInfo(lesson) }}
                      </div> -->
                      <!--  <div class="ibk-lectureroom-index-list-item__badge">
                        <Badge :value="getLessonStatus(lesson)" size="large" class="p-badge-rounded"
                          :style="getLessonStatusStyle(lesson)"></Badge>
                      </div> -->
                      <div class="ibk-lectureroom-index-list-item__button">
                        <Button label="강의보기" link class="text-primary" v-if="hasPreviewLesson(lesson)" @click="viewLesson(lesson)" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div v-else class="ibk-academy-list-item" id="contents03">
            <p>학습 목차 정보가 없습니다.</p>
          </div>
          <div class="ibk-academy-list-item" id="contents04">
            <div class="ibk-academy-list-item__title">수료기준</div>
            <div class="ibk-academy-completion">
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>콘텐츠</strong>
                <p>진도율 {{ completionCriteria.contentProgress }}% 이상 학습완료</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>평가</strong>
                <p>{{ completionCriteria.evaluationRequired ? '필수 참여' : '참여 불필요' }}</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>과제</strong>
                <p>{{ completionCriteria.taskRequired ? '필수 참여' : '참여 불필요' }}</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>설문</strong>
                <p>{{ completionCriteria.surveyRequired ? '필수 참여' : '참여 불필요' }}</p>
              </div>
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents05">
            <div class="ibk-academy-list-item__title">
              수강후기 <strong>{{ totalReviews }}</strong>
            </div>
            <div class="ibk-academy-review">
              <dl>
                <dt>사용자 총 평점</dt>
                <dd>
                  <strong>{{ averageRating.toFixed(1) }}</strong>
                </dd>
                <dd>
                  <Rating :modelValue="averageRating" :stars="5" class="p-rating--large p-rating--blue" readonly />
                </dd>
              </dl>
              <dl>
                <dt>전체 후기수</dt>
                <dd>
                  <strong>{{ totalReviews }}</strong>
                </dd>
                <dd>
                  <i class="ibk-icon-48-message"></i>
                </dd>
              </dl>
              <div class="ibk-academy-review__progress">
                <ul>
                  <li v-for="rating in ratingDistribution" :key="rating.score">
                    <strong>{{ rating.score }}점</strong>
                    <ProgressBar :value="rating.percentage"></ProgressBar>
                    <p>{{ rating.count }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CourseEducationRequestDialog v-if="visibleRequestDialog" v-model:visible="visibleRequestDialog"
      v-model:selectedCourseDegree="selectedCourseDegree" />
    <CourseEducationAttatchmentDialog v-if="visibleAttachmentDialog" v-model:visible="visibleAttachmentDialog" />
    <CourseEducationPreviewDialog v-if="visiblePreviewDialog" v-model:visible="visiblePreviewDialog"
      v-model:selectedLesson="selectedLesson"
    />
  </div>
</template>

<script setup lang="ts">
import { useEducationStore } from '../store';
import { formatDateRange } from '~/utils/$dateUtils';
import type { CourseDegreeLessonOutVo, CourseDegreeOutVo } from '../../../../api-client';
import { computed } from 'vue';
import { eLessonType } from '../type';
import Utility from '../../../../lib/Utility';

const educationStore = useEducationStore();
const route = useRoute();
const router = useRouter();

const dutyEdctCd = ref<string>((route.query as CourseDegreeOutVo).dutyEdctCd as string);
const edctDsprNo = ref<number | null>(Number((route.query as CourseDegreeOutVo).edctDsprNo) ?? null);

const breadcrumpItems = computed(() => [
  { label: '연수신청', url: '/course/education' },
  { label: educationStore.detail.dutyEdctNm || '과정 상세', url: '', disabled: true }
]);


const activeTab = ref('contents01');
const menu = ref(null);

const getMenuHeight = () => {
  const isMobile = Utility.isMobile();
  return isMobile ? 108 : 223;
};

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  const menuHeight = getMenuHeight();

  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - menuHeight;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    activeTab.value = sectionId.replace('#', '');
  }
};

window.addEventListener('resize', () => {
  getMenuHeight();
});
const visibleAttachmentDialog = ref(false);
const downloadAttachments = () => {
  visibleAttachmentDialog.value = true;
};



const visibleRequestDialog = ref(false);



async function fetchData() {
  if ($isEmpty(dutyEdctCd.value)) {
    await $alert('연수과정을 확인할수 없습니다');
    router.push('/course/education');
  } else {
    await educationStore.getDetail({ dutyEdctCd: dutyEdctCd.value });
/*     if ($isEmpty(educationStore.detail.courseDegreeList)) {
      await $alert('연수과정이 존재 하지 않습니다.');
      router.push('/course/education');
    } */
  }
}

watch(edctDsprNo, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    let query = {
        dutyEdctCd: dutyEdctCd.value,
        edctDsprNo: newVal  
      }
      if($isEmpty(query.edctDsprNo ) || isNaN(query.edctDsprNo as any)){
        // @ts-ignore
        delete query.edctDsprNo;
      }
      
    router.replace({
      path: '/course/education/detail',
      query: query
    });
  }
}, {  deep: true });



const selectRow = (value: any) => {
  edctDsprNo.value = value;
};



const selectedCourseDegree = computed(() => {
  return educationStore.detail.courseDegreeList?.find(course => course.edctDsprNo == edctDsprNo.value);
});

const hasCourseDegreeData = computed(() => {
  return educationStore.detail.courseDegreeList?.length ?? 0 > 0;
});

const courseDegreeChapters = computed(() => {
  return selectedCourseDegree.value?.courseDegreeChapter || [];
});

const completedLessonsCount = computed(() => {
  if (!hasCourseDegreeData.value) return 0;
  return courseDegreeChapters.value.reduce((acc, chapter) => {
    return acc + (chapter?.lessonList?.filter(lesson => lesson.courseResult?.ctcrYn === 'Y').length ?? 0);
  }, 0);
});

const totalLessonsCount = computed(() => {
  if (!hasCourseDegreeData.value) return 0;
  return courseDegreeChapters.value.reduce((acc, chapter) => {
    return acc + (chapter?.lessonList?.length ?? 0);
  }, 0);
});
const isClickRequestCourseEnable = computed(() => {
  return edctDsprNo.value != null && selectedCourseDegree.value?.isReg == 'Y';
});
async function onClickRequestCourse(){
  await Utility.alertMobileCourse(educationStore.detail);
  visibleRequestDialog.value = true
}
const getLessonIcon = (connKcd?: string) => {
  switch (connKcd) {
    case eLessonType.VOD: return 'ibk-icon-lectureroom-camera';
    case eLessonType.LIVE: return 'ibk-icon-lectureroom-play';
    case eLessonType.GROUP: return 'ibk-icon-lectureroom-intersection';
    case eLessonType.REPORT: return 'ibk-icon-lectureroom-book';
    case eLessonType.EXAM: return 'ibk-icon-lectureroom-document';
    case eLessonType.SURVEY: return 'ibk-icon-lectureroom-chat';
    default: return 'ibk-icon-lectureroom-tv';
  }
};

const getLessonInfo = (lesson: CourseDegreeLessonOutVo) => {
  if (lesson.lssoSttgTs && lesson.lssoFnshTs) {
    return formatDateRange(lesson.lssoSttgTs, lesson.lssoFnshTs);
  } else if (lesson.lcteTim) {
    return `${lesson.lcteTim}분`;
  }
  return '';
};

const getLessonStatus = (lesson: CourseDegreeLessonOutVo) => {
  if (lesson.courseResult?.ctcrYn === 'Y') return '학습종료';
  if (lesson.courseResult?.prgsSttsCd === 'PROGRESS') return '진행중';
  return '진행예정';
};

const getLessonStatusStyle = (lesson: CourseDegreeLessonOutVo) => {
  if (lesson.courseResult?.ctcrYn === 'Y') return { background: '#f3f4f7', color: '#5a5e6c' };
  if (lesson.courseResult?.prgsSttsCd === 'PROGRESS') return { background: '#308af2', color: '#ffffff' };
  return { background: '#e4f2ff', color: '#234eaa' };
};
const hasPreviewLesson = (lesson: CourseDegreeLessonOutVo) => {
  if ((lesson.connKcd == eLessonType.VOD) == false) {
    return false;
  }

  // vod 만 가능

  if (selectedCourseDegree.value?.freeAtlcYn == 'Y') {
    return true;
  } else {
    return false;
  }
};
const visiblePreviewDialog = ref(false);
const selectedLesson = ref<CourseDegreeLessonOutVo | null>(null);
const viewLesson = (lesson: CourseDegreeLessonOutVo) => {
  // Implement the logic to view the lesson
  // console.log('Viewing lesson:', lesson.dutyEdctLssoNm);
  selectedLesson.value = lesson;


  visiblePreviewDialog.value = true;
};

const courseOtherCompletion = computed(() => selectedCourseDegree.value?.courseOtherCompletion || {});

const completionCriteria = computed(() => {
  return {
    contentProgress: courseOtherCompletion.value.ctcrScr ?? 0,
    evaluationRequired: courseOtherCompletion.value.allValtAaeYn === 'Y',
    taskRequired: courseOtherCompletion.value.allTaskSbmsYn === 'Y',
    surveyRequired: courseOtherCompletion.value.allQstrSbmsYn === 'Y',
  };
});

const courseReviewData = computed(() => educationStore.detail.courseReviewCntDtlOutVo || {});

const totalReviews = computed(() => courseReviewData.value.totalReviewCnt || 0);

const averageRating = computed(() => {
  return courseReviewData.value.totalScore || 0;
});

const ratingDistribution = computed(() => {
  const total = totalReviews.value;
  return [
    { score: 5, count: courseReviewData.value.fiveScoreCnt || 0, percentage: total > 0 ? (courseReviewData.value.fiveScoreCnt / total) * 100 : 0 },
    { score: 4, count: courseReviewData.value.fourScoreCnt || 0, percentage: total > 0 ? (courseReviewData.value.fourScoreCnt / total) * 100 : 0 },
    { score: 3, count: courseReviewData.value.threeScoreCnt || 0, percentage: total > 0 ? (courseReviewData.value.threeScoreCnt / total) * 100 : 0 },
    { score: 2, count: courseReviewData.value.twoScoreCnt || 0, percentage: total > 0 ? (courseReviewData.value.twoScoreCnt / total) * 100 : 0 },
    { score: 1, count: courseReviewData.value.oneScoreCnt || 0, percentage: total > 0 ? (courseReviewData.value.oneScoreCnt / total) * 100 : 0 },
  ];
});



onMounted(async () => {
  if($isEmpty(edctDsprNo.value ) || isNaN(edctDsprNo.value as any)){
    // 선택된애가 없이 페이지에 들어왔다면 isReg가 Y인 애를 선택
    edctDsprNo.value = educationStore.detail.courseDegreeList?.find(course => course.isReg == 'Y')?.edctDsprNo ?? null;
  
  }
  await fetchData();
 
});


</script>
<style scoped>
.disabled {
  /* pointer-events: none; */
  opacity: 0.3;
}
 
</style>
