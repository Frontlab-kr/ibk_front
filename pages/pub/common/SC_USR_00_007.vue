<template>
  <div class="ibk-inner">
    <div class="ibk-search-result">
      <div class="ibk-search-result-head">
        <div class="ibk-search-result-head__text"><span class="text-primary">기업은행 연수</span> 검색결과입니다.</div>
        <p>검색어를 바르게 입력했는지 확인해 보세요.</p>
      </div>
      <div class="ibk-search-result-body">
        <div class="ibk-search-result-item">
          <h5>연수명 <span>24</span></h5>
          <div class="ibk-search-result-list">
            <pubProduct02 :thumb="true" :heart="true" :eyebrow="true" :title="true" v-for="i of 10" />
          </div>
          <div class="ibk-search-result-list-more">
            <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
          </div>
        </div>
        <div class="ibk-search-result-item">
          <h5>소셜러닝 <span>24</span></h5>
          <div class="ibk-social-list">
            <NuxtLink to="/" class="ibk-social-list-item" v-for="i of 4">
              <div class="ibk-social-list-item__badge">
                <Badge value="업무팁" style="background: rgba(48, 138, 242, 0.1); color: #308af2"></Badge>
                <Badge value="전문가칼럼" style="background: rgba(254, 110, 0, 0.1); color: #fe6e00"></Badge>
                <Badge value="고민상담" style="background: rgba(42, 202, 200, 0.1); color: #2acac8"></Badge>
                <Badge value="묻고답하기" style="background: rgba(255, 55, 94, 0.1); color: #ff375e"></Badge>
                <Badge value="투자경험담" style="background: rgba(113, 81, 255, 0.1); color: #7151ff"></Badge>
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
          <div class="ibk-search-result-list-more">
            <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

import pubProduct02 from '@/components/pubProduct02.vue';
</script>
