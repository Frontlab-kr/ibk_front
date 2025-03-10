<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-10" @close="onClose">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button type="button"
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="onClose">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{title}}
              </DialogTitle>
              <div class="mt-4">
                <div class="grid grid-cols-1 gap-x-0 gap-y-3 sm:grid-cols-6">
                  <div class="sm:col-span-6">
                    {{ message }}
                  </div>

                </div>
              </div>
              <div class="flex justify-end mt-6">

                <button type="button"
                        class="px-4 py-2 mx-1 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        @click="onClose">
                  닫기
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup lang="ts">
import { Modal } from "jenesius-vue-modal";

withDefaults(
  defineProps<{
    title?: string;
    message?: string;
  }>(),
  {
    title: "",
    message: "",
  }
);
const isOpen = ref(true);
const emit = defineEmits<{
  // @ts-ignore
  (e: Modal.EVENT_PROMPT, action: string): void;
}>();

const handleVisible = computed<boolean>({
  get: () => {
    return true;
  },
  set: (val) => {
    if (!val) {
      nextTick(() => {

        emit(Modal.EVENT_PROMPT, "close");
      });
    }
  },
});
function onClose() {
  isOpen.value = false;
  handleVisible.value = false;
}
</script>
