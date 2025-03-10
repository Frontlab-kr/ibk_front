import type {
  MainModuleOutVo,
  MainNoticeOutVo,
  MainCourseOutVo,
  MainReviewOutVo,
  ApprovalOutVo,
  MainPopupOutVo, CourseDegreeMyPageOutVo, ApprovalMyCountOutVo,
} from '~/api-client';

export interface MainModule extends MainModuleOutVo{

}

export interface MainModuleSlideBanner {
    desgMdulNo?: number;              // 디자인모듈번호
    desgPhtgFrgNo?: number;           // 슬라이드번호
    lnpSqc?: number;                  // 정렬순서
    ttlNm: string;                   // 타이틀명
    subTtlNm: string;                // 서브타이틀명
    titlColrVl: string;               // 타이틀컬러값
    btnTtlNm: string;                // 버튼명
    btnTitlColrVl: string;            // 버튼컬러값
    pcBckgTcd: string;                // PC유형코드
    pcScreColrVl: string;                 // PC색상값
    pcBckgFileUrlAdr: string;         // PC배경원본파일URL주소
    pcBckgCldFileUrlAdr: string;      // PC배경클라우드파일URL주소
    pcBckgOrcpFileNm: string;         // PC배경원본파일명
    pcBckgStrgFileNm: string;         // PC배경변경파일명
    pcBckgFileEtnsNm: string;         // PC배경파일확장자
    pcFileUrlAdr: string;             // PC원본파일URL주소
    pcCldFileUrlAdr: string;          // PC클라우드파일URL주소
    pcOrcpFileNm: string;             // PC원본파일명
    pcStrgFileNm: string;             // PC변경파일명
    pcFileEtnsNm: string;             // PC 파일 확장자
    mblBckgTcd: string;               // 모바일유형코드
    mblScreColrVl: string;                // 모바일색상값
    mblBckgFileUrlAdr: string;        // 모바일배경원본파일URL주소
    mblBckgCldFileUrlAdr: string;     // 모바일배경클라우드파일URL주소
    mblBckgOrcpFileNm: string;        // 모바일배경원본파일명
    mblBckgStrgFileNm: string;        // 모바일배경변경파일명
    mblBckgFileEtnsNm: string;        // 모바일배경파일확장자
    mblFileUrlAdr: string;            // 모바일원본파일URL주소
    mblCldFileUrlAdr: string;         // 모바일클라우드파일URL주소
    mblOrcpFileNm: string;            // 모바일원본파일명
    mblStrgFileNm: string;            // 모바일변경파일명
    mblFileEtnsNm: string;            // 모바일파일확장자
    linkTcd: string;               // 링크타입코드
    linkUrlAdr: string;               // 링크URL주소
    apsrYmd: string;                  // 적용시작년월일
    fnapYmd: string;                  // 적용종료년월일
    useYn: string;                    // 사용 여부 (example: 'Y')
}

export interface MainCourse extends MainCourseOutVo {

}

export interface MainReview extends MainReviewOutVo {

}

export interface MainNotice extends MainNoticeOutVo {

}

export interface MainCourseDegree extends CourseDegreeMyPageOutVo {

}

export interface MainModuleQuickMenu {
    desgMdulNo: string;                // 디자인모듈번호
    desgMdulBkmrMenuNo: string;        // 슬라이드번호
    lnpSqc: number;                    // 정렬 순서
    ttlNm: string;                     // 타이틀명
    pcFileUrlAdr: string;              // PC원본파일URL주소
    pcCldFileUrlAdr: string;           // PC원본클라우드파일URL주소
    pcOrcpFileNm: string;              // PC원본파일명
    pcStrgFileNm: string;              // PC변경파일명
    pcFileEtnsNm: string;              // PC파일확장자
    mblFileUrlAdr: string;             // 모바일원본파일URL주소
    mblCldFileUrlAdr: string;          // 모바일원본클라우드파일URL주소
    mblOrcpFileNm: string;             // 모바일원본파일명
    mblStrgFileNm: string;             // 모바일변경파일명
    mblFileEtnsNm: string;             // 모바일파일확장자
    linkTcd: string;                // 링크타입코드
    linkUrlAdr: string;                // 링크URL주소
    apsrYmd: string;                   // 적용시작년월일
    fnapYmd: string;                   // 적용종료년월일
    useYn: string;                     // 사용여부
    cretTs: string;                    // 등록 일시
    cncrId: string;                    // 등록자 ID
    hrdSysLastMdfrId: string;          // 인재개발시스템최종변경자ID
    hrdSysLastMdfcTs: string;          // 인재개발시스템최종변경일시
}

export interface MainPopup extends MainPopupOutVo {
  ui_is_open_oneday?: boolean;
  ui_visible?: false;
}

export interface MainMyApproval extends ApprovalMyCountOutVo {

}
