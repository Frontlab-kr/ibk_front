<template>
  <Dialog v-model:visible="handleVisible" @update:visible="handleVisible" :modal="true" class="ibk-confirm">
    <div class="ibk-dialog__title">
      <span v-if="confirm.title">{{ confirm.title }}</span>
    </div>
    <p class="text-center" v-html="confirm.message"></p>
    <template #footer>
      <Button
        :label="confirm.leftButtonLabel"
        size="large"
        severity="secondary"
        class="w-full"
        @click="
          action = confirm.trueButton === 'LEFT' ? true : false;
          handleVisible = false;
        "
      />
      <Button
        :label="confirm.rightButtonLabel"
        size="large"
        class="w-full"
        @click="
          action = confirm.trueButton === 'RIGHT' ? true : false;
          handleVisible = false;
        "
        autofocus
      />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { Modal } from 'jenesius-vue-modal';
import type { CustomConfirmOptions } from '@/types/globaltype';

const action = ref<boolean>(false);
const props = withDefaults(
  defineProps<{
    customConfirmOptions: CustomConfirmOptions;
  }>(),
  {},
);
// console.log(props.customConfirmOptions);
const INIT_CONFIRM = () => ({
  title: '',
  message: '',
  leftButtonLabel: '아니요',
  rightButtonLabel: '예',
  trueButton: 'RIGHT',
});

const route = useRoute();
const confirm = reactive(INIT_CONFIRM());

const emit = defineEmits<{
  // @ts-ignore
  (e: Modal.EVENT_PROMPT, action: boolean): void;
}>();

watch(
  () => route,
  () => {
    handleVisible.value = false;
  },
  { deep: true },
);

const handleVisible = computed<boolean>({
  get: () => {
    return true;
  },
  set: (val) => {
    if (!val) {
      nextTick(() => {
        emit(Modal.EVENT_PROMPT, action.value);
      });
    }
  },
});

onBeforeMount(() => {
  Object.assign(confirm, props.customConfirmOptions);
});
</script>
