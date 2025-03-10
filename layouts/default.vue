<template>
  <div class="ibk">
    <MainTopBanner v-if="topBanner && topBanner.list.length > 0 && !isCacheTopBnner" />
    <header class="ibk-header">
      <Header />
    </header>
    <div class="ibk-body">
      <div class="ibk-contents">
        <slot />
      </div>
    </div>
    <div class="ibk-footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
import { useMainStore } from '~/domains/main';
import Utility from '~/lib/Utility';

const mainStore = useMainStore();

const topBanner = computed(()=> mainStore.mainModuleList.find(v => v.desgMdulTcd === 'M1') || null);
const isCacheTopBnner = computed(() => Utility.hasCachedInOneDay(topBanner.value?.list[0].desgMdulBnnrNo, 'topBanner'));
</script>
