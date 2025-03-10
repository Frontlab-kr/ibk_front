<template>
  <TabPanel value="classRoom">
    <div class="ibk-apply-form">
      <div class="ibk-apply-form-info">
        <div class="ibk-apply-form-info__title">강의실 신청</div>
        <div class="ibk-apply-form-info__contents">
          <div class="ibk-apply-form-info-swiper" id="swiper02">
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
                el: '#swiper02 .swiper-pagination',
                type: 'fraction',
              }"
              :navigation="{
                nextEl: '#swiper02 .swiper-button-next',
                prevEl: '#swiper02 .swiper-button-prev',
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
                  <label>강의실 선택</label>
                  <div class="ibk-radio ibk-radio--type2">
                    <div class="ibk-radio-item">
                      <RadioButton v-model="facilityParams.fcltPsiDcd" inputId="radio1" value="2" />
                      <label for="radio1" class="ml-2">기흥연수원</label>
                    </div>
                    <div class="ibk-radio-item">
                      <RadioButton v-model="facilityParams.fcltPsiDcd" inputId="radio2" value="3" />
                      <label for="radio2" class="ml-2">충주연수원</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="field">
                  <label>유형 선택</label>
                  <Select
                    v-model="facilityParams.fcltDtlKcd"
                    :options="classroomType"
                    optionLabel="fcltDtlKcdNm"
                    optionValue="fcltDtlKcd"
                    placeholder="선택"
                    class="w-full"
                    size="large"
                    :disabled="!facilityParams.fcltPsiDcd"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="pc">
                  <div class="field">
                    <label>예약일시 선택</label>
                    <div class="ibk-datepicker">
                      <div class="ibk-datepicker-item" :class="{ active: facilityReservationDate }">
                        <div class="ibk-datepicker-item-input" @click="facilityCalendarToggle">
                          <p>예약일시 선택</p>
                          <strong>{{ facilityReservationDate }}
                            <span>· {{ facilityInAmPm }} {{ facilityReservationDateInTime }} - {{ facilityOutAmPm }} {{ facilityReservationDateOutTime }}</span>
                          </strong>
                        </div>
                      </div>
                      <Popover ref="facilityCalendar">
                        <div class="ibk-calendar">
                          <div class="ibk-calendar-body">
                            <div class="ibk-calendar-calendar">
                              <VueDatePicker
                                v-model="facilityDateRange"
                                :enable-time-picker="false"
                                locale="ko"
                                auto-apply
                                inline
                                :month-change-on-scroll="false"
                                ref="datepicker02"
                              ></VueDatePicker>
                            </div>
                            <div class="ibk-calendar-list">
                              <ul>
                                <li
                                  v-for="(item, index) in calendarItems"
                                  :key="index"
                                  :class="{ active: calendarRadio === 'calendarRadio' + (index + 1) }"
                                >
                                  <p>
                                    <Checkbox
                                      v-model="facilitySelectedItems"
                                      :inputId="'calendarCheckbox' + (index + 1)"
                                      :value="item"
                                      @change="handleSelection(item)"
                                      :disabled="item.isReserved"
                                    />
                                    <label :for="'calendarRadio' + (index + 1)">
                                      <del v-if="item.isReserved">{{ item.time }}</del>
                                      <span v-else>{{ item.time }}</span>
                                    </label>
                                  </p>
                                  <span :class="item.isReserved ? '' : 'text-primary'">
                                    {{ item.isReserved ? '예약완료' : '예약가능' }}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="ibk-calendar-foot">
                            <div class="ibk-calendar-foot-text">
                              <div>
                                {{ facilityReservationDateText }}
                              </div>
                              <div class="ibk-calendar-foot-text__time">
                                <p>{{ facilityInAmPm }} {{ facilityReservationDateInTime }}</p>
                                <span>-</span>
                                <p>{{ facilityOutAmPm }} {{ facilityReservationDateOutTime }}</p>
                              </div>
                            </div>
                            <Button label="선택" severity="primary" @click="facilityCalendarToggle($event)" />
                          </div>
                        </div>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div class="mo">
                  <div class="field">
                    <label>예약일시 선택</label>
                    <div class="ibk-datepicker">
                      <div class="ibk-datepicker-item" :class="{ active: facilityReservationDate }">
                        <div class="ibk-datepicker-item-input" @click="facilityMobileDateRange = true">
                          <p>예약일시 선택</p>
                          <strong>{{ facilityReservationDate }}
                            <span>· {{ facilityInAmPm }} {{ facilityReservationDateInTime }} - {{ facilityOutAmPm }} {{ facilityReservationDateOutTime }}</span>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-apply-form-info-form__button">
              <Button label="신청하기" severity="primary" size="large" class="w-full" @click="openFacilityRequestDialog"/>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-apply-form-summary">
        <div class="ibk-apply-form-summary__title">강의실 소개</div>
        <div class="ibk-apply-form-summary__contents">
          <p v-html="explanation"></p>
        </div>
      </div>
    </div>
  </TabPanel>
  <FacilityRequestDialog v-if="facilityRequestDialogParams.visible" v-model:visible="facilityRequestDialogParams.visible" :item="facilityRequestDialogParams.item" modal class="ibk-dialog ibk-dialog-apply" />
  <Dialog v-model:visible="facilityMobileDateRange" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="facilityMobileDateRange = false" />
      </div>
      <div class="ibk-dialog-apply__title">예약일시 선택</div>
    </template>
    <div class="ibk-calendar">
      <div class="ibk-calendar-body">
        <div class="ibk-calendar-calendar">
          <VueDatePicker
            v-model="facilityDateRange"
            :enable-time-picker="false"
            locale="ko"
            auto-apply
            inline
            :month-change-on-scroll="false"
            ref="datepicker02"
          ></VueDatePicker>
        </div>
        <div class="ibk-calendar-list">
          <ul>
            <li v-for="(item, index) in calendarItems" :key="index">
              <p>
                <Checkbox
                  v-model="facilitySelectedItems"
                  :inputId="'calendarCheckbox' + (index + 1)"
                  :value="item"
                  @change="handleSelection(item)"
                />
                <label :for="'calendarRadio' + (index + 1)">
                  <del v-if="item.isReserved">{{ item.time }}</del>
                  <span v-else>{{ item.time }}</span>
                </label>
              </p>
              <span :class="item.isReserved ? '' : 'text-primary'">
                {{ item.isReserved ? '예약완료' : '예약가능' }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-calendar-foot">
        <div class="ibk-calendar-foot-text">
          <div>
            {{ facilityReservationDateText }}
          </div>
          <div class="ibk-calendar-foot-text__time">
            <p>{{ facilityInAmPm }} {{ facilityReservationDateInTime }}</p>
            <span>-</span>
            <p>{{ facilityOutAmPm }} {{ facilityReservationDateOutTime }}</p>
          </div>
        </div>
<!--        <Button label="예약하기" severity="primary" @click="facilityMobileDateRange = false"/>-->
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="facilityMobileDateRange = false" />
        <Button label="적용" severity="primary" size="large" class="w-full" @click="facilityMobileDateRange = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import { useFacilityStore } from '~/domains/facility';
import type { FacilityPageInqInVo, FacilityRequestInVo, FacilityRequestPageInqInVo } from '~/api-client';
import type { FacilityRequestDialogOptions, FacilityRequestOptions } from '~/domains/facility/type';
import FacilityRequestDialog from '~/domains/facility/components/FacilityRequestDialog.vue';
import Utility from '~/lib/Utility';
const facility = ref<any>();
const classroomType = ref<any>();
const route = useRoute();
const store = useFacilityStore();
const tab = ref<string | null>(route.query.tab as string);
const facilityStore = useFacilityStore();
const defaultImages = ref([]);
const facilityCalendar = ref();
const facilityDateRange = ref('');
const facilityReservationDate = ref('');
const facilityReservationDateText = ref('');
const facilityReservationDateInTime = ref('');
const facilityReservationDateOutTime = ref('');
const facilityInAmPm = ref('');
const facilityOutAmPm = ref('');
const calendarRadio = ref();
const facilityMobileDateRange = ref(false);
const facilitySelectedItems = ref([]);
const defaultExplanation = ref('');
const explanation = computed(() => {
  if(facility.value){
    const tempExplanation = facility.value.filter(x => x.fcltPsiDcd == facilityParams.fcltPsiDcd && x.fcltDtlKcd == facilityParams.fcltDtlKcd)[0];
    if(tempExplanation){
      return tempExplanation.fcltDtdcCon;
    }else{
      return defaultExplanation.value;
    }
  }
})

const images = computed(() => {
  if(facility.value){
    const tempImages = facility.value.filter(x => x.fcltPsiDcd == facilityParams.fcltPsiDcd && x.fcltDtlKcd == facilityParams.fcltDtlKcd)[0];
    if(tempImages){
      return tempImages.facilityImageList;
    }else{
      return [];
    }
  }else{
    return [];
  }
})

const facilityParams = reactive<FacilityRequestInVo>({
  trngFcltDcd:'1', // 추후 수정 필요
  fcltPsiDcd:'',
  fcltDtlKcd:'',
  fcltDtlKcdNm:'',
  userId:'',
  rsvtSttgTs:'',
  rsvtFnshTs:'',
  aplcYmd:Utility.getTodayDate('yyyy.mm.dd'),
  schdNm:'',
  fcltUseNmprCnt:'',
  ofcTpn:'',
  cpn:'',
  rmrkCon:'',
  cosnYn:'Y',
  athzYn:'N',
  useYn:'Y',
  reservationDate:'',
  reservationDateInTime:'',
  reservationDateOutTime:'',
  mergedTimes:[]
});

const INIT_SEARCH_PARAMS = (): FacilityRequestPageInqInVo => ({
  trngFcltDcd: '1',
  aplcYmdStart : '',
  aplcYmdEnd : '',
  target : 'classroom',
});

const requestParams = reactive<FacilityRequestOptions>(INIT_SEARCH_PARAMS());

const facilityRequestDialogParams = reactive<FacilityRequestDialogOptions>({
  visible: false,
  item: facilityParams,
});

const facilityParam = reactive<FacilityPageInqInVo>({
  useYn: 'Y'
});

const openFacilityRequestDialog = () => {
  if(!facilityParams.fcltPsiDcd){
    Utility.alert('강의실을 선택해주세요');
    return false;
  }

  if(!facilityParams.fcltDtlKcd){
    Utility.alert('유형을 선택해주세요');
    return false;
  }

  if(!facilityReservationDateText.value){
    Utility.alert('예약날짜를 선택해주세요')
    return false;
  }

  if(facilityParams.mergedTimes.length == 0){
    Utility.alert('예약시간을 선택해주세요')
    return false;
  }

  facilityRequestDialogParams.visible= true;
  facilityRequestDialogParams.item= facilityParams;
};

const getFacility = async () => {
  facility.value = [];
  await facilityStore.getFacilityList(facilityParam);
  if(facilityStore.facilityData.data && facilityStore.facilityData.data.response.contentsNbi > 0) {
    facility.value = facilityStore.facilityData.data.response.contents.filter(x => x.trngFcltDcd == '1');
    defaultImages.value = facility.value[0].facilityImageList;
    defaultExplanation.value = facility.value[0].fcltDtdcCon;
  }
}

const facilityCalendarToggle = (event) => {
  facilityCalendar.value.toggle(event);
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};
const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const formattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, '0');
  const dayName = days[String(date.getDay())];

  return `${month}월 ${day}일 ${dayName}`;
};

watch(facilityDateRange, (newDates) => {
  facilityReservationDate.value = formatDate(newDates);
  facilityParams.reservationDate = facilityReservationDate.value;
  facilityReservationDateText.value = formattedDate(newDates);
});

const calendarItems = [
  { time: '09:00-09:30', startTime: '09:00', endTime: '09:30', isReserved: false },
  { time: '09:30-10:00', startTime: '09:30', endTime: '10:00', isReserved: false },
  { time: '10:00-10:30', startTime: '10:00', endTime: '10:30', isReserved: false },
  { time: '10:30-11:00', startTime: '10:30', endTime: '11:00', isReserved: false },
  { time: '11:00-11:30', startTime: '11:00', endTime: '11:30', isReserved: false },
  { time: '11:30-12:00', startTime: '11:30', endTime: '12:00', isReserved: false },
  { time: '12:00-12:30', startTime: '12:00', endTime: '12:30', isReserved: false },
  { time: '12:30-13:00', startTime: '12:30', endTime: '13:00', isReserved: false },
  { time: '13:00-13:30', startTime: '13:00', endTime: '13:30', isReserved: false },
  { time: '13:30-14:00', startTime: '13:30', endTime: '14:00', isReserved: false },
  { time: '14:00-14:30', startTime: '14:00', endTime: '14:30', isReserved: false },
  { time: '14:30-15:00', startTime: '14:30', endTime: '15:00', isReserved: false },
  { time: '15:00-15:30', startTime: '15:00', endTime: '15:30', isReserved: false },
  { time: '15:30-16:00', startTime: '15:30', endTime: '16:00', isReserved: false },
  { time: '16:00-16:30', startTime: '16:00', endTime: '16:30', isReserved: false },
  { time: '16:30-17:00', startTime: '16:30', endTime: '17:00', isReserved: false },
  { time: '17:00-17:30', startTime: '17:00', endTime: '17:30', isReserved: false },
  { time: '17:30-18:00', startTime: '17:30', endTime: '18:00', isReserved: false },
  { time: '18:00-18:30', startTime: '18:00', endTime: '18:30', isReserved: false },
  { time: '18:30-19:00', startTime: '18:30', endTime: '19:00', isReserved: false },
];

const convertTo12Hour = (time) => {
  let [hour, minute] = time.split(':').map(Number);
  const ampm = hour >= 12 ? '오후' : '오전';

  hour = hour % 12 || 12;
  return { time: `${hour}:${minute < 10 ? '0' + minute : minute}`, ampm };
};

const handleSelection = (item) => {
  if (!item.isReserved) {
    if(facilitySelectedItems.value.length > 0){
      const sortedSelectedItems = [...facilitySelectedItems.value].sort(
        (a, b) => a.startTime.localeCompare(b.startTime)
      );

      // 연속된 시간대 병합
      let mergedTimes = [];
      let start = sortedSelectedItems[0].startTime;
      let end = sortedSelectedItems[0].endTime;

      for (let i = 1; i < sortedSelectedItems.length; i++) {
        const current = sortedSelectedItems[i];
        const previous = sortedSelectedItems[i - 1];

        // 이전 시간의 endTime과 현재 시간의 startTime이 일치하는 경우 병합
        if (previous.endTime === current.startTime) {
          end = current.endTime;
        } else {
          mergedTimes.push(`${start}-${end}`);
          start = current.startTime;
          end = current.endTime;
        }
      }

      mergedTimes.push(`${start}-${end}`);

      const mergedStartTime = mergedTimes[0].split('-')[0];
      const mergedEndTime = mergedTimes[mergedTimes.length-1].split('-')[1];

      const { time: start12Hour, ampm: startAmPm } = convertTo12Hour(mergedStartTime);
      const { time: end12Hour, ampm: endAmPm } = convertTo12Hour(mergedEndTime);

      facilityReservationDateInTime.value = start12Hour;
      facilityReservationDateOutTime.value = end12Hour;
      facilityInAmPm.value = startAmPm;
      facilityOutAmPm.value = endAmPm;
      facilityParams.reservationDateInTime = mergedStartTime;
      facilityParams.reservationDateOutTime = mergedEndTime;
      facilityParams.mergedTimes = mergedTimes;
    }else{
      facilityReservationDateInTime.value = '';
      facilityReservationDateOutTime.value = '';
      facilityInAmPm.value = '';
      facilityOutAmPm.value = '';
      facilityParams.reservationDateInTime = '';
      facilityParams.reservationDateOutTime = '';
      facilityParams.mergedTimes = [];
    }
  }
};

watch(() => facilityParams.fcltPsiDcd, () => {
  if(facilityParams.fcltPsiDcd){
    classroomType.value = facility.value.filter(x => x.fcltPsiDcd == facilityParams.fcltPsiDcd)
    facilityParams.fcltDtlKcdNm = facility.value.filter(x => x.fcltPsiDcd == facilityParams.fcltPsiDcd).map(y => y.fcltDtlKcdNm)[0];
    facilityParams.fcltDtlKcd = '';
  }
})

watch(() => facilityReservationDate.value , () => {
  calendarItems.forEach(item => {
    item.isReserved = false;
  });
  let tempDate = '';
  if(facilityReservationDate.value.length > 0){
    tempDate = facilityReservationDate.value.replaceAll('.','-');
    store.classRoomRequestData.contents.forEach(x => {

      if(x.rsvtSttgTs.startsWith(tempDate)){
        const tempStartTime = x.rsvtSttgTs.split(' ')[1].substring(0, 5);
        const tempEndTime = x.rsvtFnshTs.split(' ')[1].substring(0, 5);
        calendarItems.forEach(item => {
          if (
            (item.startTime >= tempStartTime && item.startTime < tempEndTime) ||
            (item.endTime > tempStartTime && item.endTime <= tempEndTime) ||
            (item.startTime <= tempStartTime && item.endTime >= tempEndTime)
          ) {
            item.isReserved = true;
          }
        });
      }
    })
  }
})

onMounted(async () => {
  await store.getClassRoomRequestList(requestParams,true);
});

onBeforeMount(async () => {
  await getFacility(); // 강의실, 스튜디오
})

</script>
