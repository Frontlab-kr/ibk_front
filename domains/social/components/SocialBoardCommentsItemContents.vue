<template>
  <div class="ibk-comment-list-item__info">
    <strong>{{ props.item.cncrName }}</strong>
    {{ Utility.getTimeDifference(props.item.hrdSysLastMdfcTs) }}
  </div>
  <div class="ibk-comment-list-item__text">
    <Textarea v-if="props.item.isEdit" v-model="commentContents" class="w-full p-1"></Textarea>
    <p v-else>{{ props.item.blbrRpcmCon }}</p>
  </div>
  <div class="ibk-comment-list-item__button">
    <Button v-if="isMe" label="삭제" text class="text-red-500" @click="deleteComment"/>
    <Button v-if="!props.item.isEdit && isMe" label="수정" text class="text-gray-900" @click="editComment"/>
    <Button v-if="props.item.isEdit && isMe" label="취소" text class="text-gray-900" @click="cancelEditComment"/>
    <Button v-if="props.item.isEdit && isMe" label="저장" text class="text-blue-900" @click="saveComment" />
  </div>

  <div class="ibk-comment-list-item__menu">
    <ul>
      <li>
<!--        <button><i class="ibk-icon-16-like"></i></button>-->
      </li>
      <li v-if="!props.item.hgrnBlbrRpcmId || props.item.hgrnBlbrRpcmId === 0">
        <button class="text-primary" @click="toggleActive" >
          <i class="ibk-icon-16-reply-primary"></i>{{ `답글 ${props.item?.commentCount?.toLocaleString() || 0}개` }}<i class="ibk-icon-16-reply-arrow"></i>
        </button>
      </li>
    </ul>
  </div>
  <div v-if="props.item.isActive" class="ibk-comment">
    <SocialBoardCommentsForm :blbrNo="props.item.blbrNo" :blbrPtngId="props.blbrPtngId" :blbrRpcmId="props.item.blbrRpcmId" @refresh="refresh" :is-border="true"/>
    <SocialBoardCommentsItemContents v-for="(reply, index) in item.children" :key="`${reply.blbrRpcmId}_${index}`" :item="reply" :blbrPtngId="props.blbrPtngId" @refresh="refresh"/>
  </div>
</template>

<script setup lang="ts">
import {
  type SocialBoardContentsCommentOptions,
  type SocialBoardContentsComments,
  useSocialStore,
} from '~/domains/social';
import Utility from '../../../lib/Utility';
import { useAuthStore } from '~/domains/auth';

const store = useSocialStore();
const authStore = useAuthStore();

const props = defineProps<{
  item: SocialBoardContentsComments;
  blbrNo: number;
  blbrPtngId: number;
}>();

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const commentContents = ref<string>('');

const isMe = computed(()=> authStore.userInfo && authStore.userInfo.userId === props.item.cncrId);

const toggleActive = async () => {
  if(!props.item.isActive) {
    store.openedCommentId.push(props.item.blbrRpcmId);
    await store.getBoardContentsCommentList(Number(props.blbrPtngId), Number(props.item.blbrRpcmId));
  } else {
    const findIndex = store.openedCommentId.findIndex((v)=> v === props.item.blbrRpcmId);
    if(findIndex > 0) {
      store.openedCommentId.splice(findIndex, 1);
    }
  }

  props.item.isActive = !props.item.isActive;
}

const editComment = () => {
  commentContents.value = props.item.blbrRpcmCon;
  props.item.isEdit = true;
}

const cancelEditComment = () => {
  commentContents.value = '';
  props.item.isEdit = false;
}

const deleteComment = async () => {
  if(!confirm('정말 삭제하시겠습니까?')) return;

  const data = {
    blbrNo: props.item.blbrNo,
    blbrPtngId: props.blbrPtngId,
    hgrnBlbrRpcmId: props.item.hgrnBlbrRpcmId || 0,
    blbrRpcmId: props.item.blbrRpcmId,
  }

  const result = await store.delBoardContentsComment(data);

  if(result.success) {
    alert('정상 처리 되었습니다');
    refresh();
  }
}

const saveComment = async () => {
  const data = {
    blbrNo: props.item.blbrNo,
    blbrPtngId: props.blbrPtngId,
    hgrnBlbrRpcmId: props.item.hgrnBlbrRpcmId || 0,
    blbrRpcmId: props.item.blbrRpcmId,
    blbrRpcmCon: commentContents.value,
    useYn: 'Y'
  }

  const result = await store.modBoardContentsComment(data);

  if(result.success) {
    alert('정상 처리 되었습니다');
    refresh();
  }
}

const refresh = () => {
  emits('refresh');
}

</script>

<style scoped>

</style>
