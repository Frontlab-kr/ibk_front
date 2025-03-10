<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
        <template #header>
            <div class="ibk-dialog-apply__title">취소 · 회차 변경</div>
        </template>

        <div class="ibk-dialog-apply-item">
            <div class="ibk-dialog-apply-item-head">
                <div class="ibk-dialog-apply-item-head__title">현재 차수 정보</div>
            </div>
            <div class="ibk-dialog-apply-item__table">
                <div class="pc">
                    <table>
                        <colgroup>
                            <col style="width: 120px" />
                            <col style="width: 240px" />
                            <col style="width: 120px" />
                            <col style="width: 240px" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>차수명</th>
                                <td colspan="3">{{ myLearnStore.selectedProductForChangeDegreeDialog?.dutyEdctNm }}</td>
                            </tr>
                            <tr>
                                <th>연수기간</th>
                                <td>{{ formatDateRange(myLearnStore.selectedProductForChangeDegreeDialog?.lrngSttgTs,
                                    myLearnStore.selectedProductForChangeDegreeDialog?.lrngFnshTs) }}</td>
                                <th>동시평가일</th>
                                <td>{{ formatDate(myLearnStore.selectedProductForChangeDegreeDialog?.lrngSttgTs) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mo">
                    <table>
                        <colgroup>
                            <col style="width: 50%" />
                            <col style="width: 50%" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th colspan="2" class="text-left">차수명</th>
                            </tr>
                            <tr>
                                <td colspan="2">{{ myLearnStore.selectedProductForChangeDegreeDialog?.dutyEdctNm }}</td>
                            </tr>
                            <tr>
                                <th class="text-left">연수기간</th>
                                <th class="text-left">동시평가일</th>
                            </tr>
                            <tr>
                                <td>{{ formatDateRange(myLearnStore.selectedProductForChangeDegreeDialog?.lrngSttgTs,
                                    myLearnStore.selectedProductForChangeDegreeDialog?.lrngFnshTs) }}</td>
                                <td>{{ formatDate(myLearnStore.selectedProductForChangeDegreeDialog?.lrngSttgTs) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="grid">
                <div class="col-12">
                    <div class="field">
                        <label>구분</label>
                        <div class="ibk-radio">
                            <div class="ibk-radio-item">
                                <RadioButton v-model="studyRoomCourseDegreeCancel.atlcMdcnDcd" inputId="radio1"
                                    :value="StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.C" name="hihi" />
                                <label for="radio1" class="ml-2">취소</label>
                            </div>
                            <div class="ibk-radio-item">
                                <RadioButton v-model="studyRoomCourseDegreeCancel.atlcMdcnDcd" inputId="radio2"
                                    :value="StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.M" name="hihi" />
                                <label for="radio2" class="ml-2">회차변경</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12"
                    v-if="studyRoomCourseDegreeCancel.atlcMdcnDcd === StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.M">
                    <div class="field">
                        <label>변경 차수명</label>

                        <Select size="large" class="w-full" v-model="studyRoomCourseDegreeCancel.targetEdctDsprNo"
                            :options="myLearnStore.studyRoomCourseDegreeCancelList"
                            :optionLabel="(item: CourseDegreeOutVo) => item.dutyEdctNm"
                            :optionValue="(item: CourseDegreeOutVo) => item.edctDsprNo" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="field">
                        <label>사유</label>
                        <Textarea class="w-full" v-model="studyRoomCourseDegreeCancel.atlcMdfcCnclCon" />
                    </div>
                </div>
            </div>
            <div class="ibk-dialog-apply-item-check">
                <Checkbox v-model="confirmChange" inputId="checkbox1" value="Y" />
                <label for="checkbox1" class="ml-2"> {{ studyRoomCourseDegreeCancel.atlcMdcnDcd ===
                    StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.M ? '다음 회차로 변경 신청 합니다.' : '취소 신청 합니다.'
                    }} </label>
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-apply-button">
                <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="visible = false" />
                <Button label="확인" severity="primary" size="large" class="w-full" @click="onChangeDegree"
                    :disabled="!confirmChange" />
            </div>
        </template>
    </Dialog>
</template>
<script setup lang="ts">
import { StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum, type CourseDegreeOutVo, type StudyRoomCourseDegreeCancelInVo } from '../../../api-client';
import { useMyLearnStore } from '../store';

const { visible } = defineModels<{
    visible: boolean;
}>();
const confirmChange = ref<boolean>(false);
const myLearnStore = useMyLearnStore();
const studyRoomCourseDegreeCancel = reactive<StudyRoomCourseDegreeCancelInVo>({

    atlcMdcnDcd: StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.C,
})
const onChangeDegree = async () => {
    // console.log('onChangeDegree');
    // console.log(myLearnStore.selectedProductForChangeDegreeDialog);

    try {
        if (studyRoomCourseDegreeCancel.atlcMdcnDcd === StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.M) {
            if ($isEmpty(studyRoomCourseDegreeCancel.targetEdctDsprNo)) {
                return $alert('교육 차수명을 선택 해 주세요.')
            }
        }
        await myLearnStore.changeDegree({
            ...myLearnStore.selectedProductForChangeDegreeDialog,
            ...studyRoomCourseDegreeCancel,
        });
        // ok
        await $alert(
            `${studyRoomCourseDegreeCancel.atlcMdcnDcd === StudyRoomCourseDegreeCancelInVoAtlcMdcnDcdEnum.C ? '취소 신청 완료' : '회차변경 신청 완료'}`,
        );
        visible.value = false;
    } catch (error) {
        // console.log(error);
    }
};

onMounted(async () => {
    await myLearnStore.getStudyRoomCourseDegreeCancelList({
        edctDsprNo: myLearnStore.selectedProductForChangeDegreeDialog?.edctDsprNo,
        dutyEdctCd: myLearnStore.selectedProductForChangeDegreeDialog?.dutyEdctCd,
    });
});
</script>
