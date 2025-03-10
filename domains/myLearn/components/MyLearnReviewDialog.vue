<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-review">
        <template #header>
            <div class="ibk-dialog-review__title">후기 확인</div>
        </template>

        <div class="ibk-dialog-review-item">
            <div class="ibk-dialog-review-item-head">
                <div class="ibk-dialog-review-item-head__title">연수 선택하기</div>
                <Select v-model="selectedCourse" size="large" class="w-full" :options="courseOptions"
                    optionLabel="dutyEdctNm" optionValue="dutyEdctCd" @change="onCourseChange" />
            </div>
            <div class="ibk-dialog-review-list" v-if="myLearnStore.courseReviewList?.contents.length">
                <NuxtLink :to="`/course/${review.dutyEdctCd}`" class="ibk-dialog-review-list-item"
                    v-for="review in myLearnStore.courseReviewList?.contents" :key="review.dataSqn">
                    <div class="ibk-dialog-review-list-item-head">
                        <div class="ibk-dialog-review-list-item__thumb">
                            <img src="https://picsum.photos/168/94" alt="" />
                        </div>
                        <div class="ibk-dialog-review-list-item-info">
                            <div class="ibk-dialog-review-list-item__title">
                                {{ review.dutyEdctNm }}
                            </div>
                            <div class="ibk-dialog-review-list-item__rating">
                                <Rating v-model="review.rvwScr" :stars="5" readonly />
                                <strong>{{ review.rvwScr?.toFixed(1) }}</strong>
                                ({{ review.rvwCount }})
                            </div>
                        </div>
                    </div>
                    <div class="ibk-dialog-review-list-item__text">
                        {{ review.rvwCon }}
                    </div>
                </NuxtLink>
            </div>
            <div class="ibk-dialog-review-list" v-else>
                <p style="display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;"> 후기가 없습니다.</p>
            </div>
            <div class="ibk-dialog-review-button" v-if="myLearnStore.courseReviewList?.contents.length">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreReviews" />
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-review-button">
                <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="visible = false" />
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMyLearnStore } from '../store';

const { visible } = defineModels<{
    visible: boolean;
}>();

const myLearnStore = useMyLearnStore();
const selectedCourse = ref<string | null>(null);

const courseOptions = computed(() => {
    return myLearnStore.courseReviewList?.contents.map(review => ({
        dutyEdctCd: review.dutyEdctCd,
        dutyEdctNm: review.dutyEdctNm
    })) || [];
});

const onCourseChange = async () => {
    if (selectedCourse.value) {
        await myLearnStore.getCourseReviewPage(myLearnStore.courseReviewList!.paging, true);
    }
};

const loadMoreReviews = async () => {
    if (selectedCourse.value) {
        await myLearnStore.getCourseReviewPage(myLearnStore.courseReviewList!.paging, false);
    }
};

// Initial load of reviews
onMounted(async () => {
    await myLearnStore.getCourseReviewPage({}, true);
});
</script>
