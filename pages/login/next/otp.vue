<template>
  <div class="ibk-login">
    <div class="ibk-login-bg">
      <img src="/assets/images/login1.png" alt="" />
    </div>
    <div class="ibk-login-form">
      <div class="ibk-login-form-inner ibk-login-form-inner--flex">
        <div class="ibk-mobile-back ibk-mobile-back--center">
          <Button icon="ibk-icon-24-arrowleft" label="mOTP" link @click="closeFunc" />
        </div>
        <div class="pc">
          <div class="ibk-login-form__title">
            <h1>mOTP</h1>
          </div>
        </div>
        <div class="ibk-login-form__text">
          원격훈련 mOTP앱에서 생성한 <br />
          6자리 인증번호를 입력하세요.
        </div>

        <div class="ibk-login-form__input">
          <InputText
            v-for="(input, index) in inputs"
            :key="index"
            type="text"
            maxlength="1"
            v-model="inputs[index]"
            :class="{ 'active': input !== '' }"
            @input="handleInput(index, $event)"
            size="large"
            ref="inputField"
            :autofocus="true"
          />
        </div>
        <div class="ibk-login-form__foot">
          <div class="ibk-login-form__link">
            mOTP를 처음 사용하신다면?
            <a @click.stop="$alert('기능 준비중 입니다.')" class="cursor-pointer" >mOTP 안내글 보기 <i class="ibk-icon-16-link"></i></a>
          </div>
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
import { ref } from 'vue';
import { useAuthStore } from '~/domains/auth';
import type { LoginMotpInVo } from '~/api-client';

definePageMeta({
  layout: 'pub-login',
});

const authStore = useAuthStore();

const inputs = ref(Array(6).fill(''));
const route = useRoute();


// 입력값 처리 함수
const handleInput = (index, event) => {
  const input = event.target.value;

  // 한 글자 이상 입력 방지
  if (input.length > 1) {
    inputs.value[index] = input[0]; // 첫 글자만 사용
  } else {
    inputs.value[index] = input;
  }

  // 다음 입력 필드로 포커스 이동
  if (input !== '' && index < inputs.value.length - 1) {
    focusNextInput(index + 1);
  }
}

// 다음 입력 필드로 포커스 이동하는 함수
const focusNextInput = (nextIndex) => {
  const nextInputField = document.querySelectorAll('.ibk-login-form__input input')[nextIndex];
  if (nextInputField) {
    nextInputField.focus();
  }
}

const closeFunc = () => {
  inputs.value = Array(6).fill('');
  history.back();
}

const checkSecondaryAuth = async () => {
  const otp = inputs.value.join('');
  if(otp.length < 6) {
    $alert('OTP를 입력해주세요.');
    return;
  }

  await authStore.secondaryAuth({
    userId: route.query.userId as string,
    otpNumber: otp,
    token: route.query.token as string,
  } as LoginMotpInVo);
}

const token = route.query.token;
const userId = route.query.userId;

onMounted(() => {
  // token 값이 없는 경우 /login으로 이동
  if (!token && !userId) {
    navigateTo('/login');
  }
})
</script>
