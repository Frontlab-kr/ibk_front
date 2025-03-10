<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div v-if="isSaved" class="ibk-dialog-apply__title">강의실 이용 신청상세</div>
      <div v-else class="ibk-dialog-apply__title">강의실 이용 신청하기</div>
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
                  <th>강의실</th>
                  <td>{{ props.item.fcltDtlKcdNm }}</td>
                  <th>예약일시</th>
                  <td>
                    <template v-if="isSaved">
                      {{ props.item.rsvtSttgTs }}
                    </template>
                    <template v-else>
                      <template v-for="(item, index) in props.item.mergedTimes">
                        {{ props.item.reservationDate }}・{{ item }}<br>
                      </template>
                    </template>
                  </td>
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
                  <th>강의실</th>
                </tr>
                <tr>
                  <td>{{ props.item.fcltDtlKcdNm }}</td>
                </tr>
                <tr>
                  <th>예약일시</th>
                </tr>
                <template v-if="isSaved">
                  <tr>
                    <td>{{ props.item.rsvtSttgTs }}</td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="(item, index) in props.item.mergedTimes">
                    <td>{{ props.item.reservationDate }}・{{ item }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-form">
          <div class="grid">
<!--            <div class="col-12">
              <div class="field">
                <label>참석자</label>
                <div class="ibk-dialog-apply-form-search">
                  <div class="ibk-dialog-apply-form-search-input">
                    <InputText v-model="searchParam.keyword" type="text" size="large" class="w-full" placeholder="사번, 아이디 혹은 성명을 입력해주세요" />
                    <Button label="검색" severity="primary" size="large" @click="getMembers"/>
                  </div>
                </div>
              </div>
            </div>-->
<!--            <div v-if="isSearched" class="col-12">
              <div class="field">
                <label>검색결과</label>

                <div class="pc">
                  <div class="ibk-dialog-apply-list__table">
                    <table>
                      <colgroup>
                        <col style="width: 80px" />
                        <col style="width: 100px" />
                        <col style="width: 186px" />
                        <col style="width: 177px" />
                        <col style="width: 177px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">선택</th>
                          <th class="text-center">직원번호</th>
                          <th class="text-left">소속</th>
                          <th class="text-left">직급</th>
                          <th class="text-left">성명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="users.length > 0"
                          v-for="(item, index) in users"
                          :key="index"
                          :class="{ active: props.item.userId === item.userId }"
                        >
                          <td class="text-center">
                            <RadioButton v-model="props.item.userId" :value="item.userId" variant="filled" />
                          </td>
                          <td class="text-center">{{ item.emplNo }}</td>
                          <td class="text-left">{{ item.blngHdqrDsncNm }}</td>
                          <td class="text-left">{{ item.jbclCd }}</td>
                          <td class="text-left">{{ item.userNm }}</td>
                        </tr>
                        <tr v-else>
                          <td colspan="5" class="text-center">검색 결과가 없습니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="mo">
                  <div class="ibk-dialog-apply-list__list">
                    <ul>
                      <li v-if="users.length > 0"
                        v-for="(item, index) in users"
                        :key="index"
                        :class="{ active: props.item.userId === item.value }"
                      >
                        <RadioButton v-model="props.item.userId" :value="item.userId" variant="filled" />
                        <table>
                          <tbody>
                            <tr>
                              <th>직원번호</th>
                              <td>{{ item.emplNo }}</td>
                            </tr>
                            <tr>
                              <th>소속</th>
                              <td>{{ item.blngHdqrDsncNm }}</td>
                            </tr>
                            <tr>
                              <th>직급</th>
                              <td>{{ item.jbclCd }}</td>
                            </tr>
                            <tr>
                              <th>성명</th>
                              <td>{{ item.userNm }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li v-else>
                        <table>
                          <tbody>
                            <tr>
                              검색결과가 없습니다
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>-->
            <!-- <div class="col-12">
              <div class="field">
                <label>신청자 생년월일</label>
                <div>
                  <InputText type="text" size="large" placeholder="생년월일을 입력해주세요. ex.900101" class="w-full" />
                </div>
              </div>
            </div> -->
<!--            <div v-if="props.item.userId" class="col-12">
              <div class="field">
                <label>참석자</label>
                <div>
                  <InputText v-model="selectedUser" type="text" size="large" placeholder="참석자를 선택해주세요" class="w-full" disabled=""/>
                </div>
              </div>
            </div>-->
            <div class="col-12">
              <div class="field">
                <label>일정명</label>
                <div>
                  <InputText v-model="props.item.schdNm" type="text" size="large" placeholder="일정명을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>사용인원</label>
                <div>
                  <InputText v-model="props.item.fcltUseNmprCnt" type="text" size="large" placeholder="사용인원을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>사무실 전화번호</label>
                <div>
                  <InputText v-model="props.item.ofcTpn" type="text" size="large" placeholder="사무실 전화번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>휴대폰 번호</label>
                <div>
                  <InputText v-model="props.item.cpn" type="text" size="large" placeholder="휴대폰 번호를 입력해주세요." class="w-full" />
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
        <Button v-if="isSaved" label="수정하기" severity="primary" size="large" class="w-full" @click="saveFacilityRequest" :disabled="!necessaryCheck"/>
        <Button v-else label="신청하기" severity="primary" size="large" class="w-full" @click="saveFacilityRequest" :disabled="!necessaryCheck"/>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import type { FacilityRequestOptions } from '~/domains/facility/type';
import { useFacilityStore } from '~/domains/facility';
import { ref } from 'vue';
import type { UserPageInqInVo,UserOutVo } from '~/api-client';
import Utility from '~/lib/Utility';
import { useAuthStore } from '~/domains/auth';
const authStore = useAuthStore();
const store = useFacilityStore();
const facility = ref<any>();

const { visible } = defineModels<{
  visible: boolean
}>();
const users = ref<UserOutVo[]>([]);
const selectedUser = computed(() => {
  return users.value.filter(x => x.userId == props.item.userId).map(y => y.userNm);
});
const saveText = ref<String>('완료');
const isSaved = ref<boolean>(false);
const isSearched = ref<boolean>(false);
const props = withDefaults(
	defineProps<{
    item: FacilityRequestOptions | null
	}>(),
	{
    item: null
  }
);

const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
}>();

const refresh = async (isRefresh = true) => {
  emits('refresh', isRefresh);
}

const necessaryCheck = ref(false);

const closeDialog = () => {
  if(!isSaved.value){
    props.item.fcltUseNmprCnt = '';
    props.item.ofcTpn = '';
    props.item.cpn = '';
    props.item.emrnTpn = '';
    props.item.rmrkCon = '';
  }
  visible.value = false;
}

const searchParam = reactive<UserPageInqInVo>({
  keyword: ''
});

const saveFacilityRequest = async () => {
  if(!isSaved.value || props.item.cancelable){
    let result;
    await $isLoading(true);

  /*  if(!props.item.userId){
      Utility.alert('참석자를 선택해주세요');
      return false;
    }*/

    if(!props.item.fcltUseNmprCnt){
      Utility.alert('사용인원을 입력해주세요');
      return false;
    }

    if(!props.item.cpn){
      Utility.alert('휴대폰 번호를 입력해주세요');
      return false;
    }

    try {
      props.item.userId = authStore.userInfo.userId;
      if(isSaved.value){
        result = await store.modifyFacilityRequest(props.item);
      }else{
        props.item.rsvtSttgTs = props.item.reservationDate.replaceAll('.','-');
        props.item.rsvtFnshTs = props.item.reservationDate.replaceAll('.','-');
        result = await store.saveFacilityRequest(props.item);
      }
      if (result.success) {
        alert(`강의실 신청이 ${saveText.value}되었습니다`);
        if(isSaved.value) await refresh();
        closeDialog();
      } else {
        alert(`강의실 신청중 오류가 발생하였습니다.`);
      }
    } catch (e){
      await $isLoading(false);
      alert(`강의실 신청중 오류가 발생하였습니다.`);
    }finally {
      await $isLoading(false);
    }
  }else{
    $alert('승인 처리후 수정이 불가능합니다.');
  }
}

const getMembers = async() => {
  isSearched.value = true;
  users.value = [];
  let res = await $request().inqUserPage(searchParam);
  if(res.data.response != null){
    users.value = res.data.response.contents;
  }
}

onBeforeMount(async () => {
  if(props.item && props.item.userId?.length > 0) {
    saveText.value = '수정';
    isSaved.value = true;
    /*if(props.item.userId) {
      searchParam.keyword = props.item.userId;
      await getMembers();
    }*/
  }
})

</script>
