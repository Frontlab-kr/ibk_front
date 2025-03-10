<template>
    <div class="ibk-inner">
        <div class="ibk-mypage-main-chart">
            <div class="ibk-mypage-main-roadmap">
                <div class="ibk-mypage-main-roadmap-head">
                    <h5>Skill Roadmap 달성 현황</h5>
                    <Button label="로드맵 바로가기" outlined severity="secondary" @click="goRoadmap"/>
                </div>
                <div class="ibk-mypage-main-roadmap-body">
                    <MyLearnMainRoadmapChart v-model:currentChartSkillCategory="currentChartSkillCategory" />
                </div>
            </div>
            <div class="ibk-mypage-main-chartdetail">
                <div class="ibk-mypage-main-chartdetail-head">
                    <h5>{{ currentChartSkillCategory.nm }}</h5>
                </div>
                <div class="ibk-mypage-main-chartdetail-body">
                    <div class="ibk-mypage-main-chartdetail-title">
                        <p>
                          <i class="ibk-icon-24-medal"></i>
                          <span>{{`${currentChartSkillCategory.nm} LV.${getSkillCategoryLevel} 스코어`}}</span>
                        </p>
                        <span class="text-primary">{{`${getCurrentSkillCategoryScore || 0} pt`}}</span>
                    </div>
                    <div class="ibk-mypage-main-chartdetail-chart">
                      <MyLearnMainRoadmapDetailChart v-model:currentChartSkillCategory="currentChartSkillCategory"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ibk-mypage-main-hrd">
            <div class="ibk-mypage-main-hrd-head">
                <h5>개인연수평균</h5>
            </div>
            <div class="ibk-mypage-main-hrd-body">
                <div class="ibk-main-my-hrd">
                    <div class="ibk-main-my-hrd-head">
                        <p>
                            <i class="ibk-icon-24-radioCheck"></i>
                            3급 부점장 보임자격
                        </p>
                        <span>연수 평정점수(10점) : 기본점수 (3점) + 학점취득점수(7점)</span>
                    </div>
                    <div class="ibk-main-my-hrd-state">
                        <div class="ibk-main-my-hrd-state-section" style="min-width: 800px">
                            <h4><i class="ibk-icon-24-medal"></i>학점이수</h4>
                            <dl>
                                <dt class="checked">
                                    <span class="text-primary">이수완료</span>
                                </dt>
                                <dd>
                                    <div class="ibk-main-my-hrd-state-item checked">
                                        <strong>필수학점</strong>
                                        <p>4/4 이수완료</p>
                                    </div>
                                    <div class="ibk-main-my-hrd-state-item">
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
                                    <div class="ibk-main-my-hrd-state-item none">
                                        <strong>연수평균</strong>
                                        <p>97점</p>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ibk-mypage-main-state">
            <div class="ibk-mypage-main-state-head">
                <h5>역량개발 지원현황</h5>
                <NuxtLink to="/"> 더보기 </NuxtLink>
            </div>
            <div class="ibk-mypage-main-state-body">
    <div class="pc">
        <div class="ibk-table">
            <table>
                <colgroup>
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                </colgroup>
                <thead>
                    <tr>
                        <th colspan="6">{{ new Date().getFullYear() }}년</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>학원수강료</th>
                        <th>시험수강료</th>
                        <th>자격증</th>
                        <th>어학</th>
                        <th>학자금</th>
                        <th>학술연수</th>
                    </tr>
                    <tr>
                        <!-- 학원수강료 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('HAGWIN')">
                                {{ getCostInfo('HAGWIN').count }}건 /
                                {{ formatAmount(getCostInfo('HAGWIN').amount) }}원
                            </a>
                        </td>
                        <!-- 시험수강료 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('EXAM')">
                                {{ getCostInfo('EXAM').count }}건 /
                                {{ formatAmount(getCostInfo('EXAM').amount) }}원
                            </a>
                        </td>
                        <!-- 자격증 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('LICENSE')">
                                {{ getCostInfo('LICENSE').count }}건 /
                                {{ formatAmount(getCostInfo('LICENSE').amount) }}원
                            </a>
                        </td>
                        <!-- 어학 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('LANGUAGE')">
                                {{ getCostInfo('LANGUAGE').count }}건 /
                                {{ formatAmount(getCostInfo('LANGUAGE').amount) }}원
                            </a>
                        </td>
                        <!-- 학자금 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('UNIVERSITY')">
                                {{ getCostInfo('UNIVERSITY').count }}건 /
                                {{ formatAmount(getCostInfo('UNIVERSITY').amount) }}원
                            </a>
                        </td>
                        <!-- 학술연수 -->
                        <td>
                            <a href="" @click.prevent="handleCostClick('CONFERENCE')">
                                {{ getCostInfo('CONFERENCE').count }}건 /
                                {{ formatAmount(getCostInfo('CONFERENCE').amount) }}원
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mo">
        <div class="ibk-mypage-main-state-list">
            <h6>{{ new Date().getFullYear() }}년</h6>
            <ul>
                <li v-for="(type, index) in costTypes" :key="index">
                    <strong>{{ getCostTypeName(type) }}</strong>
                    <a href="" @click.prevent="handleCostClick(type)">
                        {{ getCostInfo(type).count }}건 /
                        {{ formatAmount(getCostInfo(type).amount) }}원
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
        </div>
        <div class="ibk-mypage-main-state">
            <div class="ibk-mypage-main-state-head">
                <h5>연수 마일리지 현황</h5>
                <NuxtLink to="/"
                    @click="UtilMyLearn.moveTarget('mileage', { tabName: 'mileageHistory', isScrollToTop: true })"> 더보기
                </NuxtLink>
            </div>
            <div class="ibk-mypage-main-state-body">
                <div class="ibk-table">
                    <table class="table-bordered" style="width:100%;">
                        <colgroup>
                            <col style="width: 25%" />
                            <col style="width: 25%" />
                            <col style="width: 25%" />
                            <col style="width: 25%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>
                                    취득<br class="mo" />
                                    마일리지
                                </th>
                                <th>합계</th>
                                <th>
                                    누적<br class="mo" />
                                    마일리지
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">연수</td>
                                <td class="text-center">{{ totalMilageData?.learningSum ?
                                    Utility.setCommaPer3Digit(totalMilageData.learningSum) : 0 }}</td>
                                <td class="text-center" rowspan="3">{{ totalMilageData?.mlgOcrnScrYearSum ?
                                    Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrYearSum) : 0 }}</td>
                                <td class="text-center" rowspan="3">{{ totalMilageData?.mlgOcrnScrSum ?
                                    Utility.setCommaPer3Digit(totalMilageData.mlgOcrnScrSum) : 0 }}</td>
                            </tr>
                            <tr>
                                <td class="text-center">자격증</td>
                                <td class="text-center">{{ totalMilageData?.licenseSum ?
                                    Utility.setCommaPer3Digit(totalMilageData.licenseSum) : 0 }}</td>
                            </tr>
                            <tr>
                                <td class="text-center">기타</td>
                                <td class="text-center">{{ totalMilageData?.etcSum ?
                                    Utility.setCommaPer3Digit(totalMilageData.etcSum) : 0 }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="ibk-mypage-main-board">
            <div class="ibk-mypage-main-board-head">
                <h5>시설신청 및 결재관리</h5>
            </div>
            <div class="ibk-mypage-main-board-body">
                <div class="ibk-mypage-main-board-list">
                    <div class="ibk-mypage-main-board-list-head">
                        <h6>사설신청</h6>
                        <Button v-if="facilityStore.mypageFacilityData.paging.totalCount ?? 0 > 0" label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small"
                            @click="UtilMyLearn.moveTarget('facility', { tabName: 'training', isScrollToTop: true })" />
                    </div>
                    <template v-if="facilityStore.mypageFacilityData.paging.totalCount ?? 0 > 0">
                        <NuxtLink class="ibk-mypage-main-board-list-item"
                            v-for="(item, idx) in facilityStore.mypageFacilityData.contents" :key="idx">
                            <div class="ibk-mypage-main-board-list-item__title">
                                <div class="ibk-mypage-main-board-list-item__badge">
                                    <!-- 승인상태에 따른 배지 표시 -->
                                    <Badge :value="item.fcltPsiDcd === 'Y' ? '배정' : '미배정'" :style="{
                                        background: item.fcltPsiDcd === 'Y' ? '#234eaa' : '#A0A9C0',
                                        color: '#ffffff'
                                    }">
                                    </Badge>
                                </div>
                                <p>{{ item.fcltCdNm }}</p>
                            </div>
                            <div class="ibk-mypage-main-board-list-item__date">
                                신청일 {{ formatDate(item.aplcTs as any) }}
                                <hr class="pc" />
                                <div>
                                    입실일 {{ formatDate(item.rsvtSttgTs as any) }}
                                    <hr />
                                    퇴실일 {{ formatDate(item.rsvtFnshTs as any) }}
                                </div>
                            </div>
                        </NuxtLink>
                    </template>
                    <div v-else class="ibk-mypage-main-board-list-item">
                        <p>시설신청 내역이 없습니다.</p>
                    </div>
                </div>
                <div class="ibk-mypage-main-board-list">
                    <div class="ibk-mypage-main-board-list-head">
                        <h6>결재관리</h6>
                        <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small"
                            @click="UtilMyLearn.moveTarget('approval', { isScrollToTop: true })" />
                    </div>
                    <template v-if="approvalListTotalCount > 0">
                        <NuxtLink class="ibk-mypage-main-board-list-item" v-for="(item, idx) in approvalList"
                            :key="idx">
                            <div class="ibk-mypage-main-board-list-item__title">
                                <div class="ibk-mypage-main-board-list-item__badge">
                                    <Badge :value="item.aplcScdNm" :style="{
                                        'background': item.aplcScd == 'F' ? 'rgba(35, 78, 170, 0.08)' : '#234eaa',
                                        'color': item.aplcScd == 'F' ? '#234eaa' : '#ffffff'
                                    }">
                                    </Badge>
                                </div>
                                <p>
                                    <span>결재번호 {{ item.snctApfrNo }}</span>
                                    {{ item.ttlNm }}
                                </p>
                            </div>
                            <div class="ibk-mypage-main-board-list-item__date">
                                <div>
                                    신청일 {{ formatDate(item.aplcTs) }}
                                    <hr />
                                    연수기간 {{ formatDateRange(item.lrngSttgTs, item.lrngFnshTs) }}
                                </div>
                                <div v-if="item.dlplBscAdr" class="delivery-info">
                                    배송지: {{ item.dlplBscAdr }}
                                </div>
                            </div>
                        </NuxtLink>
                    </template>
                    <div v-else class="ibk-mypage-main-board-list-item">
                        <p>결재 내역이 없습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IdiMyCostOutVo, SklRoadmapLevelStandardOutVo } from '../../../api-client';
import Utility from '../../../lib/Utility';
import { useApprovalStore } from '../../approval/store';
import { useFacilityStore } from '../../facility';
import { useMileageStore } from '../../mileage';
import { useMyLearnStore } from '../store';
import UtilMyLearn from '../UtilMyLearn';
import type { SkillCategory } from '~/domains/myLearn/type';

const router = useRouter();
const chartData01 = ref();
const chartOptions01 = ref();
const mileageStore = useMileageStore();
const totalMilageData = ref([]);
const approvalList = ref<any>();
const approvalListTotalCount = ref(0);
const mySkillInfo = computed(() => myLearnStore.mySkill)
const currentChartSkillCategory = reactive<SkillCategory>({
  vl: '',
  nm: '',
});

watch(
  ()=> currentChartSkillCategory,
  ()=>{
    myLearnStore.getMySkillCategoryStatisticsDetail(currentChartSkillCategory.vl);
  },
  { deep: true }
)

// 비용 타입 정의
const costTypes = ['HAGWIN', 'EXAM', 'LICENSE', 'LANGUAGE', 'UNIVERSITY', 'CONFERENCE'];

// 비용 타입별 한글명 매핑
const costTypeNames = {
    HAGWIN: '학원수강료',
    EXAM: '시험수강료',
    LICENSE: '자격증',
    LANGUAGE: '어학',
    UNIVERSITY: '학자금',
    CONFERENCE: '학술연수'
};

/**
 * 비용 정보를 가져오는 함수
 * @param type - 비용 타입 (HAGWIN | EXAM | LICENSE | LANGUAGE | UNIVERSITY | CONFERENCE)
 * @returns {{ count: number, amount: number }} 건수와 금액 정보
 */
 const getCostInfo = (type: string) => {
    // 비용 목록이 없는 경우 빈 배열로 초기화
    const costList: IdiMyCostOutVo[] = myLearnStore.myCostList || [];

    // 해당 타입의 비용 데이터 필터링
    const typeData = costList
        .filter(item => !$isEmpty(item))
        .find(item => item.spmyAplcDcd === type);

    return {
        // 건수는 1건으로 처리 (각 타입별로 1건씩 집계됨)
        count: typeData ? 1 : 0,
        // pamtAmt(지원예정금액)이 있으면 해당 금액, 없으면 trngAtlcAmt(학원비) 사용
        amount: typeData?.pamtAmt || typeData?.trngAtlcAmt || 0
    };
};

// 비용 타입 한글명 가져오기
const getCostTypeName = (type: string) => {
    return costTypeNames[type as keyof typeof costTypeNames];
};

// 금액 포맷팅
const formatAmount = (amount: number) => {
    return amount.toLocaleString();
};

// 클릭 핸들러
const handleCostClick = (type: string) => {
    // 각 타입별 상세 페이지로 이동하는 로직 구현
    // console.log(`Clicked ${type}`);
};
const approvalStore = useApprovalStore();
const facilityStore = useFacilityStore();
const myLearnStore = useMyLearnStore();

const skillStandard = ref<SklRoadmapLevelStandardOutVo[]>([]);

const getSkillStandard = async () => {
  const data = await $wrap($request().inqSklRoadmapLevelStandard());
  const result = $item(data);
  skillStandard.value = result;
}

const getCurrentSkillCategoryScore = computed(()=>{
  const findIndex = myLearnStore.mySkillCategoryStatistics.findIndex((v)=>v.skllClsfVl === currentChartSkillCategory.vl);
  return findIndex > -1 ? myLearnStore.mySkillCategoryStatistics[findIndex].myScore : 0;
});

const getSkillCategoryLevel = computed(() => {
  //높은 레벨부터 조회됨
  let result = 0;
  skillStandard.value.some((standard, i) => {
    const { minBaseScr, maxBaseScr, cpctStgDcd } = standard;
    const score = getCurrentSkillCategoryScore.value || 0;

    if ((i === 0 && score >= minBaseScr) ||
        (i > 0 && score >= minBaseScr && score <= maxBaseScr)) {
      result = Number(cpctStgDcd);
      return true; // 조건에 맞는 경우 반복을 중단
    }
  });
  return result;
});

const goRoadmap = () => {
  router.push('/skill?tab=roadMap&subTab=0');
}

onBeforeMount(async ()=>{
  getSkillStandard();

  await myLearnStore.getMySkillCategoryStatistics();
  currentChartSkillCategory.vl = mySkillInfo.value?.skllClsfVl ? mySkillInfo.value?.skllClsfVl : myLearnStore.mySkillCategoryStatistics[0]?.skllClsfVl || '';
  currentChartSkillCategory.nm = mySkillInfo.value?.skllClsfNm ? mySkillInfo.value?.skllClsfNm : myLearnStore.mySkillCategoryStatistics[0]?.skllClsfNm || '';

  if (currentChartSkillCategory.vl) {
    await myLearnStore.getMySkillCategoryStatisticsDetail(currentChartSkillCategory.vl);
  }
});

onMounted(async () => {
    /*
    await Promise.all([
        approvalStore.getMyPageApprovalList({}),
        mileageStore.getIdiMyMileageTotalData({}),
        facilityStore.getMypageFacilityList({pageNo: 1, pageSize: 3}),
        myLearnStore.getMyCostList()
    ]);

    // @ts-ignore
    totalMilageData.value = mileageStore.totalMileageData.data.response;
    // @ts-ignore
    approvalList.value = approvalStore.approvalList.data.response.contents;
    // @ts-ignore
    approvalListTotalCount.value = approvalStore.approvalList.data.response.contentsNbi
     */

    // console.log(myLearnStore.myCostList);

});



</script>
