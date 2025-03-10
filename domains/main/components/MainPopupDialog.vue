<template>
  <Dialog
    v-model:visible="visible"
    :modal="popup.ppupTcd === 'LY'" :header="popup.ppupTtlNm"
    class="ibk-dialog-main ibk-dialog-main--text"
     @hide="closePopup"
  >
    <div class="ibk-dialog-main__contents">
      <div v-html="popup.ppupCon"></div>
    </div>
    <div class="ibk-dialog-main__foot">
      <p>
        <Checkbox
        v-model="popup.ui_is_open_oneday"
        :binary="true"
        :input-id="`todayClose_${popup.ppupId}`"
          @change="onCheckboxChange"
        />
        <label :for="`todayClose_${popup.ppupId}`">오늘 하루 열지않음</label>
      </p>
      <Button label="닫기" severity="secondary" outlined @click="closePopup" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Utility from '~/lib/Utility';
import type { MainPopup } from '~/domains/main';

const {visible, popup} = defineModels<{
    visible: boolean,
    popup: MainPopup
}>();

const closePopup = () => {
  // console.log('closePopup');
  if (popup.value.ui_is_open_oneday) {
    Utility.cacheLastOpenSeq({
      seq: popup.value.ppupId,
      type: 'popup',
    });
  } else {
    Utility.removeCacheLastOpenSeq({
      seq: popup.value.ppupId,
      type: 'popup',
    });
  }

  visible.value = false;
};

const onCheckboxChange = () => {
  // console.log('onCheckboxChange', popup.value.ui_is_open_oneday);
  closePopup(); 
};
</script>

<style scoped>

</style>
