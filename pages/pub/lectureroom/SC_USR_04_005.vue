<template>
  <div class="ibk-background">
    <div class="ibk-test">
      <div class="ibk-test-time">남은시간: 35:12</div>
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-test-content">
              <div class="ibk-test-head">
                <div class="ibk-test-head__title">IBK 사이버 기업회계</div>
                <div class="ibk-test-head__date">2022.10.27.목 | <span>2025.10.30 23:00 - 24:00</span></div>
                <div class="ibk-test-head-info">
                  <div class="ibk-test-head-info__title">시험안내</div>
                  <div class="ibk-test-head-info__text">
                    사이버기업회계 과정 시험입니다. <strong>본 시험은 1회 응시만 가능</strong>하며,
                    <strong>답안 제출시 재평가가 불가능한 점</strong> 양해바랍니다.<br />
                    시험은 총 1시간동안 진행되며 종료시간 30초 전부터는 남은 문제와 상관없이 답안 제출이 가능합니다.
                  </div>
                </div>
              </div>
              <div class="ibk-test-list">
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__type">객관식</div>
                  <div class="ibk-test-list-item__title">
                    <p><strong>1.</strong> 다음 중 손익계산서의 작성기준으로 틀린 것은?</p>
                  </div>
                  <div class="ibk-test-list-item__text">
                    여기는 문제에 대한 보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다. 여기는
                    문제에 대한 보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다. 여기는 문제에
                    대한 보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다. 여기는 문제에 대한 보충
                    설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다.
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                        <label for="answer1-1">1. 현금주의</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                        <label for="answer1-2">2. 실현주의</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                        <label for="answer1-3">3. 수익비용대응의 원칙</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                        <label for="answer1-4">4. 총액주의</label>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__type">주관식</div>
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>2.</strong>
                      다음 중 일반기업회계기준에 위배되지 않으면서 보수주의 회계처리의 효과가 나타나는 것은 몇 개인가?
                    </p>
                  </div>
                  <div class="ibk-test-list-item__question">
                    <ul>
                      <li>A. 양도인에게 제거요건을 충족하지 아니한 거래를 매출채권에서 제거하였다.</li>
                      <li>B. 인플레이션 상황(후입선출청산 없음)에서 재고자산을 선입선출법으로 평가하였다.</li>
                      <li>C. 신규 취득한 기계장치의 감가상각방법을 정액법 대신 정률법에 의하였다.</li>
                      <li>D. 경상개발비를 자산으로 처리하지 아니하고 비용으로 처리하였다.</li>
                    </ul>
                  </div>
                  <div class="ibk-test-list-item__input">
                    <InputText type="text" size="large" placeholder="답변을 입력해주세요." class="w-full" />
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__type">객관식</div>
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>3.</strong>
                      (주)세무가 자본금을 증자하기 위해 신주 5,000주 (1주당 액면가액 10,000원)를 1주당 12,000원에
                      발행하였다면 <br />
                      발행차액을 계상할 자본의 분류로 올바른 것을 모두 선택해주세요.
                    </p>
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <li>
                        <Checkbox v-model="answer2" inputId="answer2-1" name="answer2" value="answer2-1" />
                        <label for="answer2-1">1. 현금</label>
                      </li>
                      <li>
                        <Checkbox v-model="answer2" inputId="answer2-2" name="answer2" value="answer2-2" />
                        <label for="answer2-2">2. 자본잉여금</label>
                      </li>
                      <li>
                        <Checkbox v-model="answer2" inputId="answer2-3" name="answer2" value="answer2-3" />
                        <label for="answer2-3">3. 주식발행초과금</label>
                      </li>
                      <li>
                        <Checkbox v-model="answer2" inputId="answer2-4" name="answer2" value="answer2-4" />
                        <label for="answer2-4">4. 자본금</label>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__type">서술형</div>
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>4.</strong>
                      회계투명성을 향상시킬 수 있는 방안에 대해 설명하시오.
                    </p>
                  </div>
                  <div class="ibk-test-list-item__text">
                    여기는 문제에 대한 보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다.여기는
                    문제에 대한 보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다.여기는 문제에 대한
                    보충 설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다.여기는 문제에 대한 보충
                    설명글이 들어가는 자리로 없으면 해당 내용은 없애도 됨을 뜻합니다.
                  </div>
                  <div class="ibk-test-list-item__input">
                    <Textarea placeholder="답변을 입력해주세요." />
                  </div>
                </div>
              </div>

              <div class="ibk-test-button">
                <div class="ibk-test-time">남은시간: 35:12</div>
                <div class="ibk-test-button__button">
                  <Button label="취소" severity="secondary" outlined size="large" />
                  <Button label="임시저장" severity="secondary" outlined size="large" />
                  <Button label="제출" severity="primary" size="large" />
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pubtest',
});
useHead({
  htmlAttrs: {
    class: 'mobile-footer-hide',
  },
});
const answer1 = ref('');
const answer2 = ref('');
</script>
