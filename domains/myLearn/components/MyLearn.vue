<template>
  <div class="ibk-mypage-main-head">
    <div class="ibk-inner">
      <div class="ibk-mypage-main-head__start">
        <div class="ibk-mypage-main-head-badge">
          <Badge :value="authStore.userInfo.jbttDsncNm ?? ''" style="background: #fff; color: #616dd6"></Badge>
          <Badge :value="Utility.getUserBelong()" style="background: #fff; color: #5a5e6c"></Badge>
        </div>
        <h2>
          {{ authStore.userInfo.userNm }}님
          <Button icon="ibk-icon-20-modify" text @click="visibleUserInfoDialog = true" />
          <span>|</span>
          <strong> <i class="ibk-icon-24-certification"></i>{{ mySkillInfo?.skllClsfNm || '대표 스킬 미설정' }} </strong>
        </h2>
        <div class="ibk-mypage-main-head-link">
          <p>
            <NuxtLink to="/" @click="handleStudyIngClick">
              학습현황
              <strong>{{ myLearnStore.studyRoomHeaderCount?.studyIngCount ?? 0 }}</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/" @click="handleStudyScheduleClick">
              학습일정
              <strong>{{ myLearnStore.studyRoomHeaderCount?.studyScheduleCount ?? 0 }}</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/" @click="handleStudyHistoryClick">
              연수내역
              <strong>{{ myLearnStore.studyRoomHeaderCount?.studyHistoryCount ?? 0 }}</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/" @click="handleStudyLikeClick">
              찜한연수
              <strong>{{ myLearnStore.studyRoomHeaderCount?.studyLikeCount ?? 0 }}</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/" @click="handleStudyReviewClick">
              수강후기
              <strong>{{ myLearnStore.studyRoomHeaderCount?.studyReviewCount ?? 0 }}</strong>
            </NuxtLink>
          </p>
        </div>
      </div>
      <div class="ibk-mypage-main-head__end">
        <div class="ibk-mypage-main-head-button">
          <Button icon="ibk-icon-16-play" label="나의 강의실가기" rounded @click="handleStudyIngClick" />
          <Button icon="ibk-icon-16-favorites-primary" label="나의 대표 Skill 설정" @click="openSkillDialog" rounded severity="white" />
        </div>
        <hr />

        <div class="ibk-mypage-main-head-menu">
          <NuxtLink to="/" @click="goMileage">
            <p>
              <i class="ibk-icon-20-mileage-primary"></i>
              마일리지 현황
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
          <NuxtLink to="/" @click="goFacility">
            <p>
              <i class="ibk-icon-20-home-primary"></i>
              시설 신청
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
          <NuxtLink to="/" @click="goApproval">
            <p>
              <i class="ibk-icon-20-wallet-primary"></i>
              결재관리
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div class="ibk-lectureroom-my">
    <div v-if="target == 'main'" class="ibk-inner">
      <MyLearnMain />
    </div>
    <div v-if="target == 'calendar'" class="ibk-inner">
      <MyStudyCalendar />
    </div>
    <div v-if="target == 'lectureHistory'" class="ibk-inner">
      <MyLearnHistory />
    </div>
    <div v-if="target == 'lecture'" class="ibk-inner">
      <div class="ibk-lectureroom-my-contents">
        <h3>나의 강의실</h3>
        <Tabs :value="myLearnStore.studyRoomTab as any">
          <TabList>
            <Tab value="0" @click="changeStudyRoomTab('0')">학습중 연수</Tab>
            <Tab value="1" @click="changeStudyRoomTab('1')">신청 · 대기 연수</Tab>
            <Tab value="2" @click="changeStudyRoomTab('2')">종료 연수</Tab>
            <Tab value="3" @click="changeStudyRoomTab('3')">나의 강의</Tab>
            <Tab value="interest" @click="changeStudyRoomTab('interest')">찜 · 관심연수</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="ibk-lectureroom-my-list" v-if="myLearnStore.courseDegreeIng?.contents.length">
                <div class="ibk-lectureroom-my-list__item"
                  v-for="(item, index) of myLearnStore.courseDegreeIng?.contents" :key="`ing-${index}`">
                  <MyLearnProduct :thumb="true" :time="false" :title="true" :date="true" :progress="true"

                    :lesson="item" />

                </div>
              </div>
              <div v-else class="empty_list">
                <p>학습중인 연수가 없습니다.</p>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link
                  v-if="Utility.hasMore(myLearnStore.courseDegreeIng?.paging)" @click="fetchData('ing')" />
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="ibk-lectureroom-my-list" v-if="myLearnStore.courseDegreeWait?.contents.length">
                <div class="ibk-lectureroom-my-list__item"
                  v-for="(item, index) of myLearnStore.courseDegreeWait?.contents" :key="`wait-${index}`">
                  <MyLearnProduct :thumb="true" :time="false" :title="true" :date="true" :lesson="item"
                    :isChangeDegree="true" />
                </div>
              </div>
              <div v-else class="empty_list">
                <p>신청 · 대기 연수가 없습니다.</p>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link
                  v-if="Utility.hasMore(myLearnStore.courseDegreeWait?.paging)" @click="fetchData('wait')" />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="ibk-lectureroom-my-list" v-if="myLearnStore.courseDegreeEnd?.contents.length">
                <div class="ibk-lectureroom-my-list__item"
                  v-for="(item, index) of myLearnStore.courseDegreeEnd?.contents" :key="`end-${index}`">
                  <MyLearnProduct :thumb="true" :time="false" :title="true" :date="true" :lesson="item" />
                </div>
              </div>
              <div v-else class="empty_list">
                <p>종료 연수가 없습니다.</p>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link
                  v-if="Utility.hasMore(myLearnStore.courseDegreeEnd?.paging)" @click="fetchData('end')" />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div class="ibk-lectureroom-my-list" v-if="myLearnStore.courseDegreeMyLesson?.contents.length">
                <div class="ibk-lectureroom-my-list__item"
                  v-for="(item, index) of myLearnStore.courseDegreeMyLesson?.contents" :key="`myLesson-${index}`">
                  <MyLearnProduct :thumb="true" :time="true" :title="true" :date="true" :lesson="item" />
                </div>
              </div>
              <div v-else class="empty_list">
                <p>나의 강의가 없습니다.</p>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link
                  v-if="Utility.hasMore(myLearnStore.courseDegreeMyLesson?.paging)" @click="fetchData('myLesson')" />
              </div>
            </TabPanel>
            <TabPanel value="interest">
              <div class="ibk-lectureroom-my-list" v-if="myLearnStore.courseDegreeInterest?.contents.length">
                <div class="ibk-lectureroom-my-list__item"
                  v-for="(item, index) of myLearnStore.courseDegreeInterest?.contents" :key="`interest-${index}`">
                  <MyLearnProduct :thumb="true" :time="false" :title="true" :date="false" :lesson="item"  studyRoomType="interest"/>
                </div>
              </div>
              <div v-else class="empty_list">
                <p>찜 · 관심연수가 없습니다.</p>
              </div>
              <div class="ibk-lectureroom-my-list-button">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link
                  v-if="Utility.hasMore(myLearnStore.courseDegreeInterest?.paging)" @click="fetchData('interest')" />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
    <div v-if="target == 'facility'" class="ibk-inner">
      <div class="ibk-apply">
        <div class="ibk-apply-head ibk-apply-head--tab">
          <h1>사용시설 신청내역</h1>
        </div>
        <Tabs :value="tab">
          <TabList>
            <Tab value="training" @click="changeTab('training')">연수원</Tab>
            <Tab value="classRoom" @click="changeTab('classRoom')">강의실</Tab>
            <Tab value="studio" @click="changeTab('studio')">스튜디오</Tab>
          </TabList>
          <TabPanels>
            <LazyTrainingDetailTab />
            <LazyClassRoomDetailTab />
            <LazyStudioDetailTab />
          </TabPanels>
        </Tabs>
      </div>
    </div>
    <div v-if="target == 'mileage'" class="ibk-inner">
      <div class="ibk-payment">
        <div class="ibk-payment-head ibk-payment-head--tab">
          <h2>학습 마일리지</h2>
        </div>
        <Tabs :value="tab">
          <TabList>
            <Tab value="mileageHistory" @click="changeMileageTab('mileageHistory')">마일리지 현황</Tab>
            <Tab value="mileageApplyHistory" @click="changeMileageTab('mileageApplyHistory')">신청내역</Tab>
          </TabList>
          <TabPanels>
            <MileageHistoryTab />
            <MileageApplyHistoryTab />
          </TabPanels>
        </Tabs>
      </div>
    </div>
    <div v-if="target == 'review'" class="ibk-inner">
      <MyLearnReviewList />
    </div>
    <Approval v-else-if="target == 'approval'" />
  </div>
  <ConfirmDialog></ConfirmDialog>



  <MyLearnReviewDialog v-if="visibleReviewDialog" v-model:visible="visibleReviewDialog" />
  <MyLearnChangeDegreeDialog v-if="myLearnStore.visibleChangeDegreeDialog" v-model:visible="myLearnStore.visibleChangeDegreeDialog" />
  <MyLearnUserInfoDialog v-if="visibleUserInfoDialog" v-model:visible="visibleUserInfoDialog" />
  <MyLearnRepresentativeSkillDialog v-if="visibleSkillDialog" v-model:visible="visibleSkillDialog" />
</template>

<script setup lang="ts">
import Utility from '~/lib/Utility';
import { useMyLearnStore } from '../store';
import { useAuthStore } from '../../auth';
import { ref } from 'vue';
import MileageHistoryTab from '~/domains/mileage/components/MileageHistoryTab.vue';
import UtilMyLearn from '../UtilMyLearn';
import type { MySkillOutVo } from '~/api-client';
const myLearnStore = useMyLearnStore();
const authStore = useAuthStore();
const modal01 = ref(false);
const modal02 = ref(false);
const confirm = useConfirm();
const radio = ref('');
const checkbox = ref('');
const visibleReviewDialog = ref(false);
const visibleUserInfoDialog = ref(false);
const visibleSkillDialog = ref(false);
const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);
const mySkillInfo = computed(() => myLearnStore.mySkill);

myLearnStore.studyRoomTab = route.query.studyRoomTab ? route.query.studyRoomTab as string : '0';
watch(()=>route.query.tab,(newVal)=>{
  tab.value = newVal as string;
})
const handleStudyIngClick = () => {
    // console.log('학습현황 clicked');
    UtilMyLearn.moveTarget('lecture', {studyRoomTab: '0'});
};
const target = computed(() => {
  const targetName = route.query.target as string
  if ($isEmpty(targetName)){
    return 'main'
  }
  return targetName
});

const fetchData = async (target: string, isRefresh = false) => {
  if (target == 'interest') {
    await myLearnStore.getCourseInterestList(isRefresh);
  } else if (target == 'wait') {
    await myLearnStore.getCourseDegreeWait(isRefresh);
  } else if (target == 'myLesson') {
    await myLearnStore.getCourseDegreeMyLesson(isRefresh);
  } else if (target == 'ing') {
    await myLearnStore.getCourseDegreeIng(isRefresh);
  } else if (target == 'end') {
    await myLearnStore.getCourseDegreeEnd(isRefresh);
  }
};

myLearnStore.getMySkill();
myLearnStore.getStudyRoomHeaderCount();
fetchData('interest', true);
fetchData('wait', true);
fetchData('myLesson', true);
fetchData('ing', true);
fetchData('end', true);



const handleStudyScheduleClick = () => {
  UtilMyLearn.moveTarget('calendar');
};

const handleStudyHistoryClick = () => {
  UtilMyLearn.moveTarget('lectureHistory');
};

const handleStudyLikeClick = () => {
  changeStudyRoomTab('interest');
};

const handleStudyReviewClick = () => {
  UtilMyLearn.moveTarget('review');
};

const changeTab = (target:string) => {
  tab.value = target;
  UtilMyLearn.moveTarget('facility', {tabName: tab.value});
}

const changeMileageTab = (target:string) => {
  tab.value = target;
  UtilMyLearn.moveTarget('mileage', {tabName: tab.value});
}

const changeStudyRoomTab = (tab:string) => {
  UtilMyLearn.moveTarget(null, {studyRoomTab: tab});
}

const goFacility = () => {
  tab.value = 'training';
  UtilMyLearn.moveTarget('facility');
}

const goMileage = () => {
  tab.value = 'mileageHistory';
  UtilMyLearn.moveTarget('mileage');
}

const goApproval = () => {
  UtilMyLearn.moveTarget('approval');
}

const openSkillDialog = () => {
  visibleSkillDialog.value = true;
}

onBeforeMount(async () => {
  if(route.query.target == 'facility'){
    tab.value = 'training';
  }else if(route.query.target == 'mileage'){
    tab.value = 'mileageHistory';
  }

  if (route.query.tab) {
    tab.value = route.query.tab as string
  }
})

</script>
<style scoped>
.empty_list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.clickable-stat {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clickable-stat:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 15%;
}
</style>
