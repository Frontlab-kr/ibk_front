<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply ibk-dialog-apply--sm">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
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
                <InputText v-model="params.deptDsncNm" type="text" size="large" class="w-full" placeholder="부점명을 검색해주세요." @keyup.enter="fetchData" />
                <Button label="검색" severity="primary" size="large" @click="fetchData" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>검색결과</label>
              <div class="ibk-radio ibk-radio--grid1">
                <div v-for="(item, index) in store.skillBranchList" :key="`${item.deptDsncVl}_${index}`" class="ibk-radio-item">
                  <RadioButton v-model="selectedDeptDsncVl" :inputId="`radio_${index}`" :value="item.deptDsncVl" @change="changeDeptDsnc(item, index)"/>
                  <label :for="`radio_${index}`" class="ml-2">{{ item.deptDsncNm }}</label>
                </div>

                <div v-if="store.skillBranchList.length === 0">
                  <p class="text-center">
                    검색된 부점이 없습니다.
                  </p>
                </div>

                <!--
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio2" value="radio2" />
                  <label for="radio2" class="ml-2">IBK 기업은행 부점 </label>
                </div>
                <div class="ibk-radio-item">
                  <RadioButton v-model="radio" inputId="radio3" value="radio3" />
                  <label for="radio3" class="ml-2">IBK 기업은행 부점 </label>
                </div>
                -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="selectDeptDsn" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import { useAuthStore } from '~/domains/auth';
import type { SklRoadmapBranchSearchInVo, SklRoadmapBranchSearchOutVo } from '~/api-client';

const store = useSkillRoadmapStore();
const authStore = useAuthStore();

const { visible, deptDsncVl, deptDsncNm } = defineModels<{
  visible: boolean;
  deptDsncVl: string;
  deptDsncNm: string;
}>();

const selectedDeptDsncVl = ref<string>('');
const selectedDeptDsncNm = ref<string>('');

const INIT_SEARCH_PARAM = ():SklRoadmapBranchSearchInVo => ({
  arhdDsncVl: '',
  blngHdqrDsncVl: '',
  brncPtrnVl: '',
  deptDsncNm: '',
  deptDsncVl: '',
});

const params = reactive<SklRoadmapBranchSearchInVo>(INIT_SEARCH_PARAM());

const fetchData = async () => {
  await store.getSkillRoadmapBranchSearch(params);
}

const closeDialog = () => {
  visible.value = false;
}

const selectDeptDsn = () => {
  deptDsncVl.value = selectedDeptDsncVl.value;
  deptDsncNm.value = selectedDeptDsncNm.value;
  closeDialog();
}

const changeDeptDsnc = (item: SklRoadmapBranchSearchOutVo, index: number) => {
  selectedDeptDsncNm.value = item.deptDsncNm;
}

onBeforeMount(() => {
  params.blngHdqrDsncVl = authStore.userInfo.blngHdqrDsncVl;
  selectedDeptDsncVl.value = deptDsncVl.value;
  selectedDeptDsncNm.value = deptDsncNm.value;

  fetchData();
});

</script>

<style scoped>

</style>
