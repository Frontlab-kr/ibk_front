<template>
  <MasonryWall :items="items" :ssr-columns="1" :column-width="items.length === 0 ? 158 : 1106 / items.length" :gap="6">
    <template #default="{ item, index }">
      <div class="ibk-roadmap-contents-map-list" v-for="(item2, index2) in item" :key="index2">
        <div class="ibk-roadmap-contents-map-title">
          {{ item2.skllClsfNm }}
        </div>
        <div class="ibk-roadmap-contents-map-body">
          <RoadmapStatusSkillItem v-for="(skillItem, index) in getSkillItems(item2)" :key="`${skillItem.skllCd}_${index}`" :item="skillItem" />
        </div>
        <div class="ibk-roadmap-contents-map-more">
          <!--<Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />-->
        </div>
      </div>
      <div v-if="item.length === 0">
        <div class="ibk-roadmap-contents-map-list">
          <div class="ibk-roadmap-contents-map-title-none"></div>
          <div class="ibk-roadmap-contents-map-body"></div>
          <div class="ibk-roadmap-contents-map-more"></div>
        </div>
      </div>
    </template>
  </MasonryWall>
</template>

<script setup lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall';
import type { SklRoadmapCategoryOutVo, SklRoadmapItemOutVo } from '~/api-client';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { CommonCodeAll } from '~/domains/base/type';
import RoadmapStatusSkillItem from '~/domains/skill/roadmap/components/RoadmapStatusSkillItem.vue';

const store = useSkillRoadmapStore();

const props = defineProps<{
  items: SklRoadmapCategoryOutVo[];
  levelItem: CommonCodeAll;
}>();

const getSkillItems = (item: SklRoadmapCategoryOutVo): SklRoadmapItemOutVo[] => {
  return store.skillRoadmap.roadmapItemList?.filter(v=>v.cpctStgDcd === props.levelItem.cmcdVl && v.skllClsfVl === item.skllClsfVl) || []
}

</script>

<style scoped>

</style>
