<template>
  <div class="ibk-background">
    <div class="ibk-write">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-write-content">
              <div class="ibk-write-head">
                <div class="ibk-write-head__title">*과제명 노출* 회계의 이해 과제</div>
                <div class="ibk-write-head__date"><span>과제명을 확인합니다.</span></div>
                <div class="ibk-write-head-info">
                  <div class="ibk-write-head-info__title">설문안내</div>
                  <div class="ibk-write-head-info__text">
                    사이버기업회계 과정 사전설문에 관심을 가지고 참여해 주셔서 진심으로 감사 드립니다.<br />
                    인재개발부에서는 정기적인 시스템 점검을 통하여 보다 안정된 서비스를 제공 하고자 아래와 같이
                    사전설문을 실시하게 되었습니다.
                  </div>
                </div>
              </div>
              <div class="ibk-write-list">
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>제목</p></div>
                  <div class="ibk-write-list-item__input">
                    <InputText type="text" size="large" placeholder="답변을 입력해주세요." class="w-full" />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>과제 작성</p></div>
                  <div class="ibk-write-list-item__input">
                    <froala :tag="'textarea'" v-model="content" :config="editorConfig"></froala>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>파일 업로드하기</p></div>
                  <div class="ibk-write-list-upload">
                    <div class="ibk-write-list-upload__caution">
                      <ul>
                        <li>파일을 drag and drop 해주거나 영역을 클릭해주세요.</li>
                        <li>업로드 확장자: SVG, PNG, JPG or GIF , PDF, PPTX, XLSX, DOCX, HWP, MP4</li>
                      </ul>
                    </div>
                    <div class="ibk-write-list-upload__form">
                      <Toast />
                      <FileUpload
                        name="demo[]"
                        url="/api/upload"
                        @upload="onAdvancedUpload($event)"
                        :multiple="true"
                        accept="image/*"
                        :maxFileSize="1000000"
                      >
                        <template #empty>
                          <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
                        </template>
                      </FileUpload>
                    </div>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">2</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <li v-for="i of 2">
                        <NuxtLink to="/" class="ibk-write-list-file__text">
                          <!-- <i class="ibk-icon-24-folder"></i> -->
                          <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                          <strong>1.0MB</strong>
                        </NuxtLink>
                        <div class="ibk-write-list-file__delete">
                          <Button icon="ibk-icon-24-close" link rounded />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="ibk-write-button">
                <div class="ibk-write-button__button">
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
  <ConfirmDialog></ConfirmDialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="과제 제출 확인"></Button><br /><br />
    <Button @click="confirm2()" label="임시저장 확인"></Button><br /><br />
    <Button @click="confirm3()" label="과제 제출 취소 확인"></Button><br /><br />
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

const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    header: '과제 제출 확인',
    message: '과제가 제출 되었습니다.',
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
    header: '임시저장 확인',
    message: '과제가 임시저장 되었습니다.',
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

const confirm3 = () => {
  confirm.require({
    header: '과제 제출 취소 확인',
    message: '과제 제출이 취소 되었습니다.',
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

const content = ref('');
const editorConfig = ref({
  height: 300,
});
</script>
