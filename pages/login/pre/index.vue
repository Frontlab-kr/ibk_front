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
          <h1>로그인</h1>
        </div>
        <div class="ibk-login-form__button">

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
import { type LoginForm, useAuthStore } from '~/domains/auth';
import Utility from '~/lib/Utility';

definePageMeta({
  layout: 'pub-login',
});

const authStore = useAuthStore();
const route = useRoute();

const userId = route.query.userId;
const userPwd = route.query.userPwd;

const handleSubmit = async () => {
  const loginParam = {
    userId: userId,
    userPwd: userPwd,
  } as LoginForm;

  try {
    const token = await authStore.loginApp(loginParam);
    if (token) {
      navigateTo(`/login/next?token=${token}&userId=${userId}`);
    } else {
      Utility.notify({ title: '로그인 실패', message: '인증 정보가 없습니다.', variant: 'error' });
    }
  } catch (e) {
    console.log('App:goLogin');
    history.back();
  }
};

onMounted(async () => {
  // token 값이 없는 경우 /login으로 이동
  if (!userId && !userPwd) {
    await $alert('로그인 정보가 없습니다.');
    console.log('App:goLogin');
    history.back();
  } else {
    await handleSubmit();
    //정보가 있다 로그인 처리
  }
});
</script>
