import { useAuthStore } from '../domains/auth';

// const SCROLL_TOP = []
export default defineNuxtRouteMiddleware(async (to, from) => {
  $isLoading(false);
  // console.log('route ====>', to, from);

  if (to.path == '/login') {
    console.log('App:goLogin');
  } else {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();

    if (to.path.startsWith('/login')) {
      return;
    }
    // console.log('loginStore.userInfo', authStore.userInfo);
    // if ($isEmpty(authStore.userInfo)) {
    //   $alert('로그인 정보가 없습니다.<br>로그인을 진행 해 주세요')
    //   window.location.href = '/login';

    // }
  }
});
