<template>
  <TabPanel value="training">
    <div class="ibk-apply-form">
      <div class="ibk-apply-form-info">
        <div class="ibk-apply-form-info__title">연수원 신청</div>
        <div class="ibk-apply-form-info__contents">
          <div class="ibk-apply-form-info-swiper" id="swiper01">
            <Swiper
              :modules="[
                SwiperAutoplay,
                SwiperEffectCreative,
                SwiperController,
                SwiperPagination,
                SwiperNavigation,
              ]"
              :slides-per-view="1"
              :loop="true"
              :effect="'creative'"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
              }"
              :creative-effect="{
                prev: {
                  shadow: false,
                  translate: ['-20%', 0, -1],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }"
              :pagination="{
                el: '#swiper01 .swiper-pagination',
                type: 'fraction',
              }"
              :navigation="{
                nextEl: '#swiper01 .swiper-button-next',
                prevEl: '#swiper01 .swiper-button-prev',
              }"
            >
              <SwiperSlide v-if="images.length > 0" v-for="image in images" :key="image">
                <img :src="image.pcFileUrlAdr" alt="" />
              </SwiperSlide>
              <SwiperSlide v-else v-for="item in defaultImages" :key="item.pcFileUrlAdr">
                <img :src="item.pcFileUrlAdr" alt="" />
              </SwiperSlide>
            </Swiper>
            <!-- Swiper Pagination -->
            <div class="swiper-pagination"></div>

            <!-- Swiper Navigation -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="ibk-apply-form-info-form">
            <div class="grid">
              <div class="col-12">
                <div class="field">
                  <label>장소 선택</label>
                  <div class="ibk-radio ibk-radio--type2">
                    <div class="ibk-radio-item">
                      <RadioButton v-model="resortFacilityParams.fcltPsiDcd" inputId="radio1" value="1" />
                      <label for="radio1" class="ml-2">휴양동</label>
                    </div>
                    <div class="ibk-radio-item">
                      <RadioButton v-model="resortFacilityParams.fcltPsiDcd" inputId="radio2" value="2" />
                      <label for="radio2" class="ml-2">숙소동</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="field">
                  <label>타입 선택</label>
                  <Select
                    v-model="resortFacilityParams.gsrmTcd"
                    :options="trainingType"
                    optionLabel="gsrmTypeCdNm"
                    optionValue="gsrmTcd"
                    placeholder="선택"
                    class="w-full"
                    size="large"
                    :disabled="!resortFacilityParams.fcltPsiDcd"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="pc">
                  <div class="field">
                    <label>투숙기간 선택</label>
                    <div class="ibk-datepicker ibk-datepicker--range">
                      <div class="ibk-datepicker-item" :class="{ active: resortFacilityParams.vcfcCkinYmd }">
                        <div class="ibk-datepicker-item-input" @click="openDatePicker01">
                          <p>입실 날짜 선택</p>
                          <strong>입실 {{ resortFacilityParams.vcfcCkinYmd }}</strong>
                        </div>
                      </div>
                      <div class="ibk-datepicker-item" :class="{ active: resortFacilityParams.vcfcCcotYmd  }">
                        <div class="ibk-datepicker-item-input" @click="openDatePicker01">
                          <p>퇴실 날짜 선택</p>
                          <strong>퇴실 {{ resortFacilityParams.vcfcCcotYmd }}</strong>
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
                    <label>투숙기간 선택</label>
                    <div class="ibk-datepicker ibk-datepicker--range" @click="resortFacilityMobileDateRange = true">
                      <div class="ibk-datepicker-item" :class="{ active: resortFacilityParams.vcfcCkinYmd }">
                        <div class="ibk-datepicker-item-input">
                          <p>입실 날짜 선택</p>
                          <strong>입실 {{ resortFacilityParams.vcfcCkinYmd }}</strong>
                        </div>
                      </div>
                      <div class="ibk-datepicker-item" :class="{ active: resortFacilityParams.vcfcCcotYmd }">
                        <div class="ibk-datepicker-item-input">
                          <p>퇴실 날짜 선택</p>
                          <strong>퇴실 {{ resortFacilityParams.vcfcCcotYmd }}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-apply-form-info-form__button">
              <Button label="연수원 신청하기" severity="primary" size="large" class="w-full" @click="openResortFacilityRequestDialog"/>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-apply-form-summary">
        <div class="ibk-apply-form-summary__title">요약설명</div>
        <div class="ibk-apply-form-summary__contents">
          <p v-html="explanation"></p>
        </div>
      </div>
    </div>
  </TabPanel>
  <ResortFacilityRequestDialog v-if="resortFacilityRequestDialogParams.visible" v-model:visible="resortFacilityRequestDialogParams.visible" :item="resortFacilityRequestDialogParams.item" modal class="ibk-dialog ibk-dialog-apply"/>
  <Dialog v-model:visible="resortFacilityMobileDateRange" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="resortFacilityMobileDateRange = false" />
      </div>
      <div class="ibk-dialog-apply__title">투숙기간 선택</div>
    </template>

    <div class="ibk-date-select">
      <div class="ibk-date-select-head">
        <div class="ibk-date-select-head-item" :class="{ active: dateRange01checkInDate }">
          <p>입실 날짜 선택</p>
          <strong>입실 {{ dateRange01checkInDate }}</strong>
        </div>
        <div class="ibk-date-select-head-item" :class="{ active: dateRange01checkOutDate }">
          <p>퇴실 날짜 선택</p>
          <strong>퇴실 {{ dateRange01checkOutDate }}</strong>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="resortFacilityMobileDateRange = false" />
        <Button label="적용" severity="primary" size="large" class="w-full" @click="resortFacilityMobileDateRange = false" />
      </div>
    </template>
  </Dialog>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';
import { useFacilityStore } from '~/domains/facility';
import type { ResortFacilityPageInqInVo, ResortFacilityRequestInVo } from '~/api-client';
import type { ResortFacilityRequestDialogOptions,  } from '~/domains/facility/type';
import ResortFacilityRequestDialog from '~/domains/facility/components/ResortFacilityRequestDialog.vue';
import Utility from '~/lib/Utility';
import { useAuthStore } from '~/domains/auth';
const resortFacility = ref<any>();
const trainingType = ref<any>();
const route = useRoute();
const authStore = useAuthStore();
const tab = ref<string | null>(route.query.tab as string);
const facilityStore = useFacilityStore();
const defaultImages = ref([]);
const defaultExplanation = ref('');

const explanation = computed(() => {
  if(resortFacility.value){
    const tempExplanation = resortFacility.value.filter(x => x.fcltPsiDcd == resortFacilityParams.fcltPsiDcd && x.gsrmTcd == resortFacilityParams.gsrmTcd)[0];
    if(tempExplanation){
      return tempExplanation.vcfcDescCon;
    }else{
      return defaultExplanation.value;
    }
  }
})

const images = computed(() => {
  if(resortFacility.value){
    const tempImages = resortFacility.value.filter(x => x.fcltPsiDcd == resortFacilityParams.fcltPsiDcd && x.gsrmTcd == resortFacilityParams.gsrmTcd)[0];
    if(tempImages){
      return tempImages.resortFacilityImageList;
    }else{
      return [];
    }
  }else{
    return [];
  }
})

const resortFacilityParams = reactive<ResortFacilityRequestInVo>({
  vcfcOprtYy:'2024', // 추후 수정 필요
  trngFcltDcd:'30', // 추후 수정 필요
  fcltPsiDcd:'',
  gsrmTcd:'',
  tob:0,
  userId:authStore.userInfo.userId, // 추후 수정 필요
  aplcTs:Utility.getTodayDate('yyyy.mm.dd'),
  vcfcCkinYmd:'',
  vcfcCcotYmd:'',
  ldgnNdd:'',
  vcfcAlctYn:'',
  vcfcAlctRnm:'',
  ckinNmlsNm:'',
  vcfcAplcScd:'10',
  rsvtNo:'',
  rmrkCon:'',
  vcfcAplyScr:'',
  emrnTpn:'',
  vhclNo:'',
  dmrkScr:0,
  cosnYn:'Y',
  useYn:'Y',
});

const resortFacilityRequestDialogParams = reactive<ResortFacilityRequestDialogOptions>({
  visible: false,
  item: resortFacilityParams,
});

const resortFacilityMobileDateRange = ref(false);

const resortFacilityParam = reactive<ResortFacilityPageInqInVo>({
  useYn: 'Y'
});

const openResortFacilityRequestDialog = async () => {
  if(!resortFacilityParams.fcltPsiDcd){
    Utility.alert('장소를 선택해주세요');
    return false;
  }

  if(!resortFacilityParams.gsrmTcd){
    Utility.alert('타입을 선택해주세요');
    return false;
  }

  if(!resortFacilityParams.vcfcCkinYmd){
    Utility.alert('투숙기간을 선택해주세요');
    return false;
  }

  if(!resortFacilityParams.vcfcCcotYmd){
    Utility.alert('투숙기간을 선택해주세요');
    return false;
  }

  await tobCheck();

  if(resortFacilityParams.tob > 0){
    resortFacilityRequestDialogParams.visible= true;
    resortFacilityRequestDialogParams.item= resortFacilityParams;
  }else{
    Utility.alert('해당날짜에 신청가능한 회차가 없습니다');
    return false;
  }
};

const tobCheck = async () => {
  let res = await $request().checkResortFacilityTob(resortFacilityParams);
  if(res.data.response != null){
    resortFacilityParams.tob = res.data.response.tob;
  }else{
    resortFacilityParams.tob = 0;
  }
}

const getResortFacility = async () => {
  resortFacility.value = [];
  await facilityStore.getResortFacilityList(resortFacilityParam);
  if(facilityStore.resortFacilityData.data && facilityStore.resortFacilityData.data.response.contentsNbi > 0) {
    resortFacility.value = facilityStore.resortFacilityData.data.response.contents;
    defaultImages.value = resortFacility.value[0].resortFacilityImageList;
    defaultExplanation.value = resortFacility.value[0].vcfcDescCon;
  }
}

//연수원 투숙기간 선택
const dateRange01 = ref([]);
const datepicker01 = ref<DatePickerInstance>(null);

const openDatePicker01 = () => {
  if (datepicker01) {
    datepicker01.value.openMenu();
  }
};

/*const disabledDates = computed(() => {
  if (dateRange01.value.length === 1 && dateRange01.value[0]) {
    const firstDate = new Date(dateRange01.value[0]);
    const restrictedDate = new Date(firstDate);
    restrictedDate.setDate(restrictedDate.getDate() + 1); // 다음날부터 제한

    return (date) => date < restrictedDate; // 첫 번째 선택일 이후부터만 선택 가능
  }
  return [];
})*/

watch(dateRange01, (newDates) => {
  if (newDates.length >= 1 && newDates[0] instanceof Date) {
    resortFacilityParams.vcfcCkinYmd = formatDate(newDates[0]);
  }

  if (newDates.length === 2 && newDates[1] instanceof Date) {
    resortFacilityParams.vcfcCcotYmd = formatDate(newDates[1]);
  }

  const diffInTime = newDates[1].getTime() - newDates[0].getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24); // 밀리초를 일 단위로 변환

  if (diffInDays >= 2) {
    Utility.alert('투숙기간은 최대 1박2일 입니다.');
    resortFacilityParams.vcfcCkinYmd = '';
    resortFacilityParams.vcfcCcotYmd = '';
  }

  if (newDates.length === 0) {
    resortFacilityParams.vcfcCkinYmd = '';
    resortFacilityParams.vcfcCcotYmd = '';
  }
});

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

watch(() => resortFacilityParams.fcltPsiDcd, () => {
  if(resortFacilityParams.fcltPsiDcd){
    trainingType.value = resortFacility.value.filter(x => x.fcltPsiDcd == resortFacilityParams.fcltPsiDcd)
    resortFacilityParams.fcltPlacTcdNm = resortFacility.value.filter(x => x.fcltPsiDcd == resortFacilityParams.fcltPsiDcd).map(y => y.fcltPlacTcdNm)[0];
    resortFacilityParams.gsrmTcd = '';
  }
})

onBeforeMount(async () => {
  tab.value = 'training';
  if (route.query.tab) {
    tab.value = route.query.tab
  }
  await getResortFacility(); // 연수원
})

</script>
