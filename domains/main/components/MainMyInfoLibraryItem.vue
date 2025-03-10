<template>
  <NuxtLink to="/" class="ibk-main-my-data-body-item" @click="goDetail">
    <div class="ibk-main-my-data-body-item__title">
      <Badge v-if="props.item.ctgyNm" :value="props.item.ctgyNm" style="background: #f2f2f2; color: #5a5e6c"></Badge>
      <p>{{ item.bltApowTtlNm }}</p>
    </div>
    <div class="ibk-main-my-data-body-item__date">{{ $stringDateFormat(props.item.cretTs, 'YYYY.MM.DD') }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">

import type { CommunityBoardContents } from '~/domains/community';

const router = useRouter();
const props = defineProps<{
  item: CommunityBoardContents
}>();

const goDetail = () => {
  router.push(`/community/${props.item.blbrPtngId}`);
}
</script>
