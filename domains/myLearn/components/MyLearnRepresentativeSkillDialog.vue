<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-skill">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-skill__title">나의 대표 skill 설정</div>
    </template>

    <div class="ibk-dialog-skill-list">
      <div class="ibk-radio ibk-radio--type2">
        <div class="ibk-radio-item" v-for="(item, index) in skillCategoryList" :key="`${item.skllClsfVl}_${index}`">
          <RadioButton v-model="skllClsfVl" :inputId="`radio_${index}`" :value="item.skllClsfVl" />
          <label :for="`radio_${index}`" class="ml-2">{{ item.skllClsfNm }}</label>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-skill__button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button label="선택" severity="primary" size="large" class="w-full" @click="saveMySkill" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import { useMyLearnStore } from '~/domains/myLearn/store';

const store = useMyLearnStore();
const { visible } = defineModels<{
  visible: boolean;
}>();

const skillCategoryList = ref<SklRoadmapCategoryOutVo[]>([])
const skllClsfVl = ref(store.mySkill?.skllClsfVl);

const fetchData = async () => {
  const data = await $wrap($request().inqSklRoadmapCategoryList({ lvlNo: 1 }));
  const result = $item(data);
  skillCategoryList.value = result;
}

const saveMySkill = async () => {
  const result = await store.saveMySkill({ skllClsfVl: skllClsfVl.value });
  if(result.success) {
    await $alert('나의 대표 Skill이 설정 되었습니다.');
    store.getMySkill();
    closeDialog();
  }
}

const closeDialog = () => {
  visible.value = false;
}

onBeforeMount(()=>{
  fetchData();
})

</script>

<style scoped>

</style>
