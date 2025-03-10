import type { FacilityOptions, ResortFacilityOptions, ResortFacilityRequestOptions, FacilityRequestOptions } from '~/domains/facility/type';
import type { FacilityRequestOutVo, ResortFacilityRequestMyOutVo, ResortFacilityRequestMyPageInqInVo, ResortFacilityRequestOutVo, ResortFacilityRequestPageInqInVo } from '~/api-client';
import type { PaginationState } from '~/types/globaltype';
import Utility from '~/lib/Utility';

interface State {
  resortFacilityData: {};
  facilityData: {};
  trainingRequestData: {
    contents: ResortFacilityRequestOutVo[],
    paging: PaginationState,
  };
  classRoomRequestData: {
    contents: FacilityRequestOutVo[],
    paging: PaginationState,
  };
  studioRequestData: {
    contents: FacilityRequestOutVo[],
    paging: PaginationState,
  };
  mypageFacilityData: {
    contents: ResortFacilityRequestMyOutVo[],
    paging: PaginationState,
  } 
}

export const useFacilityStore = defineStore("facility", {
    persist: false,
    state: (): State => ({
      resortFacilityData: {

      },
      facilityData: {

      },
      trainingRequestData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      classRoomRequestData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      studioRequestData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      mypageFacilityData: {
        contents: [],
        paging: Utility.defaultPaging()
      }
    }),

    actions: {
      async getResortFacilityList(params: ResortFacilityOptions) {
        this.resortFacilityData = await $request().inqResortFacilityPage(params);
      },
      async saveResortFacilityRequest(params: ResortFacilityRequestOptions) {
        const { data } = await $request().rgsResortFacilityRequest(params);
        return data;
      },
      async getFacilityList(params: FacilityOptions) {
        this.facilityData = await $request().inqFacilityPage(params);
      },
      async saveFacilityRequest(params: FacilityRequestOptions) {
        const { data } = await $request().rgsnFacilityRequest(params);
        return data;
      },
      async modifyFacilityRequest(params: FacilityRequestOptions) {
        const { data } = await $request().mdfcFacilityRequest(params);
        return data;
      },
      async getTrainingRequestList(params: ResortFacilityRequestPageInqInVo, isFirst = true) {
        if (!isFirst) {
          this.trainingRequestData!.paging.pageNo!++;
        }

        const data = await $wrap($request().inqResortFacilityRequestPage(params));
        const result = $item(data) as any;
        if (isFirst) {
          this.trainingRequestData = result;
        } else {
          this.trainingRequestData = {
            contents: this.trainingRequestData!.contents.concat(result.contents),
            paging: result.paging
          }
        }

        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);

        return ret;
      },
      async getClassRoomRequestList(params: FacilityRequestOptions, isFirst = true) {
        if (!isFirst) {
          this.classRoomRequestData!.paging.pageNo!++;
        }else{
          params.pageNo = 1;
        }

        const data = await $wrap($request().inqFacilityRequestPage(params));
        let result = $item(data) as any;
        if (isFirst) {
          this.classRoomRequestData = result;
        } else {
          this.classRoomRequestData = {
            contents: this.classRoomRequestData!.contents.concat(result.contents),
            paging: result.paging
          }
        }

        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);

        return ret;
      },
      async getStudioRequestList(params: FacilityRequestOptions, isFirst = true) {
        if (!isFirst) {
          this.studioRequestData!.paging.pageNo!++;
        }else{
          params.pageNo = 1;
        }

        const data = await $wrap($request().inqFacilityRequestPage(params));
        let result = $item(data) as any;
        if (isFirst) {
          this.studioRequestData = result;
        } else {
          this.studioRequestData = {
            contents: this.studioRequestData!.contents.concat(result.contents),
            paging: result.paging
          }
        }

        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);

        return ret;
      },
      async getMypageFacilityList(params: ResortFacilityRequestMyPageInqInVo) {
        const data= await $wrap($request().inqResortFacilityRequestMyPage(params));
        this.mypageFacilityData  = $item(data) as any;
      },
    },
   
    getters: {

    },
});
