<template>
  <div class="ibk-background">
    <div class="ibk-mobile-back">
      <Button icon="ibk-icon-24-arrowleft" label="목록" link />
    </div>
    <div class="ibk-write">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-write-content">
              <div class="ibk-write-list">
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>게시판 선택</p></div>
                  <div class="ibk-write-list-item__input">
                    <Select size="large" class="w-full" />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>제목</p></div>
                  <div class="ibk-write-list-item__input">
                    <InputText type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full" />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>내용</p></div>
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
                  <Button label="삭제" severity="secondary" outlined size="large" class="text-red-500" />
                  <Button label="등록하기" severity="primary" size="large" />
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
  layout: 'pub',
});
useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const secretmessage = ref();

const content = ref('');
const editorConfig = ref({
  height: 300,
});

import { useToast } from 'primevue/usetoast';
const toast = useToast();

const onAdvancedUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>
