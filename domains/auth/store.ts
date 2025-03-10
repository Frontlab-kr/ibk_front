import type { LoginForm  } from '~/domains/auth/type';
import type { FindPwdInVo, LoginMotpInVo, UserAppOutVo, UserOutVo } from '~/api-client';
import BaseService from '~/lib/BaseService';
import type { CachedData } from '~/types/globaltype';


interface State {
  userInfo: UserOutVo;
  cachedData: { [key: string]: CachedData };
}

export const useAuthStore = defineStore("auth", {
  persist: {
    storage: localStorage,
  },
  state: (): State => ({
    userInfo: {
    },
    cachedData: {}
  }),

  actions: {
    async login(params: LoginForm) {
      const { data } = await $wrap($request().login(params));
      return data.response.token as UserAppOutVo;
    },
    async loginApp(params: LoginForm) {
      const { data } = await $wrap($request().loginApp(params));
      return data.response.token as UserAppOutVo;
    },

    async findPassword(params: FindPwdInVo){
        await $wrap($request().findPassword(params));
    },
    // 2차 인증 확인 및 페이지 이동
    async secondaryAuth(param: LoginMotpInVo){
      //여기서 motp 호출 해야함
      const { data } = await $wrap($request().loginMotp(param));
      this.userInfo = data.response;
      localStorage.setItem("userKey", data.response.accessToken!);
      BaseService.getIns().changeAuthorizationHeaderAndApiFactory();
      navigateTo('/');
    }
  },
  getters: {

  },
});
