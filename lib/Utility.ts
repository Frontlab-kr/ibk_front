// @ts-ignore
import * as uuid from 'uuid';
// @ts-ignore
import formatNumber from 'simple-format-number';
// @ts-ignore
import removeTrailingZeros from 'remove-trailing-zeros';
import axios from 'axios';
// @ts-ignore
import _ from 'lodash-es';
import moment from 'moment-timezone';
import dayjs from 'dayjs';
// @ts-ignore
import randomstring from 'random-string';
import queryString from 'query-string';
// @ts-ignore
import VsToast from '@vuesimple/vs-toast';
import { type CachedData, LinkType, type PaginationState } from '~/types/globaltype';
import type { CommonCodeAll } from '../domains/base/type';
import { useBaseStore } from '../domains/base';
import { useAuthStore } from '../domains/auth';
import type { AddressOutVo, LogOutInVo, MasterCourseListOutVo, MultimediaOutVo } from '~/api-client';

export default class Utility {
  static moveBack() {
    window.history.back();
  }
  /**
   * 내부망 외부망 여부
   */
  static async isExternalNetwork() {
    const res = await $wrap($request().inqIpCheck(), { isLoading: false });
    const data = $item(res) as { InternalCheck: string; 'X-Forwarded-For': string; remoteAddr: string };
    console.log(data);
    // 내부망 여부 체크
    return (data.InternalCheck.toLowerCase() == 'true') == false;
  }
  static async getVodUrl(vod?: MultimediaOutVo): Promise<string | null> {
    if ($isEmpty(vod)) return null;
    const isExternal = await this.isExternalNetwork();
    if (isExternal) {
      // 외부망
      if (this.isMobile()) {
        // 저화질
        // @ts-ignore
        return vod!.stndBlwRslnCldUrlAdr!;
      } else {
        // 고화질
        // @ts-ignore
        return vod!.stndAbvRslnCldUrlAdr!;
      }
    } else {
      // 내부망
      return $isEmpty(vod?.cldFileUrlAdr) ? vod!.fileUrlAdr! : vod!.cldFileUrlAdr!;
    }
  }
  static getBaseAddress(address: AddressOutVo): string | undefined {
    return `${address.rdnmCcwAdr}${address.bldnNm ? `(${address.bldnNm})` : ''} ${address.rdNm} `;
  }
  static getUserBelong(): string {
    const authStore = useAuthStore();
    return `${authStore.userInfo.blngHdqrDsncNm ?? ''} · ${authStore.userInfo.deptDsncNm ?? ''}`;
  }
  static currentDate() {
    // 한국 시간대로 현재 시간 반환
    return moment().tz('Asia/Seoul');
  }

  static async alertMobileCourse(item: MasterCourseListOutVo) {
    const mobileTypeList = item.mobileList ?? [];
    const isMobile = mobileTypeList.some((v: any) => v.typeId == 'SM');
    if (isMobile) {
      if (Utility.isMobile() == false) {
        await $alert('스마트 러닝 연수입니다.</br>모바일로만 학습이 가능 합니다.');
      }
    }
    return isMobile;
  }
  static isMobile(): boolean {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    );
  }
  static confirmInstance: any;
  static async logout(isLoginExpired = false) {
    const userKey = localStorage.getItem('userKey');
    localStorage.removeItem('userKey');
    const auth = useAuthStore();
    auth.userInfo = {};
    // if (isLoginExpired) {
    //   await $alert('로그인 시간이 만료되었습니다.<br>다시 로그인 해주세요');
    //   localStorage.removeItem('userKey');
    // } else {
    //   const isOk = await $confirm('로그아웃 하시겠습니까?');
    //   if (!isOk) {
    //     return;
    //   }
    //   if (!$isEmpty(userKey)) {
    //     const logoutForm = {
    //       accessToken: userKey,
    //     } as LogOutInVo;
    //     await $request().logout(logoutForm);
    //   }
    // }
    window.location.href = '/login';
  }
  static async confirm(message: string) {
    // confirm alert
    const isYesOrNo = confirm(message);
    return isYesOrNo;
  }
  static notify(
    payload:
      | string
      | {
          title?: string;
          message: string;
          variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
        },
  ) {
    // 문자열이 들어온 경우 info 타입의 알림으로 처리
    if (typeof payload === 'string') {
      VsToast.show({
        message: payload,
        variant: 'info',
        title: 'info',
        position: 'top-right',
      });
      return;
    }

    // 객체인 경우 기존 로직 수행
    if (payload.variant == null) {
      payload.variant = 'info';
    }
    if (payload.title == null) {
      payload.title = 'info';
    }
    // @ts-ignore
    payload.position = 'top-right';
    VsToast.show(payload);
  }
  static isSamePathWithCurrentRoute(url: any) {
    const route = useRoute();
    if (Utility.getPathValue(url) === route.query.path) {
      return true;
    }
    if (this.isSameUrlWithCurrentUrl(url)) {
      return true;
    }
    return false;
  }
  static isSameUrlWithCurrentUrl(url: any) {
    const route = useRoute();
    return url == route.fullPath;
  }

  static isSameUrl(url1: string, url2: string) {
    return url1 == url2;
  }

  static getPathValue(url: string | undefined) {
    if (url == null) {
      return null;
    }
    const parsed = queryString.parse(url.split('?')[1]);
    if ($isEmpty(parsed)) {
      return null;
    }
    const pathValue = parsed.path;
    return pathValue;
  }

  public static async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  static scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  static clearReactiveObject(obj: any) {
    for (const key in obj) {
      obj[key] = null;
    }
  }
  static convertToQueryString(key: string, list: string[]): string {
    return list.map((seq) => `${key}=${seq}`).join('&');
  }

  static dateDefault(regDate: string, isWithTime = true): string {
    if ($isEmpty(regDate)) {
      return '-';
    }
    return this.getDateToString(regDate as any, isWithTime ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD');
  }

  static dateOnly(regDate: string): string {
    if ($isEmpty(regDate)) {
      return '-';
    }
    return this.dateDefault(regDate, false);
  }
  static getDateToString(regDate: Date | string, format = 'YYYY-MM-DD HH:mm:ss'): string {
    const formattedDate = moment(regDate).format(format);
    return formattedDate;
  }

  static getQuestionTypeName(questionType: string): string {
    switch (questionType) {
      case 'S':
        return '주관식';
      case 'M':
        return '객관식';
      case 'E':
        return '서술형';
      case 'P':
        return '실습형';
      default:
        return '해당 타입 없음';
    }
  }

  static alert(message: string) {
    // TODO: 일단 alert로 대체
    alert(message);
  }

  static getCurrentYear() {
    return moment().year();
  }

  static getRandomFileName(originalFileName: string): string {
    try {
      const randomFileName = Utility.randomString(20);
      const extension = originalFileName.split('.').pop();
      return `${randomFileName}.${extension}`;
    } catch (e) {
      console.error(e);
      return Utility.randomString(20);
    }
  }

  public static randomString(howmany = 10): string {
    return randomstring({
      length: howmany,
      numeric: false, // 숫자포함
      letters: true, // 문자열포함.
      special: false, // 특수글자 포함.
      // exclude: ['a', 'b', '1'],
    });
  }

  static getRemainingPeople(discountNum: number | null, paymentEarly: number): number {
    // // console.log('getRemainingPeople', discountNum, paymentEarly)
    if (paymentEarly == null) {
      return discountNum ?? 0;
    }
    const result = (discountNum ?? 0) - paymentEarly;

    if (isNaN(result)) {
      return 0;
    }
    return result;
  }

  static isBeforeDateFromNow(reportEndDate: string | null) {
    const end = moment(reportEndDate).startOf('day');
    const today = this.now();

    return end.isBefore(today);
  }

  static surveyKeys = ['area', 'job', 'pos', 'head', 'admin', 'sex'];

  static now() {
    const now = moment().tz('Asia/Seoul');
    return now;
  }

  static isDateIn(startDate: string, endDate: string): boolean {
    const start = moment(startDate);
    const end = moment(endDate);
    const now = this.now();
    // 당일까지는 만료가 아니다.
    end.add(1, 'day');

    return now.isBetween(start, end, undefined, '[]');
  }

  static isDateAfter(startDate: string, endDate: string): boolean {
    const start = moment(startDate);
    const end = moment(endDate);
    const now = this.now();
    // 당일까지는 만료가 아니다.
    end.add(1, 'day');

    return now.isBefore(start, undefined);
  }

  public static firstCharUppercase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public static setCommaPer3Digit(num: number | string | null | undefined) {
    if ($isEmpty(num)) {
      return 0;
    }
    if (typeof num == 'string') {
      num = num.replaceAll(',', '');
      num = parseInt(num);
    }
    try {
      let value = formatNumber(num, { fractionDigits: 4 });

      if (value == 0) {
        return '0';
      }

      return removeTrailingZeros(value);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  public static sameAsAssignObject(targetObj: any = {}, sourceObj: any = {}) {
    for (let target in targetObj) {
      for (let source in sourceObj) {
        if (target === source) {
          targetObj[target] = sourceObj[source];
        }
      }
    }
  }

  static refineDateRange(dateRange: any[], params: any, fiendNames: string[]) {
    if ($isEmpty(dateRange)) {
      // do nothing
    } else {
      params[fiendNames[0]] = $isEmpty(dateRange) ? '' : dayjs(dateRange[0]).format('YYYYMMDD');
      params[fiendNames[1]] = dateRange[1] == null ? '' : dayjs(dateRange[1]).format('YYYYMMDD');
      //params[fiendNames[1]] = dateRange[1] == null  ? '' : dayjs(Date.now()).format("YYYYMMDD")
    }
  }

  public static getPayType(payMethod: string, pg: string) {
    const PAY_METHOD = [
      { value: 'card', label: '신용카드' },
      { value: 'trans', label: '실시간계좌이체' },
      { value: 'vbank', label: '가상계좌' },
      { value: 'nbank', label: '무통장' },
      { value: 'phone', label: '휴대폰소액결제' },
      { value: 'samsung', label: '삼성페이' },
      { value: 'kpay', label: 'KPay' },
      { value: 'kakaopay', label: '카카오페이' },
      { value: 'payco', label: '페이코' },
      { value: 'lpay', label: 'LPAY' },
      { value: 'ssgpay', label: 'SSG페이' },
      { value: 'tosspay', label: '토스페이' },
      { value: 'cultureland', label: '문화상품권' },
      { value: 'smartculture', label: '스마트문상' },
      { value: 'happymoney', label: '해피머니' },
      { value: 'booknlife', label: '도서문화상품권' },
      { value: 'point', label: '마일리지' },
      { value: 'wechat', label: '위쳇페이' },
      { value: 'alipay', label: '알리페이' },
      { value: 'unionpay', label: '유니온페이' },
      { value: 'tenpay', label: '텐페이' },
      { value: 'free', label: '무료신청' },
      { value: 'naverpay', label: '네이버페이' },
      { value: 'none', label: '' },
    ];

    let payValue = '';

    if (pg === 'naverpay' || pg === 'tosspay' || pg === 'kakaopay') {
      payValue = pg;
    } else {
      payValue = payMethod;
    }

    payValue = payValue ? payValue.toLowerCase() : payValue;
    const findIndex = PAY_METHOD.findIndex((v) => v.value === payValue);
    return $isEmpty(payMethod) ? '' : findIndex === -1 ? '' : PAY_METHOD[findIndex].label;
  }

  public static ctrlEnter(event: KeyboardEvent, callback: any) {
    if (event.ctrlKey && event.which === 13) {
      callback();
    }
  }

  static getSecondsFromIOS8601(duration: string): number {
    return moment.duration(duration).asSeconds();
  }

  public static async getYoutubeDuration(videoId: string) {
    const runtime = useRuntimeConfig();
    const apiKey = runtime.public.apiKeyYoutube;

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.items.length == 0) {
        throw new Error('video 를 찾을수 없습니다. Youtube ID 를 확인해주세요. 또는 해당 영상을 검색할수 없습니다.');
      }
      const duration = response.data.items[0].contentDetails.duration;
      return this.getSecondsFromIOS8601(duration); // Duration in ISO 8601 format (e.g., PT1H2M10S for 1 hour, 2 minutes, 10 seconds)
    } catch (error) {
      throw error;
    }
  }

  public static async getVideoDuration(file: any): Promise<number> {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        resolve(Math.round(video.duration));
      };

      video.onerror = function () {
        reject('video load error');
      };

      video.src = URL.createObjectURL(file);
    });
  }

  public static async downloadFile(file: { fileOrg: string; fileUrl: string }) {
    // console.log('file', file);
    try {
      const response = await axios.get(file.fileUrl, {
        responseType: 'blob', // Force to receive data in a Blob Format
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.fileOrg);
      document.body.appendChild(link);
      link.click();
      link.remove();

      // fileDownload(response.data, file.fileOrg);
    } catch (error) {
      console.error('Error:', error);
      window.location.href = file.fileUrl;
      await $alert('cors 에러가 발생해 local 에서는 파일이름을 변경없이 다운로드 함.' + file.fileUrl);
    }
  }

  static objectToQuery(item: any): string {
    // @ts-ignore
    return Object.fromEntries(Object.entries(item).map(([key, value]) => [key, encodeURIComponent(value as any)]));
  }

  public static fileDownLink(fileName: string, fileBlob: Blob) {
    const url = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  }
  static defaultPaging(): import('~/types/globaltype').PaginationState {
    return {
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
    };
  }
  static isSuccess = (res: any) => {
    return !!(res && res.success);
  };

  public static htmlToText(html: string) {
    const tempDivElement = document.createElement('div');
    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;
    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || '';
  }

  public static getTimeDifference(regDate: string): string {
    const userArrivalTime: Date = new Date(regDate);
    const currentTime: Date = new Date();
    const timeDifferenceInMilliseconds: number = currentTime.getTime() - userArrivalTime.getTime();
    const timeDifferenceInMinutes: number = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
    const timeDifferenceInHours: number = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
    const timeDifferenceInDays: number = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
    const timeDifferenceInMonths: number = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 30));
    const timeDifferenceInYears: number = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    if (timeDifferenceInMinutes < 1) {
      return `방금`;
    } else if (timeDifferenceInHours < 1) {
      return `${timeDifferenceInMinutes}분 전`;
    } else if (timeDifferenceInDays < 1) {
      return `${timeDifferenceInHours}시간 전`;
    } else if (timeDifferenceInMonths < 1) {
      return `${timeDifferenceInDays}일 전`;
    } else if (timeDifferenceInYears < 1) {
      return `${timeDifferenceInMonths}개월 전`;
    } else {
      return `${timeDifferenceInYears}년 전`;
    }
  }

  public static hasMore(paging?: PaginationState): boolean {
    if (paging == null) {
      return false;
    }
    const totalPage = paging.totalCount! / paging.pageSize!;
    return totalPage > paging.pageNo!;
  }

  static openLink(linkUrl?: string, linkType?: LinkType | string) {
    if (linkUrl == null || linkUrl.trim().length == 0) {
      return;
    }
    // console.log('openLink', linkType, linkUrl);
    // check start with https
    if (linkUrl.startsWith('http') == false) {
      linkUrl = `https://${linkUrl}`;
    }
    if (linkType == LinkType.PAGE) {
      // 페이지 이동
      window.location.href = linkUrl;
    } else if (linkType == LinkType.WINDOW) {
      // 새창 이동
      window.open(linkUrl);
    }
  }

  public static getDayOfWeek(date: string) {
    if (date) {
      const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

      // YYYYMMDD 문자열을 연도, 월, 일로 분리
      const year = parseInt(date.substring(0, 4), 10);
      const month = parseInt(date.substring(4, 6), 10) - 1; // 월은 0부터 시작하므로 -1
      const day = parseInt(date.substring(6, 8), 10);

      const newDate = new Date(year, month, day); // Date 객체 생성
      const dayIndex = newDate.getDay(); // 요일 인덱스(0~6)

      return days[dayIndex]; // 해당 요일 반환
    } else {
      return '';
    }
  }

  public static getTodayDate = (format: string) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    let today = '';
    if (format === 'yyyy') {
      today = year.toString();
    } else if (format === 'yyyy.mm.dd') {
      today = year.toString() + '.' + month + '.' + day;
    } else if (format === 'yyyy-mm-dd') {
      today = year.toString() + '-' + month + '-' + day;
    } else {
      today = year.toString() + month + day;
    }
    return today;
  };

  public static getDaysDifference(date1Str: string, date2Str: string) {
    // yyyy.mm.dd 형식의 문자열을 .을 기준으로 분리하여 각각 년, 월, 일로 파싱
    let date1Parts;
    let date2Parts;
    if (date1Str.indexOf('.') > 0) {
      date1Parts = date1Str.split('.');
      date2Parts = date2Str.split('.');
    } else {
      date1Parts = date1Str.split('-');
      date2Parts = date2Str.split('-');
    }

    // Date 객체 생성
    const date1 = new Date(date1Parts[0], date1Parts[1] - 1, date1Parts[2]); // 월은 0부터 시작하므로 -1 처리
    const date2 = new Date(date2Parts[0], date2Parts[1] - 1, date2Parts[2]);

    // 날짜 차이 계산 (밀리초 단위)
    const timeDiff = date2.getTime() - date1.getTime();

    // 일 단위로 변환
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
  }

  public static formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };
  static getCommonCode(code: string): CommonCodeAll[] {
    const baseStore = useBaseStore();
    /*   if (baseStore.commonCodeList.length == 0) {
         // 없으면 가져옴.
         await baseStore.getCommonCodeList();
       }
       */
    return baseStore.commonCodeList.filter((v: CommonCodeAll) => v.cmcdId === code);
  }
  static async getCommonCodeAsync(code: string): Promise<CommonCodeAll[]> {
    const baseStore = useBaseStore();
    if (baseStore.commonCodeList.length == 0) {
      // 없으면 가져옴.
      await baseStore.getCommonCodeList();
    }

    return baseStore.commonCodeList.filter((v: CommonCodeAll) => v.cmcdId === code);
  }

  static getRowNumber(totalCount: number, pageNo: number, pageSize: number, idx: number): number {
    return totalCount - (pageNo - 1) * pageSize - idx;
  }

  static removeCacheLastOpenSeq(item: CachedData) {
    const userAuthStore = useAuthStore();
    delete userAuthStore.cachedData[item.type + item.seq];
  }

  static cacheLastOpenSeq(item: CachedData) {
    const userAuthStore = useAuthStore();
    userAuthStore.cachedData[item.type + item.seq] = {
      seq: item.seq,
      type: item.type,
      lastOpenedDate: moment().toDate(), // now
    };
  }

  static hasCachedInOneDay(seq: string, type: string): boolean {
    return this.hasCachedForCustomHours(seq, type, 24);
  }

  static hasCachedForever(seq: string, type: string): boolean {
    return this.hasCachedForCustomHours(seq, type, 24 * 365 * 10); // 10 년
  }

  static hasCachedForCustomHours(seq: string, type: string, hours = 24): boolean {
    if (seq == null) {
      return false;
    }
    const userAuthStore = useAuthStore();
    const cachedItem = userAuthStore.cachedData[type + seq];
    if (cachedItem) {
      const lastOpenedDate = moment(cachedItem.lastOpenedDate); // assuming lastOpenedDate is in a format moment can understand

      const twentyFourHoursAgo = moment().subtract(hours, 'hours');

      if (lastOpenedDate.isAfter(twentyFourHoursAgo)) {
        // console.log('The lastOpenedDate is within the last 24 hours');
        return true;
      } else {
        // console.log('The lastOpenedDate is not within the last 24 hours');
        return false;
      }
    }
    return false;
  }

  static formatSize = (bytes: number) => {
    const k = 1024;
    const dm = 3;
    //const sizes = $primevue.config.locale.fileSizeTypes;
    const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  };

  static phoneNumberMask = (phoneNumber: string) => {
    if (!phoneNumber) return phoneNumber;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    let res = '';
    if (phoneNumber.length < 3) {
      res = phoneNumber;
    } else {
      if (phoneNumber.substr(0, 2) === '02') {
        if (phoneNumber.length <= 5) {
          //02-123-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3);
        } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
          //02-123-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3) + '-' + phoneNumber.substr(5);
        } else if (phoneNumber.length > 9) {
          //02-1234-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 4) + '-' + phoneNumber.substr(6);
        }
      } else {
        if (phoneNumber.length < 8) {
          res = phoneNumber;
        } else if (phoneNumber.length === 8) {
          res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4);
        } else if (phoneNumber.length === 9) {
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6);
        } else if (phoneNumber.length === 10) {
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6);
        } else if (phoneNumber.length > 10) {
          //010-1234-5678
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7);
        }
      }
    }
    return res;
  };

  static bytesToMB(bytes: number) {
    if (bytes <= 0) {
      return '0MB';
    }
    const MB = bytes / (1024 * 1024); // 1 MB = 1024 * 1024 bytes
    return MB.toFixed(2) + 'MB'; // 소수점 둘째 자리까지 반환
  }
}
