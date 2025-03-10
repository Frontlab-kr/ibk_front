// import { promptModal } from "jenesius-vue-modal";

import { useBaseStore } from "../domains/base";
import Utility from "../lib/Utility";


// import AppAlert from "~~/src/components/AppAlert.vue";

export default async<T>(request: any, options: { isLoading?: boolean, showAlertWhenError?: boolean } = { isLoading: true, showAlertWhenError: true }): Promise<any> => {

	const baseStore = useBaseStore();
    const router = useRouter();
    
    // 현재 route가 login 페이지가 아닌 경우에만 체크
    if (!router.currentRoute.value.path.includes('login')) {
        // 로그인 시간 체크
        const currentTime = new Date();
        const lastRequestTime = baseStore.lastRequestTime;
        
        if (!lastRequestTime || 
            (currentTime.getTime() - new Date(lastRequestTime).getTime()) > (60 * 60 * 1000)) { // 60분 체크
            // (currentTime.getTime() - new Date(lastRequestTime).getTime()) > (4 * 1000)) { // 60분 체크
            // 로그아웃 처리
             await Utility.logout(true);
		
        }
    }
    
    // 현재 시간으로 lastRequestTime 업데이트
    baseStore.lastRequestTime = new Date();

	 // 남은 세션 시간 계산 (분 단위)
	 const elapsedTime = baseStore.lastRequestTime ? (new Date().getTime() - new Date(baseStore.lastRequestTime).getTime()) / (60 * 1000) : 0;
	
	 baseStore.remainSessionTime  = { minutes: Math.max(0, 60 - Math.floor(elapsedTime))}; // 60분에서 경과 시간을 뺀 값
	if (options.isLoading == true) {

		await $isLoading();

	}
	try {
		const res = await Promise.resolve(request);

		return res;
	} catch (e: any) {
		console.error('$wrap error', e);
		const router = useRouter();
		
		if (e.response) {
			// debugger;
			const { code, errorMsg } = e.response.data.error;
			
			if (code == 'AUE00001') {
				//세션 만료
				await router.replace('/login');
			}
			await $alert(errorMsg ?? e.response.data.error);
		} else {

			await $alert(e.message);
		}

		throw e;
	} finally {
		$isLoading(false)
	}



};
