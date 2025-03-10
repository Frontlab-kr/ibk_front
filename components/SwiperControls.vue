<script setup>
const swiper = useSwiper();
</script>
<script>
export default {
  data() {
    return {
      autoplay: 'play',
    };
  },

  methods: {
    keyvisualPlay(e) {
      this.autoplay = 'play';
    },
    keyvisualStop(e) {
      this.autoplay = 'stop';
    },
  },
};
</script>

<template>
  <div class="ibk-main-kv-control" :class="autoplay">
    <a href="javascript:void(0)" class="ibk-main-kv-control__play" @click="[keyvisualPlay(), swiper.autoplay.start()]"
      >재생</a
    >
    <a href="javascript:void(0)" class="ibk-main-kv-control__stop" @click="[keyvisualStop(), swiper.autoplay.stop()]"
      >멈춤</a
    >
  </div>
</template>
