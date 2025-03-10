<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-agree">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog(false)" />
      </div>
      <div class="ibk-dialog-agree__title">무단 제작/배포 금지 동의</div>
    </template>

    <div class="ibk-dialog-agree__text">
      해당 내용은 직원 작성 지식/노하우이며, <br />
      자체제작 상품안내장은 제작/배포 할 수 없습니다. <br />
      부득이 제작하여 사용할 경우 ‘금융상품 공시업무 지침’에 의거 <br />
      사전 소관부서 승인을 받아야 합니다.
    </div>
    <div class="ibk-dialog-agree__check">
      <Checkbox v-model="isCheck" inputId="CheckAgree1" value="CheckAgree" name="CheckAgree" />
      <label for="CheckAgree1" class="ml-2"> 동의합니다 </label>
    </div>

    <template #footer>
      <div class="ibk-dialog-agree-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog(false)" />
        <Button
          label="확인"
          severity="primary"
          size="large"
          class="w-full"
          @click="closeDialog(true)"
          :disabled="!isCheck"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts" >
import Utility from '~/lib/Utility';

const router = useRouter();
const { visible, isAgree } = defineModels<{ visible: boolean, isAgree: boolean }>();
const isCheck = ref<boolean>(false);

const closeDialog = (isConfirm: boolean) => {
  if (isConfirm) {
    if (isCheck) {

      Utility.cacheLastOpenSeq({
        seq: '_isFirstWrite',
        type: 'social',
      });

      router.push('/social/edit');
    } else {
      alert('동의를 하셔야 글을 작성하실 수 있습니다');
      return;
    }

    //isAgree.value = true;
  } else {
    //isAgree.value = false;
  }

  visible.value = false;
}
</script>
