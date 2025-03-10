<template>
  <Dialog v-model:visible="props.modelValue" modal class="ibk-dialog ibk-dialog-app">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeModal" />
      </div>
      <div class="ibk-dialog-app__title">앱 다운로드</div>
    </template>

    <div class="ibk-dialog-app__text">
      <div class="mo">
        <strong>앱 다운로드 안내</strong>
      </div>
      스마트 폰에 다운로드 후 이용 가능 합니다.
    </div>
    <div class="ibk-dialog-app__download">
      <Button icon="ibk-icon-24-android" label="안드로이드 다운로드" severity="secondary" class="w-full" size="large" outlined @click="download"/>
      <Button icon="ibk-icon-24-ios" label="애플 다운로드" severity="secondary" class="w-full" size="large" outlined @click="download" />
    </div>

    <template #footer>
      <div class="ibk-dialog-app__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="closeModal" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {
    modelValue: false as boolean
  }
)
const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false);
}

const download = () => {
  alert('준비중입니다.');
}

</script>
