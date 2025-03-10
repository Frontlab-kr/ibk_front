<template>
  <div class="ibk-roadmap-title">
    <h4>전문분야</h4>
  </div>
  <div class="ibk-roadmap-category">
    <RoadMapStatus1LevelItem v-for="(item, index) in roadmap1LevelItems" :item="item" :key="`${item.skllClsfVl}_${index}`" v-model:current1Level="current1Level" />
  </div>
  <div class="ibk-roadmap-skill">
    <LicenseStatusContents v-model:current1Level="current1Level" />
  </div>
</template>

<script setup lang="ts">
import RoadMapStatus1LevelItem from '~/domains/skill/roadmap/components/RoadmapStatus1LevelItem.vue';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCategoryOutVo } from '~/api-client';

const store = useSkillRoadmapStore();
const roadmap1LevelItems = computed(() => store.skillRoadmap.roadmapCategoryList?.filter(v => v.lvlNo === 1) || []);
const current1Level = ref<SklRoadmapCategoryOutVo|null>(null);

const fetchData = async () => {
  await store.getSkillRoadmapLicense();
  current1Level.value = roadmap1LevelItems.value[0] || null;
}

onBeforeMount(async () => {
  await store.getSkillRoadmap();
  await store.getSkillRoadmapLicenseStandard();
  fetchData();
});
</script>

<style scoped>

</style>
