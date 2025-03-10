import { nextTick } from 'vue';
import { useBaseStore } from '../domains/base';

// 마지막으로 표시된 알럿 메시지와 시간을 저장
let lastAlertMessage: string | null = null;
let lastAlertTime: number = 0;

export default (message: string): Promise<void> => {
	return new Promise(async (resolve) => {
		try {
			// 현재 시간 체크
			const currentTime = Date.now();
			
			// 이전 메시지와 동일하고, 3초 이내에 호출된 경우 무시
			if (lastAlertMessage === message && currentTime - lastAlertTime < 3000) {
				resolve();
				return;
			}

			await $isLoading(false); 
			await nextTick(); 

			const baseStore = useBaseStore();
			baseStore.alertDialog.visible = true;
			baseStore.alertDialog.message = message;
			console.error(message);
			baseStore.alertDialog.alertDialogCallback = resolve;

			// 알럿이 성공적으로 표시되면 메시지와 시간 저장
			lastAlertMessage = message;
			lastAlertTime = currentTime;

		} catch (e) {
			console.error(e);
			alert(message);
			resolve();
		}
	});
};
