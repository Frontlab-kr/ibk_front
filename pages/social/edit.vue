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
                    <Select v-model="params.blbrNo" size="large" class="w-full" :options="boardOptions" option-label="blbrNm" option-value="blbrNo" placeholder="선택" showClear />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>제목</p></div>
                  <div class="ibk-write-list-item__input">
                    <InputText v-model="params.bltApowTtlNm" type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full" />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title"><p>내용</p></div>
                  <div class="ibk-write-list-item__input">
                    <froala v-model:value="params.bltApowCon" :tag="'textarea'" :config="editorConfig"></froala>
                  </div>
                </div>

                <div class="ibk-write-list-item" v-if="params.commonAttachFileOutList && params.commonAttachFileOutList.length > 0">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">{{ params.commonAttachFileOutList.length }}</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <li v-for="(item, index) of params.commonAttachFileOutList">
                        <NuxtLink class="ibk-board-detail-file__text">
                          <i class="ibk-icon-24-folder"></i>
                          <p style="cursor: pointer">{{ item.orcpFileNm }}</p>
                        </NuxtLink>
                        <div class="ibk-write-list-file__delete">
                          <Button icon="ibk-icon-24-close" link rounded @click="removeFile(item, index)"/>
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
                <div class="ibk-write-button__button">
                  <Button label="취소" severity="secondary" outlined size="large" @click="cancelEdit" />
                  <Button v-if="procType === 'MOD'" label="삭제" severity="secondary" outlined size="large" class="text-red-500" @click="delBoardContents"/>
                  <Button :label="procType === 'MOD' ? '수정' : '등록'" severity="primary" size="large" @click="saveEdit" :disabled="isSave"/>
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
import { type SocialBoard, type SocialBoardContentsOptions, useSocialStore } from '~/domains/social';
import Utility from '~/lib/Utility';
import downloadFile from '~/lib/CommonFileDown';
import type { CommonAttachFileOutVo } from '~/api-client';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const router = useRouter();
const route = useRoute();
const store = useSocialStore();

const boardOptions = ref<SocialBoard>();
const isSave = ref<boolean>(false);

const params = reactive<SocialBoardContentsOptions>({
  blbrNo: undefined,
  blbrCtgyId: undefined,
  blbrPtngId: undefined,
  bltApowCon: '',
  bltApowTtlNm: '',
  useYn: 'Y',
  uploadFileList: [],
  commonAttachFileDeleteInList: []
});

const procType = computed<string>(()=> route.query.blbrPtngId ? 'MOD' : 'ADD');


const secretmessage = ref();

const editorConfig = ref({
  height: 300,
});

const toast = useToast();

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const getBoardOptions = async () => {
  const data = await $wrap($request().inqBoardList({ cybrTriuBlbrKcd: '2' }));
  boardOptions.value = $item(data);
}

const saveEdit = async () => {

  //여기서 밸리데이션 처리를 해된다.
  if(!params.blbrNo) {
    $alert('게시판을 선택해 주세요');
    return;
  }

  if(isSave.value) return;
  try {
    isSave.value = true;
    let result;
    let path;
    if(procType.value === 'ADD') {
      result = await store.saveBoardContents(params);
      path = `/social`
    } else {
      result = await store.modBoardContents(params);
      path = `/social/${params.blbrPtngId}`
    }

    if(result.success) {
      alert('정상 처리 되었습니다');
      router.replace(path);
    }
  } finally {
    isSave.value = false
  }
}

const delBoardContents = async () => {
  if(!confirm('정말 삭제하시겠습니까?')) return;

  const result = await store.delBoardContents(params);

  if(result.success) {
    alert('정상 처리 되었습니다');
    router.replace('/social');
  }
}

const cancelEdit = () => {
  router.go(-1);
}

const firstCheck = async () => {
  const data = await store.isFirstWrite(3);
  const isAgree = Utility.hasCachedForever('_isFirstWrite', 'social');

  if(data.response && !isAgree) {
    alert('무단 제작/배포 금지에 동의하시고 작성하시기 바랍니다');
    router.go(-1);
  }
}

const handleFileDownload = async (atchId: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/social/${atchId}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

const removeFile = (item: CommonAttachFileOutVo, index: number) => {
  params.commonAttachFileDeleteInList.push(item);
  params.commonAttachFileOutList.splice(index, 1);
}

onBeforeMount(async () => {
  await getBoardOptions();
  await firstCheck();

  if(route.query.blbrPtngId) {
    const data = await store.getBoardContentsDetail(Number(route.query.blbrPtngId));
    Object.assign(params, data);
  }
})
</script>
