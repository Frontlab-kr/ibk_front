<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-preview">
        <template #container>
            <div class="ibk-dialog-preview-head">
                <div class="ibk-dialog-preview-head__title">{{ selectedLesson.dutyEdctLssoNm }}</div>
                <div class="ibk-dialog-preview-head__close">
                    <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined
                        @click="visible = false" />
                </div>
            </div>
            <div class="ibk-dialog-preview-contents">
                <div class="ibk-dialog-preview-movie" style="    display: flex;
    justify-content: center;
    align-items: center;">
                    <video controls v-if="vodUrl" >
                        <source :src="vodUrl" type="video/mp4" />
                    </video>
                    <div v-else>미리보기 영상이 없습니다.</div>
                </div>
                <div class="ibk-dialog-preview-info">
                    <div class="ibk-dialog-preview-info-head">
                        <div class="ibk-dialog-preview-info-head__badge">
                            <Badge style="background: #e4f2ff; color: #2873e3; font-size: 16px">
                                <i class="ibk-icon-12-play mr-1"></i>
                                {{ selectedLesson.connKcd }}
                            </Badge>
                        </div>
                        <div class="ibk-dialog-preview-info-head__view" v-if="selectedLesson.courseResult">
                            <i class="ibk-icon-20-view"></i>
                            {{ selectedLesson.courseResult.viewCnt }}
                        </div>
                    </div>
                    <div class="ibk-dialog-preview-info__title">
                        <p>{{ selectedLesson.dutyEdctLssoNm }}</p>
                        {{ formatDate(selectedLesson.lssoSttgTs) }} - {{ formatDate(selectedLesson.lssoFnshTs) }}
                    </div>
                </div>
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import type { CourseDegreeLessonOutVo } from '../../../../api-client';
import Utility from '../../../../lib/Utility';
import { useLearningStore } from '../../../learning/store';

const { visible, selectedLesson } = defineModels<{
    visible: boolean;
    selectedLesson: CourseDegreeLessonOutVo;
}>();
const learningStore = useLearningStore()
const vodUrl = await Utility.getVodUrl(learningStore.currentLesson?.vod)

const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR');
};



</script>
