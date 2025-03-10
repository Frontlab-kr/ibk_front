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
                <Badge value="답변대기" style="background: #e4f2ff; color: #1654d1"></Badge>
                <i class="ibk-icon-24-clip"></i>
              </div>
              <p>가정용 MS 오피스는 어디서 다운로드 받을 수 있나요?</p>
              <div class="ibk-board-detail-head__clip">
                <i class="ibk-icon-24-clip"></i>
              </div>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>2023.12.13</li>
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
              안녕하세요~ 다운로드 링크 예전엔 바로 보였는데<br />
              도저히 못찾겠네요.~<br />
              <br />
              답변 부탁드려요.
            </p>
          </div>
          <div class="ibk-board-detail-file">
            <ul>
              <li>
                <NuxtLink to="/" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p>가정용 MS 오피스 다운로드 메뉴.png</p>
                </NuxtLink>
                <strong>1.0MB</strong>
              </li>
            </ul>
          </div>
          <div class="ibk-board-detail-reply">
            <div class="ibk-board-detail-reply__inner">
              <div class="ibk-board-detail-reply__title">안녕하세요 기은님. 문의 주신 내용 답변드립니다.</div>
              <div class="ibk-board-detail-reply__date">2025.00.00 관리자 답변완료</div>
              <div class="ibk-board-detail-reply__contents">
                안녕하세요 기은님. 문의주신 내용 답변드립니다.<br />
                연수원 메뉴 상단에 학습지원실 > 지원실 > 지원실에서 다운로드 가능합니다.<br />
                감사합니다.
              </div>
            </div>
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
