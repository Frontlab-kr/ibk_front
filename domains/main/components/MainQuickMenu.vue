<template>
  <div class="ibk-inner">
    <MainQuickMenuItem v-for="(item, index) in quickMenu?.list" :key="`${item.desgMdulBkmrMenuNo}_${index}`" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { type MainReview, useMainStore } from '~/domains/main';
import SlideBannerItem from '~/domains/main/components/SlideBannerItem.vue';
import MainQuickMenuItem from '~/domains/main/components/MainQuickMenuItem.vue';

const router = useRouter();
const store = useMainStore();

const quickMenu = computed(()=> store.mainModuleList.find(v => v.desgMdulTcd === 'M3') || null);

</script>

<style scoped>

</style>
