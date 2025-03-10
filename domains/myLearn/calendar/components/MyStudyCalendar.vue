<template>

        <div class="ibk-lectureroom-my-review">
            <h2>학습일정</h2>
            <Tabs :value="store.currentTab ?? ''">
                <TabList>
                    <Tab value="0" @click="changeTab('0')">MY 학습일정</Tab>
                    <Tab value="1" @click="changeTab('1')">부점연수신청현황(부점일정)</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0" v-if="store.currentTab === '0'">
                        <div class="ibk-fullcalendar">
                            <FullCalendar :options="myCalendarOptions">
                                <template v-slot:eventContent="arg">
                                    <div style="padding: 4px;">
                                        <span>{{ arg.event.title }}</span>
                                    </div>
                                </template>
                            </FullCalendar>
                        </div>
                    </TabPanel>
                    <TabPanel value="1" v-if="store.currentTab === '1'">
                        <div class="ibk-fullcalendar">
                            <FullCalendar :options="myArhdCalendarOptions">
                                <template v-slot:eventContent="arg">
                                    <div style="padding: 4px;">
                                        <span>{{ arg.event.title }}</span>
                                    </div>
                                </template>
                            </FullCalendar>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>


    <CalendarDetailDialog v-if="calendarDialogParams.visible" v-model:visible="calendarDialogParams.visible"
        :item="calendarDialogParams.item" />
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

const modal01 = ref(false);

// import pubMypagehead from '@/components/pubMypagehead.vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { useCalendarStore } from '../store';
import { useAuthStore } from '~/domains/auth';
import { useMyLearnStore } from '../../store';
import CalendarDetailDialog from './CalendarDetailDialog.vue';

// 퍼블상 eventColor: '#667085'
const myCalendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    locale: 'ko', // 한글로 설정
    timeZone: 'UTC',
    buttonText: {
        today: '오늘',
        month: '월',
        week: '주',
        day: '일',
        list: '목록',
    },
    firstDay: 1,
    initialView: 'dayGridMonth',
    events: [],
    eventClick: (info) => {
        clickEvent(info.event.id);
    },
    dayCellContent: (info) => {
        let dayNumber = document.createElement('a');
        dayNumber.classList.add('fc-daygrid-day-number');
        dayNumber.innerHTML = info.dayNumberText.replace("일", "");
        if (info.view.type == "dayGridMonth") {
            return {
                html: dayNumber.outerHTML
            };
        }
        return {
            domNodes: []
        };
    },
});
const myArhdCalendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    locale: 'ko', // 한글로 설정
    timeZone: 'UTC',
    buttonText: {
        today: '오늘',
        month: '월',
        week: '주',
        day: '일',
        list: '목록',
    },
    firstDay: 1,
    initialView: 'dayGridMonth',
    events: [],
    eventClick: (info) => {
        clickEvent(info.event.id);
    },
    dayCellContent: (info) => {
        let dayNumber = document.createElement('a');
        dayNumber.classList.add('fc-daygrid-day-number');
        dayNumber.innerHTML = info.dayNumberText.replace("일", "");
        if (info.view.type == "dayGridMonth") {
            return {
                html: dayNumber.outerHTML
            };
        }
        return {
            domNodes: []
        };
    },
});
const calendarDialogParams = reactive({
    visible: false,
    item: undefined,
});
const arhdParams = ref('');

const store = useCalendarStore();
const authStore = useAuthStore();
const myLearnStore = useMyLearnStore();

const router = useRouter();

const handleStudyIngClick = () => {
    // console.log('학습현황 clicked');
    router.push('/myLearn');
};
const handleStudyScheduleClick = () => {
    // console.log('학습일정 clicked');
    router.push('/myLearn/calendar');
};
const handleStudyHistoryClick = () => {
    // console.log('연수내역 clicked');
    router.push('/myLearn');
};
const handleStudyLikeClick = () => {
    // console.log('찜한연수 clicked');
    router.push('/myLearn?studyRoomTab=interest');

};
const handleStudyReviewClick = () => {
    // console.log('수강후기 clicked');
    router.push('/myLearn/review');
};

onBeforeMount(async () => {
    const params = {};
    // arhdParams.value = '000';
    arhdParams.value = authStore.userInfo.arhdDsncVl??'000';
    setMyCalendar();
});

const setMyCalendar = async () => {
    await store.getMyCalendar({});
    const fullCalendarEvents = computed(()=>
        store.calendarList.map((v)=>{
            const endDate = new Date(v.end);
            const computedEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), (endDate.getDate() + 1));
            return {
                ...v,
                end: computedEndDate.getFullYear() + "-" + (computedEndDate.getMonth() + 1) + "-" + (computedEndDate.getDate() < 10 ? "0" + computedEndDate.getDate() : computedEndDate.getDate())
            }
        })
    )
    myCalendarOptions.value.events = fullCalendarEvents;
};
const setMyArhdCalendar = async () => {
    await store.getMyArhdCalendar(arhdParams.value);
    const fullCalendarEvents = computed(()=>
        store.calendarList.map((v)=>{
            const endDate = new Date(v.end);
            const computedEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), (endDate.getDate() + 1));
            return {
                ...v,
                end: computedEndDate.getFullYear() + "-" + (computedEndDate.getMonth() + 1) + "-" + (computedEndDate.getDate() < 10 ? "0" + computedEndDate.getDate() : computedEndDate.getDate())
            }
        })
    )
    myArhdCalendarOptions.value.events = fullCalendarEvents;
};

const changeTab = async (tabIndex: string) => {
    if (tabIndex == '0') await setMyCalendar();
    else if (tabIndex == '1') await setMyArhdCalendar();
    store.currentTab = tabIndex;
};

const clickEvent = (index: string) => {
    // console.log(index);
    const targetSchedule = store.calendarList.find((v) => v.id == index);
    calendarDialogParams.item = targetSchedule;
    calendarDialogParams.visible = true;
};

</script>

<style scope>
.ibk-lectureroom-my-review {
    padding-top: 40px;
}
</style>
