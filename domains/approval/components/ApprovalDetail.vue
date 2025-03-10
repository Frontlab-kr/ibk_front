<template>
  <Dialog v-model:visible="props.isOpen" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeModal" />
      </div>
      <div class="ibk-dialog-apply__title">연수 신청 상세</div>
    </template>
    <div v-if="approvalDetail" class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
              <tr>
                <th>신청자 정보</th>
                <td colspan="3">{{approvalDetail.blngHdqrDsncNm}}・ {{approvalDetail.deptDsncNm}} ・ {{approvalDetail.userNm}}</td>
              </tr>
              <tr>
                <th>연수기간</th>
                <td>{{formatDateRange(approvalDetail.lrngSttgTs, approvalDetail.lrngFnshTs)}}</td>
                <th>신청일</th>
                <td>{{formatDate(approvalDetail.aplcTs)}}</td>
              </tr>
              <tr>
                <th>학습내용</th>
                <td colspan="3">
                  {{approvalDetail.dutyEdctObjtCon}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
              <tr>
                <th>신청자 정보</th>
              </tr>
              <tr>
                <td>{{approvalDetail.blngHdqrDsncNm}}・ {{approvalDetail.deptDsncNm}} ・ {{approvalDetail.userNm}}</td>
              </tr>
              <tr>
                <th>연수기간</th>
              </tr>
              <tr>
                <td>{{formatDateRange(approvalDetail.lrngSttgTs, approvalDetail.lrngFnshTs)}}</td>
              </tr>
              <tr>
                <th>신청일</th>
              </tr>
              <tr>
                <td>{{formatDate(approvalDetail.aplcTs)}}</td>
              </tr>
              <tr>
                <th>학습내용</th>
              </tr>
              <tr>
                <td>
                  {{approvalDetail.dutyEdctObjtCon}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">도서 배송 주소</div>
        </div>
        <div class="ibk-dialog-apply-result">
          <ul>
            <li>
              <strong>우편번호</strong>
              {{approvalDetail.dlplPssrNo}}
            </li>
            <li>
              <strong>배송 주소</strong>
              {{approvalDetail.dlplBscAdr}} {{approvalDetail.dlplDtlAdr}}
            </li>
            <li>
              <strong>회사전화</strong>
              {{approvalDetail.rsprCnplCon}}
            </li>
            <li>
              <strong>핸드폰 번호</strong>
              {{approvalDetail.cpn}}
            </li>
            <li>
              <strong>이메일</strong>
              {{approvalDetail.userEad}}
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재정보</div>
        </div>
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
              <th>단계</th>
              <th>성명</th>
              <th>직급</th>
              <th>결재상태</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,idx) in approvalDetail.approvalDetailLineOutVo" :key="idx">
              <td class="text-center">{{idx+1}}차 결재</td>
              <td class="text-center">{{item.snctUserNm}}</td>
              <td class="text-center">{{item.snpnDcdNm}}</td>
              <td v-if="item.snctScd == '01'" class="text-center">요청</td>
              <td v-else-if="item.snctScd == '02'" class="text-center">승인</td>
              <td v-else-if="item.snctScd == '03'" class="text-center text-red-400">반려</td>
              <td v-else class="text-center">-</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="ibk-board-detail-file">
        <h3>첨부파일 <strong>{{approvalDetail.courseDegreeRequestAtchOutVo ? approvalDetail.courseDegreeRequestAtchOutVo.length : 0}}</strong></h3>
        <ul>
          <li v-for="(item,idx) in approvalDetail.courseDegreeRequestAtchOutVo" :key="idx" class="ibk-board-detail-file-ing">
            <NuxtLink :to="item.fileUrlAdr" class="ibk-board-detail-file__text">
              <i class="ibk-icon-24-download"></i>
              <div>
                <p>{{item.orcpFileNm}}</p>
                <div class="mo">
<!--                  TODO: 무해화 검증 여부 확인하여 적용 -->
                  <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
                  <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
                </div>
              </div>
              <strong>{{item.flszVl}}</strong>
            </NuxtLink>
            <div class="pc">
              <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
              <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeModal" />
        <!-- <Button label="확인" severity="primary" size="large" class="w-full" @click="modal03 = false" /> -->
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { useApprovalStore } from '~/domains/approval/store';
import type { ApprovalDetailOutVo } from '~/api-client';
import { formatDate, formatDateRange } from '~/utils/$dateUtils';

const props = defineProps<{
  isOpen: boolean,
  snctApfrNo: number,
}>();
const emit = defineEmits(['update:isOpen','update:snctApfrNo']);

const store = useApprovalStore();
const approvalDetail = ref<ApprovalDetailOutVo>({});

const closeModal = () => {
  emit('update:isOpen', false);
  emit('update:snctApfrNo', 0);
}

const getApprovalDtl = async () => {
  await store.getApprovalDtl({
    snctApfrNo: props.snctApfrNo
  });
  if(store.approvalDetail.data && store.approvalDetail.data.response){
    approvalDetail.value = store.approvalDetail.data.response;
  }
}

watch(() => props.snctApfrNo, () => {
  if(props.snctApfrNo > 0){
    getApprovalDtl();
  }
})

</script>
