import { promptModal } from "jenesius-vue-modal";
import AppConfrim from "@/components/AppConfirm.vue";
import type { CustomConfirmOptions } from "../types/globaltype";
import Utility from "../lib/Utility";
export default (customConfirmOptions: CustomConfirmOptions | string): Promise<boolean> => {
	return new Promise(async (resolve) => {
		
		await nextTick(); // 컨테이너가 늦게생성되는 케이스가 있기때문에 nextTick을 걸어준다.
		Utility.confirmInstance.require({
			message: typeof customConfirmOptions === 'string' ? customConfirmOptions : customConfirmOptions.message,
			rejectProps: {
			  label: typeof customConfirmOptions === 'string' ? '닫기' : customConfirmOptions?.leftButtonLabel ?? '닫기',
			  severity: 'link',
			  size: 'large',
			},
			acceptProps: {
			  label: typeof customConfirmOptions === 'string' ? '확인' : customConfirmOptions.rightButtonLabel ?? '확인',
			  severity: 'link',
			  size: 'large',
			},
			accept: () => {
			  Utility.confirmInstance.close();
			  resolve(true);
			},
			reject: () => {
			  Utility.confirmInstance.close();
			  resolve(false);
			},
		  });
		/* customConfirmOptions = typeof customConfirmOptions === 'string' ? { message: customConfirmOptions } : customConfirmOptions;
		const result = await promptModal(AppConfrim, { customConfirmOptions }) */
		
		
	});
};
