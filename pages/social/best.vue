<template>
  <div class="ibk-inner">
    <div class="ibk-social-best-detail">
      <div class="ibk-social-back">
        <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined @click="goBack"/>
      </div>
      <div class="ibk-social-best-detail-list">
        <div class="ibk-social-best-detail__title">
          <div class="pc">
            <i class="ibk-icon-32-best"></i>
          </div>
          <div class="mo">
            <i class="ibk-icon-24-best"></i>
          </div>
          베스트 글
        </div>
        <div class="ibk-social-list">
          <div class="ibk-social-list-list">
            <SocialBoardContentsBestLargeItem v-for="(item, index) in store.socialBoardContentsBestData.contents" :item="item" :key="`${item.blbrPtngId}_${index}`"/>
          </div>
          <div class="ibk-social-list-more">
            <Button v-if="Utility.hasMore(store.socialBoardContentsBestData.paging)" icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="searchMore" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SocialBoardContentsSearchOptions, useSocialStore } from '~/domains/social';
import SocialBoardContentsBestLargeItem from '~/domains/social/components/SocialBoardContentsBestLargeItem.vue';
import Utility from '~/lib/Utility';

const router = useRouter();
const store = useSocialStore();

const INIT_SEARCH_PARAMS = (): SocialBoardContentsSearchOptions => ({
  pageSize: 5,
  pageNo: 1,
  blbrNo: '',
  cybrTriuBlbrKcd: '2',
});

const params = reactive<SocialBoardContentsSearchOptions>(INIT_SEARCH_PARAMS());

const getBoardContentsBestList = async (isFirst = true) => {
  await store.getBoardContentsBestList(params, isFirst);
}

const fetchData = async (isFirst = true) => {
  getBoardContentsBestList(isFirst);
}

const searchMore = () => {
  params.pageNo!++;
  fetchData(false);
}

const goBack = () => {
  router.push('/social');
}

onBeforeMount(async () => {
  fetchData();
});


</script>
