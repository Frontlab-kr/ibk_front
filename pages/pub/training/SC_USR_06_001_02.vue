<template>
  <div class="ibk-inner">
    <Tabs value="0">
      <div :class="{ 'ibk-training': true, 'ibk-training--active': filterActive }">
        <div class="ibk-training-head">
          <div class="ibk-training-head__start">
            <div class="ibk-training-head__title">
              <h1>연수신청</h1>
              <div class="pc">
                <Button
                  type="button"
                  label="맞춤형 검색"
                  :icon="buttonIcon"
                  :severity="buttonSeverity"
                  outlined
                  @click="toggleActive"
                />
              </div>
              <div class="mo">
                <!-- <Button icon="ibk-icon-24-filter" severity="secondary" outlined @click="modal01 = true" /> -->
                <Button
                  type="button"
                  label="맞춤형 검색"
                  :icon="buttonIcon"
                  :severity="buttonSeverity"
                  outlined
                  @click="modal01 = true"
                />
              </div>
            </div>
            <div class="mo">
              <div class="ibk-training-search-layer">
                <div class="ibk-training-search-layer__title">맞춤형 검색결과</div>
                <div class="ibk-training-search-layer__list">
                  <dl>
                    <dd>
                      <Button label="#카테고리2" severity="secondary" outlined rounded class="active" v-for="i of 7" />
                    </dd>
                  </dl>
                </div>
                <div class="ibk-training-search-layer__button">
                  <Button label="재검색" />
                </div>
              </div>
            </div>
            <TabList>
              <Tab value="0">전체연수보기</Tab>
              <Tab value="1">신청가능한연수보기</Tab>
            </TabList>
          </div>
          <div class="ibk-training-head__end">
            <div class="pc">
              <Select v-model="selected03" :options="selected03Option" optionLabel="name" />
            </div>
          </div>
        </div>
        <div class="pc">
          <div class="ibk-training-search-layer">
            <div class="ibk-training-search-layer__title">맞춤형 검색결과</div>
            <div class="ibk-training-search-layer__list">
              <dl>
                <dd>
                  <Button label="#카테고리2" severity="secondary" outlined rounded class="active" v-for="i of 7" />
                </dd>
              </dl>
            </div>
            <div class="ibk-training-search-layer__button">
              <Button label="재검색" />
            </div>
          </div>
        </div>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-training-list">
              <div class="ibk-training-list-head">
                <div class="ibk-training-list-head__title">연수<strong>888</strong></div>
                <div class="mo">
                  <div class="ibk-training-search-sort">
                    <div class="p-select" @click="modal02 = true">
                      <span class="p-select-label">찜 많은 순</span>
                      <div class="p-select-dropdown"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-training-list-none">
                <div class="ibk-training-list-none__text">
                  <span class="text-primary">ㄱㄷ</span> 에 대한 검색 결과가 없습니다.
                </div>
                <!-- <Button label="목록으로 돌아가기" outlined rounded /> -->
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </div>
    </Tabs>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-search">
    <template #header>
      <div class="ibk-dialog-search__title">맞춤형 검색</div>
      <div class="ibk-dialog-close">
        <Button icon="ibk-icon-24-close2" text @click="modal01 = false" />
      </div>
    </template>

    <div class="ibk-training-search-layer">
      <div class="ibk-training-search-layer__form">
        <IconField>
          <InputIcon class="ibk-icon-16-search" />
          <InputText placeholder="검색어를 입력하세요." />
        </IconField>
      </div>
      <div class="ibk-training-search-layer__list">
        <dl>
          <dt>카테고리</dt>
          <dd>
            <Button label="#자유수강" severity="secondary" outlined rounded class="active" />
            <Button label="#연수신청" severity="secondary" outlined rounded />
            <Button label="#역량개발지원" severity="secondary" outlined rounded />
            <Button label="#책임자시험" severity="secondary" outlined rounded />
            <Button label="#집합교육" severity="secondary" outlined rounded />
            <Button label="#수신" severity="secondary" outlined rounded />
            <Button label="#여신" severity="secondary" outlined rounded />
            <Button label="#외환" severity="secondary" outlined rounded />
            <Button label="#자산관리" severity="secondary" outlined rounded />
            <Button label="#카테고리" severity="secondary" outlined rounded />
            <Button label="#카테고리" severity="secondary" outlined rounded />
            <Button label="#예시" severity="secondary" outlined rounded />
            <Button label="#카테고리예시" severity="secondary" outlined rounded />
          </dd>
        </dl>
        <dl>
          <dt>키워드</dt>
          <dd>
            <Button label="#카테고리2" severity="secondary" outlined rounded class="active" />
            <Button label="#카테고리2" severity="secondary" outlined rounded v-for="i of 6" />
          </dd>
        </dl>
        <dl>
          <dt>기타</dt>
          <dd>
            <Button label="#카테고리2" severity="secondary" outlined rounded class="active" />
            <Button label="#카테고리2" severity="secondary" outlined rounded v-for="i of 6" />
          </dd>
        </dl>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-search-button">
        <Button label="초기화" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="검색하기" severity="primary" size="large" class="w-full" @click="modal01 = false" />
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
        <NuxtLink to="/" class="ibk-dialog-list__item active">찜 많은순</NuxtLink>
        <NuxtLink to="/" class="ibk-dialog-list__item">최신순</NuxtLink>
        <NuxtLink to="/" class="ibk-dialog-list__item">좋아요순</NuxtLink>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'pub',
});

const filterActive = ref(true);
const buttonSeverity = computed(() => (filterActive.value ? 'primary' : 'secondary'));
const buttonIcon = computed(() => (filterActive.value ? 'ibk-icon-16-filter-active' : 'ibk-icon-16-filter'));
const toggleStates = ref<boolean[]>([false, false, false]); // Array to manage toggle states for each item

const toggleActive = () => {
  filterActive.value = !filterActive.value;
};

function onToggle(index: number, event: { value: boolean }) {
  toggleStates.value[index] = event.value;
}

const selected01Option = ref([{ name: '주관' }, { name: '주관' }, { name: '주관' }]);
const selected01 = ref(selected01Option.value[0]);

const selected02Option = ref([{ name: '유형' }, { name: '유형' }, { name: '유형' }]);
const selected02 = ref(selected02Option.value[0]);

const selected03Option = ref([{ name: '찜 많은 순' }, { name: '찜 많은 순' }, { name: '찜 많은 순' }]);
const selected03 = ref(selected03Option.value[0]);

import { ref, onMounted, onUnmounted } from 'vue';

const modal01 = ref(false);
const modal02 = ref(false);

const handleResize = () => {
  if (window.innerWidth >= 992) {
    modal01.value = false;
    modal02.value = false;
  }
};

// 컴포넌트가 마운트될 때, 리사이즈 이벤트 등록
onMounted(() => {
  window.addEventListener('resize', handleResize);
  // 처음 로드 시에도 화면 사이즈에 맞춰 상태를 설정
  handleResize();
});

// 컴포넌트가 언마운트될 때, 리사이즈 이벤트 제거
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
