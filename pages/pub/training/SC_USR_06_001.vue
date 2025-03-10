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
            <div class="ibk-training-search-layer__title">맞춤형 검색</div>
            <div class="ibk-training-search-layer__list">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <Button label="#카테고리1" severity="secondary" outlined rounded class="active" />
                  <Button label="#카테고리1" severity="secondary" outlined rounded v-for="i of 14" />
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
            <div class="ibk-training-search-layer__button">
              <Button label="검색" />
              <Button label="초기화" severity="white" />
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
              <div class="ibk-training-list-item" v-for="(i, index) of 3" :key="'item-' + index">
                <div class="ibk-training-list-item-head">
                  <a href="">
                    <div class="ibk-training-list-item-head__thumb">
                      <img src="https://picsum.photos/600/300" alt="" />
                    </div>
                    <div class="ibk-training-list-item-head-info">
                      <div>
                        <div class="ibk-training-list-item-head__nav">
                          <span>카테고리1</span>
                          <span>카테고리2</span>
                          <span>교육방식</span>
                        </div>
                        <div class="ibk-training-list-item-head__title">IBK 사이버 가계여신 실무</div>
                        <div class="ibk-training-list-item-head__badge">
                          <Badge value="입문" style="background: #ffebef; color: #ff375e" />
                          <hr />
                          <Badge value="행정" style="background: #fff5e6; color: #ff9f0a" />
                          <Badge
                            value="기타 내용이 노출됩니다."
                            class="ml-3"
                            style="background: #f2f2f2; color: #737684; border-radius: 10px !important"
                          />
                          <span class="ml-3">기타 내용이 노출됩니다.</span>
                        </div>
                      </div>
                      <div class="mo">
                        <div class="ibk-training-list-item-head__like">
                          <Button icon="ibk-icon-24-like" outlined severity="secondary" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <div class="ibk-training-list-item-head-end">
                    <div class="ibk-training-list-item-head__info">
                      <span>강사명</span>
                      <div>
                        홍길동
                        <hr />
                        여신관리부
                      </div>
                    </div>
                    <div class="pc">
                      <div class="ibk-training-list-item-head__like">
                        <Button icon="ibk-icon-24-like" outlined severity="secondary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ibk-training-list-item-contents">
                  <Panel
                    toggleable
                    @toggle="(event) => onToggle(index, event)"
                    :class="{ active: toggleStates[index] }"
                  >
                    <template #toggleicon>
                      <p>{{ toggleStates[index] ? '전체펼침' : '전체닫기' }}</p>
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
                        <tr>
                          <td>
                            <div class="mb-1">
                              <Badge
                                value="자유수강가능"
                                style="background: #234eaa; color: #fff; border-radius: 10px !important"
                                class="border-round"
                              />
                            </div>
                            <strong>IBK 가계여신실무 (2025-01) </strong>
                          </td>
                          <td>2025.06.00 - 2025.07.00</td>
                          <td>2025.07.00(월)</td>
                          <td>200명</td>
                          <td>정원초과</td>
                          <td>
                            <Button label="신청" severity="primary" disabled />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="mb-1">
                              <Badge
                                value="자유수강가능"
                                style="background: #f1f5f9; color: #728196; border-radius: 10px !important"
                                class="border-round"
                              />
                            </div>
                            <strong>IBK 가계여신실무 (2025-01) </strong>
                          </td>
                          <td>2025.06.00 - 2025.07.00</td>
                          <td>2025.07.00(월)</td>
                          <td>200명</td>
                          <td>21명</td>
                          <td>
                            <Button label="신청" severity="primary" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="mb-1">
                              <Badge
                                value="자유수강가능"
                                style="background: #234eaa; color: #fff; border-radius: 10px !important"
                                class="border-round"
                              />
                            </div>
                            <strong>IBK 가계여신실무 (2025-01) </strong>
                          </td>
                          <td>2025.06.00 - 2025.07.00</td>
                          <td>2025.07.00(월)</td>
                          <td>200명</td>
                          <td>21명</td>
                          <td>
                            <Button label="신청" severity="primary" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Panel>
                </div>
              </div>
              <div class="ibk-training-list-item ibk-training-list-item--soldout">
                <div class="ibk-training-list-item-head">
                  <a href="">
                    <div class="ibk-training-list-item-head__thumb">
                      <img src="https://picsum.photos/600/300" alt="" />
                    </div>
                    <div class="ibk-training-list-item-head-info">
                      <div class="ibk-training-list-item-head__badge">
                        <Badge value="연수구분" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
                      </div>
                      <div class="ibk-training-list-item-head__title">
                        IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무IBK 사이버 가계여신
                        실무IBK 사이버 가계여신 실무IBK 사이버 가계여신 실무
                      </div>
                      <div class="ibk-training-list-item-head__text">
                        <div>
                          입문
                          <hr />
                          키워드, 키워드
                        </div>
                      </div>
                    </div>
                  </a>
                  <div class="ibk-training-list-item-head__like">
                    <div class="pc">
                      <Button label="미리보기" outlined severity="secondary" />
                    </div>
                    <Button icon="ibk-icon-24-like-active" outlined severity="secondary" />
                  </div>
                </div>
                <div class="ibk-training-list-item-contents">
                  <div class="ibk-training-list-item-contents__none">현재는 신청가능한 차수가 없습니다.</div>
                </div>
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

const filterActive = ref(false);
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
