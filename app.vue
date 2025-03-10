<template>
  <NuxtLayout>

    <NuxtSnackbar />
    <NuxtPage />
    <container />
    <!-- <loading v-model:active="baseStore.isLoading" :can-cancel="false" :is-full-page="true" :opacity="0" color="#004898"
             loader="spinner" /> -->
    <ConfirmDialog></ConfirmDialog>
    <DynamicDialog />
    <AlertDialog />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useBaseStore } from '~/domains/base';
import { container } from 'jenesius-vue-modal';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Utility from './lib/Utility';
import { useAuthStore } from './domains/auth';
const baseStore = useBaseStore();
baseStore.getTopMenuList();
baseStore.getCommonCodeList();
Utility.confirmInstance = useConfirm();

/* setTimeout(async() => {

 const result = await $confirm('ddd')
 // console.log(result)
}, 1000) */
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
