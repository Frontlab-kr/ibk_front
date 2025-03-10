<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">지원금 신청</div>
    </template>
    <Tabs :value="tab">
      <TabList>
        <Tab value="edu" @click="changeTab('edu')">학원 수강료</Tab>
        <Tab value="exam" @click="changeTab('exam')">시험 응시료</Tab>
        <Tab value="employment" @click="changeTab('employment')">재취업 · 창업</Tab>
      </TabList>
      <TabPanels>
        <CostEduTab :item="props.eduItem"/>
        <CostExamTab :item="props.examItem"/>
        <CostEmploymentTab :item="props.employmentItem"/>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button label="임시저장" severity="secondary" size="large" outlined class="w-full" @click="saveCostApply('10')" />
        <Button v-if="tab == 'edu'" :label="eduSaveText" severity="primary" size="large" class="w-full" @click="saveCostApply('20')" />
        <Button v-if="tab == 'exam'" :label="examSaveText" severity="primary" size="large" class="w-full" @click="saveCostApply('20')" />
        <Button v-if="tab == 'employment'" :label="employmentSaveText" severity="primary" size="large" class="w-full" @click="saveCostApply('20')" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import Utility from '../../../lib/Utility';
import { useSkillStore } from '~/domains/skill/store';
import { ref } from 'vue';
import CostEduTab from '~/domains/skill/components/CostEduTab.vue';
import CostExamTab from '~/domains/skill/components/CostExamTab.vue';
import CostEmploymentTab from '~/domains/skill/components/CostEmploymentTab.vue';
import type { EduCostApplyOptions, ExamCostApplyOptions } from '~/domains/skill/type';
import SoftCampUtil from '~/lib/SoftCampUtil';
import type { CommonAttachFilehInVo } from '~/api-client';
const store = useSkillStore();
const tab = ref('edu');

const changeTab = (target:string) => {
  tab.value = target;
}

const { visible } = defineModels<{
  visible: boolean
}>();

const props = withDefaults(
	defineProps<{
    eduItem: EduCostApplyOptions | null,
    examItem: ExamCostApplyOptions | null,
    employmentItem: EduCostApplyOptions | null,
    target: ''
	}>(),
	{
    eduItem: null,
    examItem: null,
    employmentItem: null,
    target: ''
  }
);

const eduSaveText = ref<String>('신청');
const isEduSaved = ref<boolean>(false);

const examSaveText = ref<String>('신청');
const isExamSaved = ref<boolean>(false);

const employmentSaveText = ref<String>('신청');
const isEmploymentSaved = ref<boolean>(false);

const closeDialog = () => {
  reset();
  visible.value = false;
}

const reset = () => {
  props.eduItem.sqc = 0;
  props.eduItem.edctMthdDsncVl = '';
  props.eduItem.onslDvlpSprnAplcDcd = '';
  props.eduItem.edinNm = '';
  props.eduItem.edctProcNm = '';
  props.eduItem.lcteSttgYmd = '';
  props.eduItem.lcteFnshYmd = '';
  props.eduItem.trngAtlcAmt = 0;
  props.eduItem.cardApn = '';
  props.eduItem.encpCardNo = '';
  props.eduItem.encpCardNo1 = '';
  props.eduItem.encpCardNo2 = '';
  props.eduItem.encpCardNo3 = '';
  props.eduItem.encpCardNo4 = '';
  props.eduItem.trngAplcScd = '';
  props.eduItem.dbSecretKey = '';
  props.eduItem.uploadFileList = [];
  props.eduItem.atchList = [];
  props.eduItem.attachFileList = [];
  props.eduItem.fileDeleteInVoList = [];

  props.examItem.sqc = 0; // 순서
  props.examItem.qlcrDsncVl = ''; // 자격증구분값
  props.examItem.qlacYmd = ''; // 자격취득년월일
  props.examItem.onslDvlpSprnAplcDcd = ''; // 자기개발지원신청구분코드
  props.examItem.lrngSptgDcd = ''; // 학습지원대상구분코드
  props.examItem.qlcrNm = ''; // 자격증명
  props.examItem.crdAthzYmd = ''; // 신용카드승인년월일
  props.examItem.encpCardNo = ''; // 암호화카드번호
  props.examItem.crdApn = ''; // 신용카드승인번호
  props.examItem.crahAmt = 0; // 카드승인금액
  props.examItem.encpCardNo1 = ''; // 암호화카드번호1
  props.examItem.encpCardNo2 = ''; // 암호화카드번호2
  props.examItem.encpCardNo3 = ''; // 암호화카드번호3
  props.examItem.encpCardNo4 = ''; // 암호화카드번호4
  props.examItem.examAaeSprnScd = ''; // 승인여부
  props.examItem.dbSecretKey = ''; // DB 암호화 키
  props.examItem.fileDeleteInVoList = []; // 첨부파일 삭제 리스트
  props.examItem.attachFileList = []; // 첨부파일 리스트
  props.examItem.uploadFileList = []; // 업로드 파일 리스트

  props.employmentItem.sqc = 0;
  props.employmentItem.edctMthdDsncVl = '';
  props.employmentItem.onslDvlpSprnAplcDcd = '';
  props.employmentItem.edinNm = '';
  props.employmentItem.edctProcNm = '';
  props.employmentItem.lcteSttgYmd = '';
  props.employmentItem.lcteFnshYmd = '';
  props.employmentItem.trngAtlcAmt = 0;
  props.employmentItem.cardApn = '';
  props.employmentItem.encpCardNo = '';
  props.employmentItem.encpCardNo1 = '';
  props.employmentItem.encpCardNo2 = '';
  props.employmentItem.encpCardNo3 = '';
  props.employmentItem.encpCardNo4 = '';
  props.employmentItem.trngAplcScd = '';
  props.employmentItem.dbSecretKey = '';
  props.employmentItem.uploadFileList = [];
  props.employmentItem.atchList = [];
  props.employmentItem.attachFileList = [];
  props.employmentItem.fileDeleteInVoList = [];
}

const eduValidation = (trngAplcScd: string) => {
  let rFlag = true;
  if('10' !== trngAplcScd){
    if (props.eduItem.edctMthdDsncVl == null || props.eduItem.edctMthdDsncVl === '') {
      Utility.alert('수강방식을 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.eduItem.onslDvlpSprnAplcDcd == null || props.eduItem.onslDvlpSprnAplcDcd === '') {
      Utility.alert('수강분야를 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.eduItem.lcteSttgYmd == null || props.eduItem.lcteSttgYmd === '' || props.eduItem.lcteFnshYmd == null || props.eduItem.lcteFnshYmd === '') {
      Utility.alert('수강기간을 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.eduItem.encpCardNo == null || props.eduItem.encpCardNo === '') {
      Utility.alert('카드번호를 입력해주세요.');
      rFlag = false;
      return false;
    }

    if (props.eduItem.encpCardNo.length != 16) {
      Utility.alert('카드번호 16자리를 입력해주세요.');
      rFlag = false;
      return false;
    }
    return rFlag;
  }else{
    eduSaveText.value = '임시저장';
    return true;
  }
}

const examValidation = (trngAplcScd: string) => {
  let rFlag = true;
  if (props.examItem.qlcrDsncVl == null || props.examItem.qlcrDsncVl === '') {
    Utility.alert('취득자격증을 선택해주세요.');
    rFlag = false;
    return false;
  }

  if('10' !== trngAplcScd){
    if (props.examItem.crdAthzYmd == null || props.examItem.crdAthzYmd === '') {
      Utility.alert('카드승인일자를 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.examItem.crahAmt == null || props.examItem.crahAmt === '') {
      Utility.alert('응시료를 입력해주세요.');
      rFlag = false;
      return false;
    }

    if (props.examItem.encpCardNo == null || props.examItem.encpCardNo === '') {
      Utility.alert('카드번호를 입력해주세요.');
      rFlag = false;
      return false;
    }

    if (props.examItem.encpCardNo.length != 16) {
      Utility.alert('카드번호 16자리를 입력해주세요.');
      rFlag = false;
      return false;
    }

    if (props.examItem.crdApn == null || props.examItem.crdApn === '') {
      Utility.alert('승인번호를 입력해주세요.');
      rFlag = false;
      return false;
    }

    return rFlag;
  }else{
    examSaveText.value = '임시저장';
    return true;
  }
}

const employmentValidation = (trngAplcScd: string) => {
  let rFlag = true;
  if('10' !== trngAplcScd){
    if (props.employmentItem.edctMthdDsncVl == null || props.employmentItem.edctMthdDsncVl === '') {
      Utility.alert('수강방식을 선택해주세요.');
      rFlag = false;
      return false;
    }
    if (props.employmentItem.onslDvlpSprnAplcDcd == null || props.employmentItem.onslDvlpSprnAplcDcd === '') {
      Utility.alert('수강분야를 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.employmentItem.lcteSttgYmd == null || props.employmentItem.lcteSttgYmd === '' || props.employmentItem.lcteFnshYmd == null || props.employmentItem.lcteFnshYmd === '') {
      Utility.alert('수강기간을 선택해주세요.');
      rFlag = false;
      return false;
    }

    if (props.employmentItem.encpCardNo == null || props.employmentItem.encpCardNo === '') {
      Utility.alert('카드번호를 입력해주세요.');
      rFlag = false;
      return false;
    }

    if (props.employmentItem.encpCardNo.length != 16) {
      Utility.alert('카드번호 16자리를 입력해주세요.');
      rFlag = false;
      return false;
    }
    return rFlag;
  }else{
    eduSaveText.value = '임시저장';
    return true;
  }
}

const saveCheck = async () => {
  let res = await $request().rgsCheckIdiExamCost(props.examItem);
  if(res.data.response != null){
    return false;
  }else{
    return true;
  }
}

const saveCostApply = async (trngAplcScd: string) => {
  let result;

  if(tab.value == 'edu'){
    await $isLoading(true);
    try {
      if (props.eduItem.uploadFileList.length > 0) {
        // uploadFileList에 있는 파일을 서버에 업로드하고 atchList에 추가
        const atchList = await Promise.all(
          props.eduItem.uploadFileList.map(async (file) => {
            // SoftCampUtil.uploadFile을 호출하여 파일을 업로드하고 jobID를 받아옴
            const jobID = await SoftCampUtil.uploadFile(file, '/edu/cost/callback');

            // 업로드된 파일 정보를 CommonAttachFilehInVo 형식으로 반환
            return {
              orcpFileNm: file.name,
              jbdsId: jobID, // 서버로부터 받은 jobID를 사용
              atchSqn: props.eduItem.uploadFileList.indexOf(file) + 1, // 순서대로 부여
            } as CommonAttachFilehInVo;
          })
        );

        // 업로드된 파일 리스트를 params.atchList에 추가
        props.eduItem.atchList = atchList;
      }

      props.eduItem.trngAplcScd = trngAplcScd;

      if(eduValidation(trngAplcScd)){
        props.eduItem.encpCardNo1 = props.eduItem.encpCardNo.substring(0, 4);
        props.eduItem.encpCardNo2 = props.eduItem.encpCardNo.substring(4, 8);
        props.eduItem.encpCardNo3 = props.eduItem.encpCardNo.substring(8, 12);
        props.eduItem.encpCardNo4 = props.eduItem.encpCardNo.substring(12, 16);
        if(isEduSaved.value){
          result = await store.modifyIdiEduCost(props.eduItem);
        }else{
          result = await store.saveIdiEduCost(props.eduItem);
        }

        if (result.success) {
          Utility.alert(`지원금 신청이 ${eduSaveText.value}되었습니다`);
          closeDialog();
        } else {
          Utility.alert(`지원금 신청중 오류가 발생하였습니다.`);
        }
      }
    } catch (e){
      await $isLoading(false);
      Utility.alert(`지원금 신청중 오류가 발생하였습니다.`);
    }finally {
      await $isLoading(false);
    }
  }else if(tab.value == 'exam'){
    await $isLoading(true);
    try {
      if (props.examItem.uploadFileList.length > 0) {
        // uploadFileList에 있는 파일을 서버에 업로드하고 atchList에 추가
        const atchList = await Promise.all(
          props.examItem.uploadFileList.map(async (file) => {
            // SoftCampUtil.uploadFile을 호출하여 파일을 업로드하고 jobID를 받아옴
            const jobID = await SoftCampUtil.uploadFile(file, '/exam/cost/callback');

            // 업로드된 파일 정보를 CommonAttachFilehInVo 형식으로 반환
            return {
              orcpFileNm: file.name,
              jbdsId: jobID, // 서버로부터 받은 jobID를 사용
              atchSqn: props.examItem.uploadFileList.indexOf(file) + 1, // 순서대로 부여
            } as CommonAttachFilehInVo;
          })
        );

        // 업로드된 파일 리스트를 params.atchList에 추가
        props.examItem.atchList = atchList;
      }

      props.examItem.examAaeSprnScd = trngAplcScd;

      if(examValidation(trngAplcScd)){
        let saveCheckFlag = true;
        props.examItem.encpCardNo1 = props.examItem.encpCardNo.substring(0, 4);
        props.examItem.encpCardNo2 = props.examItem.encpCardNo.substring(4, 8);
        props.examItem.encpCardNo3 = props.examItem.encpCardNo.substring(8, 12);
        props.examItem.encpCardNo4 = props.examItem.encpCardNo.substring(12, 16);
        if(isExamSaved.value){
          result = await store.modifyIdiExamCost(props.examItem);
        }else{
          saveCheckFlag = await saveCheck();
          result = await store.saveIdiExamCost(props.examItem);
        }

        if(saveCheckFlag){
          if (result.success) {
            Utility.alert(`시험 응시료 신청이 ${examSaveText.value}되었습니다`);
            closeDialog();
          } else {
            Utility.alert(`시험 응시료 신청중 오류가 발생하였습니다.`);
          }
        }else{
          Utility.alert(`이미 지원금을 신청한 자격증입니다.`);
        }
      }
    } catch (e){
      await $isLoading(false);
      Utility.alert(`시험 응시료 신청중 오류가 발생하였습니다.`);
    }finally {
      await $isLoading(false);
    }
  }else if(tab.value == 'employment'){
    await $isLoading(true);
    try {
      if (props.employmentItem.uploadFileList.length > 0) {
        // uploadFileList에 있는 파일을 서버에 업로드하고 atchList에 추가
        const atchList = await Promise.all(
          props.employmentItem.uploadFileList.map(async (file) => {
            // SoftCampUtil.uploadFile을 호출하여 파일을 업로드하고 jobID를 받아옴
            const jobID = await SoftCampUtil.uploadFile(file, '/employment/cost/callback');

            // 업로드된 파일 정보를 CommonAttachFilehInVo 형식으로 반환
            return {
              orcpFileNm: file.name,
              jbdsId: jobID, // 서버로부터 받은 jobID를 사용
              atchSqn: props.employmentItem.uploadFileList.indexOf(file) + 1, // 순서대로 부여
            } as CommonAttachFilehInVo;
          })
        );

        // 업로드된 파일 리스트를 params.atchList에 추가
        props.employmentItem.atchList = atchList;
      }

      props.employmentItem.trngAplcScd = trngAplcScd;

      if(employmentValidation(trngAplcScd)){
        props.employmentItem.encpCardNo1 = props.employmentItem.encpCardNo.substring(0, 4);
        props.employmentItem.encpCardNo2 = props.employmentItem.encpCardNo.substring(4, 8);
        props.employmentItem.encpCardNo3 = props.employmentItem.encpCardNo.substring(8, 12);
        props.employmentItem.encpCardNo4 = props.employmentItem.encpCardNo.substring(12, 16);
        if(isEmploymentSaved.value){
          result = await store.modifyIdiEduCost(props.employmentItem);
        }else{
          result = await store.saveIdiEduCost(props.employmentItem);
        }

        if (result.success) {
          Utility.alert(`재취업 · 창업 신청이 ${employmentSaveText.value}되었습니다`);
          closeDialog();
        } else {
          Utility.alert(`재취업 · 창업 신청중 오류가 발생하였습니다.`);
        }
      }
    } catch (e){
      await $isLoading(false);
      Utility.alert(`재취업 · 창업 신청중 오류가 발생하였습니다.`);
    }finally {
      await $isLoading(false);
    }
  }
}

onBeforeMount(async () => {
  tab.value = 'edu';
  if(props.eduItem.sqc > 0){
    eduSaveText.value = '수정';
    isEduSaved.value = true;
  }

  if(props.examItem.sqc > 0){
    examSaveText.value = '수정';
    isExamSaved.value = true;
  }

  if(props.employmentItem.sqc > 0){
    employmentSaveText.value = '수정';
    isEmploymentSaved.value = true;
  }

  if(props.target){
    tab.value = props.target;
  }
})

</script>
