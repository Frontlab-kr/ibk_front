<template>
  <div class="ibk-roadmap-state">
    <div class="ibk-roadmap-state-head">
      <div class="ibk-roadmap-state-head-title">
        <h4>부점정보</h4>
        <p>
          <span>{{ authStore.userInfo.arhdDsncNm }}</span>
          <span>{{ authStore.userInfo.blngHdqrDsncNm }}</span>
        </p>
      </div>
      <div class="ibk-roadmap-state-head-search">
        <IconField>
          <InputIcon class="ibk-icon-16-search" />
          <InputText v-model="searchDialogParams.deptDsncNm" class="cursor-pointer" placeholder="부점을 선택 해주세요." readonly @click="openBranchDialog"/>
        </IconField>
        <!--
        <div class="pc">
          <Button label="검색" severity="primary" />
        </div>
        -->
      </div>
    </div>
    <div class="ibk-roadmap-state-contents">
      <h5>연수 및 자격증 현황</h5>
      <RoadmapBranchStatisticsState />

      <h5>전문 분야 현황</h5>
      <RoadmapBranchStatisticsSpecialCategory :items="store.skillRoadmapBranchStatisticsUserList" />

      <h5>스킬지수현황</h5>
      <RoadmapBranchStatisticsList :items="store.skillRoadmapBranchStatisticsUserList" />
    </div>
  </div>

  <RoadmapBranchSearchDialog v-if="searchDialogParams.visible"
                             v-model:visible="searchDialogParams.visible"
                             v-model:deptDsncVl="searchDialogParams.deptDsncVl"
                             v-model:deptDsncNm="searchDialogParams.deptDsncNm"
  />

</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type {
  SkillBranchSearchDialogOptions,
  SkillRoadmapBranchStatisticsUserOptions,
} from '~/domains/skill/roadmap/type';
import Utility from '~/lib/Utility';
import { ref } from 'vue';
import RoadmapBranchStatisticsSpecialCategory
  from '~/domains/skill/roadmap/components/RoadmapBranchStatisticsSpecialCategory.vue';
import { useAuthStore } from '~/domains/auth';
import RoadmapBranchSearchDialog from '~/domains/skill/roadmap/components/RoadmapBranchSearchDialog.vue';
import { search } from '@codemirror/search';

const store = useSkillRoadmapStore();
const authStore = useAuthStore();

const INIT_PARAMS = (): SkillRoadmapBranchStatisticsUserOptions => ({
  //일단 임시로 990으로 넣어놓음
  deptDsncVl: '990',
});

const params = reactive<SkillRoadmapBranchStatisticsUserOptions>(INIT_PARAMS());
const searchDialogParams = reactive<SkillBranchSearchDialogOptions>({
  visible: false,
  deptDsncVl: '',
  deptDsncNm: '',
});

const test = [
  { userId: '1', userNm: 'a', rsptDsncNm: '직책', skllClsfVl: 14, cpctLvlAcqtScr: 10 },
  { userId: '1', userNm: 'a', rsptDsncNm: '직책', skllClsfVl: 18, cpctLvlAcqtScr: 20 },
  { userId: '1', userNm: 'a', rsptDsncNm: '직책', skllClsfVl: 22, cpctLvlAcqtScr: 30 },
  { userId: '1', userNm: 'a', rsptDsncNm: '직책', skllClsfVl: 24, cpctLvlAcqtScr: 40 },
  { userId: '1', userNm: 'a', rsptDsncNm: '직책', skllClsfVl: 4, cpctLvlAcqtScr: 50 },

  { userId: '2', userNm: 'a2', rsptDsncNm: '직책2', skllClsfVl: 14, cpctLvlAcqtScr: 15 },
  { userId: '2', userNm: 'a2', rsptDsncNm: '직책2', skllClsfVl: 18, cpctLvlAcqtScr: 25 },
  { userId: '2', userNm: 'a2', rsptDsncNm: '직책2', skllClsfVl: 22, cpctLvlAcqtScr: 35 },
  { userId: '2', userNm: 'a2', rsptDsncNm: '직책2', skllClsfVl: 24, cpctLvlAcqtScr: 45 },
  { userId: '2', userNm: 'a2', rsptDsncNm: '직책2', skllClsfVl: 4, cpctLvlAcqtScr: 55 },
]

await store.getSkillLevelStandard();
await store.getSkillCategoryList({ lvlNo: 1});

const fetchData = async () => {
  await store.getSkillRoadmapBranchStatistics(params);
}

watch(
  ()=> searchDialogParams.deptDsncVl,
  ()=> {
    params.deptDsncVl= searchDialogParams.deptDsncVl;
    fetchData();
  }, { deep: true }
);

const openBranchDialog = () => {
  searchDialogParams.visible = true;
}

onBeforeMount(async () => {
  searchDialogParams.deptDsncVl = authStore.userInfo?.deptDsncVl || '';
  searchDialogParams.deptDsncNm = authStore.userInfo?.deptDsncNm || '';

  //await fetchData();
});
</script>

<style scoped>

</style>
