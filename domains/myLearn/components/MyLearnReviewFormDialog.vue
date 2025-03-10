<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-review">
        <template #header>
            <div class="ibk-dialog-back">
                <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
            </div>
            <div class="ibk-dialog-review__title">{{ isUpdate ? "후기 수정" : "후기 쓰기" }}</div>
        </template>

        <div class="ibk-dialog-review-write">
            <div class="ibk-dialog-review-write-head">
                <div class="ibk-dialog-review-write-head-thumb">
                    <img src="https://picsum.photos/187/104" alt="" />
                </div>
                <div class="ibk-dialog-review-write-head-title">
                    <strong>{{ props.item.dutyEdctNm }}</strong>
                    <div class="ibk-dialog-review-write-head-text">
                        <!-- 인재개발부
                        <hr />
                        CP명 -->
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="col-12">
                    <div class="field">
                        <label>별점등록</label>
                        <div>
                            <Rating v-model="params.rvwScr" :stars="5" class="p-rating--xlarge" />
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="field">
                        <label>후기작성</label>
                        <div>
                            <Textarea placeholder="후기를 입력해주세요." v-model="params.rvwCon" class="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-review-button">
                <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
                <Button label="등록" severity="primary" size="large" class="w-full" @click="saveReview" />
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { type CourseReviewContents, type CourseReviewInVo, useMyLearnStore } from '../store';

const { visible } = defineModels<{
  visible: boolean;
}>();
const props = defineProps<{
    item: CourseReviewContents,
}>();
const emits = defineEmits<{
  (e: 'refresh', isRefresh: boolean): void;
}>();

const params = reactive<CourseReviewInVo>({
    dataSqn: 0,
    dutyEdctCd: "",
    edctDsprNo: 0,
    rvwScr: 0,
    rvwCon: "",
    useYn: ""
});

const isUpdate = !(props.item.rvwScr == null);
const isSave = ref<boolean>(false);

const store = useMyLearnStore();

onBeforeMount(()=>{
  if(props.item) {
    Object.assign(params, props.item);
    // console.log('params', params);
  }
});

const closeDialog = () => {
  visible.value = false;
};

const saveReview = async () => {
    if(isSave.value) return;
    try {
        isSave.value = true;
        let result;
        if(isUpdate) {
            result = await store.modCourseReview(params);
        } else {
            result = await store.saveCourseReview(params);
        }

        // console.log(result);

        if(result.success) {
            alert('정상 처리 되었습니다');
            emits('refresh', false);
            closeDialog();
        }
    } finally {
        isSave.value = false
    }
}
</script>
