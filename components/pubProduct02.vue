<template>
  <NuxtLink to="/" class="ibk-product">
    <div class="ibk-product-thumb" v-if="props.thumb">
      <img src="https://picsum.photos/600/300" alt="" />
      <i class="ibk-icon-32-heart"></i>
      <!-- <i class="ibk-icon-32-heart-active"></i> -->
    </div>
    <div class="ibk-product-eyebrow" v-if="props.eyebrow">여신초급</div>
    <div class="ibk-product-title" v-if="props.title">
      2024 퇴직연금제도, 든든한 노후 생활 준비하기 든든한 노후 생활
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    thumb: boolean;
    heart: boolean;
    eyebrow: boolean;
    title: boolean;
  }>(),
  {
    thumb: false,
    heart: false,
    eyebrow: false,
    title: false,
  },
);
</script>
