<template>
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
</template>

<script setup lang="ts">


import { VuePDF, usePDF } from '@tato30/vue-pdf';
import '@tato30/vue-pdf/style.css';

const page = ref(1);
const { pdf, pages, info } = usePDF('https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf');
const compLearning = useCompLearning() 
onMounted(() => {

    compLearning.onLessonMounted();
})
</script>
