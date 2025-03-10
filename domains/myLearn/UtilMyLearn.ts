import { useMyLearnStore } from "./store";

export default class UtilMyLearn {
    static moveTarget(targetName?: string|null, options: { tabName?: string, studyRoomTab?: string, isScrollToTop?: boolean } = { isScrollToTop: false}) {
        const myLearnStore = useMyLearnStore();
        if($isEmpty(myLearnStore.studyRoomTab) == false){
         if($isEmpty(targetName) ){
          // 이건 lecture type 타겟 이라는 뜻.
          targetName = 'lecture';
         }
        }
        // console.log('options',options)
        const router = useRouter();
        router.push(`/myLearn?${targetName ? `target=${targetName}` : ''}${options.tabName ? `&tab=${options.tabName}` : ''}${options.studyRoomTab ? `&studyRoomTab=${options.studyRoomTab}` : ''}`);
        if(options.studyRoomTab){
          myLearnStore.studyRoomTab = options.studyRoomTab;
        }

        if(options.isScrollToTop){
          UtilMyLearn.scrollToTop();
        }
      }
    // 탭 변경시 스크롤을 최상단으로 이동
    static scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // 부드러운 스크롤 효과 적용
        });
    }
}