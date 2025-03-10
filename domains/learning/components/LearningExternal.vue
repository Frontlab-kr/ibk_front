<template>
    <div class="ibk-lectureroom-lecture">
        <div class="ibk-inner">
            <div class="ibk-lectureroom-lecture-link" style="display: flex;
    justify-content: center;
    align-items: end;">
                <Button label="외부 링크 연결" style="margin-bottom: 100px;" @click="ManagerLearning.getIns().openExternalLink()" />
            </div>
            <div class="ibk-lectureroom-lecture-info">
                <div class="ibk-lectureroom-lecture-info-contents">
                    <TitleBar />
                    <div class="ibk-lectureroom-lecture-info__view" v-if="false">
                        <i class="ibk-icon-24-view"></i>
                        2574
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ManagerLearning from '../../../lib/ManagerLearning'
import { useLearningStore } from '../store';
const managerLearning = ManagerLearning.getIns()
const learningStore = useLearningStore()

const compLearning = useCompLearning() 
onMounted(() => {

    compLearning.onLessonMounted();
})
</script>