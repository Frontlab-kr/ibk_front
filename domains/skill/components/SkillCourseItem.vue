<template>
  <div class="ibk-dialog-apply-training-item">
    <div class="ibk-dialog-apply-training-item__thumb">
      <img :src="props.item.pcImgUrlAdr" alt="" />
    </div>
    <div class="ibk-dialog-apply-training-item-info">
      <div class="ibk-dialog-apply-training-item__badge">
        <Badge :value="props.item.edctMthdNm" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
      </div>
      <div class="ibk-dialog-apply-training-item__title">
        <strong
          class="mr-1"
          :class="props.item.ctcrYn === 'Y' ? 'text-primary' : 'text-slate-500'">
          {{ props.item.ctcrYn === 'Y' ? '수료' : '미수료' }}
        </strong>
        {{ props.item.dutyEdctNm }}
      </div>
      <div class="ibk-dialog-apply-training-item__text">
        <div>
          <strong>{{ props.item.ctcrYn === 'Y' ? `점수 ${props.item.ctcrScr}`: '-'}}</strong>
          <hr />
          {{ props.item.edctDflvNm }}
          <hr />
          {{ props.item.kwrVl }}
        </div>
      </div>
    </div>
    <div class="ibk-dialog-apply-training-item__like">
      <div class="pc">
        <Button label="상세보기" outlined severity="secondary" @click="goDetail"/>
      </div>
      <Button :icon="props.item.likeYn === 'Y' ? 'ibk-icon-24-like-active': 'ibk-icon-24-like'" outlined severity="secondary" @click="toggleLike($event)" />
    </div>
    <div class="ibk-dialog-apply-training-item__button">
      <Button label="상세보기" outlined severity="secondary" class="w-full" @click="goDetail"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCourseOutVo } from '~/api-client';
import { useEducationStore } from '~/domains/course/education';

const store = useSkillRoadmapStore();
const educationStore = useEducationStore();
const router = useRouter();

const props = defineProps<{ item: SklRoadmapCourseOutVo }>();
const emits = defineEmits<{
  (e: 'toggleLike'): void,
}>();

const toggleLike = async (e: Event) => {
  await educationStore.toggleLike({ dutyEdctCd: props.item.dutyEdctCd });
  emits('toggleLike');
}

const goDetail = () => {
  router.push(`/course/education/detail?dutyEdctCd=${props.item.dutyEdctCd}`)
}

</script>

<style scoped>

</style>
