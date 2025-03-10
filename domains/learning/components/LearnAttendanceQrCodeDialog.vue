<template>
    <Dialog v-model:visible="visible" modal header="QR 출석 코드 스캔" class="p-confirmdialog">
        <AttendanceQrCode />
        <template #footer>
            <Button type="button" label="확인" severity="secondary" @click="visible = false"></Button>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { useLearningStore } from '../store';
import ManagerLearning from '../../../lib/ManagerLearning'
const learningStore = useLearningStore();
const { visible } = defineModels<{
    visible: boolean;
}>();
</script>
