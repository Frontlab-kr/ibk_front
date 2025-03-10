<template>
  <TabPanel value="training">
    <div class="ibk-apply-center">
      <div class="ibk-apply-center-head">
        <div class="ibk-apply-center-head__title">연수원 내역</div>
        <div class="ibk-apply-center-head__filter">
          <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
          <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" @click="clearParams"/>
          <Button label="검색" severity="secondary" outlined  @click="searchTraining"/>
        </div>
      </div>
      <div class="ibk-apply-center-list">
        <template v-if="store.trainingRequestData?.contents.length > 0">
          <div v-for="(item, index) in store.trainingRequestData?.contents" class="ibk-apply-center-list-item">
            <div class="ibk-apply-center-list-item__text">
              <div class="ibk-apply-center-list-item__title" @click="openDialog(item)" style="cursor: pointer;">
                <strong :class="{ 'text-primary': item.vcfcAplcScd === '10' || item.vcfcAplcScd === '20'
                                , 'text-zinc-500': item.vcfcAplcScd === '30'
                                , 'text-zinc-400': item.vcfcAplcScd !== '40' || item.vcfcAplcScd === '50' || item.vcfcAplcScd === '60' }">{{ item.vcfcAplcScdNm }}</strong>
                <strong v-if="item.useYn == 'N'" class="text-zinc-500">취소완료</strong>
                <strong v-else-if="item.cancelable" class="text-primary">취소가능</strong>
                {{ item.fcltPlacTcdNm }} 연수원
              </div>
              <ul>
                <li class="text-gray-900">
                  <span>적용점수</span>
                  <span>{{ item.vcfcAplyScr }}점</span>
                </li>
                <li>
                  <span>신청일</span>
                  <span>{{ item.aplcTs.substring(0,10) }}</span>
                </li>
                <li>
                  <span>입실일</span>
                  <span>{{ item.vcfcCkinYmd }}</span>
                </li>
                <li>
                  <span>퇴실일</span>
                  <span>{{ item.vcfcCcotYmd }}</span>
                </li>
              </ul>
            </div>
            <div class="ibk-apply-center-list-item__button">
              <Button label="우선순위확인" severity="secondary" class="text-primary-600" @click="notYet"/>
              <Button v-if="item.cancelable" label="신청취소" severity="secondary" outlined @click="cancelTraining(item)"/>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="ibk-apply-center-list-item__text">
            <div class="ibk-apply-center-list-item__title">
              검색결과가 없습니다.
            </div>
          </div>
        </template>
      </div>
      <div v-if="hasNext" class="ibk-apply-center-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreData"/>
      </div>
    </div>
  </TabPanel>
  <ResortFacilityRequestDialog v-if="dialogParams.visible" v-model:visible="dialogParams.visible" :item="dialogParams.item" modal class="ibk-dialog ibk-dialog-apply" @refresh="searchTraining"/>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useFacilityStore } from '~/domains/facility';
import type { ResortFacilityRequestPageInqInVo } from '~/api-client';
import Utility from '~/lib/Utility';
import type {
  ResortFacilityRequestOptions,
  ResortFacilityRequestDialogOptions,
} from '~/domains/facility/type';
import ResortFacilityRequestDialog from '~/domains/facility/components/ResortFacilityRequestDialog.vue';
import { useAuthStore } from '~/domains/auth';
const store = useFacilityStore();
const authStore = useAuthStore();
const dates = ref([]);

const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);

const hasNext = ref<boolean>(true);
let today = new Date();

const INIT_SEARCH_PARAMS = (): ResortFacilityRequestPageInqInVo => ({
  pageSize: 3,
  pageNo: 1,
  userId: authStore.userInfo.userId,
  aplcYmdStart : '',
  aplcYmdEnd : '',
});

const params = reactive<ResortFacilityRequestOptions>(INIT_SEARCH_PARAMS());

const dialogParams = reactive<ResortFacilityRequestDialogOptions>({
  visible: false,
  item: params,
});

const openDialog = (item) => {
  dialogParams.visible= true;
  dialogParams.item= item;
};

const loadMoreData = async () => {
  params.pageNo++;
  hasNext.value = await store.getTrainingRequestList(params,false);
  store.trainingRequestData.contents.forEach(x => {
    x.vcfcAplyScr = 100 - x.vcfcAplyScr;
    let vcfcCkinYmd = new Date(x.vcfcCkinYmd);
    let twoWeeksAgo = new Date(vcfcCkinYmd.getTime() - (14 * 24 * 60 * 60 * 1000));
    x.cancelable = x.useYn == 'Y' && (today <= twoWeeksAgo);
  })
};

const notYet = () => {
  Utility.alert('준비중입니다.')
}

const clearParams = () => {
  params.aplcYmdStart = '';
  params.aplcYmdEnd = '';
  params.pageNo = 1;
  dates.value = [];
}

const cancelTraining = async (item) => {
  const isYesOrNo = await Utility.confirm('연수원 신청을 취소하시겠습니까?');
  if (isYesOrNo) {
    const res = await $request().mdfcResortFacilityRequestCancel(item);
    if (res && res.status === 200) {
      Utility.alert('연수원 신청이 취소되었습니다.');
      await searchTraining();
    }else {
      Utility.alert('취소 처리중 오류가 발생하였습니다')
    }
  }
}

const searchTraining = async () => {
  if (null != dates.value[0]) {
    params.aplcYmdStart = Utility.formatDateToYYYYMMDD(dates.value[0]);
  }
  if (null != dates.value[1]) {
    params.aplcYmdEnd = Utility.formatDateToYYYYMMDD(dates.value[1]);
  }
  hasNext.value = await store.getTrainingRequestList(params,true);
  store.trainingRequestData.contents.forEach(x => {
    x.vcfcAplyScr = 100 - x.vcfcAplyScr;
    let vcfcCkinYmd = new Date(x.vcfcCkinYmd);
    let twoWeeksAgo = new Date(vcfcCkinYmd.getTime() - (14 * 24 * 60 * 60 * 1000));
    x.cancelable = x.useYn == 'Y' && (today <= twoWeeksAgo);
  })
}

onMounted(async () => {
  hasNext.value = await store.getTrainingRequestList(params,true);
  store.trainingRequestData.contents.forEach(x => {
    x.vcfcAplyScr = 100 - x.vcfcAplyScr;
    let vcfcCkinYmd = new Date(x.vcfcCkinYmd);
    let twoWeeksAgo = new Date(vcfcCkinYmd.getTime() - (14 * 24 * 60 * 60 * 1000));
    x.cancelable = (x.useYn == 'Y') && (today <= twoWeeksAgo);
  })
});

</script>
