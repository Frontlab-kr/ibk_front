<template>
    <div class="ibk-inner">
        <div :class="{ 'ibk-training': true, 'ibk-training--active': educationStore.filterActive }">
            <div class="ibk-training-head" style="flex-direction: column;
    align-items: normal;">
                <div class="ibk-training-head__title">
                    <h1>연수신청</h1>
                    <Button type="button" label="맞춤형 검색" :icon="buttonIcon" :severity="buttonSeverity" outlined
                        @click="toggleActive" />
                    <div style="display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;">

                        <div class="ibk-tab-buttons" style="padding-left: 10px;">
                            <Button
                                :class="{ 'text-blue-500': activeTabIndex === '0', 'text-gray-400': activeTabIndex !== '0' }"
                                @click="activeTabIndex = '0'" text>
                                전체연수보기
                            </Button>
                            <Button
                                :class="{ 'text-blue-500': activeTabIndex === '1', 'text-gray-400': activeTabIndex !== '1' }"
                                @click="activeTabIndex = '1'" text>
                                신청가능한연수보기
                            </Button>
                        </div>
                        <div>
                            <div class="ibk-training-search-sort">
                                <!-- 안쓴다고해서 빼버림 -->
                                <div class="ibk-training-search-form" v-if="false">
                                    <IconField>
                                        <InputIcon class="ibk-icon-16-search" />
                                        <InputText v-model="educationStore.searchParams.searchName" placeholder="검색어를 입력하세요."
                                            @keyup.enter="applySearch" />
                                    </IconField>
                                </div>

                                <Select v-model="educationStore.searchParams.sortType" :options="selected03Option"
                                    optionValue="value" optionLabel="name" @change="onSortChange" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ibk-training-search-layer">
                    <div class="ibk-training-search-layer__title">맞춤형 검색</div>
                    <div class="ibk-training-search-layer__list">
                        <dl>
                            <dt>카테고리</dt>
                            <dd>
                                <Button v-for="category in educationStore.categoryList.filter( (data) => {return data.hgrnOpnCtgyVl == null })" :key="category.opnCtgyVl"
                                    :label="category.ctgyNm" severity="secondary" outlined rounded
                                    :class="{ active: isActiveCategory(category.opnCtgyVl ?? '') }"
                                    @click="toggleCategory1Depth(category.opnCtgyVl ?? '')" />
                            </dd>
                        </dl>
                        <dl v-if="educationStore.activeCategories.length != 0">
                            <dt style="visibility: hidden;"></dt>
                            <dd>
                                <Button
                                    v-for="category in educationStore.categoryList.filter((data) => {
                                        return data.hgrnOpnCtgyVl === educationStore.activeCategories[0];
                                    })"
                                    :key="category.opnCtgyVl"
                                    :label="category.ctgyNm" severity="secondary" outlined rounded
                                    :class="{ active: isActiveCategory(category.opnCtgyVl ?? '') }"
                                    @click="toggleCategory2Depth(category.opnCtgyVl ?? '')" />
                            </dd>
                        </dl>
                        <dl>
                            <dt>키워드</dt>
                            <dd>
                                <Button v-for="(keyword, index) in educationStore.filterKeyword"
                                    :key="`keyword-${index}`" :label="keyword" severity="secondary" outlined rounded
                                    :class="{ active: isActiveKeyword(keyword) }" @click="toggleKeyword(keyword)" />
                            </dd>
                        </dl>
                        <dl>
                            <dt>기타</dt>
                            <dd>
                                <Button label="#3급 선택" severity="secondary" outlined rounded
                                        :class="{ active: educationStore.searchParams.deg3MndrYn === 'N' }"
                                        @click="toggleDeg3MndrYn('N')" />
                                <Button label="#3급 필수" severity="secondary" outlined rounded
                                        :class="{ active: educationStore.searchParams.deg3MndrYn === 'Y' }"
                                        @click="toggleDeg3MndrYn('Y')" />
                                <Button label="#4급 선택" severity="secondary" outlined rounded
                                        :class="{ active: educationStore.searchParams.deg4MndrYn === 'N' }"
                                        @click="toggleDeg4MndrYn('N')" />
                                <Button label="#4급 필수" severity="secondary" outlined rounded
                                        :class="{ active: educationStore.searchParams.deg4MndrYn === 'Y' }"
                                        @click="toggleDeg4MndrYn('Y')" />
                                <Button label="#평정" severity="secondary" outlined rounded
                                        :class="{ active: educationStore.searchParams.evltYn === 'Y' }"
                                        @click="toggleEvltYn()" />
                            </dd>
                        </dl>
                    </div>
                    <div class="ibk-training-search-layer__button">
                        <Button label="검색" @click="applySearch" />
                        <Button label="초기화" severity="white" @click="resetSearch" />
                    </div>
                </div>
            </div>

            <Tabs v-model:value="activeTabIndex">

                <TabPanels>
                    <TabPanel v-for="(_, index) in [0, 1]" :key="`tab-panel-${index}`" :value="index.toString()">
                        <div class="pc">
                            <!--    <div class="ibk-training-search">

                                <div class="ibk-training-search-form">
                                    <IconField>
                                        <InputIcon class="ibk-icon-16-search" />
                                        <InputText v-model="searchInput" placeholder="검색어를 입력하세요."
                                            @keyup.enter="applySearch" />
                                    </IconField>
                                </div>
                            </div> -->
                        </div>
                        <div class="mo">
                            <div class="ibk-training-search">
                                <div class="ibk-training-search-button">
                                    <Button icon="ibk-icon-24-filter" severity="secondary" outlined
                                        @click="modal01 = true" />
                                </div>
                                <div class="ibk-training-search-sort">

                                    <div class="p-select" @click="modal02 = true">
                                        <span class="p-select-label">{{
                                            getSortName(educationStore.searchParams.sortType ?? MasterCourseListInVoSortTypeEnum.Date) }}</span>
                                        <div class="p-select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ibk-training-list">
                            <div class="ibk-training-list-head">
                                <div class="ibk-training-list-head__title">연수<strong>{{
                                    educationStore.list.paging.totalCount }}</strong></div>
                            </div>
                            <div v-for="(item, index) in educationStore.list.contents" :key="item.dutyEdctCd"
                                class="ibk-training-list-item"
                                :class="{ 'ibk-training-list-item--soldout': !isApplicable(item) }">
                                
                                <log :item="item"/>
                                <div class="ibk-training-list-item-head">
                                    <NuxtLink :to="`/course/education/detail?dutyEdctCd=${item.dutyEdctCd}`">
                                        <div class="ibk-training-list-item-head__thumb">
                                            <img :src="item.pcImgUrlAdr" alt="" />
                                        </div>
                                        <div class="ibk-training-list-item-head-info">
                                            <div class="ibk-training-list-item-head__badge">
                                                <Badge :value="getedctMthdNm(item.edctMthdTcd)"
                                                    style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
                                            </div>
                                            <div class="ibk-training-list-item-head__title">
                                                {{ item.dutyEdctNm }}
                                            </div>
                                            <div class="ibk-training-list-item-head__text">
                                                <div>
                                                    {{ getEdctDflvNm(item.edctDflvTcd) }}
                                                    <hr v-if="item.kwrVl" />
                                                    {{ getKeyword(item.kwrVl) }}
                                                </div>
                                                <!--       <div>
                                                    {{ formatDateRange(item.courseDegreeList?.[0]?.lrngSttgTs,
                                                    item.courseDegreeList?.[0]?.lrngFnshTs) }}
                                                </div> -->
                                            </div>
                                        </div>
                                    </NuxtLink>
                                    <div class="ibk-training-list-item-head__like">
                                        <Button
                                            :icon="item.isFavoriteYn === 'Y' ? 'ibk-icon-24-like-active' : 'ibk-icon-24-like'"
                                            outlined severity="secondary" :loading="(item as any).isLoading"
                                            @click="toggleLike(item)" />
                                    </div>
                                </div>
                                <div class="ibk-training-list-item-contents"
                                    v-if="item.courseDegreeList && item.courseDegreeList.length > 0">
                                    <Panel toggleable @toggle="(event) => onToggle(index, (event as any))"
                                        :class="{ active: educationStore.toggleStates[index] }">
                                        <template #header v-if="false">
                                            <h4>연수정보</h4>
                                        </template>
                                        <template #toggleicon>
                                            <p>{{ educationStore.toggleStates[index] ? '전체펼침' : '전체닫기' }}</p>
                                            <i class="ibk-icon-16-toggle"></i>
                                        </template>
                                        <table>
                                            <colgroup>
                                                <col style="width: 268px" />
                                                <col style="width: 268px" />
                                                <col style="width: 200px" />
                                                <col style="width: 160px" />
                                                <col style="width: 160px" />
                                                <col style="width: 96px" />
                                            </colgroup>
                                            <thead>
                                                <th>연수차수명</th>
                                                <th>신청기간</th>
                                                <th>교육기간</th>
                                                <th>정원</th>
                                                <th>신청인원</th>
                                                <th></th>
                                            </thead>
                                            <tbody>
                                                <tr v-for="course in item.courseDegreeList" :key="course.edctDsprNo">

                                                    <td><strong>{{ course.dutyEdctNm }}</strong></td>
                                                    <td>{{ formatDateRange(course.aplcSttgTs, course.aplcFnshTs) }}</td>
                                                    <td>{{ formatDateRange(course.lrngSttgTs, course.lrngFnshTs) }}</td>
                                                    <td>{{ course.edctNmprCnt }}명</td>

                                                    <td>{{ course.edctAplcCnt }}명</td>
                                                    <td>
                                                        <Button label="신청" severity="primary"
                                                            :disabled="course.isReg === 'N'"
                                                            @click="() => requestCourse(item, course)" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Panel>
                                </div>
                            </div>
                        </div>

                        <Paginator v-if="educationStore.list.contents.length > 0"
                            :rows="educationStore.list.paging.pageSize"
                            :totalRecords="educationStore.list.paging.totalCount" @page="onPageChange($event)" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>

    <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-search">
        <template #header>
            <div class="ibk-dialog-search__title">맞춤형 검색</div>
            <div class="ibk-dialog-close">
                <Button icon="ibk-icon-24-close2" text @click="modal01 = false" />
            </div>
        </template>

        <div class="ibk-training-search-layer">
            <div class="ibk-training-search-layer__form" v-if="false">
                <IconField>
                    <InputIcon class="ibk-icon-16-search" />
                    <InputText placeholder="검색어를 입력하세요." v-model="educationStore.searchParams.searchName" />
                </IconField>
            </div>
            <div class="ibk-training-search-layer__list">
                <dl>
                    <dt>카테고리</dt>
                    <dd>
                        <Button v-for="category in educationStore.categoryList" :key="category.opnCtgyVl"
                            :label="category.ctgyNm" severity="secondary" outlined rounded
                            :class="{ active: isActiveCategory(category.opnCtgyVl ?? '') }"
                            @click="toggleCategory1Depth(category.opnCtgyVl ?? '')" />
                    </dd>
                    <dl v-if="educationStore.activeCategories.length != 0">
                            <dt style="visibility: hidden;"></dt>
                            <dd>
                                <Button
                                    v-for="category in educationStore.categoryList.filter((data) => {
                                        return data.hgrnOpnCtgyVl === educationStore.activeCategories[0];
                                    })"
                                    :key="category.opnCtgyVl"
                                    :label="category.ctgyNm" severity="secondary" outlined rounded
                                    :class="{ active: isActiveCategory(category.opnCtgyVl ?? '') }"
                                    @click="toggleCategory2Depth(category.opnCtgyVl ?? '')" />
                            </dd>
                        </dl>
                </dl>
                <dl>
                    <dt>키워드</dt>
                    <dd>
                        <Button v-for="(keyword, index) in educationStore.filterKeyword" :key="`keyword-${index}`"
                            :label="keyword" severity="secondary" outlined rounded
                            :class="{ active: isActiveKeyword(keyword) }" @click="toggleKeyword(keyword)" />
                    </dd>
                </dl>
            </div>
        </div>

        <template #footer>
            <div class="ibk-dialog-search-button">
                <Button label="초기화" severity="secondary" size="large" outlined class="w-full"
                    @click="resetSearch" />
                <Button label="검색하기" severity="primary" size="large" class="w-full" @click="applyMobileSearch" />
            </div>
        </template>
    </Dialog>
    <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog--bottom mo">
        <div class="ibk-dialog-list">
            <div class="ibk-dialog-list__title">
                <strong>정렬</strong>
                <Button icon="ibk-icon-32-XCircle" text rounded @click="modal02 = false" />
            </div>
            <div class="ibk-dialog-list__list">
                <NuxtLink to="/" class="ibk-dialog-list__item"
                    :class="{ active: educationStore.searchParams.sortType === MasterCourseListInVoSortTypeEnum.Review }"
                    @click="setSortOption(MasterCourseListInVoSortTypeEnum.Review)">찜 많은순</NuxtLink>
                <NuxtLink to="/" class="ibk-dialog-list__item"
                    :class="{ active: educationStore.searchParams.sortType === MasterCourseListInVoSortTypeEnum.Date }"
                    @click="setSortOption(MasterCourseListInVoSortTypeEnum.Date)">최신순</NuxtLink>
                <NuxtLink to="/" class="ibk-dialog-list__item"
                    :class="{ active: educationStore.searchParams.sortType === MasterCourseListInVoSortTypeEnum.Like }"
                    @click="setSortOption(MasterCourseListInVoSortTypeEnum.Like)">좋아요순</NuxtLink>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useEducationStore } from '../store';
import { formatDateRange } from '~/utils/$dateUtils';
import type { CourseDegreeOutVo, MasterCourseListInVo, MasterCourseListOutVo } from '../../../../api-client';
import { useCommonCodeStore } from '../../../common/system';
import Utility from '../../../../lib/Utility';
import type { CommonCodeAll } from '../../../base/type';
import { MasterCourseListInVoSortTypeEnum } from '../../../../api-client';
const educationStore = useEducationStore();
const commonCodeStore = useCommonCodeStore();
const router = useRouter();

const filterActive = computed(() => educationStore.filterActive);
const buttonSeverity = computed(() => (filterActive.value ? 'primary' : 'secondary'));
const buttonIcon = computed(() => (filterActive.value ? 'ibk-icon-16-filter-active' : 'ibk-icon-16-filter'));

const toggleActive = () => {
    educationStore.filterActive = !educationStore.filterActive;
};



const selected03Option = ref([{ name: '찜 많은 순', value: MasterCourseListInVoSortTypeEnum.Review }, { name: '최신순', value: MasterCourseListInVoSortTypeEnum.Date }, { name: '좋아요순', value: MasterCourseListInVoSortTypeEnum.Like }]);


const modal01 = ref(false);
const modal02 = ref(false);


const handleResize = () => {
    if (window.innerWidth >= 992) {
        modal01.value = false;
        modal02.value = false;
    }
};

function getSortName(sortType: MasterCourseListInVoSortTypeEnum) {
    return selected03Option.value.find(option => option.value === sortType)?.name ?? '';
}
const resetSearch = () => {
    educationStore.activeCategories = [];
    educationStore.activeKeywords = [];
    educationStore.searchParams.searchName  =''
    educationStore.searchParams.deg3MndrYn = ''
    educationStore.searchParams.deg4MndrYn = ''
    educationStore.searchParams.evltYn = ''

    updateSearchParams();

    // 초기화 버튼 누르면 watch 에서 fetchData 호출됨
    // fetchData(true); 
};


const onToggle = (index: number, event: boolean) => {
    educationStore.toggleStates[index] = event;
};

const applySearch = () => {
    fetchData(true);
};
const applyMobileSearch = () => {

    fetchData(true);
    modal01.value = false;
};

const isFetching = ref(true);

const fetchData = async (isRefresh = true, isLoading = true) => {
    isFetching.value = true
    if (isRefresh) educationStore.list.paging.pageNo = 1;
    await educationStore.getList({
        ...educationStore.searchParams,
        ...educationStore.list.paging,
        isAll: educationStore.searchParams.isAll
    }, isLoading);
    educationStore.toggleStates = new Array(educationStore.list.contents.length).fill(false);
    isFetching.value = false;
};

const fetchElse = async () => {
    await educationStore.getElse(false);
};

const onPageChange = (event: { page: number, rows: number }) => {
    educationStore.list.paging.pageNo = event.page + 1;
    educationStore.list.paging.pageSize = event.rows;
    fetchData(false);
};

const toggleLike = async (item: any) => {
    item.isLoading = true;
    try {
        await educationStore.toggleLike({ dutyEdctCd: item.dutyEdctCd });
    } finally {
        item.isLoading = false;
    }
};

const requestCourse = async (item: MasterCourseListOutVo, course: CourseDegreeOutVo) => {
    await Utility.alertMobileCourse(item);
    router.push(`/course/education/detail?dutyEdctCd=${course.dutyEdctCd}&edctDsprNo=${course.edctDsprNo}`);
};

const isActiveCategory = (categoryId: string) => educationStore.activeCategories.includes(categoryId);
const isActiveKeyword = (keyword: string) => educationStore.activeKeywords.includes(keyword);

const toggleCategory1Depth = (categoryId: string) => {
    const index = educationStore.activeCategories.indexOf(categoryId);
    if (index === -1) {
        educationStore.activeCategories = [];
        educationStore.activeCategories.push(categoryId);
    } else {
        educationStore.activeCategories.splice(index, 1);
    }
    updateSearchParams();
};

const toggleCategory2Depth = (categoryId: string) => {
    const index = educationStore.activeCategories.indexOf(categoryId);
    if (index === -1) {
        educationStore.activeCategories.push(categoryId);
    } else {
        educationStore.activeCategories.splice(index, 1);
    }
    updateSearchParams();
};

const toggleKeyword = (keyword: string) => {
    const index = educationStore.activeKeywords.indexOf(keyword);
    if (index === -1) {
        educationStore.activeKeywords.push(keyword);
    } else {
        educationStore.activeKeywords.splice(index, 1);
    }
    updateSearchParams();
};

const toggleDeg3MndrYn = (ynFlag: string) => {
    educationStore.searchParams.deg3MndrYn = educationStore.searchParams.deg3MndrYn === ynFlag ? '' : ynFlag;
    updateSearchParams();
};

const toggleDeg4MndrYn = (ynFlag: string) => {
    educationStore.searchParams.deg4MndrYn = educationStore.searchParams.deg4MndrYn === ynFlag ? '' : ynFlag;
    updateSearchParams();
};

const toggleEvltYn = () => {
    educationStore.searchParams.evltYn = educationStore.searchParams.evltYn === 'Y' ? 'N' : 'Y';
    updateSearchParams();
};

const updateSearchParams = () => {
    educationStore.searchParams = {
        ...educationStore.searchParams,
        keywords: educationStore.activeKeywords,
        opnCtgyVl : educationStore.activeCategories,
        deg3MndrYn : educationStore.searchParams.deg3MndrYn,
        deg4MndrYn : educationStore.searchParams.deg4MndrYn,
        evltYn : educationStore.searchParams.evltYn,
    } as MasterCourseListInVo;
    educationStore.getList(educationStore.searchParams, false);
};

const isApplicable = (course: MasterCourseListOutVo) => {
    if ($isEmpty(course )) return false;
    
    const isApplicable = course.courseDegreeList?.some((degree) => {
        const now = new Date();
        const aplcSttg = new Date(degree.aplcSttgTs ?? '');
        const aplcFnsh = new Date(degree.aplcFnshTs ?? '');
        return now >= aplcSttg && now <= aplcFnsh && degree.useYn === 'Y' && degree.expuYn === 'Y';
    });
    return isApplicable;
};

const setSortOption = (option: MasterCourseListInVoSortTypeEnum) => {
    educationStore.searchParams.sortType = option;
    modal02.value = false;
    fetchData(true);
};

const onSortChange = () => {
    fetchData(true);
};

function getKeyword(kwrVl?: string) {

    if (!kwrVl) return '';
    const keywordList = Utility.getCommonCode('KWR001');
    const kwrVlArray = kwrVl.split(',');

    return kwrVlArray.map(kwr => {
        const matchedKeyword = keywordList.find((keyword: CommonCodeAll) => keyword.cmcdVl === kwr);
        return matchedKeyword ? matchedKeyword.cmcdVlNm : '';
    }).filter(Boolean).join(', ');
}

function getEdctDflvNm(edctDflvTcd?: string) {
    if (!edctDflvTcd) return '';
    return Utility.getCommonCode('LMS00007').find(code => code.cmcdVl === edctDflvTcd)?.cmcdVlNm ?? '';
}
function getedctMthdNm(edctMthdTcd?: string) {
    if (!edctMthdTcd) return '';
    return Utility.getCommonCode('LMS00008').find(code => code.cmcdVl === edctMthdTcd)?.cmcdVlNm ?? '';
}
const activeTabIndex = ref('0');

watch(activeTabIndex, (newValue) => {
    educationStore.searchParams.isAll = newValue == '0' ? 'Y' : 'N';
    fetchData(true);
});



onMounted(() => {
    educationStore.searchParams.sortType = MasterCourseListInVoSortTypeEnum.Date;
    fetchData(true, false);
    fetchElse();
    window.addEventListener('resize', handleResize);
    handleResize();
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<style scoped>
.ibk-tab-buttons {
    display: flex;


}

.ibk-tab-buttons .p-button {
    /* color: rgb(154, 154, 154); */
    border: none;
    /* font-weight: bold; */
    font-size: 1rem;
}

.ibk-tab-buttons .p-button.active {
    background-color: #007bff;
    color: white;
}
</style>
