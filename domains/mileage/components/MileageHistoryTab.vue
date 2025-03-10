<template>
  <TabPanel value="mileageHistory">
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
              <td class="text-center">{{ totalMilageData && totalMilageData.learningSum ? Utility.setCommaPer3Digit(totalMilageData.learningSum) : 0 }}</td>
              <td class="text-center" rowspan="3">{{ totalMilageData && totalMilageData.mlgOcrnScrYearSum ? Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrYearSum) : 0 }}</td>
              <td class="text-center" rowspan="3">{{ totalMilageData && totalMilageData.mlgOcrnScrSum ? Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrSum) : 0 }}</td>
            </tr>
            <tr>
              <td class="text-center">자격증</td>
              <td class="text-center">{{ totalMilageData && totalMilageData.licenseSum? Utility.setCommaPer3Digit(totalMilageData.licenseSum) : 0}}</td>
            </tr>
            <tr>
              <td class="text-center">기타</td>
              <td class="text-center">{{ totalMilageData && totalMilageData.etcSum ? Utility.setCommaPer3Digit(totalMilageData.etcSum) : 0}}</td>
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
        <template v-if="store.learningMileageData?.contents.length > 0">
          <div v-for="(item, index) in store.learningMileageData?.contents" class="ibk-payment-center-mileage-item">
            <div class="ibk-payment-center-mileage-item__text">
              <div class="ibk-payment-center-mileage-item__checkbox">
                <label v-if="item.mlgUseDcd == '1'" for="checkbox01-1">기존</label>
                <label v-if="item.mlgUseDcd == '6'" for="checkbox01-1">추가</label>
              </div>
              <div class="ibk-payment-center-mileage-item__title">
                <strong class="text-primary">{{ item.rsrgSbtcDcdNm }}</strong>
                {{ item.mlgOcrsCon }}
              </div>
              <div class="pc">
                <ul>
                  <li>{{ item.ocrnYmd }}</li>
                </ul>
              </div>
            </div>
            <div class="ibk-payment-center-mileage-item__end">
              <div class="ibk-payment-center-mileage-item__mileage02">
                <div class="mo">
                  <ul>
                    <li>{{ item.ocrnYmd }}</li>
                  </ul>
                </div>
                <strong>{{ Utility.setCommaPer3Digit(item.mlgOcrnScr) }} 마일리지</strong>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="ibk-lectureroom-my-review-none">
            <p>취득한 마일리지가 없습니다.</p>
          </div>
        </template>
      </div>
      <div v-if="hasNextLearning" class="ibk-payment-center-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreLearningData"/>
      </div>
    </div>
    <div class="ibk-payment-center-mileage-section">
      <div class="ibk-payment-center-mileage__title">자격 마일리지 취득 내역</div>
      <div class="ibk-payment-center-mileage">
        <template v-if="store.licenseMileageData?.contents.length > 0">
          <div v-for="(item, index) in store.licenseMileageData?.contents" class="ibk-payment-center-mileage-item">
            <div class="ibk-payment-center-mileage-item__text">
              <div class="ibk-payment-center-mileage-item__checkbox">
                <label for="checkbox01-1">{{ item.qlcrGdcdNm }}</label>
              </div>
              <div class="ibk-payment-center-mileage-item__title">
                <strong class="text-primary">{{ item.rsrgSbtcDcdNm }}</strong>
                {{ item.mlgOcrsCon }}
              </div>
              <div class="pc">
                <ul>
                  <li>{{ item.ocrnYmd }}</li>
                </ul>
              </div>
            </div>
            <div class="ibk-payment-center-mileage-item__end">
              <div class="ibk-payment-center-mileage-item__mileage02">
                <div class="mo">
                  <ul>
                    <li>{{ item.ocrnYmd }}</li>
                  </ul>
                </div>
                <strong>{{ Utility.setCommaPer3Digit(item.mlgOcrnScr) }} 마일리지</strong>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="ibk-lectureroom-my-review-none">
            <p>취득한 마일리지가 없습니다.</p>
          </div>
        </template>
      </div>
      <div v-if="hasNextLicense" class="ibk-payment-center-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreLicenseData"/>
      </div>
    </div>
    <div class="ibk-payment-center-mileage-section">
      <div class="ibk-payment-center-mileage__title">기타 마일리지 취득 내역</div>
      <div class="ibk-payment-center-mileage">
        <template v-if="store.etcMileageData?.contents.length > 0">
          <div v-for="(item, index) in store.etcMileageData?.contents" class="ibk-payment-center-mileage-item">
            <div class="ibk-payment-center-mileage-item__text">
              <div class="ibk-payment-center-mileage-item__checkbox">
                <label for="checkbox01-1">{{ item.mlgUseDcdNm }}</label>
              </div>
              <div class="ibk-payment-center-mileage-item__title">
                <strong class="text-primary">{{ item.rsrgSbtcDcdNm }}</strong>
                {{ item.mlgOcrsCon }}
              </div>
              <div class="pc">
                <ul>
                  <li>{{ item.ocrnYmd }}</li>
                </ul>
              </div>
            </div>
            <div class="ibk-payment-center-mileage-item__end">
              <div class="ibk-payment-center-mileage-item__mileage02">
                <div class="mo">
                  <ul>
                    <li>{{ item.ocrnYmd }}</li>
                  </ul>
                </div>
                <strong>{{ Utility.setCommaPer3Digit(item.mlgOcrnScr) }} 마일리지</strong>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="ibk-lectureroom-my-review-none">
            <p>취득한 마일리지가 없습니다.</p>
          </div>
        </template>
      </div>
      <div v-if="hasNextEtc" class="ibk-payment-center-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="loadMoreEtcData"/>
      </div>
    </div>
  </TabPanel>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useMileageStore } from '~/domains/mileage';
import Utility from '~/lib/Utility';
import type { IdiMileageLearningPageInVo, IdiMileageLicensePageInVo, IdiMileageEtcPageInVo } from '~/api-client';
const store = useMileageStore();
const totalMilageData = ref([]);
const chartMilageData = ref([]);
const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);
const chartData = ref();
const chartOptions = ref();
const hasNextLearning = ref<boolean>(true);
const hasNextLicense = ref<boolean>(true);
const hasNextEtc = ref<boolean>(true);

const INIT_SEARCH_LEARNING_PARAMS = (): IdiMileageLearningPageInVo => ({
  pageSize: 3,
  pageNo: 1,
});
const learningParams = reactive<IdiMileageLearningPageInVo>(INIT_SEARCH_LEARNING_PARAMS());
const INIT_SEARCH_LICENSE_PARAMS = (): IdiMileageLicensePageInVo => ({
  pageSize: 3,
  pageNo: 1,
});
const licenseParams = reactive<IdiMileageLicensePageInVo>(INIT_SEARCH_LICENSE_PARAMS());
const INIT_SEARCH_ETC_PARAMS = (): IdiMileageEtcPageInVo => ({
  pageSize: 3,
  pageNo: 1,
});
const etcParams = reactive<IdiMileageEtcPageInVo>(INIT_SEARCH_ETC_PARAMS());

const setChartData = () => {
  // const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['My마일리지', '직급평균', '전행평균', '소속본부평균', '소속부점평균'],
    datasets: [
      {
        label: 'Values',
        data: [chartMilageData.value.mySum ? chartMilageData.value.mySum : 0, chartMilageData.value.jbclAvg ? chartMilageData.value.jbclAvg : 0, chartMilageData.value.allSum ? chartMilageData.value.allSum : 0, chartMilageData.value.blngHdqrDsncVlAvg ? chartMilageData.value.blngHdqrDsncVlAvg : 0, chartMilageData.value.brncPtrnVlAvg ? chartMilageData.value.brncPtrnVlAvg : 0],
        backgroundColor: ['#A194FF', '#A0A9C0', '#2ACAC8', '#FC0', '#308AF2'],
        borderColor: ['#A194FF', '#A0A9C0', '#2ACAC8', '#FC0', '#308AF2'],
        borderRadius: 10,
      },
    ],
  };
};

const setChartOptions = () => {
  /*const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');*/

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

const loadMoreLearningData = async () => {
  learningParams.pageNo++;
  hasNextLearning.value = await store.getIdiMileageLearningList(learningParams,false);
};

const loadMoreLicenseData = async () => {
  licenseParams.pageNo++;
  hasNextLicense.value = await store.getIdiMileageLicenseList(licenseParams,false);
};

const loadMoreEtcData = async () => {
  etcParams.pageNo++;
  hasNextEtc.value = await store.getIdiMileageEtcList(etcParams,false);
};

onMounted(async () => {
  await store.getIdiMyMileageTotalData({});
  await store.getIdiMyMileageChartData({});
  totalMilageData.value = store.totalMileageData.data.response;
  // console.log('totalMilageData.value :',totalMilageData.value)
  chartMilageData.value = store.chartMileageData.data.response;

  hasNextLearning.value = await store.getIdiMileageLearningList(learningParams,false);
  hasNextLicense.value = await store.getIdiMileageLicenseList(licenseParams,false);
  hasNextEtc.value = await store.getIdiMileageEtcList(etcParams,false);

  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

</script>
