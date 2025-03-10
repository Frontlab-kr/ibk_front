<template>
  <Dialog v-model:visible="visible" modal header="주소 검색" :style="{ width: '70rem' }">
    <Card>
      <template #content>
        <div class="grid">
          <div class="col-12">
            <div class="field mb-0">
              <label>주소 검색</label>
              <div>
                <InputText v-model="params.searchText" class="w-full" @keyup.enter="fetchData()" 
                          placeholder="도로명, 건물명으로 검색" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-content-center gap-2 mt-4">
      <Button label="검색하기" @click="fetchData()" />
      <Button label="초기화" severity="secondary" outlined class="bg-white" @click="searchClear" />
    </div>

    <Card class="mt-4">
      <template #content>
        <div class="flex align-items-center justify-content-between">
          <div class="text-sm">{{`총 ${store.addressList.paging?.totalCount?.toLocaleString() || 0}개`}}</div>
        </div>
        <div class="mt-2">
          <PageGridWithPaging2 ref="pageGrid"
                              v-model:rowData="store.addressList.contents"
                              :colDefs="colDefs"
                              :inputStyle="{ height: '519px' }"
                              :auto-resize="true"
                              :rowSelection="'single'"
                              :paging="store.addressList.paging"
                              @on-grid-ready="onGridReady"
                              @change-page="changePage"
                              @change-page-size="changePageSize"
          />
        </div>
      </template>
    </Card>

    <template #footer>
      <Button type="button" label="취소" severity="secondary" @click="closeDialog" />
      <Button type="button" label="선택" @click="selectAddress" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useEducationStore } from '../store';
import type { AddressPageInVo } from '../../../../api-client';

const { visible } = defineModels<{
  visible: boolean;
}>();

const emits = defineEmits<{
  (e: 'selectAddress', address: any): void;
}>();

const store = useEducationStore();
const gridApi = ref();

const colDefs = ref([
  { 
    headerName: 'No', 
    valueGetter: 'node.rowIndex + 1', 
    maxWidth: 80, 
    headerClass: 'text-center', 
    cellClass: 'text-center' 
  },
  { 
    headerName: '도로명', 
    flex: 2,
    cellRenderer: (params: any) => {
      return `
        <div class="address-row">
          <!--span class="address-type road">도로명</span-->
          ${params.data.rdnmCcwAdr} ${params.data.bldnNm ? `(${params.data.bldnNm})` : ''}  ${params.data.rdNm}
        </div>
      `;
    }
  },
  { 
    headerName: '지번', 
    flex: 2,
    cellRenderer: (params: any) => {
      return `
        <div class="address-row">
          <!--span class="address-type jibun">지번</span-->
          ${params.data.emdAdr || ''} ${params.data.riAdr || ''} 
          ${params.data.mntnYn === 'Y' ? '산' : ''} ${params.data.ognlNad || ''}${params.data.sbNad ? '-' + params.data.sbNad : ''}
        </div>
      `;
    }
  },
  { 
    field: 'zpcd', 
    headerName: '우편번호', 
    width: 100,
    headerClass: 'text-center',
    cellClass: 'text-center'
  }
]);

const params = reactive<AddressPageInVo>({
  pageNo: 1,
  pageSize: 10,
  searchText: '',
});

const fetchData = async (isRefresh = true) => {
  if (isRefresh) params.pageNo = 1;
  await store.getAddressList(params);
};

const searchClear = () => {
  params.searchText = '';
  fetchData();
};

const changePage = (index: number) => {
  params.pageNo = index;
  fetchData(false);
};

const changePageSize = (index: number) => {
  params.pageSize = index;
  fetchData();
};

const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const selectAddress = async () => {
  const rows = gridApi.value.getSelectedRows();
  if (rows && rows.length > 0) {
    emits('selectAddress', rows[0]);
    closeDialog();
  } else {
    await $alert('주소를 선택해주세요.');
  }
};

const closeDialog = () => {
  visible.value = false;
};

onBeforeMount(() => {
  fetchData();
});
</script>

<style scoped>
:deep(.address-row) {
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.address-type) {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

:deep(.road) {
  background-color: #2196F3;
  color: white;
}

:deep(.jibun) {
  background-color: #4CAF50;
  color: white;
}
</style>
