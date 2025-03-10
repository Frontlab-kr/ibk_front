<template>
  <div :class="{ 'ibk-comment-list-item active': item.isActive, 'ibk-comment-list-item': !item.isActive }">
    <SocialBoardCommentsItemContents :item="props.item" :blbrPtngId="props.blbrPtngId" @refresh="refresh"/>
  </div>
</template>

<script setup lang="ts">
import { type SocialBoardContentsComments, useSocialStore } from '~/domains/social';
import SocialBoardCommentsItemContents from '~/domains/social/components/SocialBoardCommentsItemContents.vue';

const store = useSocialStore();

const props = defineProps<{
  item: SocialBoardContentsComments;
  blbrPtngId: string;
}>();

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const refresh = () => {
  emits('refresh');
}

</script>

<style scoped>

</style>
