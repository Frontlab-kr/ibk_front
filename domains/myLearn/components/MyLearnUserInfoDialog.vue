<template>
<Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div class="ibk-dialog-apply__title">개인정보 수정</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">기본정보</div>
        </div>
        <div class="ibk-dialog-apply-item-text">{{ Utility.getUserBelong() }}</div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">정보입력</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>현재 비밀번호</label>
              <InputText type="password" size="large" class="w-full" placeholder="현재 비밀번호를 입력해주세요." v-model="params.currentPassword"/>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>새 비밀번호</label>
              <InputText type="password" size="large" class="w-full" placeholder="변경하실 비밀번호를 입력해주세요." v-model="params.newPassword"/>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>새 비밀번호 확인</label>
              <InputText
                type="password"
                size="large"
                class="w-full"
                placeholder="변경하실 비밀번호를 한번 더 입력해주세요."
                v-model="params.newPasswordCheck"
              />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>이메일</label>
              <InputText type="email" size="large" class="w-full" placeholder="이메일을 입력해주세요."   v-model="userInfo.userEad"/>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>모바일</label>
              <InputText type="number" size="large" class="w-full" placeholder="01012345678"  v-model="userInfo.cpn"/>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>주소</label>
              <div class="ibk-dialog-apply-address__input">
                <div>
                  <InputText type="text" size="large" class="w-full" placeholder="우편번호를 입력해주세요." v-model="userInfo.zpcdVl" :disabled="true"/>
                  <Button label="우편번호 찾기" severity="secondary" outlined size="large" @click="visibleAddressSearchDialog = true" />
                </div>
                <div>
                  <InputText type="text" size="large" class="w-full"  placeholder="주소를 입력해주세요." v-model="userInfo.userAdr" :disabled="true"/>
                </div>
                <div>
                  <InputText type="text" size="large" class="w-full"  placeholder="상세주소를 입력해주세요." v-model="userInfo.userDtlAdr"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="visible = false" />
        <Button label="저장" severity="primary" size="large" class="w-full" @click="save" />
      </div>
    </template>
  </Dialog>
  <AddressSearchDialog v-model:visible="visibleAddressSearchDialog" @selectAddress="selectAddress" />
</template>
<script setup lang="ts">
import type { AddressOutVo, UserOutVo, UserPswdCheckInVo } from '../../../api-client';
import { useMyLearnStore } from '../store';
import Utility from '~/lib/Utility';
const {visible} = defineModels<{visible:boolean}>();
const visibleAddressSearchDialog = ref(false);
const store = useMyLearnStore();
const userInfo = ref<UserOutVo>();
const params = ref({
  currentPassword:null ,
  newPassword: null,
  newPasswordCheck: null,
});
userInfo.value = await store.getUserInfoDetail();
async function validate(){
    if($isEmpty(params.value.currentPassword)) {
        await $alert('현재 비밀번호를 입력해주세요.');
        return false;
    }
    if($isEmpty(params.value.newPassword)) {
        await $alert('새비밀번호를 입력해주세요.');
        return false;
    }
    if($isEmpty(params.value.newPasswordCheck)) {
        await $alert('새비밀번호 확인을 입력해주세요.');
        return false;
    }
    if(params.value.newPassword !== params.value.newPasswordCheck) {
        await $alert('새비밀번호가 일치하지 않습니다.');
        return false;
    }

    if($isEmpty(userInfo.value!.userEad)) {
        await $alert('이메일을 입력해주세요.');
        return false;
    }
    if($isEmpty(userInfo.value!.cpn)) {
        await $alert('모바일을 입력해주세요.');
        return false;
    }
    if($isEmpty(userInfo.value!.zpcdVl)) {
        await $alert('주소를 입력해주세요.');
        return false;
    }
    return true;
}
const selectAddress = (address: AddressOutVo) => {
     // zpcd -> zpcdVl로 변경 (우편번호)
     userInfo.value!.zpcdVl = address.zpcd;
    // userAdr은 그대로 유지 (사용자주소)
    userInfo.value!.userAdr = Utility.getBaseAddress(address);
    
};

async function checkPassword() {
    let res = await $wrap($request().checkPassword({userPwd:params.value.currentPassword!}));
    res = $item(res);
    return res.samePassword;
}
async function save() {
    if(!await validate()) return;
   

    userInfo.value!.userPwd = params.value.newPassword!;
    await store.modUserInfo(userInfo.value!);

    await $alert('개인정보가 수정되었습니다.');
    visible.value = false;

}


</script>
