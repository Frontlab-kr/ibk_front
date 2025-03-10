<template>
    <div class="ibk-dialog-qr" style="display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;">
        출석을 위해 QR 코드를 스캔해주세요.
        <div class="ibk-dialog-qr__code">
            <log :item="ManagerLearning.getIns().getQrAttendanceUrl()" />
            <CommonQrCode :value="ManagerLearning.getIns().getQrAttendanceUrl()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ManagerLearning from '../../../lib/ManagerLearning'

</script>
