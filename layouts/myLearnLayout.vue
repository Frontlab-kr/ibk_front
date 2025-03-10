<template>
  <div class="ibk" :class="{ 'ibk--menu': learningStore.visibleMenu }">
    <header class="ibk-header-test">
      <div class="ibk-header-test__start">
        <div class="ibk-header-test__menu">
          <Button icon="ibk-icon-16-menu" severity="secondary" outlined
            @click="learningStore.visibleMenu = !learningStore.visibleMenu" />
        </div>
        <div class="ibk-header-test__title" v-if="false">
          <p>안쓰는 이름</p>
        </div>
      </div>
      <div class="ibk-header-test__end">
        <div class="ibk-header-test__close">
          <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined @click="handleBackClick" />
        </div>
      </div>
    </header>

    <Drawer v-model:visible="learningStore.visibleMenu" class="ibk-header-menu">
      <template #header>
        <div class="ibk-header-menu-head">
          <strong>연수 목차</strong>
          {{compLearning.completedLessonsCount}}/{{compLearning.totalLessonsCount}} 완료됨
        </div>
      </template>
      <!-- {{ expandedChapters }} -->
      <Accordion multiple v-model:value="expandedChapters" >
        <AccordionPanel v-for="(chapter, chapterIndex) in myLearnStore.chapterLesson?.courseDegreeChapter"
          :key="chapter.edctDsprChpaNo" :value="chapterIndex.toString()">
          <AccordionHeader>
            <div class=" ibk-header-menu-list-title">
              <div class="ibk-header-menu-list-item__icon">
                <i class="ibk-icon-lectureroom-folder-plus"></i>
              </div>
              <div class="ibk-header-menu-list-title__text">
                <p>Chapter {{ chapter.chpaSqc }} <span>{{ chapter.dutyEdctChpaNm }}</span></p>
              </div>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="ibk-header-menu-list" v-for="lesson in chapter.lessonList" :key="lesson.edctDsprLssoNo">

              <log :item="lesson" />
              <button class="ibk-header-menu-list-item" :class="{ active: compLearning.isActiveLesson(lesson), disabled: lesson.isDisabled }"
                style="cursor: pointer;"
                @click="!(lesson as any).isDisabled && ManagerLearning.getIns().moveToLesson(lesson.dutyEdctCd!, lesson.edctDsprNo!, lesson.edctDsprLssoNo!, false)">

                <div class="ibk-header-menu-list-item__icon">

                  <i :class="compLearning.getLessonIcon(lesson.connKcd!)"></i>
                  <i :class="compLearning.getLessonIconActive(lesson.connKcd!)"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">{{ lesson.dutyEdctLssoNm }}</div>
                  <div class="ibk-header-menu-list-item__info">
                    {{ compLearning.getLessonInfo(lesson) }}
                    <hr />
                    <strong :class="compLearning.getLessonStatusClass(lesson)">{{
                      getLessonStatus(lesson)
                      }}</strong>
                  </div>

                </div>

              </button>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </Drawer>

    <div class="ibk-body">
      <div class="ibk-contents">
        <slot />
      </div>
    </div>

    <div class="ibk-footer" v-if="visibleFooter">
      <div class="ibk-inner">
        <div class="ibk-footer-head">
          <div class="ibk-footer-head__start">
            <div class="ibk-footer-logo"></div>
          </div>
          <div class="ibk-footer-head__end">
            <div class="ibk-footer-link">
              <NuxtLink to="" class="ibk-footer-link-item">공지사항</NuxtLink>
              <NuxtLink to="" class="ibk-footer-link-item">자주묻는 질문</NuxtLink>
              <NuxtLink to="" class="ibk-footer-link-item">개인정보처리방침</NuxtLink>
            </div>
          </div>
        </div>
        <div class="ibk-footer-copyright">
          본 사이트의 콘텐츠는 저작권법의 보호를 받는바, 무단등재, 복사,배포 등을 금합니다.<br />
          <address>Copyright. IBK(INDUSTRIAL BANK OF KOREA) All rights reserved.</address>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLearningStore } from '../domains/learning/store';
import ManagerLearning from '../lib/ManagerLearning';
import { useMyLearnStore } from '../domains/myLearn/store';
import type { CourseDegreeLessonOutVo } from "~/api-client";
import { eLessonType } from '../domains/course/education/type';
import { useCompLearning } from '../composables/compLearning';
const learningStore = useLearningStore();
const myLearnStore = useMyLearnStore();
const compLearning = useCompLearning();

const expandedChapters = ref(['0']);


watch(()=>learningStore.currentLesson, () => {
  expandedChapters.value = getSelectedChapterIndex();
});
const route = useRoute();
const visibleFooter = computed(() => {

  if (route.path === '/myLearn/studyRoom/learning') {
    return false;
  }
  return true;
});
function handleBackClick() {
  ManagerLearning.getIns().moveToStudyRoom();
}
const getLessonStatus = computed(() => {
  return (lesson: any) => {
    return ManagerLearning.getLessonStatusName(lesson);
  };
});
const getSelectedChapterIndex = () => {
  const currentLesson = learningStore.currentLesson;
  if (!currentLesson) return ['0'];  // 기본적으로 첫 번째 챕터를 펼침

  const chapterIndex = myLearnStore.chapterLesson?.courseDegreeChapter?.findIndex(chapter =>
    chapter.lessonList?.some(lesson => lesson.edctDsprLssoNo === currentLesson.edctDsprLssoNo)
  );

  // // // console.log('chapterIndex', chapterIndex);
  return chapterIndex !== undefined && chapterIndex !== -1 ? [chapterIndex.toString()] : ['0'];
}
let interval_getChapterLesson: NodeJS.Timeout | null = null;
onMounted(() => {

  // 10 초마다 챕터 정보를 가져옴
  interval_getChapterLesson = setInterval(() => {
    myLearnStore.getChapterLesson({
      edctDsprNo: route.query.edctDsprNo as unknown as number,
      dutyEdctCd: route.query.dutyEdctCd as string,
    });
  }, 1000 * 10);
});
onBeforeUnmount(() => {
  if (interval_getChapterLesson) {
    clearInterval(interval_getChapterLesson);
  }
});
</script>
<style scoped>

</style>
