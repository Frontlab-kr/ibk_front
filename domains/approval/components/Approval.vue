<template>
  <div class="ibk-inner">
    <div class="ibk-payment" style="padding-top: 48px">
      <div class="ibk-payment-head ibk-payment-head--tab">
        <h2>결재관리</h2>
      </div>
      <Tabs :value="searchParam.searchType">
        <TabList>
          <Tab value="01" @click="changeTab('01')">결재할 문서 {{approvalMyCount.approvalRCount}}</Tab>
          <Tab value="02" @click="changeTab('02')">승인문서 {{approvalMyCount.approvalACount}}</Tab>
          <Tab value="03" @click="changeTab('03')">반려문서 {{approvalMyCount.approvalFCount}}</Tab>
          <Tab value="99" @click="changeTab('99')">나의 신청현황 {{approvalMyCount.myApprovalCount}}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel :value="searchParam.searchType">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">전체 <strong>{{totalCount}}</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" dateFormat="yy-mm-dd" showButtonBar @date-select="getPageList" @clear-click="getPageList" />
                  <Button v-if="searchParam.searchType != '02' && searchParam.searchType != '03'" label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                  <div v-if="searchParam.searchType == '01'" class="pc">
                    <Button label="일괄승인" severity="primary" rounded @click="saveApprovalBatch" />
                  </div>
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head">
                  <div v-if="searchParam.searchType != '02' && searchParam.searchType != '03'" class="ibk-payment-center-head__title">전체</div>
                  <Button v-if="searchParam.searchType == '01'" label="일괄승인" severity="primary" rounded @click="saveApprovalBatch" />
                </div>
              </div>
              <div v-if="totalCount > 0" class="ibk-payment-center-list">
                <div v-for="(item,idx) in approvalList" :key="idx" class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <Checkbox v-if="searchParam.searchType == '01'" v-model="approvalCheckedItems" :inputId="'approvalCheckbox_'+(idx+1)" :value="item"/>
                      <label :for="'approvalCheckbox_'+(idx+1)"><span>결재번호</span> {{item.snctApfrNo}}</label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong :class="{'text-red-500': item.aplcScd == 'F', 'text-primary': item.aplcScd == 'A'}">{{item.aplcScdNm}}</strong>
                      {{item.ttlNm}}
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>{{formatDate(item.aplcTs)}}</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>{{formatDateRange(item.lrngSttgTs,item.lrngFnshTs)}}</span>
                      </li>
                    </ul>
                    <div v-if="item.dlplBscAdr" class="ibk-payment-center-list-item__table">
                      <table>
                        <tbody>
                        <tr>
                          <th>배송지</th>
                          <td>{{item.dlplBscAdr}}</td>
                        </tr>
<!--                        <tr>-->
<!--                          <th>배송정보</th>-->
<!--                          <td>CJ대한통운 150778</td>-->
<!--                        </tr>-->
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div v-if="item.approvalLine" class="ibk-payment-center-list-item__nav" v-html="item.approvalLine.replaceAll('>',`<i class='ibk-icon-16-Breadcrumb'></i>`)">
                    </div>
                    <div v-if="searchParam.searchType == '01'" class="ibk-payment-center-list-item__button">
                      <Button label="결재승인" severity="secondary" class="text-primary-600" @click="saveApproval(item)" />
                      <Button label="결재반려" severity="secondary" outlined  @click="showRejectModal(item,'W')" />
                      <Button label="상세보기" severity="secondary" outlined @click="showDetailModal(item)" />
                    </div>
                    <div v-else-if="searchParam.searchType == '03'" class="ibk-payment-center-list-item__button">
                      <Button label="반려사유" severity="secondary" outlined @click="showRejectModal(item,'R')" />
                    </div>
                    <div v-else-if="searchParam.searchType == '99'" class="ibk-payment-center-list-item__button ibk-payment-center-list-item__button--reverse">
                      <Button label="회차 변경" severity="secondary" class="text-primary-600" />
                      <Button label="상세보기" severity="secondary" outlined @click="showDetailModal(item)" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="ibk-payment-center-list-none">검색결과가 없습니다.</div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <Dialog v-model:visible="rejectModal.isOpen" modal class="ibk-dialog ibk-dialog-reject">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeRejectModal" />
      </div>
      <div class="ibk-dialog-reject__title">결재 반려</div>
    </template>
    <div class="ibk-dialog-reject-form">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label v-if="rejectModal.readonly">결재 반려 사유 확인</label>
            <label v-else>결재 반려 사유 작성</label>
            <Textarea v-model="rejectModal.snctOpnnCon" placeholder="결재 반려 사유를 입력해주세요." class="w-full" :readonly="rejectModal.readonly" />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-reject__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="closeRejectModal" />
        <Button v-if="!rejectModal.readonly" label="확인" severity="primary" size="large" class="w-full" @click="saveReject" />
      </div>
    </template>
  </Dialog>

  <ApprovalDetail v-model:isOpen="detailModal.isOpen" v-model:snctApfrNo="detailModal.snctApfrNo"></ApprovalDetail>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useApprovalStore } from '~/domains/approval/store';
import type { ApprovalLinStateInVo, ApprovalMyCountOutVo, ApprovalMyPageInVo, ApprovalPageInVo } from '~/api-client';
import { formatDate, formatDateRange } from '~/utils/$dateUtils';
import Utility from '~/lib/Utility';
import ApprovalDetail from '~/domains/approval/components/ApprovalDetail.vue';

const store = useApprovalStore();

const approvalList = ref<any>();
const totalCount = ref<number>(0);
const approvalCheckedItems = ref([]);
const dates = ref([]);
const searchParam = reactive<ApprovalPageInVo>({
  searchDateStart: '',
  searchDateEnd: '',
  searchType: '01',
});
const mySearchParam = reactive<ApprovalMyPageInVo>({
  searchDateStart: '',
  searchDateEnd: '',
})
const approvalMyCount = reactive<ApprovalMyCountOutVo>({
  approvalRCount: 0,
  approvalACount: 0,
  approvalFCount: 0,
  myApprovalCount: 0
})
let stateParams = new Array<ApprovalLinStateInVo>();
const rejectModal = reactive({
  isOpen: false,
  readonly: false,
  snctApfrNo: null,
  snctSqn: null,
  snctOpnnCon: null,
})
const detailModal = reactive({
  isOpen: false as boolean,
  snctApfrNo: 0 as number,
})

const changeTab = async (type: string) => {
  if(type != searchParam.searchType){
    searchParam.searchType = type;
    approvalCheckedItems.value = [];
    await getPageList();
  }
}

const getPageList = async () => {
  if(searchParam.searchType == '99'){
    await getMyPageApprovalList();
  }else{
    await getApprovalList();
  }
}

const getApprovalMyCountInfo = async () => {
  await store.getApprovalMyCount();
  if(store.approvalMyCount.data && store.approvalMyCount.data.response){
    approvalMyCount.approvalRCount = store.approvalMyCount.data.response.approvalRCount;
    approvalMyCount.approvalACount = store.approvalMyCount.data.response.approvalACount;
    approvalMyCount.approvalFCount = store.approvalMyCount.data.response.approvalFCount;
    approvalMyCount.myApprovalCount = store.approvalMyCount.data.response.myApprovalCount;
  }else{
    approvalMyCount.approvalRCount = 0;
    approvalMyCount.approvalACount = 0;
    approvalMyCount.approvalFCount = 0;
    approvalMyCount.myApprovalCount = 0;
  }
}

const convertCalendarDate = (date) => {
  return (date) ? formatDate(new Date(date.getTime() - date.getTimezoneOffset() * 60000)) : null;
}

const getMyPageApprovalList = async () => {
  mySearchParam.searchDateStart = (dates.value && dates.value[0]) ? convertCalendarDate(dates.value[0]) : null;
  mySearchParam.searchDateEnd = (dates.value && dates.value[1]) ? convertCalendarDate(dates.value[1]) : null;
  await store.getMyPageApprovalList(mySearchParam);
  if(store.approvalList.data && store.approvalList.data.response.contentsNbi > 0){
    approvalList.value = store.approvalList.data.response.contents;
    totalCount.value = store.approvalList.data.response.contentsNbi;
  }else{
    approvalList.value = [];
    totalCount.value = 0;
  }
}

const getApprovalList = async () => {
  searchParam.searchDateStart = (dates.value && dates.value[0]) ? convertCalendarDate(dates.value[0]) : null;
  searchParam.searchDateEnd = (dates.value && dates.value[1]) ? convertCalendarDate(dates.value[1]) : null;
  await store.getPageApprovalList(searchParam);
  if(store.approvalList.data && store.approvalList.data.response.contentsNbi > 0){
    approvalList.value = store.approvalList.data.response.contents;
    totalCount.value = store.approvalList.data.response.contentsNbi;
  }else{
    approvalList.value = [];
    totalCount.value = 0;
  }
}

const saveApprovalBatch = () => {
  if (approvalCheckedItems.value.length > 0){
    stateParams = [];
    approvalCheckedItems.value.forEach(data => {
      stateParams.push({
        snctApfrNo: data.snctApfrNo,
        snctSqn: data.snctSqn,
        snctScd: '02',
        snctOpnnCon: '일괄승인',
      });
    })
    saveApprovalLineStates(stateParams);
    approvalCheckedItems.value = [];
  }else{
    Utility.alert('선택된 항목이 없습니다.');
  }
}

const saveApproval = (data) => {
  Utility.confirm('승인하시겠습니까?').then((result) => {
    if(result){
      stateParams = [];
      stateParams.push({
        snctApfrNo: data.snctApfrNo,
        snctSqn: data.snctSqn,
        snctScd: '02',
      });
      saveApprovalLineStates(stateParams);
    }
  })
}

const saveApprovalLineStates = async (params) => {
  let result = await store.saveApprovalLineStates(params);
  if(Utility.isSuccess(result)){
    Utility.alert('정상 처리 되었습니다.');
    await getApprovalMyCountInfo();
    await getPageList();
  }else{
    // console.log(result);
  }
}

const showRejectModal = (data, mode) => {
  rejectModal.snctApfrNo = data.snctApfrNo;
  rejectModal.snctSqn = data.snctSqn;
  rejectModal.isOpen = true;
  if(mode == 'R'){
    rejectModal.readonly = true;
    rejectModal.snctOpnnCon = data.snctOpnnCon;
  }
}

const closeRejectModal = () => {
  rejectModal.snctApfrNo = null;
  rejectModal.snctSqn = null;
  rejectModal.snctOpnnCon = null;
  rejectModal.readonly = false;
  rejectModal.isOpen = false;
}

const saveReject = () => {
  stateParams = [];
  stateParams.push({
    snctApfrNo: rejectModal.snctApfrNo,
    snctSqn: rejectModal.snctSqn,
    snctScd: '03',
    snctOpnnCon: rejectModal.snctOpnnCon,
  });
  saveApprovalLineStates(stateParams);
  closeRejectModal();
}

const showDetailModal = (data) => {
  detailModal.snctApfrNo = Number(data.snctApfrNo);
  detailModal.isOpen = true;
}

onMounted(async () => {
  await getApprovalMyCountInfo();
  await getPageList();
})
</script>
