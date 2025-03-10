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
                              <label for="radio2" class="ml-2">연수차휴양동</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="pc">
                          <div class="field">
                            <label>투숙기간 선택</label>
                            <DatePicker
                              v-model="dates01"
                              selectionMode="range"
                              :manualInput="false"
                              :numberOfMonths="2"
                              ref="datePickerRef"
                              dateFormat="yy/mm/dd"
                            />
                            <div class="ibk-datepicker ibk-datepicker--range">
                              <div class="ibk-datepicker-item" :class="{ active: checkInDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker">
                                  <p>입실 날짜 선택</p>
                                  <strong>입실 {{ checkInDate }}</strong>
                                </div>
                              </div>
                              <div class="ibk-datepicker-item" :class="{ active: checkOutDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker">
                                  <p>퇴실 날짜 선택</p>
                                  <strong>퇴실 {{ checkOutDate }}</strong>
                                </div>
                              </div>
                              <div class="ibk-datepicker-input">
                                <DatePicker
                                  v-model="dates01"
                                  selectionMode="range"
                                  :manualInput="false"
                                  :numberOfMonths="2"
                                  ref="datePickerRef"
                                  dateFormat="yy/mm/dd"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mo">
                          <div class="field">
                            <label>투숙기간 선택</label>
                            <div class="ibk-datepicker ibk-datepicker--range" @click="modal04 = true">
                              <div class="ibk-datepicker-item" :class="{ active: checkInDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker">
                                  <p>입실 날짜 선택</p>
                                  <strong>입실 {{ checkInDate }}</strong>
                                </div>
                              </div>
                              <div class="ibk-datepicker-item" :class="{ active: checkOutDate }">
                                <div class="ibk-datepicker-item-input" @click="openDatePicker">
                                  <p>퇴실 날짜 선택</p>
                                  <strong>퇴실 {{ checkOutDate }}</strong>
                                </div>
                              </div>
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
                  <p>
                    휴양동 신청 취소는 입실 2주전까지 휴양동 신청내역 페이지에서 직접 취소 가능합니다. <br />
                    사전 연락 없이 미입실 하는 경우 스코어링 시스템에 의거 별점이 부여됩니다. <br />
                    반드시 신청직원 본인이 입실해야 합니다. (주민등록증 또는 직원신분층을 지참)
                  </p>
                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 260px" />
                        <col style="width: 260px" />
                        <col style="width: 260px" />
                        <col style="width: 260px" />
                        <col style="width: 260px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>이용시점</th>
                          <th>이용시점</th>
                          <th>이용시점</th>
                          <th>이용시점</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>차감점수</th>
                          <td>1회(△15점)</td>
                          <td>△15점→△10점</td>
                          <td>△15점→△5점</td>
                          <td>△5점→△0점</td>
                        </tr>
                        <tr>
                          <th>개인점수</th>
                          <td>85점</td>
                          <td>90점</td>
                          <td>95점</td>
                          <td>100점</td>
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
                              <label for="radio1" class="ml-2">강의실 1</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                              <label for="radio2" class="ml-2">강의실 2</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                              <label for="radio3" class="ml-2">강의실 3</label>
                            </div>
                            <div class="ibk-radio-item">
                              <RadioButton v-model="radio" inputId="radio4" value="radio4" />
                              <label for="radio4" class="ml-2">강의실 4</label>
                            </div>
                          </div>
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
                                      <DatePicker v-model="dates02" inline />
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
                                              <!-- 예약 완료된 경우 del 태그로 취소선 -->
                                              <span v-else>{{ item.time }}</span>
                                              <!-- 예약 가능 경우 그냥 시간 표시 -->
                                            </label>
                                          </p>
                                          <span :class="item.isReserved ? '' : 'text-primary'">
                                            {{ item.isReserved ? '예약완료' : '예약가능' }}
                                            <!-- 예약 상태에 따라 텍스트 변경 -->
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
                              <div class="ibk-datepicker-item">
                                <div class="ibk-datepicker-item-input" @click="modal05 = true">
                                  <p>예약일시 선택</p>
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
                                      <DatePicker v-model="dates02" inline />
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
                                              <!-- 예약 완료된 경우 del 태그로 취소선 -->
                                              <span v-else>{{ item.time }}</span>
                                              <!-- 예약 가능 경우 그냥 시간 표시 -->
                                            </label>
                                          </p>
                                          <span :class="item.isReserved ? '' : 'text-primary'">
                                            {{ item.isReserved ? '예약완료' : '예약가능' }}
                                            <!-- 예약 상태에 따라 텍스트 변경 -->
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
                              <div class="ibk-datepicker-item">
                                <div class="ibk-datepicker-item-input" @click="modal05 = true">
                                  <p>예약일시 선택</p>
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
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-form">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>신청자</label>
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
                      <tr>
                        <td class="text-center"><RadioButton v-model="radio02" value="1" variant="filled" /></td>
                        <td class="text-center">202457</td>
                        <td class="text-left">소속명 노출</td>
                        <td class="text-left">2</td>
                        <td class="text-left">김기은</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>신청자 생년월일</label>
                <div>
                  <InputText type="text" size="large" placeholder="생년월일을 입력해주세요. ex.900101" class="w-full" />
                </div>
              </div>
            </div>
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

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-apply__title">투숙기간 선택</div>
    </template>
    <div class="ibk-date-select">
      <div class="ibk-date-select-head">
        <div class="ibk-date-select-head-item">
          <p>입실 날짜 선택</p>
          <strong></strong>
        </div>
        <div class="ibk-date-select-head-item">
          <p>퇴실 날짜 선택</p>
          <strong></strong>
        </div>
      </div>
      <div class="ibk-date-select-body">
        <DatePicker v-model="date" inline selectionMode="range" :numberOfMonths="12" />
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
          <DatePicker v-model="date" inline />
        </div>
        <div class="ibk-calendar-list">
          <ul>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio1"
                  name="calendarRadio"
                  value="calendarRadio1"
                />
                <label for="calendarRadio1"><del>12:00-13:00</del></label>
              </p>
              <span>예약완료</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio2"
                  name="calendarRadio"
                  value="calendarRadio2"
                />
                <label for="calendarRadio2"><del>12:00-13:00</del></label>
              </p>
              <span>예약완료</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio3"
                  name="calendarRadio"
                  value="calendarRadio3"
                />
                <label for="calendarRadio3">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio4"
                  name="calendarRadio"
                  value="calendarRadio4"
                />
                <label for="calendarRadio4">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio5"
                  name="calendarRadio"
                  value="calendarRadio5"
                />
                <label for="calendarRadio5">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio6"
                  name="calendarRadio"
                  value="calendarRadio6"
                />
                <label for="calendarRadio6">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio7"
                  name="calendarRadio"
                  value="calendarRadio7"
                />
                <label for="calendarRadio7">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio8"
                  name="calendarRadio"
                  value="calendarRadio8"
                />
                <label for="calendarRadio8">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio9"
                  name="calendarRadio"
                  value="calendarRadio9"
                />
                <label for="calendarRadio9">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
            <li>
              <p>
                <RadioButton
                  v-model="calendarRadio"
                  inputId="calendarRadio10"
                  name="calendarRadio"
                  value="calendarRadio10"
                />
                <label for="calendarRadio10">12:00-13:00</label>
              </p>
              <span class="text-primary">예약가능</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-calendar-foot">
        <div class="ibk-calendar-foot-text">
          10월 22일 화요일
          <div class="ibk-calendar-foot-text__time">
            <p>오후 12:00</p>
            <span>-</span>
            <p>오후 13:00</p>
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
    <Button @click="modal01 = true" label="연수 신청하기"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

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

const radio = ref('');

const radio02 = ref(null);

import { ref, watch } from 'vue';

const calendarRadio = ref();

// 날짜 범위를 저장하는 reactive 변수
const dates01 = ref([]);

// 입실 날짜와 퇴실 날짜
const checkInDate = ref('');
const checkOutDate = ref('');

// DatePicker의 참조
const datePickerRef = ref(null);

// InputText 클릭 시 DatePicker 열기
const openDatePicker = () => {
  const inputElement = datePickerRef.value?.$el.querySelector('input');
  if (inputElement) {
    inputElement.focus(); // DatePicker의 내부 input에 포커스하여 달력을 열기
  }
};

// 날짜 선택 시 입실, 퇴실 날짜에 자동 반영
watch(dates01, (newDates) => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  if (newDates.length >= 1 && newDates[0] instanceof Date) {
    checkInDate.value = formatDate(newDates[0]); // 첫 번째 날짜 입력
  }

  if (newDates.length === 2 && newDates[1] instanceof Date) {
    checkOutDate.value = formatDate(newDates[1]); // 두 번째 날짜 입력
  }

  if (newDates.length === 0) {
    checkInDate.value = '';
    checkOutDate.value = '';
  }
});

const date = ref();

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

const dates02 = ref();
const reservationDate = ref('');
const reservationDateText = ref('');
const reservationDateInTime = ref(''); // 선택된 시간의 시작 시간
const reservationDateOutTime = ref(''); // 선택된 시간의 종료 시간
const inAmPm = ref(''); // 시작 시간이 오전인지 오후인지
const outAmPm = ref(''); // 종료 시간이 오전인지 오후인지

watch(dates02, (newDates) => {
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

// 시간 슬롯 목록과 예약 여부
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

// 24시간제를 12시간제로 변환하는 함수
const convertTo12Hour = (time) => {
  let [hour, minute] = time.split(':').map(Number);
  const ampm = hour >= 12 ? '오후' : '오전'; // 12시 이상이면 오후, 그 미만이면 오전

  // 12시간제로 변환
  hour = hour % 12 || 12; // 12시나 24시는 12로 표시
  return { time: `${hour}:${minute < 10 ? '0' + minute : minute}`, ampm }; // 12시간제 형식 반환
};

// 라디오 버튼 선택 시 호출되는 함수
const handleSelection = (item) => {
  if (!item.isReserved) {
    const [startTime, endTime] = item.time.split('-'); // 선택된 시간의 시작, 종료 시간을 나눔
    const { time: start12Hour, ampm: startAmPm } = convertTo12Hour(startTime); // 시작 시간을 12시간제로 변환
    const { time: end12Hour, ampm: endAmPm } = convertTo12Hour(endTime); // 종료 시간을 12시간제로 변환

    reservationDateInTime.value = start12Hour;
    reservationDateOutTime.value = end12Hour;
    inAmPm.value = startAmPm;
    outAmPm.value = endAmPm;
  }
};
</script>
