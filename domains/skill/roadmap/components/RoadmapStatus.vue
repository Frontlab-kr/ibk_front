<template>
    <div class="ibk-roadmap-title">
      <h4>전문분야</h4>
    </div>
    <div class="ibk-roadmap-category">
      <RoadMapStatus1LevelItem v-for="(item, index) in roadmap1LevelItems" :item="item" :key="`${item.skllClsfVl}_${index}`" v-model:current1Level="current1Level" />
    </div>
    <div class="ibk-roadmap-contents">
      <div class="ibk-roadmap-contents-head">
        <RoadmapStatus2LevelItem v-for="(item, index) in roadmap2LevelItems" :item="item" :key="`${item.skllClsfVl}_${index}`" v-model:current2Level="current2Level" />
      </div>
      <RoadmapStatusContents v-model:current1Level="current1Level" :roadmap2LevelItems="roadmap2LevelItems" />
    </div>
</template>

<script setup lang="ts">
import RoadMapStatus1LevelItem from '~/domains/skill/roadmap/components/RoadmapStatus1LevelItem.vue';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import RoadmapStatus2LevelItem from '~/domains/skill/roadmap/components/RoadmapStatus2LevelItem.vue';
import RoadmapStatusContents from '~/domains/skill/roadmap/components/RoadmapStatusContents.vue';
const store = useSkillRoadmapStore();


const items = ref([]);

const roadmap1LevelItems = computed(() => store.skillRoadmap.roadmapCategoryList?.filter(v => v.lvlNo === 1) || []);
const roadmap2LevelItems = computed(() => store.skillRoadmap.roadmapCategoryList?.filter(v => v.lvlNo === 2 && v.hgrnSkllClsfVl === current1Level.value?.skllClsfVl) || []);
const current1Level = ref<SklRoadmapCategoryOutVo|null>(null);
const current2Level = ref<SklRoadmapCategoryOutVo|null>(null);

watch(()=>current1Level.value,
  ()=> {
    current2Level.value = roadmap2LevelItems.value[0];
  }, { deep: true }
)

const fetchData = async () => {
  await store.getSkillRoadmap();
  current1Level.value = roadmap1LevelItems.value[0] || null;
}

onBeforeMount(async () => {
  await store.getSkillLevelStandard();
  fetchData();
});

</script>

<style scoped>

</style>
