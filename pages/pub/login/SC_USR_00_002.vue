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
          <Button label="mOTP" severity="secondary" class="w-full" size="large" outlined />
          <Button label="SMS 인증" severity="secondary" class="w-full" size="large" outlined />
          <Button label="이메일 인증" severity="secondary" class="w-full" size="large" outlined />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'publogin',
});
</script>
