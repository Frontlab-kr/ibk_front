import Utility from '~/lib/Utility';
import type {
  CommunityBoard,
  CommunityBoardContentsCommentOptions,
  CommunityBoardContentsComments,
  CommunityBoardContentsData,
  CommunityBoardContentsOptions,
  CommunityBoardContentsSearchOptions,
  CommunityBoardContents,
  CommunitySurveyData,
  CommunitySurveySearchOptions, CommunitySurveyContents,
} from '~/domains/community/type';
import type { CommonSurveyQuestionInVo } from '~/api-client';

interface State {
  communityBoardList: CommunityBoard[],
  currentTab: string,
  communityBoardContentsData: CommunityBoardContentsData,
  communityBoardContentsCommentList: CommunityBoardContentsComments[],
  openedCommentId: number[],
  communityBoardContents: CommunityBoardContents | null,
  communitySurveyData: CommunitySurveyData,
  communitySurveyPreviewData: {},
  communitySurveyAnswerData: {},
}

export const useCommunityStore = defineStore("community", {
  persist: false,
  state: (): State => ({
    communityBoardList: [],
    currentTab: '1',
    communityBoardContentsData: {
        contents: [],
        paging: Utility.defaultPaging()
    },
    communityBoardContentsCommentList: [],
    openedCommentId: [],
    communityBoardContents: null,
    communitySurveyData: {
      contents: [],
      paging: Utility.defaultPaging()
    },
    communitySurveyPreviewData: {

    },
    communitySurveyAnswerData: {

    },
  }),

  actions: {
    async getBoardList() {
      const data  = await $wrap($request().inqBoardList({ cybrTriuBlbrKcd: '1', boardMenuType: 'community' }));
      const resultData = $item(data) as CommunityBoard[];
      this.communityBoardList = resultData;
    },
    async getBoardContentsList(params: CommunityBoardContentsSearchOptions, isFirst = true) {
      const data  = await $wrap($request().inqBoardContentsPage(params));
      const result = $item(data) as CommunityBoardContentsData;
      if(isFirst) {
        this.communityBoardContentsData = result;
      } else {
        this.communityBoardContentsData = {
          contents: this.communityBoardContentsData.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },
    async getBoardContentsDetail(params: CommunityBoardContentsOptions) {
      const data = await $wrap($request().inqBoardContentsDtl(params));

      if(data.data.success && data.data.response !== null) {
        const result = $item(data) as CommunityBoardContents;
        this.communityBoardContents = result;

        return data.data.success;
      }

      return false;
    },
    async getBoardContentsCommentList(blbrPtngId: number, blbrRpcmId = null) {
        const data = await $wrap($request().inqBoardContentsCommentList({ blbrPtngId, hgrnBlbrRpcmId: blbrRpcmId }));
        if(blbrRpcmId && blbrRpcmId > 0) {
          const findIndex = this.communityBoardContentsCommentList.findIndex((v)=> v.blbrRpcmId == blbrRpcmId);
          this.communityBoardContentsCommentList[findIndex].children = $item(data);
        } else {
          this.communityBoardContentsCommentList = $item(data);

          //기존에 열려있던 대댓글 열어줌
          this.communityBoardContentsCommentList.forEach((v)=> {
            if(this.openedCommentId.includes(v.blbrRpcmId)) {
              v.isActive = true;
              this.getBoardContentsCommentList(v.blbrPtngId, v.blbrRpcmId)
            }
          });
        }
        return $item(data);
    },
    async saveBoardContentsComment(params: CommunityBoardContentsCommentOptions) {
      const { data } = await $wrap($request().rgsnBoardContentsComment(params));
      return data;
    },
    async delBoardContentsComment(params: CommunityBoardContentsCommentOptions) {
      const { data } = await $wrap($request().delBoardContentsComment(params));
      return data;
    },
    async modBoardContentsComment(params: CommunityBoardContentsCommentOptions) {
      const { data } = await $wrap($request().mdfcBoardContentsComment(params));
      return data;
    },
    async downloadFile(fileOriginalName: string, fileUrl: string) {
      Utility.downloadFile({ fileOrg: fileOriginalName, fileUrl: fileUrl });
    },
    async saveBoardContents(params: CommunityBoardContentsOptions) {
      const { data } = await $wrap($request().rgsnBoardContents(params));
      return data;
    },
    async modBoardContents(params: CommunityBoardContentsOptions) {
      const { data } = await $wrap($request().mdfcBoardContents(params));
      return data;
    },
    async delBoardContents(params: CommunityBoardContentsOptions) {
      const data = await $wrap($request().delBoardContents(params));
      return data;
    },
    async getCommonSurveyList(params: CommunitySurveySearchOptions, isFirst = true) {
      const data = await $wrap($request().inqCommonSurveyQuestionPage(params));
      const result = $item(data) as CommunitySurveyData;
      if(isFirst) {
        this.communitySurveyData = result;
      } else {
        this.communitySurveyData = {
          contents: this.communitySurveyData.contents.concat(result.contents),
          paging: result.paging
        }
      }
    },
    async getCommonSurveyPreview(params: CommunitySurveyContents) {
      this.communitySurveyPreviewData = await $request().inqCommonSurveyQuestionPreview(params);
    },
    async getCommonSurveyAnswer(params: CommunitySurveyContents) {
      this.communitySurveyAnswerData = await $request().inqCommonSurveyQuestionAnswer(params);
    },
    async submitCommonSurvey(params: Array<CommonSurveyQuestionInVo>) {
      const data = await $wrap($request().rgsnCommonSurveySubmit({ inVo: params }));
    },

  },
  getters: {
  }
});
