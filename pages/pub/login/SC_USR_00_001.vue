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
                <InputText type="text" class="w-full" size="large" placeholder="사번을 입력해주세요." />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>패스워드</label>
              <div class="ibk-login-form-item">
                <InputText type="password" class="w-full" size="large" placeholder="패스워드를 입력해주세요." />
              </div>
            </div>
          </div>
        </div>
        <div class="ibk-login-form__find">
          <a href="">패스워드 찾기</a>
        </div>
        <div class="ibk-login-form__button">
          <Button label="로그인" severity="primary" class="w-full" size="large" />
          <Button label="앱 다운로드 안내" severity="secondary" class="w-full text-primary" size="large" />
        </div>
      </div>
      <address>
        본 사이트는 기업은행 임직원을 위한 공간입니다.<br />
        Copyright. IBK(INDUSTRIAL BANK OF KOREA) All rights reserved.
      </address>
    </div>
  </div>
  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-app">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-app__title">앱 다운로드</div>
    </template>

    <div class="ibk-dialog-app__text">
      <div class="mo">
        <strong>앱 다운로드 안내</strong>
      </div>
      스마트 폰에 다운로드 후 이용 가능 합니다.
    </div>
    <div class="ibk-dialog-app__download">
      <Button
        icon="ibk-icon-24-android"
        label="안드로이드 다운로드"
        severity="secondary"
        class="w-full"
        size="large"
        outlined
      />
      <Button icon="ibk-icon-24-ios" label="애플 다운로드" severity="secondary" class="w-full" size="large" outlined />
    </div>

    <template #footer>
      <div class="ibk-dialog-app__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>
  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-address">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-address__title">우편번호 찾기</div>
    </template>

    <div class="ibk-dialog-address-list">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>주소 검색</label>
            <div class="ibk-dialog-address-list__search">
              <InputText
                type="text"
                class="w-full"
                placeholder="도로명, 건물명 또는 지번을 입력해주세요"
                size="large"
              />
              <Button label="검색" severity="primary" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>검색결과</label>
            <div class="ibk-dialog-address-list__list">
              <ul>
                <li class="active">
                  <div class="ibk-dialog-address-list__post">우편번호<strong>36752</strong></div>
                  <table>
                    <tbody>
                      <tr>
                        <th>도로명</th>
                        <td>서울특별시 종로구 가로길 124</td>
                      </tr>
                      <tr>
                        <th>지번</th>
                        <td>서울특별시 종로구 을지로 1가 179</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li v-for="i of 7">
                  <div class="ibk-dialog-address-list__post">우편번호<strong>36752</strong></div>
                  <table>
                    <tbody>
                      <tr>
                        <th>도로명</th>
                        <td>서울특별시 종로구 가로길 124</td>
                      </tr>
                      <tr>
                        <th>지번</th>
                        <td>서울특별시 종로구 을지로 1가 179</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
            <!-- <div class="ibk-dialog-address-none">검색결과가 없습니다.</div> -->
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-target__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal02 = false" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="앱 다운로드"></Button><br /><br />
    <Button @click="modal02 = true" label="우편번호 찾기"></Button><br />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'publogin',
});
const modal01 = ref(false);
const modal02 = ref(false);
</script>
