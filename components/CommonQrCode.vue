<template>
  <!-- border 3px 을 줘야 다크모드에서 qr 인식됨. -->
  <!-- <qrcode-vue :value="value" :level="level" :render-as="renderAs" style="    border: solid white 3px;" /> -->
  <VueQrcode
    :value="value"
    @change="onDataUrlChange"
  />
</template>
<script setup lang="ts">

import VueQrcode from 'vue-qrcode';
// import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'

const props = defineProps({
  value: {
    type: String,
    default: 'qrcode'
  },
 /*  level: {
    type: String as PropType<Level>,
    default: 'L'
  },
  renderAs: {
    type: String as PropType<RenderAs>,
    default: 'svg'
  } */
})
function onDataUrlChange(dataUrl: string) {
  // // console.log(dataUrl)
}
</script>
