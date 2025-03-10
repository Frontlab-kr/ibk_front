<template>
  <div class="ibk-login">
    <div class="ibk-login-bg">
      <img src="/assets/images/login1.png" alt="" />
    </div>
    <div class="ibk-login-form">
      <div class="ibk-login-form-inner ibk-login-form-inner--flex">
        <div class="ibk-mobile-back ibk-mobile-back--center">
          <Button icon="ibk-icon-24-arrowleft" label="휴대폰 인증" link />
        </div>
        <div class="pc">
          <div class="ibk-login-form__title">
            <h1>휴대폰 인증</h1>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>휴대폰 인증</label>
              <div class="ibk-login-form-item">
                <InputText type="text" class="w-full" size="large" placeholder="휴대폰번호를 입력해주세요." />
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
          <div class="ibk-login-form__button">
            <Button label="로그인" severity="primary" class="w-full" size="large" disabled />
          </div>
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
