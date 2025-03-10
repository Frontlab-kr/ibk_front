<template>
  <div class="ibk-test">
    <div class="ibk-inner">
      <Card>
        
        <template #content>
          <div v-if="ManagerLearning.isLessonCompleted(learningStore.currentLesson)">
            <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;"> 
              이미 설문을 제출하였습니다.
            </div>
          </div>
          <div v-else class="ibk-test-content">
            <div class="ibk-test-head">
              <div class="ibk-test-head__title"  v-if="false">{{ learningStore.surveyDetail?.qstrNm }}</div>
              
              <div class="ibk-test-head__date" v-if="false">
                <span >설문기간: {{ formatDateRange(learningStore.surveyDetail?.sbmsSttgTs,
                  learningStore.surveyDetail?.sbmsFnshTs) }}</span>
              </div>
              <div class="ibk-test-head-info">
                <div class="ibk-test-head-info__title">설문 안내</div>
                <div class="ibk-test-head-info__text" v-html="learningStore.surveyDetail?.qstrCon"></div>
              </div>
            </div>
            <div class="ibk-test-list">
              <log v-model="learningStore.surveyDetail" />
              <div v-for="question in learningStore.surveyDetail?.surveyQuestion" :key="question.qsitNo"
                class="ibk-test-list-item">

                <div class="ibk-test-list-item__title">

                  <p><strong>{{ question.qsitNo }}.</strong> {{ question.qsitTtlNm }}</p>
                </div>
                <div class="ibk-test-list-item__answer">

                  <template v-if="question.qsitKcd === '03'">
                    <div class="ibk-test-list-item__input">
                      <Textarea v-model="surveyResponses[question.qsitNo]" :autoResize="true" rows="3"
                        placeholder="답변을 입력해주세요." />
                    </div>
                  </template>
                  <template v-else>
                    <ol>
                      <li v-for="option in question.surveyQuestionLkng" :key="option.lkngNo" class="p-field-checkbox">

                        <RadioButton v-model="surveyResponses[question.qsitNo]"
                          :inputId="`question_${question.qsitNo}_option_${option.lkngNo}`"
                          :value="option.lkngNo.toString()" />
                        <label :for="`question_${question.qsitNo}_option_${option.lkngNo}`">{{ option.lkngCon }}</label>
                      </li>
                    </ol>
                  </template>

                </div>
              </div>
            </div>
            <div class="ibk-test-button">
              <div class="ibk-test-button__button">
                <Button v-if="false" label="취소" severity="secondary" outlined size="large" @click="cancelSurvey" />
                <Button label="제출" severity="primary" size="large" @click="submitSurvey" />
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLearningStore } from '../store';
import Utility from '../../../lib/Utility';
import type { StudyRoomSurveySubmitInVo, StudyRoomSurveyOutVo, StudyRoomSurveyQuestionLkngOutVo } from '../../../api-client/api';
import ManagerLearning from '../../../lib/ManagerLearning';

const learningStore = useLearningStore();
const compLearning = useCompLearning();
const surveyResponses = ref<Record<number, string | string[]>>({});

onMounted(async () => {
  if (!learningStore.surveyDetail) {
    await learningStore.getSurveyDetail({
      qstrNo: learningStore.currentLesson?.connId
    });
  }
});



const cancelSurvey = async () => {
  const isYesOrNo = await $confirm({ title: '설문 취소 확인', message: '설문 작성을 취소하시겠습니까?' });
  if (isYesOrNo) {
    Utility.notify({
      message: '설문 작성이 취소되었습니다.',
      variant: 'info',
    });
  }
};

const submitSurvey = async () => {
  const isYesOrNo = await $confirm({ title: '설문 제출 확인', message: '설문을 제출하시겠습니까?' });
  if (isYesOrNo) {
    try {
      const surveySubmissions: StudyRoomSurveySubmitInVo[] = [];

      for (const [qsitNo, response] of Object.entries(surveyResponses.value)) {
        const submission: StudyRoomSurveySubmitInVo = {
          dutyEdctCd: learningStore.currentLesson?.dutyEdctCd,
          edctDsprNo: learningStore.currentLesson?.edctDsprNo,
          edctDsprChpaNo: learningStore.currentLesson?.edctDsprChpaNo,
          edctDsprLssoNo: learningStore.currentLesson?.edctDsprLssoNo,

          qstrNo: learningStore.surveyDetail?.qstrNo as any,
          qsitNo: parseInt(qsitNo),
          useYn: "Y",
          ansrCon: Array.isArray(response) ? response.join(',') : response, // multi check 일경우
          currentAcmlPictLen : 100

        };
        surveySubmissions.push(submission);
      }
      if (surveySubmissions.length == 0) {
        await $alert('작성한 설문이 없습니다.</br>설문을 작성후 제출 해 주세요.');
        return;
      }
      await learningStore.submitSurvey(surveySubmissions);
      ManagerLearning.getIns().makeLesson100Percentage();
      
      Utility.notify({
        message: '설문이 제출되었습니다.',
        variant: 'success',
      });

      // compLearning.moveToNextLesson();

    } catch (error) {
      Utility.notify({
        message: '설문 제출 중 오류가 발생했습니다.',
        variant: 'error',
      });
    }
  }else{
    learningStore.visibleMenu = true;
  }
};
onMounted(() => {

    compLearning.onLessonMounted();
})
</script>
