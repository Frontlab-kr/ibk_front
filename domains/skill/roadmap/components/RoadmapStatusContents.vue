<template>
  <Accordion :value="levelOptionsString" multiple>
    <AccordionPanel v-for="(item, index) in levelOptions" :value="item.cmcdVl" :key="`${item.cmcdVl}_${index}`">
      <AccordionHeader>
        <div class="ibk-roadmap-accordion-header">
          <h4>{{ item.cmcdVlNm }}</h4>
          <p>
            <span class="open"></span>
            <span class="close"></span>
          </p>
        </div>
      </AccordionHeader>
      <AccordionContent>
<!--        {{ roadmap3LevelItems }}-->
        <RoadmapStatus3LevelItem :items="roadmap3LevelItems" :levelItem="item" />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import Utility from '~/lib/Utility';
import type { CommonCodeAll } from '~/domains/base/type';
import RoadmapStatus3LevelItem from '~/domains/skill/roadmap/components/RoadmapStatus3LevelItem.vue';
const store = useSkillRoadmapStore();

const levelOptions = ref<CommonCodeAll[]>();
levelOptions.value = await Utility.getCommonCodeAsync('SKL00006');

const levelOptionsString = levelOptions.value.map((v)=>{
  return v.cmcdVl;
}) || [];

const props = defineProps<{
  roadmap2LevelItems: SklRoadmapCategoryOutVo[];
}>();

const roadmap3LevelItems = computed(() =>
  props.roadmap2LevelItems.map((item) => {
    return (
      store.skillRoadmap.roadmapCategoryList?.filter(
        (category: SklRoadmapCategoryOutVo) =>
          category.lvlNo === 3 && category.hgrnSkllClsfVl === item.skllClsfVl
      ) || []
    );
  })
);

//const raodmap3LevelItems2 = computed(() => store.skillRoadmap.roadmapCategoryList?.filter(v => v.lvlNo === 3 && v.hgrnSkllClsfVl === current2Level.value?.skllClsfVl) || []);


onBeforeMount(() => {

});

</script>

<style scoped>

</style>
