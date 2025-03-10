<template>
  <div class="ibk-inner">
    <div class="ibk-error">
      <div class="ibk-error__text">
        <strong>찾을 수 없는 페이지입니다.</strong>
        <p>
          웹 사이트가 일시적으로 오프라인 상태입니다.<br />
          잠시 후 다시 접속해 보시기 바랍니다.
        </p>
      </div>
      <div class="ibk-error__button">
        <Button label="메인페이지로 돌아가기" outlined rounded />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'puberror',
});
</script>
