<template>
  <div class="ibk-apply-list">
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-head">
        <h4>자격증 취득 및 지원 현황</h4>
        <Button label="지원 자격증" @click="openSupplyLicenseDialog"/>
      </div>
      <div class="ibk-apply-list-item-body">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 140px" />
              <col style="width: 171px" />
              <col style="width: 120px" />
              <col style="width: 171px" />
              <col style="width: 171px" />
              <col style="width: 171px" />
              <col style="width: 128px" />
              <col style="width: 128px" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>취득자격증</th>
                <th>자격증등급</th>
                <th>취득일자</th>
                <th>등록일자</th>
                <th>연수보조금 지원금액</th>
                <th>상세</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
            <template v-if="store.licenseHistoryData?.contents.length > 0">
              <tr v-for="(item, index) in store.licenseHistoryData?.contents">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ item.qlcrNm }}</td>
                <td class="text-center">{{ item.qlcrGdcdNm }}</td>
                <td class="text-center">{{ item.acqtYmd }}</td>
                <td class="text-center">{{ item.rgsnYmd }}</td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.trngAsstAmt) }}원</td>
                <td class="text-center">
                  <Button label="상세보기" severity="secondary" outlined @click="openLicenseDetailDialog(item)"/>
                </td>
                <td class="text-center">-</td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="7" class="text-center">취득한 자격증이 없습니다.</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
        <div class="ibk-info">
          <p>
            지원금액은 연수비용(사이버, 통신, 인하우스 등)을 차감 후 입금된 금액임. 단, 투자자산운용사,
            은행FP, AFPK는 중복취득 시, <br />
            연수 보조금은 하나만 지원함. 합격년도 말일 기준 2년 경과된 자격증은 지원 내역은 기일경과로
            표시하지 않음
          </p>
        </div>
      </div>
    </div>
  </div>
  <SupplyLicenseDialog v-if="licenseDialogParams.visible" v-model:visible="licenseDialogParams.visible" :item="licenseDialogParams.item"/>
  <SupplyLicenseDetailDialog v-if="licenseDetailDialogParams.visible" v-model:visible="licenseDetailDialogParams.visible" :item="licenseDetailDialogParams.item"/>
</template>

<script setup lang="ts">
import { useSkillStore } from '~/domains/skill/store';
import type { IdiLicensePageInVo } from '~/api-client';
import type {
  LicenseDetailDialogOptions,
  LicenseDialogOptions,
} from '~/domains/skill/type';
import SupplyLicenseDialog from '~/domains/skill/components/SupplyLicenseDialog.vue';
import SupplyLicenseDetailDialog from '~/domains/skill/components/SupplyLicenseDetailDialog.vue';
import Utility from '~/lib/Utility';

const store = useSkillStore();

const params = reactive<IdiLicensePageInVo>({
  useYn: 'Y'
});

const licenseDialogParams = reactive<LicenseDialogOptions>({
  visible: false,
  item: params,
});

const licenseDetailDialogParams = reactive<LicenseDetailDialogOptions>({
  visible: false,
  item: params,
});

const openSupplyLicenseDialog = () => {
  licenseDialogParams.visible= true;
  licenseDialogParams.item= params;
}

const openLicenseDetailDialog = (item) => {
  licenseDetailDialogParams.visible= true;
  licenseDetailDialogParams.item= item;
}

onMounted(async () => {
  await store.fetchIdiLicenseHistoryList({});
});
</script>

<style scoped>

</style>
