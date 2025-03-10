<template>
  <div class="ibk-payment-center">
    <div class="ibk-payment-center-head">
      <div class="pc">
        <div class="ibk-payment-center-head__title">기안문서 <strong>{{skillStore.myRegisterStatusList.paging.totalCount}}</strong></div>
      </div>
      <div class="ibk-payment-center-head__filter">
        <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
      </div>
    </div>
    <div class="mo">
      <div class="ibk-payment-center-head__title">
        <div>기안문서 <strong>{{skillStore.myRegisterStatusList.paging.totalCount}}</strong></div>
      </div>
    </div>
    <div class="ibk-payment-center-list">
      <SupportItem :item="item" v-for="(item,index) in skillStore.myRegisterStatusList.contents" :key="index" @refresh="fetchList"/>
    </div>
    <div class="ibk-payment-center-more" v-if="hasMoreData">
      <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="addData" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SupportItem from '~/domains/skill/components/SupportItem.vue';
import { useSkillStore } from '~/domains/skill/store';
import dayjs from 'dayjs';
import type { IdiSupportDevDescInVo } from '~/api-client';

const skillStore = useSkillStore();
const today = dayjs();


const oneMonthAgo = today.subtract(1, 'month');

// 날짜 포맷 설정
const startDate = oneMonthAgo.format('YYYY-MM-DD');
const endDate = today.format('YYYY-MM-DD');

// 기본 날짜 셋팅
const dates = ref(`${startDate} ~ ${endDate}`);

const params = reactive<IdiSupportDevDescInVo>({
  startDate: '',
  endDate: '',
  pageSize: 5,
  pageNo: 1,
});

//날짜를 셋팅해준다.
const initSettingDate = async () => {
  const [start, end] = dates.value.split(' ~ ');
  params.startDate = start;
  params.endDate = end;
};

const fetchList = async () => {
  await skillStore.fetchMyRegisterStatusList(params);
};


watch(() => dates.value, async (newVal, oldVal) => {
  if(newVal[0] === null || newVal[1] === null) return;

  params.startDate = dayjs(newVal[0]).format('YYYY-MM-DD');
  params.endDate = dayjs(newVal[1]).format('YYYY-MM-DD');
  await fetchList()
});

const hasMoreData = computed(() => {
  const total = skillStore.myRegisterStatusList.paging.totalCount || 0;
  const currentLoaded = skillStore.myRegisterStatusList.contents.length;
  return currentLoaded < total;
});

const addData = async () => {
  //더보기 버튼 클릭시
  params.pageNo += 1; // 페이지 번호 증가
  await fetchList();
}

onMounted(async () => {
  await initSettingDate();
  params.pageNo = 1;
  await fetchList();
});
</script>
<style scoped>

</style>
