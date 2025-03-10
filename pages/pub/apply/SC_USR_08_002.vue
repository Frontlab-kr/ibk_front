<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>역량개발지원 신청내역</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청하기" outlined rounded icon="ibk-icon-16-apply" />
        </div>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">나의 신청현황 3</Tab>
          <Tab value="1">승인문서 4</Tab>
          <Tab value="2">반려문서 2</Tab>
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
                <div class="ibk-payment-center-head__title">
                  <div>기안문서 <strong>4</strong></div>
                </div>
              </div>
              <div class="ibk-payment-center-list">
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
                  <div class="ibk-payment-center-head__title">승인문서 <strong>4</strong></div>
                </div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-payment-center-head__title">
                  <div>승인문서 <strong>4</strong></div>
                </div>
              </div>
              <div class="ibk-payment-center-list">
                <div class="ibk-payment-center-list-item" v-for="i of 3">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1">2025</label>
                    </div>
                    <div class="ibk-payment-center-list-item__title">
                      <strong class="text-primary">결재승인</strong>
                      IBK 기업은행 승인된 결재 명이 들어갑니다.
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
                <div class="ibk-payment-center-head__title">
                  <div>반려문서 <strong>4</strong></div>
                </div>
              </div>
              <div class="ibk-payment-center-list">
                <div class="ibk-payment-center-list-item" v-for="i of 4">
                  <div class="ibk-payment-center-list-item__text">
                    <div class="ibk-payment-center-list-item__checkbox">
                      <label for="checkbox01-1"> 2025 </label>
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

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-apply__title">지원금 신청 상세</div>
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
                        <td>상반기</td>
                        <th>분기 자동 한도</th>
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
                        <td colspan="2">교육기관명이 노출됩니다.</td>
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

            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
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

            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">유의사항</div>
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
                <div class="ibk-dialog-apply-item-head__title">신청정보</div>
              </div>
              <div class="ibk-dialog-apply-item__table">
                <div class="pc">
                  <table>
                    <colgroup>
                      <col style="width: 168px" />
                      <col style="width: 552px" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>신청자 정보</th>
                        <td>본부・ 인재개발 ・ 김인재</td>
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
                      </tbody>
                    </table>

                    <div class="mt-4">
                      <div class="pc">
                        <table>
                          <colgroup>
                            <col style="width: 144px" />
                            <col style="width: 576px" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th class="text-center">카드승인일자</th>
                              <td colspan="2">2025.12.30. 12:00</td>
                            </tr>
                            <tr>
                              <th class="text-center">응시료 (카드승인금액)</th>
                              <td colspan="2">2300,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="mo">
                        <table>
                          <tbody>
                            <tr>
                              <th class="text-left">카드승인일자</th>
                            </tr>
                            <tr>
                              <td>2025.12.30. 12:00</td>
                            </tr>
                            <tr>
                              <th class="text-left">응시료 (카드승인금액)</th>
                            </tr>
                            <tr>
                              <td>2300,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                      <col style="width: 128px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>승인일자</th>
                        <td>2030.12.01 12:00:00</td>
                      </tr>
                      <tr>
                        <th>카드번호</th>
                        <td>1234 12** ****</td>
                      </tr>
                      <tr>
                        <th>승인번호</th>
                        <td>1212312345678</td>
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

            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
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

            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">유의사항</div>
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
                        <td colspan="3">교육기관명이 노출됩니다.</td>
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
                        <td colspan="2">교육기관명이 노출됩니다.</td>
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

            <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
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

            <div class="ibk-dialog-apply-item">
              <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">유의사항</div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="신청취소" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-apply__title">평가(어학)비 지원신청 상세</div>
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
                <tr>
                  <th>성적증명서 사본</th>
                  <td colspan="3">여기에는 등록된 성적증명서 사본명이 노출됩니다.</td>
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
                <tr>
                  <th colspan="2">성적증명서 사본</th>
                </tr>
                <tr>
                  <td colspan="2">2028.12.31</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="신청취소" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학자금 지원신청 상세</div>
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
                  <td colspan="3">
                    <strong>5,000,000</strong>
                  </td>
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
                  <th>학위</th>
                  <th>학위과정</th>
                </tr>
                <tr>
                  <td>학사</td>
                  <td>박사</td>
                </tr>
                <tr>
                  <th colspan="2">학교명</th>
                </tr>
                <tr>
                  <td colspan="2">기업 대학원</td>
                </tr>
                <tr>
                  <th colspan="2">전공명</th>
                </tr>
                <tr>
                  <td colspan="2">금융 학과</td>
                </tr>
                <tr>
                  <th>학기(학년)</th>
                  <th>재학구분</th>
                </tr>
                <tr>
                  <td>2</td>
                  <td>재학</td>
                </tr>
                <tr>
                  <th>입학일</th>
                  <th>졸업예정일</th>
                </tr>
                <tr>
                  <td>2028.12.31</td>
                  <td>2028.12.31</td>
                </tr>
                <tr>
                  <th>직전학기평점</th>
                  <th>직전학기평균</th>
                </tr>
                <tr>
                  <td>3.5</td>
                  <td>4/5</td>
                </tr>
                <tr>
                  <th colspan="2">수혜수</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="flex justify-content-between">
                      <span>2</span>
                      <span class="text-slate-500 text-xs"> 금차 신청을 포함한 학자금 총 수혜 횟수</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">등록금(A)</th>
                </tr>
                <tr>
                  <td colspan="2">10,000,000</td>
                </tr>
                <tr>
                  <th colspan="2">장학금(B)</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="flex justify-content-between">
                      <span>5,000,000</span>
                      <span class="text-slate-500 text-xs">대상자는 교내 장학금 수혜 확인서 첨부 필수</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">납입금(A-B)</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <strong>5,000,000</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
        <Button label="신청취소" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="지원금 신청 상세"></Button><br /><br />
    <Button @click="modal02 = true" label="평가(어학)비 지원신청 상세"></Button><br /><br />
    <Button @click="modal03 = true" label="학자금 지원신청 상세"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

const dates = ref('2025.01.01 - 2025.01.01');

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
</script>
