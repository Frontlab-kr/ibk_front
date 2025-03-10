import type { IdiMileageLearningPageInVo, IdiMileageLicensePageInVo, IdiMileageEtcPageInVo, IdiMileageRequestPageInVo, IdiMileageGiftRequestInVo,
  IdiMileageLearningOutVo, IdiMileageLicenseOutVo, IdiMileageEtcOutVo, IdiMileageRequestOutVo } from '~/api-client';
import type { PaginationState } from '~/types/globaltype';
import Utility from '~/lib/Utility';
import type { MileageGiftOptions } from '~/domains/mileage/type';

interface State {
  totalMileageData: {};
  chartMileageData: {};
  learningMileageData: {
    contents: IdiMileageLearningOutVo[],
    paging: PaginationState,
  };
  licenseMileageData: {
    contents: IdiMileageLicenseOutVo[],
    paging: PaginationState,
  };
  etcMileageData: {
    contents: IdiMileageEtcOutVo[],
    paging: PaginationState,
  };
  mileageRequestData: {
    contents: IdiMileageRequestOutVo[],
    paging: PaginationState,
  };
}

export const useMileageStore = defineStore("mileage", {
    persist: false,
    state: (): State => ({
      totalMileageData: {

      },
      chartMileageData: {

      },
      learningMileageData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      licenseMileageData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      etcMileageData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      mileageRequestData: {
        contents: [],
        paging: Utility.defaultPaging()
      }
    }),

    actions: {
      async getIdiMyMileageTotalData(params: {}) {
        this.totalMileageData = await $request().inqIdiMyMileageTotal(params);
      },
      async getIdiMyMileageChartData(params: {}) {
        this.chartMileageData = await $request().inqIdiMyMileageChartTotal(params);
      },
      async getIdiMileageLearningList(params: IdiMileageLearningPageInVo, isFirst = true) {
        if (!isFirst) {
          this.learningMileageData!.paging.pageNo!++;
        }
        const data = await $wrap($request().inqIdiMileageLearningPage(params));
        const result = $item(data) as any;
        if (isFirst) {
          this.learningMileageData = result;
        } else {
          this.learningMileageData = {
            contents: this.learningMileageData!.contents.concat(result.contents),
            paging: result.paging
          }
        }
        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);
        return ret;
      },
      async getIdiMileageLicenseList(params: IdiMileageLicensePageInVo, isFirst = true) {
        if (!isFirst) {
          this.licenseMileageData!.paging.pageNo!++;
        }
        const data = await $wrap($request().inqIdiMileageLicensePage(params));
        const result = $item(data) as any;
        if (isFirst) {
          this.licenseMileageData = result;
        } else {
          this.licenseMileageData = {
            contents: this.licenseMileageData!.contents.concat(result.contents),
            paging: result.paging
          }
        }
        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);
        return ret;
      },
      async getIdiMileageEtcList(params: IdiMileageEtcPageInVo, isFirst = true) {
        if (!isFirst) {
          this.etcMileageData!.paging.pageNo!++;
        }
        const data = await $wrap($request().inqIdiMileageEtcPage(params));
        const result = $item(data) as any;
        if (isFirst) {
          this.etcMileageData = result;
        } else {
          this.etcMileageData = {
            contents: this.etcMileageData!.contents.concat(result.contents),
            paging: result.paging
          }
        }
        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);
        return ret;
      },
      async getIdiMileageRequestList(params: IdiMileageRequestPageInVo, isFirst = true) {
        if (!isFirst) {
          this.mileageRequestData!.paging.pageNo!++;
        }
        const data = await $wrap($request().inqIdiMyMileageRequestPage(params));
        const result = $item(data) as any;
        if (isFirst) {
          this.mileageRequestData = result;
        } else {
          this.mileageRequestData = {
            contents: this.mileageRequestData!.contents.concat(result.contents),
            paging: result.paging
          }
        }
        const ret = (result.paging.totalCount > result.paging.pageNo * result.paging.pageSize);
        return ret;
      },
      async saveIdiMileageGiftRequest(params: IdiMileageGiftRequestInVo) {
        const { data } = await $request().rgsIdiMileageGiftRequest(params);
        return data;
      },
      async delIdiMileageGiftRequest(params: MileageGiftOptions) {
        const { data } = await $wrap($request().delIdiMileageGiftRequest(params));
        return data;
      },
    },
    getters: {

    },
});
