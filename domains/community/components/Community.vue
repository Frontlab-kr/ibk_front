<template>
    <div class="ibk-inner">
        <div class="ibk-board">
            <div class="ibk-board-head ibk-board-head--tab">
                <h1>커뮤니티</h1>

                <div class="mo">
                    <!-- <div class="ibk-board-list-head__write">
              <Button label="1:1 문의하기" severity="primary" rounded outlined />
            </div> -->
                </div>
            </div>

            <Tabs v-model:value="store.currentTab">
                <TabList>
                    <Tab v-for="(item) in store.communityBoardList" :item="item" :key="item.blbrNo"
                        :value="item.blbrNo?.toString() ?? '1'" @click="changeTab(item)">{{ item.blbrNm }}</Tab>
                    <Tab value="3" @click="changeTab(null)">설문</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel v-for="(item) in store.communityBoardList" :key="item.blbrNo"
                        :value="item.blbrNo?.toString() ?? '1'">
                        <div class="notice">
                            <div class="ibk-board-list-head">
                                <div class="pc">
                                    <div class="ibk-board-list-head__start">
                                        <h2>
                                            전체
                                            <strong>{{ store.communityBoardContentsData.paging.totalCount }}</strong>
                                        </h2>
                                    </div>
                                </div>
                                <div class="ibk-board-list-head__end">
                                    <div class="ibk-board-search">
                                        <IconField>
                                            <InputIcon class="ibk-icon-16-search" />
                                            <InputText placeholder="검색어를 입력하세요." v-model="params.bltApowTtlNm" />
                                        </IconField>
                                        <div class="ibk-board-search__button">
                                            <Button label="검색" severity="primary" @click="searchContents('board')" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ibk-board-list">
                                <div class="mo">
                                    <h2>
                                        전체
                                        <strong>{{ store.communityBoardContentsData.paging.totalCount }}</strong>
                                    </h2>
                                </div>
                                <CommunityBoardContentsItem
                                    v-if="store.communityBoardContentsData.paging.totalCount != 0"
                                    v-for="(contentItem, index) in store.communityBoardContentsData.contents"
                                    :key="`${contentItem.blbrPtngId}_${index}`" :item="contentItem" :index="index" :paging="store.communityBoardContentsData.paging" />
                                <Paginator v-if="store.communityBoardContentsData.paging.totalCount != 0" :rows="params.pageSize" :totalRecords="item.contentsCount" @page="pageChange($event)" />
                                <template v-else>
                                  <div class="ibk-board-list-none">
                                    <div class="ibk-board-list-none__text">
                                      <span class="text-primary">{{ searchedText }}</span> 에 대한 검색 결과가 없습니다.
                                    </div>
                                  </div>
                                </template>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel key="3" value="3">
                      <div class="notice">
                        <div class="ibk-board-list-head">
                          <div class="pc">
                            <div class="ibk-board-list-head__start">
                              <h2>
                                전체
                                <strong>{{ store.communitySurveyData.paging.totalCount }}</strong>
                              </h2>
                            </div>
                          </div>
                          <div class="ibk-board-list-head__end">
                            <div class="ibk-board-search">
                              <IconField>
                                <InputIcon class="ibk-icon-16-search" />
                                <InputText placeholder="검색어를 입력하세요." v-model="surveyParams.qstrNm" />
                              </IconField>
                              <div class="ibk-board-search__button">
                                <Button label="검색" severity="primary" @click="searchContents('survey')" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="ibk-board-list">
                          <div class="mo">
                            <h2>
                              전체
                              <strong>{{ store.communitySurveyData.paging.totalCount }}</strong>
                            </h2>
                          </div>
                          <CommunitySurveyContentsItem
                            v-if="store.communitySurveyData.paging.totalCount != 0"
                            v-for="(item, index) in store.communitySurveyData.contents"
                            :key="`${item.comQstrId}_${index}`" :item="item" :index="index" :paging="store.communitySurveyData.paging" />
                          <Paginator v-if="store.communitySurveyData.paging.totalCount != 0" :rows="params.pageSize" :totalRecords="store.communitySurveyData.paging.totalCount" @page="pageChange($event)" />
                        </div>
                      </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCommunityStore, type CommunityBoard } from '../store';
import type { CommunityBoardContentsSearchOptions, CommunitySurveySearchOptions } from '~/domains/community/type';

const store = useCommunityStore();
const route = useRoute();
const INIT_SEARCH_PARAMS = (): CommunityBoardContentsSearchOptions => ({
  pageSize: 5,
  pageNo: 1,
  cybrTriuBlbrKcd: '1',
  blbrNo: '1',
  bltApowTtlNm: null,
});

const INIT_SEARCH_PARAMS2 = (): CommunitySurveySearchOptions => ({
  pageSize: 5,
  pageNo: 1,
  qsitTtlNm: null,
  useYn: 'Y'
});

const params = reactive<CommunityBoardContentsSearchOptions>(INIT_SEARCH_PARAMS());
const surveyParams = reactive<CommunitySurveySearchOptions>(INIT_SEARCH_PARAMS2());

const searchedText = ref<string>('');

watch(() => route.query, ()=>{
  store.currentTab = route.query.tab || '1';
}, {deep: true, immediate: true})

onMounted(async () => {
  await store.getBoardList();
  await fetchContents();
});

const fetchContents = async () => {
  store.communityBoardContentsData.contents = [];
  store.communitySurveyData.contents = [];
  if(store.currentTab == '3'){
    await store.getCommonSurveyList(surveyParams, true);
  }else{
    params.blbrNo = store.currentTab;
    await store.getBoardContentsList(params, true);
  }
};

const fetchData = async (isRefresh = true) => {
  if (isRefresh){
    params.pageNo = 1;
  }
  await fetchContents();
};

const changeTab = async (item: CommunityBoard) => {
  params.bltApowTtlNm = null;
  surveyParams.qsitTtlNm = null;
  if(item){
    store.currentTab = item.blbrNo.toString();
  }else{
    store.currentTab = '3';
  }
  await fetchData();
};

const pageChange = (event: { page: number }) => {
  params.pageNo = event.page + 1;
  fetchData(false);
};

const searchContents = () => {
  searchedText.value = params.bltApowTtlNm;
  fetchData(true);
}
</script>
