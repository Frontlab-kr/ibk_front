<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-file">
        <template #header>
            <div class="ibk-dialog-back">
                <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
            </div>
            <div class="ibk-dialog-file__title">자료실</div>
        </template>

        <div class="ibk-dialog-file__text">
            <strong>학습 자료 다운로드</strong>
            <p>기업구조조정의 이해 및 활용</p>
        </div>
        <div class="ibk-dialog-file-list">
            <ul>
                <li v-for="i of 40">
                    <NuxtLink to="/" class="ibk-dialog-file-list__text">
                        <i class="ibk-icon-24-download"></i>
                        <p>구조조정펀드 사례 분석 참고자료.pdf</p>
                        <strong>1.0MB</strong>
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <template #footer>
            <div class="ibk-dialog-file__button">
                <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="visible = false" />
            </div>
        </template>
    </Dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const { visible } = defineModels<{
    visible: boolean;
}>();
const visibleAttachmentDialog = ref(false);

const openAttachmentDialog = () => {
    visibleAttachmentDialog.value = true;
};
</script>