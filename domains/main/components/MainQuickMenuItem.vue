<template>
  <NuxtLink to="/" class="ibk-main-quick-item" @click="openLink">
    <p>
      <div class="pc">
        <img :src="props.item.pcCldFileUrlAdr" alt="" />
      </div>
      <div class="mo">
        <img :src="props.item.mblCldFileUrlAdr" alt="" />
      </div>
    </p>
    <span>{{ props.item.ttlNm}}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type MainModuleQuickMenu, type MainReview, useMainStore } from '~/domains/main';
import Utility from '~/lib/Utility';

const router = useRouter();
const store = useMainStore();

const props = defineProps<{
  item: MainModuleQuickMenu;
}>();

const openLink = () => {
  Utility.openLink(props.item.linkUrlAdr, props.item.linkTcd);
}

</script>

<style scoped>

</style>
