<template>
  <div class="ibk-write">
    <div class="ibk-inner">

      <Card>
        <template #content>
          <div class="ibk-write-content">
            <div class="ibk-write-head">
              <div class="ibk-write-head__title">{{ learningStore.reportDetail?.taskNm }}</div>
              <div class="ibk-write-head__date">
                <log v-model="learningStore.reportDetail" />
                <span>제출기간: {{ formatDateRange(learningStore.reportDetail?.sbmsSttgTs,
                  learningStore.reportDetail?.sbmsFnshTs) }}</span>
              </div>
              <div class="ibk-write-head-info">
                <div class="ibk-write-head-info__title">과제 안내</div>
                <div class="ibk-write-head-info__text" v-html="learningStore.reportDetail?.taskCon"></div>
              </div>
            </div>
            <div class="ibk-write-list">
              <div class="ibk-write-list-item">
                <div class="ibk-write-list-item__title">
                  <p>제목</p>

                </div>
                <div class="ibk-write-list-item__input">
                  <InputText v-model="reportTitle" type="text" size="large" placeholder="답변을 입력해주세요." class="w-full" />
                </div>
              </div>
              <div class="ibk-write-list-item">
                <div class="ibk-write-list-item__title">
                  <p>과제 작성</p>
                </div>
                <div class="ibk-write-list-item__input">
                  <froala :tag="'textarea'" v-model:value="content" :config="editorConfig"></froala>
                </div>
              </div>
              <div class="ibk-write-list-item" v-if="false">
                <div class="ibk-write-list-item__title">
                  <p>파일 업로드하기</p>
                </div>
                <div class="ibk-write-list-upload">
                  <div class="ibk-write-list-upload__caution">
                    <ul>
                      <li>파일을 drag and drop 해주거나 영역을 클릭해주세요.</li>
                      <li>업로드 확장자: SVG, PNG, JPG or GIF , PDF, PPTX, XLSX, DOCX, HWP, MP4</li>
                    </ul>
                  </div>
                  <div class="ibk-write-list-upload__form">
                    <Toast />
                    <FileUpload name="demo[]" url="/api/upload" @upload="($event)" :multiple="true" accept="image/*"
                      :maxFileSize="1000 * 1024 * 1024">
                      <template #empty>
                        <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
                      </template>
                    </FileUpload>
                  </div>
                </div>
              </div>
              <div class="ibk-write-list-item">
                <div class="ibk-write-list-item__title">
                  <p>첨부파일 <span class="ml-2 text-primary">{{ learningStore.reportDetail.orcpFileNm.length == 0 ? 0 : 1 }}</span></p>
                </div>
                <div class="ibk-write-list-file">
                  <ul>
                      <li>
                      <NuxtLink @click="handleFileDownload(learningStore.reportDetail?.dutyEdctCd,learningStore.reportDetail?.edctDsprNo,learningStore.reportDetail?.edctDsprChpaNo,learningStore.reportDetail?.edctDsprLssoNo)" class="ibk-write-list-file__text">
                        <p>{{ learningStore.reportDetail.orcpFileNm }}</p>
                        <strong>{{ $formatFileSize(learningStore.reportDetail.flszVl) }}</strong>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ibk-write-list-item">
                <div class="ibk-write-list-item__title">
                  <p>첨부파일 <span class="ml-2 text-primary">{{ attachments.length }}</span></p>
                </div>
                <div class="ibk-write-list-file">
                  <FileUploadFormWithDropdown v-model="attachments" @select="onSelectedFiles" :key="redrawIndex" />
                </div>
              </div>
            </div>

            <div class="ibk-write-button">
              <div class="ibk-write-button__button">
                <!-- 취소는 왜있는지 모르겠음. 빼버림. -->
                <Button v-if="false" label="취소" severity="secondary" outlined size="large" @click="cancelReport" />
                <Button v-if="false" label="임시저장" severity="secondary" outlined size="large" @click="saveReportDraft" />
                <Button label="제출" severity="primary" size="large" @click="submitReport(true)" />
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLearningStore } from '../store';
import { useToast } from 'primevue/usetoast';
import type { ReportOutVo, StudyRoomReportDetailInVo } from '../../../api-client';
import Utility from '../../../lib/Utility';
import ManagerLearning from '../../../lib/ManagerLearning';
import downloadFile from '~/lib/CommonFileDown';

const learningStore = useLearningStore();
const compLearning = useCompLearning();
const redrawIndex = ref(0);
const reportTitle = ref('');
const content = ref('');
const editorConfig = ref({
  height: 300,
});
const attachments = ref<File[]>([]);

const onSelectedFiles = (event: any) => {
  // console.log('onSelectedFiles', event);
  // redrawIndex.value++;
};


const cancelReport = async () => {
  const isYesOrNo = await $confirm({ title: '과제 제출 취소 확인', message: '과제 제출을 취소하시겠습니까?' })
  if (isYesOrNo == false) {
    return;
  }
  Utility.notify({
    message: '과제 제출이 취소되었습니다.',
    variant: 'info',
  });



};

const saveReportDraft = async () => {

  await submitReport(false);
  Utility.notify({
    message: '과제가 임시저장 되었습니다.',
    variant: 'info',
  });
};

const submitReport = async (isMoveToNextLesson: boolean = true) => {


  if (attachments.value.length == 0) {
    if(ManagerLearning.isLessonCompleted(learningStore.currentLesson)){
      await $alert('다시 제출 하실경우</br>첨부파일을 재첨부해 주세요.');
      return;
    }
    await $alert('첨부파일을 필수로 첨부해주세요.');
    return;
  }
  const isYesOrNo = await $confirm({ title: '과제 제출 확인', message: '과제를 제출하시겠습니까?' })

  if (isYesOrNo == false) {
    learningStore.visibleMenu = true;
    return;
  }
  try {
    /*  const formData = new FormData();

     const inVo = {
       dutyEdctCd: learningStore.currentLesson!.dutyEdctCd,
       edctDsprNo: learningStore.currentLesson!.edctDsprNo,
       edctDsprChpaNo: learningStore.currentLesson!.edctDsprChpaNo,
       edctDsprLssoNo: learningStore.currentLesson!.edctDsprLssoNo,
       taskNm: reportTitle.value,
       taskCon: content.value,
     };
     formData.append('inVo', JSON.stringify(inVo));

     attachments.value.forEach((file) => {
       formData.append('files', file);
     }); */
    await learningStore.submitReport({

      dutyEdctCd: learningStore.currentLesson!.dutyEdctCd,
      edctDsprNo: learningStore.currentLesson!.edctDsprNo,
      edctDsprChpaNo: learningStore.currentLesson!.edctDsprChpaNo,
      edctDsprLssoNo: learningStore.currentLesson!.edctDsprLssoNo,
      taskNm: reportTitle.value,
      taskCon: content.value,
      currentAcmlPictLen: 100,

    }, attachments.value,);

    ManagerLearning.getIns().makeLesson100Percentage();


    if (isMoveToNextLesson) {
      Utility.notify({
        message: '과제가 제출되었습니다.',
        variant: 'info',
      });

      // compLearning.moveToNextLesson();
    }

  } catch (error) {
    Utility.notify({
      message: '과제 제출 중 오류가 발생했습니다.',
      variant: 'error',
    });
    throw error;
  }


};


await learningStore.getReportDetail({
  dutyEdctCd: learningStore.currentLesson!.dutyEdctCd,
  edctDsprNo: learningStore.currentLesson!.edctDsprNo,
  edctDsprChpaNo: learningStore.currentLesson!.edctDsprChpaNo,
  edctDsprLssoNo: learningStore.currentLesson!.edctDsprLssoNo
});
learningStore.getSubmittedReport({
  dutyEdctCd: learningStore.currentLesson!.dutyEdctCd,
  edctDsprNo: learningStore.currentLesson!.edctDsprNo,
  edctDsprChpaNo: learningStore.currentLesson!.edctDsprChpaNo,
  edctDsprLssoNo: learningStore.currentLesson!.edctDsprLssoNo
}).then((outVo:ReportOutVo[])=>{
  // console.log('outVo', outVo);
  if($isEmpty(outVo) == false){
    reportTitle.value = outVo[0].taskNm as any;
    content.value = outVo[0].taskCon as any;
  }
});

const handleFileDownload = async (dutyEdctCd: string,
                                  edctDsprNo: number,
                                  edctDsprChpaNo: number,
                                  edctDsprLssoNo: number,

) => {
  const url = `/v1/file/download/course/report/${dutyEdctCd}/${edctDsprNo}/${edctDsprChpaNo}/${edctDsprLssoNo}`;
  await downloadFile(url, "");
};
onMounted(() => {

    compLearning.onLessonMounted();
})
</script>
