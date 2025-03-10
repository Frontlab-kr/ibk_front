import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import moment from "moment";

let isRefreshing = false;
let refreshSubscribers: Array<Function> = [];

// helper function to add subscriber
function subscribeTokenRefresh(cb: Function) {
  refreshSubscribers.push(cb);
}

// 싹다시 실행시킨후 clear
function onRrefreshed(token: string) {
  refreshSubscribers.map((cb) => cb(token));
  // // console.log('refreshSubscribers.length', refreshSubscribers.length);
  refreshSubscribers = [];
}

const instance = axios.create({
  timeout: 1000 * 60 * 1,
  headers: { "Content-Type": "application/json" },
});
instance.interceptors.request.use(
  async function (config) {
    // ssr인경우 무시
    if (process.client == false) {
      return config;
    }
    const runtime = useRuntimeConfig();
    config.baseURL = '/api'//// runtime.public.apiBase;
    const userKey = localStorage.getItem("userKey");
    if (userKey) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = userKey;
    }
    return config;
   /*  const { useAuthStore } = await import("~/modules/auth");
    const userAuth = useAuthStore();


    if (config.url === "/v1/admin/auth/newAccessToken") {
      return config;
    }
    const tokenData = userAuth.token;
    // // console.log("Request:", config.url, tokenData);
    if (tokenData && isTokenExpired(tokenData.accessTokenExpiresIn)) {
      const retryOriginalRequest = new Promise((resolve) => {
        subscribeTokenRefresh((token: string) => {
          config.headers.authorization = `Bearer ${token}`;
          resolve(config);
        });
      });
      if (isRefreshing == false) {
        isRefreshing = true;
        await newAccessToken(config);
      }

      // refresh 하고있는애들이 이함수가 호출ㄷ되면 다시 요청을 보내준다
      return retryOriginalRequest as any;
    }
    if (tokenData) {
      config.headers.authorization = `Bearer ${tokenData.accessToken}`;
    }
    return config;
     */
  },
  function (error) {
    $alert("API 발송요청 중 에러가 발생했습니다. 콘솔을 확인해주세요.");
    if (error.config) {
      const config = error.config as AxiosRequestConfig;
    }

    return Promise.reject(error);
  }
);


// Add a response interceptor
instance.interceptors.response.use(
  async function (response) {
    const { data } = response;

    // // console.log("Response:", data)

    // 서버에서 상태 에러코드와 에러메시지를 내려주는 경우 그대로 표시
    if (data.status?.errorCode) {
      // @ts-ignore
      if (!response.config.slientAlert && response.data.status.errorCode != "ERROR_0065") {
        try {
          await $alert(`${data.status.errorMessage}`);
        } catch (e) {
          alert(`${data.status.errorMessage}`);
        }
      }
    }

    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.config && error.response) {
      /* const config = error.config as AxiosRequestConfig;
      const response = error.response as AxiosResponse;
      if ( response.status == 403 || response.status == 419 ) {

        if(response.status == 403){
          await $alert(`중복로그인 되었습니다. <br />로그아웃 합니다.`);
        }else{
          await $alert(`로그인 시간이 만료 되었습니다. <br />다시 로그인 해 주세요.`);
        }

        const { useAuthStore } = await import("~/modules/auth");
        const userAuth = useAuthStore();
        return userAuth.logout();
      }

     else if( response.status == 401){
        // 401 이 떨어질일이 거의없지만 서버 상황에 따라 문제가 발생할수 있으므로
        // 401 이 떨어지면 토큰을 갱신한다.
        await newAccessToken(config)
      }
      else {
        if((response.config as any).slientAlert == true){
        // alert 보내지 않음.
        }else{
          await $alert(`상태코드 : ${response.status} \n ${response.data}`);
        }

      } */

    }
    return Promise.reject(error);
  }
);
async function newAccessToken(config:any){
 /*  const { useAuthStore } = await import("~/modules/auth");
  const userAuth = useAuthStore();
  const runtime = useRuntimeConfig();
  config.baseURL = runtime.public.apiBase;

  const tokenData = userAuth.token;
  const res = await instance.post("/v1/admin/auth/newAccessToken", {
    refreshToken: tokenData?.refreshToken,
  })
  if (res.status === 200 && $isEmpty(res.data.status.errorCode)) {
    const newTokenData = res.data.data.token;
    tokenData!.accessToken = newTokenData.accessToken;
    tokenData!.accessTokenExpiresIn = newTokenData.accessTokenExpiresIn;

    userAuth.token!.accessToken = tokenData!.accessToken!;
    userAuth.token!.accessTokenExpiresIn = tokenData!.accessTokenExpiresIn!;

    isRefreshing = false;
    onRrefreshed(tokenData!.accessToken);
  } else {
    // console.log("Error refreshing token:", res.data.status.errorMessage);
    userAuth.logout();
    return Promise.reject(res.data.status.errorMessage);
  } */
}
function isTokenExpired(expiresIn: number) {
  const now = Date.now();

  // 20초 앞당겨서 토큰 expire 시켜버림. 그래야 서버와 타이밍이 맞음.
  // 서버 시간에 딱맞게 expire 체크하면 타이밍상 401이슈가 발생.
  const expirationTime = moment(expiresIn).add(-20, 'seconds');
  const nowFormatted = moment(now).format("YYYY-MM-DD HH:mm:ss");
  const expirationTimeFormatted = moment(expirationTime).format("YYYY-MM-DD HH:mm:ss");
  // @ts-ignore
  const isExpired = now >= expirationTime;
  // // console.log(`isTokenExpired now: ${nowFormatted}, expirationTime: ${expirationTimeFormatted}, isExpired:${isExpired}`)
  return isExpired;
}

export default instance;


