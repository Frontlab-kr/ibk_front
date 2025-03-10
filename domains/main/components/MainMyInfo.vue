<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">My Skill</Tab>
      <Tab value="1">My HRD</Tab>
      <Tab value="2">학습자료</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="ibk-main-my-skill">
          <div class="ibk-main-my-skill-head">
            <p>
              <i class="ibk-icon-24-medal"></i>
              <span v-if="mySkillInfo">{{`${mySkillInfo?.skllClsfNm} LV.${getSkillCategoryLevel} 스코어`}}</span>
              <span v-else>대표 스킬 미설정</span>
            </p>
            <span v-if="mySkillInfo" class="text-primary">{{`${mySkillInfo?.skllClsfScore || 0} pt`}}</span>
          </div>
          <div class="ibk-main-my-skill-score">
            <p>
              <span>Level 1</span>
              <span>Level 2</span>
              <span>Level 3</span>
            </p>
            <ProgressBar :value="50"></ProgressBar>
          </div>
          <div class="ibk-main-my-skill-state">
            <Swiper :modules="[SwiperNavigation]" :space-between="0" :loop="true" :navigation="true">
              <SwiperSlide v-for="slide in 3" :key="slide">
                <div class="mo">
                  <h4><i class="ibk-icon-24-medal"></i>Level 1</h4>
                </div>
                <dl>
                  <dt class="checked">
                    <span class="text-primary">이수완료</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-skill-state-item checked">
                      <strong>필수</strong>
                      <p>4/4 이수</p>
                    </div>
                    <div class="ibk-main-my-skill-state-item">
                      <strong>선택</strong>
                      <p>1/4 이수</p>
                    </div>
                  </dd>
                </dl>
                <hr />
                <div class="mo">
                  <h4><i class="ibk-icon-24-medal"></i>Level 1</h4>
                </div>
                <dl>
                  <dt class="checked">
                    <span class="text-primary">이수완료</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-skill-state-item checked">
                      <strong>필수</strong>
                      <p>4/4 이수</p>
                    </div>
                    <div class="ibk-main-my-skill-state-item">
                      <strong>선택</strong>
                      <p>1/4 이수</p>
                    </div>
                  </dd>
                </dl>
                <hr />
                <div class="mo">
                  <h4><i class="ibk-icon-24-medal"></i>Level 1</h4>
                </div>
                <dl>
                  <dt>
                    <span class="text-primary">이수완료</span>
                  </dt>
                  <dd>
                    <div class="ibk-main-my-skill-state-item">
                      <strong>필수</strong>
                      <p>4/4 이수</p>
                    </div>
                    <div class="ibk-main-my-skill-state-item">
                      <strong>선택</strong>
                      <p>1/4 이수</p>
                    </div>
                  </dd>
                </dl>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="ibk-main-my-hrd">
          <div class="ibk-main-my-hrd-head">
            <p>
              <i class="ibk-icon-24-radioCheck"></i>
              3급 부점장 보임자격
            </p>
            <span>연수 평정점수(10점) : 기본점수 (3점) + 학점취득점수(7점)</span>
          </div>
          <div class="ibk-main-my-hrd-state">
            <div class="ibk-main-my-hrd-state-section">
              <h4><i class="ibk-icon-24-medal"></i>학점이수</h4>
              <dl>
                <dt class="checked">
                  <span class="text-primary">이수완료</span>
                </dt>
                <dd>
                  <div class="ibk-main-my-skill-state-item checked">
                    <strong>필수학점</strong>
                    <p>4/4 이수완료</p>
                  </div>
                  <div class="ibk-main-my-skill-state-item">
                    <strong>선택학점</strong>
                    <p>4/4 이수</p>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="ibk-main-my-hrd-state-section">
              <h4><i class="ibk-icon-24-medal"></i>연수평정점수</h4>
              <dl>
                <dt class="none">
                  <span class="text-primary">9.79 / 10</span>
                </dt>
                <dd>
                  <div class="ibk-main-my-skill-state-item none">
                    <strong>연수평균</strong>
                    <p>97점</p>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="2">
        <div class="ibk-main-my-data">
          <div class="ibk-main-my-data-head">
            <h5>
              <i class="ibk-icon-24-radioCheck"></i>
              학습자료
            </h5>
            <Button label="자세히보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" @click="goDetailLibrary" />
          </div>
          <div class="ibk-main-my-data-body">
            <MainMyInfoLibraryItem v-for="(item, index) in libraryData" :key="`${item.blbrPtngId}_${index}`" :item="item" />
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
import { type MainCourse, useMainStore } from '~/domains/main';
import { useEducationStore } from '~/domains/course/education';
import type { CommunityBoardContents, CommunityBoardContentsData } from '~/domains/community';
import type { SklRoadmapLevelStandardOutVo } from '~/api-client';

const router = useRouter();

const educationStore = useEducationStore();
const store = useMainStore();
const libraryData = ref<CommunityBoardContents[]>([]);

const goDetailLibrary = () => {
  router.push('/community?tab=2');
}

const getLibrary = async () => {
  const data  = await $wrap($request().inqBoardContentsPage({ pageSize: 3, pageNo: 1, cybrTriuBlbrKcd: '1', blbrNo: '2',}));
  const result = $item(data) as CommunityBoardContentsData;
  libraryData.value = result.contents;
}

const skillStandard = ref<SklRoadmapLevelStandardOutVo[]>([]);
const mySkillInfo = ref();

const getSkillStandard = async () => {
  const data = await $wrap($request().inqSklRoadmapLevelStandard());
  const result = $item(data);
  skillStandard.value = result;
}

const getSkillCategoryLevel = computed(() => {
  //높은 레벨부터 조회됨
  let result = 0;
  skillStandard.value.some((standard, i) => {
    const { minBaseScr, maxBaseScr, cpctStgDcd } = standard;
    const score = mySkillInfo.value.skllClsfScore || 0;

    if ((i === 0 && score >= minBaseScr) ||
        (i > 0 && score >= minBaseScr && score <= maxBaseScr)) {
      result = Number(cpctStgDcd);
      return true; // 조건에 맞는 경우 반복을 중단
    }
  });
  return result;
});

const getMySkillInfo = async () => {
  const data = await $wrap($request().inqMySkill());
  mySkillInfo.value = $item(data);
}

onBeforeMount(()=>{
  getSkillStandard();
  getMySkillInfo();
  getLibrary();
})


</script>
