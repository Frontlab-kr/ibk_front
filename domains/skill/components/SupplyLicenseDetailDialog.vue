<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">연수 보조금 지원금액 상세</div>
    </template>
    <div v-if="!isLoading" class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item">
        <div class="pc">
          <div class="ibk-table ibk-table--scroll-x">
            <table>
              <colgroup>
                <col style="width: 181px" />
                <col style="width: 148px" />
                <col style="width: 196px" />
                <col style="width: 196px" />
              </colgroup>
              <thead>
                <tr>
                  <th>취득자격증</th>
                  <th>자격증 취득지원 금액</th>
                  <th>연수보조금 지원 금액</th>
                  <th>교육지원 차감 금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center"><strong>{{ store.licenseHistoryData?.contents[0].qlcrNm }}</strong></td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].asstAmt }}원</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].scexTrthSprnAmt }}원</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].asmlTrngAmt + store.licenseSupplyData?.contents[0].cybrTrngAmt }}원</td>
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 161px" />
<!--                <col style="width: 76px" />-->
                <col style="width: 76px" />
                <col style="width: 76px" />
                <col style="width: 76px" />
              </colgroup>
              <thead>
                <tr>
                  <th>강의수강일</th>
                  <th>과정명</th>
<!--                  <th>행내외구분</th>-->
                  <th>수강료</th>
                  <th>교육분류</th>
                  <th>신청일자</th>
                  <th>집합여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].lrngSttgTs.substring(0,10) }}-{{ store.licenseSupplyData?.contents[0].lrngFnshTs.substring(0,10) }}</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].dutyEdctNm }}</td>
<!--                  <td class="text-center">행내</td>-->
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].edexAmt }}원</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].edctClsfNm }}</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].cretTs.substring(0,10) }}</td>
                  <td class="text-center">{{ store.licenseSupplyData?.contents[0].edctMthdTcd === '01' ? 'Y' : 'N' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mo">
          <div class="ibk-dialog-apply-item__table">
            <table>
              <tbody>
                <tr>
                  <th>취득자격증</th>
                </tr>
                <tr>
                  <td>{{ store.licenseHistoryData?.contents[0].qlcrNm }}</td>
                </tr>
                <tr>
                  <th>자격증 취득지원 금액</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].asstAmt }}원</td>
                </tr>
                <tr>
                  <th>연수보조금 지원 금액</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].scexTrthSprnAmt }}원</td>
                </tr>
                <tr>
                  <th>교육지원 차감 금액</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].asmlTrngAmt + store.licenseSupplyData?.contents[0].cybrTrngAmt }}원</td>
                </tr>
                <tr>
                  <th>강의수강일</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].lrngSttgTs.substring(0,10) }}-{{ store.licenseSupplyData?.contents[0].lrngFnshTs.substring(0,10) }}</td>
                </tr>
                <tr>
                  <th>과정명</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].dutyEdctNm }}</td>
                </tr>
<!--                <tr>
                  <th>행내 외 구분</th>
                </tr>
                <tr>
                  <td>행내</td>
                </tr>-->
                <tr>
                  <th>수강료</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].edexAmt }}원</td>
                </tr>
                <tr>
                  <th>교육분류</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].edctClsfNm }}</td>
                </tr>
                <tr>
                  <th>신청일자</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].cretTs.substring(0,10) }}</td>
                </tr>
                <tr>
                  <th>집합여부</th>
                </tr>
                <tr>
                  <td>{{ store.licenseSupplyData?.contents[0].edctMthdTcd === '01' ? 'Y' : 'N' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
import type { IdiLicenseSupplyPageInVo } from '~/api-client';
const store = useSkillStore();

const { visible } = defineModels<{
  visible: boolean
}>();

const isLoading = ref(true);

const props = withDefaults(
	defineProps<{
    item: IdiLicenseSupplyPageInVo
	}>(),
	{
    item: null
  }
);

const closeDialog = () => {
  visible.value = false;
}

onBeforeMount(async () => {
  await store.fetchIdiLicenseSupplyList({qlcrDsncVl : props.item.qlcrDsncVl});
  isLoading.value = false;
});

</script>
