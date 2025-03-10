<template>
  <!-- https://www.ag-grid.com/vue-data-grid/grid-options/ -->
  <!-- loading : rowData 가 null 이면 loading 이 호출 되도록함. rowData가 [] 빈 array 라면 loading 이 호출 되지 않음. -->
  <!-- enableCellTextSelection : 선택된 셀을 double click 해서 복사 가능." -->
  <ag-grid-vue
    class="ag-theme-quartz"
    :style="props.inputStyle"
    :columnDefs="colDefsRefined"
    :overlayNoRowsTemplate="overlayNoRowsTemplate"
    :rowSelection="props.rowSelection"
    :rowModelType="rowModelType"
    @grid-ready="onGridReady"
    :rowData="rowData"
    @rowDataUpdated="rowDataUpdated"
    :getRowId="getRowId"
    :enableCellTextSelection="true"
    :loading="true"
    :suppressMultiSort="true"
    :stopEditingWhenCellsLoseFocus="true"
  />

 <AppPagination
   v-if="props.paging"
   :paging="props.paging"
   @update:page="handlePageChange"
   @update:pageSize="handlePageSizeChange"
   class="ag-paging-page-summary-panel"
  />

</template>

<script setup lang="ts">
/**
 * 참고사항
 * 1. header checkbox 사용 하려면 rowSelection = 'multiple' 해야함
 */

// import { AgGridVue } from "@ag-grid-community/vue3";
// import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
// import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { AgGridVue } from 'ag-grid-vue3';
import type { PaginationState } from '@/types/globaltype';
import type { RowDataUpdatedEvent } from 'ag-grid-enterprise'; // Vue Data Grid Component
import { useBaseStore } from '../domains/base';
import { computed } from 'vue';

const { rowData } = defineModels<{
  rowData: any[] | undefined;
}>();

const props = withDefaults(
  defineProps<{
    colDefs: any[];
    rowSelection: string;
    autoResize: boolean;
    inputStyle: any;
    rowId?: string;
    paging?: PaginationState;
  }>(),
  {
    rowSelection: 'single',
    autoResize: false,
  },
);
const colDefsRefined = ref<any[]>([]);
const emits = defineEmits<{
  (e: 'onGridReady', params: any): void;
  (e: 'fetchData', params: any, callback: Function): void;
  (e: 'changePage', index: number): void;
  (e: 'rowDataUpdated', event: any): void;
  (e: 'changePageSize', index: number): void;
}>();

const overlayNoRowsTemplate = ref<string>('<span class="ag-overlay-no-rows-center">데이터가 없습니다.</span>');

// sets 10 rows per page (default is 100)
const rowModelType = ref('clientSide');
// grid 성능을 위해 shallowRef 쓰라고 api 나와있음.
const gridApi = shallowRef<any>();
// allows the user to select the page size from a predefined list of page sizes

const onGridReady = async (params: any) => {
  gridApi.value = params.api;

  // colDefs에 suppressMenu: true 추가
  props.colDefs.forEach((colDef) => {
    colDef.suppressMenu = true; //메뉴
    colDef.suppressMovable = true; //컬럼 이동 드래그를 막는다.
  });

  const rowNumberCol = {
    headerName: 'No.',
    field: 'rowNumber',
    minWidth: 70,
    width:80,
    pinned: 'left',
    suppressMenu: true,
    suppressMovable: true,
    valueGetter: (params) => {
      if (!props.paging) return params.node.rowIndex + 1;
      const { pageNo, pageSize , totalCount} = props.paging;
      return (pageNo - 1) * pageSize + params.node.rowIndex + 1;
    }
  };

  const newColDefs = [...props.colDefs];
  const noColumnIndex = newColDefs.findIndex(col => col.field === 'no' || col.headerName === 'No');
  if (noColumnIndex !== -1) {
    newColDefs.splice(noColumnIndex, 1, rowNumberCol);
  } else {
    
  }
  colDefsRefined.value = newColDefs;
  
  
  emits('onGridReady', params);
  if (props.autoResize) {
    gridApi.value.sizeColumnsToFit();
    window.addEventListener('resize', () => params.api.sizeColumnsToFit());
  }
};
watch(
  () => rowData.value,
  () => {
    if (gridApi.value) {
      if (props.autoResize) {
        if (rowData.value && rowData.value.length > 0) {
          // 값이 호출되고나서 항상 호출해줘야 되므로.
          gridApi.value.sizeColumnsToFit();
        }
      }
    }
  },
  { immediate: true },
);
const getRowId = computed(() => {
  return props.rowId ? (params) => params.data[props.rowId] : undefined;
});

const clearSorting = () => {
  if (gridApi.value) {
    gridApi.value.applyColumnState({
      defaultState: { sort: null },
    });
  }
};

const handlePageChange = (page: number) => {
  emits('changePage', page);
};

const handlePageSizeChange = (pageSize: number) => {
  emits('changePageSize', pageSize);
}

const rowDataUpdated = (event: any) => {
  emits('rowDataUpdated', event);
};

defineExpose({
  clearSorting,
});
</script>

<style lang="scss"></style>
