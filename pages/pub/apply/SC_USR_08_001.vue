<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>역량개발지원</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청내역 확인" outlined rounded icon="ibk-icon-16-doc" />
        </div>
      </div>
      <Tabs value="5">
        <TabList>
          <Tab value="0">학원수강(응시)료</Tab>
          <Tab value="1">자격증현황</Tab>
          <Tab value="2">어학성적</Tab>
          <Tab value="3">학자금</Tab>
          <Tab value="4">학술연수신청</Tab>
          <Tab value="5">스킬지수&로드맵</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-apply-list">
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-head">
                  <h4>역량개발 지원 제도 분기별 한도 현황</h4>
                  <Button label="기 지원현황" />
                </div>
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: 344px" />
                        <col style="width: 344px" />
                        <col style="width: 344px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>순번</th>
                          <th>기간구분명</th>
                          <th>한도 차감금액</th>
                          <th>잔여한도</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">1</td>
                          <td class="text-center">상반기</td>
                          <td class="text-center">250,000</td>
                          <td class="text-center">0</td>
                        </tr>
                        <tr>
                          <td class="text-center">1</td>
                          <td class="text-center">하반기</td>
                          <td class="text-center">179,000</td>
                          <td class="text-center">71,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">학원수강료/응시료 지원 안내</div>
                    <ul>
                      <li>
                        <strong>지원대상</strong>
                        <p>
                          본 제도는 직원 본인을 위한 지원 제도입니다.<br />
                          따라서 가족이나 지인의 사용 내역은 지원 대상이 아닙니다.
                        </p>
                      </li>
                      <li>
                        <strong>지원기간</strong>
                        <p>결제 후 1개월 인</p>
                      </li>
                      <li>
                        <strong>기타</strong>
                        <p>
                          타행 카드 사용 및 결제 후 취소한 경우 <br />
                          교습소 , 학습지 등 학원 업종이 아닌 기관의 경우<br />
                          휴직기간 중 수강한 학원 수강료의 경우
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>시험 응시료는 휴직기간 중 취득한 경우도 지원 가능</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">지원절차</div>
                    <ul>
                      <li>
                        <strong>01. 수강등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>02. 지원신청</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>03. 검증 ・ 승인</strong>
                        <p>
                          중복지급불가<br />
                          학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                          - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                          * 신정제외’등록 후 전산 반영에 2 영업일 소요
                        </p>
                      </li>
                      <li>
                        <strong>04. 학원비 지원</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>05. 결과등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">증빙서류</div>
                    <ul>
                      <li>
                        <strong>신청</strong>
                        <p>수강증 ・ 영수증</p>
                      </li>
                      <li>
                        <strong>필수서류</strong>
                        <p>
                          아래 내용이 확인 가능한 학습시설(독서실) 수강증<br />
                          ① 수강생 성명 ② 수강기간(책임자 시험 통 신연수 기간내) ③ 학습시설명<br />
                          <br />
                          카드영수증 : 거래품목, 승인번호, 결제일, 결제금액 표기<br />
                          <br />
                          학습시설(독서실) 조회방법
                          <br />❶ 교육청 대국민서비스(hakwon.neis.go.kr)사이트 접속 후 지역별 교육청 선택 <br />❷
                          [학원·교습소 정보조회]에서 지역 선택 후 독서실로 검색<br />(혹은 학원종류 ‘학교교과교습학원’ →
                          분야구분 ‘독서실’ 선택 후 검색)
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-list-item-caution p-0">
                    <h5>유의사항</h5>
                    <div class="ibk-apply-list-item-caution-text">
                      <ul>
                        <li>
                          <strong>중복지급 불가</strong><br />
                          학원 수강료/응시료 지원금과 선택적 복지비의 중복지급은 불가하오니 유의하시기 바랍니다.
                          <br />- 복지비카드 시스템 → 자동승인 건의 경우 반드시 '신청제외' 등록 <br />※ '신청제외' 등록
                          후 전산반영에 2영업일 소요
                        </li>
                        <li>
                          <strong>한도복원 불가</strong><br />
                          지급 제외된 건에 대해서는 개별 한도가 복원되지 않습니다.<br />
                          ※ 일별 소급적용 불가
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-button">
                <div class="ibk-apply-list-button-inner">
                  <div class="ibk-apply-list-button-check">
                    <Checkbox v-model="checkbox01" inputId="checkbox1" value="checkbox1" />
                    <label for="checkbox1">위 사항을 모두 확인했고, 지원을 신청합니다.</label>
                  </div>
                  <Button label="지원신청" size="large" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="ibk-apply-list">
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-head">
                  <h4>자격증 취득 및 지원 현황</h4>
                  <Button label="지원 자격증" />
                </div>
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 140px" />
                        <col style="width: 171px" />
                        <col style="width: 120px" />
                        <col style="width: 171px" />
                        <col style="width: 171px" />
                        <col style="width: 171px" />
                        <col style="width: 128px" />
                        <col style="width: 128px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>순번</th>
                          <th>취득자격증</th>
                          <th>자격증등급</th>
                          <th>취득일자</th>
                          <th>등록일자</th>
                          <th>연수보조금 지원금액</th>
                          <th>상세</th>
                          <th>비고</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i of 4">
                          <td class="text-center">{{ i }}</td>
                          <td class="text-center">정보관리기술사</td>
                          <td class="text-center">1</td>
                          <td class="text-center">2028.12.31</td>
                          <td class="text-center">2028.12.31</td>
                          <td class="text-center">-</td>
                          <td class="text-center">
                            <Button label="상세보기" severity="secondary" outlined />
                          </td>
                          <td class="text-center">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ibk-info">
                    <p>
                      지원금액은 연수비용(사이버, 통신, 인하우스 등)을 차감 후 입금된 금액임. 단, 투자자산운용사,
                      은행FP, AFPK는 중복취득 시, <br />
                      연수 보조금은 하나만 지원함. 합격년도 말일 기준 2년 경과된 자격증은 지원 내역은 기일경과로
                      표시하지 않음
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="ibk-apply-list">
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">평가비 지원안내</div>
                    <ul>
                      <li>
                        <strong>지원대상</strong>
                        <p>지급일 현재 재직중인 직원(일반 ・ 전문 ・ 특정 ・ 계약)</p>
                      </li>
                      <li>
                        <strong>신청기한</strong>
                        <p>평가일로부터 2개월 이내</p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>
                      학원비에 교재비가 포함된 경우 학원비 지원신청 금액 전산입력 시, 교재비를 차감한 금액만 입력 (해당
                      교재비 영수증을 증빙서류로 추가 제출)
                    </p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <!-- <div class="ibk-apply-list-item-head">
                  <h4>지원내용</h4>
                </div> -->
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">지원내용</div>
                    <div class="ibk-table ibk-table--scroll-x mt-4">
                      <table>
                        <colgroup>
                          <col style="width: 168px" />
                          <col style="width: 344px" />
                          <col style="width: 344px" />
                          <col style="width: 344px" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>분야</th>
                            <th>학습부문</th>
                            <th>학습방법</th>
                            <th>지원범위</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">외국어</td>
                            <td class="text-center">영어 ・ 중국어 ・ 일어 등</td>
                            <td class="text-center">학원 ・ 인터넷 ・ 전화 ・ 학습지 수강</td>
                            <td class="text-center">
                              <div class="flex align-items-center">
                                年 96만원
                                <hr />
                                학원비의 80% (교재비 제외)
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">ICT</td>
                            <td class="text-center">IT ・ 디지털 ・ 데이터 등</td>
                            <td class="text-center">학원 ・ 인터넷 수강</td>
                            <td class="text-center">
                              <div class="flex align-items-center">
                                年 96만원
                                <hr />
                                학원비의 80% (교재비 제외)
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">추가</td>
                            <td class="text-center">-</td>
                            <td class="text-center">-</td>
                            <td class="text-center">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">지원절차</div>
                    <ul>
                      <li>
                        <strong>01. 수강등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>02. 지원신청</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>03. 검증 ・ 승인</strong>
                        <p>
                          중복지급불가<br />
                          학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                          - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                          * 신정제외’등록 후 전산 반영에 2 영업일 소요
                        </p>
                      </li>
                      <li>
                        <strong>04. 학원비 지원</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>05. 결과등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">증빙서류</div>
                    <ul>
                      <li>
                        <strong>신청</strong>
                        <p>수강증 ・ 영수증</p>
                      </li>
                      <li>
                        <strong>필수서류</strong>
                        <p>온라인 시용카드 매출 전표</p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-button">
                <div class="ibk-apply-list-button-inner">
                  <div class="ibk-apply-list-button-check">
                    <Checkbox v-model="checkbox01" inputId="checkbox1" value="checkbox1" />
                    <label for="checkbox1">위 사항을 모두 확인했고, 지원을 신청합니다.</label>
                  </div>
                  <Button label="지원신청" size="large" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div class="ibk-apply-list">
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">학자금 지원안내</div>
                    <ul>
                      <li>
                        <strong>지원대상</strong>
                        <p>지급일 현재 재직중인 직원(일반 ・ 전문 ・ 특정 ・ 계약)</p>
                      </li>
                      <li>
                        <strong>신청기한</strong>
                        <p>등록금 납입일로부터 1년 이내 신청</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-head">
                  <h4>지원내용</h4>
                </div>
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: 344px" />
                        <col style="width: 344px" />
                        <col style="width: 344px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>분야</th>
                          <th>학사</th>
                          <th>석사</th>
                          <th>박사</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">대상학교</td>
                          <td class="text-center">대학교 및 대학원</td>
                          <td class="text-center">대학교 및 대학원</td>
                          <td class="text-center">대학교 및 대학원</td>
                        </tr>
                        <tr>
                          <td class="text-center">지원범위</td>
                          <td class="text-center">학자금의 50%</td>
                          <td class="text-center">학자금의 50%</td>
                          <td class="text-center">학자금의 100%</td>
                        </tr>
                        <tr>
                          <td class="text-center">지원조건</td>
                          <td class="text-center">평균 평점 B학점(2.8/4.5) 이상</td>
                          <td class="text-center">평균 평점 B학점(2.8/4.5) 이상</td>
                          <td class="text-center">평균 평점 B학점(2.8/4.5) 이상</td>
                        </tr>
                        <tr>
                          <td class="text-center">지원한도</td>
                          <td class="text-center">140학점 이내</td>
                          <td class="text-center">140학점 이내</td>
                          <td class="text-center">학기 및 학점 제한없음</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">지원절차</div>
                    <ul>
                      <li>
                        <strong>01. 수강등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>02. 지원신청</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>03. 검증 ・ 승인</strong>
                        <p>
                          중복지급불가<br />
                          학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                          - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                          * 신정제외’등록 후 전산 반영에 2 영업일 소요
                        </p>
                      </li>
                      <li>
                        <strong>04. 학원비 지원</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>05. 결과등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">증빙서류</div>
                    <ul>
                      <li>
                        <strong>신입생(최초신청)</strong>
                        <p>해당 교육기관에서 발급한 등록금 납입증명서</p>
                      </li>
                      <li>
                        <strong>재학</strong>
                        <p>
                          직전학기 성적증명서(진위확인코드 16자리 필수 입력)<br />
                          해당 교육기관에서 발급한 등록금납입증명서(은행입금영수증 / 이체확인증 인정 불가)
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-button">
                <div class="ibk-apply-list-button-inner">
                  <div class="ibk-apply-list-button-check">
                    <Checkbox v-model="checkbox01" inputId="checkbox1" value="checkbox1" />
                    <label for="checkbox1">위 사항을 모두 확인했고, 지원을 신청합니다.</label>
                  </div>
                  <Button label="지원신청" size="large" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="4">
            <div class="ibk-apply-list">
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">학술연수 신청</div>
                    <ul>
                      <li>
                        <strong>지원대상</strong>
                        <p>관리자에서 작성한 내용이 노출 됩니다.</p>
                      </li>
                      <li>
                        <strong>지원기간</strong>
                        <p>관리자에서 작성된 내용이 노출 됩니다.</p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>관련안내 문구가 노출됩니다.</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-head">
                  <h4>지원 안내</h4>
                </div>
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-table ibk-table--scroll-x">
                    <table>
                      <colgroup>
                        <col style="width: 160px" />
                        <col style="width: 1040px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-left">분야</th>
                          <th class="text-left">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>국내</td>
                          <td>작성정보가 노출 됩니다. 작성정보가 노출 됩니다. 작성정보가 노출 됩니다</td>
                        </tr>
                        <tr>
                          <td>해외</td>
                          <td>작성정보가 노출 됩니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">지원절차</div>
                    <ul>
                      <li>
                        <strong>01. 수강등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>02. 지원신청</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>03. 검증 ・ 승인</strong>
                        <p>
                          중복지급불가<br />
                          학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                          - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                          * 신정제외’등록 후 전산 반영에 2 영업일 소요
                        </p>
                      </li>
                      <li>
                        <strong>04. 학원비 지원</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                      <li>
                        <strong>05. 결과등록</strong>
                        <p>작성정보가 노출됩니다.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-item">
                <div class="ibk-apply-list-item-body">
                  <div class="ibk-apply-info">
                    <div class="ibk-apply-info__title">증빙서류</div>
                    <ul>
                      <li>
                        <strong>신청</strong>
                        <p>수강증 ・ 영수증</p>
                      </li>
                      <li>
                        <strong>학습결과 등록</strong>
                        <p>수료증</p>
                      </li>
                    </ul>
                  </div>
                  <div class="ibk-info">
                    <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
                  </div>
                </div>
              </div>
              <div class="ibk-apply-list-button">
                <div class="ibk-apply-list-button-inner">
                  <div class="ibk-apply-list-button-check">
                    <Checkbox v-model="checkbox01" inputId="checkbox1" value="checkbox1" />
                    <label for="checkbox1">위 사항을 모두 확인했고, 지원을 신청합니다.</label>
                  </div>
                  <Button label="지원신청" size="large" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="5">
            <div class="ibk-roadmap">
              <Tabs value="1">
                <div class="ibk-roadmap-tab">
                  <TabList>
                    <Tab value="0">로드맵 현황</Tab>
                    <Tab value="1">자격증</Tab>
                    <Tab value="2">나의 이력</Tab>
                    <Tab value="3">부점 현황</Tab>
                  </TabList>
                </div>
                <TabPanels>
                  <TabPanel value="0">
                    <div class="ibk-roadmap-title">
                      <h4>전문분야</h4>
                    </div>
                    <div class="ibk-roadmap-category">
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>여신심사</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>자산운용</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>외환</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>재무회계</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item active">
                        <h6>디지털</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>PB</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>컴플라이언스</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/" class="ibk-roadmap-category-item">
                        <h6>IB</h6>
                        <p>
                          <strong>Level 1</strong>
                          80점
                        </p>
                      </NuxtLink>
                    </div>
                    <div class="ibk-roadmap-contents">
                      <div class="ibk-roadmap-contents-head">
                        <div class="ibk-roadmap-contents-head-item active">비지니스</div>
                        <div class="ibk-roadmap-contents-head-item active">데이터</div>
                        <div class="ibk-roadmap-contents-head-item">신기술</div>
                        <div class="ibk-roadmap-contents-head-item">정보화전략</div>
                        <div class="ibk-roadmap-contents-head-item">인프라</div>
                        <div class="ibk-roadmap-contents-head-item">IT개발</div>
                        <div class="ibk-roadmap-contents-head-item">정보보완</div>
                      </div>

                      <Accordion :value="['0', '1']" multiple>
                        <AccordionPanel value="0">
                          <AccordionHeader>
                            <div class="ibk-roadmap-accordion-header">
                              <h4>1단계</h4>
                              <p>
                                <span class="open">전체펼침</span>
                                <span class="close">전체닫기</span>
                              </p>
                            </div>
                          </AccordionHeader>
                          <AccordionContent>
                            <MasonryWall :items="items" :ssr-columns="1" :column-width="158" :gap="6">
                              <template #default="{ item, index }">
                                <div class="ibk-roadmap-contents-map-list">
                                  <div class="ibk-roadmap-contents-map-title">
                                    {{ item }}
                                  </div>
                                  <div class="ibk-roadmap-contents-map-body">
                                    <div class="ibk-roadmap-contents-map-item" v-for="i of index">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="지식"
                                          style="background: rgba(48, 209, 88, 0.1); color: #30d158"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                    <div class="ibk-roadmap-contents-map-item active">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="기술"
                                          style="background: rgba(113, 81, 255, 0.1); color: #7151ff"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ibk-roadmap-contents-map-more">
                                    <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
                                  </div>
                                </div>
                              </template>
                            </MasonryWall>
                          </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="1">
                          <AccordionHeader>
                            <div class="ibk-roadmap-accordion-header">
                              <h4>2단계</h4>
                              <p>
                                <span class="open">전체펼침</span>
                                <span class="close">전체닫기</span>
                              </p>
                            </div>
                          </AccordionHeader>
                          <AccordionContent>
                            <MasonryWall :items="items" :ssr-columns="1" :column-width="158" :gap="6">
                              <template #default="{ item, index }">
                                <div class="ibk-roadmap-contents-map-list">
                                  <div class="ibk-roadmap-contents-map-title">
                                    {{ item }}
                                  </div>
                                  <div class="ibk-roadmap-contents-map-body">
                                    <div class="ibk-roadmap-contents-map-item">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="지식"
                                          style="background: rgba(48, 209, 88, 0.1); color: #30d158"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                    <div class="ibk-roadmap-contents-map-item active">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="기술"
                                          style="background: rgba(113, 81, 255, 0.1); color: #7151ff"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ibk-roadmap-contents-map-more">
                                    <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
                                  </div>
                                </div>
                              </template>
                            </MasonryWall>
                          </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="2">
                          <AccordionHeader>
                            <div class="ibk-roadmap-accordion-header">
                              <h4>3단계</h4>
                              <p>
                                <span class="open">전체펼침</span>
                                <span class="close">전체닫기</span>
                              </p>
                            </div>
                          </AccordionHeader>
                          <AccordionContent>
                            <MasonryWall :items="items02" :ssr-columns="1" :column-width="300" :gap="6">
                              <template #default="{ item, index }">
                                <div class="ibk-roadmap-contents-map-list">
                                  <div class="ibk-roadmap-contents-map-title">
                                    {{ item }}
                                  </div>
                                  <div class="ibk-roadmap-contents-map-body">
                                    <div class="ibk-roadmap-contents-map-item">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="지식"
                                          style="background: rgba(48, 209, 88, 0.1); color: #30d158"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                    <div class="ibk-roadmap-contents-map-item active">
                                      <div class="ibk-roadmap-contents-map-item__head">
                                        <Badge
                                          value="기술"
                                          style="background: rgba(113, 81, 255, 0.1); color: #7151ff"
                                        ></Badge>
                                        <strong>50점</strong>
                                      </div>
                                      <div class="ibk-roadmap-contents-map-item__title">
                                        <p>고객경험(CX) (UI/UX)의 이해</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ibk-roadmap-contents-map-more">
                                    <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
                                  </div>
                                </div>
                              </template>
                            </MasonryWall>
                          </AccordionContent>
                        </AccordionPanel>
                      </Accordion>
                    </div>
                  </TabPanel>
                  <TabPanel value="1">
                    <div class="ibk-roadmap-title">
                      <h4>자격증 검색</h4>
                    </div>
                    <div class="ibk-roadmap-depth">
                      <dl>
                        <dt>등급</dt>
                        <dd>
                          <Button label="전체" severity="secondary" text class="active" />
                          <Button label="1등급" severity="secondary" text />
                          <Button label="2등급" severity="secondary" text />
                          <Button label="3등급" severity="secondary" text />
                          <Button label="4등급" severity="secondary" text />
                          <Button label="5등급" severity="secondary" text />
                          <Button label="등급 외" severity="secondary" text />
                        </dd>
                      </dl>
                      <hr />
                      <dl>
                        <dt>전문분야</dt>
                        <dd>
                          <Button label="여신심사" outlined rounded />
                          <Button label="자산운용" outlined rounded />
                          <Button label="재무회계" outlined rounded />
                          <Button label="컴플라이언스" outlined rounded />
                          <Button label="IB" outlined rounded class="active" />
                          <Button label="외환" outlined rounded />
                          <Button label="IT 디지털" outlined rounded />
                          <Button label="개인SOHO" outlined rounded />
                        </dd>
                      </dl>
                    </div>
                    <div class="ibk-qualifications">
                      <div
                        class="ibk-qualifications-item ibk-qualifications-item--01 ibk-qualifications-item--disabled"
                      >
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CAMS
                            <p>
                              Certified Anti-Money laundering Specialist<br />
                              자금세탁방지전문가
                            </p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="ibk-qualifications-item ibk-qualifications-item--02">
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            데이터 분석 전문가
                            <p>Advanced Data Analytics Professional</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="ibk-qualifications-item ibk-qualifications-item--03">
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            여신심사역
                            <p>CLO.舊대출심사역</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="ibk-qualifications-item ibk-qualifications-item--04">
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CISSP
                            <p>Certified Information Systems Security Professional 정보시스템보안전문가</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div
                        class="ibk-qualifications-item ibk-qualifications-item--00 ibk-qualifications-item--disabled"
                      >
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CISSP
                            <p>Certified Information Systems Security Professional 정보시스템보안전문가</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="ibk-qualifications-item ibk-qualifications-item--05">
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CISSP
                            <p>Certified Information Systems Security Professional 정보시스템보안전문가</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="ibk-qualifications-item ibk-qualifications-item--01">
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CISSP
                            <p>Certified Information Systems Security Professional 정보시스템보안전문가</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div
                        class="ibk-qualifications-item ibk-qualifications-item--05 ibk-qualifications-item--disabled"
                      >
                        <div class="ibk-qualifications-item__head">
                          <div class="ibk-qualifications-item__title">
                            CISSP
                            <p>Certified Information Systems Security Professional 정보시스템보안전문가</p>
                          </div>
                        </div>
                        <div class="ibk-qualifications-item__mileage">300 mileage</div>
                        <div class="ibk-qualifications-item__chips ibk">
                          <Chip label="여신심사" />
                          <Chip label="자산운용" />
                          <Chip label="재무회계" />
                          <Chip label="외환" />
                        </div>
                      </div>
                      <div class="mo w-full">
                        <div class="ibk-qualifications-more">
                          <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div class="ibk-roadmap-history">
                      <div class="ibk-roadmap-history-head">
                        <h4>Score 누적 이력</h4>
                        <Select v-model="selected01" :options="selected01Option" optionLabel="name" />
                      </div>
                      <div class="ibk-roadmap-history-contents">
                        <h5>월별 현황</h5>
                        <div class="ibk-roadmap-history-chart-line">
                          <Chart type="line" :data="chartData02" :options="chartOptions02" />
                        </div>
                        <h5>연수이력</h5>
                        <div class="ibk-table ibk-table--scroll-x">
                          <table>
                            <colgroup>
                              <col style="width: 120px" />
                              <col style="width: 920px" />
                              <col style="width: 160px" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>월</th>
                                <th class="text-left">연수명</th>
                                <th>획득 Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="i of 12">
                                <td class="text-center">{{ i }}월</td>
                                <td class="text-left">연수명이 노출 됩니다.</td>
                                <td class="text-center">11pt</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div class="ibk-roadmap-state">
                      <div class="ibk-roadmap-state-head">
                        <div class="ibk-roadmap-state-head-title">
                          <h4>부점정보</h4>
                          <p>
                            <span>본부부서</span>
                            <span>경영지원그룹 </span>
                          </p>
                        </div>
                        <div class="ibk-roadmap-state-head-search">
                          <IconField>
                            <InputIcon class="ibk-icon-16-search" />
                            <InputText placeholder="검색어를 입력하세요." />
                          </IconField>
                          <div class="pc">
                            <Button label="검색" severity="primary" />
                          </div>
                        </div>
                      </div>
                      <div class="ibk-roadmap-state-contents">
                        <h5>연수 및 자격증 현황</h5>
                        <div class="ibk-roadmap-state-chart">
                          <div class="ibk-roadmap-state-chart-item">
                            <div class="ibk-roadmap-state-chart-item-text">
                              <h6>권장학습 이수율</h6>
                              <p>60 / 100</p>
                            </div>
                            <div class="ibk-roadmap-state-chart-chart">
                              <p>
                                60 / 100
                                <strong> 60% </strong>
                              </p>
                              <Chart type="doughnut" :data="chartData01" :options="chartOptions01" />
                            </div>
                            <Button label="상세보기" severity="secondary" outlined class="w-full" />
                          </div>
                          <div class="ibk-roadmap-state-chart-item">
                            <div class="ibk-roadmap-state-chart-item-text">
                              <h6>창구필수 자격증</h6>
                              <p>60 / 100</p>
                            </div>
                            <div class="ibk-roadmap-state-chart-chart">
                              <p>
                                60 / 100
                                <strong> 60% </strong>
                              </p>
                              <Chart type="doughnut" :data="chartData01" :options="chartOptions01" />
                            </div>
                            <Button label="상세보기" severity="secondary" outlined class="w-full" />
                          </div>
                          <div class="ibk-roadmap-state-chart-item">
                            <div class="ibk-roadmap-state-chart-item-text">
                              <h6>법정의무 교육</h6>
                              <p>60 / 100</p>
                            </div>
                            <div class="ibk-roadmap-state-chart-chart">
                              <p>
                                60 / 100
                                <strong> 60% </strong>
                              </p>
                              <Chart type="doughnut" :data="chartData01" :options="chartOptions01" />
                            </div>
                            <Button label="상세보기" severity="secondary" outlined class="w-full" />
                          </div>
                          <div class="ibk-roadmap-state-chart-item">
                            <div class="ibk-roadmap-state-chart-item-text">
                              <h6>책임자시험 합격</h6>
                              <p>60 / 100</p>
                            </div>
                            <div class="ibk-roadmap-state-chart-chart">
                              <p>
                                60 / 100
                                <strong> 60% </strong>
                              </p>
                              <Chart type="doughnut" :data="chartData01" :options="chartOptions01" />
                            </div>
                            <Button label="상세보기" severity="secondary" outlined class="w-full" />
                          </div>
                        </div>
                        <h5>전문 분야 현황</h5>
                        <div class="ibk-roadmap-state-info">
                          <div class="ibk-roadmap-state-info-chart">
                            <div class="ibk-roadmap-state-info-chart-head">
                              <h6>전문분야</h6>
                            </div>
                            <div class="ibk-roadmap-state-info-chart-body">
                              <Chart type="radar" :data="chartData03" :options="chartOptions03" />
                            </div>
                          </div>
                          <div class="ibk-roadmap-state-info-table">
                            <div class="ibk-table ibk-table--scroll-x">
                              <table>
                                <colgroup>
                                  <col style="width: 104px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>레벨</th>
                                    <th>여신심사</th>
                                    <th>자산운영</th>
                                    <th>외환</th>
                                    <th>개인소호</th>
                                    <th>디지털</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="i of 4">
                                    <th>Level 3</th>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="ibk-table ibk-table--scroll-x">
                              <table>
                                <colgroup>
                                  <col style="width: 104px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                  <col style="width: 132px" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>레벨</th>
                                    <th>PB</th>
                                    <th>컴플라이언스</th>
                                    <th>IB</th>
                                    <th>재무회계</th>
                                    <th>평균</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="i of 4">
                                    <th>Level 3</th>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td class="result"><strong class="text-primary">100 </strong></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <h5>스킬지수현황</h5>
                        <div class="ibk-table ibk-table--scroll-x">
                          <table>
                            <thead>
                              <tr>
                                <th>이름</th>
                                <th>직책</th>
                                <th>여신심사</th>
                                <th>자산운영</th>
                                <th>외환</th>
                                <th>개인소호</th>
                                <th>디지털</th>
                                <th>PB</th>
                                <th>컴플라이언스</th>
                                <th>IB</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="i of 4">
                                <td>
                                  <strong>김인재</strong>
                                </td>
                                <td>과장</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                                <td>130 <br />(Lv1)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
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
      <div class="ibk-dialog-apply__title">지원 현황</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>연도 검색</label>
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
                        <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                        <label for="radio3" class="ml-2">재취업</label>
                      </div>
                      <div class="ibk-radio-item">
                        <RadioButton v-model="radio" inputId="radio4" value="radio4" />
                        <label for="radio4" class="ml-2">창업</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-6 col-12">
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
                <div class="lg:col-6 col-12">
                  <div class="field">
                    <label>기타</label>
                    <InputText type="text" size="large" class="w-full" placeholder="교육기관명을 입력해주세요." />
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
                    <label>신청반기</label>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                </div>
                <div class="lg:col-6 col-12">
                  <div class="field">
                    <label>반기 자동 한도</label>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>학원비(수강료)</label>
                    <div class="ibk-dialog-apply-item-search">
                      <InputText type="text" size="large" class="w-full" />
                      <Button label="복지비 내역조회" severity="primary" size="large" style="width: 180px" />
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

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수 보조금 지원금액 상세</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="pc">
          <div class="ibk-table ibk-table--scroll-x">
            <table>
              <colgroup>
                <col style="width: 181px" />
                <col style="width: 148px" />
                <col style="width: 196px" />
                <col style="width: 196px" />
              </colgroup>
              <thead>
                <tr>
                  <th>취득자격증</th>
                  <th>연수보조금 지원 금액</th>
                  <th>자격증 취득지원 금액</th>
                  <th>교육지원 차감 금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center"><strong>파생상품투자권유 자문인력</strong></td>
                  <td class="text-center">50,000원</td>
                  <td class="text-center">200,000원</td>
                  <td class="text-center">150,000원</td>
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 161px" />
                <col style="width: 76px" />
                <col style="width: 76px" />
                <col style="width: 76px" />
                <col style="width: 76px" />
              </colgroup>
              <thead>
                <tr>
                  <th>강의수강일</th>
                  <th>과정명</th>
                  <th>행내외구분</th>
                  <th>수강료</th>
                  <th>교육분류</th>
                  <th>신청일자</th>
                  <th>집합여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">2028.12.10 - 2028.12.31</td>
                  <td class="text-center">과졍명 노출과졍명 노출</td>
                  <td class="text-center">행내</td>
                  <td class="text-center">IBK사이버</td>
                  <td class="text-center">자격증</td>
                  <td class="text-center">2028.01.10</td>
                  <td class="text-center">N</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mo">
          <div class="ibk-dialog-apply-item__table">
            <table>
              <tbody>
                <tr>
                  <th>취득자격증</th>
                </tr>
                <tr>
                  <td>파생상품투자권유 자문인력</td>
                </tr>
                <tr>
                  <th>연수보조금 지원 금액</th>
                </tr>
                <tr>
                  <td>50,000원</td>
                </tr>
                <tr>
                  <th>자격증 취득지원 금액</th>
                </tr>
                <tr>
                  <td>200,000원</td>
                </tr>
                <tr>
                  <th>교육지원 차감 금액</th>
                </tr>
                <tr>
                  <td>150,000원</td>
                </tr>
                <tr>
                  <th>강의수강일</th>
                </tr>
                <tr>
                  <td>2028.12.10 - 2028.12.31</td>
                </tr>
                <tr>
                  <th>과정명</th>
                </tr>
                <tr>
                  <td>과졍명 노출과졍명 노출</td>
                </tr>
                <tr>
                  <th>행내 외 구분</th>
                </tr>
                <tr>
                  <td>행내</td>
                </tr>
                <tr>
                  <th>수강료</th>
                </tr>
                <tr>
                  <td>IBK사이버</td>
                </tr>
                <tr>
                  <th>교육분류</th>
                </tr>
                <tr>
                  <td>자격증</td>
                </tr>
                <tr>
                  <th>신청일자</th>
                </tr>
                <tr>
                  <td>2028.01.10</td>
                </tr>
                <tr>
                  <th>집합여부</th>
                </tr>
                <tr>
                  <td>N</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-apply__title">취득 지원 자격증</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 76px" />
              <col style="width: 180px" />
              <col style="width: 104px" />
              <col style="width: 180px" />
              <col style="width: 180px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>자격증</th>
                <th>등급</th>
                <th>연수보조금</th>
                <th>마일리지</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i of 3">
                <td class="text-center">{{ 1 }}</td>
                <td class="text-center">정보관리기술사</td>
                <td class="text-center">정보노출</td>
                <td class="text-center">100,000</td>
                <td class="text-center">1000점</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal04 = false" />
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
              <div class="ibk-radio ibk-radio--grid2">
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio1" value="radio1" />
                  <label for="radio1" class="ml-2">국내전일</label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">국내주말</label>
                </div>

                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                  <label for="radio3" class="ml-2">글로벌</label>
                </div>
                <div>
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
        <!-- <div class="ibk-table ibk-table--scroll-x">
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
        </div> -->
        <div class="pc">
          <div class="ibk-dialog-target-list__table">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 160px" />
                <col style="width: 160px" />
                <col style="width: 160px" />
                <col style="width: 160px" />
              </colgroup>
              <thead>
                <th class="text-center">선택</th>
                <th class="text-center">카드번호</th>
                <th class="text-center">승인번호</th>
                <th class="text-center">승인일</th>
                <th class="text-center">금액(원)</th>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in rows03"
                  :key="index"
                  :class="{ active: selectedValue03 === row.value }"
                  @click="selectValue03(row.value)"
                >
                  <td class="text-center">
                    <RadioButton v-model="selectedValue03" :value="row.value" />
                  </td>
                  <td class="text-center">
                    <strong>{{ row.card }}</strong>
                  </td>
                  <td class="text-center">
                    {{ row.confirm }}
                  </td>
                  <td class="text-center">{{ row.date }}</td>
                  <td class="text-center">{{ row.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mo">
          <div class="ibk-dialog-target-list__list">
            <ul>
              <li
                v-for="(row, index) in rows03"
                :key="index"
                :class="{ active: selectedValue03 === row.value }"
                @click="selectValue03(row.value)"
              >
                <RadioButton v-model="selectedValue03" :value="row.value" />
                <table>
                  <tbody>
                    <tr>
                      <th>카드번호</th>
                      <td>{{ row.card }}</td>
                    </tr>
                    <tr>
                      <th>승인번호</th>
                      <td>{{ row.confirm }}</td>
                    </tr>
                    <tr>
                      <th>승인일</th>
                      <td>{{ row.date }}</td>
                    </tr>
                    <tr>
                      <th>금액(원)</th>
                      <td>{{ row.price }}</td>
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
                  v-for="(row, index) in rows01"
                  :key="index"
                  :class="{ active: selectedValue01 === row.value }"
                  @click="selectValue01(row.value)"
                >
                  <td class="text-center">
                    <RadioButton v-model="selectedValue01" :value="row.value" />
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
                v-for="(row, index) in rows01"
                :key="index"
                :class="{ active: selectedValue01 === row.value }"
                @click="selectValue01(row.value)"
              >
                <RadioButton v-model="selectedValue01" :value="row.value" />
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

  <Dialog v-model:visible="modal14" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal14 = false" />
      </div>
      <div class="ibk-dialog-apply__title">개인정보 수정</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">기본정보</div>
        </div>
        <div class="ibk-dialog-apply-item-text">본부・ 인재개발 ・ 김인재</div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">정보입력</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>현재 비밀번호</label>
              <InputText type="password" size="large" class="w-full" placeholder="현재 비밀번호를 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>새 비밀번호</label>
              <InputText type="password" size="large" class="w-full" placeholder="변경하실 비밀번호를 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>새 비밀번호 확인</label>
              <InputText
                type="password"
                size="large"
                class="w-full"
                placeholder="변경하실 비밀번호를 한번 더 입력해주세요."
              />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>이메일</label>
              <InputText type="email" size="large" class="w-full" placeholder="이메일을 입력해주세요." />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>모바일</label>
              <InputText type="number" size="large" class="w-full" placeholder="010-0000-0000" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>주소</label>
              <div class="ibk-dialog-apply-address__input">
                <div>
                  <InputText type="text" size="large" class="w-full" />
                  <Button label="우편번호 찾기" severity="secondary" outlined size="large" />
                </div>
                <div>
                  <InputText type="text" size="large" class="w-full" />
                </div>
                <div>
                  <InputText type="text" size="large" class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal14 = false" />
        <Button label="저장" severity="primary" size="large" class="w-full" @click="modal14 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal15" modal class="ibk-dialog ibk-dialog-apply ibk-dialog-apply--sm">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal15 = false" />
      </div>
      <div class="ibk-dialog-apply__title">학교 검색</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>학교 검색</label>
              <div class="ibk-dialog-apply-item-search">
                <InputText type="text" size="large" class="w-full" placeholder="학교명을 입력해주세요" />
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
                      <col style="width: 108px" />
                      <col style="width: 214px" />
                      <col style="width: 158px" />
                    </colgroup>
                    <thead>
                      <th class="text-center">선택</th>
                      <th class="text-center">학교명</th>
                      <th class="text-center">주소</th>
                      <th class="text-center">지원가능여부</th>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(row, index) in rows02"
                        :key="index"
                        :class="{ active: selectedValue02 === row.value }"
                        @click="selectValue02(row.value)"
                      >
                        <td class="text-center">
                          <RadioButton v-model="selectedValue02" :value="row.value" />
                        </td>
                        <td class="text-center">
                          <strong>{{ row.name }}</strong>
                        </td>
                        <td class="text-center">
                          {{ row.address }}
                        </td>
                        <td class="text-center">{{ row.yn }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mo">
                <div class="ibk-dialog-target-list__list">
                  <ul>
                    <li
                      v-for="(row, index) in rows02"
                      :key="index"
                      :class="{ active: selectedValue02 === row.value }"
                      @click="selectValue02(row.value)"
                    >
                      <RadioButton v-model="selectedValue02" :value="row.value" />
                      <table>
                        <tbody>
                          <tr>
                            <th>학교명</th>
                            <td>{{ row.name }}</td>
                          </tr>
                          <tr>
                            <th>주소</th>
                            <td>{{ row.address }}</td>
                          </tr>
                          <tr>
                            <th>지원가능여부</th>
                            <td>{{ row.yn }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal15 = false" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="modal15 = false" />
      </div>
    </template>
  </Dialog>

  <div
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
    <Button @click="modal03 = true" label="연수 보조금 지원금액 상세"></Button><br /><br />
    <Button @click="modal04 = true" label="취득 지원 자격증"></Button><br /><br />
    <Button @click="modal05 = true" label="평가(어학)비 지원신청"></Button><br /><br />
    <Button @click="modal06 = true" label="학자금 지원 신청"></Button><br /><br />
    <Button @click="modal07 = true" label="지원 현황"></Button><br /><br />
    <Button @click="modal08 = true" label="학술연수 신청"></Button><br /><br />
    <Button @click="modal09 = true" label="복지비 내역"></Button><br /><br />
    <Button @click="modal10 = true" label="취득자격 검색"></Button><br /><br />
    <Button @click="modal11 = true" label="연수 목록"></Button><br /><br />
    <Button @click="modal12 = true" label="부점 검색"></Button><br /><br />
    <Button @click="modal13 = true" label="권장학습 이수율 상세보기"></Button><br /><br />
    <Button @click="modal14 = true" label="개인정보 수정"></Button><br /><br />
    <Button @click="modal15 = true" label="학교 검색"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from '@vuepic/vue-datepicker';
import MasonryWall from '@yeger/vue-masonry-wall';
const items = [
  '고객경험 이해, 뱅킹플랫폼 이해',
  '빅데이터 엔지니어링',
  '기술정책수립',
  'IT 프로젝트 이해',
  '네트워크, 서버, DB, 클라우드 이해',
  '프로그래밍, 테스트 이해',
  '보안시스템, 정보보호',
  '빅데이터 구축',
  '빅데이터 활용',
];
const items02 = ['고객경험 이해, 뱅킹플랫폼 이해', '빅데이터 엔지니어링', '기술정책수립'];
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
const modal14 = ref(false);
const modal15 = ref(false);

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
const rows01 = ref([
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

// 선택된 라디오 버튼 값을 저장하는 ref (단일 선택)
const selectedValue01 = ref<number | null>(null);

// 라디오 버튼 클릭 시 선택 상태를 변경하는 함수
const selectValue01 = (value) => {
  selectedValue01.value = value; // 선택된 값 저장
};

// 테이블 행 데이터
const rows02 = ref([
  {
    value: 1,
    name: 'ㅇㅇ대학교',
    address: '서울특별시 마포구 와우산로 94',
    yn: 'Y',
  },
  {
    value: 2,
    name: 'ㅇㅇ대학교',
    address: '서울특별시 마포구 와우산로 94',
    yn: 'Y',
  },
  {
    value: 3,
    name: 'ㅇㅇ대학교',
    address: '서울특별시 마포구 와우산로 94',
    yn: 'Y',
  },
  {
    value: 4,
    name: 'ㅇㅇ대학교',
    address: '서울특별시 마포구 와우산로 94',
    yn: 'Y',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref (단일 선택)
const selectedValue02 = ref<number | null>(null);

// 라디오 버튼 클릭 시 선택 상태를 변경하는 함수
const selectValue02 = (value) => {
  selectedValue02.value = value; // 선택된 값 저장
};

// 테이블 행 데이터
const rows03 = ref([
  {
    value: 1,
    card: '1234567812345678',
    confirm: '1000',
    date: '2025.06.00 12:00',
    price: '10,000,000',
  },
  {
    value: 2,
    card: '1234567812345678',
    confirm: '1000',
    date: '2025.06.00 12:00',
    price: '10,000,000',
  },
  {
    value: 3,
    card: '1234567812345678',
    confirm: '1000',
    date: '2025.06.00 12:00',
    price: '10,000,000',
  },
  {
    value: 4,
    card: '1234567812345678',
    confirm: '1000',
    date: '2025.06.00 12:00',
    price: '10,000,000',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref (단일 선택)
const selectedValue03 = ref<number | null>(null);

// 라디오 버튼 클릭 시 선택 상태를 변경하는 함수
const selectValue03 = (value) => {
  selectedValue03.value = value; // 선택된 값 저장
};

//연수 및 자격증 현황
const chartData01 = ref();
const chartOptions01 = ref();

const setChartData01 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#308AF2', '#eee'],
        borderColor: 'transparent', // 테두리 색상을 투명으로 설정
        borderWidth: 0, // 테두리의 두께를 0으로 설정
      },
    ],
  };
};

const setChartOptions01 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    cutout: '86%',
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
};

onMounted(() => {
  chartData01.value = setChartData01();
  chartOptions01.value = setChartOptions01();
});

//월별 현황
const chartData02 = ref();
const chartOptions02 = ref();

const setChartData02 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월별 데이터
    datasets: [
      {
        data: [10, 10.5, 10.2, 10.4, 10.3, 10.6, 10.8, 10.7, 11, 11.3, 11.5, 12], // 그래프 값
        backgroundColor: 'rgba(113, 81, 255, 0.1)', // 차트 아래에 색을 채워주는 부분
        borderColor: '#7F56D9', // 라인 색상
        borderWidth: 2,
        fill: true, // 라인 아래 색 채우기
        tension: 0.4, // 부드러운 곡선
      },
      {
        data: [8, 8.5, 8.2, 8.4, 8.3, 8.6, 8.8, 8.7, 9, 9.3, 9.5, 10], // 그래프 값
        backgroundColor: 'rgba(113, 81, 255, 0.1)', // 차트 아래에 색을 채워주는 부분
        borderColor: 'rgba(113, 81, 255, 0.50)', // 라인 색상
        borderWidth: 2,
        fill: true, // 라인 아래 색 채우기
        tension: 0.4, // 부드러운 곡선
      },
    ],
  };
};

const setChartOptions02 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3.5,
    scales: {
      y: {
        beginAtZero: true,
        //max: 100,
      },
    },
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
};

onMounted(async () => {
  chartData02.value = setChartData02();
  chartOptions02.value = setChartOptions02();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});

//Skill Roadmap 달성 현황
const chartData03 = ref();
const chartOptions03 = ref();

const setChartData03 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['여신심사', '자산운용', '외환', '재무회계', '자산운용', '디지털', 'PB', 'IB', '컴플라이언스'],
    datasets: [
      {
        label: '부점최고점',
        backgroundColor: 'rgba(255, 204, 0, 0.4)', // Yellow background
        borderWidth: 0,
        pointRadius: 0,
        data: [65, 60, 55, 45, 70, 50, 60, 65, 85], // Data for "부점최고점"
      },
      {
        label: '부점평균',
        backgroundColor: 'rgba(42, 202, 200, 0.4)', // Light green-blue background
        borderWidth: 0,
        pointRadius: 0,
        data: [70, 50, 60, 40, 65, 45, 55, 60, 75], // Data for "부점평균"
      },
    ],
  };
};

const setChartOptions03 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100, // Assuming the maximum value is 100
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true, // Makes the point style circular or rounded
          padding: 20, // Adds padding for a better visual look
          boxWidth: 12, // Smaller box width
          boxHeight: 12, // Smaller box height to make it more rounded
        },
      },
    },
  };
};

onMounted(async () => {
  chartData03.value = setChartData03();
  chartOptions03.value = setChartOptions03();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});
</script>
