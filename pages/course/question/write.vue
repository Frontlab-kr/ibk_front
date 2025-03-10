<template>
  <div class="ibk-background">
    <div class="ibk-write">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-write-content">
              <div class="ibk-write-list">
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>제목</p></div>
                  <div class="ibk-write-list-item__input">
                    <InputText type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full" v-model="params.edctQstnTtlNm"/>
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
                <div v-if="params.courseBoardAtchOutList && params.courseBoardAtchOutList.length > 0" class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">{{ params.courseBoardAtchOutList.length }}</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <li v-for="(item, index) of params.courseBoardAtchOutList" :key="item.orcpFileNm + index">
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
                  <Button label="취소" severity="secondary" outlined size="large" @click="navigateTo(`/course/question/manage?dutyEdctCd=${dutyEdctCd}&edctDsprNo=${edctDsprNo}`)"/>
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
import type { CourseQuestionOptions } from '~/domains/course/question/type';
import { useQuestionStore } from '~/domains/course/question';
import { onMounted, ref } from 'vue';
import type { CourseQuestionOutVo, CourseBoardAtchOutVo } from '~/api-client';
import Utility from '~/lib/Utility';

const $primevue = usePrimeVue();
const route = useRoute();
const dutyEdctCd = ref<string | null>(route.query.dutyEdctCd as string);
const edctDsprNo = ref<string | null>(route.query.edctDsprNo as string);
const edctQstnNo = ref<string | null>(route.query.edctQstnNo as string);
const isSave = ref<boolean>(false);
const store = useQuestionStore();
const saveText = ref<String>('등록');
const procType = ref<String>('ADD');

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const params = reactive<CourseQuestionOptions>({
  edctQstnNo: Number(edctQstnNo.value),
  edctDsprNo: Number(edctDsprNo.value),
  dutyEdctCd: dutyEdctCd.value,
  dutyEdctNm: '',
  edctQstnTtlNm: '',
  qstnCon: '',
  useYn: 'Y',
  secrtPtngYn: 'N',
  cretTs: '',
  cncrId: '',
  courseBoardAtchOutList: [],
  courseBoardAtchDelletInList: [],
  uploadFileList: [],
});

const content = ref('');
const editorConfig = ref({
  height: 300,
});

const toast = useToast();

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

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

const saveQuestion = async () => {
  if(validation()){
    let result;
    if(!isSave.value){
      isSave.value = true;
      await $isLoading(true);

      try {
        if(procType.value === 'ADD'){
          result = await store.saveCourseQuestion(params);
        } else{
          result = await store.modifyCourseQuestion(params);
        }

        if (result.success) {
          alert(`문의가 ${saveText.value}되었습니다`);
          navigateTo(`/course/question/manage?dutyEdctCd=${dutyEdctCd.value}&edctDsprNo=${Number(edctDsprNo.value)}`);
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
  if (params.edctQstnTtlNm == null || params.edctQstnTtlNm === '') {
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



const getCourseQuestionDetail = async () => {
  let questionRes = await $request().inqCourseQuestionDtl({edctQstnNo: Number(edctQstnNo.value)});
  const questionData = $response<CourseQuestionOutVo>(questionRes);
  if(Utility.isSuccess(questionData)){
    Object.assign(params, questionData.response);
  }
}

const fileRemove = (file: CourseBoardAtchOutVo, index: number) => {
  if(null == file){
    params.uploadFileList.splice(index, 1);
  }else{
    params.courseBoardAtchDelletInList.push(file);
    params.courseBoardAtchOutList.splice(index, 1);
  }
}

onMounted(async () => {
  if(Number(edctQstnNo.value) > 0){
    await getCourseQuestionDetail();
    saveText.value = '수정';
    procType.value = 'MOD';
  }else{
    saveText.value = '등록';
    procType.value = 'ADD';
  }
});
</script>
