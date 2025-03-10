<template>
    <div style="display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    font-weight: bold;">
        출석 체크
    </div>
</template>
<script setup lang="ts">
import type { StudyRoomAttendanceQRInVo } from '../../../api-client';
import { useLearningStore } from '../store';

const learningStore = useLearningStore()
onMounted(async () => {
    const route = useRoute()
    const params = {
        /* dutyEdctCd: route.query.dutyEdctCd,
        edctDsprNo: Number(route.query.edctDsprNo),
        edctDsprChpaNo: Number(route.query.edctDsprChpaNo),
        edctDsprLssoNo: Number(route.query.edctDsprLssoNo) */
        ...route.query,
        currentAcmlPictLen : 100,

    } as StudyRoomAttendanceQRInVo
    try {
        await learningStore.doAttendanceQR(params)
        
        await $alert('출석체크가 완료되었습니다.')
    } catch (error) {
        
        console.error(error)
        
        await $alert('출석체크에 실패하였습니다.')
    }
})
</script>