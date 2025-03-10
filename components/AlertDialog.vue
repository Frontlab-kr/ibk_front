<template>
  <Dialog 
    v-model:visible="baseStore.alertDialog.visible" 
    :modal="true" 
    :header="options.header" 
    :style="{ width: '25rem' }"
    :closable="false"
    class="ibk-dialog-alert"
  >
    <!-- 메시지 영역 -->
    <div  style="padding:15px;
    display: flex;
    justify-content: center;
    align-items: center;
">
      <span class="text-surface-600" v-html="errorMessage"></span>
    </div>

    <!-- 버튼 영역 -->
    <div class="flex justify-center">
      <Button 
        type="button" 
        style="    width: 100%;
    margin-top: 20px;"
        :label="options.buttonLabel"
        :severity="options.buttonSeverity"
        @click="onConfirm"
      />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { useBaseStore } from '../domains/base';

interface Props {
  header?: string;
  message: string;
  buttonLabel?: string;
  buttonSeverity?: string;
}

const options= {
  header: '알림',
  buttonLabel: '확인',
  buttonSeverity: 'primary'
}

const baseStore = useBaseStore();

const errorMessage = computed(() => {
    const message = baseStore.alertDialog.message;
    
    if (typeof message === 'string') {
      return message;
    }
    
    return JSON.stringify(message);
  });

// 확인 버튼 클릭
const onConfirm = () => {
  baseStore.alertDialog.visible = false;
  baseStore.alertDialog.alertDialogCallback();
};

</script>