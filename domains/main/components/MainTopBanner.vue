<template>
  <div class="ibk-banner">
    <div class="pc">
      <img :src="topBanner?.list[0].pcCldFileUrlAdr" alt="" />
    </div>
    <div class="mo">
      <img :src="topBanner?.list[0].pcCldFileUrlAdr" alt="" />
    </div>
    <div class="ibk-inner">
      <Button icon="ibk-icon-16-banner-close" link @click="clearTapBanner"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/domains/main';
import Utility from '~/lib/Utility';

const store = useMainStore();

const topBanner = computed(()=> store.mainModuleList.find(v => v.desgMdulTcd === 'M1') || null);

const clearTapBanner = () => {
  Utility.cacheLastOpenSeq({
    seq: topBanner.value?.list[0].desgMdulBnnrNo,
    type: 'topBanner',
  });
}

onMounted(()=>{
 // // console.log(store.getSlideBanner.list);
})

</script>

<style scoped>

</style>
