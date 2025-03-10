<template>
  <TabPanel value="studio">
    <div class="ibk-apply-center">
      <div class="ibk-apply-center-head">
        <div class="ibk-apply-center-head__title">스튜디오 내역</div>
        <div class="ibk-apply-center-head__filter">
          <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
          <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" @click="clearParams"/>
          <Button label="검색" severity="secondary" outlined  @click="searchStudio"/>
        </div>
      </div>
      <div class="ibk-apply-center-list">
        <template v-if="store.studioRequestData?.contents.length > 0">
          <div v-for="(item, index) in store.studioRequestData?.contents" class="ibk-apply-center-list-item">
            <div class="ibk-apply-center-list-item__text">
              <div class="ibk-apply-center-list-item__title" @click="openDialog(item)" style="cursor: pointer;">
                <strong v-if="item.useYn == 'N'" class="text-zinc-500">취소완료</strong>
                <strong v-else-if="item.athzYn == 'Y'" class="text-primary">승인</strong>
                <strong v-else-if="item.athzYn == 'N'" class="text-zinc-500">미승인</strong>
                기업은행 스튜디오
              </div>
              <ul>
                <li class="text-gray-900">
                  <span>신청일</span>
                  <span>{{ item.aplcYmd }}</span>
                </li>
                <li>
                  <span>시작일시</span>
                  <span>{{ item.rsvtSttgTs.substring(0,16) }}</span>
                </li>
                <li>
                  <span>종료일시</span>
                  <span>{{ item.rsvtFnshTs.substring(0,16) }}</span>
                </li>
              </ul>
            </div>
            <div v-if="item.cancelable" class="ibk-apply-center-list-item__button">
              <Button label="신청취소" severity="secondary" outlined @click="cancelFacilityRequest(item)"/>
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
  <StudioRequestDialog v-if="dialogParams.visible" v-model:visible="dialogParams.visible" :item="dialogParams.item" modal class="ibk-dialog ibk-dialog-apply" @refresh="searchStudio"/>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useFacilityStore } from '~/domains/facility';
import type {  FacilityRequestPageInqInVo } from '~/api-client';
import Utility from '~/lib/Utility';
import type {
  FacilityRequestOptions,FacilityRequestDialogOptions,
} from '~/domains/facility/type';
import StudioRequestDialog from '~/domains/facility/components/StudioRequestDialog.vue';
import { useAuthStore } from '~/domains/auth';
const store = useFacilityStore();
const authStore = useAuthStore();
const dates = ref([]);
const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);
const hasNext = ref<boolean>(true);
let today = new Date();

const INIT_SEARCH_PARAMS = (): FacilityRequestPageInqInVo => ({
  pageSize: 3,
  pageNo: 1,
  userId: authStore.userInfo.userId,
  trngFcltDcd: '2',
  aplcYmdStart : '',
  aplcYmdEnd : '',
  target : 'studio',
});

const params = reactive<FacilityRequestOptions>(INIT_SEARCH_PARAMS());

const dialogParams = reactive<FacilityRequestDialogOptions>({
  visible: false,
  item: params,
});

const openDialog = (item) => {
  dialogParams.visible= true;
  dialogParams.item= item;
};

const loadMoreData = async () => {
  params.pageNo++;
  hasNext.value = await store.getStudioRequestList(params,false);
  store.studioRequestData.contents.forEach(x => {
    x.cancelable = (x.useYn == 'Y')  && (x.athzYn !== 'Y');
  })
};

const clearParams = () => {
  params.aplcYmdStart = '';
  params.aplcYmdEnd = '';
  params.pageNo = 1;
  dates.value = [];
}

const cancelFacilityRequest = async (item) => {
  const isYesOrNo = await Utility.confirm('스튜디오 신청을 취소하시겠습니까?');
  if (isYesOrNo) {
    const res = await $request().mdfcFacilityRequestCancel(item);
    if (res && res.status === 200) {
      Utility.alert('스튜디오 신청이 취소되었습니다.');
      await searchStudio();
    }else {
      Utility.alert('취소 처리중 오류가 발생하였습니다')
    }
  }
}

const searchStudio = async () => {
  if (null != dates.value[0]) {
    params.aplcYmdStart = Utility.formatDateToYYYYMMDD(dates.value[0]);
  }
  if (null != dates.value[1]) {
    params.aplcYmdEnd = Utility.formatDateToYYYYMMDD(dates.value[1]);
  }
  hasNext.value = await store.getStudioRequestList(params,true);
  store.studioRequestData.contents.forEach(x => {
    x.cancelable = (x.useYn == 'Y')  && (x.athzYn !== 'Y');
  })
}

onMounted(async () => {
  hasNext.value = await store.getStudioRequestList(params,true);
  store.studioRequestData.contents.forEach(x => {
    x.cancelable = (x.useYn == 'Y')  && (x.athzYn !== 'Y');
  })
});

</script>
