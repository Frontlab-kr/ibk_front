<template>
  <div class="ibk-login">
    <div class="ibk-login-bg">
      <img src="/assets/images/login1.png" alt="" />
    </div>
    <div class="ibk-login-form">
      <div class="ibk-login-form-inner ibk-login-form-inner--flex">
        <div class="ibk-mobile-back ibk-mobile-back--center">
          <Button icon="ibk-icon-24-arrowleft" label="이메일 인증" link @click="closeFunc" />
        </div>
        <div class="pc">
          <div class="ibk-login-form__title">
            <h1>이메일 인증</h1>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>이메일 인증</label>
              <div class="ibk-login-form-item">
                <InputText type="text" class="w-full" size="large" placeholder="이메일을 입력해주세요." />
                <Button label="인증번호 받기" severity="secondary" size="large" outlined />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>인증번호 확인</label>
              <div class="ibk-login-form-item">
                <InputText type="password" class="w-full" size="large" placeholder="인증번호를 입력해주세요." />
                <Button label="확인" severity="secondary" size="large" outlined />
              </div>
            </div>
          </div>
        </div>
        <div class="ibk-login-form__foot">
          <div class="ibk-login-form__button flex-row">
            <Button label="취소" severity="secondary" class="col-3 pc" size="large" @click="closeFunc" />
            <Button label="로그인" severity="primary"  class="w-full" size="large" @click="checkSecondaryAuth" />
          </div>
        </div>
      </div>
      <address class="pc">
        본 사이트는 기업은행 임직원을 위한 공간입니다.<br />
        Copyright. IBK(INDUSTRIAL BANK OF KOREA) All rights reserved.
      </address>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/domains/auth';

definePageMeta({
  layout: 'pub-login',
});

const authStore = useAuthStore();

const closeFunc = () => {
  navigateTo('/login/next');
}

const checkSecondaryAuth = async () => {
  await authStore.secondaryAuth();
}

onMounted(() => {
  if(!authStore.userInfo?.userId){
    navigateTo('/login');
  }
})
</script>
