<template>
  <div class="ibk-roadmap-contents-map-item cursor-pointer" @click="selectSkill">
    <div class="ibk-roadmap-contents-map-item__head">
      <Badge
        :value="props.item.tchnKnwlNm"
        :style="techStyle()"
      ></Badge>
      <strong>{{ props.item.cpctLvlAcqtScr }}점</strong>
    </div>
    <div class="ibk-roadmap-contents-map-item__title">
      <p>{{ props.item.skllNm }}</p>
    </div>
  </div>

  <SkillCourseListDialog v-if="dialogParams.visible"
                         v-model:visible="dialogParams.visible"
                         :skllCd="dialogParams.skllCd"
                         :skllClsfPathNm="dialogParams.skllClsfPathNm" />
</template>

<script setup lang="ts">
import type { SklRoadmapCategoryOutVo, SklRoadmapItemOutVo } from '~/api-client';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SkillCourseListDialogOptions } from '~/domains/skill/roadmap/type';

const store = useSkillRoadmapStore();

const props = defineProps<{
  item: SklRoadmapItemOutVo;
}>();

const dialogParams = reactive<SkillCourseListDialogOptions>({
  visible: false,
  skllCd: '',
  skllClsfPathNm: ''
});

const techStyle = () => {
  if (props.item.tchnKnwlDcd === 'A') {
    return 'background: rgba(113, 81, 255, 0.1); color: #7151ff';
  } else if (props.item.tchnKnwlDcd === 'B') {
    return 'background: rgba(48, 209, 88, 0.1); color: #30d158';
  } else {
    return 'background: rgba(48, 209, 88, 0.1); color: #30d158';
  }
}

const selectSkill = () => {
  dialogParams.skllCd = props.item.skllClsfVl;
  dialogParams.skllClsfPathNm = props.item.skllClsfPathNm;

  dialogParams.visible = true;
}

</script>

<style scoped>

</style>
