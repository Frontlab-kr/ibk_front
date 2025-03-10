<template>
  <div class="ibk-comment-form__name">{{ authStore.userInfo.userNm || ''}}</div>
  <div class="ibk-comment-form__textarea">
    <Textarea v-model="commentComment" :style="borderStyle" class="p-2"/>
  </div>
  <div class="ibk-comment-form__button">
    <Button label="취소" severity="secondary" text />
    <Button label="등록" severity="primary" class="tonal" @click="saveBoardContentsComment"/>
  </div>
</template>

<script setup lang="ts">
import { type SocialBoardContentsCommentOptions, useSocialStore } from '~/domains/social';
import { useAuthStore } from '~/domains/auth';

const store = useSocialStore();
const authStore = useAuthStore();

const props = defineProps<{
  blbrNo: number;
  blbrPtngId: number;
  blbrRpcmId?: number;
  isBorder: {
    type: boolean,
    default: false,
  }
}>();

const borderStyle = computed(() => props.isBorder ? { 'border': 'solid 1px #eeeeee' } : {});

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const INIT_PARAM = (): SocialBoardContentsCommentOptions => ({
    blbrNo: props.blbrNo,
    blbrPtngId: props.blbrPtngId,
    blbrRpcmId: undefined,
    hgrnBlbrRpcmId: 0,
    blbrRpcmCon: '',
    useYn: 'Y'
});

const params = reactive<SocialBoardContentsCommentOptions>(INIT_PARAM());
const commentComment = ref<string>('');

const saveBoardContentsComment = async () => {
  params.blbrNo = props.blbrNo;
  params.blbrPtngId = props.blbrPtngId;
  params.hgrnBlbrRpcmId = props.blbrRpcmId || 0;
  params.blbrRpcmCon = commentComment.value;

  const result = await store.saveBoardContentsComment(params);

  if(result.success) {
    commentComment.value = '';
    alert('정상 처리 되었습니다');
    emits('refresh');
  }
}


</script>

<style scoped>

</style>
