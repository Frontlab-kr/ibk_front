<template>
  <h5>자격증이력</h5>
  <div class="ibk-table ibk-table--scroll-x">
    <table>
      <colgroup>
        <col style="width: 120px" />
        <col style="width: 920px" />
        <col style="width: 160px" />
      </colgroup>
      <thead>
        <tr>
          <th>월</th>
          <th class="text-left">자격증명</th>
          <th>획득 Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="`${item.historyMonth}_${index}`">
          <td class="text-center">{{ item.historyMonth }}월</td>
          <td class="text-left line-breaking">{{ item.stsTitle }}</td>
          <td class="text-center">{{ item.cpctLvlAcqtScr }}pt</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import type { SklRoadmapCategoryOutVo } from '~/api-client';
import { ref } from 'vue';

const store = useSkillRoadmapStore();

const list = computed(()=>store.skillRoadmapHistoryMonthly.filter(v=>v.qlfcTrngDcd === 'C'));

onBeforeMount(async () => {

});
</script>

<style scoped>
.ibk-table td.line-breaking {
  white-space: normal; /* 줄바꿈 허용 */
  overflow-wrap: break-word; /* 긴 단어 줄바꿈 */
  word-break: keep-all; /* 단어 단위로 줄바꿈 (영어는 단어 기준, 한글은 그대로) */
}
</style>
