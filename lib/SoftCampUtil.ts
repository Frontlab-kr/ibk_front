//소프트 캠프 Util 클래스
import { useAuthStore } from '~/domains/auth';
import axios from 'axios';
import type { CommonAttachFilehInVo } from '~/api-client';

export default class SoftCampUtil {

  static readonly SOFTCAMP_IP = import.meta.env.VITE_SOFTCAMP_IP;
  static readonly SOFTCAMP_PORT = import.meta.env.VITE_SOFTCAMP_PORT;
  static readonly CALLBACK_PREFIX = import.meta.env.VITE_CALLBACK_PREFIX;

  // jobID 생성 메서드
  static generateJobID() {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(1000000 + Math.random() * 9000000);
    return timestamp + randomNum;
  }

  // createJsonBody 메서드
  static createJsonBody(callbackURL: string, filename: string) {
    // AuthStore에서 userInfo 가져오기
    const authStore = useAuthStore();
    const userId = authStore.userInfo.userId; // userInfo에서 userId 추출

    const root: any = {};

    const request = {
      type: 'upload',
    };
    root.request = request;

    const userinfo = {
      id: userId, // 스토어에서 가져온 userId 사용
    };
    root.userinfo = userinfo;

    const fileinfo = {
      filename: filename,
    };
    root.fileinfo = fileinfo;

    const result = {
      callbackURL: `${this.CALLBACK_PREFIX}${callbackURL}`,
    };
    root.result = result;

    return JSON.stringify(root); // JSON 문자열로 변환하여 반환
  }

  // 파일 업로드 메서드
  static async uploadFile(file: File, callbackURL: string): Promise<string> {
    const jobID = this.generateJobID(); // 생성된 jobID 사용
    const SOFTCAMP_UPLOAD_URL = `http://${this.SOFTCAMP_IP}:${this.SOFTCAMP_PORT}/v5/cdr/${jobID}`;


    // FormData에 파일과 JSON 데이터 추가
    const formData = new FormData();
    formData.append('data', this.createJsonBody(callbackURL, file.name));
    formData.append('file', file);

    try {
      const response = await axios.post(SOFTCAMP_UPLOAD_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 && response.data) {
        const { code, msg, jobID: responseJobID } = response.data;

        if (code === 0) {
          // console.log('파일 업로드 성공:', msg, responseJobID);
          return responseJobID; // 서버로부터 받은 jobID 반환
        } else {
          throw new Error(`업로드 실패: ${msg}`);
        }
      } else {
        throw new Error('서버로부터 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error);
      throw error;
    }
  }
}
