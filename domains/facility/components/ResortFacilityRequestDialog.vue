<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div v-if="isSaved" class="ibk-dialog-apply__title">연수원 이용 신청상세</div>
      <div v-else class="ibk-dialog-apply__title">연수원 이용 신청하기</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>나의 점수</th>
                  <td colspan="3">{{ props.item.dmrkScr }}점</td>
                </tr>
                <tr>
                  <th>장소</th>
                  <td>{{ props.item.fcltPlacTcdNm }}</td>
                  <th>입실일자</th>
                  <td>{{ props.item.vcfcCkinYmd }}. {{Utility.getDayOfWeek(props.item.vcfcCkinYmd.replaceAll('.',''))}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>나의 점수</th>
                </tr>
                <tr>
                  <td>100점</td>
                </tr>
                <tr>
                  <th>장소</th>
                </tr>
                <tr>
                  <td>{{ props.item.fcltPlacTcdNm }}</td>
                </tr>
                <tr>
                  <th>입실일자</th>
                </tr>
                <tr>
                  <td>{{ props.item.vcfcCkinYmd }}. {{Utility.getDayOfWeek(props.item.vcfcCkinYmd.replaceAll('.',''))}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">투숙기간</div>
        </div>
        <div class="ibk-dialog-apply-form">
          <div class="ibk-dialog-apply-form-select">
            <h4>{{ props.item.vcfcCkinYmd }} ~ {{ props.item.vcfcCcotYmd }}</h4>
          </div>
          <div class="ibk-dialog-apply-form-caution">
            신청 진행 중입니다. 아래 세부 정보 입력후 [최종 신청] 하셔야 신청이 완료됩니다.<br />
            ※ 동반가족 필수 입력 (입력된 가족 외 입소 제한)
          </div>
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>입소자 명단</label>
                <div class="ibk-dialog-apply-form-search">
                  <div class="ibk-dialog-apply-form-search-input">
                    <InputText v-model="tempName" type="text" size="large" class="w-full" />
                    <Button label="추가" severity="primary" size="large" @click="addCkinNmlsNm"/>
                  </div>
                  <div class="ibk-dialog-apply-form-search-list">
                    <Chip v-if="nameList && nameList.length > 0" v-for="(name, idx) in nameList"
                      :key="name"
                      :label="name"
                      @remove="removeName(idx)"
                      removable
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비상연락망</label>
                <div>
                  <InputText v-model="props.item.emrnTpn" type="text" size="large" placeholder="비상연락망을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>차량번호</label>
                <div>
                  <InputText v-model="props.item.vhclNo" type="text" size="large" placeholder="차량번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비고</label>
                <div>
                  <InputText v-model="props.item.rmrkCon" type="text" size="large" placeholder="내용을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 입소정원은 5명, 차량은 1대만 이용 가능합니다.</p>
          <p>2. 수건등 세면도구는 지원되지 않으니 지참하시기 바랍니다.</p>
          <p>3. 미혼직원의 경우 부모님 동반 또는 동성(同性)의 동료 직원 동반시에만 입소 가능합니다.</p>
          <p>4. 애원동물 동반입소 금지합니다.</p>
          <p>5. 입소(16:00-24:00) 퇴소 (10:00) 시간을 준수합니다. (자정이후 입소불가)</p>
          <p>6. 신청 후 3회 취소 시 1회 이용으로 간주되오니 신중히 신청합니다.</p>
          <p>7. 취소적용기준 및 사용제한 (당일취소, 무단불참, 본인불참, 객실미정리)에 대하여 숙지하였습니다.</p>
          <p>※ 당일취소란? 입소당일 휴일 입소인 경우 직전영업일</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-agree">
        <div class="ibk-dialog-apply-agree-check">
          <Checkbox v-model="necessaryCheck" inputId="agree" binary :true-value="true" :false-value="false"/>
          <label for="agree" class="ml-2"> 상기내용을 숙지하였으며 동의합니다 </label>
        </div>
        <p>* 필히 유의사항을 숙지 후 체크해주시기 바랍니다.</p>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button v-if="isSaved" label="수정하기" severity="primary" size="large" class="w-full" @click="saveRequest" :disabled="!necessaryCheck"/>
        <Button v-else label="신청하기" severity="primary" size="large" class="w-full" @click="saveRequest" :disabled="!necessaryCheck"/>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import type { ResortFacilityRequestOptions } from '~/domains/facility/type';
import Utility from '../../../lib/Utility';
import { useFacilityStore } from '~/domains/facility';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '~/domains/auth';
const authStore = useAuthStore();
const store = useFacilityStore();

const { visible } = defineModels<{
  visible: boolean
}>();

const props = withDefaults(
	defineProps<{
    item: ResortFacilityRequestOptions | null,
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

const necessaryCheck = ref(false);

const tempName = ref('');
const nameList = ref([]);
const saveText = ref<String>('완료');
const isSaved = ref<boolean>(false);
const closeDialog = () => {
  if(!isSaved.value) {
    nameList.value = [];
    tempName.value = '';
    props.item.ckinNmlsNm = '';
    props.item.emrnTpn = '';
    props.item.vhclNo = '';
    props.item.rmrkCon = '';
  }
  visible.value = false;
}

const removeName = (idx:number) => {
  let tempList = [...nameList.value];
  tempList.splice(idx, 1);
  nameList.value = tempList;
  props.item.ckinNmlsNm = '';
  if(nameList.value.length > 0){
    nameList.value.forEach((x, idx) => {
      if(idx > 0){
        props.item.ckinNmlsNm = props.item.ckinNmlsNm + ',';
      }
      props.item.ckinNmlsNm = props.item.ckinNmlsNm + x;
    })
  }
}

const saveRequest = async () => {
  if(props.item.cancelable){
    let res = await $request().rgsnCheckResortFacilityRequest(props.item);
    if(res.data.response > 0){
      alert('해당 회차에 이미 신청한 이력이 있습니다.');
      return false;
    }else{
      let result;
      await $isLoading(true);
      props.item.ldgnNdd = Utility.getDaysDifference(props.item.vcfcCkinYmd,props.item.vcfcCcotYmd);
      try {
        result = await store.saveResortFacilityRequest(props.item);
        if (result.success) {
          Utility.alert(`연수원 신청이 ${saveText.value}되었습니다`);
          await refresh();
          closeDialog();
        } else {
          Utility.alert(`연수원 신청중 오류가 발생하였습니다.`);
        }
      } catch (e){
        await $isLoading(false);
        Utility.alert(`연수원 신청중 오류가 발생하였습니다.`);
      }finally {
        await $isLoading(false);
      }
    }
  }else{
    $alert('입실일기준 2주전까지만 수정 가능합니다.');
  }
}

const addCkinNmlsNm = () => {
  if('' !== tempName.value){
    if(props.item.ckinNmlsNm.length > 0){
      props.item.ckinNmlsNm = props.item.ckinNmlsNm + ',';
    }
    props.item.ckinNmlsNm = props.item.ckinNmlsNm + tempName.value;
    nameList.value = props.item.ckinNmlsNm.split(',');
  }
  tempName.value = '';
}

const getDmrkScr = async() => {
  props.item.dmrkScr = 100;
  let res = await $request().inqDmrkScr(props.item);
  if(res.data.response != null){
    props.item.dmrkScr = 100 - res.data.response.dmrkScr
  }
}

onBeforeMount(async () => {
  if(props.item && Number(props.item.rsvtNo) > 0) {
    saveText.value = '수정';
    isSaved.value = true;
    if(props.item.ckinNmlsNm?.length > 0){
      nameList.value = props.item.ckinNmlsNm?.split(',');
    }
  }
})

onMounted(async () => {
  await getDmrkScr();
});

</script>
