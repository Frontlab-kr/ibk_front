<template>
  <div :class="{ 'ibk-comment-list-item active': item.isActive, 'ibk-comment-list-item': !item.isActive }">
    <CommunityBoardCommentsItemContents :item="props.item" :blbrPtngId="props.blbrPtngId" :blbrNo="props.item.blbrNo" @refresh="refresh" />
  </div>
</template>

<script setup lang="ts">
import { type CommunityBoardContentsComments, useCommunityStore } from '~/domains/community';
import CommunityBoardCommentsItemContents from '~/domains/community/components/CommunityBoardCommentsItemContents.vue';

const store = useCommunityStore();

const props = defineProps<{
  item: CommunityBoardContentsComments;
  blbrPtngId: number;
}>();

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const refresh = () => {
  emits('refresh');
}

onMounted(() => {
});

</script>

<style scoped></style>