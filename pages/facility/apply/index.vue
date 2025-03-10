<template>
  <div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>사용시설 신청</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청내역 확인" outlined rounded icon="ibk-icon-16-apply" @click="goHistory"/>
        </div>
      </div>
      <Tabs :value="tab">
        <TabList>
          <Tab value="training" @click="changeTab('training')">연수원</Tab>
          <Tab value="classRoom" @click="changeTab('classRoom')">강의실</Tab>
          <Tab value="studio" @click="changeTab('studio')">스튜디오</Tab>
        </TabList>
        <TabPanels>
          <LazyTrainingApplyTab/>
          <LazyClassRoomApplyTab/>
          <LazyStudioApplyTab/>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const route = useRoute();
const tab = ref<string | null>(route.query.tab as string);
const goHistory = () => {
  if(!tab.value) tab.value = 'training';
  navigateTo(`/facility/apply/history?tab=${tab.value}`);
}

const changeTab = (target:string) => {
  tab.value = target;
  navigateTo(`/facility/apply?tab=${tab.value}`);
}

onBeforeMount(async () => {
  tab.value = 'training';
  if (route.query.tab) {
    tab.value = route.query.tab
  }
})

</script>
