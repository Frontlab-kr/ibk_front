<template>
  <pubMypagehead />
  <div class="ibk-inner">
    <div class="ibk-payment">
      <div class="ibk-payment-head ibk-payment-head--tab">
        <h2>학습 마일리지</h2>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">마일리지 현황</Tab>
          <Tab value="1">신청내역</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-payment-center-table">
              <h5>마일리지 현황</h5>
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
                      <th>취득마일리지</th>
                      <th>합계</th>
                      <th>누적 마일리지</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">연수</td>
                      <td class="text-center">1,934</td>
                      <td class="text-center" rowspan="3">2,634</td>
                      <td class="text-center" rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td class="text-center">자격증</td>
                      <td class="text-center">600</td>
                    </tr>
                    <tr>
                      <td class="text-center">기타</td>
                      <td class="text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="ibk-payment-center-chart">
              <Chart type="bar" :data="chartData" :options="chartOptions" />
            </div>
            <div class="ibk-payment-center-mileage-section">
              <div class="ibk-payment-center-mileage__title">학습 마일리지 취득 내역</div>
              <div class="ibk-payment-center-mileage">
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">기존</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      역량 개발 지원 항목
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>980 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">추가</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>500 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">추가</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      IBK 기업은행 승인된 결재 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>23 마일리지</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
            <div class="ibk-payment-center-mileage-section">
              <div class="ibk-payment-center-mileage__title">자격 마일리지 취득 내역</div>
              <div class="ibk-payment-center-mileage">
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">3등급</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      자격 마일리지 취득 내역
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>27 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">3등급</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>600 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">3등급</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      IBK 기업은행 승인된 결재 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>43 마일리지</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
            <div class="ibk-payment-center-mileage-section">
              <div class="ibk-payment-center-mileage__title">기타 마일리지 취득 내역</div>
              <div class="ibk-payment-center-mileage">
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">관련구분노출</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      기타 마일리지 관련 내역 노출
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>50 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">관련구분노출</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>23 마일리지</strong>
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">관련구분노출</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">사용</strong>
                      IBK 승인된 기타 마일리지 관련 내역 노출 명이 들어갑니다.
                    </div>
                    <div class="pc">
                      <ul>
                        <li>2028.12.30 - 2028.12.30</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage02">
                      <div class="mo">
                        <ul>
                          <li>2028.12.30 - 2028.12.30</li>
                        </ul>
                      </div>
                      <strong>39 마일리지</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="ibk-payment-center-mileage-head">
              <div class="ibk-payment-center-mileage-head-text">
                <h6>연간 마일리지</h6>
                <strong>20,000원</strong>
                <p>직급누적마일리지 <strong>20,000</strong></p>
              </div>
              <Button label="신청하기" outlined rounded icon="ibk-icon-16-apply" />
            </div>
            <div class="ibk-payment-center">
              <div class="ibk-payment-center-head">
                <div class="ibk-payment-center-head__title">마일리지 내역</div>
                <div class="ibk-payment-center-head__filter">
                  <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
                  <Button label="전체" severity="secondary" outlined icon="ibk-icon-16-filter-all" />
                </div>
              </div>
              <div class="ibk-payment-center-mileage">
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">사용</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">지급</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <ul>
                      <li>2028.12.30 - 2028.12.30</li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage">
                      <strong>5,000 마일리지</strong>
                      <p>잔여 마일리지 20,000</p>
                    </div>
                    <div class="ibk-payment-center-mileage-item__button">
                      <Button label="신청취소" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">사용</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">지급</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <ul>
                      <li>2028.12.30 - 2028.12.30</li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage">
                      <strong>5,000 마일리지</strong>
                      <p>잔여 마일리지 20,000</p>
                    </div>
                    <div class="ibk-payment-center-mileage-item__button">
                      <Button label="신청취소" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">사용</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-red-500">차감</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <ul>
                      <li>2028.12.30 - 2028.12.30</li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage">
                      <strong>5,000 마일리지</strong>
                      <p>잔여 마일리지 20,000</p>
                    </div>
                    <div class="ibk-payment-center-mileage-item__button">
                      <Button label="신청취소" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">사용</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">지급</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <ul>
                      <li>2028.12.30 - 2028.12.30</li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage">
                      <strong>5,000 마일리지</strong>
                      <p>잔여 마일리지 20,000</p>
                    </div>
                    <div class="ibk-payment-center-mileage-item__button">
                      <Button label="신청취소" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
                <div class="ibk-payment-center-mileage-item">
                  <div class="ibk-payment-center-mileage-item__text">
                    <div class="ibk-payment-center-mileage-item__checkbox">
                      <label for="checkbox01-1">사용</label>
                    </div>
                    <div class="ibk-payment-center-mileage-item__title">
                      <strong class="text-primary">지급</strong>
                      여기는 승인된 결재 명이 들어갑니다.
                    </div>
                    <ul>
                      <li>2028.12.30 - 2028.12.30</li>
                    </ul>
                  </div>
                  <div class="ibk-payment-center-mileage-item__end">
                    <div class="ibk-payment-center-mileage-item__mileage">
                      <strong>5,000 마일리지</strong>
                      <p>잔여 마일리지 20,000</p>
                    </div>
                    <div class="ibk-payment-center-mileage-item__button">
                      <Button label="신청취소" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-payment-center-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
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
      <div class="ibk-dialog-apply__title">마일리지 상품 신청</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <InputText value="본부・ 인재개발 ・ 김인재" size="large" class="w-full" readonly />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>보상구분</label>
              <Select size="large" class="w-full" placeholder="보상구분을 선택하세요" />
            </div>
          </div>
          <div class="lg:col-6 col-12">
            <div class="field">
              <label>수량</label>
              <InputNumber placeholder="숫자로 입력해주세요" class="p-inputnumber-lg w-full" />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>보상명</label>
              <InputText value="문화상품권" size="large" class="w-full" readonly />
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>마일리지</label>
              <div class="ibk-table ibk-table--scroll-x">
                <table>
                  <colgroup>
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">누적 마일리지</th>
                    <th class="text-center">차감 마일리지</th>
                    <th class="text-center">최종 마일리지</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">2,934</td>
                      <td class="text-center">2500</td>
                      <td class="text-center">434</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="신청하기" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="마일리지 상품 신청"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';

const modal01 = ref(false);
const dates = ref('2025.01.01 - 2025.01.01');

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['My마일리지', '직급평균', '진행평균', '소속본부평균', '소속부점평균'],
    datasets: [
      {
        label: 'Values',
        data: [2500, 1400, 900, 550, 550],
        backgroundColor: ['#A194FF', '#A0A9C0', '#2ACAC8', '#FC0', '#308AF2'],
        borderColor: ['#A194FF', '#A0A9C0', '#2ACAC8', '#FC0', '#308AF2'],
        borderRadius: 10,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
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
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  await getCourseNoticeList();
  await getCourseQnaList();
  await getCourseLibraryList();
});
</script>
