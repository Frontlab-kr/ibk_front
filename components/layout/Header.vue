<template>
  <div class="ibk-inner">
    <div class="ibk-header-head">
      <div class="ibk-header-head__start">
        <NuxtLink to="/" class="ibk-header-head-logo"><img src="@/assets/images/logo.png" alt="" /></NuxtLink>
        <div class="ibk-header-head-search">
          <IconField @click="menuSearchToggle">
            <InputIcon class="ibk-icon-16-search" />
            <InputText placeholder="검색어를 입력하세요." @keyup.enter="goSearch(searchText)" v-model="searchText" />
          </IconField>
        </div>
        <Menu ref="menuSearch" :popup="true" class="ibk-header-head-search-layer">
          <template #start>
            <div class="ibk-header-head-search-layer__title">최근 검색어</div>
          </template>
          <template #end>
            <div class="ibk-header-head-search-layer-list">
              <template v-if="store.topSearchHistoryList.length > 0">
                <NuxtLink v-for="item of store.topSearchHistoryList" :key="item"
                  class="ibk-header-head-search-layer-list-item" @click="goSearch(item);">
                  <p>{{ item }}</p>
                </NuxtLink>
              </template>
              <template v-else>
                <div class="ibk-header-head-search-layer__none">
                  <p>최근 검색내역이 없습니다.</p>
                </div>
              </template>
            </div>
          </template>
        </Menu>
      </div>
      <div class="ibk-header-head__end">
        <!-- PC 버전 알림 버튼 -->
        <div class="pc">
          <div class="ibk-header-head-alarm ibk-header-head-alarm--new">
            <Button icon="ibk-icon-36-alarm" link rounded @click="menuAlarmToggle" />
          </div>
        </div>
        <!-- PC 버전 로그인/로그아웃 버튼 -->
        <div class="pc" style="display:flex;align-items:center;gap:10px;">
      
          <Button icon="ibk-icon-24-exit" :label="isLogined ? '로그아웃' : '로그인'" severity="secondary" outlined
            @click="onLoginOrLogout" />
          <div  style="color:black;">
              <span>{{ remainSessionTime }}분</span>
          </div>
        </div>

        <!-- 모바일 버전 버튼들 -->
        <div class="mo" v-if="!mobileMenu">
          <Button icon="ibk-icon-32-alarm" text @click="modal01 = true" />
        </div>
        <div class="mo" v-if="!mobileMenu">
          <Button icon="ibk-icon-32-search" text @click="visibleMobileSearchDialog = true" />
        </div>
        <div class="mo" v-if="!mobileMenu">
          <Button icon="ibk-icon-32-menu" text @click="mobileMenu = true" />
        </div>
        <div class="mo" v-if="mobileMenu">
          <Button icon="ibk-icon-32-close" text @click="mobileMenu = false" />
        </div>

        <!-- 알림 메뉴 팝업 -->
        <Menu ref="menuAlarm" :popup="true" class="ibk-header-alarm">
          <template #start>
            <div class="ibk-header-alarm-head">
              <h5>알림</h5>
              <Button label="전체읽음" text />
            </div>
          </template>
          <template #end>
            <div class="ibk-header-alarm-list">
              <!-- <div class="ibk-header-alarm-none">알림이 없습니다.</div> -->
              <NuxtLink to="/" class="ibk-header-alarm-list-item" v-for="i of 5" :key="i">
                <div class="ibk-header-alarm-list-item-head">
                  <p>알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀</p>
                  <strong>1분 전</strong>
                </div>
                <div class="ibk-header-alarm-list-item-text">
                  알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림
                  내용이 여기에 표시됩니다.
                </div>
              </NuxtLink>
              <div class="ibk-header-alarm-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </div>
            <div class="ibk-header-alarm-button">
              <Button label="닫기" severity="secondary" outlined class="w-full" size="large" @click="menuAlarmToggle" />
            </div>
          </template>
        </Menu>
      </div>
    </div>
    <div class="ibk-header-gnb">
      <template v-for="(item, index) in store.topMenuList" :key="`${item.menuId}_${index}`">
        <NuxtLink :to="`${item.prrmUrlAdr}`" class="ibk-header-gnb-item">{{ item.menuNm }}</NuxtLink>
      </template>
    </div>
  </div>
  <Dialog v-model:visible="visibleMobileSearchDialog" modal class="ibk-dialog ibk-dialog-searchform">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visibleMobileSearchDialog = false" />
      </div>
      <div class="ibk-dialog-searchform__title">검색</div>
    </template>
    <div class="ibk-header-head-search-layer">
      <div class="ibk-header-head-search-layer-form">
        <IconField >
          <InputIcon class="ibk-icon-16-search" />
          <InputText placeholder="검색어를 입력하세요." v-model="searchText" @keyup.enter="goSearch(searchText)" />
        </IconField>
      </div>
      <div class="ibk-header-head-search-layer__title">최근 검색어</div>
      <div class="ibk-header-head-search-layer-list">
        <template v-if="store.topSearchHistoryList.length > 0">
          <NuxtLink v-for="item of store.topSearchHistoryList" :key="item"
            class="ibk-header-head-search-layer-list-item" @click="goSearch(item)">
            <p>{{ item }}</p>
          </NuxtLink>
        </template>
        <template v-else>
          <div class="ibk-header-head-search-layer__none">
            <p>최근 검색내역이 없습니다.</p>
          </div>
        </template>

      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-searchform__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="visibleMobileSearchDialog = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { useBaseStore } from '~/domains/base';
import Utility from '../../lib/Utility';
import { useAuthStore } from '../../domains/auth';

const store = useBaseStore();
const auth = useAuthStore();
const router = useRouter();
const isLogined = computed(() => $isEmpty(auth.userInfo) == false);
const searchText = ref('');
const route = useRoute();
watch(() => route.query.searchText, () => {
  searchText.value = route.query.searchText as string;
}, { deep: true, immediate: true })
function onClickNotice() {
  alert('현재 준비중입니다.')
}
const onLoginOrLogout = async () => {
  if (isLogined.value) {
    await Utility.logout();

  } else {
    router.push('/login');
  }
};

const goSearch = (searchText: string) => {
  if (searchText == null) {
    searchText = '';
  }

  if (searchText.trim()) {
    store.topSearchHistoryList = store.topSearchHistoryList.filter(
      item => item !== searchText
    );

    store.topSearchHistoryList.unshift(searchText);

    if (store.topSearchHistoryList.length > 10) {
      store.topSearchHistoryList = store.topSearchHistoryList.slice(0, 10);
    }
  }
  // 최근 검색 메뉴 닫아줌.
  menuSearch?.value.hide();
  visibleMobileSearchDialog.value = false;
  router.push(`/totalsearch?searchText=${searchText}`);
}

const menuAlarm = ref();
const mobileMenu = ref(false);
const modal01 = ref(false);
const visibleMobileSearchDialog = ref(false);
const menuSearch = ref();
const menuAlarmToggle = (event: Event) => {
  alert('현재 준비중입니다.');
  return;
  menuAlarm.value?.toggle(event);
};
const menuSearchToggle = (event: Event) => {
  menuSearch.value.toggle(event);
};

function handleResize() {
  if (window.innerWidth >= 992) {
    mobileMenu.value = false;
    modal01.value = false;
    visibleMobileSearchDialog.value = false;
  }
}
function handleScroll() {
  menuSearch.value?.hide();
  menuAlarm.value?.hide();
}
const baseStore = useBaseStore();
const remainSessionTime = ref(0);
watch(()=>baseStore.remainSessionTime, (newVal) => {
  remainSessionTime.value = newVal.minutes;

}, {deep: true, immediate: true});

let timer: any;
 
 
onMounted(() => {
  timer = setInterval(() => {
    // 로그인 상태일 때만 감소
     remainSessionTime.value--;
  }, 60000); // 60초(1분) 간격

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize(); // 초기 화면 크기 확인
});

onBeforeUnmount(() => {
  clearInterval(timer);
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped></style>
