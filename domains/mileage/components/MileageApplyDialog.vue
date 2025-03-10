<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div class="ibk-dialog-apply__title">마일리지 상품 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <InputText :value="`${authStore.userInfo.deptDsncNm}・${authStore.userInfo.blngHdqrDsncNm}・${authStore.userInfo.userNm}`" size="large" class="w-full" readonly />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>보상구분</label>
              <Select v-model="props.item.mdcpTrngDcd" size="large" class="w-full" :options="mdcpTrngDcdOptions" optionLabel="cmcdVlNm" optionValue="cmcdVl" placeholder="보상구분을 선택하세요" />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>수량</label>
              <InputNumber v-model="props.item.aplcQty" placeholder="숫자로 입력해주세요" class="p-inputnumber-lg w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>보상명</label>
              <Select v-model="props.item.mdcpAplcId" size="large" class="w-full" :options="pdmOptions" optionLabel="pdm" optionValue="mdcpAplcId" placeholder="보상명을 선택하세요" :disabled="!props.item.mdcpTrngDcd" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>마일리지</label>
              <div class="ibk-table ibk-table--scroll-x">
                <table>
                  <colgroup>
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">누적 마일리지</th>
                    <th class="text-center">차감 마일리지</th>
                    <th class="text-center">최종 마일리지</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">{{ Utility.setCommaPer3Digit(props.item.cumulativeMileage) }}</td>
                      <td class="text-center">{{ Utility.setCommaPer3Digit(deductedMileage) }}</td>
                      <td class="text-center">{{ Utility.setCommaPer3Digit(leftoverMileage) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button label="신청하기" severity="primary" size="large" class="w-full" @click="saveRequest" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import Utility from '../../../lib/Utility';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '~/domains/auth';
import type { MileageGiftOptions } from '~/domains/mileage/type';
import { useMileageStore } from '~/domains/mileage';
const authStore = useAuthStore();
const store = useMileageStore();
const mdcpTrngDcdOptions = ref([]);
const pdmOptions = ref([]);
mdcpTrngDcdOptions.value = (Utility.getCommonCode('IDP00046')).map(x => ({cmcdVlNm: x.cmcdVlNm, cmcdVl: x.cmcdVl}));
const deductedMileage = ref(0);
const leftoverMileage = ref(0);

const { visible } = defineModels<{
  visible: boolean
}>();

const props = withDefaults(
	defineProps<{
    item: MileageGiftOptions | null,
	}>(),
	{
    item: null,
  }
);

const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
}>();

const refresh = async (isRefresh = true) => {
  emits('refresh', isRefresh);
}

const saveText = ref<String>('완료');
const isSaved = ref<boolean>(false);
const closeDialog = () => {
  if(!isSaved.value) {
    props.item.mdcpTrngDcd = '';
    props.item.aplcQty = '';
    props.item.mdcpAplcId = '';
  }
  visible.value = false;
}

const saveRequest = async () => {
  if(!props.item.mdcpTrngDcd){
    Utility.alert('보상구분을 선택해주세요');
    return false;
  }

  if(!props.item.aplcQty){
    Utility.alert('수량을 선택해주세요');
    return false;
  }

  if(!props.item.mdcpAplcId){
    Utility.alert('보상을 선택해주세요');
    return false;
  }

  if(leftoverMileage.value < 0){
    Utility.alert('마일리지가 부족합니다.');
    return false;
  }

  let result;
  await $isLoading(true);
  try {
    props.item.mlgOcrsCon = `상품권 ${props.item.aplcQty}장 사용`;
    result = await store.saveIdiMileageGiftRequest(props.item);
    if (result.success) {
      Utility.alert(`마일리지 상품 신청이 ${saveText.value}되었습니다`);
      await refresh();
      closeDialog();
    } else {
      Utility.alert(`마일리지 상품 신청중 오류가 발생하였습니다.`);
    }
  } catch (e){
    await $isLoading(false);
    Utility.alert(`마일리지 상품 신청중 오류가 발생하였습니다.`);
  }finally {
    await $isLoading(false);
  }
}

const getMileageGift = async() => {
  let res = await $request().inqIdiMileageGiftPage({mdcpTrngDcd : '1'});
  if(res.data.response != null){
    pdmOptions.value = res.data.response;
  }
}

watch(() => props.item.aplcQty, () => {
  if(props.item.mdcpAplcId){
    deductedMileage.value = (pdmOptions.value.filter(x => x.mdcpAplcId == props.item.mdcpAplcId).map(y => y.mlgStcScr) * props.item.aplcQty)
    leftoverMileage.value = props.item.cumulativeMileage - deductedMileage.value;
  }
})

watch(() => props.item.mdcpAplcId, () => {
  if(props.item.aplcQty){
    deductedMileage.value = (pdmOptions.value.filter(x => x.mdcpAplcId == props.item.mdcpAplcId).map(y => y.mlgStcScr) * props.item.aplcQty)
    leftoverMileage.value = props.item.cumulativeMileage - deductedMileage.value;
  }
})

onBeforeMount(async () => {
  /*if(props.item && Number(props.item.rsvtNo) > 0) {
    saveText.value = '수정';
    isSaved.value = true;
    if(props.item.ckinNmlsNm?.length > 0){
      nameList.value = props.item.ckinNmlsNm?.split(',');
    }
  }*/
})

onMounted(async () => {
  await getMileageGift();
});

</script>
