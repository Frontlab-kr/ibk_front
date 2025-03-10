<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>사용시설 신청내역</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청하기" outlined rounded icon="ibk-icon-16-apply" />
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
            <div class="ibk-apply-center">
              <div class="ibk-apply-center-head">
                <div class="pc">
                  <div class="ibk-apply-center-head__title">연수원 내역</div>
                </div>
                <div class="ibk-apply-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                  <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-apply-center-head__title">연수원 내역</div>
              </div>
              <div class="ibk-apply-center-list">
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary">배정가능 · 취소가능</strong>
                      휴양동 연수원
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>적용점수</span>
                        <span>5000</span>
                      </li>
                      <li>
                        <span>신청일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="우선순위확인" severity="secondary" class="text-primary-600" />
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary">탈락예정 · 취소가능</strong>
                      휴양동 연수원
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>적용점수</span>
                        <span>5000</span>
                      </li>
                      <li>
                        <span>신청일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="우선순위확인" severity="secondary" class="text-primary-600" />
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-zinc-500">취소완료</strong>
                      휴양동 연수원
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>적용점수</span>
                        <span>5000</span>
                      </li>
                      <li>
                        <span>신청일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-zinc-500">배정탈락</strong>
                      휴양동 연수원
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>적용점수</span>
                        <span>5000</span>
                      </li>
                      <li>
                        <span>신청일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary-400">배정완료· 입실완료</strong>
                      휴양동 연수원
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>적용점수</span>
                        <span>5000</span>
                      </li>
                      <li>
                        <span>신청일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="ibk-apply-center">
              <div class="ibk-apply-center-head">
                <div class="pc">
                  <div class="ibk-apply-center-head__title">강의실 내역</div>
                </div>
                <div class="ibk-apply-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                  <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-apply-center-head__title">강의실 내역</div>
              </div>
              <div class="ibk-apply-center-list">
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary">승인</strong>
                      기업은행 강의실
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>시작일시</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>종료일시</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-zinc-500">미승인</strong>
                      기업은행 강의실
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>시작일시</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>종료일시</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary-400">승인 · 사용완료</strong>
                      기업은행 강의실
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>시작일시</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>종료일시</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary-400">승인 · 사용완료</strong>
                      기업은행 강의실
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>시작일시</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>종료일시</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary-400">승인 · 사용완료</strong>
                      기업은행 강의실
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>시작일시</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>종료일시</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="ibk-apply-center">
              <div class="ibk-apply-center-head">
                <div class="pc">
                  <div class="ibk-apply-center-head__title">스튜디오 내역</div>
                </div>
                <div class="ibk-apply-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                  <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                </div>
              </div>
              <div class="mo">
                <div class="ibk-apply-center-head__title">스튜디오 내역</div>
              </div>
              <div class="ibk-apply-center-list">
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary">승인</strong>
                      기업은행 스튜디오
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary">승인</strong>
                      기업은행 스튜디오
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-apply-center-list-item__button">
                    <Button label="신청취소" severity="secondary" outlined />
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-zinc-500">미승인</strong>
                      기업은행 스튜디오
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-zinc-500">미승인</strong>
                      기업은행 스튜디오
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-apply-center-list-item">
                  <div class="ibk-apply-center-list-item__text">
                    <div class="ibk-apply-center-list-item__title">
                      <strong class="text-primary-400">승인 · 사용완료</strong>
                      기업은행 스튜디오
                    </div>
                    <ul>
                      <li class="text-gray-900">
                        <span>신청일</span>
                        <span>2028.12.30</span>
                      </li>
                      <li>
                        <span>입실일</span>
                        <span>2028.12.31</span>
                      </li>
                      <li>
                        <span>퇴실일</span>
                        <span>2028.12.31</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-ranking">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-ranking__title">나의 순위 상세</div>
    </template>

    <div class="ibk-dialog-ranking-list">
      <div class="ibk-dialog-ranking-list-item active">
        <div class="ibk-dialog-ranking-list-item__number">1</div>
        <div class="ibk-dialog-ranking-list-item__text">
          <div class="ibk-dialog-ranking-list-item__title">
            82회차
            <strong class="text-primary">배정가능</strong>
          </div>
          <ul>
            <li>
              <span>입실일</span>
              <span>2028.12.31</span>
            </li>
            <li>
              <span>숙박일수</span>
              <span>2</span>
            </li>
            <li>
              <span>적용점수</span>
              <span>100</span>
            </li>
            <li>
              <span>근속점수</span>
              <span>395</span>
            </li>
          </ul>
        </div>
        <div class="ibk-dialog-ranking-list-item__badge">
          <Badge value="나의순위" style="background: #308af2; color: #fff"></Badge>
        </div>
      </div>
      <div class="ibk-dialog-ranking-list-item" v-for="i of 5">
        <div class="ibk-dialog-ranking-list-item__number">{{ i }}</div>
        <div class="ibk-dialog-ranking-list-item__text">
          <div class="ibk-dialog-ranking-list-item__title">
            82회차
            <strong class="text-primary">배정가능</strong>
          </div>
          <ul>
            <li>
              <span>입실일</span>
              <span>2028.12.31</span>
            </li>
            <li>
              <span>숙박일수</span>
              <span>2</span>
            </li>
            <li>
              <span>적용점수</span>
              <span>100</span>
            </li>
            <li>
              <span>근속점수</span>
              <span>395</span>
            </li>
          </ul>
        </div>
        <div class="ibk-dialog-ranking-list-item__badge"></div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-file__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수원 이용 상세</div>
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
        <div class="ibk-dialog-apply-result">
          <ul>
            <li>
              <strong>이용기간선택</strong>
              2028.01.31 - 2028.02.03 ・ 3박4일
            </li>
            <li>
              <strong>비상연락망</strong>
              010-0000-0000
            </li>
            <li>
              <strong>차량번호</strong>
              48서 0000
            </li>
            <li>
              <strong>입소자 명단</strong>
              이기은 · 이은행 · 이기업 · 이은기 · 김연지
            </li>
            <li>
              <strong>비고</strong>
              연락이 안된다면 010-0000-0000으로 연락 부탁 드립니다.
            </li>
          </ul>
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
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">강의실 이용 상세</div>
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
                  <td>2028.01.01・10:00 - 11:00</td>
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
        <div class="ibk-dialog-apply-result">
          <ul>
            <li>
              <strong>신청자</strong>
              이기은
            </li>
            <li>
              <strong>신청자 생년월일</strong>
              800101
            </li>
            <li>
              <strong>사용인원</strong>
              5명
            </li>
            <li>
              <strong>사무실 전화번호</strong>
              010-0000-0000
            </li>
            <li>
              <strong>휴대폰 번호</strong>
              010-0000-0000
            </li>
            <li>
              <strong>비고</strong>
              연락이 안된다면 010-0000-0000으로 연락 부탁 드립니다.
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 필수유의사항</p>
          <p>2. 필수유의사항</p>
          <p>3. 필수유의사항</p>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-apply__title">스튜디오 이용 상세</div>
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
                  <td>2028.01.27 ・ 10:00 - 11:00</td>
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
                  <td>2028.01.27 ・ 10:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-result">
          <ul>
            <li>
              <strong>신청자</strong>
              이기은
            </li>
            <li>
              <strong>신청자 생년월일</strong>
              800101
            </li>
            <li>
              <strong>사용인원</strong>
              5명
            </li>
            <li>
              <strong>사무실 전화번호</strong>
              010-0000-0000
            </li>
            <li>
              <strong>휴대폰 번호</strong>
              010-0000-0000
            </li>
            <li>
              <strong>비고</strong>
              연락이 안된다면 010-0000-0000으로 연락 부탁 드립니다.
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">필수유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 필수유의사항</p>
          <p>2. 필수유의사항</p>
          <p>3. 필수유의사항</p>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal04 = false" />
        <Button label="수정" severity="primary" size="large" class="w-full" @click="modal04 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="나의 순위 상세"></Button><br /><br />
    <Button @click="modal02 = true" label="연수원 이용 상세"></Button><br /><br />
    <Button @click="modal03 = true" label="강의실 이용 상세"></Button><br /><br />
    <Button @click="modal04 = true" label="스튜디오 이용 상세"></Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
const dates = ref();

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
const modal04 = ref(false);
</script>
