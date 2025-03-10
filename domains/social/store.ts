import BaseService from "../../../lib/BaseService";
import Utility from '~/lib/Utility';
import type {
  SocialBoard, SocialBoardContentsCommentOptions, SocialBoardContentsCommentRank, SocialBoardContentsComments,
  SocialBoardContentsData, SocialBoardContentsOptions,
  SocialBoardContentsSearchOptions,
} from '~/domains/social/type';

interface State {
  socialBoardList: SocialBoard[],
  socialBoardContentsData: SocialBoardContentsData,
  socialBoardContentsCommentList: SocialBoardContentsComments[],
  socialBoardContentsBestData: SocialBoardContentsData,
  openedCommentId: number[],
  socialBoardContentsCommentRankList: SocialBoardContentsCommentRank[],
}

export const useSocialStore = defineStore("social", {
    persist: false,
    state: (): State => ({
      socialBoardList: [],
      socialBoardContentsData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      socialBoardContentsBestData: {
        contents: [],
        paging: Utility.defaultPaging()
      },
      socialBoardContentsCommentList: [],
      openedCommentId: [],
      socialBoardContentsCommentRankList: [],
    }),

    actions: {
      async getBoardList() {
        const data  = await $wrap($request().inqBoardList({ cybrTriuBlbrKcd: '2' }));
        const resultData = $item(data) as SocialBoard[];
        this.socialBoardList = [
          { blbrNo: '', blbrNm : '전체', active: true },
          { blbrNo: 'my', blbrNm : '내가 작성한 글' },
          { blbrNo: 'favorite', blbrNm : '좋아요' },
          ...resultData
        ];
      },
      async getBoardContentsList(params: SocialBoardContentsSearchOptions, isFirst = true) {
        const data  = await $wrap($request().inqBoardContentsPage(params));
        const result = $item(data) as SocialBoardContentsData;
        if(isFirst) {
          this.socialBoardContentsData = result;
        } else {
          this.socialBoardContentsData = {
            contents: this.socialBoardContentsData.contents.concat(result.contents),
            paging: result.paging
          }
        }
      },
      async getBoardContentsDetail(blbrPtngId: number) {
        const data = await $wrap($request().inqBoardContentsDtl({ blbrPtngId }));
        return $item(data);
      },
      async getBoardContentsCommentList(blbrPtngId: number, blbrRpcmId= null) {
        const data = await $wrap($request().inqBoardContentsCommentList({ blbrPtngId, hgrnBlbrRpcmId: blbrRpcmId }));
        if(blbrRpcmId) {
          const findIndex = this.socialBoardContentsCommentList.findIndex((v)=> v.blbrRpcmId == blbrRpcmId);
          this.socialBoardContentsCommentList[findIndex].children = $item(data);
        } else {
          this.socialBoardContentsCommentList = $item(data);

          //기존에 열려있던 대댓글 열어줌
          this.socialBoardContentsCommentList.forEach((v)=> {
            if(this.openedCommentId.includes(v.blbrRpcmId)) {
              v.isActive = true;
              this.getBoardContentsCommentList(v.blbrPtngId, v.blbrRpcmId)
            }
          });
        }
        return $item(data);
      },
      async saveBoardContents(params: SocialBoardContentsOptions) {
        const { data } = await $wrap($request().rgsnBoardContents(params, params.uploadFileList));
        return data;
      },
      async modBoardContents(params: SocialBoardContentsOptions) {
        const { data } = await $wrap($request().mdfcBoardContents(params, params.uploadFileList));
        return data;
      },
      async delBoardContents(params: SocialBoardContentsOptions) {
        const { data } = await $wrap($request().delBoardContents(params));
        return data;
      },
      async saveBoardContentsLike(blbrNo: number, blbrPtngId: number) {
        const { data } = await $wrap($request().saveBoardContentsLike({ blbrNo, blbrPtngId }));
        return data;
      },
      async saveBoardContentsComment(params: SocialBoardContentsCommentOptions) {
        const { data } = await $wrap($request().rgsnBoardContentsComment(params));
        return data;
      },
      async modBoardContentsComment(params: SocialBoardContentsCommentOptions) {
        const { data } = await $wrap($request().mdfcBoardContentsComment(params));
        return data;
      },
      async delBoardContentsComment(params: SocialBoardContentsCommentOptions) {
        const { data } = await $wrap($request().delBoardContentsComment(params));
        return data;
      },
      async getBoardContentsBestList(params: SocialBoardContentsSearchOptions, isFirst = true) {
        const data  = await $wrap($request().inqBoardContentsBestPage(params));
        const result = $item(data) as SocialBoardContentsData;
        if(isFirst) {
          this.socialBoardContentsBestData = result;
        } else {
          this.socialBoardContentsBestData = {
            contents: this.socialBoardContentsBestData.contents.concat(result.contents),
            paging: result.paging
          }
        }
      },
      async getBoardContentsCommentRankList(params: string) {
        const data  = await $wrap($request().inqBoardContentsCommentRankList({ cybrTriuBlbrKcd: params }));
        this.socialBoardContentsCommentRankList = $item(data);
      },
      async isFirstWrite(blbrNo?: number) {
        const { data } = await $wrap($request().isFirstWrite({ blbrNo }));
        return data;
      }
    },
    getters: {

    },
});
