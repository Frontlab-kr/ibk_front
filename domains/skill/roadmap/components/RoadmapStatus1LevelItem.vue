<template>
  <NuxtLink class="ibk-roadmap-category-item cursor-pointer" :class="{ 'active' : isActive }" @click="selectRaodmap1Level">
    <h6>{{ props.item.skllClsfNm }}</h6>
    <p>
      <strong>{{ `Level ${getSkillCategoryLevel()}` }}</strong>
      {{ `${props.item.cpctLvlAcqtScr} pt`}}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';

const store = useSkillRoadmapStore();

const props = defineProps<{
  item: SklRoadmapCategoryOutVo;
}>();

const { current1Level } = defineModels<{
  current1Level: SklRoadmapCategoryOutVo;
}>();

const isActive = computed(()=>current1Level.value?.skllClsfVl === props.item?.skllClsfVl);

const selectRaodmap1Level = () => {
  current1Level.value = props.item;
}

const getSkillCategoryLevel = () => {
  //높은 레벨부터 조회됨
  let result = 0;
  store.skillStandard.some((standard, i) => {
    const { minBaseScr, maxBaseScr, cpctStgDcd } = standard;
    const score = props.item.cpctLvlAcqtScr;

    if ((i === 0 && score >= minBaseScr) ||
        (i > 0 && score >= minBaseScr && score <= maxBaseScr)) {
      result = Number(cpctStgDcd);
      return true; // 조건에 맞는 경우 반복을 중단
    }
  });
  return result;
}
</script>

<style scoped>

</style>
