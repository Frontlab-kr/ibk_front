<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">지원금 신청 상세</div>
    </template>
    <Tabs :value="tab">
      <TabList>
        <Tab v-if="tab == 'edu'" value="edu">학원 수강료</Tab>
        <Tab v-if="tab == 'exam'" value="exam">시험 응시료</Tab>
        <Tab v-if="tab == 'employment'" value="employment">재취업 · 창업</Tab>
      </TabList>
      <TabPanels>
        <CostEduDetailTab :item="props.eduItem"/>
        <CostExamDetailTab :item="props.examItem"/>
        <CostEmploymentDetailTab :item="props.employmentItem"/>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog"/>
        <Button label="신청취소" severity="secondary" size="large" outlined class="w-full" @click="delCostApply"/>
        <Button label="수정" severity="primary" size="large" class="w-full" @click="goModify"/>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import { useSkillStore } from '~/domains/skill/store';
import { ref } from 'vue';
import CostEduDetailTab from '~/domains/skill/components/CostEduDetailTab.vue';
import CostExamDetailTab from '~/domains/skill/components/CostExamDetailTab.vue';
import CostEmploymentDetailTab from '~/domains/skill/components/CostEmploymentDetailTab.vue';
import type { EduCostApplyOptions, ExamCostApplyOptions } from '~/domains/skill/type';
import Utility from '~/lib/Utility';
const store = useSkillStore();
const tab = ref('edu');

const { visible } = defineModels<{
  visible: boolean
}>();

const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
  (e: 'goModify', params: any, target: string): void;
}>();

const refresh = async (isRefresh = true) => {
  emits('refresh', isRefresh);
}

const goModify = async () => {
  closeDialog();
  let params;
  if(props.target == 'edu'){
    params = props.eduItem;
  }else if (props.target == 'exam'){
    params = props.examItem;
  }else if (props.target == 'employment'){
    params = props.employmentItem;
  }
  emits('goModify', params, props.target);
}

const props = withDefaults(
	defineProps<{
    eduItem: EduCostApplyOptions | null,
    examItem: ExamCostApplyOptions | null,
    employmentItem: EduCostApplyOptions | null,
    target: ''
	}>(),
	{
    eduItem: null,
    examItem: null,
    employmentItem: null,
    target: ''
  }
);

const closeDialog = () => {
  visible.value = false;
}

const delCostApply = async () => {
  const isYesOrNo = await Utility.confirm("해당 신청건을 삭제하시겠습니까?");
  if (!isYesOrNo) return;
  let result;
  if(tab.value == 'edu'){
    result = await store.delIdiEduCost(props.eduItem);
  }else if(tab.value == 'exam'){
    result = await store.delIdiExamCost(props.examItem);
  }else if(tab.value == 'employment'){
    result = await store.delIdiEduCost(props.employmentItem);
  }
  if(result.success) {
    Utility.alert('삭제되었습니다');
    await refresh();
    closeDialog();
  }
}

onBeforeMount(async () => {
  tab.value = 'edu';

  if(props.target){
    tab.value = props.target;
  }
})

</script>
