import type { MainCourse, MainCourseDegree, MainModule, MainNotice, MainPopup, MainReview } from '~/domains/main/type';
import type { ApprovalMyCountOutVo, CourseDegreeOutVo, MainPopupOutVo, SocialLearningOutVo, TopSearchInVo } from '../../api-client';
import Utility from '~/lib/Utility';
import type { PaginationState } from '../../types/globaltype';

interface State {
  masterCourseList: {
    contents: CourseDegreeOutVo[];
    paging: PaginationState;
  } | null;
  socialLearning:{
    contents: SocialLearningOutVo[];
    paging: PaginationState;
  } | null;
}

export const useTotalSearchStore = defineStore("totalSearch", {
    persist: false,
    state: (): State => ({
        masterCourseList: {
          contents: [],
          paging: Utility.defaultPaging(),
        },
        socialLearning: {
          contents: [],
          paging: Utility.defaultPaging(),
        },
    }),

    actions: {
   
      async getMasterCourseList(params: TopSearchInVo, isRefresh = false) {
      
        const data = await $wrap($request().inqMasterCourse(params));
        if(isRefresh){
          this.masterCourseList = $item(data);  
        }else{
          this.masterCourseList = {
            contents: this.masterCourseList?.contents.concat(($item(data) as any).contents) as any,
            paging: ($item(data) as any).paging 
          }
        }
        
      },
      async getSocialLearning(params: TopSearchInVo, isRefresh = false) {
        
        const data = await $wrap($request().inqSocialLearning(params));
        if(isRefresh){
          this.socialLearning = $item(data);
        }else{
          this.socialLearning = {
            contents: this.socialLearning?.contents.concat(($item(data) as any).contents) as any,
            paging: ($item(data) as any).paging 
          }
        }
      }
    },

    getters: {

    },
});

