<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectFade, SwiperNavigation, SwiperMousewheel]"
    
    :navigation="true"
    :pagination="{ type: 'fraction' }"
    :loop="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(item, index) in slideBanner?.list" :key="`${item.desgPhtgFrgNo}_${index}`">
      <SlideBannerItem :item="item" />
    </SwiperSlide>



<!--    <SwiperSlide>
      <div class="ibk-main-kv__bg">
        <div class="pc">
          <img src="/assets/images/main01.png" alt="" />
        </div>
        <div class="mo">
          <img src="/assets/images/mo-main01.png" alt="" />
        </div>
      </div>
      <div class="ibk-inner">
        <div class="ibk-main-kv__info">
          <div class="ibk-main-kv__wrap">
            <div class="ibk-main-kv__title">사이버연수 신청기간안내</div>
            <div class="ibk-main-kv__text">매월 최대 2개 과정 설립가능!</div>
          </div>
          <div class="ibk-main-kv__button">
            <Button label="자세히보기" severity="white" class="w-full" />
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="ibk-main-kv__bg">
        <div class="pc">
          <img src="/assets/images/main02.png" alt="" />
        </div>
        <div class="mo">
          <img src="/assets/images/mo-main01.png" alt="" />
        </div>
      </div>
      <div class="ibk-inner">
        <div class="ibk-main-kv__info">
          <div class="ibk-main-kv__wrap">
            <div class="ibk-main-kv__title">사이버연수 신청기간안내</div>
            <div class="ibk-main-kv__text">매월 최대 2개 과정 설립가능!</div>
          </div>
          <div class="ibk-main-kv__button">
            <Button label="자세히보기" severity="white" class="w-full" />
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="ibk-main-kv__bg">
        <div class="pc">
          <img src="/assets/images/main03.png" alt="" />
        </div>
        <div class="mo">
          <img src="/assets/images/mo-main01.png" alt="" />
        </div>
      </div>
      <div class="ibk-inner">
        <div class="ibk-main-kv__info">
          <div class="ibk-main-kv__wrap">
            <div class="ibk-main-kv__title">I-Book 연수 실시 - 디지털 독서 연수</div>
            <div class="ibk-main-kv__text">
              2024년 하반기 필독도서 「 몰입(저자 황농문) 」<br />
              이북리더기, PC 및 모바일 등 최대 5개 기기 동시접속 가능<br />
              ㅣ학습기간ㅣ 7월 1일 ~ 12월 31일
            </div>
          </div>
          <div class="ibk-main-kv__button">
            <Button label="자세히보기" severity="white" class="w-full" />
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="ibk-main-kv__bg">
        <div class="pc">
          <img src="/assets/images/main04.png" alt="" />
        </div>
        <div class="mo">
          <img src="/assets/images/mo-main01.png" alt="" />
        </div>
      </div>
      <div class="ibk-inner">
        <div class="ibk-main-kv__info">
          <div class="ibk-main-kv__wrap">
            <div class="ibk-main-kv__title">I-Book 연수 실시 - 디지털 독서 연수</div>
            <div class="ibk-main-kv__text">
              2024년 하반기 필독도서 「 몰입(저자 황농문) 」<br />
              이북리더기, PC 및 모바일 등 최대 5개 기기 동시접속 가능<br />
              ㅣ학습기간ㅣ 7월 1일 ~ 12월 31일
            </div>
          </div>
          <div class="ibk-main-kv__button">
            <Button label="자세히보기" severity="white" class="w-full" />
          </div>
        </div>
      </div>
    </SwiperSlide>-->
    <SwiperControls />
  </Swiper>
</template>

<script setup lang="ts">
//슬라이드 배너 - M2
import { useMainStore } from '~/domains/main';
import SlideBannerItem from '~/domains/main/components/SlideBannerItem.vue';

const store = useMainStore();

const slideBanner = computed(()=> store.mainModuleList.find(v => v.desgMdulTcd === 'M2') || null);

onMounted(()=>{
 // // console.log(store.getSlideBanner.list);
})

</script>

<style scoped>

</style>
