import BaseService from "../../../lib/BaseService";
import Utility from '~/lib/Utility';

interface State {
}

export const useFileStore = defineStore("file", {
    persist: false,
    state: (): State => ({

    }),

    actions: {
      async uploadMultiFile(fileObjectTypeCd: string, files: Array<File>){
        const { data } = await $request().uploadMultiFile(fileObjectTypeCd, files);
        return data;
      },

      async downloadFile(fileName: string, fileId: string) {
        const { data } = await $request().downloadFile(fileId, { responseType : 'blob'});
        Utility.fileDownLink(fileName, data);
        return data;
      }


    },
    getters: {

    },
});
