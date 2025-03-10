<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>역량개발지원</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청내역 확인" outlined rounded icon="ibk-icon-16-doc" @click="goDetail" />
        </div>
      </div>
      <Tabs :value="tab">
        <TabList>
          <Tab value="course" @click="changeTab('course')">학원수강(응시)료</Tab>
          <Tab value="license" @click="changeTab('license')">자격증현황</Tab>
          <Tab value="language" @click="changeTab('language')">어학성적</Tab>
          <Tab value="expense" @click="changeTab('expense')">학자금</Tab>
          <Tab value="scholarship" @click="changeTab('scholarship')">학술연수신청</Tab>
          <Tab value="roadMap" @click="changeTab('roadMap')">스킬지수&로드맵</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="course">
            <CourseRegister/>
          </TabPanel>
          <TabPanel value="license">
            <LicenseRegister/>
          </TabPanel>
          <TabPanel value="language">
            <LanguageRegister/>
          </TabPanel>
          <TabPanel value="expense">
            <ExpenseRegister/>
          </TabPanel>
          <TabPanel value="scholarship">
            <ScholarshipRegister/>
          </TabPanel>
          <TabPanel value="roadMap">
            <RoadMap v-if="tab === 'roadMap'"/>
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
      <div class="ibk-dialog-apply__title">지원 현황</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">학원수강료 승인현황</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 48px" />
              <col style="width: 64px" />
              <col style="width: 160px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 178px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>신청분기</th>
                <th>과정명</th>
                <th>교육기관</th>
                <th>수강료</th>
                <th>지급예정금액</th>
                <th>연수기간</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i of 4">
                <td class="text-center">{{ i }}</td>
                <td class="text-center">1분기</td>
                <td class="text-center">
                  <strong>IBK 가계여신실무</strong>
                </td>
                <td class="text-center">IBK사이버</td>
                <td class="text-center">45,000원</td>
                <td class="text-center">0</td>
                <td class="text-center">2025.06.00 - 2025.07.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="7">
                  <div class="ibk-table-price">
                    <p>총 지급 예상금액</p>
                    <strong> 26,000원 </strong>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="ibk-info">
          <p>어학과정 지원금 누적현황 : 71,000(50만원 초과 시 어학 성적표 제출 필수)</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">시험응시료 승인현황</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 48px" />
              <col style="width: 64px" />
              <col style="width: 160px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 88px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>분야</th>
                <th>취득자격명</th>
                <th>응시료</th>
                <th>지급예정금액</th>
                <th>취득일자</th>
                <th>신청일자</th>
                <th>처리상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i of 2">
                <td class="text-center">{{ i }}</td>
                <td class="text-center">퇴직연금</td>
                <td class="text-center">
                  <strong>취득자격명 노출</strong>
                </td>
                <td class="text-center">45,000원</td>
                <td class="text-center">45,000원</td>
                <td class="text-center">2025.06.00</td>
                <td class="text-center">2025.06.00</td>
                <td class="text-center text-primary">완료</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="8">
                  <div class="ibk-table-price">
                    <p>총 지급 예상금액</p>
                    <strong>90,000원 </strong>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-apply__title">지원금 신청</div>
    </template>
    <Tabs value="0">
      <TabList>
        <Tab value="0">학원 수강료</Tab>
        <Tab value="1">시험 응시료</Tab>
        <Tab value="2">재취업 · 창업</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="ibk-dialog-apply-contents">
            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
              </div>
              <div class="grid">
                <div class="col-12">
                  <div class="field">
                    <label>신청자 정보</label>
                    <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>수강방식</label>
                    <div class="ibk-radio">
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                        <label for="radio1" class="ml-2">온라인</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                        <label for="radio2" class="ml-2">오프라인</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>수강분야</label>
                    <div class="ibk-radio">
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                        <label for="radio1" class="ml-2">어학</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                        <label for="radio2" class="ml-2">은행실무</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>교육기관명</label>
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
                      <label>수강기간</label>
                      <div class="ibk-datepicker ibk-datepicker--range">
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                          <div
                            class="ibk-datepicker-item-input ibk-datepicker-item-input--start"
                            @click="openDatePicker01"
                          >
                            <p>시작일자 선택</p>
                            <strong>시작일자 {{ dateRange01checkInDate }}</strong>
                          </div>
                        </div>
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                          <div
                            class="ibk-datepicker-item-input ibk-datepicker-item-input--start"
                            @click="openDatePicker01"
                          >
                            <p>종료일자 선택</p>
                            <strong>종료일자 {{ dateRange01checkOutDate }}</strong>
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
                      <label>수강기간</label>
                      <div class="ibk-datepicker ibk-datepicker--range" @click="modal00 = true">
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                          <div class="ibk-datepicker-item-input">
                            <p>시작일자 선택</p>
                            <strong>시작 {{ dateRange01checkInDate }}</strong>
                          </div>
                        </div>
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                          <div class="ibk-datepicker-item-input">
                            <p>종료일자 선택</p>
                            <strong>종료 {{ dateRange01checkOutDate }}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-6 col-12">
                  <div class="field">
                    <label>신청분기</label>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                </div>
                <div class="lg:col-6 col-12">
                  <div class="field">
                    <label>분기 자동 한도</label>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>학원비(수강료)</label>
                    <div class="ibk-dialog-apply-item-search">
                      <InputText type="text" size="large" class="w-full" />
                      <Button label="복지비 내역조회" severity="primary" size="large" />
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
                      <InputText type="text" size="large" class="w-full" placeholder="카드번호를 입력해주세요." />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>승인번호</label>
                      <InputText type="text" size="large" class="w-full" placeholder="승인번호를 입력해주세요." />
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
                  <FileUpload
                    name="demo[]"
                    url="/api/upload"
                    @upload="onAdvancedUpload($event)"
                    :multiple="true"
                    accept="image/*"
                    :maxFileSize="1000000"
                  >
                    <template #empty>
                      <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
                    </template>
                  </FileUpload>
                </div>
              </div>
            </div>
            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">2</strong></div>
              </div>
              <div class="ibk-write-list-file">
                <ul>
                  <li v-for="i of 3">
                    <NuxtLink to="/" class="ibk-write-list-file__text">
                      <!-- <i class="ibk-icon-24-folder"></i> -->
                      <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                      <strong>1.0MB</strong>
                    </NuxtLink>
                    <div class="ibk-write-list-file__delete">
                      <Button icon="ibk-icon-24-close" link rounded />
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
        <TabPanel value="1">
          <div class="ibk-dialog-apply-contents">
            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
              </div>
              <div class="grid">
                <div class="col-12">
                  <div class="field">
                    <label>신청자 정보</label>
                    <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <div class="ibk-dialog-apply-item-sub-head">
                      <label>취득자격증</label>
                    </div>
                    <div class="ibk-dialog-apply-item-search">
                      <InputText type="text" size="large" class="w-full" placeholder="취득자격증명을 입력해주세요." />
                      <Button label="취득자격증 검색" severity="primary" size="large" />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <div class="ibk-dialog-apply-item-sub-head">
                      <label>취득자격증</label>
                      <Button label="재선택" severity="secondary" outlined />
                    </div>
                    <div class="ibk-table ibk-table--scroll-x">
                      <table>
                        <colgroup>
                          <col style="width: 33%" />
                          <col style="width: 33%" />
                          <col style="width: 33%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>취득내역</th>
                            <th>분야</th>
                            <th>취득일자</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">2025.12.30</td>
                          </tr>
                          <tr>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">2025.12.30</td>
                          </tr>
                          <tr>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">정보노출</td>
                            <td class="text-center">2025.12.30</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>카드승인일자</label>
                    <div class="ibk-dialog-apply-item-search">
                      <DatePicker
                        v-model="dates"
                        selectionMode="range"
                        :manualInput="false"
                        class="w-full p-datepicker-lg"
                        placeholder="카드승인일자 선택"
                      />
                      <Button label="복지비 내역조회" severity="primary" size="large" />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>응시료(카드승인금액)</label>
                    <InputText type="text" size="large" class="w-full" placeholder="응시료를 입력해주세요." />
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
                      <InputText type="text" size="large" class="w-full" placeholder="카드번호를 입력해주세요." />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>승인번호</label>
                      <InputText type="text" size="large" class="w-full" placeholder="승인번호를 입력해주세요." />
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
                  <FileUpload
                    name="demo[]"
                    url="/api/upload"
                    @upload="onAdvancedUpload($event)"
                    :multiple="true"
                    accept="image/*"
                    :maxFileSize="1000000"
                  >
                    <template #empty>
                      <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
                    </template>
                  </FileUpload>
                </div>
              </div>
            </div>
            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">2</strong></div>
              </div>
              <div class="ibk-write-list-file">
                <ul>
                  <li v-for="i of 3">
                    <NuxtLink to="/" class="ibk-write-list-file__text">
                      <!-- <i class="ibk-icon-24-folder"></i> -->
                      <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                      <strong>1.0MB</strong>
                    </NuxtLink>
                    <div class="ibk-write-list-file__delete">
                      <Button icon="ibk-icon-24-close" link rounded />
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
        <TabPanel value="2">
          <div class="ibk-dialog-apply-contents">
            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
              </div>
              <div class="grid">
                <div class="col-12">
                  <div class="field">
                    <label>신청자 정보</label>
                    <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>수강방식</label>
                    <div class="ibk-radio">
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                        <label for="radio1" class="ml-2">온라인</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio2" value="radio2" />
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
                        <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                        <label for="radio1" class="ml-2">어학</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                        <label for="radio2" class="ml-2">은행실무</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio4" value="radio3" />
                        <label for="radio3" class="ml-2">재취업</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio5" value="radio4" />
                        <label for="radio4" class="ml-2">창업</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>교육기관명</label>
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
                  <div class="field">
                    <label>수강연수명</label>
                    <InputText type="text" size="large" class="w-full" placeholder="수강연수명을 입력해주세요." />
                  </div>
                </div>
                <div class="col-12">
                  <div class="pc">
                    <div class="field">
                      <label>수강기간</label>
                      <div class="ibk-datepicker ibk-datepicker--range">
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                          <div
                            class="ibk-datepicker-item-input ibk-datepicker-item-input--start"
                            @click="openDatePicker01"
                          >
                            <p>시작일자 선택</p>
                            <strong>시작일자 {{ dateRange01checkInDate }}</strong>
                          </div>
                        </div>
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                          <div
                            class="ibk-datepicker-item-input ibk-datepicker-item-input--start"
                            @click="openDatePicker01"
                          >
                            <p>종료일자 선택</p>
                            <strong>종료일자 {{ dateRange01checkOutDate }}</strong>
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
                      <label>수강기간</label>
                      <div class="ibk-datepicker ibk-datepicker--range" @click="modal00 = true">
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkInDate }">
                          <div class="ibk-datepicker-item-input">
                            <p>시작일자 선택</p>
                            <strong>시작 {{ dateRange01checkInDate }}</strong>
                          </div>
                        </div>
                        <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                          <div class="ibk-datepicker-item-input">
                            <p>종료일자 선택</p>
                            <strong>종료 {{ dateRange01checkOutDate }}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-6 col-12">
                  <div class="field">
                    <label>총 잔여한도</label>
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
                      <InputText type="text" size="large" class="w-full" />
                      <Button label="복지비 내역조회" severity="primary" size="large" />
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
                      <InputText type="text" size="large" class="w-full" placeholder="카드번호를 입력해주세요." />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>승인번호</label>
                      <InputText type="text" size="large" class="w-full" placeholder="승인번호를 입력해주세요." />
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
                  <FileUpload
                    name="demo[]"
                    url="/api/upload"
                    @upload="onAdvancedUpload($event)"
                    :multiple="true"
                    accept="image/*"
                    :maxFileSize="1000000"
                  >
                    <template #empty>
                      <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
                    </template>
                  </FileUpload>
                </div>
              </div>
            </div>
            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">2</strong></div>
              </div>
              <div class="ibk-write-list-file">
                <ul>
                  <li v-for="i of 3">
                    <NuxtLink to="/" class="ibk-write-list-file__text">
                      <!-- <i class="ibk-icon-24-folder"></i> -->
                      <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                      <strong>1.0MB</strong>
                    </NuxtLink>
                    <div class="ibk-write-list-file__delete">
                      <Button icon="ibk-icon-24-close" link rounded />
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
      </TabPanels>
    </Tabs>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal05" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal05 = false" />
      </div>
      <div class="ibk-dialog-apply__title">평가(어학)비 지원신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>평가구분</label>
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
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>평가명</label>
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
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>응시일자</label>
              <VueDatePicker
                v-model="dateRange01"
                :enable-time-picker="false"
                locale="ko"
                auto-apply
                :month-change-on-scroll="false"
                format="yyyy/MM/dd"
              ></VueDatePicker>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>평가장소</label>
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
            <div class="field">
              <label>만료일자</label>
              <VueDatePicker
                v-model="dateRange01"
                :enable-time-picker="false"
                locale="ko"
                auto-apply
                :month-change-on-scroll="false"
                format="yyyy/MM/dd"
              ></VueDatePicker>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>성적</label>
              <InputText type="text" size="large" class="w-full" placeholder="성적을 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>외국어 능력 등급</label>
              <InputText type="text" size="large" class="w-full" placeholder="외국어 능력 등급을 입력해주세요." />
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
            <FileUpload
              name="demo[]"
              url="/api/upload"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">2</strong></div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="i of 3">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <!-- <i class="ibk-icon-24-folder"></i> -->
                <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                <strong>1.0MB</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded />
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
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal05 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal05 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal05 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal06" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal06 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학자금 지원 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div
            class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line flex align-items-center justify-content-between"
          >
            신청정보
            <Button label="기지원 내역 불러오기" severity="secondary" outlined />
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>학위</label>
              <div class="ibk-radio ibk-radio--grid3">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">학사</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">석사</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                  <label for="radio3" class="ml-2">박사</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>학위과정</label>
              <Select
                v-model="selected01"
                :options="selected01Option"
                optionLabel="name"
                placeholder="학위과정 선택"
                class="w-full"
                size="large"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>학교명</label>
              <div class="ibk-dialog-apply-item-search">
                <InputText type="text" size="large" class="w-full" placeholder="학교명을 검색해주세요." />
                <Button label="검색" severity="primary" size="large" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>전공명</label>
              <InputText type="text" size="large" class="w-full" placeholder="전공명을 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>학기(학년)</label>
              <Select
                v-model="selected01"
                :options="selected01Option"
                optionLabel="name"
                placeholder="학기(학년)을 선택해주세요."
                class="w-full"
                size="large"
              />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>재학구분</label>
              <Select
                v-model="selected01"
                :options="selected01Option"
                optionLabel="name"
                placeholder="재학구분을 선택해주세요."
                class="w-full"
                size="large"
              />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>입학일</label>
              <VueDatePicker
                v-model="dateRange01"
                :enable-time-picker="false"
                locale="ko"
                auto-apply
                :month-change-on-scroll="false"
                format="yyyy/MM/dd"
                placeholder="입학일자 선택"
              ></VueDatePicker>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>졸업예정일</label>
              <VueDatePicker
                v-model="dateRange01"
                :enable-time-picker="false"
                locale="ko"
                auto-apply
                :month-change-on-scroll="false"
                format="yyyy/MM/dd"
                placeholder="졸업예정일자 선택"
              ></VueDatePicker>
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>직전학기 평점</label>
              <InputText type="text" size="large" class="w-full" placeholder="직전학기 평점을 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>직전학기 평균</label>
              <InputText type="text" size="large" class="w-full" placeholder="직전학기 평균을 입력해주세요." />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>수혜수 <span>금차 신청을 포함한 학자금 총 수혜 횟수</span></label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>등록금(A)</label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>장학금(B) <span> 금차 신청을 포함한 학자금 총 수혜 횟수</span></label>
              <InputText type="text" size="large" class="w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>납입금(A-B)</label>
              <InputText type="text" size="large" class="w-full" />
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
            <FileUpload
              name="demo[]"
              url="/api/upload"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">2</strong></div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="i of 3">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <!-- <i class="ibk-icon-24-folder"></i> -->
                <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                <strong>1.0MB</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded />
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
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal06 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal06 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal06 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal07" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal07 = false" />
      </div>
      <div class="ibk-dialog-apply__title">지원 현황</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">연수현황</div>
          <Select v-model="selected02" :options="selected02Option" optionLabel="name" placeholder="연도" />
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <thead>
              <th class="text-center">연수기관</th>
              <th class="text-center">지원분야</th>
              <th class="text-center">국가</th>
              <th class="text-center">전일제</th>
              <th class="text-center">기간</th>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><strong>연세대학교 정보 대학원</strong></td>
                <td class="text-center">주말제(디지털)</td>
                <td class="text-center">정보노출</td>
                <td class="text-center">Y</td>
                <td class="text-center">2025.06.00 - 2025.07.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">연수비 지원 현황</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <thead>
              <th class="text-center">순번</th>
              <th class="text-center">지급일</th>
              <th class="text-center">비용항목</th>
              <th class="text-center">지급금액(원)</th>
            </thead>
            <tbody>
              <tr v-for="i of 4">
                <td class="text-center">{{ i }}</td>
                <td class="text-center">2025.06.00</td>
                <td class="text-center">등록금</td>
                <td class="text-center">10,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" class="w-full" @click="modal07 = false" outlined />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal08" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal08 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학술연수 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 대리 ・ 5 ・ 김인재 ・ S12345</div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>지원분야</label>
              <div class="ibk-radio ibk-radio--grid3">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">전문분야(디지털)</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">전문분야(일반)</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                  <label for="radio3" class="ml-2">금융일반</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>지원형태</label>
              <div class="ibk-radio ibk-radio--grid1">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">국내전일</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">국내주말</label>
                </div>
                <div class="flex" style="gap: 8px">
                  <div class="ibk-radio-item">
                    <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                    <label for="radio3" class="ml-2">글로벌</label>
                  </div>
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
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">[참고] 분야별 연수 분야예시</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 104px" />
              <col style="width: 140px" />
              <col style="width: 476px" />
            </colgroup>
            <thead>
              <tr>
                <th colspan="2">구분</th>
                <th>연수기관</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center" colspan="2">국내전일</td>
                <td class="text-center">KAIST, 서울대, 연세대, 고려대 등</td>
              </tr>
              <tr>
                <td class="text-center" colspan="2">국내주말</td>
                <td class="text-center">인재개발부에서 정한 유수 대학(원)</td>
              </tr>
              <tr>
                <td class="text-center" rowspan="3">글로벌</td>
                <td class="text-center">일반지역</td>
                <td class="text-center">공인대학평가기관(Financial Times, QS)글로벌 뱅킹 50위 이외 대학(원)</td>
              </tr>
              <tr>
                <td class="text-center">전략지역(아시아)</td>
                <td class="text-center">당행 제휴대학 (베트남VNU, 인니 IPMI, 인도 IITD, 필리핀AIM)</td>
              </tr>
              <tr>
                <td class="text-center">전략지역(폴란드)</td>
                <td class="text-center">해당국가 5위 이내 대학(원)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">자기 소개 및 지원동기</div>
        </div>
        <Textarea class="w-full" />
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">
            어학, 행내/외 연수, 자격증 등 기타 자기 개발 내용
            <p>내용 제한 없이 개인의 경쟁력 향상을 위해 노력하고 있는 모든 내용을 기재</p>
          </div>
        </div>
        <Textarea class="w-full" />
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">
            지원분야 별 세부 학업계획
            <ul>
              <li>전문분야(디지털) : 세부 전공연수에 대한 학업계획 등</li>
              <li>
                전문분야(일반) : 본인이 지원하고자 하는 세부 전문분야(자산운용, 재무회계, 컴플라이언스, 1B 등)에 대한
                학업계획 등
              </li>
              <li>금융일반: IBK 미래경쟁력 강화를 위한 학업계획 등</li>
            </ul>
            <p class="text-red-500">
              * 지원형태 "글로벌" 지원자의 경우 해당지역 선택 배경, 학업 및 현지화 계획 등에 내해 함께 기술할 것
            </p>
          </div>
        </div>
        <Textarea class="w-full" />
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">수학 후 은행 연계 및 향후 기여 방안 등</div>
        </div>
        <Textarea class="w-full" />
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">
            외국어 성적 등록 안내
            <ul>
              <li>
                외국어 성적은 지원서 제출 마감일까지 등록 완료되어 인사정보시스템에서 조회가 되는 경우에 한해 인정
              </li>
              <li>역량개발 지원제도 운용기준 에서 정하고 있는 유효기간(2년) 內 공인어학성적 인정</li>
              <li>등록방법: 어학성적 등록방식 변경 안내! (인재개발부, 2022.3.17.) 문서참고</li>
              <li>사이버연수원(edu.ibk.co.kr) 접속 -> 역량개발지원 -> 어학성적제출</li>
            </ul>
          </div>
        </div>
        <Textarea class="w-full" />
      </div>

      <div class="ibk-board-detail-file">
        <h3>첨부파일 <strong>3</strong></h3>
        <ul>
          <li>
            <NuxtLink to="/" class="ibk-board-detail-file__text">
              <i class="ibk-icon-24-download"></i>
              <div>
                <p>Dashboard prototype recording.mp4</p>
              </div>
              <strong>1.0MB</strong>
            </NuxtLink>
          </li>
          <li class="ibk-board-detail-file-ing">
            <NuxtLink to="/" class="ibk-board-detail-file__text">
              <i class="ibk-icon-24-download"></i>
              <div>
                <p>Dashboard prototype recording.mp4</p>
                <div class="mo">
                  <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
                </div>
              </div>
              <strong>1.0MB</strong>
            </NuxtLink>
            <div class="pc">
              <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
            </div>
          </li>
          <li class="ibk-board-detail-file-ing">
            <NuxtLink to="/" class="ibk-board-detail-file__text">
              <i class="ibk-icon-24-download"></i>
              <div>
                <p>
                  Dashboard prototype recording sapiente delectus, ut aut Dashboard prototype recording sapiente
                  delectus, ut aut
                </p>
                <div class="mo">
                  <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
                </div>
              </div>
              <strong>1.0MB</strong>
            </NuxtLink>
            <div class="pc">
              <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal08 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal08 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal08 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal09" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal09 = false" />
      </div>
      <div class="ibk-dialog-apply__title">복지비 내역</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
            </colgroup>
            <thead>
              <tr>
                <th>카드번호</th>
                <th>승인번호</th>
                <th>승인일</th>
                <th>금액(원)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i of 4">
                <td class="text-center">12345678</td>
                <td class="text-center">1000</td>
                <td class="text-center">2025.06.00 12:00</td>
                <td class="text-center">10,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal09 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal10" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal10 = false" />
      </div>
      <div class="ibk-dialog-apply__title">취득자격 검색</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">취득현황 (인사정보 등록 자격)</div>
        </div>
        <div class="pc">
          <div class="ibk-dialog-target-list__table">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 160px" />
                <col style="width: 160px" />
                <col style="width: 160px" />
              </colgroup>
              <thead>
                <th class="text-center">선택</th>
                <th class="text-center">취득현황</th>
                <th class="text-center">분야</th>
                <th class="text-center">취득일자</th>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in rows"
                  :key="index"
                  :class="{ active: selectedValues.includes(row.value) }"
                  @click="toggleSelection(row.value)"
                >
                  <td class="text-center">
                    <Checkbox v-model="selectedValues" :value="row.value" />
                  </td>
                  <td class="text-center">
                    <strong>{{ row.state }}</strong>
                  </td>
                  <td class="text-center">
                    <strong>{{ row.category }}</strong>
                  </td>
                  <td class="text-center">{{ row.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mo">
          <div class="ibk-dialog-target-list__list">
            <ul>
              <li
                v-for="(row, index) in rows"
                :key="index"
                :class="{ active: selectedValues.includes(row.value) }"
                @click="toggleSelection(row.value)"
              >
                <Checkbox v-model="selectedValues" :value="row.value" />
                <table>
                  <tbody>
                    <tr>
                      <th>취득현황</th>
                      <td>{{ row.state }}</td>
                    </tr>
                    <tr>
                      <th>분야</th>
                      <td>{{ row.category }}</td>
                    </tr>
                    <tr>
                      <th>취득일자</th>
                      <td>{{ row.date }}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" class="w-full" @click="modal10 = false" outlined />
        <Button label="등록" severity="primary" size="large" class="w-full" @click="modal10 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal11" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal11 = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수 목록</div>
    </template>
    <div class="ibk-dialog-apply-training">
      <div class="ibk-dialog-apply-training-breadcrumb">
        <div class="ibk-breadcrumb">
          <Breadcrumb :model="BreadcrumbItems" />
        </div>
      </div>
      <div class="ibk-dialog-apply-training-list">
        <div class="ibk-dialog-apply-training-item" v-for="i of 4">
          <a href="">
            <div class="ibk-dialog-apply-training-item__thumb">
              <img src="https://picsum.photos/600/300" alt="" />
            </div>
            <div class="ibk-dialog-apply-training-item-info">
              <div class="ibk-dialog-apply-training-item__badge">
                <Badge value="연수구분" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
              </div>
              <div class="ibk-dialog-apply-training-item__title">
                <strong class="text-primary mr-1">수료</strong> IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무IBK
                사이버 가계여신 실무IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무
              </div>
              <div class="ibk-dialog-apply-training-item__text">
                <div>
                  <strong>점수 70점</strong>
                  <hr />
                  입문
                  <hr />
                  키워드, 키워드
                </div>
              </div>
            </div>
          </a>
          <div class="ibk-dialog-apply-training-item__like">
            <div class="pc">
              <Button label="미리보기" outlined severity="secondary" />
            </div>
            <Button icon="ibk-icon-24-like" outlined severity="secondary" />
          </div>
          <div class="ibk-dialog-apply-training-item__button">
            <Button label="미리보기" outlined severity="secondary" class="w-full" />
          </div>
        </div>
        <div class="ibk-dialog-apply-training-item">
          <a href="">
            <div class="ibk-dialog-apply-training-item__thumb">
              <img src="https://picsum.photos/600/300" alt="" />
            </div>
            <div class="ibk-dialog-apply-training-item-info">
              <div class="ibk-dialog-apply-training-item__badge">
                <Badge value="연수구분" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
              </div>
              <div class="ibk-dialog-apply-training-item__title">
                <strong class="text-slate-500 mr-1">미수료</strong> IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무IBK
                사이버 가계여신 실무
              </div>
              <div class="ibk-dialog-apply-training-item__text">
                <div>
                  <strong>점수 70점</strong>
                  <hr />
                  입문
                  <hr />
                  키워드, 키워드
                </div>
              </div>
            </div>
          </a>
          <div class="ibk-dialog-apply-training-item__like">
            <div class="pc">
              <Button label="미리보기" outlined severity="secondary" />
            </div>
            <Button icon="ibk-icon-24-like" outlined severity="secondary" />
          </div>
          <div class="ibk-dialog-apply-training-item__button">
            <Button label="미리보기" outlined severity="secondary" class="w-full" />
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-training-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="primary" size="large" class="w-full" @click="modal11 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal12" modal class="ibk-dialog ibk-dialog-apply ibk-dialog-apply--sm">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal12 = false" />
      </div>
      <div class="ibk-dialog-apply__title">부점 검색</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>부점 검색</label>
              <div class="ibk-dialog-apply-item-search">
                <InputText type="text" size="large" class="w-full" placeholder="부점명을 검색해주세요." />
                <Button label="검색" severity="primary" size="large" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>검색결과</label>
              <div class="ibk-radio ibk-radio--grid1">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">IBK 기업은행 부점 </label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">IBK 기업은행 부점 </label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                  <label for="radio3" class="ml-2">IBK 기업은행 부점 </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal12 = false" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="modal12 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal13" modal class="ibk-dialog ibk-dialog-apply ibk-dialog-apply--lg">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal13 = false" />
      </div>
      <div class="ibk-dialog-apply__title">권장학습 이수율 상세보기</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">전체 <span class="ml-1 text-slate-500">24</span></div>
          <Button label="엑셀 다운로드" severity="secondary" outlined icon="ibk-icon-16-download" />
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <thead>
              <th class="text-center">순번</th>
              <th class="text-center">직급</th>
              <th class="text-center">직위</th>
              <th class="text-center">직원번호</th>
              <th class="text-center">성명</th>
              <th class="text-center">입행년</th>
              <th class="text-center">자격증명</th>
              <th class="text-center">취득일자</th>
              <th class="text-center">유효기일</th>
              <th class="text-center">비고</th>
            </thead>
            <tbody>
              <tr v-for="i of 4">
                <td class="text-center">0001</td>
                <td class="text-center">정보노출</td>
                <td class="text-center">정보노출</td>
                <td class="text-center">IBK12345</td>
                <td class="text-center">김기은</td>
                <td class="text-center">2028.12.30</td>
                <td class="text-center">APFK</td>
                <td class="text-center">802028.12.30</td>
                <td class="text-center">2028.12.30</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" class="w-full" @click="modal13 = false" outlined />
      </div>
    </template>
  </Dialog>

  <!-- 감리때 보여 지면 안되서 일단 주석 친다. -->
  <div v-if="false"
    style="
      position: fixed;
      right: 0;
      bottom: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 100;
      max-height: 500px;
      overflow: auto;
    "
  >
    <Button @click="modal01 = true" label="지원 현황"></Button><br /><br />
    <Button @click="modal02 = true" label="지원금 신청"></Button><br /><br />
    <Button @click="modal05 = true" label="평가(어학)비 지원신청"></Button><br /><br />
    <Button @click="modal06 = true" label="학자금 지원 신청"></Button><br /><br />
    <Button @click="modal07 = true" label="지원 현황"></Button><br /><br />
    <Button @click="modal08 = true" label="학술연수 신청"></Button><br /><br />
    <Button @click="modal09 = true" label="복지비 내역"></Button><br /><br />
    <Button @click="modal10 = true" label="취득자격 검색"></Button><br /><br />
    <Button @click="modal11 = true" label="연수 목록"></Button><br /><br />
    <Button @click="modal12 = true" label="부점 검색"></Button><br /><br />
    <Button @click="modal13 = true" label="권장학습 이수율 상세보기"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
import LanguageRegister from '~/domains/skill/components/LanguageRegister.vue';
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';
import LicenseRegister from '~/domains/skill/components/LicenseRegister.vue';
import CourseRegister from '~/domains/skill/components/CourseRegister.vue';
import ExpenseRegister from '~/domains/skill/components/ExpenseRegister.vue';
import ScholarshipRegister from '~/domains/skill/components/ScholarshipRegister.vue';
import RoadMap from '~/domains/skill/components/Roadmap.vue';

const dates = ref();

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
const modal04 = ref(false);
const modal05 = ref(false);
const modal06 = ref(false);
const modal07 = ref(false);
const modal08 = ref(false);
const modal09 = ref(false);
const modal10 = ref(false);
const modal11 = ref(false);
const modal12 = ref(false);
const modal13 = ref(false);

const route = useRoute();
const router = useRouter();
const tab = ref<string | null>(route.query.tab as string);

const radio = ref('');
const checkbox01 = ref();
const selected01Option = ref([{ name: '2025' }, { name: '2025' }, { name: '2025' }]);
const selected01 = ref(selected01Option.value[0]);
const selected02Option = ref([{ name: '연도' }, { name: '연도' }, { name: '연도' }]);
const selected02 = ref(selected02Option.value[0]);


const BreadcrumbItems = ref([
  { label: '디지털' },
  { label: '비지니스' },
  { label: '디지털 전략수집' },
  { label: '디지털 금융 법률 및 제도의 이해' },
]);

//수강기간
const dateRange01 = ref([]);
const datepicker01 = ref<DatePickerInstance>(null);

const openDatePicker01 = () => {
  if (datepicker01) {
    datepicker01.value.openMenu();
  }
};

const dateRange01checkInDate = ref('');
const dateRange01checkOutDate = ref('');

const changeTab = (target:string) => {
  tab.value = target;
  navigateTo(`/skill?tab=${tab.value}`);
}

watch(()=>route.query, ()=>{
  if(route.query && route.query.tab) {
    tab.value = route.query.tab
  }
}, {deep: true, immediate: true });

const goDetail = () => {
  navigateTo('/skill/detail?tab=all');
}

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
const radioAddress = ref('');
const checkConfirm = ref('');

// 테이블 행 데이터
const rows = ref([
  {
    value: 1,
    state: '정보노출',
    category: '정보노출',
    date: '2025.12.30',
  },
  {
    value: 2,
    state: '정보노출',
    category: '정보노출',
    date: '2025.12.30',
  },
  {
    value: 3,
    state: '정보노출',
    category: '정보노출',
    date: '2025.12.30',
  },
  {
    value: 4,
    state: '정보노출',
    category: '정보노출',
    date: '2025.12.30',
  },
]);

// 선택된 체크박스 값을 저장하는 ref (다중 선택을 허용)
const selectedValues = ref<number[]>([]);

// 체크박스 클릭 시 선택 상태를 토글하는 함수
const toggleSelection = (value) => {
  const index = selectedValues.value.indexOf(value);
  if (index === -1) {
    selectedValues.value.push(value); // 선택 추가
  } else {
    selectedValues.value.splice(index, 1); // 선택 해제
  }
};

onBeforeMount(async () => {
  tab.value = 'course';
  if (route.query.tab) {
    tab.value = route.query.tab;
  }
})

</script>
