<template>
  <div class="ibk-main-swiper ibk-main-swiper--per-view02" id="ibkMainSwiper02">
    <div class="ibk-main-swiper-head">
      <h5>실시간 최신 업데이트 강의</h5>
      <div class="ibk-main-swiper-head-button">
        <Button icon="ibk-icon-32-main-prev" text rounded />
        <Button icon="ibk-icon-32-main-next" text rounded />
      </div>
    </div>
    <div class="ibk-main-swiper-body">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
        :space-between="8"
        :slides-per-view="2"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :navigation="{
          nextEl: '#ibkMainSwiper02 .ibk-icon-32-main-next',
          prevEl: '#ibkMainSwiper02 .ibk-icon-32-main-prev',
        }"
        :breakpoints="{
          '993': {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }"
      >
        <SwiperSlide v-for="(item, index) in store.mainRecentCourseList" :key="`${item.dutyEdctCd}_${index}`">
          <MainCourseItem :item="item" @toggleLike="toggleLike(item)"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type MainCourse, useMainStore } from '~/domains/main';
import MainCourseItem from '~/domains/main/components/MainCourseItem.vue';

const store = useMainStore();

const toggleLike = (item: MainCourse) => {
  item.likeYn = item.likeYn === 'Y' ? 'N' : 'Y';
}
</script>

<style scoped>

</style>
