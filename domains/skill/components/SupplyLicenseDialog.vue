<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">취득 지원 자격증</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 76px" />
              <col style="width: 180px" />
              <col style="width: 104px" />
              <col style="width: 180px" />
              <col style="width: 180px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>자격증</th>
                <th>등급</th>
                <th>연수보조금</th>
                <th>마일리지</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="store.licenseHistoryData?.contents.length > 0">
                <tr v-for="(item, index) in store.licenseHistoryData?.contents">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ item.qlcrNm }}</td>
                  <td class="text-center">{{ item.qlcrGdcdNm }}</td>
                  <td class="text-center">{{ Utility.setCommaPer3Digit(item.trngAsstAmt) }}원</td>
                  <td class="text-center">{{ Utility.setCommaPer3Digit(item.mlgOcrnScr) }}점</td>
                </tr>
              </template>
              <template v-else>
                <td rowspan="5" class="text-center">취득 지원 자격증이 없습니다.</td>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
      </div>
    </template>
  </Dialog>

</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { useSkillStore } from '~/domains/skill/store';
import Utility from '~/lib/Utility';
const store = useSkillStore();

const { visible } = defineModels<{
  visible: boolean
}>();

const closeDialog = () => {
  visible.value = false;
}

onMounted(async () => {
  await store.fetchIdiLicenseHistoryList({});
});

</script>
