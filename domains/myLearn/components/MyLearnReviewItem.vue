<template>
    <div class="ibk-lectureroom-my-review-list-item">
        <div class="ibk-lectureroom-my-review-list__top">
            <div class="ibk-lectureroom-my-review-list__start">
                <a href="">
                    <div class="ibk-lectureroom-my-review-list-thumb">
                        <img :src="props.item.pcImgUrlAdr" alt="" />
                    </div>
                    <div class="ibk-lectureroom-my-review-list-title">
                        <h3>{{ props.item.dutyEdctNm }}</h3>
                        <div class="ibk-lectureroom-my-review-list-title__text">
                            <div>
                                <!-- 인재개발부
                                <hr />
                                CP명 -->
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="ibk-lectureroom-my-review-list__end">
                <div class="pc">
                    <div class="ibk-lectureroom-my-review-list-button">
                        <Button v-if="props.type == 'A'" label="후기쓰기" severity="secondary" outlined @click="$emit('open-modal', props.item)" />
                        <Button v-else-if="props.type == 'B'" label="수정하기" severity="secondary" outlined @click="$emit('open-modal', props.item)" />
                    </div>
                </div>
            </div>
        </div>
        <template v-if="props.type == 'B'">
            <div class="ibk-lectureroom-my-review-list-text">
                <div class="ibk-lectureroom-my-review-list-text__rating">
                    <Rating v-model="props.item.rvwScr" :stars="5" readonly />
                    <strong>{{ props.item.rvwScr }}</strong>
                </div>
                <p>
                    {{ props.item.rvwCon }}
                </p>
            </div>
        </template>
        <div class="mo">
            <div class="ibk-lectureroom-my-review-list-button">
                <Button v-if="props.type == 'A'" label="후기쓰기" severity="secondary" outlined @click="$emit('open-modal', props.item)" />
                <Button v-else-if="props.type == 'B'" label="수정하기" severity="secondary" outlined @click="$emit('open-modal', props.item)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type CourseReviewContents } from '../store';

const props = defineProps<{
    item: CourseReviewContents,
    type: string,
}>();


</script>
<style scoped></style>
