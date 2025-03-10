<template>

  <div class="ibk-test">

    <div class="ibk-test-time-sticky" v-if="remainingSeconds">
      <div class="ibk-test-time-sticky__content">
        <i class="ibk-icon-24-time"></i>
        남은시간: {{ formattedRemainingTime }}
      </div>
    </div>
    <div class="ibk-inner">
      <Card>
        <template #content>
          <div class="ibk-test-content">
            <div class="ibk-test-head">
              <div class="ibk-test-head__title">{{ learningStore.currentLesson?.dutyEdctLssoNm }}</div>
              <div class="ibk-test-head__date">
                {{ formatDate(learningStore.currentLesson?.lssoSttgTs!, true) }} |
                <span>{{ formatDateRange(learningStore.currentLesson?.lssoSttgTs,
                  learningStore.currentLesson?.lssoFnshTs, true) }}</span>
              </div>
              <div class="ibk-test-head-info">
                <div class="ibk-test-head-info__title">시험안내</div>
                <div class="ibk-test-head-info__text" v-html="learningStore.currentLesson?.connDtlCon ?? ''"></div>
              </div>
            </div>
            <div class="ibk-test-list">
              <log :item="answers" />

              <div v-for="(question, index) in learningStore.testQuestionList" :key="index" class="ibk-test-list-item">
                <log :item="question" />
                <div class="ibk-test-list-item__type">{{ getQuestionType(question.qsitKcd!) }}</div>
                <div class="ibk-test-list-item__title">
                  <p><strong>{{ index + 1 }}.</strong> {{ question.qsitTtlNm }}</p>
                </div>

                <!-- Question multimedia -->
                <div v-if="question.examQuestionMultiMedia && question.examQuestionMultiMedia.length > 0"
                  class="ibk-test-list-item__media">
                  <div v-for="media in question.examQuestionMultiMedia" :key="media.dataSqn">
                    <img v-if="media.mdiaKindClsfVl === 'IMG'" :src="media.cldFileUrlAdr" :alt="media.orcpFileNm">
                    <video v-else-if="media.mdiaKindClsfVl === 'MDA'" controls>
                      <source :src="media.cldFileUrlAdr" :type="'video/' + media.fileEtnsNm">
                    </video>
                  </div>
                </div>

                <div v-if="question.qsitExltCon" class="ibk-test-list-item__text" v-html="question.qsitExltCon"></div>

                <!-- Multiple choice questions -->
                <div v-if="['01', '02', '04'].includes(question.qsitKcd!)" class="ibk-test-list-item__answer">
                  <ol>
                    <li v-for="item in question.examItemList" :key="item.lkngNo">

                      <!-- ox만 라디오 -->
                      <RadioButton
                        v-if="question.qsitKcd === '04'"
                        :modelValue="answers[index]?.ansrCon"
                        @update:modelValue="(value) => updateAnswer(index, value)"
                        :inputId="`answer${index}-${item.lkngNo}`"
                        :name="`answer${index}`"
                        :value="item.lkngNo?.toString()"
                      />
                      <Checkbox v-else :modelValue="answers[index]?.ansrCon?.split('|')"
                        @update:modelValue="(value) => updateAnswer(index, value)"
                        :inputId="`answer${index}-${item.lkngNo}`" :name="`answer${index}`"
                        :value="item.lkngNo!.toString()" />
                      <label :for="`answer${index}-${item.lkngNo}`">
                        {{ item.lkngNo }}. {{ item.lkngCon }}
                        <div v-if="item.examQuestionMultiMedia">
                          <img v-if="item.examQuestionMultiMedia.mdiaKindClsfVl === 'IMG'"
                            :src="item.examQuestionMultiMedia.cldFileUrlAdr"
                            :alt="item.examQuestionMultiMedia.orcpFileNm">
                          <video v-else-if="item.examQuestionMultiMedia.mdiaKindClsfVl === 'MDA'" controls>
                            <source :src="item.examQuestionMultiMedia.cldFileUrlAdr"
                              :type="'video/' + item.examQuestionMultiMedia.fileEtnsNm">
                          </video>
                        </div>
                      </label>
                    </li>
                  </ol>
                </div>

                <!-- Descriptive questions -->
                <div v-else-if="question.qsitKcd === '03'" class="ibk-test-list-item__input">
                  <Textarea :modelValue="answers[index]?.ansrCon"
                    @update:modelValue="(value) => updateAnswer(index, value, false)" placeholder="답변을 입력해주세요."
                    @blur="(event) => updateAnswer(index, (event.target as HTMLTextAreaElement).value, false)" />
                </div>
              </div>
            </div>

            <div class="ibk-test-button">
              <div class="ibk-test-time" v-if="false">남은시간: {{ formattedRemainingTime }} !!이거일단 20분 넣어놨는데 서버에서 받아오는걸로 바꿀것.</div>
              <div class="ibk-test-button__button">
                <!-- <Button label="취소" severity="secondary" outlined size="large" /> -->
                <!-- <Button label="임시저장" severity="secondary" outlined size="large" /> -->
                <Button label="제출" severity="primary" size="large" @click="submitTest(false, true)" />
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StudyRoomExamAnswerOutVo, StudyRoomExamOutVo, StudyRoomExamSubmitInVo } from '../../../api-client';
import ManagerLearning from '../../../lib/ManagerLearning';
import { useLearningStore } from '../store';

let timer: number | null = null;
const learningStore = useLearningStore();



// 답변을 저장할 배열
const answers = ref<Array<StudyRoomExamSubmitInVo>>([]);


// 답변 업데이트 함수
const updateAnswer = (index: number, value?: string | string[], isSubmitWhenUpdate: boolean = true) => {
  if (value === undefined) return;

  if (Array.isArray(value)) {
    // 다중 선택 문제의 경우
    answers.value[index].ansrCon = value.join('|');
  } else {
    // 단일 선택 또는 서술형 문제의 경우
    answers.value[index].ansrCon = value;
  }

  if (isSubmitWhenUpdate) {
    // 수정할때마다 저장.
    submitTest()
  };
};


const getQuestionType = (qsitKcd: string) => {
  switch (qsitKcd) {
    case '01':
    case '02':
      return '객관식';
    case '03':
      return '서술형';
    case '04':
      return 'O/X';
    default:
      return '기타';
  }
};


const route = useRoute();
async function submitTest(isForceSubmit: boolean = false, isFromSubmitClick: boolean = false) {

  answers.value.forEach((answer) => {
    // chapter 번호를 submit 할때 넣어줘야됨.
    answer.edctDsprChpaNo = learningStore.currentLesson?.edctDsprChpaNo as unknown as number;
  });
  await learningStore.submitTest(answers.value, isFromSubmitClick);
  if (isFromSubmitClick == true) {
    ManagerLearning.getIns().makeLesson100Percentage();
    await $alert('시험이 제출되었습니다.');
  }
}
const remainingSeconds = ref<number | null>(null);


const formattedRemainingTime = computed(() => {
  if (remainingSeconds.value === null) return '';
  const hours = Math.floor(remainingSeconds.value / 3600);
  const minutes = Math.floor((remainingSeconds.value % 3600) / 60);
  const seconds = remainingSeconds.value % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
});

onMounted(async () => {

  if ($isEmpty(learningStore.currentLesson?.connId)) {
    await $alert('평가가 존재하지 않습니다. 해당 과정과 연결된 평가가 있는지 확인하세요.');
    return;
  }
  let answerList = await learningStore.getTest({
    dutyEdctCd: route.query.dutyEdctCd as unknown as string,
    edctDsprNo: route.query.edctDsprNo as unknown as number,
    edctDsprChpaNo: learningStore.currentLesson?.edctDsprChpaNo as unknown as number,
    edctDsprLssoNo: learningStore.currentLesson?.edctDsprLssoNo as unknown as number,
    dutyEdctExamNo: learningStore.currentLesson?.connId as unknown as number,
  });
  if (answerList == null) {
    answerList = [];
}
  // 답변 정제 함수
  const refineAnswer = (answerString: string): string => {
    if (answerString?.trim() == '') {
      return '';
    }
    const refined = answerString
      .replace(/^\|+|\|+$/g, '')  // 맨 앞과 맨 뒤의 파이프 제거
      .split('|')
      .filter(item => item.trim() !== '')
      .filter((item, index, self) => self.indexOf(item) === index)
      .join('|');
    return refined;
  };

  // 기존 답변을 정제하여 저장
  const existingAnswers = new Map(
    (!$isEmpty(answerList) ? answerList : []).map(answer => [
      answer.qsitNo,
      {
        ...answer,
        ansrCon: refineAnswer(answer.ansrCon ?? '')
      }
    ])
  );

  // 모든 문제에 대해 답변 객체 생성 (기존 답변이 있으면 사용, 없으면 빈 문자열로 초기화)
  answers.value = learningStore.testQuestionList?.map((question: StudyRoomExamOutVo) => {
    const existingAnswer = existingAnswers.get(question.qsitNo);
    if (existingAnswer) {
      return existingAnswer;
    } else {
      return {
        dutyEdctCd: learningStore.currentLesson?.dutyEdctCd || '',
        edctDsprNo: learningStore.currentLesson?.edctDsprNo || 0,
        edctDsprLssoNo: learningStore.currentLesson?.edctDsprLssoNo || 0,
        dutyEdctExamNo: question.dutyEdctExamNo || 0,
        qsitNo: question.qsitNo || 0,
        orcpQsitNo: question.orcpQsitNo || 0,
        ansrCon: '',
      };
    }
  }) || [];

  remainingSeconds.value = (() => {
    const startTime = learningStore.currentLesson?.lssoSttgTs;
    const endTime = learningStore.currentLesson?.lssoFnshTs;

    if (!startTime || !endTime) return null;

    const now = new Date().getTime();
    const finishTime = new Date(endTime).getTime();

    // 종료 시간이 지났으면 0 반환
    if (now >= finishTime) return 0;

    // 남은 시간을 초 단위로 계산
    return Math.floor((finishTime - now) / 1000);
})();

  // remainingSeconds.value = learningStore.testRemainingTime * 60;



  if(remainingSeconds.value && remainingSeconds.value > 0){
    timer = window.setInterval(async () => {
      if (remainingSeconds.value && remainingSeconds.value > 0) {
        remainingSeconds.value--;
      } else {
        if (timer) clearInterval(timer);
        await $alert('시험 시간이 종료되었습니다.');
        await submitTest(true, true);
      }
    }, 1000);
  }


});

const compLearning = useCompLearning()
onMounted(() => {

    compLearning.onLessonMounted();
})
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style lang="scss" scoped>
.ibk-test-time-sticky {
  position: fixed;
  top:86px;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #234eaa;
    font-weight: bold;

    i {
      margin-right: 8px;
    }
  }

  // 시간이 5분 이하일 때 스타일
  &.warning {
    background: rgba(255, 244, 244, 0.95);

    .ibk-test-time-sticky__content {
      color: #ff4444;
      animation: blink 1s infinite;
    }
  }
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

// 모바일 대응
@media screen and (max-width: 768px) {
  .ibk-test-time-sticky {
    &__content {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
}
</style>

