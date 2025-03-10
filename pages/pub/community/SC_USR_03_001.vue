<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head ibk-board-head--tab">
        <h1>커뮤니티</h1>
      </div>
      <Tabs value="2">
        <TabList>
          <Tab value="0">공지사항</Tab>
          <Tab value="1">학습자료실</Tab>
          <Tab value="2">설문</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-board-list-head">
              <div class="pc">
                <div class="ibk-board-list-head__start">
                  <h2>
                    전체
                    <strong>25</strong>
                  </h2>
                </div>
              </div>
              <div class="ibk-board-list-head__end">
                <div class="ibk-board-search">
                  <IconField>
                    <InputIcon class="ibk-icon-16-search" />
                    <InputText placeholder="검색어를 입력하세요." />
                  </IconField>
                  <div class="ibk-board-search__button">
                    <Button label="검색" severity="primary" />
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-board-list">
              <div class="mo">
                <h2>
                  전체
                  <strong>25</strong>
                </h2>
              </div>
              <NuxtLink to="/" class="ibk-board-list-item" v-for="i of 6">
                <div class="ibk-board-list-item__start">
                  <div class="ibk-board-list-item__number">1</div>
                  <div class="ibk-board-list-item__title">
                    <div class="ibk-board-list-item__badge">
                      <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                    </div>
                    <p>
                      2024년 4월 온라인아카데미 수강신청 안내2024년 4월 온라인아카데미 수강신청 안내2024년 4월
                      온라인아카데미 수강신청 안내2024년 4월 온라인아카데미 수강신청 안내
                    </p>
                    <i class="ibk-icon-24-clip"></i>
                  </div>
                </div>
                <div class="ibk-board-list-item__end">
                  <div class="ibk-board-list-item__date">2025.01.01 12:25</div>
                </div>
              </NuxtLink>
              <Paginator :rows="10" :totalRecords="120"></Paginator>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="ibk-board-list-head">
              <div class="pc">
                <div class="ibk-board-list-head__start">
                  <h2>
                    전체
                    <strong>25</strong>
                  </h2>
                </div>
              </div>
              <div class="ibk-board-list-head__end">
                <div class="ibk-board-search">
                  <IconField>
                    <InputIcon class="ibk-icon-16-search" />
                    <InputText placeholder="검색어를 입력하세요." />
                  </IconField>
                  <div class="ibk-board-search__button">
                    <Button label="검색" severity="primary" />
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-board-survey">
              <div class="mo">
                <h2>
                  전체
                  <strong>25</strong>
                </h2>
              </div>
              <div class="ibk-board-survey-item">
                <div class="ibk-board-survey-item__text">
                  <div class="ibk-board-survey-item__title">
                    <strong class="text-primary">진행중</strong>
                    <p>
                      2025 사이버 연수원 신입행원 교육과정 만족도 설문조사2025 사이버 연수원 신입행원 교육과정 만족도
                      설문조사2025 사이버 연수원 신입행원 교육과정 만족도 설문조사2025 사이버 연수원 신입행원 교육과정
                      만족도 설문조사
                    </p>
                  </div>
                  <div class="ibk-board-survey-item__date">2025.01.01 - 2025.01.01</div>
                </div>
                <Button label="설문보기" severity="secondary" class="text-primary-600" />
              </div>
              <div class="ibk-board-survey-item" v-for="i of 5">
                <div class="ibk-board-survey-item__text">
                  <div class="ibk-board-survey-item__title">
                    <strong>설문종료</strong>
                    <p>2025 사이버 연수원 신입행원 교육과정 만족도 설문조사</p>
                  </div>
                  <div class="ibk-board-survey-item__date">2025.01.01 - 2025.01.01</div>
                </div>
                <Button label="설문보기" severity="secondary" disabled />
              </div>
            </div>
            <Paginator :rows="10" :totalRecords="120"></Paginator>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-survey">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-survey__title">설문</div>
    </template>
    <div class="ibk-test">
      <div class="ibk-test-content">
        <div class="ibk-test-head">
          <div class="ibk-test-head__title">사이버 연수원 교육과정 만족도 설문조사</div>
          <div class="ibk-test-head__date"><span>2022.10.27 - 2022.10.30</span></div>
          <div class="ibk-test-head-info">
            <div class="ibk-test-head-info__title">설문안내</div>
            <div class="ibk-test-head-info__text">
              사이버기업회계 과정 사전설문에 관심을 가지고 참여해 주셔서 진심으로 감사 드립니다.<br />
              인재개발부에서는 정기적인 시스템 점검을 통하여 보다 안정된 서비스를 제공 하고자 아래와 같이 사전설문을
              실시하게 되었습니다.
            </div>
          </div>
        </div>
        <div class="ibk-test-list">
          <div class="ibk-test-list-item">
            <div class="ibk-test-list-item__title">
              <p><strong>1.</strong> 해당 과정의 연수만족도는 어땠나요?</p>
            </div>
            <div class="ibk-test-list-item__answer">
              <ol>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                  <label for="answer1-1">매우 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                  <label for="answer1-2">조금 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                  <label for="answer1-3">조금 불만</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                  <label for="answer1-4">매우 불만</label>
                </li>
              </ol>
            </div>
          </div>
          <div class="ibk-test-list-item">
            <div class="ibk-test-list-item__title">
              <p><strong>2.</strong> 불편한 점이 있었나요?</p>
            </div>
            <div class="ibk-test-list-item__answer">
              <ol>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                  <label for="answer1-1">매우 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                  <label for="answer1-2">조금 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                  <label for="answer1-3">조금 불만</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                  <label for="answer1-4">매우 불만</label>
                </li>
              </ol>
            </div>
          </div>
          <div class="ibk-test-list-item">
            <div class="ibk-test-list-item__title">
              <p><strong>3.</strong> 연수만족도는 어땠나요?</p>
            </div>
            <div class="ibk-test-list-item__answer">
              <ol>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-1" name="answer1" value="answer1-1" />
                  <label for="answer1-1">매우 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-2" name="answer1" value="answer1-2" />
                  <label for="answer1-2">조금 만족</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-3" name="answer1" value="answer1-3" />
                  <label for="answer1-3">조금 불만</label>
                </li>
                <li>
                  <RadioButton v-model="answer1" inputId="answer1-4" name="answer1" value="answer1-4" />
                  <label for="answer1-4">매우 불만</label>
                </li>
              </ol>
            </div>
          </div>

          <div class="ibk-test-list-item">
            <div class="ibk-test-list-item__title">
              <p>
                <strong>4.</strong>
                개선사항을 작성해주세요
              </p>
            </div>

            <div class="ibk-test-list-item__input">
              <Textarea placeholder="개선사항을 편하게 입력해 주세요." />
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-review-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="제출" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="설문"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

const modal01 = ref(false);

const answer1 = ref('');
const answer2 = ref('');
</script>
