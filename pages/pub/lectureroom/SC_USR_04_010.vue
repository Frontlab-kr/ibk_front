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
            공지사항
            <strong>25</strong>
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
        <NuxtLink to="/" class="ibk-board-list-item" v-for="i of 6">
          <div class="ibk-board-list-item__start">
            <div class="ibk-board-list-item__number">1</div>
            <div class="ibk-board-list-item__title">
              <div class="ibk-board-list-item__badge">
                <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
              </div>
              <p>
                2024년 4월 온라인아카데미 수강신청 안내2024년 4월 온라인아카데미 수강신청 안내2024년 4월 온라인아카데미
                수강신청 안내2024년 4월 온라인아카데미 수강신청 안내
              </p>
              <i class="ibk-icon-24-clip"></i>
            </div>
          </div>
          <div class="ibk-board-list-item__end">
            <div class="ibk-board-list-item__date">2025.07.24</div>
            <div class="ibk-board-list-item__view">
              <i class="ibk-icon-20-view"></i>
              200
            </div>
          </div>
        </NuxtLink>
        <Paginator :rows="10" :totalRecords="120"></Paginator>
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
