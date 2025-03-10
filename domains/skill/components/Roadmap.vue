<template>
  <div class="ibk-roadmap">
    <Tabs v-model:value="roadmapTabIndex" @update:value="changeTab">
      <div class="ibk-roadmap-tab">
        <TabList>
          <Tab value="0">로드맵 현황</Tab>
          <Tab value="1">자격증</Tab>
          <Tab value="2">나의 이력</Tab>
          <Tab value="3">부점 현황</Tab>
        </TabList>
      </div>
      <TabPanels>
        <TabPanel value="0">
          <RoadmapStatus v-if="roadmapTabIndex === '0'" />
        </TabPanel>
        <TabPanel value="1">
          <LicenseStatus v-if="roadmapTabIndex === '1'" />
        </TabPanel>
        <TabPanel value="2">
          <RoadmapHistory v-if="roadmapTabIndex === '2'" />
        </TabPanel>
        <TabPanel value="3">
          <RoadmapBranchStatistics v-if="roadmapTabIndex === '3'"/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RoadmapStatus from '~/domains/skill/roadmap/components/RoadmapStatus.vue';

const router = useRouter();
const route = useRoute();
const roadmapTabIndex = ref<string>('0');


const changeTab = (tab: string) => {
  router.push({ path: route.path, query: {...route.query, subTab: tab }});
}

watch(()=>route.query, ()=>{
  if(route.query && route.query.tab === 'roadMap') {
    if(route.query.subTab) {
      roadmapTabIndex.value = route.query.subTab;
    } else {
      router.replace({ path: route.path, query: {...route.query, subTab: '0' }});
    }
  }
}, { deep: true, immediate: true});

onBeforeMount(()=> {
})
</script>

<style scoped>

</style>
