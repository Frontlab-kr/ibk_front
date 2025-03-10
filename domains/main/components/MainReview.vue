<template>
  <div class="ibk-main-review" id="ibkMainReview">
    <div class="ibk-main-review-head">
      <h5>수강후기</h5>
      <div class="ibk-main-review-head-button">
        <Button icon="ibk-icon-32-main-prev" text rounded />
        <Button icon="ibk-icon-32-main-next" text rounded />
      </div>
    </div>
    <div class="ibk-main-review-body">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperPagination, SwiperNavigation]"
        :space-between="16"
        :slides-per-view="1"
        :loop="true"
        :navigation="{
          nextEl: '#ibkMainReview .ibk-icon-32-main-next',
          prevEl: '#ibkMainReview .ibk-icon-32-main-prev',
        }"
        :breakpoints="{
          '993': {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }"
      >
        <SwiperSlide v-for="(item, index) in mainReviewList" :key="`${item.dataSqn}_${index}`">
          <div class="ibk-main-review-item" @click="goDetail(item)">
            <div class="ibk-main-review-item-head">
              <div class="ibk-main-review-item-head__thumb">
                <img :src="item.pcImgUrlAdr" alt="" />
              </div>
              <div class="ibk-main-review-item-head__title">
                <strong>{{ item.dutyEdctNm }}</strong>
                <p>{{ item.edctMthdNm }}</p>
              </div>
            </div>
            <div class="ibk-main-review-item-body">
              <div class="ibk-main-review-item-body-head">
                <span>{{ item.cncrName }}</span>
                <Rating v-model="item.rvwScr" readonly />
                <strong>{{ item.rvwScr }}</strong>
              </div>
              <p style="max-height:60px;">
                {{ item.rvwCon }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type MainReview, useMainStore } from '~/domains/main';

const router = useRouter();
const store = useMainStore();

const mainReviewList = computed(() => store.mainReviewList);

const rating = ref(3);

const goDetail = (item: MainReview) => {
  router.push(`/course/education/detail?dutyEdctCd=${item.dutyEdctCd}#contents05`);
}
</script>

<style scoped>

</style>
