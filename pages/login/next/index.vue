<template>
  <div class="ibk-login">
    <div class="ibk-login-bg">
      <img src="/assets/images/login1.png" alt="" />
    </div>
    <div class="ibk-login-form">
      <div class="ibk-login-form-inner">
        <div class="ibk-login-form__logo">
          <img src="/assets/images/logo-login.png" alt="" />
        </div>
        <div class="ibk-login-form__title">
          <h1>로그인 선택</h1>
        </div>
        <div class="ibk-login-form__button">
          <Button label="mOTP" severity="secondary" class="w-full" size="large" outlined @click="navigateTo(`/login/next/otp?token=${token}&userId=${userId}`)" />
          <Button label="SMS 인증" severity="secondary" class="w-full" size="large" outlined @click="navigateTo(`/login/next/sms?token=${token}&userId=${userId}`)" />
          <Button label="이메일 인증" severity="secondary" class="w-full" size="large" outlined @click="navigateTo(`/login/next/email?token=${token}&userId=${userId}`)" />
          <Button label="뒤로가기" severity="secondary" class="w-full" size="large" outlined @click="backBtn" />
        </div>
      </div>
      <address>
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
const route = useRoute();
const router = useRouter();

const token = route.query.token;
const userId = route.query.userId;

const backBtn = () => {
  console.log('App:goLogin');
  router.replace('/login');
}

onMounted(() => {
  // token 값이 없는 경우 /login으로 이동
  if (!token && !userId) {
    navigateTo('/login');
  }
})
</script>
