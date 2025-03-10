<template>
  <div class="ibk-roadmap-skill-body">
    <div class="ibk-table ibk-table--scroll-x">
      <table>
        <colgroup>
          <col style="" />
          <col style="width: 160px" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-left">자격증명</th>
            <th>취득일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in getLicenseItems" :key="`${item.qlcrDsncVl}_${index}`" >
            <td class="text-left">
              {{ item.qlcrNm }}
            </td>
            <td class="text-center">
              {{ item.acqtYmd || '' }}
            </td>
          </tr>
          <tr v-if="getLicenseItems.length === 0">
            <td colspan="3">해당 등급 자격증이 없습니다.</td>
          </tr>
        <!--
          <tr>
            <td class="text-left">
              AFPK (Associate Financial Planner Korea: 금융자산관리사)
            </td>
            <td class="text-center">
              <Badge style="background: rgba(48, 209, 88, 0.1); color: #30d158">초급</Badge>
            </td>
            <td class="text-center">취득</td>
          </tr>
          <tr>
            <td class="text-left">
              AFPK (Associate Financial Planner Korea: 금융자산관리사)
            </td>
            <td class="text-center">
              <Badge style="background: rgba(48, 138, 242, 0.1); color: #308af2"
                >중급</Badge
              >
            </td>
            <td class="text-center">취득</td>
          </tr>
          <tr>
            <td class="text-left">
              AFPK (Associate Financial Planner Korea: 금융자산관리사)
            </td>
            <td class="text-center">
              <Badge style="background: rgba(113, 81, 255, 0.1); color: #7151ff"
                >고급</Badge
              >
            </td>
            <td class="text-center">취득</td>
          </tr>
        -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall';
import type { SklRoadmapCategoryOutVo, SklRoadmapItemOutVo } from '~/api-client';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { CommonCodeAll } from '~/domains/base/type';
import RoadmapStatusSkillItem from '~/domains/skill/roadmap/components/RoadmapStatusSkillItem.vue';

const store = useSkillRoadmapStore();

const props = defineProps<{
  current1Level: SklRoadmapCategoryOutVo;
  levelItem: CommonCodeAll;
}>();

const getLicenseItems = computed(() => store.skillRoadmapLicense?.filter(v=>v.qlcrGdcd === props.levelItem.cmcdVl && v.skllClsfVl === props.current1Level?.skllClsfVl) || []);
</script>

<style scoped>

</style>
