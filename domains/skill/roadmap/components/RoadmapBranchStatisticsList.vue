<template>
  <div class="ibk-table ibk-table--scroll-x">
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>직책</th>
          <th v-for="(item, index) in store.skillCategoryList" :key="index">
            {{ item.skllClsfNm }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="`${item.userId}_${index}`">
          <td>{{ item.userNm }}</td>
          <td>{{ item.jbclNm }}</td>
          <td v-for="(item2, index2) in store.skillCategoryList" :key="index2">
            {{ item[item2.skllClsfVl] || 0 }}
          </td>
        </tr>
        <tr v-if="list.length === 0"><td :colspan="store.skillCategoryList.length+2">데이터가 없습니다.</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';

const store = useSkillRoadmapStore();

const props = defineProps<{
  items: any[]
}>();

const list = computed(() => {
  const tempList: any[] = [];
  let currentUserId = '';
  let tempMap = {};

  props.items.forEach((v, idx)=>{
    if(currentUserId != v.userId) {
      if(idx !== 0) {
        tempList.push(tempMap);
        tempMap = {};
      }

      currentUserId = v.userId;

      tempMap['userId'] = v.userId;
      tempMap['userNm'] = v.userNm;
      tempMap['jbclNm'] = v.jbclNm;

      store.skillCategoryList.forEach((x)=>{
        if(x.skllClsfVl == v.skllClsfVl) {
          tempMap[x.skllClsfVl] = v.cpctLvlAcqtScr
        }
      });
    } else {
      store.skillCategoryList.forEach((x)=>{
        if(x.skllClsfVl == v.skllClsfVl) {
          tempMap[x.skllClsfVl] = v.cpctLvlAcqtScr;
        }
      });
    }
  });

  if(tempMap['userId']) {
    tempList.push(tempMap);
  }

  return tempList;
});

</script>

<style scoped>

</style>
