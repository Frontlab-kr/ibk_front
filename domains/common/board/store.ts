import type {
  BoardData, BoardContentsData, BoardOptions, BoardContentsOptions, BoardContentsCommentOptions
} from '~/domains/common/board/type';

interface State {
  boardData: BoardData;
  boardContentsData: BoardContentsData;
  boardContentsCommentData: {};
}

export const useBoardStore = defineStore("board", {
    persist: false,
    state: (): State => ({
      boardData: {
        items: []
      },
      boardContentsData: {
        items: []
      },
      boardContentsCommentData: {

      }
    }),

    actions: {
      async getBoardList() {
        const { data }  = await $request().inqBoardList({});
        this.boardData.items = data.response;
      },

      async getBoardContentsList(blbrId : number) {
        const { data }  = await $request().inqBoardContentsList({blbrId});
        this.boardContentsData.items = data.response;
      },

      async saveBoard(params: BoardOptions) {
        const { data } = await $request().rgsnBoard(params);
        return data;
      },

      async modifyBoard(params: BoardOptions) {
        const { data } = await $request().mdfcBoard(params);
        return data;
      },

      async saveBoardContents(params: BoardContentsOptions) {
        const { data } = await $request().rgsnBoardContents(params, params.uploadFileList);
        return data;
      },

      async modifyBoardContents(params: BoardContentsOptions) {
        const { data } = await $request().mdfcBoardContents(params, params.uploadFileList);
        return data;
      },

      async saveBoardContentsComment(params: BoardContentsCommentOptions) {
        const { data } = await $request().rgsnBoardContentsComment(params);
        return data;
      },

      async delBoardContents(params: BoardContentsOptions) {
        const { data } = await $request().delBoardContents(params);
        return data;
      },

      async getBoardContentsCommentList(params: BoardContentsCommentOptions) {
        this.boardContentsCommentData = await $request().inqBoardContentsCommentPage(params);
      },
    },
    getters: {

    },
});
