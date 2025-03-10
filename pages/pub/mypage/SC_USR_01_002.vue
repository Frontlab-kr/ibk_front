<template>
  <pubMypagehead />
  <div class="ibk-inner">
    <div class="ibk-payment">
      <div class="ibk-payment-head ibk-payment-head--tab">
        <h2>결재관리</h2>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">결재할 문서 4</Tab>
          <Tab value="1">승인문서 4</Tab>
          <Tab value="2">반려문서 2</Tab>
          <Tab value="3">나의 신청현황 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">전체 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                  <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                  <div class="pc">
                    <Button label="일괄승인" severity="primary" rounded />
                  </div>
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">
                  <div>전체 <strong>8</strong></div>
                  <Button label="일괄승인" severity="primary" rounded />
                </div>
              </div>
              <!-- <div class="ibk-payment-center-list-none">검색결과가 없습니다.</div> -->
              <div class="ibk-payment-center-list">
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <Checkbox v-model="checkbox01" inputId="checkbox01-1" name="checkbox01" value="checkbox01-1" />
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>미결재</strong>
                      IBK 사이버연수원 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                    <div class="ibk-payment-center-list-item__button">
                      <Button label="결재승인" severity="secondary" class="text-primary-600" />
                      <Button label="결재반려" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <Checkbox v-model="checkbox01" inputId="checkbox01-1" name="checkbox01" value="checkbox01-1" />
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>미결재</strong>
                      IBK 사이버연수원 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                    <div class="ibk-payment-center-list-item__button">
                      <Button label="결재승인" severity="secondary" class="text-primary-600" />
                      <Button label="결재반려" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <Checkbox v-model="checkbox01" inputId="checkbox01-1" name="checkbox01" value="checkbox01-1" />
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>미결재</strong>
                      IBK 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                    <div class="ibk-payment-center-list-item__button">
                      <Button label="결재승인" severity="secondary" class="text-primary-600" />
                      <Button label="결재반려" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <Checkbox v-model="checkbox01" inputId="checkbox01-1" name="checkbox01" value="checkbox01-1" />
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>미결재</strong>
                      교재있는 결재 문서
                      <Badge value="교재" style="background: rgba(113, 81, 255, 0.1); color: #7151ff"></Badge>
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                    <div class="ibk-payment-center-list-item__table">
                      <table>
                        <tbody>
                          <tr>
                            <th>배송지</th>
                            <td>서울특별시 삼성로 150</td>
                          </tr>
                          <tr>
                            <th>배송정보</th>
                            <td>CJ대한통운 150778</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                    <div class="ibk-payment-center-list-item__button">
                      <Button label="결재승인" severity="secondary" class="text-primary-600" />
                      <Button label="결재반려" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div> -->
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">전체 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">
                  <div>전체 <strong>4</strong></div>
                </div>
              </div>
              <div class="ibk-payment-center-list">
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      IBK 사이버연수원 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      IBK 사이버연수원 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      IBK 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      사이버연수원 결재 문서
                      <Badge value="교재" style="background: rgba(113, 81, 255, 0.1); color: #7151ff"></Badge>
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>연수기간</span>
                        <span>2025.11.28 - 2025.12.30</span>
                      </li>
                    </ul>
                    <div class="ibk-payment-center-list-item__table">
                      <table>
                        <tbody>
                          <tr>
                            <th>배송지</th>
                            <td>서울특별시 삼성로 150</td>
                          </tr>
                          <tr>
                            <th>배송정보</th>
                            <td>CJ대한통운 150778</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div> -->
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">전체 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">
                  <div>전체 <strong>4</strong></div>
                </div>
              </div>
              <div class="ibk-payment-center-list">
                <div class="ibk-payment-center-list-item" v-for="i of 4">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-red-500">결재반려</strong>
                      IBK 사이버연수원 결재 문서
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>반려일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-list-item__end">
                    <div class="ibk-payment-center-list-item__nav">
                      김기은
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은행
                      <i class="ibk-icon-16-Breadcrumb"></i>
                      이은기
                    </div>
                    <div class="ibk-payment-center-list-item__button">
                      <Button label="반려사유" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div> -->
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div class="ibk-payment-center">
              <div v-if="write === false">
                <div class="ibk-payment-center-head">
                  <div class="pc">
                    <div class="ibk-payment-center-head__title">전체 <strong>4</strong></div>
                  </div>
                  <div class="ibk-payment-center-head__filter">
                    <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                    <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                  </div>
                </div>
                <div class="mo">
                  <div class="ibk-payment-center-head__title">
                    <div>전체 <strong>3</strong></div>
                  </div>
                </div>
                <div class="ibk-payment-center-list">
                  <div class="ibk-payment-center-list-item" v-for="i of 3">
                    <div class="ibk-payment-center-list-item__text">
                      <div class="ibk-payment-center-list-item__checkbox">
                        <label for="checkbox01-1"> <span>결재번호</span> 31000167528861 </label>
                      </div>
                      <div class="ibk-payment-center-list-item__title">
                        <strong>미결재</strong>
                        IBK 사이버연수원 결재 문서
                      </div>
                      <ul>
                        <li>
                          <span>신청일</span>
                          <span>2025.12.30. 12:00</span>
                        </li>
                        <li>
                          <span>연수기간</span>
                          <span>2025.11.28 - 2025.12.30</span>
                        </li>
                      </ul>
                    </div>

                    <div class="ibk-payment-center-list-item__button ibk-payment-center-list-item__button--reverse">
                      <Button label="회차 변경" severity="secondary" class="text-primary-600" />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-payment-center-write" v-if="write === true">
                <div class="ibk-payment-center-write__title">기안문서 작성</div>
                <div class="grid">
                  <div class="lg:col-6 col-12">
                    <div class="field">
                      <label>연도 선택</label>
                      <Select size="large" class="w-full" />
                    </div>
                  </div>
                  <div class="lg:col-6 col-12">
                    <div class="field">
                      <label>결재분류</label>
                      <Select size="large" class="w-full" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>문서유형</label>
                      <Select size="large" class="w-full" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>대상자</label>
                      <div class="ibk-payment-center-write__search">
                        <InputText type="text" class="w-full" placeholder="검색" size="large" />
                        <Button label="검색" severity="primary" size="large" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>결재선택</label>
                      <div class="ibk-radio ibk-radio--grid4">
                        <div class="ibk-radio-item">
                          <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                          <label for="radio1">결재방법 1</label>
                        </div>
                        <div class="ibk-radio-item">
                          <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                          <label for="radio2">결재방법 2</label>
                        </div>
                        <div class="ibk-radio-item">
                          <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                          <label for="radio3">결재방법 3</label>
                        </div>
                        <div class="ibk-radio-item">
                          <RadioButton v-model="radio" inputId="radio4" value="radio4" />
                          <label for="radio4">결재방법 4</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>파일 업로드하기</label>
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
                  </div>
                  <div class="col-12">
                    <div class="field">
                      <label>첨부파일<span class="ml-2 text-primary">1</span></label>
                      <div class="ibk-write-list-file">
                        <ul>
                          <li v-for="i of 2">
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
                  </div>
                </div>
                <div class="ibk-payment-center-write__button">
                  <Button label="취소" severity="secondary" outlined size="large" />
                  <Button label="등록하기" severity="primary" size="large" />
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-reject">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-reject__title">결재 반려</div>
    </template>

    <div class="ibk-dialog-reject-form">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>결재 반려 사유 작성</label>
            <Textarea placeholder="결재 반려 사유를 입력해주세요." class="w-full" />
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-reject__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal01 = false" />
        <Button label="확인" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-target">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-target__title">대상자 검색</div>
    </template>

    <div class="ibk-dialog-target-list">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>아이디 검색</label>
            <div class="ibk-dialog-target-list__search">
              <InputText type="text" class="w-full" placeholder="검색어를 입력해주세요." size="large" />
              <Button label="검색" severity="primary" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>검색결과</label>

            <div class="pc">
              <div class="ibk-dialog-target-list__table">
                <table>
                  <colgroup>
                    <col style="width: 80px" />
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">선택</th>
                    <th>성명</th>
                    <th>닉네임</th>
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
                      <td>
                        <strong>{{ row.name }}</strong>
                      </td>
                      <td>{{ row.nickname }}</td>
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
                    :class="{ active: selectedValue === row.value }"
                    @click="selectRow(row.value)"
                  >
                    <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                    <table>
                      <tbody>
                        <tr>
                          <th>성명</th>
                          <td>{{ row.name }}</td>
                        </tr>
                        <tr>
                          <th>닉네임</th>
                          <td>{{ row.nickname }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
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
                          <th>성명</th>
                          <td>{{ row.name }}</td>
                        </tr>
                        <tr>
                          <th>닉네임</th>
                          <td>{{ row.nickname }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="ibk-dialog-target-none">검색결과가 없습니다.</div> -->
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-target__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal02 = false" />
        <Button label="등록" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수 신청 상세</div>
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
                  <td colspan="3">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                  <td>2028.01.27 - 2028.02.14</td>
                  <th>신청일</th>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                  <td colspan="3">
                    구성원 개개인의 업무수행 커뮤니케이션 능력을 통해, 단순화된 조직의 성과를 극대화할 수 있다.<br />
                    비즈니스 커뮤니케이션의 정확한 개념과 업무 수행과의 연관성을 이해한다.<br />
                    업무 수행 과정에서 발생되는 분야별 커뮤니케이션 기능의 핵심 내용을 학습한다.
                  </td>
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
                  <td>본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                </tr>
                <tr>
                  <td>2028.01.27 - 2028.02.14</td>
                </tr>
                <tr>
                  <th>신청일</th>
                </tr>
                <tr>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                </tr>
                <tr>
                  <td>
                    구성원 개개인의 업무수행 커뮤니케이션 능력을 통해, 단순화된 조직의 성과를 극대화할 수 있다. 비즈니스
                    커뮤니케이션의 정확한 개념과 업무 수행과의 연관성을 이해한다. 업무 수행 과정에서 발생되는 분야별
                    커뮤니케이션 기능의 핵심 내용을 학습한다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">도서 배송 주소</div>
        </div>
        <div class="ibk-dialog-apply-result">
          <ul>
            <li>
              <strong>우편번호</strong>
              85000
            </li>
            <li>
              <strong>배송 주소</strong>
              서울 종로구 을지로 590서울 종로구 을지로 590
            </li>
            <li>
              <strong>회사전화</strong>
              054-000-0000
            </li>
            <li>
              <strong>핸드폰 번호</strong>
              010-0000-0000
            </li>
            <li>
              <strong>이메일</strong>
              IBK1234@IBK.com
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재정보</div>
        </div>
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
                <th>단계</th>
                <th>성명</th>
                <th>직급</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1차 결재</td>
                <td class="text-center">김인재</td>
                <td class="text-center">서무</td>
                <td class="text-center">완료</td>
              </tr>
              <tr>
                <td class="text-center">2차 결재</td>
                <td class="text-center">박기업</td>
                <td class="text-center">팀장</td>
                <td class="text-center">완료</td>
              </tr>
              <tr>
                <td class="text-center">3차 결재</td>
                <td class="text-center">유나라</td>
                <td class="text-center">부점장</td>
                <td class="text-center text-red-400">반려</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
        <Button label="확인" severity="primary" size="large" class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-apply__title">취소 회차 변경하기</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">현재 차수 정보</div>
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
                  <th>차수명</th>
                  <td colspan="3">차수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                  <td>2028.01.27 - 2028.02.14</td>
                  <th>동시평가일</th>
                  <td>2028.01.27</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>차수명</th>
                </tr>
                <tr>
                  <td>차수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                </tr>
                <tr>
                  <td>2028.01.27 - 2028.02.14</td>
                </tr>
                <tr>
                  <th>동시평가일</th>
                </tr>
                <tr>
                  <td>2028.01.27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">구분</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <div class="ibk-radio">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">취소</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">회차변경</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>변경 차수명</label>
              <Select size="large" class="w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>사유</label>
              <Textarea class="w-full" />
            </div>
          </div>
        </div>
        <div class="ibk-dialog-apply-item-check">
          <Checkbox v-model="checkbox" inputId="checkbox1" value="checkbox1" />
          <label for="checkbox1" class="ml-2"> 다음 회차로 변경 신청 합니다. </label>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal04 = false" />
        <Button label="확인" severity="primary" size="large" class="w-full" @click="modal04 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="결재 반려"></Button><br /><br />
    <Button @click="modal02 = true" label="대상자 검색"></Button><br /><br />
    <Button @click="modal03 = true" label="연수 신청 상세"></Button><br /><br />
    <Button @click="modal04 = true" label="취소 회차 변경하기"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';

const dates = ref('2025.01.01 - 2025.01.01');

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
const modal04 = ref(false);

const write = ref(false);
const radio = ref('');
const checkbox01 = ref();

// 테이블 행 데이터
const rows = ref([
  {
    value: 1,
    name: '이인재',
    nickname: '기업은행 124',
  },
  {
    value: 2,
    name: '김기은',
    nickname: '기업은행 124',
  },
  {
    value: 3,
    name: '박은행',
    nickname: '기업은행 124',
  },
  {
    value: 4,
    name: '이기업',
    nickname: '기업은행 124',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref
const selectedValue = ref(null);

// td 클릭 시 해당 행의 라디오 버튼을 선택하는 함수
const selectRow = (value) => {
  selectedValue.value = value;
};
</script>
