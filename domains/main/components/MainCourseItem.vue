<template>
  <NuxtLink class="ibk-product cursor-pointer" @click="goDetail">
    <div class="ibk-product-thumb">
      <img :src="props.item.pcImgUrlAdr" alt="" />
      <i v-if="props.item.likeYn === 'Y'" class="ibk-icon-32-heart-active cursor-pointer" @click="toggleLike($event)"></i>
      <i v-else class="ibk-icon-32-heart cursor-pointer" @click="toggleLike($event)"></i>
    </div>
    <div class="ibk-product-eyebrow">{{ props.item.edctMthdNm }}</div>
    <div class="ibk-product-title">{{ props.item.dutyEdctNm }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type MainCourse, useMainStore } from '~/domains/main';
import { useEducationStore } from '~/domains/course/education';

const router = useRouter();

const educationStore = useEducationStore();
const store = useMainStore();


const props = withDefaults(
  defineProps<{
    item: MainCourse;
  }>(),
  {

  },
);

const emits = defineEmits<{
  (e: 'toggleLike'): void;
}>();

const toggleLike = async (e: Event) => {
  e.stopPropagation();
  await educationStore.toggleLike({ dutyEdctCd: props.item.dutyEdctCd });
  emits('toggleLike');

  //item.value.likeYn = item.value.likeYn === 'Y' ? 'N' : 'Y';
}

const goDetail = () => {
  //router.push({ path: '/course/education/detail', query: { dutyEdctCd: props.item.dutyEdctCd }})
  router.push(`/course/education/detail?dutyEdctCd=${props.item.dutyEdctCd}`);
}
</script>
