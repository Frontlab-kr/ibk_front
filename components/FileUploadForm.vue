<template>
  <div class="card">

    <FileUpload
      name="demo[]"
      :multiple="props.multiple"
      :accept="props.accept"
      :maxFileSize="props.maxFileSize"
      @select="onSelectedFiles"
      :file-limit="props.fileLimit"
    >
      <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-4">
          <div class="flex gap-2">
            <Button @click="chooseCallback()" icon="bi bi-cloud-upload" rounded outlined severity="info"></Button>
            <!--
            <Button
              @click="uploadEvent(uploadCallback)"
              icon="bi bi-cloud-upload"
              rounded
              outlined
              severity="success"
              :disabled="!files || files.length === 0"
            ></Button>
            -->
            <Button
              @click="clearCallback()"
              icon="bi bi-x"
              rounded
              outlined
              severity="danger"
              :disabled="!files || files.length === 0"
            ></Button>
          </div>
          <!--
          <ProgressBar :value="totalSizePercent" :showValue="false" class="md:w-20rem h-1 w-full md:ml-auto">
            <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
          </ProgressBar>
          -->
        </div>
      </template>
      <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback, messages }">
<!--        <Message v-if="messages" severity="error">{{ messages }}</Message>-->
        <Message v-for="msg of messages" :key="msg" severity="error" class="mb-5" closable>{{ messages }}</Message>
        <div class="flex flex-column gap-8">
          <div v-if="files.length > 0">
<!--            <h5>Pending</h5>-->
            <div class="flex flex-wrap gap-4">
              <div
                v-for="(file, index) of files"
                :key="file.name + file.type + file.size"
                class="p-4 rounded-border flex flex-column border-1 border-100 align-items-center gap-4"
              >
                <div>
                  <img v-if="isImageFile(file)" role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                  <span v-else class="bi bi-file-text" data-pc-section="icon"></span>
                </div>
                <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                <div>{{ formatSize(file.size) }}</div>
<!--                <Badge value="Pending" severity="warn" />-->
                <Button
                  icon="bi bi-x"
                  @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                  outlined
                  rounded
                  severity="warn"
                />
              </div>
            </div>
          </div>

          <!--
          <div v-if="uploadedFiles.length > 0">
            <h5>Completed</h5>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="(file, index) of uploadedFiles"
                :key="file.name + file.type + file.size"
                class="p-8 rounded-border flex flex-column border border-surface align-items-center gap-4"
              >
                <div>
                  <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                </div>
                <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{
                  file.name
                }}</span>
                <div>{{ formatSize(file.size) }}</div>
                <Badge value="Completed" class="mt-4" severity="success" />
                <Button icon="bi bi-x" @click="removeUploadedFileCallback(index)" outlined rounded severity="danger" />
              </div>
            </div>
          </div>
          -->
        </div>
      </template>
      <template #empty>
        <div class="flex align-items-center justify-content-center flex-column">
          <div
            class="flex align-items-center justify-content-center border-1 border-circle border-400"
            style="width: 60px; height: 60px"
          >
            <i class="bi bi-cloud-upload p-4 text-3xl text-gray-500" />
          </div>

          <p class="mt-3 mb-0">Drag and drop files to here to upload.</p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useToast } from 'primevue/usetoast';

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const { modelValue } = defineModels<{
  modelValue: any
}>();

const props = withDefaults(
	defineProps<{
    maxFileSize: number;
    accept: string;
    multiple: boolean;
    fileLimit: number | null;
	}>(), {
    maxFileSize: 1000 * 1024 * 1024, // 1000메가
    accept: '',
    multiple: true,
    fileLimit: null,
  }
);

const emits = defineEmits<{
  (e: 'select', event: any): void;
}>();

const onRemoveTemplatingFile = (file: any, removeFileCallback: Function, index: number) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event: any) => {
  //{originalEvent: Event, files: Proxy(Array)}

  modelValue.value = event.files;
  modelValue.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });

  emits('select', event);
};
watch(modelValue, (newVal) => {
  // console.log('modelValue', newVal);
}, {deep: true});
const uploadEvent = (callback: Function) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const isImageFile = (file: File) => {
  const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];

  // Check if the file type is in the accepted list
  return file && acceptedImageTypes.includes(file.type);
}

const formatSize = (bytes: number) => {
  const k = 1024;
  const dm = 3;
  //const sizes = $primevue.config.locale.fileSizeTypes;
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];


  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  if(sizes){
    return `${formattedSize} ${sizes[i]}`;
  }else{
    return 0;
  }

};
</script>
