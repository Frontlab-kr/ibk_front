<template>
  <div class="ibk-login">
    <div class="ibk-login-bg">
      <img src="/assets/images/login1.png" alt="" />
    </div>
    <div class="ibk-login-form">
      <div class="ibk-login-form-inner">
        <div class="ibk-login-form__title">
          <img src="/assets/images/logo-login.png" alt="" />
          <h1>로그인</h1>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>아이디</label>
              <div class="ibk-login-form-item">
                <InputText v-model="loginForm.userId" type="text" class="w-full" size="large" placeholder="사번을 입력해주세요." />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>패스워드</label>
              <div class="ibk-login-form-item">
                <InputText v-model="loginForm.userPwd" type="password" class="w-full" size="large" placeholder="패스워드를 입력해주세요." />
              </div>
            </div>
          </div>
        </div>
        <div class="ibk-login-form__find">
          <a class="cursor-pointer" @click.stop="passwordModal = true">패스워드 찾기</a>
        </div>
        <div class="ibk-login-form__button">
          <Button label="로그인" severity="primary" class="w-full" size="large" @click="handleSubmit" />
          <Button label="앱 다운로드 안내" severity="secondary" class="w-full text-primary" size="large" @click="appDownModal = true" />
        </div>
      </div>
      <address>
        본 사이트는 기업은행 임직원을 위한 공간입니다.<br />
        Copyright. IBK(INDUSTRIAL BANK OF KOREA) All rights reserved.
      </address>
      <PasswordFind v-model="passwordModal" />
      <AppDownload v-model="appDownModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type LoginForm, useAuthStore } from '~/domains/auth';
import AppDownload from '~/domains/auth/components/AppDownload.vue';
import PasswordFind from '~/domains/auth/components/PasswordFind.vue';
import Utility from '~/lib/Utility';

definePageMeta({
  layout: 'pub-login',
});

const authStore = useAuthStore();

const loginForm = reactive<LoginForm>({
  userId : "0taeng",
  userPwd : "ibk1234"
})

const handleSubmit = async () => {
  if(loginForm.userId == "" || loginForm.userPwd == ""){
    alert("아이디/패스워드를 입력하세요.");
  }else{
    const token = await authStore.login(loginForm);

    if(token){
      navigateTo(`/login/next?token=${token}&userId=${loginForm.userId}`);
    }else{
      Utility.notify({title:'로그인 실패', message:'인증 정보가 없습니다.', variant:'error'});
    }
  }
}

const passwordModal = ref<boolean>(false);
const appDownModal = ref<boolean>(false);

</script>
