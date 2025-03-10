<template>
  <div class="ibk-board-survey-item">
    <div class="ibk-board-survey-item__text">
      <div class="ibk-board-survey-item__title">
        <strong :class="{ 'text-primary': surveyStatus !== '종료' }">{{ surveyStatus }}</strong>
        <p>{{ props.item.qstrNm }}</p>
      </div>
      <div class="ibk-board-survey-item__date">{{ props.item.qstrSttgTs.slice(0,16) }} - {{ props.item.qstrFnshTs.slice(0,16) }}</div>
    </div>
    <Button :label="buttonText" :disabled="buttonText == '설문종료'" severity="secondary" @click="openDialog(props.item)"/>
  </div>
  <CommunitySurveyDetailDialog v-if="dialogParams.visible" v-model:visible="dialogParams.visible" :item="dialogParams.item" modal class="ibk-dialog ibk-dialog-apply"/>
</template>

<script setup lang="ts">
import {
  type CommunitySurveyContents,
  type CommunitySurveyDialogOptions,
  useCommunityStore,
} from '~/domains/community';
import type { CommunitySurveySearchOptions } from '~/domains/community/type';

import type { PaginationState } from '~/types/globaltype';
import CommunitySurveyDetailDialog from '~/domains/community/components/CommunitySurveyDetailDialog.vue';
import { onMounted } from 'vue';

const router = useRouter();
const store = useCommunityStore();
const surveyStatus = ref('진행중');
const buttonText = ref('설문보기');
const props = defineProps<{
  item: CommunitySurveyContents,
  index: number,
  paging: PaginationState
}>();

const currentTime = new Date();

const INIT_SEARCH_PARAMS = (): CommunitySurveySearchOptions => ({
  pageSize: 5,
  pageNo: 1,
  qsitTtlNm: null,
  useYn: 'Y'
});

const params = reactive<CommunitySurveySearchOptions>(INIT_SEARCH_PARAMS());

const dialogParams = reactive<CommunitySurveyDialogOptions>({
  visible: false,
  item: params,
});

const openDialog = (item) => {
  dialogParams.visible= true;
  dialogParams.item= item;
};

onMounted(async () => {
  if(props.item.answerCount > 0){
    surveyStatus.value = '완료';
    buttonText.value = '설문보기';
  }else{
    const startTime = new Date(props.item.qstrSttgTs);
    const endTime = new Date(props.item.qstrFnshTs);
    surveyStatus.value = (currentTime >= startTime && currentTime <= endTime) ? "진행중" : "종료";
    buttonText.value = (currentTime >= startTime && currentTime <= endTime) ? "설문보기" : "설문종료";
  }
});

</script>
