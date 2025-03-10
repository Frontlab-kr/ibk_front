<template>
  <div class="ibk-payment-center-list-item">
    <div class="ibk-payment-center-list-item__text">
      <div class="ibk-payment-center-list-item__checkbox">
        <label for="checkbox01-1"> {{ dayjs(props.item.cretTs).year() }} </label>
      </div>
      <div class="ibk-payment-center-list-item__title">
        <strong class="text-red-500">{{ props.item.status1Nm }}</strong>
        <strong class="text-red-500">{{ props.item.status2Nm }}</strong>
        {{ props.item.headTitle }}
      </div>
      <ul>
        <li>
          <span>신청일</span>
          <span>{{ dayjs(props.item.cretTs).format('YYYY-MM-DD HH:mm') }}</span>
        </li>
      </ul>
    </div>
    <div class="ibk-payment-center-list-item__end">
      <div class="ibk-payment-center-list-item__button">
        <Button label="수정" severity="secondary" class="text-primary-600" @click="editItem(props.item.applyType, props.item.sqc)"/>
        <Button label="취소" severity="secondary" outlined @click="deleteItem(props.item.applyType, props.item.sqc)"/>
        <Button label="상세보기" severity="secondary" outlined @click="openDetailItem(props.item.applyType, props.item.sqc)"/>
      </div>
    </div>
  </div>
  <CostApplyDialog v-if="costApplyDialogParams.visible" v-model:visible="costApplyDialogParams.visible" :edu-item="costApplyDialogParams.eduItem" :exam-item="costApplyDialogParams.examItem" :employment-item="costApplyDialogParams.employmentItem" :target="target" modal/>
  <CostApplyDetailDialog v-if="costApplyDetailDialogParams.visible" v-model:visible="costApplyDetailDialogParams.visible" :edu-item="costApplyDetailDialogParams.eduItem" :exam-item="costApplyDetailDialogParams.examItem" :employment-item="costApplyDetailDialogParams.employmentItem" :target="target" @goModify="openCostApplyDialog" @refresh="refresh" modal/>
</template>
<script setup lang="ts">
import type { IdiSupportDevDescOutVo } from '~/api-client';
import dayjs from 'dayjs';
import type { CostApplyDialogOptions, EduCostApplyOptions, ExamCostApplyOptions } from '~/domains/skill/type';
import { useSkillStore } from '~/domains/skill/store';
import Utility from '~/lib/Utility';
const store = useSkillStore();

const props = defineProps<{
  item: IdiSupportDevDescOutVo,
}>();

const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
}>();

const refresh = async (isRefresh = true) => {
  emits('refresh', isRefresh);
}

const target = ref('');

const idiEduCostParams = reactive<EduCostApplyOptions>({
  sqc: 0,
  uploadFileList: [],
});

const idiExamCostParams = reactive<ExamCostApplyOptions>({
  sqc: 0,
  uploadFileList: [],
});

const idiEmploymentCostParams = reactive<EduCostApplyOptions>({
  sqc: 0,
  uploadFileList: [],
});

const costApplyDialogParams = reactive<CostApplyDialogOptions>({
  visible: false,
  eduItem: idiEduCostParams,
  examItem: idiExamCostParams,
  employmentItem: idiEmploymentCostParams,
});

const costApplyDetailDialogParams = reactive<CostApplyDialogOptions>({
  visible: false,
  eduItem: idiEduCostParams,
  examItem: idiExamCostParams,
  employmentItem: idiEmploymentCostParams,
});

const resetParams = () => {
  idiEduCostParams.sqc = 0;
  idiEduCostParams.edctMthdDsncVl = '';
  idiEduCostParams.onslDvlpSprnAplcDcd = '';
  idiEduCostParams.edinNm = '';
  idiEduCostParams.edctProcNm = '';
  idiEduCostParams.lcteSttgYmd = '';
  idiEduCostParams.lcteFnshYmd = '';
  idiEduCostParams.spmyAplcYmd = '';
  idiEduCostParams.trngAtlcAmt = 0;
  idiEduCostParams.cardApn = '';
  idiEduCostParams.encpCardNo = '';
  idiEduCostParams.encpCardNo1 = '';
  idiEduCostParams.encpCardNo2 = '';
  idiEduCostParams.encpCardNo3 = '';
  idiEduCostParams.encpCardNo4 = '';
  idiEduCostParams.trngAplcScd = '';
  idiEduCostParams.dbSecretKey = '';
  idiEduCostParams.uploadFileList = [];
  idiEduCostParams.atchList = [];
  idiEduCostParams.attachFileList = [];
  idiEduCostParams.fileDeleteInVoList = [];

  idiExamCostParams.sqc = 0; // 순서
  idiExamCostParams.qlcrDsncVl = ''; // 자격증구분값
  idiExamCostParams.qlacYmd = ''; // 자격취득년월일
  idiExamCostParams.onslDvlpSprnAplcDcd = ''; // 자기개발지원신청구분코드
  idiExamCostParams.lrngSptgDcd = ''; // 학습지원대상구분코드
  idiExamCostParams.qlcrNm = ''; // 자격증명
  idiExamCostParams.crdAthzYmd = ''; // 신용카드승인년월일
  idiExamCostParams.encpCardNo = ''; // 암호화카드번호
  idiExamCostParams.crdApn = ''; // 신용카드승인번호
  idiExamCostParams.crahAmt = 0; // 카드승인금액
  idiExamCostParams.encpCardNo1 = ''; // 암호화카드번호1
  idiExamCostParams.encpCardNo2 = ''; // 암호화카드번호2
  idiExamCostParams.encpCardNo3 = ''; // 암호화카드번호3
  idiExamCostParams.encpCardNo4 = ''; // 암호화카드번호4
  idiExamCostParams.examAaeSprnScd = ''; // 승인여부
  idiExamCostParams.dbSecretKey = ''; // DB 암호화 키
  idiExamCostParams.fileDeleteInVoList = []; // 첨부파일 삭제 리스트
  idiExamCostParams.attachFileList = []; // 첨부파일 리스트
  idiExamCostParams.uploadFileList = []; // 업로드 파일 리스트

  idiEmploymentCostParams.sqc = 0;
  idiEmploymentCostParams.edctMthdDsncVl = '';
  idiEmploymentCostParams.onslDvlpSprnAplcDcd = '';
  idiEmploymentCostParams.edinNm = '';
  idiEmploymentCostParams.edctProcNm = '';
  idiEmploymentCostParams.lcteSttgYmd = '';
  idiEmploymentCostParams.lcteFnshYmd = '';
  idiEmploymentCostParams.spmyAplcYmd = '';
  idiEmploymentCostParams.trngAtlcAmt = 0;
  idiEmploymentCostParams.cardApn = '';
  idiEmploymentCostParams.encpCardNo = '';
  idiEmploymentCostParams.encpCardNo1 = '';
  idiEmploymentCostParams.encpCardNo2 = '';
  idiEmploymentCostParams.encpCardNo3 = '';
  idiEmploymentCostParams.encpCardNo4 = '';
  idiEmploymentCostParams.trngAplcScd = '';
  idiEmploymentCostParams.dbSecretKey = '';
  idiEmploymentCostParams.uploadFileList = [];
  idiEmploymentCostParams.atchList = [];
  idiEmploymentCostParams.attachFileList = [];
  idiEmploymentCostParams.fileDeleteInVoList = [];
}

const editItem = async (applyType: string, sqc: number) => {
  if('COURSE' === applyType){
    resetParams();
    target.value = 'edu';
    await store.fetchEduCostApplyDetail({sqc : sqc});
    if(store.eduCostApplyDetailData){
      Object.assign(idiEduCostParams, store.eduCostApplyDetailData);
      idiEduCostParams.encpCardNo = idiEduCostParams.encpCardNo1+idiEduCostParams.encpCardNo2+idiEduCostParams.encpCardNo3+idiEduCostParams.encpCardNo4;
      costApplyDialogParams.visible= true;
      costApplyDialogParams.eduItem= idiEduCostParams;
      costApplyDialogParams.examItem= idiExamCostParams;
      costApplyDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('EXAM' === applyType){
    resetParams();
    target.value = 'exam';
    await store.fetchExamCostApplyDetail({sqc : sqc});
    if(store.examCostApplyDetailData){
      Object.assign(idiExamCostParams, store.examCostApplyDetailData);
      idiExamCostParams.encpCardNo = idiExamCostParams.encpCardNo1+idiExamCostParams.encpCardNo2+idiExamCostParams.encpCardNo3+idiExamCostParams.encpCardNo4;
      costApplyDialogParams.visible= true;
      costApplyDialogParams.eduItem= idiEduCostParams;
      costApplyDialogParams.examItem= idiExamCostParams;
      costApplyDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('EMPLOYMENT' === applyType){
    resetParams();
    target.value = 'employment';
    await store.fetchEmploymentCostApplyDetail({sqc : sqc});
    if(store.employmentCostApplyDetailData){
      Object.assign(idiEmploymentCostParams, store.employmentCostApplyDetailData);
      idiEmploymentCostParams.encpCardNo = idiEmploymentCostParams.encpCardNo1+idiEmploymentCostParams.encpCardNo2+idiEmploymentCostParams.encpCardNo3+idiEmploymentCostParams.encpCardNo4;
      costApplyDialogParams.visible= true;
      costApplyDialogParams.eduItem= idiEduCostParams;
      costApplyDialogParams.examItem= idiExamCostParams;
      costApplyDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('LANGUAGE' === applyType){

  }else if('EXPENSE' === applyType){

  }else if('SCHOLARSHIP' === applyType){

  }
}

const deleteItem = async (applyType: string, sqc: number) => {
  if('COURSE' === applyType){
    const isYesOrNo = await Utility.confirm("해당 신청건을 삭제하시겠습니까?");
    if (!isYesOrNo) return;
    idiEduCostParams.sqc = sqc;
    idiEduCostParams.spmyAplcDcd = '10';
    const result = await store.delIdiEduCost(idiEduCostParams);
    if(result.success) {
      Utility.alert('삭제되었습니다');
      await refresh();
    }
  }else if('EXAM' === applyType){
    const isYesOrNo = await Utility.confirm("해당 신청건을 삭제하시겠습니까?");
    if (!isYesOrNo) return;
    idiEduCostParams.sqc = sqc;
    const result = await store.delIdiExamCost(idiEduCostParams);
    if(result.success) {
      Utility.alert('삭제되었습니다');
      await refresh();
    }
  }else if('EMPLOYMENT' === applyType){
    const isYesOrNo = await Utility.confirm("해당 신청건을 삭제하시겠습니까?");
    if (!isYesOrNo) return;
    idiEduCostParams.sqc = sqc;
    idiEduCostParams.spmyAplcDcd = '30';
    const result = await store.delIdiEduCost(idiEduCostParams);
    if(result.success) {
      Utility.alert('삭제되었습니다');
      await refresh();
    }
  }else if('LANGUAGE' === applyType){

  }else if('EXPENSE' === applyType){

  }else if('SCHOLARSHIP' === applyType){

  }
}

const openDetailItem = async (applyType: string, sqc: number) => {
  if('COURSE' === applyType){
    resetParams();
    target.value = 'edu';
    await store.fetchEduCostApplyDetail({sqc : sqc});
    if(store.eduCostApplyDetailData){
      Object.assign(idiEduCostParams, store.eduCostApplyDetailData);
      idiEduCostParams.encpCardNo = idiEduCostParams.encpCardNo1+'********'+idiEduCostParams.encpCardNo4;
      costApplyDetailDialogParams.visible= true;
      costApplyDetailDialogParams.eduItem= idiEduCostParams;
      costApplyDetailDialogParams.examItem= idiExamCostParams;
      costApplyDetailDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('EXAM' === applyType){
    resetParams();
    target.value = 'exam';
    await store.fetchExamCostApplyDetail({sqc : sqc});
    if(store.examCostApplyDetailData){
      Object.assign(idiExamCostParams, store.examCostApplyDetailData);
      idiExamCostParams.encpCardNo = idiExamCostParams.encpCardNo1+'********'+idiExamCostParams.encpCardNo4;
      costApplyDetailDialogParams.visible= true;
      costApplyDetailDialogParams.eduItem= idiEduCostParams;
      costApplyDetailDialogParams.examItem= idiExamCostParams;
      costApplyDetailDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('EMPLOYMENT' === applyType){
    resetParams();
    target.value = 'employment';
    await store.fetchEmploymentCostApplyDetail({sqc : sqc});
    if(store.employmentCostApplyDetailData){
      Object.assign(idiEmploymentCostParams, store.employmentCostApplyDetailData);
      idiEmploymentCostParams.encpCardNo = idiEmploymentCostParams.encpCardNo1+'********'+idiEmploymentCostParams.encpCardNo4;
      costApplyDetailDialogParams.visible= true;
      costApplyDetailDialogParams.eduItem= idiEduCostParams;
      costApplyDetailDialogParams.examItem= idiExamCostParams;
      costApplyDetailDialogParams.employmentItem= idiEmploymentCostParams;
    }
  }else if('LANGUAGE' === applyType){

  }else if('EXPENSE' === applyType){

  }else if('SCHOLARSHIP' === applyType){

  }
}

const openCostApplyDialog = async (params: any, target: string) => {
  let applyType;
  if(target == 'edu'){
    applyType = 'COURSE';
  }else if (target == 'exam'){
    applyType = 'EXAM';
  }else if (target == 'employment'){
    applyType = 'EMPLOYMENT';
  }
  await editItem(applyType, params.sqc);
}

</script>
<style scoped>

</style>
