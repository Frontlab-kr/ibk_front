<template>
  <div class="ibk-background">
    <div class="ibk-test">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-test-content">
              <div class="ibk-test-head">
                <div class="ibk-test-head__title">*설문명 노출* 사이버기업회계 과정 사전설문</div>
                <div class="ibk-test-head__date">2022.10.27.목 - 2022.10.30.일 | <span>2022.10.30 23:59까지</span></div>
                <div class="ibk-test-head-info">
                  <div class="ibk-test-head-info__title">설문안내</div>
                  <div class="ibk-test-head-info__text">
                    사이버기업회계 과정 사전설문에 관심을 가지고 참여해 주셔서 진심으로 감사 드립니다.<br />
                    인재개발부에서는 정기적인 시스템 점검을 통하여 보다 안정된 서비스를 제공 하고자 아래와 같이
                    사전설문을 실시하게 되었습니다.
                  </div>
                </div>
              </div>
              <div class="ibk-test-list">
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p><strong>1.</strong> 해당 과정의 연수만족도는 어땠나요?</p>
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                        <label for="answer1-1">매우 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                        <label for="answer1-2">조금 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                        <label for="answer1-3">조금 불만</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                        <label for="answer1-4">매우 불만</label>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>2.</strong>
                      불편한 점이 있었나요?
                    </p>
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                        <label for="answer1-1">매우 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                        <label for="answer1-2">조금 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                        <label for="answer1-3">조금 불만</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                        <label for="answer1-4">매우 불만</label>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>3.</strong>
                      연수만족도는 어땠나요?
                    </p>
                  </div>
                  <div class="ibk-test-list-item__answer">
                    <ol>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                        <label for="answer1-1">매우 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                        <label for="answer1-2">조금 만족</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                        <label for="answer1-3">조금 불만</label>
                      </li>
                      <li>
                        <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                        <label for="answer1-4">매우 불만</label>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="ibk-test-list-item">
                  <div class="ibk-test-list-item__title">
                    <p>
                      <strong>4.</strong>
                      개선사항을 작성해주세요
                    </p>
                  </div>
                  <div class="ibk-test-list-item__input">
                    <Textarea placeholder="답변을 입력해주세요." />
                  </div>
                </div>
              </div>
              <div class="ibk-test-button">
                <div class="ibk-test-button__button">
                  <Button label="취소" severity="secondary" outlined size="large" />
                  <Button label="제출" severity="primary" size="large" />
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="설문 제출 확인"></Button><br /><br />
    <Button @click="confirm2()" label="설문 취소 확인"></Button><br /><br />
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

const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    header: '설문 제출 확인',
    message: '설문이 제출되었습니다.',
    rejectProps: {
      class: 'hidden',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
  });
};

const confirm2 = () => {
  confirm.require({
    header: '설문 취소 확인',
    message: '설문이 취소되었습니다.',
    rejectProps: {
      class: 'hidden',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
  });
};
</script>
