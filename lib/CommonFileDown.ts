import axios from 'axios';

/**
 * 파일 다운로드 유틸리티
 * @param fullPath - API 경로 (baseURL 제외)
 */
async function downloadFile(fullPath: string, defaultFileName: string = 'downloaded_file') {
  try {

    // 런타임 설정에서 baseURL 가져오기
    const runtime = useRuntimeConfig();
    const baseURL = runtime.public.apiBase;

    // 전체 URL 생성
    const url = `${baseURL}${fullPath}`;

    // 파일 다운로드 요청
    const response = await axios.get(url, {
      responseType: 'blob', // 파일 데이터를 받을 때 필요
    });


    const contentDisposition = response.headers['content-disposition'];
    // 파일 이름 설정 (Content-Disposition 헤더가 없을 때 기본 이름 설정)
    let filename = defaultFileName;

    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename\*?=(?:UTF-8'')?["']?([^"']+)["']?/);
      if (filenameMatch && filenameMatch[1]) {
        filename = decodeURIComponent(filenameMatch[1]);
      }
    }

    // Blob 데이터 처리 및 다운로드
    const blobUrl = window.URL.createObjectURL(response.data);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', filename); // 파일 이름 설정
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Blob URL 해제
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('파일 다운로드 에러:', error);
  }
}

export default downloadFile;
