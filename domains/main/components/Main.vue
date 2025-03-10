<template>
  <div class="ibk-main">
    <div class="ibk-main-kv">
      <SlideBanner v-if="slideBanner" />
    </div>

    <div class="ibk-main-quick">
      <!-- M3: 퀵메뉴 -->
      <MainQuickMenu v-if="quickMenu" />
    </div>

    <div v-if="authStore.userInfo" class="ibk-inner">
      <div class="ibk-main-my">
        <div class="ibk-main-my-info">
          <div class="ibk-main-my-info-head">
            <h5>{{ `${authStore.userInfo.userNm}님, 환영합니다.` }}</h5>
            <span class="cursor-pointer" @click="goSignDetail"> 결재 건 수 <strong>{{ store.mainMyApproval?.myApprovalCount || 0 }}</strong>건 </span>
          </div>
          <div class="ibk-main-my-info-body" style="height:100%;">
            <MainMyCourseDegreeItem v-if="store.mainCourseDegreeList.length > 0" v-for="(item, index) in store.mainCourseDegreeList"
                                :key="`${item.dutyEdctCd}_${item.edctDsprNo}_${index}`" :item="item" />

            <div v-else style="display: flex; justify-content: center; align-items: center; height:100%;">
              <div class="text-center">현재 연수 내용이 없습니다.</div>
            </div>
          </div>
        </div>
        <div class="ibk-main-my-tabs">
          <MainMyInfo />
        </div>
      </div>
    </div>

    <div class="ibk-inner">
      <MainPopularCourse />
    </div>

    <div class="ibk-inner">
      <MainRecentCourse />
    </div>

    <div class="ibk-inner">
      <MainReview />
    </div>

    <div class="ibk-inner">
      <div class="ibk-main-board">
        <div class="ibk-main-board-section">
          <MainNotice />
        </div>
        <div class="ibk-main-board-section">
          <MainCourseSchedule />
        </div>
      </div>
    </div>

    <div class="ibk-footer-chat">
      <NuxtLink @click="mainDialogVisible = true"><i class="ibk-icon-76-chat"></i></NuxtLink>
    </div>
    <MainQuestionDialog v-model:visible="mainDialogVisible"></MainQuestionDialog>
    <MainPopupDialog v-for="popup in popupList" v-model:visible="popup.ui_visible" :popup="popup"></MainPopupDialog>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store';
import MainRecentCourse from '~/domains/main/components/MainRecentCourse.vue';
import { useAuthStore } from '~/domains/auth';
import MainQuickMenu from '~/domains/main/components/MainQuickMenu.vue';
import MainQuestionDialog from './MainQuestionDialog.vue';
import type { MainPopup } from '~/domains/main';
import Utility from '~/lib/Utility';

const router = useRouter();
const store = useMainStore();
const authStore = useAuthStore();

const slideBanner = computed(() => store.mainModuleList.find(v => v.desgMdulTcd === 'M2') || null);
const quickMenu = computed(() => store.mainModuleList.find(v => v.desgMdulTcd === 'M3') || null);

const chartData = ref();
const chartOptions = ref();

const popupList = computed(() =>
  store.mainPopupList.filter((item: MainPopup) => {
    return !Utility.hasCachedInOneDay(item.ppupId, 'popup');
  }).map((item) => ({
    ...item,
    ui_visible: true,
    ui_is_open_oneday: false,
  })) || [],
);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['여권심사', '자산운영', '외환', '개인소호', '디지털', 'PB', '컴플라이언스', 'IB'],
    datasets: [
      {
        data: [50, 30, 20, 10, 5, 5, 5, 5],
        backgroundColor: ['#308AF2', '#30D158', '#FFCC00', '#FF81AE', '#8756ED', '#2ACAC8', '#666666', '#BBB'],
        borderColor: 'transparent', // 테두리 색상을 투명으로 설정
        borderWidth: 0, // 테두리의 두께를 0으로 설정
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10, // 아이콘 너비
          boxHeight: 8, // 아이콘 높이
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
};

const getMainModuleList = async () => {
  await store.getMainModuleList();
};

const getMainPopularCourseList = async () => {
  await store.getMainPopularCourseList();
};

const getMainRecentCourseList = async () => {
  await store.getMainRecentCourseList();
};

const getMainReviewList = async () => {
  await store.getMainReviewList();
};

const getMainNoticeList = async () => {
  await store.getMainNoticeList();
};

const getMyCourseDegree = async () => {
  await store.getMyCourseDegree();
};

const getMainPopup = async () => {
  await store.getMainPopupList();
};

const mainDialogVisible = ref<boolean>(false);

const goSignDetail = () => {
  router.push('/myLearn?target=approval');
}

const getMyApprovalCount = async () => {
  await store.getMyApprovalCount();
}

onBeforeMount(async () => {
  getMainModuleList();
  getMyCourseDegree();
  getMainPopularCourseList();
  getMainRecentCourseList();
  getMainReviewList();
  getMainNoticeList();
  getMainPopup();
  getMyApprovalCount();
});

onMounted(async () => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  //await getCourseNoticeList();
  //await getCourseQnaList();
  //await getCourseLibraryList();
});

</script>
