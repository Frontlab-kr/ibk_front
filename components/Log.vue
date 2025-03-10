<template>
  <div v-if="IS_LOCAL">
    <div style="line-break: anywhere">
      <span class="expand-icon" @click="isExpanded = !isExpanded">
        <i :class="isExpanded ? 'icon-collapse' : 'icon-expand'"></i>
      </span>
      <div v-if="isExpanded" style="line-break: anywhere">
        <JsonEditorVue v-if="modelValue" v-model="modelValue"  />
        <JsonEditorVue v-else v-model="refItem" :readOnly="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JsonEditorVue from 'json-editor-vue'
import Utility from '../lib/Utility';
const IS_LOCAL = $isLocal();
const { modelValue } = defineModels<{
  modelValue: string | null
}>();

const { item } = defineProps<{
  item?: any
}>();

const refItem = ref(item);

const isExpanded = ref(false);
function copyToClipboard() {
  navigator.clipboard.writeText(JSON.stringify(modelValue.value!))
    .then(() => {
      // console.log('Text copied to clipboard');
      // Optionally, you can show a notification to the user here.
      Utility.notify({ message: 'Copied to clipboard' });
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}
</script>
<style scoped>
.expand-icon {
  cursor: pointer;
  /* Add styles for the icon span here */
  font-size: x-large;
  font-weight: bold;
  color: red;
}

.icon-expand::before {
  content: '+';
  /* Or use a Unicode character or an icon font */
}

.icon-collapse::before {
  content: '-';
  /* Or use a Unicode character or an icon font */
}
</style>