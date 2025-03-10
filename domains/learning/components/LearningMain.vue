<template>
  <div class="ibk-background">

    <div v-if="!learningStore.currentLesson" style=" display: flex; justify-content: center; align-items: center; padding: 100px;
    font-weight: bold; font-size: 1.2rem;">


      Loading...


    </div>

    <div v-else >

      <!-- 매번 lesson 이 바뀔때마다 해당 컴퍼넌트들을 다시그려줘야돼 :key="redrawIndex" 추가.  -->
      <LearningVod v-if="learningStore.currentLesson?.connKcd === eLessonType.VOD" :key="redrawIndex"  />
      <LearningLive v-if="learningStore.currentLesson?.connKcd === eLessonType.LIVE" :key="redrawIndex" />
      <LearningExternal v-if="learningStore.currentLesson?.connKcd === eLessonType.EXTERNAL" :key="redrawIndex" />
      <LearningReport v-if="learningStore.currentLesson?.connKcd === eLessonType.REPORT" :key="redrawIndex" />
      <LearningGroup v-if="learningStore.currentLesson?.connKcd === eLessonType.GROUP" :key="redrawIndex" />
      <LearningSurvey v-if="learningStore.currentLesson?.connKcd === eLessonType.SURVEY" :key="redrawIndex" />
      <LearningTest v-if="learningStore.currentLesson?.connKcd === eLessonType.EXAM" :key="redrawIndex" />

    </div>
  </div>
</template>

<script setup lang="ts">

useHead({
  htmlAttrs: {
    class: 'mobile-footer-hide mobile-menu-fixed',
  },
});
import { onMounted, inject, ref } from 'vue';
import { useLearningStore } from '~/domains/learning/store';
import { useMyLearnStore } from '../../myLearn/store';
import ManagerLearning from '../../../lib/ManagerLearning';
import { eLessonType } from '../../course/education/type';
import type { CourseDegreeLessonSummaryInVo } from '../../../api-client';

const learningStore = useLearningStore();
const myLearnStore = useMyLearnStore();
const screenWidth = ref(window.innerWidth);
const route = useRoute();
const { edctDsprNo, dutyEdctCd, edctDsprLssoNo } = route.query;
const compLearning = useCompLearning()
const redrawIndex = ref(0);
// 화면 크기에 따라 `ibkMenu` 상태를 변경하는 함수
const updateMenuState = () => {
  if (learningStore.visibleMenu) {
    if (screenWidth.value <= 992) {
      learningStore.visibleMenu = true; // 화면 크기가 992px 이하일 때 `ibkMenu`를 true로 설정
    } else {
      learningStore.visibleMenu = false; // 화면 크기가 992px 초과일 때 `ibkMenu`를 false로 설정
    }
  }
};
watch (()=> route.query, ()=>{
  if(edctDsprLssoNo){
    learningStore.currentLesson = ManagerLearning.getIns().getLesson(route.query.edctDsprLssoNo as unknown as number);
    redrawIndex.value++;
  }
}, { deep: true })
watch (()=> learningStore.currentLesson, ()=>{
  // ManagerLearning.getIns().doSummary(true, 0);

})
ManagerLearning.getIns().init().then(async() => {



    ManagerLearning.getIns().moveToLesson(
      dutyEdctCd as any,
      edctDsprNo as any,
      edctDsprLssoNo as any,

    );

});

onMounted(() => {
  updateMenuState();
  // 화면 크기 변경에 따른 상태 업데이트
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
  compLearning.onLearningEntered();

});


onUnmounted(() => {
  compLearning.onLearningExit();
  window.removeEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
});
</script>
