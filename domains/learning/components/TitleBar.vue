<template>
    <div>
        <log v-model="learningStore.currentLesson"/>
        <div class="ibk-lectureroom-lecture-info__title">
            <p>{{ learningStore.currentLesson?.connDtlCon }}</p>
            <div class="ibk-lectureroom-lecture-info__badge">
                <Badge style="background: #7151ff; color: #fff">
                    <i class="ibk-icon-12-play-white mr-1"></i>
                    {{ManagerLearning.getLessonTypeName(learningStore.currentLesson?.connKcd as any)}}
                </Badge>
            </div>
        </div>
        <div class="ibk-lectureroom-lecture-info__text">
            <div>
                {{
                    ManagerLearning.getIns().getChapter(learningStore.currentLesson!.edctDsprLssoNo!)?.dutyEdctChpaNm
                }}. {{ learningStore.currentLesson?.dutyEdctLssoNm }}
                <hr />
            </div>
            <div>
                {{ formatDateRange(learningStore.currentLesson?.lssoSttgTs,
                    learningStore.currentLesson?.lssoFnshTs) }}
                <hr />
                {{ formatEndDate(learningStore.currentLesson?.lssoFnshTs) }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLearningStore } from '../store';
import ManagerLearning from '../../../lib/ManagerLearning'
import { eLessonType } from '../../course/education/type';

const learningStore = useLearningStore()
</script>
