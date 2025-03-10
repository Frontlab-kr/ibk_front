<template>
  <TabPanel value="mileageApplyHistory">
    <div class="ibk-payment-center-mileage-head">
      <div class="ibk-payment-center-mileage-head-text">
        <h6>연간 마일리지</h6>
        <strong>{{ totalMilageData && totalMilageData.mlgOcrnScrYearSum ? Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrYearSum) : 0 }}원</strong>
        <p>직급누적마일리지 <strong>{{ totalMilageData && totalMilageData.mlgOcrnScrSum ? Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrSum) : 0 }}</strong></p>
      </div>
      <Button label="신청하기" outlined rounded icon="ibk-icon-16-apply" @click="openMileageApplyRequestDialog"/>
    </div>
    <div class="ibk-payment-center">
      <div class="ibk-payment-center-head">
        <div class="ibk-payment-center-head__title">마일리지 내역</div>
        <div class="ibk-payment-center-head__filter">
          <DatePicker v-model="dates" selectionMode="range" dateFormat="yy-mm-dd" showButtonBar :manualInput="false" @date-select="searchRequest" @clear-click="searchRequest" />
          <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" @click="reset"/>
        </div>
      </div>
      <div class="ibk-payment-center-mileage">
        <template v-if="store.mileageRequestData?.contents.length > 0">
          <div v-for="(item, index) in store.mileageRequestData?.contents" class="ibk-payment-center-mileage-item">
            <div class="ibk-payment-center-mileage-item__text">
              <div class="ibk-payment-center-mileage-item__checkbox">
                <label for="checkbox01-1">사용</label>
              </div>
              <div class="ibk-payment-center-mileage-item__title">
                <strong :class="item.rsrgSbtcDcd == 'P' ? 'text-primary' : 'text-red-500'">{{ item.rsrgSbtcDcdNm }}</strong>
                {{ item.mlgOcrsCon }}
              </div>
              <ul>
                <li>{{ item.ocrnYmd }}</li>
              </ul>
            </div>
            <div class="ibk-payment-center-mileage-item__end">
              <div class="ibk-payment-center-mileage-item__mileage">
                <strong>{{ item.mlgOcrnScr ? Utility.setCommaPer3Digit(item.mlgOcrnScr) : 0 }} 마일리지</strong>
                <p>잔여 마일리지 {{ item.cumulativeMileage ? Utility.setCommaPer3Digit(item.cumulativeMileage) : 0 }}</p>
              </div>
              <div class="ibk-payment-center-mileage-item__button">
                <Button label="신청취소" severity="secondary" outlined @click="deleteMileageGiftRequest(item)"/>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="ibk-lectureroom-my-review-none">
            <p>마일리지 내역이 없습니다.</p>
          </div>
        </template>
      </div>
      <div v-if="hasNext" class="ibk-payment-center-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreData"/>
      </div>
    </div>
  </TabPanel>
  <MileageApplyDialog v-if="dialogParams.visible" v-model:visible="dialogParams.visible" :item="dialogParams.item" @refresh="searchRequest"/>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import Utility from '~/lib/Utility';
import { useMileageStore } from '~/domains/mileage';
import type { IdiMileageGiftRequestInVo, IdiMileageRequestPageInVo } from '~/api-client';
import type { MileageApplyDialogOptions } from '~/domains/mileage/type';
import MileageApplyDialog from '~/domains/mileage/components/MileageApplyDialog.vue';
const store = useMileageStore();
const totalMilageData = ref([]);
const dates = ref([]);
const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);
const hasNext = ref<boolean>(true);

const INIT_SEARCH_PARAMS = (): IdiMileageRequestPageInVo => ({
  pageSize: 3,
  pageNo: 1,
  ocrnYmdStart : '',
  ocrnYmdEnd : '',
});

const params = reactive<IdiMileageRequestPageInVo>(INIT_SEARCH_PARAMS());

const applyParam = reactive<IdiMileageGiftRequestInVo>({
  useYn: 'Y',
  acngYy: Utility.getCurrentYear(),
  rsrgSbtcDcd: 'M', // 차감
  mlgUseDcd: '4' // 상품권
});

const dialogParams = reactive<MileageApplyDialogOptions>({
  visible: false,
  item: applyParam,
});

const openMileageApplyRequestDialog = () => {
  applyParam.cumulativeMileage = totalMilageData.value.mlgOcrnScrYearSum; // 신청 모달에 보여질 누적 마일리지 (현재 연간 마일리지로 노출)
  dialogParams.visible= true;
  dialogParams.item= applyParam;
}

const searchRequest = async () => {
  if (null != dates.value[0]) {
    params.ocrnYmdStart = Utility.formatDateToYYYYMMDD(dates.value[0]);
  }
  if (null != dates.value[1]) {
    params.ocrnYmdEnd = Utility.formatDateToYYYYMMDD(dates.value[1]);
  }
  hasNext.value = await store.getIdiMileageRequestList(params,true);
}

const loadMoreData = async () => {
  params.pageNo++;
  hasNext.value = await store.getIdiMileageRequestList(params,false);
};

const deleteMileageGiftRequest = async (item: any) => {
  if(!confirm('마일리지 신청을 취소하시겠습니까?')) return;

  const result = await store.delIdiMileageGiftRequest({ mlgPrhsId: item.mlgPrhsId });

  if(result.success) {
    alert('정상 처리 되었습니다');
    await store.getIdiMyMileageTotalData({});
    hasNext.value = await store.getIdiMileageRequestList(params,true);
    totalMilageData.value = store.totalMileageData.data.response;
  }
}

const reset = async () => {
  params.pageNo = 1;
  params.pageSize = 3;
  params.ocrnYmdStart = '';
  params.ocrnYmdEnd = '';
  dates.value = [];
  hasNext.value = await store.getIdiMileageRequestList(params,true);
}

onMounted(async () => {
  await store.getIdiMyMileageTotalData({});
  hasNext.value = await store.getIdiMileageRequestList(params,true);
  totalMilageData.value = store.totalMileageData.data.response;
});

</script>
