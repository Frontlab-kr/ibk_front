<template>
  <div class="ibk-lectureroom-my">
    <pubMypagehead />
    <div class="ibk-inner">
      <div class="ibk-lectureroom-my-contents">
        <h3>나의 강의실</h3>
        <Tabs value="0">
          <TabList>
            <Tab value="0">학습중 연수</Tab>
            <Tab value="1">신청 · 대기 연수</Tab>
            <Tab value="2">종료 연수</Tab>
            <Tab value="3">나의 강의</Tab>
            <Tab value="4">찜 · 관심연수</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="ibk-lectureroom-my-list">
                <div class="ibk-lectureroom-my-list__item" v-for="i of 8">
                  <pubProduct :thumb="true" :progress="true" :title="true" :date="true" />
                </div>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="ibk-lectureroom-my-list">
                <div class="ibk-lectureroom-my-list__item" v-for="i of 8">
                  <pubProduct :thumb="true" :title="true" :date="true" :button="true" />
                </div>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="ibk-lectureroom-my-list">
                <div class="ibk-lectureroom-my-list__item" v-for="i of 8">
                  <pubProduct :thumb="true" :info="true" :title="true" :date="true" />
                </div>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div class="ibk-lectureroom-my-list-head">
                <Button label="수강후기보기" severity="secondary" outlined />
              </div>
              <div class="ibk-lectureroom-my-list">
                <div class="ibk-lectureroom-my-list__item" v-for="i of 8">
                  <pubProduct :thumb="true" :time="true" :title="true" :date="true" />
                </div>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div class="ibk-lectureroom-my-list">
                <div class="ibk-lectureroom-my-list__item" v-for="i of 8">
                  <pubProduct :thumb="true" :badge="true" :title="true" />
                </div>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-apply__title">취소 · 회차 변경</div>
    </template>

    <div class="ibk-dialog-apply-item">
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
                <td colspan="3">2024 퇴직연금제도, 든든한 노후 생활 준비하기 든든한 노후 생활</td>
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
            <colgroup>
              <col style="width: 50%" />
              <col style="width: 50%" />
            </colgroup>
            <tbody>
              <tr>
                <th colspan="2" class="text-left">차수명</th>
              </tr>
              <tr>
                <td colspan="2">2024 퇴직연금제도, 든든한 노후 생활 준비하기 든든한 노후 생활</td>
              </tr>
              <tr>
                <th class="text-left">연수기간</th>
                <th class="text-left">동시평가일</th>
              </tr>
              <tr>
                <td>2028.01.27 - 2028.02.14</td>

                <td>2028.01.27</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>구분</label>
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

    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="확인" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>
  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-review">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-review__title">후기 확인</div>
    </template>

    <div class="ibk-dialog-review-item">
      <div class="ibk-dialog-review-item-head">
        <div class="ibk-dialog-review-item-head__title">연수 선택하기</div>
        <Select size="large" class="w-full" />
      </div>
      <div class="ibk-dialog-review-list">
        <NuxtLink to="/" class="ibk-dialog-review-list-item" v-for="i of 3">
          <div class="ibk-dialog-review-list-item-head">
            <div class="ibk-dialog-review-list-item__thumb">
              <img src="https://picsum.photos/168/94" alt="" />
            </div>
            <div class="ibk-dialog-review-list-item-info">
              <div class="ibk-dialog-review-list-item__title">기업구조조정의 이해 및 활용,이</div>
              <div class="ibk-dialog-review-list-item__rating">
                <Rating v-model="rating" :stars="5" />
                <strong>4.0</strong>
              </div>
            </div>
          </div>
          <div class="ibk-dialog-review-list-item__text">
            <p>
              생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직 갈 길은 많이 남았지만, 나아가는 방향을 바꿀 수
              있었던 건 이 강의 덕분입니다. 그리고 특강을 들으니 더 내용이 쉽게 이해되는 효과도 있었습니다. 생각의
              패러다임을 근본적으로 바꿔준 강의였습니다. 강사님 감사생각의 패러다임을 근본적으로 바꿔준 강의였습니다.
              아직 갈 길은 많이 남았지만, 나아가는 방향을 바꿀 수 있었던 건 이 강의 덕분입니다. 그리고 특강을 들으니 더
              내용이 쉽게 이해되는 효과도 있었습니다. 생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 강사님 감사
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="ibk-dialog-review-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-review-button">
        <Button label="닫기" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="변경 신청 확인"></Button><br /><br />
    <Button @click="modal01 = true" label="취소 · 회차 변경"></Button><br /><br />
    <Button @click="modal02 = true" label="후기 확인"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';

const modal01 = ref(false);
const modal02 = ref(false);
const confirm = useConfirm();
const radio = ref('');
const checkbox = ref('');
const rating = ref(4);

const confirm1 = () => {
  confirm.require({
    message: '변경 신청 되었습니다.',
    rejectProps: {
      label: '닫기',
      severity: 'link',
      size: 'large',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
    reject: () => {
      confirm.close();
    },
  });
};

import pubProduct from '@/components/pubProduct.vue';
</script>
