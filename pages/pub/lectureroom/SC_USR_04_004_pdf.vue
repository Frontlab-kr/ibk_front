<template>
  <div class="ibk-background">
    <div class="ibk-lectureroom-lecture">
      <div class="ibk-inner">
        <div class="ibk-lectureroom-lecture-pdf">
          <div class="ibk-pdf">
            <VuePDF :pdf="pdf" :page="page" class="ibk-pdf-pdf" />
            <button class="ibk-pdf__prev" @click="page = page > 1 ? page - 1 : page">Prev</button>
            <button class="ibk-pdf__next" @click="page = page < pages ? page + 1 : page">Next</button>
            <div class="ibk-pdf-info">
              <button class="ibk-pdf-info__prev" @click="page = page > 1 ? page - 1 : page">Prev</button>
              <p>
                <strong>{{ page }}</strong> <span>/</span> {{ pages }}
              </p>
              <button class="ibk-pdf-info__next" @click="page = page < pages ? page + 1 : page">Next</button>
            </div>
          </div>
        </div>
        <div class="ibk-lectureroom-lecture-info">
          <div class="ibk-lectureroom-lecture-info-contents">
            <div>
              <div class="ibk-lectureroom-lecture-info__title">
                <p>1. 사이버 기업회계</p>
                <div class="ibk-lectureroom-lecture-info__badge">
                  <Badge style="background: #7151ff; color: #fff"><i class="ibk-icon-12-file mr-1"></i> 시험</Badge>
                </div>
              </div>
              <div class="ibk-lectureroom-lecture-info__text">
                <div>
                  Chapter. 1-1. 기업회계 기초
                  <hr />
                </div>
                <div>
                  2022.10.27.목 - 2022.10.30.일
                  <hr />
                  2022.10.30 23:59까지
                </div>
              </div>
            </div>
            <div class="ibk-lectureroom-lecture-info__view">
              <i class="ibk-icon-24-view"></i>
              2574
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pubtest',
});
useHead({
  htmlAttrs: {
    class: 'mobile-footer-hide mobile-menu-fixed',
  },
});
import { onMounted, inject, ref } from 'vue';

// 레이아웃에서 제공한 `setIbkMenu` 함수를 inject
const setIbkMenu = inject('setIbkMenu');

// 현재 화면 크기를 저장할 ref
const screenWidth = ref(window.innerWidth);

// 화면 크기에 따라 `ibkMenu` 상태를 변경하는 함수
const updateMenuState = () => {
  if (setIbkMenu) {
    if (screenWidth.value <= 992) {
      setIbkMenu(true); // 화면 크기가 992px 이하일 때 `ibkMenu`를 true로 설정
    } else {
      setIbkMenu(false); // 화면 크기가 992px 초과일 때 `ibkMenu`를 false로 설정
    }
  }
};

// `onMounted` 훅에서 페이지 로드 시 상태를 설정
onMounted(() => {
  updateMenuState();
  // 화면 크기 변경에 따른 상태 업데이트
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
});

// `onUnmounted` 훅에서 `resize` 이벤트 리스너 제거
import { onUnmounted } from 'vue';

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
});

import { VuePDF, usePDF } from '@tato30/vue-pdf';
import '@tato30/vue-pdf/style.css';

const page = ref(1);
const { pdf, pages, info } = usePDF('https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf');
</script>
