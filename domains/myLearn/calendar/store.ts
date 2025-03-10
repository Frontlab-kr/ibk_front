import type { ArhdStudyCalendar, MyStudyCalendar, ArhdCalendarListOption, StudyCalendar } from '~/domains/myLearn/calendar/type';
import Utility from '~/lib/Utility';
// import type { } from '../../api-client';

interface State {
  currentTab: string|null,
  calendarList: Array<StudyCalendar>,
}

export const useCalendarStore = defineStore("calendar", {
  persist: false,
  state: (): State => ({
    currentTab: '0',
    calendarList: [],
  }),
  actions: {
    async getMyCalendar(params: any) {
      const data = await $wrap($request().inqMyStudyCalendarList(params));
      const result = $response<Array<MyStudyCalendar>>(data);
      if (data.data.success) {
        this.calendarList = [];
        result.response.forEach((item) => {
          const calendar = reactive<StudyCalendar>({});
          Object.assign(calendar, item);
          calendar.id = item.dutyEdctCd+"-"+item.edctDsprNo?.toString();
          calendar.title = item.dutyEdctNm;
          calendar.start = item.lrngSttgTs;
          calendar.end = item.lrngFnshTs;
          calendar.type = 'my';

          this.calendarList.push(calendar);
        });
      }
      return data.data.success;
    },
    async getMyArhdCalendar(params: string) {
      const data = await $wrap($request().inqArhdStudyCalendarList({ arhdDsncVl: params }));
      const result = $response<Array<ArhdStudyCalendar>>(data);
      if (data.data.success) {
        this.calendarList = [];
        result.response.forEach((item) => {
          const calendar = reactive<StudyCalendar>({});
          Object.assign(calendar, item);
          calendar.id = item.dutyEdctCd+"-"+item.edctDsprNo?.toString();
          calendar.title = item.dutyEdctNm;
          calendar.start = item.lrngSttgTs;
          calendar.end = item.lrngFnshTs;
          calendar.type = 'arhd';

          this.calendarList.push(calendar);
        });
      }
      return data.data.success;
    }
  },
  getters: {
  }
});
