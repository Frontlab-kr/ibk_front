<template>
  <div class="ag-theme-quartz" style="display: flex;
    justify-content: end;">
    <div class="ag-ltr">
      <div class="ag-paging-panel ag-unselectable" style="border: none">
        <span class="ag-paging-page-size">
          <div class="ag-picker-field ag-labeled ag-label-align-left ag-select">
            <div class="ag-label">Page Size:</div>
            <Select v-model="pageSize" :options="[5, 10, 20, 30, 40, 50, 100]" @change="changePageSize"/>
            <!--
            <div class="ag-wrapper ag-picker-field-wrapper ag-picker-collapsed">
              <div class="ag-picker-field-display">{{ paging.pageSize }}</div>
              <div class="ag-picker-field-icon">
                <span class="ag-icon ag-icon-small-down"></span>
              </div>
            </div>
            -->
          </div>
        </span>
        <span class="ag-paging-row-summary-panel" style="    display: flex;
    gap: 4px;">
          <span class="ag-paging-row-summary-panel-number">{{ startRow }} </span>
          <span>to</span>
          <span class="ag-paging-row-summary-panel-number"> {{ endRow }} </span>
          <span>of</span>
          <span class="ag-paging-row-summary-panel-number"> {{ paging.totalCount }}</span>
        </span>
        <span class="ag-paging-page-summary-panel">
          <div class="ag-button ag-paging-button" :class="{ 'ag-disabled': paging.pageNo === 1 }"
            @click="handlePage(1)">
            <span class="ag-icon ag-icon-first"></span>
          </div>
          <div class="ag-button ag-paging-button" :class="{ 'ag-disabled': paging.pageNo === 1 }"
            @click="handlePage(paging.pageNo - 1)">
            <span class="ag-icon ag-icon-previous"></span>
          </div>
          <span class="ag-paging-description" style="    display: flex;
    gap: 4px;">

            <span>Page</span>
            <span class=" ag-paging-number"> {{ paging.pageNo }} </span>
          <span>of</span>
          <span class="ag-paging-number"> {{ totalPage }} </span>
        </span>
        <div class="ag-button ag-paging-button" :class="{ 'ag-disabled': paging.pageNo >= totalPage }"
          @click="handlePage(paging.pageNo + 1)">
          <span class="ag-icon ag-icon-next"></span>
        </div>
        <div class="ag-button ag-paging-button" :class="{ 'ag-disabled': paging.pageNo >= totalPage }"
          @click="handlePage(totalPage)">
          <span class="ag-icon ag-icon-last"></span>
        </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PaginationState } from '@/types/globaltype';

const props = withDefaults(defineProps<{ paging: PaginationState; pageListSize?: number }>(), {
  paging: () => ({
    pageNo: 1,
    pageSize: 10,
    totalCount: 0,
  }),
  pageListSize: 10,
});

const emit = defineEmits<{
  (eventName: 'update:page', page: number): void
  (eventName: 'update:pageSize', pageSize: number): void
}>();

const pageSize = ref<number>(props.paging?.pageSize || 0);

const handlePage = (page: number) => {
  if (page >= 1 && page <= totalPage.value) {
    emit('update:page', page);
  }
};

const changePageSize = () => {
  emit('update:pageSize', pageSize.value);
}

const totalPage = computed(() => Math.ceil(props.paging.totalCount / pageSize.value));
const startRow = computed(() => (props.paging?.pageNo - 1) * pageSize.value + 1);
const endRow = computed(() => Math.min(props.paging.pageNo * pageSize.value, props.paging.totalCount));

const numberRange = computed(() => {
  const start = Math.max(1, props.paging.pageNo - Math.floor(props.pageListSize / 2));
  const end = Math.min(totalPage.value, start + props.pageListSize - 1);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
