<template>
  <NuxtLink to="/" class="ibk-social-list-item" @click="goDetail">
    <div class="ibk-social-list-item__badge">
<!--      <Badge value="공지" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>-->
    </div>

    <div class="ibk-social-list-item__contents">
      <div class="w-full">
        <div class="ibk-social-list-item__title">{{ props.item.bltApowTtlNm }}</div>
        <div class="ibk-social-list-item__info">
          <ul>
            <li><strong>조회</strong>{{ props.item?.inqCnt?.toLocaleString() || 0 }}</li>
            <li><i class="ibk-icon-16-like-black"></i>{{ props.item.likeCnt?.toLocaleString() || 0 }}</li>
            <li><i class="ibk-icon-16-reply-black"></i>{{ props.item.commentCnt?.toLocaleString() || 0 }}</li>
          </ul>
        </div>
        <div class="ibk-social-list-item__text">
          {{ Utility.htmlToText(props.item.bltApowCon) }}
        </div>
        <div class="ibk-social-list-item__name">
          <strong>{{ props.item.cncrNm }}</strong>
          {{ Utility.getTimeDifference(props.item.cretTs) }}
        </div>
      </div>

      <div v-if="props.item.thumbnailUrl" class="ibk-social-list-item__thumb">
        <img :src="props.item.thumbnailUrl" alt="" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type SocialBoardContents, useSocialStore } from '~/domains/social';
import Utility from '../../../lib/Utility';

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
