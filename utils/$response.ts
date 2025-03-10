// import { promptModal } from "jenesius-vue-modal";

import type { ApiResponse } from "../types/globaltype";

// import AppAlert from "~~/src/components/AppAlert.vue";

export default <T>(res: any): ApiResponse<T> => {
	
	return res.data; 
};
