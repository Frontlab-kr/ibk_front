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
              <div class="ibk-board-detail-head__badge">
                <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
              </div>
              <i class="ibk-icon-24-lock"></i>
              <p>*과제명 노출* 회계의 이해 과제</p>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
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
              국립생태원에서는 성인 및 전문인 대상으로 생태 전문교육과정을 운영하고 있습니다. 국립생태원에서는 성인 및
              전문인 대상으로 생태 전문교육과정을 운영하고 있습니다. 국립생태원에서는 성인 및 전문인 대상으로 생태
              전문교육과정을 운영하고 있습니다.
            </p>

            <p>
              <strong>학습자 유의사항</strong>
            </p>

            <p>
              국립생태원에서는 성인 및 전문인 대상으로 생태 전문교육과정을 운영하고 있습니다. 성인 및 전문인 대상
              전문교육과정은 다음과 같습니다. 국립생태원에서는 성인 및 전문인 대상으로 생태 전문교육과정을 운영하고
              있습니다.
            </p>

            <ul>
              <li>공직자 연수과정</li>
              <li>교원 연수과정</li>
              <li>대학생 현장실습</li>
            </ul>
            <img src="https://picsum.photos/960/480" alt="" />
          </div>
          <div class="ibk-board-detail-file">
            <h3>첨부파일 <strong>3</strong></h3>
            <ul>
              <li>
                <NuxtLink to="/" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-download"></i>
                  <div>
                    <p>Dashboard prototype recording.mp4</p>
                  </div>
                  <strong>1.0MB</strong>
                </NuxtLink>
              </li>
              <li class="ibk-board-detail-file-ing">
                <NuxtLink to="/" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-download"></i>
                  <div>
                    <p>Dashboard prototype recording.mp4</p>
                    <div class="mo">
                      <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
                    </div>
                  </div>
                  <strong>1.0MB</strong>
                </NuxtLink>
                <div class="pc">
                  <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
                </div>
              </li>
              <li class="ibk-board-detail-file-ing">
                <NuxtLink to="/" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-download"></i>
                  <div>
                    <p>
                      Dashboard prototype recording sapiente delectus, ut aut Dashboard prototype recording sapiente
                      delectus, ut aut
                    </p>
                    <div class="mo">
                      <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
                    </div>
                  </div>
                  <strong>1.0MB</strong>
                </NuxtLink>
                <div class="pc">
                  <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
                </div>
              </li>
            </ul>
          </div>
          <div class="ibk-board-detail-button">
            <Button label="이전" severity="secondary" outlined size="large" />
            <Button label="다음" severity="primary" size="large" />
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
useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});
</script>
