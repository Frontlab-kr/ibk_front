<template>
  <li>
    <div class="ibk-social-ranking-list__number">{{ props.index + 1 }}</div>
    <div class="ibk-social-ranking-list__name">{{ props.item.userNm }}</div>
    <div class="ibk-social-ranking-list__reply"><i class="ibk-icon-16-reply"></i>{{ props.item.commentCount }}</div>
  </li>
</template>

<script setup lang="ts">
import { type SocialBoardContentsCommentRank, useSocialStore } from '~/domains/social';

const router = useRouter();
const store = useSocialStore();

const props = defineProps<{
  item: SocialBoardContentsCommentRank
  index: number,
}>();

</script>


<style scoped>

</style>
