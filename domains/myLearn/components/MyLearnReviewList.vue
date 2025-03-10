<template>
    <div class="ibk-lectureroom-my">
        <div class="ibk-inner">
            <div class="ibk-lectureroom-my-review">
                <h3>후기관리</h3>
                <Tabs value="0" :key="renderCount">
                    <TabList>
                        <Tab value="0" @click="onCourseChange">후기 작성 {{ myLearnStore.courseReviewCount?.noRvwCount }}</Tab>
                        <Tab value="1" @click="onCourseChange">작성한 후기 {{ myLearnStore.courseReviewCount?.rvwCount }}</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                            <div class="ibk-lectureroom-my-review-list ibk-lectureroom-my-review-list--line">
                                <template v-if="myLearnStore.courseReviewList?.contents.length == 0">
                                    <div class="ibk-lectureroom-my-review-none">
                                        <p>미작성된 후기가 없습니다.</p>
                                    </div>
                                </template>
                                <template v-else>
                                    <MyLearnReviewItem v-for="(item, index) in myLearnStore.courseReviewList?.contents" :key="`${item.dutyEdctCd}_${index}`" :item="item" type="A" @open-modal="openModal" />
                                    <template v-if="hasNext">
                                        <div class="ibk-lectureroom-my-review-list-more">
                                            <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreReviews" />
                                        </div>
                                    </template>
                                </template>
                            </div>
                        </TabPanel>
                        <TabPanel value="1">
                            <template v-if="myLearnStore.courseReviewList?.contents.length == 0">
                                <div class="ibk-lectureroom-my-review-none">
                                    <p>작성된 후기가 없습니다.</p>
                                </div>
                            </template>
                            <template v-else>
                                <MyLearnReviewItem v-for="(item, index) in myLearnStore.courseReviewList?.contents" :key="`${item.dutyEdctCd}_${index}`" :item="item" type="B" @open-modal="openModal" />
                                <template v-if="hasNext">
                                    <div class="ibk-lectureroom-my-review-list-more">
                                        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreReviews" />
                                    </div>
                                </template>
                            </template>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    </div>

    <MyLearnReviewFormDialog v-if="reviewDialogParams.visible" v-model:visible="reviewDialogParams.visible" :item="reviewDialogParams.item" @refresh="afterSaveFetch"></MyLearnReviewFormDialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { type CourseReviewPageOptions, type CourseReviewOptions, useMyLearnStore } from '../store';
import { useAuthStore } from '~/domains/auth';

definePageMeta({
    layout: 'default',
});

const router = useRouter();

const myLearnStore = useMyLearnStore();
const authStore = useAuthStore();

const renderCount = ref(0);
const selectedCourse = ref<string | null>('A');
const hasNext = ref<boolean>(true);

const INIT_SEARCH_PARAMS = (): CourseReviewPageOptions => ({
    pageSize: 4,
    pageNo: 1,
    searchType: 'A',
});
const params = reactive<CourseReviewPageOptions>(INIT_SEARCH_PARAMS());

const INIT_COUNT_PARAMS = (): CourseReviewOptions => ({
    dataSqn: 0,
    dutyEdctCd: "",
    edctDsprNo: 0,
    rvwScr: 0,
    rvwCon: "",
    useYn: "Y"
});
const rvwParams = reactive<CourseReviewOptions>(INIT_COUNT_PARAMS());

const reviewDialogParams = reactive({
  visible: false,
  item: undefined,
});

const onCourseChange = async () => {
    if (selectedCourse.value == 'A') {
        selectedCourse.value = 'B';
    } else {
        selectedCourse.value = 'A';
    }

    params.pageNo = 1;
    params.searchType = selectedCourse.value;
    hasNext.value = await myLearnStore.getCourseReviewPage(params, true);
};

const loadMoreReviews = async () => {
    params.pageNo++;
    hasNext.value = await myLearnStore.getCourseReviewPage(params, false);
};

// Initial load of reviews
onMounted(async () => {
    myLearnStore.getStudyRoomHeaderCount();

    hasNext.value = await myLearnStore.getCourseReviewPage(params, true);
    await myLearnStore.getCourseReviewCount(rvwParams);
});

const openModal = (item) => {
    if (item && item !== undefined) {
        reviewDialogParams.item = item;
        reviewDialogParams.visible = true;
    }
};
const fetchData = async (isRefresh = false) => {
    if (isRefresh) {
        params.pageNo = 1;
    }

    if (params.searchType == "A") {
        renderCount.value++;

    } else {
        const pageNumber = params.pageNo;

        for (let i = 1; i <= pageNumber; i++) {
            params.pageNo = i;
            await myLearnStore.getCourseReviewPage(params, (i == 1));
        }
    }
}

const afterSaveFetch = async () => {
    await myLearnStore.getCourseReviewCount(rvwParams);
    fetchData(true);
}

const handleStudyIngClick = () => {
    // console.log('학습현황 clicked');
    router.push('/myLearn');
    // Add your logic here
};

const handleStudyScheduleClick = () => {
    // console.log('학습일정 clicked');
    router.push('/myLearn/calendar');
    // Add your logic here
};

const handleStudyHistoryClick = () => {
    // console.log('연수내역 clicked');
    router.push('/myLearn');
    // Add your logic here
};

const handleStudyLikeClick = () => {
    // console.log('찜한연수 clicked');
    router.push('/myLearn?studyRoomTab=interest');
    // Add your logic here
};

const handleStudyReviewClick = () => {
    // console.log('수강후기 clicked');
    fetchData();
};
</script>

<style scope>
.ibk-lectureroom-my-review {
    padding-top: 40px;
}

</style>
