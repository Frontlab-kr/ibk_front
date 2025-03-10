<template>
  <NuxtLink to="/" class="ibk-product">
    <div class="ibk-product-thumb" v-if="props.thumb">
      <img src="https://picsum.photos/600/300" alt="" />
    </div>
    <div class="ibk-product-info" v-if="props.info">
      진도율 88%
      <hr />
      총점 94점
    </div>
    <div class="ibk-product-time" v-if="props.time">
      연수인정시간
      <hr />
      1시간
    </div>
    <div class="ibk-product-badge" v-if="props.badge">
      <Badge value="연수구분" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
    </div>
    <div class="ibk-product-progress" v-if="props.progress">
      <div class="ibk-product-progress__number">70%</div>
      <ProgressBar :value="80"></ProgressBar>
    </div>
    <div class="ibk-product-title" v-if="props.title">
      2024 퇴직연금제도, 든든한 노후 생활 준비하기 든든한 노후 생활
    </div>
    <div class="ibk-product-date" v-if="props.date"><strong>수강기간</strong>2025.12.00 - 2025.12.00</div>
  </NuxtLink>
  <div class="ibk-product-button" v-if="props.button">
    <Button label="취소 · 회차변경" severity="secondary" outlined class="w-full" />
  </div>
</template>

<script setup lang="ts">
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
    button: boolean;
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
    button: false,
  },
);
</script>
