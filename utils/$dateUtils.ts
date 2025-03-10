import dayjs from 'dayjs';

export function formatDate(dateString: string | null, isWithWeekday: boolean = false, withTime = false): string {
  if (!dateString) return '';

  const date = new Date(dateString);

  if (withTime) {
    // 날짜와 시간 모두 표시
    if (isWithWeekday) {
      // 요일과 시간 포함
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}.${['일', '월', '화', '수', '목', '금', '토'][date.getDay()]} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
    // 시간만 포함
    return dayjs(dateString).format('YYYY-MM-DD HH:mm');
  }

  // 기존 날짜 포맷
  if (isWithWeekday) {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}.${['일', '월', '화', '수', '목', '금', '토'][date.getDay()]}`;
  }
  return dayjs(dateString).format('YYYY-MM-DD');
}

export function formatDateRange(startDate: undefined|string | null, endDate: undefined|string | null, withTime = false): string {
  if (!startDate || !endDate) return '';
  return `${formatDate(startDate, false, withTime)} ~ ${formatDate(endDate, false, withTime)}`;
}

export function formatEndDate(date?: string): string {
  if (!date) return '';
  const endDate = new Date(date);
  // return `${endDate.getFullYear()}.${(endDate.getMonth() + 1).toString().padStart(2, '0')}.${endDate.getDate().toString().padStart(2, '0')} ${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}까지`;
   return `${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')} 까지`;
}
