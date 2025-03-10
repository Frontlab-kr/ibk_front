<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">복지비 내역</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
            </colgroup>
            <thead>
              <tr>
                <th>카드번호</th>
                <th>승인번호</th>
                <th>승인일</th>
                <th>금액(원)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of store.welfareFeeData.contents">
                <td class="text-center">{{ item.encpCardNo1 + item.encpCardNo2 + item.encpCardNo3 + item.encpCardNo4 }}</td>
                <td class="text-center">{{ item.cardApn }}</td>
                <td class="text-center">{{ item.athzYmd }}</td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.stlmAmt) }}</td>
              </tr>
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
import { useSkillStore } from '~/domains/skill/store';
import Utility from '~/lib/Utility';
const store = useSkillStore();
const { visible } = defineModels<{
  visible: boolean
}>();

const closeDialog = () => {
  visible.value = false;
}

</script>
