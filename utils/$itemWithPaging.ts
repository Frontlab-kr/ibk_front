// import { promptModal } from "jenesius-vue-modal";

// import AppAlert from "~~/src/components/AppAlert.vue";

export default <T>(res: any): T => {
	
	return (res.data.data as any) as T
};
