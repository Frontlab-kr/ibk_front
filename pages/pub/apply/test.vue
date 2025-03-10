<script setup lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall';

const items = [50, 75, 75, 100, 50, 50, 75, 150, 125, 175, 50, 100, 125];
</script>

<template>
  <div class="ibk-inner">
    <MasonryWall :items="items" :ssr-columns="1" :column-width="100" :gap="16">
      <template #default="{ item, index }"> 1 </template>
    </MasonryWall>
  </div>
</template>
