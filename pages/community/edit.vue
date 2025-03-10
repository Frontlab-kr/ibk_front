<template>
  <div class="ibk-background">
    <div class="ibk-mobile-back">
      <Button icon="ibk-icon-24-arrowleft" label="목록" link @click="goList" />
    </div>
    <div class="ibk-write">
      <div class="ibk-inner">
        <Card>
          <template #content>
            <div class="ibk-write-content">
              <div class="ibk-write-list">
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>제목</p>
                  </div>
                  <div class="ibk-write-list-item__input">
                    <InputText v-model="params.bltApowTtlNm" type="text" size="large" placeholder="제목을 입력해 주세요."
                      class="w-full" />
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>내용</p>
                  </div>
                  <div class="ibk-write-list-item__input">
                    <froala v-model:value="params.bltApowCon" :tag="'textarea'" :config="editorConfig"></froala>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>첨부파일 <span class="ml-2 text-primary">{{
                      params.commonAttachFileOutList.length ?? 0 }}</span></p>
                  </div>
                  <div class="ibk-write-list-file">
                    <ul>
                      <template v-if="params.commonAttachFileOutList.length ?? 0 > 0">
                        <li v-for="(item, index) in params.commonAttachFileOutList" :item="item"
                          :key="item.atchSqn">
                          <div class="ibk-write-list-file__text">
                            <i class="ibk-icon-24-folder"></i>
                            <div>
                              <p>{{ item.orcpFileNm }}</p>
                            </div>
                            <strong>용량</strong>
                          </div>
                          <div class="ibk-write-list-file__delete">
                            <Button icon="ibk-icon-24-close" link rounded @click="delFile(item, index)" />
                          </div>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
                <div class="ibk-write-list-item">
                  <div class="ibk-write-list-item__title">
                    <p>파일 업로드하기</p>
                  </div>
                  <div class="ibk-write-list-upload">
                    <Toast />
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000 * 1024 * 1024"
                      @upload="onUpload" :auto="true" chooseLabel="파일 업로드" class="w-full" />
                    <div class="ibk-write-list-upload__text">* 1000MB 미만의 파일 최대 1개까지 첨부 가능합니다.</div>
                  </div>
                </div>
              </div>

              <div class="ibk-write-button">
                <div class="ibk-write-button__button">
                  <Button label="취소" severity="secondary" outlined size="large" @click="cancelEdit" />
                  <Button v-if="procType === 'MOD'" label="삭제" severity="secondary" outlined size="large"
                    class="text-red-500" @click="delBoardContents" />
                  <Button label="등록하기" severity="primary" size="large" @click="saveEdit" :disabled="isSave" />
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
import { type CommunityBoard, type CommunityBoardContentsOptions, type CommunityBoardContents, useCommunityStore } from '~/domains/community';
import type { CommonAttachFileDeleteInVo, CommonAttachFileOutVo } from '../../../../api-client';
import Utility from '~/lib/Utility';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const router = useRouter();
const route = useRoute();
const store = useCommunityStore();

const boardOptions = ref<CommunityBoard>();
const isSave = ref<boolean>(false);

const params = reactive<CommunityBoardContents>({
  blbrNo: undefined,
  blbrCtgyId: undefined,
  blbrPtngId: undefined,
  bltApowCon: '',
  bltApowTtlNm: '',
  useYn: 'Y',
  commonAttachFileOutList: [],
  commonAttachFileDeleteInList: []
});

const procType = computed<string>(() => route.query.blbrPtngId ? 'MOD' : 'ADD');

const goList = () => {
    router.push('/community');
}

const secretmessage = ref();

const editorConfig = ref({
  height: 300,
});

const toast = useToast();

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const delFile = (item: any, index: number) => {
  const targetFile = reactive<CommonAttachFileDeleteInVo>({
    atchId: item.atchId,
    atchSqn: item.atchSqn,
    objcDsncVl: item.objcDsncVl
  });
  params.commonAttachFileDeleteInList?.push(targetFile);

  params.commonAttachFileOutList?.splice(index, 1);
}

const saveEdit = async () => {
  if (isSave.value) return;
  try {
    isSave.value = true;
    let result;
    let path;
    if (procType.value === 'ADD') {
      result = await store.saveBoardContents(params);
      path = `/community`
    } else {
      result = await store.modBoardContents(params);
      path = `/community/${params.blbrPtngId}`
    }

    if (result.success) {
      Utility.alert('정상 처리 되었습니다');
      router.replace(path);
    }
  } finally {
    isSave.value = false
  }
}

const delBoardContents = async () => {
  if (!confirm('정말 삭제하시겠습니까?')) return;

  const result = await store.delBoardContents(params);

  if (result.success) {
    Utility.alert('정상 처리 되었습니다');
    router.replace('/community');
  }
}

const cancelEdit = () => {
  router.go(-1);
}

onBeforeMount(async () => {
  if (route.query.blbrPtngId) {
    await store.getBoardContentsDetail({ blbrPtngId: Number(route.query.blbrPtngId) });
    Object.assign(params, store.communityBoardContents);
  }
})
</script>
