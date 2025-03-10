<template>
  <div class="ibk-lectureroom-my">
    <pubMypagehead />
    <div class="ibk-inner">
      <div class="ibk-lectureroom-my-review">
        <h3>후기관리</h3>
        <Tabs value="0">
          <TabList>
            <Tab value="0">후기 작성 12</Tab>
            <Tab value="1">작성한 후기 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="ibk-lectureroom-my-review-list ibk-lectureroom-my-review-list--line">
                <div class="ibk-lectureroom-my-review-list-item" v-for="i of 5">
                  <div class="ibk-lectureroom-my-review-list__top">
                    <div class="ibk-lectureroom-my-review-list__start">
                      <a href="">
                        <div class="ibk-lectureroom-my-review-list-thumb">
                          <img src="https://picsum.photos/224/124" alt="" />
                        </div>
                        <div class="ibk-lectureroom-my-review-list-title">
                          <h3>IBK 사이버 가계여신 실무</h3>
                          <div class="ibk-lectureroom-my-review-list-title__text">
                            <div>
                              인재개발부
                              <hr />
                              CP명
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="ibk-lectureroom-my-review-list__end">
                      <div class="ibk-lectureroom-my-review-list-button">
                        <Button label="후기쓰기" severity="secondary" outlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-lectureroom-my-review-list-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="ibk-lectureroom-my-review-list">
                <div class="ibk-lectureroom-my-review-list-item" v-for="i of 5">
                  <div class="ibk-lectureroom-my-review-list__top">
                    <div class="ibk-lectureroom-my-review-list__start">
                      <a href="">
                        <div class="ibk-lectureroom-my-review-list-thumb">
                          <img src="https://picsum.photos/224/124" alt="" />
                        </div>
                        <div class="ibk-lectureroom-my-review-list-title">
                          <h3>IBK 사이버 가계여신 실무</h3>
                          <div class="ibk-lectureroom-my-review-list-title__text">
                            <div>
                              인재개발부
                              <hr />
                              CP명
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="ibk-lectureroom-my-review-list__end">
                      <div class="pc">
                        <div class="ibk-lectureroom-my-review-list-button">
                          <Button label="수정하기" severity="secondary" outlined />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-my-review-list-text">
                    <div class="ibk-lectureroom-my-review-list-text__rating">
                      <Rating v-model="rating" :stars="5" readonly />
                      <strong>5.0</strong>
                    </div>
                    <p>
                      생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직 갈 길은 많이 남았지만, 나아가는 방향을 바꿀
                      수 있었던 건 이 강의 덕분입니다. 그리고 특강 듣고 열반스쿨 기초반을 들으니 더 내용이 쉽게 이해되는
                      효과도 있었습니디.
                    </p>
                  </div>
                  <div class="mo">
                    <div class="ibk-lectureroom-my-review-list-button">
                      <Button label="수정하기" severity="secondary" outlined />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-lectureroom-my-review-list-more">
                <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-review">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-review__title">후기 쓰기</div>
    </template>

    <div class="ibk-dialog-review-write">
      <div class="ibk-dialog-review-write-head">
        <div class="ibk-dialog-review-write-head-thumb">
          <img src="https://picsum.photos/187/104" alt="" />
        </div>
        <div class="ibk-dialog-review-write-head-title">
          <strong>IBK 사이버 가계여신 실무</strong>
          <div class="ibk-dialog-review-write-head-text">
            인재개발부
            <hr />
            CP명
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>별점등록</label>
            <div>
              <Rating v-model="rating" :stars="5" class="p-rating--xlarge" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>후기작성</label>
            <div>
              <Textarea placeholder="후기를 입력해주세요." class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-review-button">
        <Button label="취소" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button label="등록" severity="primary" size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>
  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-review">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
      </div>
      <div class="ibk-dialog-review__title">후기 확인</div>
    </template>

    <div class="ibk-dialog-review-item">
      <div class="ibk-dialog-review-item-head">
        <div class="ibk-dialog-review-item-head__title">연수 선택하기</div>
        <Select size="large" class="w-full" />
      </div>
      <div class="ibk-dialog-review-list">
        <NuxtLink to="/" class="ibk-dialog-review-list-item" v-for="i of 3">
          <div class="ibk-dialog-review-list-item-head">
            <div class="ibk-dialog-review-list-item__thumb">
              <img src="https://picsum.photos/168/94" alt="" />
            </div>
            <div class="ibk-dialog-review-list-item-info">
              <div class="ibk-dialog-review-list-item__title">기업구조조정의 이해 및 활용,이</div>
              <div class="ibk-dialog-review-list-item__rating">
                <Rating v-model="rating" :stars="5" />
                <strong>4.0</strong>
              </div>
            </div>
          </div>
          <div class="ibk-dialog-review-list-item__text">
            <p>
              생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 아직 갈 길은 많이 남았지만, 나아가는 방향을 바꿀 수
              있었던 건 이 강의 덕분입니다. 그리고 특강을 들으니 더 내용이 쉽게 이해되는 효과도 있었습니다. 생각의
              패러다임을 근본적으로 바꿔준 강의였습니다. 강사님 감사생각의 패러다임을 근본적으로 바꿔준 강의였습니다.
              아직 갈 길은 많이 남았지만, 나아가는 방향을 바꿀 수 있었던 건 이 강의 덕분입니다. 그리고 특강을 들으니 더
              내용이 쉽게 이해되는 효과도 있었습니다. 생각의 패러다임을 근본적으로 바꿔준 강의였습니다. 강사님 감사
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="ibk-dialog-review-more">
        <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-review-button">
        <Button label="닫기" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="후기 쓰기"></Button><br /><br />
    <Button @click="modal02 = true" label="후기 확인"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';
const modal01 = ref(false);
const modal02 = ref(false);

const radio = ref('');
const checkbox = ref('');
const rating = ref(4);
</script>
