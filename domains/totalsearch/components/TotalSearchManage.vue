<template>
    <div class="ibk-inner">
        <div class="ibk-search-result">
            <div class="ibk-search-result-head">
                <div class="ibk-search-result-head__text"><span class="text-primary">{{ route.query.searchText }}</span>
                    검색결과입니다.</div>
                <p>검색어를 바르게 입력했는지 확인해 보세요.</p>
            </div>
            <div class="ibk-search-result-body">
                <div class="ibk-search-result-item">
                    <h5>연수명 <span>{{ store.masterCourseList?.paging.totalCount }}</span></h5>
                    <div v-if="visibleIsLoading">
                        <Skeleton class="w-full h-20 mb-2" />
                        <Skeleton class="w-full h-20 mb-2" />
                        <Skeleton class="w-full h-20 mb-2" />
                    </div>
                    <div v-else>
                        <div class="ibk-search-result-list">
                            <!-- @toggleLike="toggleLike(item)" -->
                            <MainCourseItem :item="item" v-for="(item, index) in store.masterCourseList?.contents"
                                :key="`${item.dutyEdctCd}_${index}`" />
                        </div>
                        <div class="ibk-search-result-list-more">
                            <Button v-if="Utility.hasMore(store.masterCourseList?.paging)" icon="ibk-icon-16-more"
                                iconPos="right" label="더보기" link @click="searchMore('master')" />
                        </div>
                    </div>
                </div>
                <div class="ibk-search-result-item">
                    <h5>소셜러닝 <span>{{ store.socialLearning?.paging.totalCount }}</span></h5>
                    <div v-if="visibleIsLoading">
                        <Skeleton class="w-full h-20 mb-2" />
                        <Skeleton class="w-full h-20 mb-2" />
                        <Skeleton class="w-full h-20 mb-2" />
                    </div>
                    <div v-else>
                        <div class="ibk-social-list">

                            <SocialBoardContents v-for="(item, index) in store.socialLearning?.contents"
                                :key="`${item.blbrPtngId}_${index}`" :item="item" />
                        </div>
                        <div class="ibk-search-result-list-more">
                            <Button v-if="Utility.hasMore(store.socialLearning?.paging)" icon="ibk-icon-16-more"
                                iconPos="right" label="더보기" link @click="searchMore('social')" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CourseDegreeOutVo, TopSearchInVo } from '../../../api-client';
import Utility from '../../../lib/Utility';
import { useTotalSearchStore } from '../store';
import SocialBoardContents from '~/domains/social/components/SocialBoardContentsItem.vue';
const store = useTotalSearchStore();
const router = useRouter();
const route = useRoute();
const isMounted = useMounted();
const defaultPageSize = 10;
const searchParams = reactive<{ master: TopSearchInVo, social: TopSearchInVo }>({
    master: {
        pageNo: 1,
        pageSize: defaultPageSize,
        searchText: '',
    },
    social: {
        pageNo: 1,
        pageSize: defaultPageSize,
        searchText: '',
    },
});
watch(() => route.query.searchText, () => {
    searchParams.master.searchText = route.query.searchText as string;
    searchParams.social.searchText = route.query.searchText as string;

    
    fetchData('all', true);
}, { deep: true, immediate: true })
const toggleLike = (item: CourseDegreeOutVo) => {
    // item.likeYn = item.likeYn === 'Y' ? 'N' : 'Y';
}
const visibleIsLoading = ref(false);
async function fetchData(type: 'master' | 'social' | 'all' = 'all', isRefresh = false) {
    if (isRefresh && type !== 'all') {
        searchParams[type].pageNo = 1;
    }

    if (type == 'all') {
        searchParams['master'].pageNo = 1;
        searchParams['social'].pageNo = 1;
    }
    if (isMounted.value && isRefresh) {
        visibleIsLoading.value = true;
    }
    try {
        if (type === 'master' || type === 'all') {
            await store.getMasterCourseList(searchParams.master, isRefresh);
        }
        if (type === 'social' || type === 'all') {
            await store.getSocialLearning(searchParams.social, isRefresh);
        }
    } finally {
        if (isMounted.value) {
            visibleIsLoading.value = false;
        }
    }
}

const searchMore = (type: 'master' | 'social' = 'master') => {
    searchParams[type].pageNo!++;
    fetchData(type, false);
}
// fetchData();

</script>