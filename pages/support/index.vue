<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head ibk-board-head--tab">
        <h1>학습지원</h1>

        <div class="mo">
          <div class="ibk-board-list-head__write">
            <Button label="1:1 문의하기" severity="primary" rounded outlined />
          </div>
        </div>
      </div>
      <Tabs v-model:value="store.currentTab" @update:value="changeTab">
        <TabList>
          <Tab value="question">1:1 문의</Tab>
          <Tab value="faq">자주하는 질문</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="question">
            <Question v-if="store.currentTab == 'question'"/>
          </TabPanel>
          <TabPanel value="faq">
            <Faq v-if="store.currentTab == 'faq'"/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupportStore } from '~/domains/support/store';
import Question from '~/domains/support/components/Question.vue';
import Faq from '~/domains/support/components/Faq.vue';
const route = useRoute();
const router = useRouter();
const store = useSupportStore();

watch(() => route.query, () => {
  store.currentTab = route.query.type ? route.query.type.toString() : 'question';
},
  { deep: true, immediate: true },
);

const changeTab = (type: string) => {
  router.push({ path: route.fullPath, query: { ...route.query, type: type } });
};

</script>
