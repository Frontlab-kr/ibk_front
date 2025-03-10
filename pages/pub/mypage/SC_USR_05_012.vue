<template>
  <pubMypagehead />
  <div class="ibk-inner">
    <div class="ibk-payment">
      <div class="ibk-payment-head ibk-payment-head--tab">
        <h2>학습일정</h2>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">MY 학습일정</Tab>
          <Tab value="1">부점연수신청현황(부점일정)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-fullcalendar">
              <FullCalendar :options="calendarOptions" />
            </div>
          </TabPanel>
          <TabPanel value="1"> </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-apply__title">MY 학습일정</div>
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
                <tr>
                  <th>기본정보</th>
                  <td colspan="3">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수명</th>
                  <td colspan="3">연수명이 노출됩니다. 연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>연수일정</th>
                  <td colspan="3">
                    2028.01.27 <span class="text-slate-400">09:00-09:50</span> ~ 2028.01.27
                    <span class="text-slate-400">10:00-11:50</span>
                  </td>
                </tr>
                <tr>
                  <th>교육시간</th>
                  <td>60시간</td>
                  <th>교육장소</th>
                  <td>본사 회의실</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>기본정보</th>
                </tr>
                <tr>
                  <td>본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수명</th>
                </tr>
                <tr>
                  <td>연수명이 노출됩니다. 연수명이 노출됩니다.</td>
                </tr>
                <tr>
                  <th>연수일정</th>
                </tr>
                <tr>
                  <td>
                    2028.01.27 <span class="text-slate-400">09:00-09:50</span> ~ 2028.01.27
                    <span class="text-slate-400">10:00-11:50</span>
                  </td>
                </tr>
                <tr>
                  <th>교육시간</th>
                </tr>
                <tr>
                  <td>60시간</td>
                </tr>
                <tr>
                  <th>교육장소</th>
                </tr>
                <tr>
                  <td>본사 회의실</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="MY 학습일정"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

const modal01 = ref(false);

import pubMypagehead from '@/components/pubMypagehead.vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  },
  locale: 'ko', // 한글로 설정
  buttonText: {
    today: '오늘',
    month: '월간',
    week: '주간',
    day: '일간',
    list: '목록',
  },
  firstDay: 1,
  events: [
    // 일정을 추가합니다
    {
      title: '회의',
      start: '2024-10-15T10:00:00',
      end: '2024-10-15T11:00:00',
      description: '팀 미팅',
      backgroundColor: '#ff9999', // 배경색
      borderColor: '#cc0000', // 테두리색
    },
    {
      title: '발표 준비',
      start: '2024-10-16T14:00:00',
      end: '2024-10-16T16:00:00',
      description: '발표 자료 준비',
      backgroundColor: '#99ccff', // 배경색
      borderColor: '#3399ff', // 테두리색
    },
    {
      title: '마감일',
      start: '2024-10-18T14:00:00',
      end: '2024-10-28T16:00:00',
      description: '프로젝트 마감일',
      backgroundColor: '#EAF3FE', // 배경색
      borderColor: '#EAF3FE', // 테두리색
      textColor: '#151515',
    },
  ],
};
</script>
