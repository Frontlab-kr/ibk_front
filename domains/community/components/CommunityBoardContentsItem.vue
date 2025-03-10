<template>
    <NuxtLink :to="`/community/${props.item.blbrPtngId}`" class="ibk-board-list-item">
        <div class="ibk-board-list-item__start">
            <div class="ibk-board-list-item__number">{{ paging.totalCount - ((paging.pageNo-1) * paging.pageSize) - props.index }}</div>
            <div class="ibk-board-list-item__title">
                <template v-if="props.item.ctgyNm">
                    <div class="ibk-board-list-item__badge">
                        <Badge :value="props.item.ctgyNm" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                    </div>
                </template>
                <p>{{ props.item.bltApowTtlNm }}</p>
                <template v-if="props.item.commonAttachFileOutList?.length??0 > 0">
                    <i class="ibk-icon-24-clip"></i>
                </template>
                <template v-if="props.item.commentCnt??0 > 0">
                    <div class="ibk-social-list-item__info">
                        <ul>
                            <li><i class="ibk-icon-16-reply-black"></i>{{ props.item.commentCnt?.toLocaleString() || 0 }}</li>
                        </ul>
                    </div>
                </template>
            </div>
        </div>
        <div class="ibk-board-list-item__end">
            <div class="ibk-board-list-item__date">{{ Utility.dateDefault(props.item.cretTs??"2025.01.01 12:25") }}</div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { type CommunityBoardContents, useCommunityStore } from '~/domains/community';
import type { PaginationState } from '~/types/globaltype';
import Utility from '../../../lib/Utility';

const router = useRouter();
const store = useCommunityStore();

const props = defineProps<{
  item: CommunityBoardContents,
  index: number,
  paging: PaginationState
}>();

</script>
<style scoped>
/* TODO: 댓글 관련 디자인이 없어 소셜러닝 css 차용 후 margin 값 수정한 상태 */
.ibk-social-list-item__info {
    margin-bottom: 0;
    margin-left: 8px;
}
</style>