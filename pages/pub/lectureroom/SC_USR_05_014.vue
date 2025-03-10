<template>
  <div class="ibk-lectureroom-my">
    <pubMypagehead />
    <div class="ibk-inner">
      <div class="ibk-lectureroom-my-contents">
        <div class="ibk-lectureroom-my-table">
          <div class="ibk-lectureroom-my-table-head">
            <div class="ibk-lectureroom-my-table__title">연수이력<strong>24</strong></div>
            <div class="mo">
              <Button label="인쇄하기" severity="primary" outlined rounded icon="ibk-icon-16-print" />
            </div>
          </div>
          <div class="ibk-lectureroom-my-table-search">
            <div class="ibk-lectureroom-my-table-search__button">
              <DatePicker showIcon fluid iconDisplay="input" v-model="date" dateFormat="yy/mm/dd">
                <template #inputicon="slotProps">
                  <i class="ibk-icon-16-calendar" @click="slotProps.clickCallback" />
                </template>
              </DatePicker>
              <div class="ibk-lectureroom-my-table-search__select">
                <div class="ibk-lectureroom-my-table-search__select-br">
                  <Select v-model="selected01" :options="selected01Option" optionLabel="name" />
                  <Select v-model="selected02" :options="selected02Option" optionLabel="name" />
                </div>
                <Select v-model="selected03" :options="selected03Option" optionLabel="name" />
              </div>
            </div>
            <div class="ibk-lectureroom-my-table-search__form">
              <div class="ibk-lectureroom-my-table-search__form-search">
                <IconField>
                  <InputIcon class="ibk-icon-16-search" />
                  <InputText placeholder="검색어를 입력하세요." />
                </IconField>
                <div class="pc"><Button label="검색" severity="primary" /></div>
              </div>
              <div class="pc">
                <Button label="인쇄하기" severity="primary" outlined rounded icon="ibk-icon-16-print" />
              </div>
            </div>
          </div>

          <div class="ibk-lectureroom-my-table-table">
            <div class="ibk-table ibk-table--scroll-x">
              <table>
                <colgroup>
                  <col style="width: 160px" />
                  <col style="width: 88px" />
                  <col style="width: 292px" />
                  <col style="width: 88px" />
                  <col style="width: 88px" />
                  <col style="width: 194px" />
                  <col style="width: 60px" />
                  <col style="width: 86px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="text-left">교육분류</th>
                    <th>스킬</th>
                    <th class="text-left">연수명</th>
                    <th>교육방식</th>
                    <th>학습시간</th>
                    <th class="text-left">기간</th>
                    <th>점수</th>
                    <th>스킬스코어</th>
                    <th>평점여부</th>
                    <th>수료여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i of 4">
                    <td class="text-left">IB > 자본시장 > 리스크글로벌 > IB</td>
                    <td>디지털</td>
                    <td class="text-left">
                      <strong>2025 기업구조조정의 이해 및 활용 </strong>
                    </td>
                    <td>통신</td>
                    <td>10</td>
                    <td class="text-left">2025.06.00 - 2025.07.00</td>
                    <td>100</td>
                    <td>11.1</td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <div class="mo">
            <div class="ibk-lectureroom-my-table-list">
              <div class="ibk-lectureroom-my-table-list-item" v-for="i of 4">
                <div class="ibk-lectureroom-my-table-list-item__title">
                  <strong> IB > 자본시장 > 리스크글로벌 > IB </strong>
                  <p>2025 기업구조조정의 이해 및 활용</p>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>스킬</th>
                      <td>디지털</td>
                    </tr>
                    <tr>
                      <th>교육방식</th>
                      <td>통신</td>
                    </tr>
                    <tr>
                      <th>학습시간</th>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>2025.06.00 - 2025.07.00</td>
                    </tr>
                    <tr>
                      <th>점수</th>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th>스킬스코어</th>
                      <td>11.1</td>
                    </tr>
                    <tr>
                      <th>평점여부</th>
                      <td>Y</td>
                    </tr>
                    <tr>
                      <th>수료여부</th>
                      <td>Y</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> -->

          <Paginator :rows="10" :totalRecords="120"></Paginator>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-print">
    <template #header>
      <div class="ibk-mobile-back">
        <Button icon="ibk-icon-24-arrowleft" label="연수 내역 인쇄" link />
      </div>
      <div class="ibk-dialog-print__title">연수 내역 인쇄</div>
    </template>

    <div class="ibk-dialog-print-item ibk-dialog-print-item--line">
      <div class="pc">
        <table>
          <colgroup>
            <col style="width: 160px" />
            <col style="width: 400px" />
            <col style="width: 160px" />
            <col style="width: 400px" />
          </colgroup>
          <tbody>
            <tr>
              <th>성명</th>
              <td>김기은</td>
              <th>소속</th>
              <td>본부・ 인재개발</td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>1999.12.31</td>
              <th>직책</th>
              <td>4급 / 과장</td>
            </tr>
            <tr>
              <th>현직급일</th>
              <td colspan="3">2028.12.31</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mo">
        <table>
          <tbody>
            <tr>
              <th class="text-left">성명</th>
            </tr>
            <tr>
              <td>김기은</td>
            </tr>
            <tr>
              <th class="text-left">소속</th>
            </tr>
            <tr>
              <td>본부・ 인재개발</td>
            </tr>
            <tr>
              <th class="text-left">생년월일</th>
            </tr>
            <tr>
              <td>1999.12.31</td>
            </tr>
            <tr>
              <th class="text-left">직책</th>
            </tr>
            <tr>
              <td>4급 / 과장</td>
            </tr>
            <tr>
              <th class="text-left">현직급일</th>
            </tr>
            <tr>
              <td>2028.12.31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="ibk-dialog-print-item">
      <div class="ibk-dialog-print-item-head">
        <div class="ibk-dialog-print-item-head__title">상세내역</div>
      </div>
      <div class="ibk-lectureroom-my-table-table">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 160px" />
              <col style="width: 88px" />
              <col style="width: 292px" />
              <col style="width: 88px" />
              <col style="width: 88px" />
              <col style="width: 194px" />
              <col style="width: 60px" />
              <col style="width: 86px" />
              <col style="width: 72px" />
              <col style="width: 72px" />
            </colgroup>
            <thead>
              <tr>
                <th class="text-left">교육분류</th>
                <th>스킬</th>
                <th class="text-left">연수명</th>
                <th>교육방식</th>
                <th>학습시간</th>
                <th class="text-left">기간</th>
                <th>점수</th>
                <th>스킬스코어</th>
                <th>평점여부</th>
                <th>수료여부</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i of 4">
                <td class="text-left">IB > 자본시장 > 리스크글로벌 > IB</td>
                <td>디지털</td>
                <td class="text-left">
                  <strong>2025 기업구조조정의 이해 및 활용 </strong>
                </td>
                <td>통신</td>
                <td>10</td>
                <td class="text-left">2025.06.00 - 2025.07.00</td>
                <td>100</td>
                <td>11.1</td>
                <td>Y</td>
                <td>Y</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-print-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="인쇄" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="연수 내역 인쇄"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';

const modal01 = ref(false);

const date = ref('2023.06 - 2023.12');

const selected01Option = ref([{ name: '직급' }]);
const selected01 = ref(selected01Option.value[0]);

const selected02Option = ref([{ name: '사이버과정포함' }]);
const selected02 = ref(selected02Option.value[0]);

const selected03Option = ref([{ name: '수료결과' }]);
const selected03 = ref(selected03Option.value[0]);
</script>
