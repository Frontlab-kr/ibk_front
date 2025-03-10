<template>
  <div class="ibk-inner">
    <div class="ibk-social">
      <div class="ibk-social-head">
        <h1>소셜러닝</h1>
        <div class="ibk-social-head-button">
          <Button label="글쓰기" icon="ibk-icon-16-write" rounded />
        </div>
      </div>
      <div class="ibk-social-contents">
        <div class="ibk-social-list">
          <div class="ibk-social-head">
            <h1>소셜러닝</h1>
            <div class="ibk-social-head-button">
              <Button label="글쓰기" icon="ibk-icon-16-write" rounded />
            </div>
          </div>
          <div class="ibk-social-list-tab">
            <Button label="전체" severity="secondary" rounded />
            <Button label="내가 작성한 글" severity="secondary" rounded />
            <Button label="좋아요" severity="secondary" rounded />
            <Button label="업무팁" severity="secondary" rounded class="active" />
            <Button label="묻고답하기" severity="secondary" rounded />
            <Button label="투자경험담" severity="secondary" rounded />
            <Button label="고민상담" severity="secondary" rounded />
            <Button label="전문가칼럼" severity="secondary" rounded />
          </div>
          <div class="ibk-social-list-list">
            <NuxtLink to="/" class="ibk-social-list-item" v-for="i of 6">
              <div class="ibk-social-list-item__badge">
                <Badge value="공지" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
              </div>
              <div class="ibk-social-list-item__contents">
                <div class="w-full">
                  <div class="ibk-social-list-item__title">은행원이 가져야 할 업무 태도 3편 : 커뮤니케이션 능력</div>
                  <div class="ibk-social-list-item__info">
                    <ul>
                      <li><strong>조회</strong>1,733</li>
                      <li><i class="ibk-icon-16-like-black"></i>16</li>
                      <li><i class="ibk-icon-16-reply-black"></i>16</li>
                    </ul>
                  </div>
                  <div class="ibk-social-list-item__text">
                    은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서
                    커뮤니케이션 능력 향상을 위해 나아가야합니다.은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지
                    알 수 있었던은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에
                    있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다.은행원에게 필요한 자질이 무엇인지, 어떤 것을
                    해가야할지 알 수 있었던
                  </div>
                  <div class="ibk-social-list-item__name">
                    <strong>여승환</strong>
                    8시간전
                  </div>
                </div>

                <div class="ibk-social-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="ibk-social-list-more">
            <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
          </div>
        </div>
        <div class="ibk-social-side">
          <div class="ibk-social-best">
            <div class="ibk-social-best-title">
              <p>
                <i class="ibk-icon-24-best"></i>
                베스트 글
              </p>
              <NuxtLink to="/">
                <i class="ibk-icon-16-arrowbest">전체보기</i>
              </NuxtLink>
            </div>
            <NuxtLink to="/" class="ibk-social-best-item" v-for="i of 3">
              <p>IBK 사이버 가계여신 실무는 어떤가요?</p>
              <div class="ibk-social-best-item__info">
                <ul>
                  <li><strong>조회</strong>1,733</li>
                  <li><i class="ibk-icon-16-like"></i>16</li>
                  <li><i class="ibk-icon-16-reply"></i>16</li>
                </ul>
              </div>
            </NuxtLink>
          </div>
          <div class="ibk-social-ranking">
            <div class="ibk-social-ranking-title"><i class="ibk-icon-24-ranking"></i>주간 랭킹</div>
            <div class="ibk-social-ranking-list">
              <ol>
                <li v-for="i of 5">
                  <NuxtLink to="/">
                    <div class="ibk-social-ranking-list__number">{{ i }}</div>
                    <div class="ibk-social-ranking-list__name">여승환</div>
                    <div class="ibk-social-ranking-list__reply"><i class="ibk-icon-16-reply"></i>16</div>
                  </NuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-agree">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-agree__title">무단 제작/배포 금지 동의</div>
    </template>

    <div class="ibk-dialog-agree__text">
      해당 내용은 직원 작성 지식/노하우이며, <br />
      자체제작 상품안내장은 제작/배포 할 수 없습니다. <br />
      부득이 제작하여 사용할 경우 ‘금융상품 공시업무 지침’에 의거 <br />
      사전 소관부서 승인을 받아야 합니다.
    </div>
    <div class="ibk-dialog-agree__check">
      <Checkbox v-model="CheckAgree" inputId="CheckAgree1" value="CheckAgree" name="CheckAgree" />
      <label for="CheckAgree1" class="ml-2"> 동의합니다 </label>
    </div>

    <template #footer>
      <div class="ibk-dialog-agree-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal01 = false" />
        <Button
          label="확인"
          severity="primary"
          size="large"
          class="w-full"
          @click="modal01 = false"
          :disabled="!CheckAgree"
        />
      </div>
    </template>
  </Dialog>
  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="후기 확인"></Button><br /><br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

const modal01 = ref(false);
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: 'QR  출석이 확인 되었습니다.',
    rejectProps: {
      label: '닫기',
      severity: 'link',
      size: 'large',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
    reject: () => {
      confirm.close();
    },
  });
};
const CheckAgree = ref();
</script>
