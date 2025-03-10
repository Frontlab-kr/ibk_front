<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-survey">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div class="ibk-dialog-survey__title">설문</div>
    </template>
    <div class="ibk-test">
      <div class="ibk-test-content">
        <div class="ibk-test-head">
          <div class="ibk-test-head__title">{{ props.item.qstrNm }}</div>
          <div class="ibk-test-head__date"><span>{{ props.item.qstrSttgTs.slice(0,16) }} - {{ props.item.qstrFnshTs.slice(0,16) }}</span></div>
          <div class="ibk-test-head-info">
            <div class="ibk-test-head-info__title">설문안내</div>
            <div class="ibk-test-head-info__text" v-html="props.item.qstrCon"></div>
          </div>
        </div>
        <div class="ibk-test-list">
          <template v-for="(qItem, qIdx) in previewQuestions" :key="qIdx">
            <template v-if="qItem.rankNo === 1">
              <template v-if="qItem.qsitKcd === '03'">
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p> <strong>{{ qItem.qsitNo }}.</strong> {{ qItem.qsitTtlNm }} </p>
                  </div>
                  <div class="ibk-test-list-item__input">
                    <Textarea v-model="surveyResponses[qItem.qsitNo]" :autoResize="true" rows="3"
                        placeholder="답변을 입력해주세요." />
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p><strong>{{ qItem.qsitNo }}.</strong> {{ qItem.qsitTtlNm }}</p>
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <template v-for="(aItem, aIdx) in previewAnswers" :key="aIdx">
                        <li v-if="qItem.qsitNo === aItem.qsitNo">
                          <RadioButton v-model="surveyResponses[aItem.qsitNo]"
                                       :inputId="`question_${qItem.qsitNo}_option_${aItem.lkngNo}`"
                                       :value="aItem.lkngNo.toString()"/>
                          <label :for="`question_${qItem.qsitNo}_option_${aItem.lkngNo}`">{{ aItem.lkngCon }}</label>
                        </li>
                      </template>
                    </ol>
                  </div>
                </div>
              </template>
            </template>
          </template>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-review-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="cancelSurvey" />
        <Button :label="saveText" severity="primary" size="large" class="w-full"  @click="submitSurvey" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useAuthStore } from '~/domains/auth';
import {
  type CommunitySurveyPreviewOptions, type CommunitySurveyPreviewSearchOptions,
  useCommunityStore,
} from '~/domains/community';
import type { CommonSurveySubmitInVo } from '~/api-client';
import Utility from '~/lib/Utility';
const authStore = useAuthStore();
const store = useCommunityStore();

const { visible } = defineModels<{
  visible: boolean
}>();

const props = withDefaults(
	defineProps<{
    item: CommunitySurveyPreviewOptions | null,
	}>(),
	{
    item: null,
  }
);

const surveyResponses = ref<Record<number, string | string[]>>({});

const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
}>();

const previewQuestions = ref<any>();
const previewAnswers = ref<any>();

const tempName = ref('');
const nameList = ref([]);
const saveText = ref<String>('제출');
const isSaved = ref<boolean>(false);
const closeDialog = () => {
  if(!isSaved.value) {
    nameList.value = [];
    tempName.value = '';
    props.item.ckinNmlsNm = '';
    props.item.emrnTpn = '';
    props.item.vhclNo = '';
    props.item.rmrkCon = '';
  }
  visible.value = false;
}

const searchParam = reactive<CommunitySurveyPreviewSearchOptions>({
  comQstrId: 0
});

const getCommonSurveyPreview = async () => {
  await store.getCommonSurveyPreview(searchParam)
  previewQuestions.value = store.communitySurveyPreviewData.data.response;
  previewAnswers.value = store.communitySurveyPreviewData.data.response;
}

const getCommonSurveyAnswer = async () => {
  await store.getCommonSurveyAnswer(searchParam)
  for (const [qsitNo, response] of Object.entries(store.communitySurveyAnswerData.data.response)) {
      surveyResponses.value[parseInt(qsitNo)+1] = typeof response.rplyCon === 'string' && response.rplyCon.includes(',')
          ? response.rplyCon.split(',')
          : response.rplyCon;
  }
}

const cancelSurvey = async () => {
  const isYesOrNo = await $confirm({ title: '설문 취소 확인', message: `설문 ${saveText.value}을 취소하시겠습니까?` });
  if (isYesOrNo) {
    Utility.notify({
      message: '설문 작성이 취소되었습니다.',
      variant: 'info',
    });
    closeDialog();
  }
};

const submitSurvey = async () => {
  const isYesOrNo = await $confirm({ title: '설문 제출 확인', message: `설문을 ${saveText.value}하시겠습니까?` });
  if (isYesOrNo) {
    try {
      const surveySubmissions: CommonSurveySubmitInVo[] = [];

      for (const [qsitNo, response] of Object.entries(surveyResponses.value)) {
        const submission: CommonSurveySubmitInVo = {
          comQstrId: props.item.comQstrId,
          qstrNo: props.item.qstrNo,
          qsitNo: parseInt(qsitNo),
          useYn: "Y",
          rplyCon: Array.isArray(response) ? response.join(',') : response, // multi check 일경우
        };
        surveySubmissions.push(submission);
      }
      if (surveySubmissions.length == 0) {
        await $alert('작성한 설문이 없습니다.</br>설문을 작성후 제출 해 주세요.');
        return;
      }
      await store.submitCommonSurvey(surveySubmissions);

      Utility.notify({
        message: `설문이 ${saveText.value}되었습니다.`,
        variant: 'success',
      });
      closeDialog();
    } catch (error) {
      Utility.notify({
        message: '설문 제출 중 오류가 발생했습니다.',
        variant: 'error',
      });
    }
  }
};

onMounted(async () => {
  if(props.item.answerCount > 0){
    saveText.value = '수정';
  }
  searchParam.comQstrId = props.item.comQstrId;
  searchParam.qstrNo = props.item.qstrNo;
  await getCommonSurveyPreview();
  await getCommonSurveyAnswer();
});

</script>
