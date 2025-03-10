<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined />
        </div>
      </div>
      <div class="ibk-board-list-head">
        <div class="ibk-board-list-head__start">
          <h2>
            타이틀명
            <strong>0</strong>
          </h2>
          <div class="mo">
            <div class="ibk-board-list-head__write">
              <Button icon="ibk-icon-16-pencil" label="글쓰기" severity="primary" rounded outlined />
            </div>
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
          <div class="pc">
            <div class="ibk-board-list-head__write">
              <Button icon="ibk-icon-16-pencil" label="글쓰기" severity="primary" rounded outlined />
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-board-list">
        <div class="ibk-board-list-none">
          <div class="ibk-board-list-none__text">
            <span class="text-primary">업무</span> 에 대한 검색 결과가 없습니다.
          </div>
          <Button label="목록으로 돌아가기" severity="primary" rounded outlined />
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
