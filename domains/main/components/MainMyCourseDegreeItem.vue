<template>
  <NuxtLink to="/" class="ibk-main-my-info-body-item" @click="goDetail">
    <div class="ibk-main-my-info-body-item__title">
      <Badge style="background: #30323b; color: #fff">{{ props.item.edctMthdNm }}</Badge>
      <p>{{ props.item.dutyEdctNm }}</p>
    </div>
    <div class="ibk-main-my-info-body-item__date">{{ `${$stringDateFormat(props.item.lrngSttgTs, 'YYYY-MM-DD')} ~ ${$stringDateFormat(props.item.lrngFnshTs, 'YYYY-MM-DD')}` }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type MainCourse, type MainCourseDegree, useMainStore } from '~/domains/main';
import { useEducationStore } from '~/domains/course/education';

const router = useRouter();

const store = useMainStore();

const props = withDefaults(
  defineProps<{
    item: MainCourseDegree;
  }>(),
  {

  },
);

const goDetail = () => {
  router.push(`/myLearn/studyRoom?edctDsprNo=${props.item.edctDsprNo}&dutyEdctCd=${props.item.dutyEdctCd}`);
}

</script>
