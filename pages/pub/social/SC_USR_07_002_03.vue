<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined />
        </div>
      </div>
      <div class="ibk-board-inner">
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <p>
                은행원이 가져야 할 업무 태도 3편 : 커뮤니케이션 능력 커뮤니케이션 능력 커뮤니케이션 능력 커뮤니케이션
                능력
              </p>
            </div>

            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>
                    <strong>윤인성</strong>
                  </li>
                  <li>2023.12.13</li>
                  <li>
                    <i class="ibk-icon-16-view"></i>
                    1,777
                  </li>
                </ul>
              </div>
              <div class="ibk-board-detail-head__button">
                <Button label="삭제" severity="secondary" outlined class="text-red-500" />
                <Button label="수정" severity="secondary" />
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents">
            <p>
              은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이
              무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해
              나아가야합니다. 은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다.<br />
              <br />
              목표를 달성하기 위해서는 변화에 대한 대응체계가 필수입니다. 남들보다 빠른 실행력과 다양한 구성원들과의
              원활한 커뮤니케이션으로 금융영업 업무를 수행해 나가겠습니다. 최고의 동료들과 같이 업무를 하면 시너지
              효과가 상승합니다.<br />
              <br />
              목표를 달성하기 위해서는 변화에 대한 대응체계가 필수입니다. 남들보다 빠른 실행력과 다양한 구성원들과의
              원활한 커뮤니케이션으로 금융영업 업무를 수행해 나가겠습니다. 최고의 동료들과 같이 업무를 하면 시너지
              효과가 상승합니다.
            </p>
            <img src="https://picsum.photos/1200/300" alt="" />
          </div>
          <div class="ibk-board-detail-file">
            <ul>
              <li>
                <NuxtLink to="/" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-download"></i>
                  <p>구조조정펀드 사례 분석 참고자료.pdf</p>
                </NuxtLink>
                <strong>1.0MB</strong>
              </li>
            </ul>
          </div>
          <div class="ibk-board-detail-like" :class="isLiked ? 'active' : ''">
            <Button
              :icon="isLiked ? 'ibk-icon-32-like-active' : 'ibk-icon-32-like'"
              severity="secondary"
              rounded
              size="large"
              @click="isLiked = !isLiked"
            />
            <p>좋아요</p>
          </div>
          <pubComent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});
import pubComent from '@/components/pubComent.vue';
const isLiked = ref(true);
</script>
