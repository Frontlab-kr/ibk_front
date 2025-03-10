<template>
  <div class="ibk-inner">
    <div class="ibk-social">
      <div class="ibk-social-head">
        <h1>소셜러닝</h1>
        <div class="ibk-social-head-button">
          <Button label="글쓰기" icon="ibk-icon-16-write" rounded @click="goWrite"/>
        </div>
      </div>
      <div class="ibk-social-contents">
        <div class="ibk-social-list">
          <div class="ibk-social-head">
            <h1>소셜러닝</h1>
            <div class="ibk-social-head-button">
              <Button label="글쓰기" icon="ibk-icon-16-write" rounded @click="goWrite"/>
            </div>
          </div>

          <div class="ibk-social-list-tab">
            <template v-for="(item, index) in store.socialBoardList">
              <Button :label="item.blbrNm" severity="secondary" rounded :class="{ active: item.active }" @click="selectBoard(item)" />
            </template>
          </div>
          <div class="ibk-social-list-list">
            <SocialBoardContents v-for="(item, index) in store.socialBoardContentsData.contents" :key="`${item.blbrPtngId}_${index}`" :item="item" />
          </div>

          <div class="ibk-social-list-more">
            <Button v-if="Utility.hasMore(store.socialBoardContentsData.paging)" icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="searchMore" />
          </div>
        </div>
        <div class="ibk-social-side">
          <div v-if="store.socialBoardContentsBestData.contents.length > 0" class="ibk-social-best">
            <div class="ibk-social-best-title">
              <NuxtLink to="/social/best" style="color: black">
                <p>
                  <i class="ibk-icon-24-best"></i>
                  베스트 글
                </p>
                <i class="ibk-icon-16-arrowbest">전체보기</i>
              </NuxtLink>
            </div>
            <SocialBoardContentsBestSmallItem v-for="(item, index) in store.socialBoardContentsBestData.contents" :item="item" :key="`${item.blbrPtngId}_${index}`"/>
          </div>
          <div v-if="store.socialBoardContentsCommentRankList.length > 0" class="ibk-social-ranking">
            <div class="ibk-social-ranking-title"><i class="ibk-icon-24-ranking"></i>주간 랭킹</div>
            <div class="ibk-social-ranking-list">
              <ol>
                <SocialBoardContentsRankSmallItem v-for="(item, index) in store.socialBoardContentsCommentRankList" :item="item" :index="index" :key="`${item.userId}_${index}`"/>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-agree">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-agree__title">무단 제작/배포 금지 동의</div>
    </template>

    <div class="ibk-dialog-agree__text">
      해당 내용은 직원 작성 지식/노하우이며, <br />
      자체제작 상품안내장은 제작/배포 할 수 없습니다. <br />
      부득이 제작하여 사용할 경우 ‘금융상품 공시업무 지침’에 의거 <br />
      사전 소관부서 승인을 받아야 합니다.
    </div>
    <div class="ibk-dialog-agree__check">
      <Checkbox v-model="CheckAgree" inputId="CheckAgree1" value="CheckAgree" name="CheckAgree" />
      <label for="CheckAgree1" class="ml-2"> 동의합니다 </label>
    </div>

    <template #footer>
      <div class="ibk-dialog-agree-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button
          label="확인"
          severity="primary"
          size="large"
          class="w-full"
          @click="modal01 = false"
          :disabled="!CheckAgree"
        />
      </div>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="후기 확인"></Button><br /><br />
  </div>

  <SocialBoardNoticeDialog v-if="isNoticeDialogVisible" v-model:visible="isNoticeDialogVisible" v-model:isAgree="isAgree" />
</template>

<script setup lang="ts">
import { type SocialBoard, type SocialBoardContentsSearchOptions, useSocialStore } from '~/domains/social';
import SocialBoardContents from '~/domains/social/components/SocialBoardContentsItem.vue';
import Utility from '~/lib/Utility';

const router = useRouter();
const store = useSocialStore();

const currentBoard = computed<SocialBoard>(() => {
  const findIndex = store.socialBoardList.findIndex((v) => v.active === true)
  if(findIndex>0) {
    return store.socialBoardList[findIndex];
  } else {
    return undefined;
  }
});

const modal01 = ref(false);

const CheckAgree = ref();
const isNoticeDialogVisible = ref<boolean>(false);
const isAgree = ref<boolean>(false); /* 최초 글 작성일때만 체크 */

const INIT_SEARCH_PARAMS = (): SocialBoardContentsSearchOptions => ({
  pageSize: 5,
  pageNo: 1,
  blbrNo: '',
  cybrTriuBlbrKcd: '2',
});

const params = reactive<SocialBoardContentsSearchOptions>(INIT_SEARCH_PARAMS());

const getBoardList = async () => {
  await store.getBoardList();
}

const getBoardContentsList = async (isFirst = true) => {
  await store.getBoardContentsList(params, isFirst);
}

const fetchData = async (isFirst = true) => {
  getBoardContentsList(isFirst);
}

const searchMore = () => {
  params.pageNo!++;
  fetchData(false);
}

const selectBoard = (item: SocialBoard) => {
  store.socialBoardList.forEach((v) => v.active = false);
  item.active = true;
  params.blbrNo = currentBoard.value?.blbrNo || '';
  fetchData();
}

const getBoardContentsBestList = async (isFirst = true) => {
  const data = {
    pageSize: 3,
    pageNo: 1,
    blbrNo: '',
    cybrTriuBlbrKcd: '2',
  }
  await store.getBoardContentsBestList(data, isFirst);
}

const getBoardContentsCommentRankList = async () => {
  await store.getBoardContentsCommentRankList('2');
}

const goWrite = async () => {
  const data = await store.isFirstWrite(3);
  isAgree.value = Utility.hasCachedForever('_isFirstWrite', 'social');

  if(data.response && !isAgree.value) {
    //작성한 글이 없을때 최초 1회만 체크
    isNoticeDialogVisible.value = true;
  } else {
    router.push('/social/edit');
  }
}

onBeforeMount(async () => {
  await getBoardList();
  fetchData();
  getBoardContentsBestList();
  getBoardContentsCommentRankList();
});

</script>
