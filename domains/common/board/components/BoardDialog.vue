<template>
  <Dialog v-model:visible="visible" modal :header="`게시판 ${saveText}하기`" :style="{ width: '50rem' }">
    <div class="grid">
      <div class="col-12">
        <div class="field mb-0">
          <label>구분</label>
          <div class="flex flex-wrap gap-4 text-sm my-1">
            <div v-if="props.target === 'common'" class="flex align-items-center">
              <RadioButton v-model="params.cybrTriuBlbrKcd" value="1" name="cybrTriuBlbrKcd"/>
              <label class="ml-2">일반게시판</label>
            </div>
            <div v-if="props.target === 'social'" class="flex align-items-center">
              <RadioButton v-model="params.cybrTriuBlbrKcd" value="2" name="cybrTriuBlbrKcd"/>
              <label class="ml-2">소셜게시판</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>게시판명</label>
          <div>
            <InputText class="w-full" placeholder="게시판명" v-model="params.blbrNm"/>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>읽기 권한</label>
          <div>
            <Select class="w-full" v-model="params.lkngUsayClsfVl" showClear optionLabel="name" optionValue="value" :options="lkngAthrUserDcdOptions"/>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>쓰기 권한</label>
          <div>
            <Select class="w-full" v-model="params.wrtnUsayClsfVl" showClear optionLabel="name" optionValue="value" :options="wrtnAthrUserDcdOptions"/>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>댓글쓰기 권한</label>
          <div>
            <Select class="w-full" v-model="params.rpcmUsayClsfVl" showClear optionLabel="name" optionValue="value" :options="rpcmAthrUserDcdOptions"/>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>좋아요</label>
          <div class="flex flex-wrap gap-4 text-sm my-1">
            <div class="flex align-items-center">
              <RadioButton v-model="params.stsfUseYn" value="Y" name="stsfUseYn"/>
              <label class="ml-2">사용</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="params.stsfUseYn" value="N" name="stsfUseYn"/>
              <label class="ml-2">사용안함</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>댓글사용</label>
          <div class="flex flex-wrap gap-4 text-sm my-1">
            <div class="flex align-items-center">
              <RadioButton v-model="params.rpcmUseYn" value="Y" name="rpcmUseYn"/>
              <label class="ml-2">사용</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="params.rpcmUseYn" value="N" name="rpcmUseYn"/>
              <label class="ml-2">사용안함</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>첨부파일</label>
          <div class="flex flex-wrap gap-4 text-sm my-1">
            <div class="flex align-items-center">
              <RadioButton v-model="params.apndUseYn" value="Y" name="apndUseYn"/>
              <label class="ml-2">사용</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="params.apndUseYn" value="N" name="apndUseYn"/>
              <label class="ml-2">사용안함</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="field mb-0">
          <label>카테고리</label>
          <div class="border-1 border-round-lg border-300">
            <div class="flex flex-wrap gap-4 text-sm py-3 px-4 border-bottom-1 border-300">
              <div class="flex align-items-center">
                <RadioButton v-model="params.ctgyUseYn" value="Y" name="ctgyUseYn"/>
                <label class="ml-2">사용</label>
              </div>
              <div class="flex align-items-center">
                <RadioButton v-model="params.ctgyUseYn" value="N" name="ctgyUseYn"/>
                <label class="ml-2">사용안함</label>
              </div>
            </div>
            <div v-if="'Y' === params.ctgyUseYn" class="grid p-3">
              <div class="col-12">
                <div class="field mb-0">
                  <div v-for="(item, idx) of cate" class="flex gap-2 mt-3">
                    <InputText v-model="item.ctgyNm" class="w-full" />
                    <Button v-if="idx > 0" label="삭제" severity="danger" outlined @click="delRow(idx)"/>
                    <Button label="추가" @click="addRow(idx)"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <Button type="button" label="삭제" severity="secondary" @click="delBoard"></Button>
      <Button type="button" :label="saveText" @click="saveBoard"></Button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { BoardOptions } from '~/domains/common/board/type';
import { useBoardStore } from '~/domains/common/board/store';
import Utility from '~/lib/Utility';

const store = useBoardStore();

const { visible } = defineModels<{
  visible: boolean
}>();

const props = withDefaults(
	defineProps<{
    item: BoardOptions | null
    target: string | ''
	}>(),
	{
    item: null
  }
);

const emits = defineEmits<{
  (e: 'refresh'): void;
}>();

const procType = computed<string>(() => props.item ? 'MOD' : 'ADD');
const isSave = ref<boolean>(false);
const saveText = ref<String>('추가');

const params = reactive<BoardOptions>({
  blbrId: 0,
  cybrTriuBlbrKcd: props.target === 'common' ? '1' : '2',
  blbrNm:'',
  lkngUsayClsfVl:'AL',
  wrtnUsayClsfVl:'AL',
  rpcmUsayClsfVl:'AL',
  stsfUseYn:'Y',
  rpcmUseYn:'Y',
  apndUseYn:'Y',
  ctgyUseYn:'Y',
  useYn: 'Y',
  categoryList: []
});

const lkngAthrUserDcdOptions = ref([
  { name: '모든사용자', value: 'AL' },
  { name: '일부사용자', value: 'ANY' }
]);

const wrtnAthrUserDcdOptions = ref([
  { name: '모든사용자', value: 'AL' },
  { name: '일부사용자', value: 'ANY' }
]);

const rpcmAthrUserDcdOptions = ref([
  { name: '모든사용자', value: 'AL' },
  { name: '일부사용자', value: 'ANY' }
]);

const saveBoard = async () => {
  let result;
  if(!isSave.value){
    isSave.value = true;
    await $isLoading(true);

    try {
      if(procType.value === 'ADD'){
        params.categoryList = cateGrp.value;
        result = await store.saveBoard(params);
      } else{
        cateGrp.value = cateGrp.value.filter(x => x.ctgyNm !== '');
        if('Y' === params.ctgyUseYn){
          if(cateGrp.value.length > 0) {
            params.categoryList = cateGrp.value;
            result = await store.modifyBoard(params);
          }else{
            alert('카테고리명을 입력해주세요.')
            cateGrp.value = [{blbrId: 0, ctgyNm: '', useYn: 'Y', blbrCtgyId:0, ctgyStatusType: 'ADD'}];
            return false;
          }
        }else{
          result = await store.modifyBoard(params);
        }
      }

      if (result.success) {
        alert(`게시판이 ${saveText.value}되었습니다`);
        emits('refresh');
        closeDialog();
      } else {
        alert(`게시판 ${saveText.value}중 오류가 발생하였습니다.`);
      }
    } finally {
      await $isLoading(false);
      isSave.value = false;
    }
  }
}

const delBoard = async () => {
  const isYesOrNo = await Utility.confirm('게시글을 삭제하시겠습니까?');
  if (isYesOrNo) {
    const res = await $request().delBoard(params);
    if (res && res.status === 200) {
      alert('게시글이 삭제되었습니다.');
      emits('refresh');
      closeDialog();
    }else {
      alert('삭제 처리중 오류가 발생하였습니다')
    }
  }
}

const cate = computed(() => {
  return cateGrp.value.filter(item => item.ctgyStatusType !== 'DELL');
});

interface CateItem {
  blbrId : number;
  ctgyNm: string;
  useYn: string;
  blbrCtgyId: number;
  ctgyStatusType?: string;
}

const cateGrp = ref<CateItem[]>([
  {blbrId: 0, ctgyNm: '', useYn: 'Y', blbrCtgyId:0, ctgyStatusType: 'ADD'},
]);

const addRow = (idx: number) => {
  addEmptyRow(idx+1);
}

const addEmptyRow = (idx: number) => {
  cateGrp.value.splice(idx, 0, {blbrId: 0, ctgyNm: '', useYn: 'Y', blbrCtgyId:0, ctgyStatusType: 'ADD'},);
}

const delRow = (idx: number) => {
  cateGrp.value[idx].ctgyStatusType = 'DELL';
  if(cate.value.length === 0) addEmptyRow(0);
}

const closeDialog = () => {
  visible.value = false;
}

onBeforeMount(() => {
  if(props.item) {
    saveText.value = '수정';
    Object.assign(params, props.item);
    params.categoryList?.forEach(x => {
      if('' === x.ctgyNm){
        x.ctgyStatusType = 'ADD';
      }else{
        x.ctgyStatusType = 'MOD';
      }
    });
    cateGrp.value = params.categoryList && params.categoryList.length > 0 ? params.categoryList : [{blbrId: 0, ctgyNm: '', useYn: 'Y', blbrCtgyId:0, ctgyStatusType: 'ADD'}];
  }else{
    saveText.value = '추가';
  }
})

</script>

<style scoped>

</style>
