<template>
    <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-print">
        <template #header>
            <div class="ibk-mobile-back">
                <Button icon="ibk-icon-24-arrowleft" label="연수 내역 인쇄" link @click="print"/>
            </div>
            <div class="ibk-dialog-print__title">연수 내역 인쇄</div>
        </template>

        <div class="ibk-dialog-print-item">
            <div class="pc">
                <table>
                    <colgroup>
                        <col style="width: 160px" />
                        <col style="width: 400px" />
                        <col style="width: 160px" />
                        <col style="width: 400px" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>성명</th>
                            <td>{{ store.studyRoomHistory?.contents[0]?.userNm }}</td>
                            <th>소속</th>
                            <td>{{ store.studyRoomHistory?.contents[0]?.deptDsncNm }}</td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>{{ formatDate(store.studyRoomHistory?.contents[0]?.birtYmd) }}</td>
                            <th>직책</th>
                            <td>{{ store.studyRoomHistory?.contents[0]?.rsptDsncNm }}</td>
                        </tr>
                        <tr>
                            <th>현직급일</th>
                            <td colspan="3">{{ formatDate(store.studyRoomHistory?.contents[0]?.jbttYmd) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mo">
                <table>
                    <tbody>
                        <tr>
                            <th class="text-left">성명</th>
                        </tr>
                        <tr>
                            <td>{{ store.studyRoomHistory?.contents[0]?.userNm }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">소속</th>
                        </tr>
                        <tr>
                            <td>{{ store.studyRoomHistory?.contents[0]?.deptDsncNm }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">생년월일</th>
                        </tr>
                        <tr>
                            <td>{{ formatDate(store.studyRoomHistory?.contents[0]?.birtYmd) }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">직책</th>
                        </tr>
                        <tr>
                            <td>{{ store.studyRoomHistory?.contents[0]?.rsptDsncNm }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">현직급일</th>
                        </tr>
                        <tr>
                            <td>{{ formatDate(store.studyRoomHistory?.contents[0]?.jbttYmd) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="ibk-dialog-print-item">
            <div class="ibk-dialog-print-item-head">
                <div class="ibk-dialog-print-item-head__title">상세내역</div>
            </div>
            <div class="ibk-lectureroom-my-table-table">
                <div class="ibk-table ibk-table--scroll-x">
                    <MyLearnHistoryTable />
                </div>
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-print-button">
                <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="visible = false" />
                <Button label="인쇄하기" severity="primary" size="large" class="w-full" @click="print" />
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import Utility from '../../../lib/Utility';
import { useMyLearnStore } from '../store';
const { visible } = defineModels<{
    visible: boolean;
}>();
const store = useMyLearnStore();

const isPrinting = ref(false);
const edctMthdList = Utility.getCommonCode('LMS00008')
const getEdctMthdName = (edctMthdTcd?: string) => {
    return edctMthdList.find((item: any) => item.cmcdVl === edctMthdTcd)?.cmcdVlNm || '';
};
const print = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // Get user info and table data
    const userInfo = document.querySelector('.ibk-dialog-print-item .pc')?.innerHTML;
    const tableData = store.studyRoomHistory?.contents || [];

    // Create table HTML
    const tableHTML = `
        <table class="print-table">
            <colgroup>
                <col style="width: 160px" />
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
                ${tableData.map(item => `
                    <tr>
                        <td class="text-left" style="max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.edctClsfVlPath || ''}</td>
                        <td class="text-left">
                            <strong>${item.dutyEdctNm || ''}</strong>
                        </td>
                        <td>${getEdctMthdName(item.edctMthdTcd)}</td>
                        <td>${item.lrngAcknTim || ''}</td>
                        <td class="text-left">${formatDate(item.lrngSttgTs)} - ${formatDate(item.lrngFnshTs)}</td>
                        <td>${item.ctcrScr || ''}</td>
                        <td>${item.ctcrScr || ''}</td>
                        <td>${item.evltYn || ''}</td>
                        <td>${item.ctcrYn || ''}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    const printStyles = `
        <style>
            @media print {
                body {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f5f5f5;
                }
                .mo {
                    display: none;
                }
                .print-table {
                    margin-top: 20px;
                }
                .print-table th {
                    background-color: #f5f5f5;
                    font-weight: bold;
                }
                @page {
                    size: A4 landscape;
                    margin: 1cm;
                }
                .text-left {
                    text-align: left !important;
                }
                .print-table strong {
                    font-weight: bold;
                }
                .print-table td, .print-table th {
                    text-align: center;
                }
            }
        </style>
    `;

    // Set the content of the new window
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>연수 내역</title>
            ${printStyles}
        </head>
        <body>
            <div class="user-info">
                ${userInfo || ''}
            </div>
            <div class="table-info">
                <div class="ibk-dialog-print-item-head">
                    <div class="ibk-dialog-print-item-head__title">상세내역</div>
                </div>
                ${tableHTML}
            </div>
        </body>
        </html>
    `);

    // Wait for content to load then print
    printWindow.document.close();
    printWindow.onload = () => {
        printWindow.print();
        // printWindow.close();
    };
};


</script>
