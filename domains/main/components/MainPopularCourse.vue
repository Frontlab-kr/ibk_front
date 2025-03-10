<template>
  <div class="ibk-main-swiper ibk-main-swiper--grid-view02" id="ibkMainSwiper01">
    <div class="ibk-main-swiper-head">
      <h5>지금 주목받는 인기 강의</h5>
      <div class="ibk-main-swiper-head-button">
        <Button icon="ibk-icon-32-main-prev" text rounded />
        <Button icon="ibk-icon-32-main-next" text rounded />
      </div>
    </div>
    <div class="ibk-main-swiper-body">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
        :space-between="0"
        :slides-per-view="4"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :navigation="{
          nextEl: '#ibkMainSwiper01 .ibk-icon-32-main-next',
          prevEl: '#ibkMainSwiper01 .ibk-icon-32-main-prev',
        }"
        :breakpoints="{
          '993': {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }"
      >
        <SwiperSlide v-for="(item, index) in store.mainPopularCourseList" :key="`${item.dutyEdctCd}_${index}`">
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
