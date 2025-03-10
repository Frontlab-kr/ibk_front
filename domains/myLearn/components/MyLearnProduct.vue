<template>
  <NuxtLink :to="isInterest ? `/course/education/detail?dutyEdctCd=${lesson.dutyEdctCd}` :`/myLearn/studyRoom?edctDsprNo=${lesson.edctDsprNo}&dutyEdctCd=${lesson.dutyEdctCd}`" class="ibk-product">
    <!-- mobile 퍼블은 없으므루 추후 추가. -->
    <div class="ibk-product-thumb" v-if="props.thumb">
      <img :src="lesson.pcImgUrlAdr" alt="" />
    </div>
    <div class="ibk-product-info" v-if="props.info">
      진도율 {{ calculateProgress(lesson) }}%
      <hr />
      총점 {{ lesson.deg3BaseScr || lesson.deg4BaseScr || 0 }}점
    </div>
    <div class="ibk-product-time" v-if="props.time">
      연수인정시간
      <hr />
      {{ lesson.lrngAcknTim }}시간
    </div>
    <div class="ibk-product-badge" v-if="props.badge">
      <Badge :value="lesson.edctTrmNm" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
    </div>
    <div class="ibk-product-progress" v-if="props.progress">
      <div class="ibk-product-progress__number">{{ calculateProgress(lesson) }}%</div>
      <ProgressBar :value="calculateProgress(lesson)"></ProgressBar>
    </div>
    <div class="ibk-product-title" v-if="props.title">
      {{ lesson.dutyEdctNm }}
    </div>
    <div class="ibk-product-date" v-if="props.date">
      <strong>수강기간</strong>{{ formatDateRange(lesson.lrngSttgTs, lesson.lrngFnshTs) }}
    </div>
  </NuxtLink>
  <div class="ibk-product-button" v-if="props.isChangeDegree">
  <!-- <div class="ibk-product-button" v-if="true"> -->
    <Button label="취소 · 회차변경" severity="secondary" outlined class="w-full" @click="onChangeDegree" />
  </div>
</template>

<script setup lang="ts">
import type { CourseDegreeMyPageOutVo } from '../../../api-client';
import { useMyLearnStore } from '../store';

const props = withDefaults(
  defineProps<{
    thumb: boolean;
    info: boolean;
    time: boolean;
    badge: boolean;
    progress: boolean;
    image: boolean;
    title: boolean;
    date: boolean;
    isChangeDegree: boolean;
    lesson: CourseDegreeMyPageOutVo;
    studyRoomType: string;
  }>(),
  {
    thumb: false,
    info: false,
    time: false,
    badge: false,
    progress: false,
    image: false,
    title: false,
    date: false,
    isChangeDegree: false,
  },
);

const myLearnStore = useMyLearnStore();

const route = useRoute();
const isInterest = props.studyRoomType == 'interest';


const calculateProgress = (lesson: CourseDegreeMyPageOutVo) => {
  // This is a placeholder calculation. You might need to adjust this based on your actual data structure and business logic.

  /*const now = new Date();
  const start = new Date(lesson.lrngSttgTs || '');
  const end = new Date(lesson.lrngFnshTs || '');

  if (now < start) return 0;
  if (now > end) return 100;

  const total = end.getTime() - start.getTime();
  const progress = now.getTime() - start.getTime();

  return Math.round((progress / total) * 100);*/

  return lesson.totalProgress?.toFixed(0);
};
function onChangeDegree() {
  // console.log('onChangeDegree');

  myLearnStore.selectedProductForChangeDegreeDialog = props.lesson;
  myLearnStore.visibleChangeDegreeDialog = true;
}
</script>
