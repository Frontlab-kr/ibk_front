// import { promptModal } from "jenesius-vue-modal";

// import AppAlert from "~~/src/components/AppAlert.vue";

export default <T>(res: any): T => {
	const response = $response(res);


	const contents = (response as any)?.response?.contents;
	if (contents) {
    //페이징
		return {
      contents,
      paging: {
        pageNo: response.response.pageNo,
        pageSize: response.response.pageSize,
        totalCount: response.response.ttalDataNbi,
      }
    }
	} else {
    //일반
		return (response as any)?.response;
	}
};
