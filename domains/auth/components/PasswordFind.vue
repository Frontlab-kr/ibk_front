<template>
  <Dialog v-model:visible="props.modelValue" modal class="ibk-dialog ibk-dialog-app">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeModal" />
      </div>
      <div class="ibk-dialog-app__title">패스워드 찾기</div>
    </template>

    <div class="ibk-dialog-app__text">
      <div class="mo">
        <strong>패스워드 찾기</strong>
      </div>
    </div>

    <div v-if="!searchType" class="ibk-login-form__button">
      <Button label="SMS" severity="primary" class="w-full" size="large" outlined @click="searchType = 'SMS'" />
      <Button label="이메일" severity="primary" class="w-full" size="large" outlined @click="searchType = 'EMAIL'" />
    </div>
    <div v-else class="ibk-dialog-password-list">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>회원유형</label>
            <div class="ibk-dialog-password-list__search">
              <Select v-model="searchParam.userPtrnVl" :options="userPtrnOptions" optionLabel="name" optionValue="value"
                placeholder="회원유형 선택" class="w-full" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>직원번호</label>
            <div class="ibk-dialog-password-list__search">
              <InputText v-model="searchParam.emplNo" class="w-full" placeholder="직원번호 입력" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>이름</label>
            <div class="ibk-dialog-password-list__search">
              <InputText v-model="searchParam.userNm" class="w-full" placeholder="이름 입력" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>생년월일</label>
            <div class="ibk-dialog-password-list__search">
              <InputText 
    v-model="searchParam.birtYmd" 
    class="w-full" 
    placeholder="예) 990101" 
    size="large"
    maxlength="6"
    @input="handleBirthInput"
  />
            </div>
          </div>
        </div>
        <div v-if="searchType == 'SMS'" class="col-12">
          <div class="field">
            <label>휴대폰번호</label>
            <div class="ibk-dialog-password-list__search">
              <InputText v-model="searchParam.cpn" class="w-full" placeholder="예) 010-000-0000" size="large" />
            </div>
          </div>
        </div>
        <div v-if="searchType == 'EMAIL'" class="col-12">
          <div class="field">
            <label>이메일</label>
            <div class="ibk-dialog-password-list__search">
              <InputText v-model="searchParam.userEad" class="w-full" placeholder="예) 0000@0000.com" size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div v-if="!searchType" class="ibk-dialog-app__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="closeModal" />
      </div>
      <div v-else class="ibk-dialog-app__button flex gap-2">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="closeModal" />
        <Button label="확인" severity="primary" outlined size="large" class="w-full" @click="findPassword" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Utility from '~/lib/Utility';
import type { FindPwdInVo, UserPswdSearchInVo } from '~/api-client';
import { useAuthStore } from '~/domains/auth';

const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {
    modelValue: false as boolean
  }
)
const emit = defineEmits(['update:modelValue'])
const authStore = useAuthStore();

const userPtrnOptions = ref([]);
Utility.getCommonCode('COM00081').forEach(item => {
  // @ts-ignore
  userPtrnOptions.value.push({ name: item.cmcdVlNm, value: item.cmcdVl });
})
// 생년월일 입력 처리 함수
const handleBirthInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/[^0-9]/g, ''); // 숫자만 허용

  // 6자리로 제한
  if (value.length > 6) {
    value = value.slice(0, 6);
  }

  // YYMMDD 형식 검증
  if (value.length === 6) {
    const year = parseInt(value.substring(0, 2));
    const month = parseInt(value.substring(2, 4));
    const day = parseInt(value.substring(4, 6));

    // 월 검증 (01-12)
    if (month < 1 || month > 12) {
      value = value.substring(0, 2) + '01' + value.substring(4, 6);
    }

    // 일 검증 (01-31)
    if (day < 1 || day > 31) {
      value = value.substring(0, 4) + '01';
    }
  }

  searchParam.value.birtYmd = value;
};
const searchParam = ref<UserPswdSearchInVo>({
  sendType: 'email'
});
const searchType = ref<any>('');

const closeModal = () => {
  searchType.value = '';
  Object.assign(searchParam.value, { userPtrnVl: '', userId: null, userNm: null, birtYmd: null, cpn: null })
  emit('update:modelValue', false);
}
async function validation(){
  if(searchParam.value.userPtrnVl == null){
    await $alert('회원유형을 선택해주세요.');
    return false;
  }
  if($isEmpty(searchParam.value.emplNo )){
    await $alert('직원번호를 입력해주세요.');
    return false;
  }
  if($isEmpty(searchParam.value.userNm)){
    await $alert('이름을 입력해주세요.');
    return false;
  }
  if($isEmpty(searchParam.value.birtYmd)){
    await $alert('생년월일을 입력해주세요.');
    return false;
  }
   if((searchParam.value.birtYmd ?? "").length != 6){
      await $alert('생년월일을 6자리로 입력해주세요.');
      return false;
    }
  if(searchType.value == 'SMS' && $isEmpty(searchParam.value.cpn)){
    await $alert('휴대폰번호를 입력해주세요.');
    return false;
  }
  if(searchType.value == 'EMAIL' && $isEmpty(searchParam.value.userEad)){
    await $alert('이메일을 입력해주세요.');
    return false;
  }
  return true;

}
const findPassword = async () => {
  if(!await validation()){
    return;
  }
  // await authStore.findPassword(searchParam.value);
  const res = await $wrap($request().rgsUserPswdSearch(searchParam.value));

  await $alert('패스워드 찾기 요청이 완료되었습니다.');

  closeModal();
}
</script>
