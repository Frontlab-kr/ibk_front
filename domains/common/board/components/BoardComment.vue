<template>
  <div class="comment mt-6">
    <div class="mb-3 text-xl">댓글 {{ items.length }}</div>
    <div class="mb-2 mb-6">
      <Textarea class="w-full" style="height: 100px" v-model="rpcmCons[0]"/>
      <div class="flex justify-content-end gap-2 mt-2">
        <Button label="취소" outlined @click="cancelRpcmCon[0]"/>
        <Button label="등록" @click="saveComment(0)"/>
      </div>
    </div>
    <!--  1depth 댓글  -->
    <div v-if="items.length > 0">
      <div v-for="(item, idx) of items" class="mb-4 pt-4 border-top-1 border-200">
        <div class="flex align-items-start text-lg mb-2">
          {{ item.cncrId }}
          <span class="text-400 text-sm ml-2">3일전</span>
        </div>
        <div class="mb-2">{{ item.rpcmCon }}</div>
        <div class="flex align-items-center">
          <i class="bi bi-chat-square-heart"></i>
          <span class="ml-2">{{ item.commentCount }}</span>
          <Button label="답글" link @click="toggleItem(item.blbrRpcmId,'write')"/>
        </div>
        <div>
          <div class="mt-2" v-show="activeWriteComment[item.blbrRpcmId]">
            <Textarea class="w-full" style="height: 100px" v-model="rpcmCons[item.blbrRpcmId]"/>
            <div class="flex justify-content-end gap-2 mt-2">
              <Button label="취소" outlined @click="cancelRpcmCon[item.blbrRpcmId]"/>
              <Button label="등록" @click="saveComment(item.blbrRpcmId)"/>
            </div>
          </div>
        </div>
        <!--  2depth 댓글  -->
        <div v-if="item.commentCount > 0">
          <div class="mb-2">
            <Button
              type="button"
              :label="`${item.commentCount}개`"
              :icon="{'bi bi-caret-down-fill': !activeViewComment[item.blbrRpcmId], 'bi bi-caret-up-fill': activeViewComment[item.blbrRpcmId]}"
              class="px-0 text-primary"
              link
              size="small"
              @click="getBoardContentsComment(item.blbrRpcmId, !activeViewComment[item.blbrRpcmId], false)"
            />
          </div>
          <div class="p-5 py-2 surface-100" v-show="activeViewComment[item.blbrRpcmId]">
            <div v-for="(item2, idx) of childComment" class="py-3 border-bottom-1 border-200">
              <div class="flex align-items-start text-lg mb-2">
                {{ item2.cncrId }}
                <span class="text-400 text-sm ml-2">3일전</span>
              </div>
              <div class="mb-2">{{ item2.rpcmCon }}</div>
              <div class="flex align-items-center">
                <i class="bi bi-chat-square-heart"></i>
                <span class="ml-2">{{ item2.commentCount }}</span>
                <Button label="답글" link @click="toggleItem(item2.blbrRpcmId,'write')"/>
              </div>
              <div>
                <div class="mt-2" v-show="activeWriteComment[item2.blbrRpcmId]">
                  <Textarea class="w-full" style="height: 100px" v-model="rpcmCons[item2.blbrRpcmId]"/>
                  <div class="flex justify-content-end gap-2 mt-2">
                    <Button label="취소" outlined @click="cancelRpcmCon[item2.blbrRpcmId]"/>
                    <Button label="등록" @click="saveComment(item2.blbrRpcmId)"/>
                  </div>
                </div>
              </div>
              <div v-if="item2.commentCount > 0">
                <div class="mb-2">
                  <Button
                    type="button"
                    :label="`${item2.commentCount}개`"
                    :icon="{'bi bi-caret-down-fill': !activeViewComment[item2.blbrRpcmId], 'bi bi-caret-up-fill': activeViewComment[item2.blbrRpcmId]}"
                    class="px-0 text-primary"
                    link
                    size="small"
                    @click="getBoardContentsComment(item2.blbrRpcmId, !activeViewComment[item2.blbrRpcmId], true)"
                  />
                </div>
                <div class="p-5 py-2 surface-100" v-show="activeViewComment[item2.blbrRpcmId]">
                  <div v-for="(item3, idx) of lastComment" class="py-3">
                    <div class="flex align-items-start text-lg mb-2">
                      {{ item3.cncrId }}
                      <span class="text-400 text-sm ml-2">3일전</span>
                    </div>
                    <div class="mb-2">{{ item3.rpcmCon }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BoardContentsCommentOptions } from '~/domains/common/board/type';
import { useBoardStore } from '~/domains/common/board/store';
const props = withDefaults(
	defineProps<{
    items: BoardContentsCommentOptions | null
	}>(),
	{
    items: null,
  }
);
const emits = defineEmits<{
  (e: 'refresh'): void;
}>();
const route = useRoute();
const store = useBoardStore();
const blbrId = computed(() => route.params.blbrId);
const blbrPtngId = computed(() => route.params.blbrPtngId);
const childComment = ref<BoardContentsCommentOptions[]>([]);
const lastComment = ref<BoardContentsCommentOptions[]>([]);
const isSave = ref<boolean>(false);

const params = reactive<BoardContentsCommentOptions>({
  blbrId: Number(blbrId.value),
  blbrPtngId: Number(blbrPtngId.value),
  blbrRpcmId: 0,
  hgrnBlbrRpcmId: 0,
  rpcmCon: '',
  useYn: 'Y',
  cretTs : '',
  cncrId : '',
  hrdSysLastMdfcId : '',
  hrdSysLastMdfcTs : ''
});

const rpcmCons = ref<Record<number, string>>({});
const activeWriteComment = ref<boolean[]>([]);
const activeViewComment = ref<boolean[]>([]);

const cancelRpcmCon = (blbrRpcmId: number) => {
  if(blbrRpcmId > 0){
    activeViewComment.value[blbrRpcmId] = !activeViewComment.value[blbrRpcmId];
  }
  rpcmCons.value[blbrRpcmId] = '';
}

const toggleItem = (index: number, mode:string) => {
  if(mode === 'write'){
    activeWriteComment.value[index] = !activeWriteComment.value[index];
  }else{
    activeViewComment.value[index] = !activeViewComment.value[index];
  }
};

const getBoardContentsComment = async (blbrRpcmId: number, activeFlag: boolean, endFlag: boolean) => {
  let res = await $request().inqBoardContentsCommentPage({blbrId: Number(blbrId.value), blbrPtngId: Number(blbrPtngId.value), blbrRpcmId: blbrRpcmId});
  if(endFlag){
    lastComment.value = res.data.response.contents;
  }else{
    childComment.value = res.data.response.contents;
  }
  activeViewComment.value[blbrRpcmId] = activeFlag;
}

const saveComment = async (blbrRpcmId : number) => {
  let result;
  if(!isSave.value){
    isSave.value = true;
    await $isLoading(true);
    params.hgrnBlbrRpcmId = blbrRpcmId;
    params.rpcmCon = rpcmCons.value[blbrRpcmId];
    try {
      result = await store.saveBoardContentsComment(params);
      if (result.success) {
        alert(`댓글이 등록되었습니다`);
        emits('refresh'); // 댓글 갯수 초기화
        rpcmCons.value[blbrRpcmId] = '';
        if(blbrRpcmId > 0){
          await getBoardContentsComment(blbrRpcmId, true);
        }
      } else {
        alert(`댓글 등록중 오류가 발생하였습니다.`);
      }
    } finally {
      await $isLoading(false);
      isSave.value = false;
    }
  }
}
</script>

<style>
.comment .p-panel {
  border: none;
}
.comment .p-panel-header {
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  border: none;
}
.comment .p-panel-title {
  color: var(--primary-color) !important;
}
</style>
