<template>
  <Dialog v-model:visible="visible" modal header="사용자 검색" :style="{ width: '70rem' }">
    <Card>
        <template #content>
          <div class="grid">
            <div class="col-12">
              <div class="field mb-0">
                <label>성명/직원번호</label>
                <div>
                  <InputText v-model="params.searchText" class="w-full" @keyup.enter="fetchData()" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <div class="flex justify-content-center gap-2 mt-4">
        <Button label="검색하기" class="w-2" @click="fetchData()" />
<!--        <Button label="초기화" severity="secondary" outlined class="bg-white w-1" @click="searchClear" />-->
      </div>

      <Card class="mt-4">
        <template #content>
          <div class="flex align-items-center justify-content-between">
            <div class="text-sm">{{`총 ${store.commonAuthMemberUserData.paging?.totalCount?.toLocaleString() || 0}개`}}</div>
            <div class="flex gap-2">
            </div>
          </div>
          <div class="mt-2">
            <PageGridWithPaging2 ref="pageGrid"
                                 v-model:rowData="store.commonAuthMemberUserData.contents"
                                 :colDefs="colDefs"
                                 :inputStyle="{ height: '519px' }"
                                 :auto-resize="true"
                                 :rowSelection="'single'"
                                 :paging="store.commonAuthMemberUserData.paging"
                                 @on-grid-ready="onGridReady"
                                 @change-page="changePage"
                                 @change-page-size="changePageSize"
            />
          </div>
        </template>
      </Card>

    <template #footer>
      <Button type="button" label="취소" severity="secondary" @click="closeDialog"></Button>
      <Button type="button" label="선택" @click="selectUser"></Button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import Utility from '~/lib/Utility';
import { ref } from 'vue';
import { useEducationStore } from '../store';
import type { AuthMemberUserPageInqInVo } from '../../../../api-client';

const { visible } = defineModels<{
  visible: boolean;
}>();

const emits = defineEmits<{
  (e: 'selectUser', userId: string, userNm: string, emplNo: string): void;
}>();

const store = useEducationStore();
const gridApi = ref();

const colDefs = ref([
  { headerName: 'No', valueGetter: 'node.rowIndex + 1', maxWidth: 80, headerClass: 'text-center', cellClass: 'text-center', sortable: false },
  { field: 'userId', headerName: '아이디'},
  { field: 'userNm', headerName: '이름'},
  { field: 'emplNo', headerName: '직원번호'},
]);

const params = reactive<AuthMemberUserPageInqInVo>({
  pageNo: 1,
  pageSize: 10,
  searchText: '',
});

const fetchAuthMemberUserList = async () => {
  await store.fetchAuthMemberUserList(params);
}

const fetchData = async (isRefresh = true) => {
  if (isRefresh) params.pageNo = 1;
  await fetchAuthMemberUserList();
};

const changePage = (index: number) => {
  params.pageNo = index;
  fetchData(false);
}

const changePageSize = (index: number) => {
  params.pageSize = index;
  fetchData();
}

const onGridReady = (params: any) => {
  gridApi.value = params.api;
}

const selectUser = async () => {
  const rows = gridApi.value.getSelectedRows();
  if(rows && rows.length > 0) {
    emits('selectUser', rows[0].userId, rows[0].userNm, rows[0].emplNo);
    closeDialog();
  } else {
    await $alert('사용자를 선택해주세요!');
  }
}

const closeDialog = () => {
  visible.value = false;
}

onBeforeMount(()=>{
  fetchData();
});

</script>

<style scoped>

</style>
