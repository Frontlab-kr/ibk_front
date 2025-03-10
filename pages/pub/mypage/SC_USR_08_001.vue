<template>
  <pubMypagehead />
  <div class="ibk-inner">
    <div class="ibk-payment">
      <div class="ibk-payment-head ibk-payment-head--tab">
        <h2>역량지원신청</h2>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">나의 신청현황 4</Tab>
          <Tab value="1">승인문서 3</Tab>
          <Tab value="2">반려문서 4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">기안문서 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">기안문서 <strong>4</strong></div>
              </div>
              <div class="ibk-payment-center-list">
                <!-- <div class="ibk-payment-center-list-none">검색결과가 없습니다.</div> -->
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-red-500">결재반려</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
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
                      <Button label="수정" severity="secondary" class="text-primary-600" />
                      <Button label="취소" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>결재대기</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
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
                      <Button label="수정" severity="secondary" class="text-primary-600" />
                      <Button label="취소" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong>미결재</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
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
                      <Button label="수정" severity="secondary" class="text-primary-600" />
                      <Button label="취소" severity="secondary" outlined />
                      <Button label="상세보기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-list-item">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
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
                      <Button label="수정" severity="secondary" class="text-primary-600" />
                      <Button label="취소" severity="secondary" outlined />
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
                  <div class="ibk-payment-center-head__title">승인문서 <strong>3</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">승인문서 <strong>4</strong></div>
              </div>
              <div class="ibk-payment-center-list">
                <!-- <div class="ibk-payment-center-list-none">검색결과가 없습니다.</div> -->
                <div class="ibk-payment-center-list-item" v-for="i of 3">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>결재일</span>
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
          <TabPanel value="2">
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="pc">
                  <div class="ibk-payment-center-head__title">반려문서 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">반려문서 <strong>4</strong></div>
              </div>
              <div class="ibk-payment-center-list">
                <!-- <div class="ibk-payment-center-list-none">검색결과가 없습니다.</div> -->
                <div class="ibk-payment-center-list-item" v-for="i of 4">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-red-500">결재반려</strong>
                      역량 개발 지원 항목
                    </div>
                    <ul>
                      <li>
                        <span>신청일</span>
                        <span>2025.12.30. 12:00</span>
                      </li>
                      <li>
                        <span>결재일</span>
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
                      <Button label="수정 · 재신청" severity="secondary" class="text-primary-600" />
                      <Button label="반려사유" severity="secondary" outlined />
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
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <Dialog v-model:visible="modal00" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal00 = false" />
      </div>
      <div class="ibk-dialog-apply__title">수강기간</div>
    </template>

    <div class="ibk-date-select">
      <div class="ibk-date-select-head">
        <div class="ibk-date-select-head-item" :class="{ active: dateRange01checkInDate }">
          <p>시작일자 선택</p>
          <strong>시작일자 {{ dateRange01checkInDate }}</strong>
        </div>
        <div class="ibk-date-select-head-item" :class="{ active: dateRange01checkOutDate }">
          <p>종료일자 선택</p>
          <strong>종료일자 {{ dateRange01checkOutDate }}</strong>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal00 = false" />
        <Button label="적용" severity="primary" size="large" class="w-full" @click="modal00 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학원 수강료 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
                  <th>수강방식</th>
                  <td colspan="3">온라인</td>
                </tr>
                <tr>
                  <th>수강분야</th>
                  <td colspan="3">어학</td>
                </tr>
                <tr>
                  <th>교육기관명</th>
                  <td colspan="3">ICT</td>
                </tr>
                <tr>
                  <th>수강연수명</th>
                  <td colspan="3">수강연수명이 노출됩니다.수강연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>수강기간</th>
                  <td colspan="3">2028.01.01~2028.05.01</td>
                </tr>
                <tr>
                  <th>신청분기</th>
                  <td>2028년 1분기</td>
                  <th>분기한도</th>
                  <td>300,000</td>
                </tr>
                <tr>
                  <th>학원비 (수강료)</th>
                  <td>200,000</td>
                  <th>실지원 금액</th>
                  <td>100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>수강방식</th>
                  <th>수강분야</th>
                </tr>
                <tr>
                  <td>온라인</td>
                  <td>어학</td>
                </tr>
                <tr>
                  <th colspan="2">교육기관명</th>
                </tr>
                <tr>
                  <td colspan="2">ICT</td>
                </tr>
                <tr>
                  <th colspan="2">수강연수명</th>
                </tr>
                <tr>
                  <td colspan="2">수강연수명이 노출됩니다.수강연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th colspan="2">수강기간</th>
                </tr>
                <tr>
                  <td colspan="2">2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th colspan="2">신청분기</th>
                </tr>
                <tr>
                  <td colspan="2">2028년 1분기</td>
                </tr>
                <tr>
                  <th colspan="2">분기한도</th>
                </tr>
                <tr>
                  <td colspan="2">300,000</td>
                </tr>
                <tr>
                  <th colspan="2">학원비(수강료)</th>
                </tr>
                <tr>
                  <td colspan="2">200,000</td>
                </tr>
                <tr>
                  <th colspan="2">실지원금액</th>
                </tr>
                <tr>
                  <td colspan="2">100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
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
                  <th>승인일자</th>
                  <td colspan="3">2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                  <td colspan="3">1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                  <td colspan="3">1212312345678</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>승인일자</th>
                </tr>
                <tr>
                  <td>2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                </tr>
                <tr>
                  <td>1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                </tr>
                <tr>
                  <td>11212121212</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-apply__title">시험 응시료 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 김인재</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="ibk-dialog-apply-item-sub">
          <div class="ibk-dialog-apply-item-sub-item">
            <h5>취득자격증</h5>
            <div class="ibk-table ibk-table--scroll-x">
              <table>
                <colgroup>
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">취득내역</th>
                    <th colspan="2">분야</th>
                    <th colspan="2">취득일자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center" colspan="2">취득내역 정보노출</td>
                    <td class="text-center" colspan="2">분야 관련 정보노출</td>
                    <td class="text-center" colspan="2">2025.12.30</td>
                  </tr>
                  <tr>
                    <td class="text-center" colspan="2">취득내역 정보노출</td>
                    <td class="text-center" colspan="2">분야 관련 정보노출</td>
                    <td class="text-center" colspan="2">2025.12.30</td>
                  </tr>
                  <tr>
                    <th class="text-center">카드승인일자</th>
                    <td colspan="2">2025.12.30. 12:00</td>
                    <th class="text-center">
                      응시료<br />
                      (카드승인금액)
                    </th>
                    <td colspan="2">2300,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="ibk-dialog-apply-item-sub-item">
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
                      <th>카드승인일자</th>
                      <td colspan="3">2025.12.30. 12:00</td>
                    </tr>
                    <tr>
                      <th>
                        응시료<br />
                        (카드승인금액)
                      </th>
                      <td colspan="3">300,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mo">
                <table>
                  <tbody>
                    <tr>
                      <th>승인일자</th>
                    </tr>
                    <tr>
                      <td>2030.12.01 12:00:00</td>
                    </tr>
                    <tr>
                      <th>카드번호</th>
                    </tr>
                    <tr>
                      <td>1234 12** ****</td>
                    </tr>
                    <tr>
                      <th>승인번호</th>
                    </tr>
                    <tr>
                      <td>11212121212</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
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
                  <th>승인일자</th>
                  <td colspan="3">2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                  <td colspan="3">1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                  <td colspan="3">1212312345678</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>승인일자</th>
                </tr>
                <tr>
                  <td>2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                </tr>
                <tr>
                  <td>1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                </tr>
                <tr>
                  <td>11212121212</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">재취업창업 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
                  <th>수강방식</th>
                  <td colspan="3">온라인</td>
                </tr>
                <tr>
                  <th>수강분야</th>
                  <td colspan="3">어학</td>
                </tr>
                <tr>
                  <th>교육기관명</th>
                  <td colspan="3">ICT</td>
                </tr>
                <tr>
                  <th>수강연수명</th>
                  <td colspan="3">수강연수명이 노출됩니다.수강연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>수강기간</th>
                  <td colspan="3">2028.01.01~2028.05.01</td>
                </tr>
                <tr>
                  <th>신청분기</th>
                  <td>2028년 1분기</td>
                  <th>분기한도</th>
                  <td>300,000</td>
                </tr>
                <tr>
                  <th>학원비 (수강료)</th>
                  <td>200,000</td>
                  <th>실지원 금액</th>
                  <td>100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>수강방식</th>
                  <th>수강분야</th>
                </tr>
                <tr>
                  <td>온라인</td>
                  <td>어학</td>
                </tr>
                <tr>
                  <th colspan="2">교육기관명</th>
                </tr>
                <tr>
                  <td colspan="2">ICT</td>
                </tr>
                <tr>
                  <th colspan="2">수강연수명</th>
                </tr>
                <tr>
                  <td colspan="2">수강연수명이 노출됩니다.수강연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th colspan="2">수강기간</th>
                </tr>
                <tr>
                  <td colspan="2">2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th colspan="2">신청분기</th>
                </tr>
                <tr>
                  <td colspan="2">2028년 1분기</td>
                </tr>
                <tr>
                  <th colspan="2">분기한도</th>
                </tr>
                <tr>
                  <td colspan="2">300,000</td>
                </tr>
                <tr>
                  <th colspan="2">학원비(수강료)</th>
                </tr>
                <tr>
                  <td colspan="2">200,000</td>
                </tr>
                <tr>
                  <th colspan="2">실지원금액</th>
                </tr>
                <tr>
                  <td colspan="2">100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
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
                  <th>승인일자</th>
                  <td colspan="3">2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                  <td colspan="3">1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                  <td colspan="3">1212312345678</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>승인일자</th>
                </tr>
                <tr>
                  <td>2030.12.01 12:00:00</td>
                </tr>
                <tr>
                  <th>카드번호</th>
                </tr>
                <tr>
                  <td>1234 12** ****</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                </tr>
                <tr>
                  <td>11212121212</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-apply__title">평가(어학)비 지원신청 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
                  <th>평가구분</th>
                  <td>외국어평가</td>
                  <th>평가명</th>
                  <td>TEPS</td>
                </tr>
                <tr>
                  <th>응시일자</th>
                  <td>2028.12.11</td>
                  <th>평가장소</th>
                  <td>국내</td>
                </tr>
                <tr>
                  <th>만료일자</th>
                  <td colspan="3">2028.12.31</td>
                </tr>
                <tr>
                  <th>성적</th>
                  <td>500</td>
                  <th>외국어 능력 등급</th>
                  <td>C</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>평가구분</th>
                  <th>평가명</th>
                </tr>
                <tr>
                  <td>외국어평가</td>
                  <td>TEPS</td>
                </tr>
                <tr>
                  <th>평가응시일</th>
                  <th>평가장소</th>
                </tr>
                <tr>
                  <td>2028.12.11</td>
                  <td>국내</td>
                </tr>
                <tr>
                  <th colspan="2">만료일자</th>
                </tr>
                <tr>
                  <td colspan="2">2028.12.31</td>
                </tr>
                <tr>
                  <th>성적</th>
                  <th>외국어 능력 등급</th>
                </tr>
                <tr>
                  <td>500</td>
                  <td>C</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal04 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal04 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal05" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal05 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학자금 지원신청 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="ibk-dialog-apply-item">
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
                  <th>학위</th>
                  <td>학사</td>
                  <th>학위과정</th>
                  <td>박사</td>
                </tr>
                <tr>
                  <th>학교명</th>
                  <td colspan="3">기업 대학원</td>
                </tr>
                <tr>
                  <th>전공명</th>
                  <td colspan="3">금융 학과</td>
                </tr>
                <tr>
                  <th>학기(학년)</th>
                  <td>2</td>
                  <th>재학구분</th>
                  <td>재학</td>
                </tr>
                <tr>
                  <th>입학일</th>
                  <td>2028.12.31</td>
                  <th>졸업예정일</th>
                  <td>2028.12.31</td>
                </tr>
                <tr>
                  <th>직전학기평점</th>
                  <td>3.5</td>
                  <th>직전학기평균</th>
                  <td>4/5</td>
                </tr>
                <tr>
                  <th>수혜수</th>
                  <td colspan="3">
                    <div class="flex justify-content-between">
                      <span>2</span>
                      <span class="text-slate-500 text-xs"> 금차 신청을 포함한 학자금 총 수혜 횟수</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>등록금(A)</th>
                  <td colspan="3">10,000,000</td>
                </tr>
                <tr>
                  <th>장학금(B)</th>
                  <td colspan="3">
                    <div class="flex justify-content-between">
                      <span>5,000,000</span>
                      <span class="text-slate-500 text-xs">대상자는 교내 장학금 수혜 확인서 첨부 필수</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>납입금(A-B)</th>
                  <td colspan="3"><strong>5,000,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>수강방식</th>
                  <th>수강분야</th>
                </tr>
                <tr>
                  <td>온라인</td>
                  <td>어학</td>
                </tr>
                <tr>
                  <th colspan="2">교육기관명</th>
                </tr>
                <tr>
                  <td colspan="2">ICT</td>
                </tr>
                <tr>
                  <th colspan="2">수강연수명</th>
                </tr>
                <tr>
                  <td colspan="2">수강연수명이 노출됩니다.수강연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th colspan="2">수강기간</th>
                </tr>
                <tr>
                  <td colspan="2">2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th colspan="2">신청분기</th>
                </tr>
                <tr>
                  <td colspan="2">2028년 1분기</td>
                </tr>
                <tr>
                  <th colspan="2">분기한도</th>
                </tr>
                <tr>
                  <td colspan="2">300,000</td>
                </tr>
                <tr>
                  <th colspan="2">학원비(수강료)</th>
                </tr>
                <tr>
                  <td colspan="2">200,000</td>
                </tr>
                <tr>
                  <th colspan="2">실지원금액</th>
                </tr>
                <tr>
                  <td colspan="2">100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal05 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal05 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal06" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal06 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학술연수 신청 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재상태</div>
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
                <th>구분</th>
                <th>담당자</th>
                <th>처리시간</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">학원수강료 담당자</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-slate-500">신청중</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">이무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center">접수완료</td>
              </tr>
              <tr>
                <td class="text-center">인재개발부</td>
                <td class="text-center">김무개 대리</td>
                <td class="text-center">2025.12.30. 12:00</td>
                <td class="text-center text-primary">처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
                  <td colspan="3">본부・ 인재개발 ・ 대리 ・ 5 ・ 김인재 ・ S12345</td>
                </tr>
                <tr>
                  <th>지원분야</th>
                  <td colspan="3">전문분야(디지털)</td>
                </tr>
                <tr>
                  <th>지원형태</th>
                  <td colspan="3">국내전일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">본부・ 인재개발 ・ 대리 ・ 5 ・ 김인재 ・ S12345</td>
                </tr>
                <tr>
                  <th colspan="2">지원분야</th>
                </tr>
                <tr>
                  <td colspan="2">전문분야(디지털)</td>
                </tr>
                <tr>
                  <th colspan="2">지원형태</th>
                </tr>
                <tr>
                  <td colspan="2">국내전일</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal06 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal06 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal07" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal07 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학원 수강료 신청 수정</div>
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
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker01">
                      <p>시작일자 선택</p>
                      <strong>시작일자 {{ dateRange01checkInDate }}</strong>
                    </div>
                  </div>
                  <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker01">
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
                <div class="flex gap-2">
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                </div>
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
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal07 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal07 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal07 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal08" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal08 = false" />
      </div>
      <div class="ibk-dialog-apply__title">시험 응시료 신청 수정</div>
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
              <label>학원비(수강료)</label>
              <div class="ibk-dialog-apply-item-search">
                <InputText type="text" size="large" class="w-full" />
                <Button label="복지비 내역조회" severity="primary" size="large" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>응시료(카드승인금액)</label>
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
                <div class="flex gap-2">
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                </div>
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
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal08 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal08 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal08 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal09" modal class="ibk-dialog ibk-dialog-target">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal09 = false" />
      </div>
      <div class="ibk-dialog-target__title">취득자격 재검색</div>
    </template>

    <div class="ibk-dialog-target-list">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>취득현황 (인사정보 등록 자격)</label>

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
                    <th>취득현황</th>
                    <th>분야</th>
                    <th>취득일자</th>
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
                        {{ row.state }}
                      </td>
                      <td>
                        {{ row.category }}
                      </td>
                      <td>{{ row.date }}</td>
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

            <!-- <div class="ibk-dialog-target-none">검색결과가 없습니다.</div> -->
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-target__button">
        <Button label="취소" severity="secondary" outlined size="large" class="w-full" @click="modal09 = false" />
        <Button label="등록" severity="primary" size="large" class="w-full" @click="modal09 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal10" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal10 = false" />
      </div>
      <div class="ibk-dialog-apply__title">재취업창업 신청 수정</div>
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
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker01">
                      <p>시작일자 선택</p>
                      <strong>시작일자 {{ dateRange01checkInDate }}</strong>
                    </div>
                  </div>
                  <div class="ibk-datepicker-item" :class="{ active: dateRange01checkOutDate }">
                    <div class="ibk-datepicker-item-input ibk-datepicker-item-input--start" @click="openDatePicker01">
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
                <div class="flex gap-2">
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                  <InputText type="text" size="large" class="w-full" />
                </div>
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
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal10 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal10 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal10 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal11" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal11 = false" />
      </div>
      <div class="ibk-dialog-apply__title">평가(어학)비 지원신청 상세</div>
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
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal11 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal11 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal11 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal12" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal12 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학자금 지원 신청 수정</div>
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
              <label
                >학위과정
                <span> 「국가평생교육진흥원」을 통해 학위를 취득하는 경우 ‘학점은행제’ 선택 </span>
              </label>
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
              <label
                >졸업예정일

                <span>학위취득(졸업) 예정 월의 말일로 체크해 주세요.</span>
              </label>
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
              <label>장학금(B) <span>대상자는 교내 장학금 수혜 확인서 첨부 필수</span></label>
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
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal12 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal12 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal12 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal13" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal13 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학술연수 신청 수정</div>
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
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal13 = false" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="modal13 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal13 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="학원 수강료 상세"></Button><br /><br />
    <Button @click="modal02 = true" label="시험 응시료 상세"></Button><br /><br />
    <Button @click="modal03 = true" label="재취업창업 상세"></Button><br /><br />
    <Button @click="modal04 = true" label="평가(어학)비 지원신청 상세"></Button><br /><br />
    <Button @click="modal05 = true" label="학자금 지원신청 상세"></Button><br /><br />
    <Button @click="modal06 = true" label="학술연수 신청 상세"></Button><br /><br />

    <Button @click="modal07 = true" label="학원 수강료 신청 수정"></Button><br /><br />
    <Button @click="modal08 = true" label="시험 응시료 신청 수정"></Button><br /><br />
    <Button @click="modal09 = true" label="취득자격 재검색"></Button><br /><br />
    <Button @click="modal10 = true" label="재취업창업 신청 수정"></Button><br /><br />
    <Button @click="modal11 = true" label="평가(어학)비 지원신청 수정"></Button><br /><br />
    <Button @click="modal12 = true" label="학자금 지원 신청 수정"></Button><br /><br />
    <Button @click="modal13 = true" label="학술연수 신청 수정"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';

const dates = ref('2025.01.01 - 2025.01.01');

const modal00 = ref(false);
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

const radio = ref('');

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

// 선택된 라디오 버튼 값을 저장하는 ref
const selectedValue = ref(null);

// td 클릭 시 해당 행의 라디오 버튼을 선택하는 함수
const selectRow = (value) => {
  selectedValue.value = value;
};
</script>
