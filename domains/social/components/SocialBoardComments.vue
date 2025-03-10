<template>
  <div class="ibk-comment">
    <div class="ibk-comment__title">댓글 <strong>{{ props.commentCount }}</strong></div>
    <div class="ibk-comment-form">
      <SocialBoardCommentsForm :blbrNo="props.blbrNo" :blbrPtngId="props.blbrPtngId" @refresh="refresh" />
    </div>
    <div class="ibk-comment-list">
      <SocialBoardCommentsItem v-for="(item, index) in store.socialBoardContentsCommentList" :key="`${item.blbrPtngId}_${index}`" :item="item" :blbrNo="props.blbrNo" :blbrPtngId="props.blbrPtngId" @refresh="refresh"/>
    </div>

    <!--
    <div class="ibk-comment-more">
      <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
import { useSocialStore } from '~/domains/social';
import SocialBoardCommentsForm from '~/domains/social/components/SocialBoardCommentsForm.vue';

const store = useSocialStore();

const props = defineProps<{
  blbrNo: number;
  blbrPtngId: number;
  commentCount: number;
}>();

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const isActive = ref(false);

function refresh() {
  emits('refresh');
}
</script>

<style scoped>

</style>
