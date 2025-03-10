import type { ArhdStudyCalendarListInVo, ArhdStudyCalendarOutVo, MyStudyCalendarOutVo } from "~/api-client";

export interface MyStudyCalendar extends MyStudyCalendarOutVo {
}
export interface ArhdStudyCalendar extends ArhdStudyCalendarOutVo {
}
export interface ArhdCalendarListOption extends ArhdStudyCalendarListInVo {
}
export interface StudyCalendar extends MyStudyCalendarOutVo, ArhdStudyCalendarOutVo {
    id?: string;
    title?: string;
    start?: string;
    end?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    type?: string;
}