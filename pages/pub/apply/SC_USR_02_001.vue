<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>사용시설 신청</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청내역 확인" outlined rounded icon="ibk-icon-16-apply" />
        </div>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">연수원</Tab>
          <Tab value="1">강의실</Tab>
          <Tab value="2">스튜디오</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
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
                      <SwiperSlide v-for="slide in 10" :key="slide">
                        <img src="https://picsum.photos/680/378" alt="" />
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
                              <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                              <label for="radio1" class="ml-2">휴양동</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                              <label for="radio2" class="ml-2">숙소동</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="field">
                          <label>타입 선택</label>
                          <Select
                            v-model="selected01"
                            :options="selected01Option"
                            optionLabel="name"
                            placeholder="선택"
                            class="w-full"
                            size="large"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="pc">
                          <div class="field">
                            <label>투숙기간 선택</label>
                            <div class="ibk-datepicker ibk-datepicker--range">
                              <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker01">
                                  <p>입실 날짜 선택</p>
                                  <strong>입실 {{ dateRange01checkInDate }}</strong>
                                </div>
                              </div>
                              <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker01">
                                  <p>퇴실 날짜 선택</p>
                                  <strong>퇴실 {{ dateRange01checkOutDate }}</strong>
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
                                ></VueDatePicker>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mo">
                          <div class="field">
                            <label>투숙기간 선택</label>
                            <div class="ibk-datepicker ibk-datepicker--range" @click="modal04 = true">
                              <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                                <div class="ibk-datepicker-item-input">
                                  <p>입실 날짜 선택</p>
                                  <strong>입실 {{ dateRange01checkInDate }}</strong>
                                </div>
                              </div>
                              <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                                <div class="ibk-datepicker-item-input">
                                  <p>퇴실 날짜 선택</p>
                                  <strong>퇴실 {{ dateRange01checkOutDate }}</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-apply-form-info-form__button">
                      <Button label="연수원 신청하기" severity="primary" size="large" class="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-form-summary">
                <div class="ibk-apply-form-summary__title">요약설명</div>
                <div class="ibk-apply-form-summary__contents">
                  <ul>
                    <li><p>신청 기간은 이용 희망 월의 2개월 전에 신청해야 합니다.</p></li>
                    <li><p>배정 일자는 이용 희망 전월의 첫 번째 영업일입니다.</p></li>
                    <li><p>선정 기준은 점수, 근속 연수, 총 이용 횟수를 순차적으로 적용합니다.</p></li>
                    <li><p>기타 사항으로는 동일 일자에 유양동과 숙소동을 동시에 신청할 수 없습니다.</p></li>
                  </ul>
                </div>
              </div>
              <div class="ibk-apply-form-summary">
                <div class="ibk-apply-form-summary__title">이용설명</div>
                <div class="ibk-apply-form-summary__contents">
                  <ul>
                    <li>
                      <p>
                        <strong>신청방법・기간</strong> <span>:</span> IBK에듀(edu.ibk.co.kr) → 충주연수원 신청 →
                        휴양동/숙소동 신청 (이용희망 월의 2개월 전에 신청)
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>배정기준</strong> <span>:</span> 1. 이용점수 - 2.근속연수 → 기이용횟수 (이용점수 및
                        이용횟수는 휴양동/숙소동 이용 통합하여 운용)
                      </p>
                    </li>
                    <li>
                      <p><strong>환원기준</strong> <span>:</span> 1년 경과에 따라 5점씩 환원</p>
                    </li>
                  </ul>

                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 96px" />
                        <col style="width: 258px" />
                        <col style="width: 144px" />
                        <col style="width: 258px" />
                        <col style="width: 184px" />
                        <col style="width: 258px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>신청가능 객실 수</th>
                          <th>입실가능일</th>
                          <th>입실일에 따른 개방객실</th>
                          <th>숙박가능 일수</th>
                          <th>차감기준</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>휴양동</th>
                          <td>1인당 최대 1객실</td>
                          <td>요일 무관</td>
                          <td>
                            월-수: 7객실 (중5, 소2)<br />
                            목-일: 24객실 (중20,소4)
                          </td>
                          <td>최대 2박</td>
                          <td>1회 이용 시, 15점 차감</td>
                        </tr>
                        <tr>
                          <th>숙소동</th>
                          <td>1인당 최대 2객실</td>
                          <td>금-일</td>
                          <td>
                            금-일: 숙소동 B동<br />
                            2층 19객실
                          </td>
                          <td>
                            금: 입실 최대 2박<br />
                            토: 입실 최대 1박
                          </td>
                          <td>1객실 당 5점 차감</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-form-inquiry">
                <div class="ibk-apply-form-inquiry__title">
                  문의
                  <span>인재개발부 연수원관리팀</span>
                </div>
                <div class="ibk-apply-form-inquiry__contents">
                  <ul>
                    <li>
                      <strong>백승엽 과장</strong>
                      8-8852(6115)
                    </li>
                    <li>
                      <strong>박건우 대리</strong>
                      8-8852(6109)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
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
                      <SwiperSlide v-for="slide in 10" :key="slide">
                        <strong><img src="https://picsum.photos/680/378" alt="" /></strong>
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
                              <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                              <label for="radio1" class="ml-2">기흥연수원</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                              <label for="radio2" class="ml-2">충주연수원</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="field">
                          <label>유형 선택</label>
                          <Select
                            v-model="selected01"
                            :options="selected01Option"
                            optionLabel="name"
                            placeholder="선택"
                            class="w-full"
                            size="large"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="pc">
                          <div class="field">
                            <label>예약일시 선택</label>
                            <div class="ibk-datepicker">
                              <div class="ibk-datepicker-item" :class="{ active: reservationDate }">
                                <div class="ibk-datepicker-item-input" @click="toggle">
                                  <p>예약일시 선택</p>
                                  <strong
                                    >{{ reservationDate }}
                                    <span
                                      >· {{ inAmPm }} {{ reservationDateInTime }} - {{ outAmPm }}
                                      {{ reservationDateOutTime }}</span
                                    ></strong
                                  >
                                </div>
                              </div>
                              <Popover ref="op">
                                <div class="ibk-calendar">
                                  <div class="ibk-calendar-body">
                                    <div class="ibk-calendar-calendar">
                                      <VueDatePicker
                                        v-model="dateRange02"
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
                                            <RadioButton
                                              v-model="calendarRadio"
                                              :inputId="'calendarRadio' + (index + 1)"
                                              name="calendarRadio"
                                              :value="'calendarRadio' + (index + 1)"
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
                                        {{ reservationDateText }}
                                      </div>
                                      <div class="ibk-calendar-foot-text__time">
                                        <p>{{ inAmPm }} {{ reservationDateInTime }}</p>
                                        <span>-</span>
                                        <p>{{ outAmPm }} {{ reservationDateOutTime }}</p>
                                      </div>
                                    </div>
                                    <Button label="예약하기" severity="primary" />
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
                              <div class="ibk-datepicker-item" :class="{ active: reservationDate }">
                                <div class="ibk-datepicker-item-input" @click="modal05 = true">
                                  <p>예약일시 선택</p>
                                  <strong
                                    >{{ reservationDate }}
                                    <span
                                      >· {{ inAmPm }} {{ reservationDateInTime }} - {{ outAmPm }}
                                      {{ reservationDateOutTime }}</span
                                    ></strong
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-apply-form-info-form__button">
                      <Button label="검색" severity="primary" size="large" class="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-form-summary">
                <div class="ibk-apply-form-summary__title">강의실 소개</div>
                <div class="ibk-apply-form-summary__contents">
                  <p>
                    작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이
                    노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된
                    내용이 노출됩니다. 작성된 내용이 노출됩니다.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="ibk-apply-form">
              <div class="ibk-apply-form-info">
                <div class="ibk-apply-form-info__title">스튜디오 신청</div>
                <div class="ibk-apply-form-info__contents">
                  <div class="ibk-apply-form-info-swiper" id="swiper03">
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
                        el: '#swiper03 .swiper-pagination',
                        type: 'fraction',
                      }"
                      :navigation="{
                        nextEl: '#swiper03 .swiper-button-next',
                        prevEl: '#swiper03 .swiper-button-prev',
                      }"
                    >
                      <SwiperSlide v-for="slide in 10" :key="slide">
                        <strong><img src="https://picsum.photos/680/378" alt="" /></strong>
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
                          <label>스튜디오 선택</label>
                          <div class="ibk-radio ibk-radio--type2 ibk-radio--grid1">
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                              <label for="radio1" class="ml-2">IBK 스튜디오 1</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                              <label for="radio2" class="ml-2">IBK 스튜디오 2</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                              <label for="radio3" class="ml-2">IBK 스튜디오 3</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio4" value="radio4" />
                              <label for="radio4" class="ml-2">IBK 스튜디오 4</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="field">
                          <label>유형 선택</label>
                          <Select
                            v-model="selected01"
                            :options="selected01Option"
                            optionLabel="name"
                            placeholder="선택"
                            class="w-full"
                            size="large"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="pc">
                          <div class="field">
                            <label>예약일시 선택</label>
                            <div class="ibk-datepicker">
                              <div class="ibk-datepicker-item" :class="{ active: reservationDate }">
                                <div class="ibk-datepicker-item-input" @click="toggle">
                                  <p>예약일시 선택</p>
                                  <strong
                                    >{{ reservationDate }}
                                    <span
                                      >· {{ inAmPm }} {{ reservationDateInTime }} - {{ outAmPm }}
                                      {{ reservationDateOutTime }}</span
                                    ></strong
                                  >
                                </div>
                              </div>
                              <Popover ref="op">
                                <div class="ibk-calendar">
                                  <div class="ibk-calendar-body">
                                    <div class="ibk-calendar-calendar">
                                      <VueDatePicker
                                        v-model="dateRange02"
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
                                            <RadioButton
                                              v-model="calendarRadio"
                                              :inputId="'calendarRadio' + (index + 1)"
                                              name="calendarRadio"
                                              :value="'calendarRadio' + (index + 1)"
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
                                        {{ reservationDateText }}
                                      </div>
                                      <div class="ibk-calendar-foot-text__time">
                                        <p>{{ inAmPm }} {{ reservationDateInTime }}</p>
                                        <span>-</span>
                                        <p>{{ outAmPm }} {{ reservationDateOutTime }}</p>
                                      </div>
                                    </div>
                                    <Button label="예약하기" severity="primary" />
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
                              <div class="ibk-datepicker-item" :class="{ active: reservationDate }">
                                <div class="ibk-datepicker-item-input" @click="modal05 = true">
                                  <p>예약일시 선택</p>
                                  <strong
                                    >{{ reservationDate }}
                                    <span
                                      >· {{ inAmPm }} {{ reservationDateInTime }} - {{ outAmPm }}
                                      {{ reservationDateOutTime }}</span
                                    ></strong
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ibk-apply-form-info-form__button">
                      <Button label="검색" severity="primary" size="large" class="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-form-summary">
                <div class="ibk-apply-form-summary__title">스튜디오 소개</div>
                <div class="ibk-apply-form-summary__contents">
                  <p>
                    작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이
                    노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된 내용이 노출됩니다. 작성된
                    내용이 노출됩니다. 작성된 내용이 노출됩니다.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수원 이용 신청하기</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>나의 점수</th>
                  <td colspan="3">100점</td>
                </tr>
                <tr>
                  <th>장소</th>
                  <td>휴양동</td>
                  <th>입실일자</th>
                  <td>2028.01.01. 월요일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>나의 점수</th>
                </tr>
                <tr>
                  <td>100점</td>
                </tr>
                <tr>
                  <th>강의실</th>
                </tr>
                <tr>
                  <td>강의실 명</td>
                </tr>
                <tr>
                  <th>예약일시</th>
                </tr>
                <tr>
                  <td>2028.01.01・10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">이용기간 선택</div>
        </div>
        <div class="ibk-dialog-apply-form">
          <div class="ibk-dialog-apply-form-select">
            <Select class="w-full" size="large" />
          </div>
          <div class="ibk-dialog-apply-form-caution">
            신청 진행 중입니다. 아래 세부 정보 입력후 [최종 신청] 하셔야 신청이 완료됩니다.<br />
            ※ 동반가족 필수 입력 (입력된 가족 외 입소 제한)
          </div>
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>입소자 명단</label>
                <div class="ibk-dialog-apply-form-search">
                  <div class="ibk-dialog-apply-form-search-input">
                    <InputText type="text" size="large" class="w-full" />
                    <Button label="추가" severity="primary" size="large" />
                  </div>
                  <div class="ibk-dialog-apply-form-search-list">
                    <Chip label="이기은" removable />
                    <Chip label="이은행" removable />
                    <Chip label="이기업" removable />
                    <Chip label="이은기" removable />
                    <Chip label="김연지" removable />
                    <Chip label="이기은" removable />
                    <Chip label="이은행" removable />
                    <Chip label="이기업" removable />
                    <Chip label="이은기" removable />
                    <Chip label="김연지" removable />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비상연락망</label>
                <div>
                  <InputText type="text" size="large" placeholder="비상연락망을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>차량번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="차량번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비고</label>
                <div>
                  <InputText type="text" size="large" placeholder="내용을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 입소정원은 5명, 차량은 1대만 이용 가능합니다.</p>
          <p>2. 수건등 세면도구는 지원되지 않으니 지참하시기 바랍니다.</p>
          <p>3. 미혼직원의 경우 부모님 동반 또는 동성(同性)의 동료 직원 동반시에만 입소 가능합니다.</p>
          <p>4. 애원동물 동반입소 금지합니다.</p>
          <p>5. 입소(16:00-24:00) 퇴소 (10:00) 시간을 준수합니다. (자정이후 입소불가)</p>
          <p>6. 신청 후 3회 취소 시 1회 이용으로 간주되오니 신중히 신청합니다.</p>
          <p>7. 취소적용기준 및 사용제한 (당일취소, 무단불참, 본인불참, 객실미정리)에 대하여 숙지하였습니다.</p>
          <p>※ 당일취소란? 입소당일 휴일 입소인 경우 직전영업일</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-agree">
        <div class="ibk-dialog-apply-agree-check">
          <Checkbox inputId="agree" />
          <label for="agree" class="ml-2"> 상기내용을 숙지하였으며 동의합니다 </label>
        </div>
        <p>* 필히 유의사항을 숙지 후 체크해주시기 바랍니다.</p>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="다음" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-apply__title">강의실 이용 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>강의실</th>
                  <td>강의실 명</td>
                  <th>예약일시</th>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>강의실</th>
                </tr>
                <tr>
                  <td>강의실 명</td>
                </tr>
                <tr>
                  <th>예약일시</th>
                </tr>
                <tr>
                  <td>2028.01.01・10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-form">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>참석 인원</label>
                <div class="ibk-dialog-apply-form-search">
                  <div class="ibk-dialog-apply-form-search-input">
                    <InputText type="text" size="large" class="w-full" placeholder="사번을 입력해주세요" />
                    <Button label="검색" severity="primary" size="large" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>검색결과</label>

                <div class="pc">
                  <div class="ibk-dialog-apply-list__table">
                    <table>
                      <colgroup>
                        <col style="width: 80px" />
                        <col style="width: 100px" />
                        <col style="width: 186px" />
                        <col style="width: 177px" />
                        <col style="width: 177px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">선택</th>
                          <th class="text-center">직원번호</th>
                          <th class="text-left">소속</th>
                          <th class="text-left">직급</th>
                          <th class="text-left">성명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(row, index) in rows"
                          :key="index"
                          :class="{ active: selectedValue === row.value }"
                          @click="selectRow(row.value)"
                        >
                          <td class="text-center">
                            <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                          </td>
                          <td class="text-center">{{ row.id }}</td>
                          <td class="text-left">{{ row.organization }}</td>
                          <td class="text-left">{{ row.level }}</td>
                          <td class="text-left">{{ row.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="mo">
                  <div class="ibk-dialog-apply-list__list">
                    <ul>
                      <li
                        v-for="(row, index) in rows"
                        :key="index"
                        :class="{ active: selectedValue === row.value }"
                        @click="selectRow(row.value)"
                      >
                        <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                        <table>
                          <tbody>
                            <tr>
                              <th>직원번호</th>
                              <td>{{ row.id }}</td>
                            </tr>
                            <tr>
                              <th>소속</th>
                              <td>{{ row.organization }}</td>
                            </tr>
                            <tr>
                              <th>직급</th>
                              <td>{{ row.level }}</td>
                            </tr>
                            <tr>
                              <th>성명</th>
                              <td>{{ row.name }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12">
              <div class="field">
                <label>신청자 생년월일</label>
                <div>
                  <InputText type="text" size="large" placeholder="생년월일을 입력해주세요. ex.900101" class="w-full" />
                </div>
              </div>
            </div> -->
            <div class="col-12">
              <div class="field">
                <label>사용인원</label>
                <div>
                  <InputText type="text" size="large" placeholder="사용인원을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>사무실 전화번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="사무실 전화번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>휴대폰 번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="휴대폰 번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비고</label>
                <div>
                  <InputText type="text" size="large" placeholder="내용을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 입소정원은 5명, 차량은 1대만 이용 가능합니다.</p>
          <p>2. 수건등 세면도구는 지원되지 않으니 지참하시기 바랍니다.</p>
          <p>3. 미혼직원의 경우 부모님 동반 또는 동성(同性)의 동료 직원 동반시에만 입소 가능합니다.</p>
          <p>4. 애원동물 동반입소 금지합니다.</p>
          <p>5. 입소(16:00-24:00) 퇴소 (10:00) 시간을 준수합니다. (자정이후 입소불가)</p>
          <p>6. 신청 후 3회 취소 시 1회 이용으로 간주되오니 신중히 신청합니다.</p>
          <p>7. 취소적용기준 및 사용제한 (당일취소, 무단불참, 본인불참, 객실미정리)에 대하여 숙지하였습니다.</p>
          <p>※ 당일취소란? 입소당일 휴일 입소인 경우 직전영업일</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-agree">
        <div class="ibk-dialog-apply-agree-check">
          <Checkbox inputId="agree" />
          <label for="agree" class="ml-2"> 상기내용을 숙지하였으며 동의합니다 </label>
        </div>
        <p>* 필히 유의사항을 숙지 후 체크해주시기 바랍니다.</p>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="다음" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">스튜디오 이용 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>스튜디오</th>
                  <td>스튜디오 명</td>
                  <th>예약일시</th>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>본부・ 인재개발 ・ 김기은</td>
                </tr>
                <tr>
                  <th>스튜디오</th>
                </tr>
                <tr>
                  <td>스튜디오 명</td>
                </tr>
                <tr>
                  <th>예약일시</th>
                </tr>
                <tr>
                  <td>2028.01.01・10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-form">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>참석 인원</label>
                <div class="ibk-dialog-apply-form-search">
                  <div class="ibk-dialog-apply-form-search-input">
                    <InputText type="text" size="large" class="w-full" placeholder="사번을 입력해주세요" />
                    <Button label="검색" severity="primary" size="large" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>검색결과</label>
                <div class="pc">
                  <div class="ibk-dialog-apply-list__table">
                    <table>
                      <colgroup>
                        <col style="width: 80px" />
                        <col style="width: 100px" />
                        <col style="width: 186px" />
                        <col style="width: 177px" />
                        <col style="width: 177px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">선택</th>
                          <th class="text-center">직원번호</th>
                          <th class="text-left">소속</th>
                          <th class="text-left">직급</th>
                          <th class="text-left">성명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(row, index) in rows"
                          :key="index"
                          :class="{ active: selectedValue === row.value }"
                          @click="selectRow(row.value)"
                        >
                          <td class="text-center">
                            <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                          </td>
                          <td class="text-center">{{ row.id }}</td>
                          <td class="text-left">{{ row.organization }}</td>
                          <td class="text-left">{{ row.level }}</td>
                          <td class="text-left">{{ row.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="mo">
                  <div class="ibk-dialog-apply-list__list">
                    <ul>
                      <li
                        v-for="(row, index) in rows"
                        :key="index"
                        :class="{ active: selectedValue === row.value }"
                        @click="selectRow(row.value)"
                      >
                        <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                        <table>
                          <tbody>
                            <tr>
                              <th>직원번호</th>
                              <td>{{ row.id }}</td>
                            </tr>
                            <tr>
                              <th>소속</th>
                              <td>{{ row.organization }}</td>
                            </tr>
                            <tr>
                              <th>직급</th>
                              <td>{{ row.level }}</td>
                            </tr>
                            <tr>
                              <th>성명</th>
                              <td>{{ row.name }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12">
              <div class="field">
                <label>신청자 생년월일</label>
                <div>
                  <InputText type="text" size="large" placeholder="생년월일을 입력해주세요. ex.900101" class="w-full" />
                </div>
              </div>
            </div> -->
            <div class="col-12">
              <div class="field">
                <label>사용인원</label>
                <div>
                  <InputText type="text" size="large" placeholder="사용인원을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>사무실 전화번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="사무실 전화번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>휴대폰 번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="휴대폰 번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>비고</label>
                <div>
                  <InputText type="text" size="large" placeholder="내용을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 입소정원은 5명, 차량은 1대만 이용 가능합니다.</p>
          <p>2. 수건등 세면도구는 지원되지 않으니 지참하시기 바랍니다.</p>
          <p>3. 미혼직원의 경우 부모님 동반 또는 동성(同性)의 동료 직원 동반시에만 입소 가능합니다.</p>
          <p>4. 애원동물 동반입소 금지합니다.</p>
          <p>5. 입소(16:00-24:00) 퇴소 (10:00) 시간을 준수합니다. (자정이후 입소불가)</p>
          <p>6. 신청 후 3회 취소 시 1회 이용으로 간주되오니 신중히 신청합니다.</p>
          <p>7. 취소적용기준 및 사용제한 (당일취소, 무단불참, 본인불참, 객실미정리)에 대하여 숙지하였습니다.</p>
          <p>※ 당일취소란? 입소당일 휴일 입소인 경우 직전영업일</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-agree">
        <div class="ibk-dialog-apply-agree-check">
          <Checkbox inputId="agree" />
          <label for="agree" class="ml-2"> 상기내용을 숙지하였으며 동의합니다 </label>
        </div>
        <p>* 필히 유의사항을 숙지 후 체크해주시기 바랍니다.</p>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
        <Button label="다음" severity="primary" size="large" class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
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
        ></VueDatePicker>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal04 = false" />
        <Button label="적용" severity="primary" size="large" class="w-full" @click="modal04 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal05" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal05 = false" />
      </div>
      <div class="ibk-dialog-apply__title">예약일시 선택</div>
    </template>
    <div class="ibk-calendar">
      <div class="ibk-calendar-body">
        <div class="ibk-calendar-calendar">
          <VueDatePicker
            v-model="dateRange02"
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
                <RadioButton
                  v-model="calendarRadio"
                  :inputId="'calendarRadio' + (index + 1)"
                  name="calendarRadio"
                  :value="'calendarRadio' + (index + 1)"
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
            {{ reservationDateText }}
          </div>
          <div class="ibk-calendar-foot-text__time">
            <p>{{ inAmPm }} {{ reservationDateInTime }}</p>
            <span>-</span>
            <p>{{ outAmPm }} {{ reservationDateOutTime }}</p>
          </div>
        </div>
        <Button label="예약하기" severity="primary" />
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal05 = false" />
        <Button label="적용" severity="primary" size="large" class="w-full" @click="modal05 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="연수원 이용 신청하기"></Button><br /><br />
    <Button @click="modal02 = true" label="강의실 이용 신청"></Button><br /><br />
    <Button @click="modal03 = true" label="스튜디오 이용 신청"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
const modal04 = ref(false);
const modal05 = ref(false);

const selected01 = ref();
const selected01Option = ref([
  { name: '휴양동 5인' },
  { name: '휴양동 2인' },
  { name: '숙소동 1실' },
  { name: '숙소동 2실' },
]);

const radio = ref('radio1');

//연수원 투숙기간 선택
const dateRange01 = ref([]);
const datepicker01 = ref<DatePickerInstance>(null);

const openDatePicker01 = () => {
  if (datepicker01) {
    datepicker01.value.openMenu();
  }
};

const dateRange01checkInDate = ref('');
const dateRange01checkOutDate = ref('');

watch(dateRange01, (newDates) => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  if (newDates.length >= 1 && newDates[0] instanceof Date) {
    dateRange01checkInDate.value = formatDate(newDates[0]);
  }

  if (newDates.length === 2 && newDates[1] instanceof Date) {
    dateRange01checkOutDate.value = formatDate(newDates[1]);
  }

  if (newDates.length === 0) {
    dateRange01checkInDate.value = '';
    dateRange01checkOutDate.value = '';
  }
});

//강의실,스튜디오 투숙기간 선택
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const dateRange02 = ref();
const reservationDate = ref('');
const reservationDateText = ref('');
const reservationDateInTime = ref('');
const reservationDateOutTime = ref('');
const inAmPm = ref('');
const outAmPm = ref('');
const calendarRadio = ref();

watch(dateRange02, (newDates) => {
  // console.log(11);
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

  reservationDate.value = formatDate(newDates);
  reservationDateText.value = formattedDate(newDates);
});

const calendarItems = [
  { time: '09:00-10:00', isReserved: true },
  { time: '10:00-11:00', isReserved: true },
  { time: '11:00-12:00', isReserved: false },
  { time: '12:00-13:00', isReserved: false },
  { time: '13:00-14:00', isReserved: false },
  { time: '14:00-15:00', isReserved: false },
  { time: '15:00-16:00', isReserved: false },
  { time: '16:00-17:00', isReserved: false },
  { time: '17:00-18:00', isReserved: false },
  { time: '18:00-19:00', isReserved: false },
];

const convertTo12Hour = (time) => {
  let [hour, minute] = time.split(':').map(Number);
  const ampm = hour >= 12 ? '오후' : '오전';

  hour = hour % 12 || 12;
  return { time: `${hour}:${minute < 10 ? '0' + minute : minute}`, ampm };
};

const handleSelection = (item) => {
  if (!item.isReserved) {
    const [startTime, endTime] = item.time.split('-');
    const { time: start12Hour, ampm: startAmPm } = convertTo12Hour(startTime);
    const { time: end12Hour, ampm: endAmPm } = convertTo12Hour(endTime);

    reservationDateInTime.value = start12Hour;
    reservationDateOutTime.value = end12Hour;
    inAmPm.value = startAmPm;
    outAmPm.value = endAmPm;
  }
};

//강의실 이용 신청
// 테이블 행 데이터
const rows = ref([
  {
    value: 'radio1',
    id: 202457,
    organization: '소속명 노출',
    level: 2,
    name: '김기은',
  },
  {
    value: 'radio2',
    id: 202458,
    organization: '소속명 노출',
    level: 3,
    name: '이철수',
  },
  {
    value: 'radio3',
    id: 202459,
    organization: '소속명 노출',
    level: 1,
    name: '박영희',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref
const selectedValue = ref(null);

// td 클릭 시 해당 행의 라디오 버튼을 선택하는 함수
const selectRow = (value) => {
  selectedValue.value = value;
};
</script>
