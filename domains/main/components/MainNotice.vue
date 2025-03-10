<template>
  <div class="ibk-main-board-head">
    <h5>공지사항</h5>
    <Button label="더보기" link icon="ibk-icon-16-board-arrow" iconPos="right" size="small" @click="moreNotice" />
  </div>
  <div class="ibk-main-board-list">
    <NuxtLink v-for="(item, index) in mainNoticeList" :key="`${item.blbrPtngId}_${index}`" to="/" class="ibk-main-board-list-item" @click="goNotice(item)">
      <div class="ibk-main-board-list-item__start">
        <div class="ibk-main-board-list-item__title">
          <div v-if="item.noticeYn === 'Y'" class="ibk-main-board-list-item__badge">
            <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
          </div>
          <p>{{ item.bltApowTtlNm }}</p>
        </div>
      </div>
      <div class="ibk-main-board-list-item__end">
        <div class="ibk-main-board-list-item__date">{{ $stringDateFormat(item.cretTs, 'YYYY.MM.DD')  }}</div>
      </div>
    </NuxtLink>
    <!--
    <NuxtLink to="/" class="ibk-main-board-list-item">
      <div class="ibk-main-board-list-item__start">
        <div class="ibk-main-board-list-item__title">
          <div class="ibk-main-board-list-item__badge">
            <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
          </div>
          <p>1월 IBK사이버제휴 변경과정 목록</p>
        </div>
      </div>
      <div class="ibk-main-board-list-item__end">
        <div class="ibk-main-board-list-item__date">2025.01.01</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/" class="ibk-main-board-list-item">
      <div class="ibk-main-board-list-item__start">
        <div class="ibk-main-board-list-item__title">
          <div class="ibk-main-board-list-item__badge">
            <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
          </div>
          <p>어학과정 신청 시 유의사항</p>
        </div>
      </div>
      <div class="ibk-main-board-list-item__end">
        <div class="ibk-main-board-list-item__date">2025.01.01</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/" class="ibk-main-board-list-item">
      <div class="ibk-main-board-list-item__start">
        <div class="ibk-main-board-list-item__title">
          <div class="ibk-main-board-list-item__badge">
            <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
          </div>
          <p>스마트러닝 APP 설치방법 안내</p>
        </div>
      </div>
      <div class="ibk-main-board-list-item__end">
        <div class="ibk-main-board-list-item__date">2025.01.01</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/" class="ibk-main-board-list-item">
      <div class="ibk-main-board-list-item__start">
        <div class="ibk-main-board-list-item__title">
          <p>1월 IBK사이버제휴 변경과정 목록</p>
          <i class="ibk-icon-24-clip"></i>
        </div>
      </div>
      <div class="ibk-main-board-list-item__end">
        <div class="ibk-main-board-list-item__date">2025.01.01</div>
      </div>
    </NuxtLink>
    -->
  </div>
</template>

<script setup lang="ts">
import { type MainNotice, useMainStore } from '~/domains/main';

const router = useRouter();
const store = useMainStore();

const mainNoticeList = computed(() => store.mainNoticeList);

const moreNotice = () => {
  router.push(`/community`);
}

const goNotice = (item: MainNotice) => {
  router.push(`/community/${item.blbrPtngId}`);
}

onBeforeMount(() => {
  //// console.log(store.mainNoticeList);
})
</script>

<style scoped>

</style>
