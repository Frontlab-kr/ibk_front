<template>
  <NuxtLink to="/" class="ibk-social-list-item" @click="goDetail">
    <div class="ibk-social-list-item__badge">
<!--      <Badge value="업무팁" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
      <Badge value="전문가칼럼" style="background: rgba(254, 110, 0, 0.1); color: #fe6e00"></Badge>
      <Badge value="고민상담" style="background: rgba(42, 202, 200, 0.1); color: #2acac8"></Badge>
      <Badge value="묻고답하기" style="background: rgba(255, 55, 94, 0.1); color: #ff375e"></Badge>
      <Badge value="투자경험담" style="background: rgba(113, 81, 255, 0.1); color: #7151ff"></Badge>-->
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
import Utility from '~/lib/Utility';

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
