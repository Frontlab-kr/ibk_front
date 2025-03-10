<template>
    <table>
        <colgroup>
            <col style="width: 160px;" />
            <!-- <col style="width: 88px" /> -->
            <col style="width: 292px" />
            <col style="width: 88px" />
            <col style="width: 88px" />
            <col style="width: 194px" />
            <col style="width: 60px" />
            <col style="width: 86px" />
            <col style="width: 72px" />
            <col style="width: 72px" />
        </colgroup>
        <thead>
            <tr>
                <th class="text-left">교육분류</th>
                <!-- <th>스킬</th> -->
                <th class="text-left">연수명</th>
                <th>교육방식</th>
                <th>학습시간</th>
                <th class="text-left">기간</th>
                <th>점수</th>
                <th>스킬스코어</th>
                <th>평점여부</th>
                <th>수료여부</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in store.studyRoomHistory?.contents" :key="item.cncrId">
                <td class="text-left" style="max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ item.edctClsfVlPath }}</td>
                <!-- <td>{{ item.edctMthdTcd }}</td> -->
                <td class="text-left">
                    <strong>{{ item.dutyEdctNm }}</strong>
                </td>
                <td>{{ getEdctMthdName(item.edctMthdTcd) }}</td>
                <td>{{ item.lrngAcknTim }}</td>
                <td class="text-left">{{ formatDate(item.lrngSttgTs) }} - {{ formatDate(item.lrngFnshTs) }}</td>
                <td>{{ item.ctcrScr }}</td>
                <td>{{ item.ctcrScr }}</td>
                <td>{{ item.evltYn }}</td>
                <td>{{ item.ctcrYn }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import Utility from '../../../lib/Utility';
import { useMyLearnStore } from '../store';

const store = useMyLearnStore();
const edctMthdList = Utility.getCommonCode('LMS00008')
const getEdctMthdName = (edctMthdTcd: string) => {
    return edctMthdList.find((item: any) => item.cmcdVl === edctMthdTcd)?.cmcdVlNm || '';
};
</script>
