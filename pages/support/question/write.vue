<template>
  <div class="ibk-background">
    <div class="ibk-mobile-back">
      <Button icon="ibk-icon-24-arrowleft" label="목록" link @click="navigateTo('/support')"/>
    </div>
    <div class="ibk-write">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-write-content">
              <div class="ibk-write-list">
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>제목</p></div>
                  <div class="ibk-write-list-item__input">
                    <InputText type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full" v-model="params.blbrQstnTtlNm"/>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>내용</p></div>
                  <div class="ibk-write-list-item__input">
                    <froala :tag="'textarea'" v-model:value="params.qstnCon" :config="editorConfig"></froala>
                  </div>
                </div>
                <div v-if="params.uploadFileList.length > 0" class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">{{ params.uploadFileList.length }}</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <li v-for="(file, index) of params.uploadFileList" :key="file.name + file.type + file.size">
                        <NuxtLink to="/" class="ibk-write-list-file__text">
                          <i class="ibk-icon-24-folder"></i>
                          <p>{{file.name}}</p>
                          <strong>{{formatSize(file.size)}}</strong>
                        </NuxtLink>
                        <div class="ibk-write-list-file__delete">
                          <Button icon="ibk-icon-24-close" link rounded @click="fileRemove(null, index)"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="params.questionAttachFileOutList && params.questionAttachFileOutList.length > 0" class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">{{ params.questionAttachFileOutList.length }}</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <li v-for="(item, index) of params.questionAttachFileOutList" :key="item.orcpFileNm + index">
                        <NuxtLink to="/" class="ibk-write-list-file__text">
                          <i class="ibk-icon-24-folder"></i>
                          <p>{{ item.orcpFileNm }}</p>
<!--                          <strong>{{formatSize(file.size)}}</strong>-->
                        </NuxtLink>
                        <div class="ibk-write-list-file__delete">
                          <Button icon="ibk-icon-24-close" link rounded @click="fileRemove(item, index)"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>파일 업로드하기</p></div>
                  <div class="ibk-write-list-upload">
                    <Toast />
                    <FileUploadForm v-model="params.uploadFileList"/>
                    <div class="ibk-write-list-upload__text">* 10MB 미만의 파일 최대 3개까지 첨부 가능합니다.</div>
                  </div>
                </div>
              </div>

              <div class="ibk-write-button">
                <div class="ibk-write-button__check">
                  <Checkbox v-model="params.secrtPtngYn" binary id="secrtPtngYn" true-value="Y" false-value="N"/>
                  <label for="secrtPtngYn" class="ml-2"> 비밀글로 등록하기 </label>
                </div>
                <div class="ibk-write-button__button">
                  <Button label="취소" severity="secondary" outlined size="large" @click="navigateTo('/support')"/>
                  <Button :label="`${saveText}하기`" severity="primary" size="large" @click="saveQuestion"/>
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
import type { QuestionOptions } from '~/domains/support/type';
import { onMounted, ref } from 'vue';
import type { QuestionOutVo, CommonAttachFileOutVo, CommonAttachFilehInVo } from '~/api-client';
import Utility from '~/lib/Utility';
import { useSupportStore } from '~/domains/support/store';
import SoftCampUtil from '~/lib/SoftCampUtil';

const $primevue = usePrimeVue();
const route = useRoute();
const blbrQstnId = ref<string | null>(route.query.blbrQstnId as string);
const isSave = ref<boolean>(false);
const store = useSupportStore();
const saveText = ref<String>('등록');
const procType = ref<String>('ADD');

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const params = reactive<QuestionOptions>({
  blbrQstnId: Number(blbrQstnId.value),
  blbrQstnTtlNm: '',
  qstnCon: '',
  useYn: 'Y',
  secrtPtngYn: 'N',
  cretTs: '',
  cncrId: '',
  questionAttachFileOutList: [],
  questionDeleteAtchList: [],
  uploadFileList: [],
  atchList: [],
});

const content = ref('');
const editorConfig = ref({
  height: 300,
});

const toast = useToast();

const formatSize = (bytes: number) => {
  const k = 1024;
  const dm = 3;
  //const sizes = $primevue.config.locale.fileSizeTypes;
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};

//CDR 안타게 주석
/*const saveQuestion = async () => {
  if (validation()) {
    let result;
    if (!isSave.value) {
      isSave.value = true;
      await $isLoading(true);
      try {
        // 업로드할 파일이 있는지 확인
        if (params.uploadFileList.length > 0) {
          // uploadFileList에 있는 파일을 서버에 업로드하고 atchList에 추가
          const atchList = await Promise.all(
            params.uploadFileList.map(async (file) => {
              // SoftCampUtil.uploadFile을 호출하여 파일을 업로드하고 jobID를 받아옴
              const jobID = await SoftCampUtil.uploadFile(file, '/board/callback');

              // 업로드된 파일 정보를 CommonAttachFilehInVo 형식으로 반환
              return {
                orcpFileNm: file.name,
                jbdsId: jobID, // 서버로부터 받은 jobID를 사용
                atchSqn: params.uploadFileList.indexOf(file) + 1, // 순서대로 부여
              } as CommonAttachFilehInVo;
            })
          );

          // 업로드된 파일 리스트를 params.atchList에 추가
          params.atchList = atchList;
        }

        // 질문 저장 로직
        if (procType.value === 'ADD') {
          result = await store.saveQuestion(params);
        } else {
          result = await store.modifyQuestion(params);
        }

        if (result.success) {
          alert(`문의가 ${saveText.value}되었습니다`);
          navigateTo('/support');
        } else {
          alert(`문의 ${saveText.value}중 오류가 발생하였습니다.`);
        }
      } finally {
        await $isLoading(false);
        isSave.value = false;
      }
    }
  }
};*/

const saveQuestion = async () => {
  if(validation()){
    let result;
    if(!isSave.value){
      isSave.value = true;
      await $isLoading(true);

      try {
        if(procType.value === 'ADD'){
          result = await store.saveQuestion(params);
        } else{
          result = await store.modifyQuestion(params);
        }

        if (result.success) {
          alert(`문의가 ${saveText.value}되었습니다`);
          navigateTo('/support');
        } else {
          alert(`문의 ${saveText.value}중 오류가 발생하였습니다.`);
        }
      } finally {
        await $isLoading(false);
        isSave.value = false;
      }
    }
  }
}

const validation = () => {
  if (params.blbrQstnTtlNm == null || params.blbrQstnTtlNm === '') {
    alert('제목은 필수 입력값입니다.');
    return false;
  }
  if (removeTags(params.qstnCon) == null || removeTags(params.qstnCon) === '') {
    alert('내용은 필수 입력값입니다.');
    return false;
  }

  return true;
}

const removeTags = (data: any) => {
  const div = document.createElement('div');
  div.innerHTML = data;
  return div.textContent || div.innerText || '';
}

const getQuestionDetail = async () => {
  let questionRes = await $request().inqQuestionDtl({blbrQstnId: Number(blbrQstnId.value)});
  const questionData = $response<QuestionOutVo>(questionRes);
  if(Utility.isSuccess(questionData)){
    Object.assign(params, questionData.response);
  }
}

const fileRemove = (file: CommonAttachFileOutVo, index: number) => {
  if(null == file){
    params.uploadFileList.splice(index, 1);
  }else{
    params.questionDeleteAtchList.push(file);
    params.questionAttachFileOutList.splice(index, 1);
  }
}

onMounted(async () => {
  if(Number(blbrQstnId.value) > 0){
    await getQuestionDetail();
    saveText.value = '수정';
    procType.value = 'MOD';
  }else{
    saveText.value = '등록';
    procType.value = 'ADD';
  }
});
</script>
