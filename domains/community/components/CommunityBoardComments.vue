<template>
    <div class="ibk-comment">
        <div class="ibk-comment__title">댓글 <strong>{{ props.commentCount }}</strong></div>
        <div class="ibk-comment-form">
            <CommunityBoardCommentsForm :blbrNo="props.blbrNo" :blbrPtngId="props.blbrPtngId" :isBorder="false" @refresh="refresh" />
        </div>
        <div class="ibk-comment-list">
            <CommunityBoardCommentsItem v-for="(item, index) in store.communityBoardContentsCommentList"
                :key="`${item.blbrPtngId}_${index}`" :item="item" :blbrNo="props.blbrNo" :blbrPtngId="props.blbrPtngId"
                @refresh="refresh" />
        </div>

        <!--
      <div class="ibk-comment-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
      </div>
      -->
    </div>
</template>

<script setup lang="ts">
import { type CommunityBoardContentsCommentOptions, useCommunityStore } from '~/domains/community';
import CommunityBoardCommentsForm from '~/domains/community/components/CommunityBoardCommentsForm.vue';
import CommunityBoardCommentsItem from '~/domains/community/components/CommunityBoardCommentsItem.vue';

const store = useCommunityStore();

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

onBeforeMount(async () => {
    await store.getBoardContentsCommentList(props.blbrPtngId);
});

// 더보기

</script>

<style scoped>
.ibk-comment {
    margin-top: 32px;
}
</style>