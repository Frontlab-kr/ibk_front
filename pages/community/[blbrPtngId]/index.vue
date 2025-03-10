<template>
    <div class="ibk-inner">
        <div class="ibk-board">
            <CommunityBoardContentsDetail />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCommunityStore, type CommunityBoardContents, type CommunityBoardContentsOptions } from '~/domains/community';
import CommunityBoardContentsDetail from '~/domains/community/components/CommunityBoardContentsDetail.vue';
import Utility from '~/lib/Utility';

definePageMeta({
    layout: 'default',
});
useHead({
    htmlAttrs: {
        class: 'mobile-header-hide',
    },
});
const store = useCommunityStore();
const route = useRoute();
const router = useRouter();
const blbrPtngId = ref<string | null>(route.params.blbrPtngId as string);

const communityBoardContentsDetail = reactive<CommunityBoardContents>({
    blbrNo: undefined,
    blbrPtngId: undefined,
    bltApowTtlNm: '',
    bltApowCon: '',
    cncrId: '',
    inqCnt: 0,
    commentCnt: 0
});

const INIT_SEARCH_PARAMS = (): CommunityBoardContentsOptions => ({
    blbrPtngId: Number(blbrPtngId.value)
});
const params = reactive<CommunityBoardContentsOptions>(INIT_SEARCH_PARAMS());

onBeforeMount(async () => {
    if (blbrPtngId.value) {
        const result = await store.getBoardContentsDetail(params);

        if (!result) {
            Utility.alert('해당 게시물이 없습니다');
            router.go(-1);
            
        } else {
            if (store.communityBoardContents.commentCnt > 0) {
                await store.getBoardContentsCommentList(Number(blbrPtngId.value));
            } else {
                store.communityBoardContentsCommentList = [];
            }
        }
    } else {
        Utility.alert('해당 게시물이 없습니다');
        router.go(-1);
    }
});


</script>