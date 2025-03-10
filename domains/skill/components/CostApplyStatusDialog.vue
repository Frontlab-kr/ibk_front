<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">지원 현황</div>
    </template>
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">학원수강료 승인현황</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 48px" />
              <col style="width: 64px" />
              <col style="width: 160px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 178px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>신청분기</th>
                <th>과정명</th>
                <th>교육기관</th>
                <th>수강료</th>
                <th>지급예정금액</th>
                <th>연수기간</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="store.eduCostApplyStatusData.length > 0" v-for="(item, index) of store.eduCostApplyStatusData">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center"></td>
                <td class="text-center">
                  <strong>{{ item.edctProcNm }}</strong>
                </td>
                <td class="text-center">{{ item.edinNm }}</td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.trngAtlcAmt) }}원</td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.pamtAmt) }}원</td>
                <td class="text-center">{{ item.lcteSttgYmd }} - {{ item.lcteFnshYmd }}</td>
              </tr>
              <tr v-else>
                <td colspan="7" class="text-center">승인된 내역이 없습니다.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="7">
                  <div class="ibk-table-price">
                    <p>총 지급 예상금액</p>
                    <strong> {{ store.eduCostApplyStatusData[0] ? Utility.setCommaPer3Digit(store.eduCostApplyStatusData[0].pamtAmtSum) : 0 }}원 </strong>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="ibk-info">
          <p>어학과정 지원금 누적현황 : {{ store.eduCostApplyStatusData[0] ? Utility.setCommaPer3Digit(store.eduCostApplyStatusData[0].languagePamtAmtSum) : 0 }}원(50만원 초과 시 어학 성적표 제출 필수)</p>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">시험응시료 승인현황</div>
        </div>
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 48px" />
              <col style="width: 64px" />
              <col style="width: 160px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 90px" />
              <col style="width: 88px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>분야</th>
                <th>취득자격명</th>
                <th>응시료</th>
                <th>지급예정금액</th>
                <th>취득일자</th>
                <th>신청일자</th>
                <th>처리상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="store.examCostApplyStatusData.length > 0" v-for="(item, index) of store.examCostApplyStatusData">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ item.onslDvlpSprnAplcDcdNm }}</td>
                <td class="text-center">
                  <strong>{{ item.qlcrNm }}</strong>
                </td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.crahAmt) }}원</td>
                <td class="text-center">{{ Utility.setCommaPer3Digit(item.sprnAplcAmt) }}원</td>
                <td class="text-center">{{ item.qlacYmd }}</td>
                <td class="text-center">{{ item.spmyAplcYmd }}</td>
                <td class="text-center text-primary">완료</td>
              </tr>
              <tr v-else>
                <td colspan="8" class="text-center">승인된 내역이 없습니다.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="8">
                  <div class="ibk-table-price">
                    <p>총 지급 예상금액</p>
                    <strong>{{ store.examCostApplyStatusData[0] ? Utility.setCommaPer3Digit(store.examCostApplyStatusData[0].pamtAmtSum) : 0 }}원 </strong>
                  </div>
                </td>
              </tr>
            </tfoot>
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
