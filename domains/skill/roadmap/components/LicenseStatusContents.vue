<template>
  <Accordion :value="levelOptionsString" multiple>
    <div class="ibk-roadmap-skill-item">
      <AccordionPanel v-for="(item, index) in levelOptions" :value="item.cmcdVl" :key="`${item.cmcdVl}_${index}`">
        <AccordionHeader>
          <div class="ibk-roadmap-skill-header">
            <h4>
              {{ item.cmcdVlNm }}
              <hr />
              {{ `${getGradePoint(item)}점` }}
            </h4>
            <p>
              <span class="open"></span>
              <span class="close"></span>
            </p>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <LicenseStatusContentsItem :current1Level="current1Level" :levelItem="item" />
        </AccordionContent>
      </AccordionPanel>
    </div>
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
levelOptions.value = await Utility.getCommonCodeAsync('COM00050');

const levelOptionsString = levelOptions.value.map((v)=>{
  return v.cmcdVl;
}) || [];

const { current1Level } = defineModels<{
  current1Level: SklRoadmapCategoryOutVo;
}>();

const getGradePoint = (item: CommonCodeAll) => {
  return store.skillRoadmapLicense?.reduce((sum, v) => {
    if (v.qlcrGdcd === item.cmcdVl && v.skllClsfVl === current1Level.value?.skllClsfVl) {
      return sum + (v.cpctLvlAcqtScr || 0);
    }
    return sum;
  }, 0) || 0;

}

onBeforeMount(() => {

});

</script>

<style scoped>

</style>
