<template>
  <div class="ibk-apply-list">
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-head">
        <h4>역량개발 지원 제도 분기별 한도 현황</h4>
        <Button label="기 지원현황" @click="openCostApplyStatus"/>
      </div>
      <div class="ibk-apply-list-item-body">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 168px" />
              <col style="width: 344px" />
              <col style="width: 344px" />
              <col style="width: 344px" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>신청분기</th>
                <th>한도 차감금액</th>
                <th>잔여한도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">상반기</td>
                <td class="text-center">250,000</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">하반기</td>
                <td class="text-center">179,000</td>
                <td class="text-center">71,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">학원수강료/응시료 지원 안내</div>
          <ul>
            <li>
              <strong>지원대상</strong>
              <p>
                본 제도는 직원 본인을 위한 지원 제도입니다.<br />
                따라서 가족이나 지인의 사용 내역은 지원 대상이 아닙니다.
              </p>
            </li>
            <li>
              <strong>지원기간</strong>
              <p>결제 후 1개월 인</p>
            </li>
            <li>
              <strong>기타</strong>
              <p>
                타행 카드 사용 및 결제 후 취소한 경우 <br />
                교습소 , 학습지 등 학원 업종이 아닌 기관의 경우<br />
                휴직기간 중 수강한 학원 수강료의 경우
              </p>
            </li>
          </ul>
        </div>
        <div class="ibk-info">
          <p>시험 응시료는 휴직기간 중 취득한 경우도 지원 가능</p>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">지원절차</div>
          <ul>
            <li>
              <strong>01. 수강등록</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>02. 지원신청</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>03. 검증 ・ 승인</strong>
              <p>
                중복지급불가<br />
                학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                * 신정제외’등록 후 전산 반영에 2 영업일 소요
              </p>
            </li>
            <li>
              <strong>04. 학원비 지원</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>05. 결과등록</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">증빙서류</div>
          <ul>
            <li>
              <strong>신청</strong>
              <p>수강증 ・ 영수증</p>
            </li>
            <li>
              <strong>필수서류</strong>
              <p>온라인 시용카드 매출 전표</p>
            </li>
          </ul>
        </div>
        <div class="ibk-info">
          <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-list-item-caution">
          <h5>유의사항</h5>
          <p>
            지급 제외된 건에 대해서는 개별 한도가 복원 되지 않습니다.<br />
            일별 소급 적용 불가
          </p>
        </div>

        <div class="ibk-apply-list-item-check">
          <Checkbox v-model="necessaryCheck" inputId="checkbox1" binary :true-value="true" :false-value="false"/>
          <label for="checkbox1"> 위 사항을 모두 확인 했고 , 학원 수강료/ 응시료 지원을 신청합니다.</label>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-button">
      <Button label="지원신청" size="large" @click="openCostApplyDialog" :disabled="!necessaryCheck"/>
    </div>
  </div>
  <CostApplyDialog v-if="costApplyDialogParams.visible" v-model:visible="costApplyDialogParams.visible" :edu-item="costApplyDialogParams.eduItem" :exam-item="costApplyDialogParams.examItem" :employment-item="costApplyDialogParams.employmentItem" modal/>
  <CostApplyStatusDialog v-if="costApplyStatusDialogParams.visible" v-model:visible="costApplyStatusDialogParams.visible" modal/>
</template>

<script setup lang="ts">
import { useSkillStore } from '~/domains/skill/store';
import { useAuthStore } from '~/domains/auth';
import { ref } from 'vue';
import type {
  CostApplyDialogOptions,
  CostApplyStatusDialogOptions,
  EduCostApplyOptions,
  ExamCostApplyOptions,
} from '~/domains/skill/type';
import Utility from '~/lib/Utility';
const necessaryCheck = ref(false);

const store = useSkillStore();
const authStore = useAuthStore();

const idiEduCostParams = reactive<EduCostApplyOptions>({
  sqc: 0, // 순번 (BigDecimal을 숫자로 대체)
  edctMthdDsncVl: '', // 수강방법
  onslDvlpSprnAplcDcd: '', // 자기개발지원신청구분코드
  spmyAplcDcd: '10', // 지원금신청구분코드
  edinNm: '', // 교육기관명
  edctProcNm: '', // 연수명
  lcteSttgYmd: '', // 수강시작일 (yyyy-mm-dd 형식 예상)
  lcteFnshYmd: '', // 수강종료일 (yyyy-mm-dd 형식 예상)
  trngAtlcAmt: 0, // 학원비(수강료) (BigDecimal을 숫자로 대체)
  cardApn: '', // 카드승인번호
  spmyAplcYmd: Utility.getTodayDate('yyyy.mm.dd'), // 신청년월일 (yyyy-mm-dd 형식 예상)
  crdAthzYmd: Utility.getTodayDate('yyyy.mm.dd'), // 신용카드승인년월일 (yyyy-mm-dd 형식 예상)
  encpCardNo: '', // 암호화카드번호
  encpCardNo1: '', // 암호화카드번호1
  encpCardNo2: '', // 암호화카드번호2
  encpCardNo3: '', // 암호화카드번호3
  encpCardNo4: '', // 암호화카드번호4
  trngAplcScd: '', // 신청상태코드 (10=임시저장, 20=신청완료, 30=미확정, 40=확정)
  dbSecretKey: '', // DB 암호화 키 (hidden 속성)
  uploadFileList: [],
  atchList: [],
  attachFileList: [],
  fileDeleteInVoList: [],
});

const idiExamCostParams = reactive<ExamCostApplyOptions>({
  onslDvlpSprnAplcDcd: 'L', // L : 자격증
  sqc: 0, // 순서 (BigDecimal을 숫자로 대체)
  emplNo: authStore.userInfo.emplNo,
  qlcrDsncVl: '', // 자격증구분값
  qlacYmd: '', // 자격취득년월일 (yyyy-mm-dd 형식 예상)
  lrngSptgDcd: '', // 학습지원대상구분코드 (B=일반, S=시니어)
  qlcrNm: '', // 자격증명
  crdAthzYmd: '', // 신용카드승인년월일 (yyyy-mm-dd 형식 예상)
  encpCardNo: '', // 암호화카드번호
  crdApn: '', // 신용카드승인번호
  crahAmt: 0, // 카드승인금액 (BigDecimal을 숫자로 대체)
  encpCardNo1: '', // 암호화카드번호1
  encpCardNo2: '', // 암호화카드번호2
  encpCardNo3: '', // 암호화카드번호3
  encpCardNo4: '', // 암호화카드번호4
  examAaeSprnScd: '', // 승인여부
  dbSecretKey: '', // DB 암호화 키 (hidden 속성)
  fileDeleteInVoList: [], // 첨부파일 삭제 리스트
  attachFileList: [], // 첨부파일 리스트
  uploadFileList: [] // 업로드 파일 리스트
});

const idiEmploymentCostParams = reactive<EduCostApplyOptions>({
  sqc: 0, // 순번 (BigDecimal을 숫자로 대체)
  edctMthdDsncVl: '', // 수강방법
  onslDvlpSprnAplcDcd: '', // 자기개발지원신청구분코드
  spmyAplcDcd: '30', // 지원금신청구분코드
  edinNm: '', // 교육기관명
  edctProcNm: '', // 연수명
  lcteSttgYmd: '', // 수강시작일 (yyyy-mm-dd 형식 예상)
  lcteFnshYmd: '', // 수강종료일 (yyyy-mm-dd 형식 예상)
  trngAtlcAmt: 0, // 학원비(수강료) (BigDecimal을 숫자로 대체)
  cardApn: '', // 카드승인번호
  spmyAplcYmd: Utility.getTodayDate('yyyy.mm.dd'), // 신청년월일 (yyyy-mm-dd 형식 예상)
  crdAthzYmd: Utility.getTodayDate('yyyy.mm.dd'), // 신용카드승인년월일 (yyyy-mm-dd 형식 예상)
  encpCardNo: '', // 암호화카드번호
  encpCardNo1: '', // 암호화카드번호1
  encpCardNo2: '', // 암호화카드번호2
  encpCardNo3: '', // 암호화카드번호3
  encpCardNo4: '', // 암호화카드번호4
  trngAplcScd: '', // 신청상태코드 (10=임시저장, 20=신청완료, 30=미확정, 40=확정)
  dbSecretKey: '', // DB 암호화 키 (hidden 속성)
  uploadFileList: [],
  atchList: [],
  attachFileList: [],
  fileDeleteInVoList: [],
});

const costApplyDialogParams = reactive<CostApplyDialogOptions>({
  visible: false,
  eduItem: idiEduCostParams,
  examItem: idiExamCostParams,
  employmentItem: idiEmploymentCostParams,
});

const costApplyStatusDialogParams = reactive<CostApplyStatusDialogOptions>({
  visible: false
});

const openCostApplyStatus = async () => {
  await store.fetchEduCostApplyStatusList({year: new Date().getFullYear()})
  await store.fetchExamCostApplyStatusList({year: new Date().getFullYear()})
  costApplyStatusDialogParams.visible= true;
}

const openCostApplyDialog = async () => {
  await store.fetchEduCostApplyDetail({spmyAplcDcd : idiEduCostParams.spmyAplcDcd});
  if(store.eduCostApplyDetailData){
    Object.assign(idiEduCostParams, store.eduCostApplyDetailData);
    idiEduCostParams.encpCardNo = idiEduCostParams.encpCardNo1+idiEduCostParams.encpCardNo2+idiEduCostParams.encpCardNo3+idiEduCostParams.encpCardNo4;
  }
  await store.fetchExamCostApplyDetail({});
  if(store.examCostApplyDetailData){
    Object.assign(idiExamCostParams, store.examCostApplyDetailData);
    idiExamCostParams.encpCardNo = idiExamCostParams.encpCardNo1+idiExamCostParams.encpCardNo2+idiExamCostParams.encpCardNo3+idiExamCostParams.encpCardNo4;
  }
  await store.fetchEmploymentCostApplyDetail({spmyAplcDcd : idiEmploymentCostParams.spmyAplcDcd});
  if(store.employmentCostApplyDetailData){
    Object.assign(idiEmploymentCostParams, store.employmentCostApplyDetailData);
    idiEmploymentCostParams.encpCardNo = idiEmploymentCostParams.encpCardNo1+idiEmploymentCostParams.encpCardNo2+idiEmploymentCostParams.encpCardNo3+idiEmploymentCostParams.encpCardNo4;
  }
  costApplyDialogParams.visible= true;
  costApplyDialogParams.eduItem= idiEduCostParams;
  costApplyDialogParams.examItem= idiExamCostParams;
  costApplyDialogParams.employmentItem= idiEmploymentCostParams;
};
</script>

<style scoped>

</style>
