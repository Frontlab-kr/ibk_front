<template>
  <div class="ibk-roadmap-contents-head-item cursor-pointer" :class="{ 'acative' : isActive }" >{{ props.item.skllClsfNm }}</div>
</template>

<script setup lang="ts">
import type { SklRoadmapCategoryOutVo } from '~/api-client';

const props = defineProps<{
  item: SklRoadmapCategoryOutVo;
}>();

const { current2Level } = defineModels<{
  current2Level: SklRoadmapCategoryOutVo;
}>();

const isActive = computed(()=>current2Level.value?.skllClsfVl === props.item?.skllClsfVl);

const selectRaodmap2Level = () => {
  current2Level.value = props.item;
}
</script>

<style scoped>

</style>
