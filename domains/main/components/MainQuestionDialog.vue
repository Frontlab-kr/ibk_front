<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-write">
        <template #header>
            <div class="ibk-dialog-back">
                <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
            </div>
            <div class="ibk-dialog-write__title">1:1 문의</div>
        </template>
        <div class="ibk-dialog-write-contents">
            <div class="ibk-write-content">
                <div class="ibk-write-list">
                    <div class="ibk-write-list-item">
                        <div class="ibk-write-list-item__title">
                            <p>제목</p>
                        </div>
                        <div class="ibk-write-list-item__input">
                            <InputText type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full"
                                v-model="params.blbrQstnTtlNm" />
                        </div>
                    </div>
                    <div class="ibk-write-list-item">
                        <div class="ibk-write-list-item__title">
                            <p>내용</p>
                        </div>
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
                                <li v-for="(file, index) of params.uploadFileList"
                                    :key="file.name + file.type + file.size">
                                    <NuxtLink to="/" class="ibk-write-list-file__text">
                                        <i class="ibk-icon-24-folder"></i>
                                        <p>{{ file.name }}</p>
                                        <strong>{{ formatSize(file.size) }}</strong>
                                    </NuxtLink>
                                    <div class="ibk-write-list-file__delete">
                                        <Button icon="ibk-icon-24-close" link rounded
                                            @click="fileRemove(null, index)" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="params.questionAttachFileOutList && params.questionAttachFileOutList.length > 0"
                        class="ibk-write-list-item">
                        <div class="ibk-write-list-item__title">
                            <p>첨부파일 <span class="ml-2 text-primary">{{ params.questionAttachFileOutList.length }}</span>
                            </p>
                        </div>
                        <div class="ibk-write-list-file">
                            <ul>
                                <li v-for="(item, index) of params.questionAttachFileOutList"
                                    :key="item.orcpFileNm + index">
                                    <NuxtLink to="/" class="ibk-write-list-file__text">
                                        <i class="ibk-icon-24-folder"></i>
                                        <p>{{ item.orcpFileNm }}</p>
                                        <!--<strong>{{formatSize(file.size)}}</strong>-->
                                    </NuxtLink>
                                    <div class="ibk-write-list-file__delete">
                                        <Button icon="ibk-icon-24-close" link rounded
                                            @click="fileRemove(item, index)" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ibk-write-list-item">
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
                            <Toast />
                            <FileUploadForm v-model="params.uploadFileList" accept=".svg, .png, .jpg, .jpeg, .gif, .pdf, .pptx, .xlsx, .docx, .hwp, .mp4" />
                            <!-- <div class="ibk-write-list-upload__text">* 10MB 미만의 파일 최대 3개까지 첨부 가능합니다.</div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="ibk-write-button">
                <div class="ibk-write-button__check">
                    <Checkbox v-model="params.secrtPtngYn" inputId="secrtPtngYn" name="secrtPtngYn" value="yes" />
                    <label for="secrtPtngYn" class="ml-2"> 비밀글로 등록하기 </label>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-write-button">
                <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="visible = false" />
                <Button label="등록하기" severity="primary" size="large" class="w-full" @click="saveQuestion" />
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import type { CommonAttachFileOutVo } from '~/api-client';
import FileUploadForm from '~/components/FileUploadForm.vue';
import { useSupportStore } from '~/domains/support/store';
import type { QuestionOptions } from '~/domains/support/type';

const { visible } = defineModels<{
    visible: boolean;
}>();

const isSave = ref<boolean>(false);
const store = useSupportStore();
const saveText = ref<String>('등록');
const procType = ref<String>('ADD');
const editorConfig = ref({
    // height: 300,
});
const toast = useToast();

const params = reactive<QuestionOptions>({
    blbrQstnId: 0,
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

const formatSize = (bytes: number) => {
    const k = 1024;
    const dm = 3;
    const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
const fileRemove = (file: CommonAttachFileOutVo, index: number) => {
    if (null == file) {
        params.uploadFileList.splice(index, 1);
    } else {
        params.questionDeleteAtchList.push(file);
        params.questionAttachFileOutList.splice(index, 1);
    }
}

const removeTags = (data: any) => {
    const div = document.createElement('div');
    div.innerHTML = data;
    return div.textContent || div.innerText || '';
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

const saveQuestion = async () => {
    if (validation()) {
        let result;
        if (!isSave.value) {
            isSave.value = true;
            await $isLoading(true);

            try {
                if (procType.value === 'ADD') {
                    result = await store.saveQuestion(params);
    
                    if (result.success) {
                        alert(`문의가 ${saveText.value}되었습니다`);
                        navigateTo('/support');
                    } else {
                        alert(`문의 ${saveText.value}중 오류가 발생하였습니다.`);
                    }
                }
            } finally {
                await $isLoading(false);
                isSave.value = false;
            }
        }
    }
}

onMounted(async () => {
    // 메인에서는 신규등록만 가능
    saveText.value = '등록';
    procType.value = 'ADD';
});
</script>