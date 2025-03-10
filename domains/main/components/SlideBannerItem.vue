<template>
  <div class="ibk-main-kv__bg">
    <div class="pc"
         :style="props.item.pcScreColrVl ? getSlideStyle('pc') : 'background: white'">
      <img v-if="props.item.pcCldFileUrlAdr" :src="props.item.pcCldFileUrlAdr" alt="" />
    </div>
    <div class="mo"
         :style="props.item.mblScreColrVl ? getSlideStyle('mo') : 'background: white'">
      <img v-if="props.item.mblCldFileUrlAdr" :src="props.item.mblCldFileUrlAdr" alt="" />
    </div>
  </div>
  <div class="ibk-inner">
    <div class="ibk-main-kv__info">
      <div class="ibk-main-kv__wrap">
        <div class="ibk-main-kv__title">{{ item.ttlNm }}</div>
        <div class="ibk-main-kv__text" :style="`color': ${item.titlColrVl || '#000'} !important`">{{ item.subTtlNm }}</div>
      </div>
      <div class="ibk-main-kv__button">
        <Button :label="item.btnTtlNm"
                severity="white"
                class="w-full"
                :style="`color: ${item.btnTitlColrVl || '#000'} !important`"
                @click="openLink"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//슬라이드 배너 - M2
import { type MainModuleSlideBanner, useMainStore } from '~/domains/main';
import Utility from '~/lib/Utility';

const store = useMainStore();

const props = defineProps<{
  item: MainModuleSlideBanner;
}>();

const openLink = () => {
  Utility.openLink(props.item.linkUrlAdr, props.item.linkTcd);
}

const getSlideStyle = (type: string) => {
  if(type === 'pc') {
    return `background: ${props.item.pcScreColrVl || '#000'} !important`;
  } else {
    return `background: ${props.item.mblScreColrVl || '#000'} !important`;
  }
}

onMounted(()=>{
})


</script>

<style scoped>

</style>
