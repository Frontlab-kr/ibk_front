<template>
  <NuxtLink to="/" class="ibk-social-best-item" @click="goDetail">
    <p>{{ props.item.bltApowTtlNm }}</p>
    <div class="ibk-social-best-item__info">
      <ul>
        <li><strong>조회</strong>{{ props.item?.inqCnt?.toLocaleString() || 0 }}</li>
        <li><i class="ibk-icon-16-like-black"></i>{{ props.item.likeCnt?.toLocaleString() || 0 }}</li>
        <li><i class="ibk-icon-16-reply-black"></i>{{ props.item.commentCnt?.toLocaleString() || 0 }}</li>
      </ul>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type SocialBoardContents, useSocialStore } from '~/domains/social';

const router = useRouter();
const store = useSocialStore();

const props = defineProps<{
  item: SocialBoardContents
}>();

const goDetail = () => {
  router.push(`/social/${props.item.blbrPtngId}`)
}
</script>


<style scoped>

</style>
