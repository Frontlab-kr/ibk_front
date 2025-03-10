<template>
  <TabPanel v-if="isReady" value="employment">
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <div class="ibk-dialog-apply-item-text">{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>수강방식</label>
              <div class="ibk-radio">
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.edctMthdDsncVl" inputId="radio1" value="ONLINE" />
                  <label for="radio1" class="ml-2">온라인</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.edctMthdDsncVl" inputId="radio2" value="OFFLINE" />
                  <label for="radio2" class="ml-2">오프라인</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>수강분야</label>
              <div class="ibk-radio ibk-radio--grid4">
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.onslDvlpSprnAplcDcd" inputId="radio3" value="L" />
                  <label for="radio3" class="ml-2">어학</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.onslDvlpSprnAplcDcd" inputId="radio4" value="B" />
                  <label for="radio4" class="ml-2">은행실무</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.onslDvlpSprnAplcDcd" inputId="radio5" value="R" />
                  <label for="radio5" class="ml-2">재취업</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="props.item.onslDvlpSprnAplcDcd" inputId="radio6" value="S" />
                  <label for="radio6" class="ml-2">창업</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>교육기관명</label>
              <Select
                v-model="props.item.edinNm"
                :options="store.eduInstitutionData"
                optionLabel="edinNm"
                optionValue="edinNm"
                placeholder="선택"
                class="w-full"
                size="large"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="pc">
              <div class="field">
                <label>수강기간</label>
                <div class="ibk-datepicker ibk-datepicker--range">
                  <div class="ibk-datepicker-item" :class="{ active: props.item.lcteSttgYmd }">
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker" >
                      <p>시작일자 선택</p>
                      <strong>시작일자 {{ props.item.lcteSttgYmd }}</strong>
                    </div>
                  </div>
                  <div class="ibk-datepicker-item" :class="{ active: props.item.lcteFnshYmd }">
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker" >
                      <p>종료일자 선택</p>
                      <strong>종료일자 {{ props.item.lcteFnshYmd }}</strong>
                    </div>
                  </div>
                  <div class="ibk-datepicker-input">
                    <VueDatePicker
                      v-model="dateRange01"
                      range
                      multi-calendars
                      :enable-time-picker="false"
                      locale="ko"
                      auto-apply
                      :month-change-on-scroll="false"
                      ref="datepicker01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mo">
              <div class="field">
                <label>수강기간</label>
                <div class="ibk-datepicker ibk-datepicker--range" @click="mobileDateRange = true">
                  <div class="ibk-datepicker-item" :class="{ active: props.item.lcteSttgYmd }">
                    <div class="ibk-datepicker-item-input">
                      <p>시작일자 선택</p>
                      <strong>시작 {{ props.item.lcteSttgYmd }}</strong>
                    </div>
                  </div>
                  <div class="ibk-datepicker-item" :class="{ active: props.item.lcteFnshYmd }">
                    <div class="ibk-datepicker-item-input">
                      <p>종료일자 선택</p>
                      <strong>종료 {{ props.item.lcteFnshYmd }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dialog v-model:visible="mobileDateRange" modal class="ibk-dialog ibk-dialog-apply">
              <template #header>
                <div class="ibk-dialog-back">
                  <Button icon="ibk-icon-24-back-black" text @click="mobileDateRange = false" />
                </div>
                <div class="ibk-dialog-apply__title">수강기간 선택</div>
              </template>

              <div class="ibk-date-select">
                <div class="ibk-date-select-head">
                  <div class="ibk-date-select-head-item" :class="{ active: props.item.lcteSttgYmd }">
                    <p>시작일자 선택</p>
                    <strong>시작 { {{ props.item.lcteSttgYmd }}</strong>
                  </div>
                  <div class="ibk-date-select-head-item" :class="{ active: props.item.lcteFnshYmd }">
                    <p>종료일자 선택</p>
                    <strong>종료 {{ props.item.lcteFnshYmd }}</strong>
                  </div>
                </div>
                <div class="ibk-date-select-body">
                  <VueDatePicker
                    v-model="dateRange01"
                    range
                    :multi-calendars="12"
                    :enable-time-picker="false"
                    locale="ko"
                    auto-apply
                    inline
                    :month-change-on-scroll="false"
                    ref="datepicker01"
                  />
                </div>
              </div>
              <template #footer>
                <div class="ibk-dialog-apply-button">
                  <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="mobileDateRange = false" />
                  <Button label="적용" severity="primary" size="large" class="w-full" @click="mobileDateRange = false" />
                </div>
              </template>
            </Dialog>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>총 잔여 한도</label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>연간잔여 한도</label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>학원비(수강료)</label>
              <div class="ibk-dialog-apply-item-search">
                <InputText v-model="props.item.trngAtlcAmt" type="text" size="large" class="w-full" />
                <Button label="복지비 내역조회" severity="primary" size="large" @click="searchWelfareFee"/>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>실지원 금액</label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
        </div>
        <div class="ibk-dialog-apply-confirm">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>카드번호</label>
                <InputText v-model="props.item.encpCardNo" type="text" size="large" class="w-full" placeholder="카드번호를 입력해주세요." />
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>승인번호</label>
                <InputText v-model="props.item.cardApn" type="text" size="large" class="w-full" placeholder="승인번호를 입력해주세요." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류 업로드하기</div>
        </div>
        <div class="ibk-write-list-upload">
          <div class="ibk-write-list-upload__caution">
            <ul>
              <li>파일을 drag and drop 해주거나 영역을 클릭해주세요.</li>
              <li>업로드 확장자: SVG, PNG, JPG or GIF , PDF, PPTX, XLSX, DOCX, HWP, MP4</li>
            </ul>
          </div>
          <div class="ibk-write-list-upload__form">
            <Toast />
            <FileUpload v-model="props.item.uploadFileList">
              <template #empty>
                <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div v-if="props.item.uploadFileList.length > 0" class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">{{ props.item.uploadFileList.length }}</strong></div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="(file, index) of props.item.uploadFileList" :key="file.name + file.type + file.size">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <i class="ibk-icon-24-folder"></i>
                <p>{{file.name}}</p>
                <strong>{{Utility.formatSize(file.size)}}</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded @click="fileRemove(null, index)"/>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류 제출 시 유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 유의사항</p>
          <p>2. 유의사항</p>
          <p>3. 유의사항</p>
        </div>
      </div>
    </div>
  </TabPanel>
  <WelfareFeeDialog v-if="welfareFeeDialogParams.visible" v-model:visible="welfareFeeDialogParams.visible" modal/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';
import { useAuthStore } from '~/domains/auth';
import type { EduCostApplyOptions, WelfareFeeDialogOptions } from '~/domains/skill/type';
import { useSkillStore } from '~/domains/skill/store';
import Utility from '../../../lib/Utility';
import type { CommonAttachFileOutVo } from '~/api-client';
const route = useRoute();
const authStore = useAuthStore();
const tab = ref<string | null>(route.query.tab as string);
const store = useSkillStore();
const isReady = ref(false);
const props = withDefaults(
	defineProps<{
    item: EduCostApplyOptions | null,
	}>(),
	{
    item: null,
  }
);
const mobileDateRange = ref(false);
const dateRange01 = ref([]);
const datepicker01 = ref<DatePickerInstance>(null);

const welfareFeeDialogParams = reactive<WelfareFeeDialogOptions>({
  visible: false,
  item: {},
});

const openDatePicker = () => {
  if (datepicker01) {
    datepicker01.value.openMenu();
  }
};

const searchWelfareFee = async () => {
  await store.fetchWelfareFeeList({emplNo : authStore.userInfo.emplNo});
  welfareFeeDialogParams.visible = true;
}

watch(dateRange01, (newDates) => {
  if (newDates.length >= 1 && newDates[0] instanceof Date) {
    props.item.lcteSttgYmd = formatDate(newDates[0]);
  }

  if (newDates.length === 2 && newDates[1] instanceof Date) {
    props.item.lcteFnshYmd = formatDate(newDates[1]);
  }

  if (newDates.length === 0) {
    props.item.lcteSttgYmd = '';
    props.item.lcteFnshYmd = '';
  }
});

const fileRemove = (file: CommonAttachFileOutVo, index: number) => {
  if(null == file){
    props.item.uploadFileList.splice(index, 1);
  }else{
    props.item.fileDeleteInVoList.push(file);
    props.item.attachFileList.splice(index, 1);
  }
}
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

onBeforeMount(async () => {
  await store.fetchEduInstitutionList({});
  isReady.value = true;
})

</script>
