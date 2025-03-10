<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
        <template #header>
            <div class="ibk-dialog-back">
                <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
            </div>
            <template v-if="props.item.type == 'my'">
                <div class="ibk-dialog-apply__title">MY학습일정</div>
            </template>
            <template v-else-if="props.item.type == 'arhd'">
                <div class="ibk-dialog-apply__title">부점연수신청현황(부점일정)</div>
            </template>
        </template>
        <div class="ibk-dialog-apply-contents">
            <div class="ibk-dialog-apply-item">
                <div class="ibk-dialog-apply-item-head">
                    <div class="ibk-dialog-apply-item-head__title">일정정보</div>
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
                                <template v-if="props.item.type == 'my'">
                                    <tr>
                                        <th>기본정보</th>
                                        <td colspan="3">{{ props.item.deptDsncNm }}・{{ props.item.jbttDsncNm }}・{{ props.item.userNm }}</td>
                                    </tr>
                                </template>
                                <tr>
                                    <th>연수명</th>
                                    <td colspan="3">{{ props.item.dutyEdctNm }}</td>
                                </tr>
                                <tr>
                                    <th>연수일정</th>
                                    <td colspan="3">
                                        {{ props.item.lrngSttgTs }} ~ {{ props.item.lrngFnshTs }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>교육시간</th>
                                    <td>{{ props.item.lrngAcknTim }}시간</td>
                                    <th>교육장소</th>
                                    <td>{{ props.item.fcltPlacNm }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mo">
                        <table>
                            <tbody>
                                <template v-if="props.item.type == 'my'">
                                    <tr>
                                        <th>기본정보</th>
                                    </tr>
                                    <tr>
                                        <td>{{ props.item.deptDsncNm }}・{{ props.item.jbttDsncNm }}・{{ props.item.userNm }}</td>
                                    </tr>
                                </template>
                                <tr>
                                    <th>연수명</th>
                                </tr>
                                <tr>
                                    <td>{{ props.item.dutyEdctNm }}</td>
                                </tr>
                                <tr>
                                    <th>연수일정</th>
                                </tr>
                                <tr>
                                    <td>
                                        {{ props.item.lrngSttgTs }} ~ {{ props.item.lrngFnshTs }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>교육시간</th>
                                </tr>
                                <tr>
                                    <td>{{ props.item.lrngAcknTim }}시간</td>
                                </tr>
                                <tr>
                                    <th>교육장소</th>
                                </tr>
                                <tr>
                                    <td>{{ props.item.fcltPlacNm }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="ibk-dialog-apply-button">
                <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import type { StudyCalendar } from '../type';

const { visible } = defineModels<{
  visible: boolean;
}>();
const props = defineProps<{
    item: StudyCalendar,
}>();

const closeDialog = () => {
    visible.value = false;
}
</script>