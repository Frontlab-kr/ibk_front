<template>
<div class="ibk-inner">
    <div class="ibk-apply">
      <div class="ibk-apply-head ibk-apply-head--tab">
        <h1>역량개발지원 신청내역</h1>
        <div class="ibk-apply-head__button">
          <Button label="신청하기" outlined rounded icon="ibk-icon-16-apply" @click="goApply"/>
        </div>
      </div>
      <Tabs :value="tab">
        <TabList>
          <Tab value="all" @click="changeTab('all')">나의 신청현황 {{skillStore.myRegisterStatusList.paging.totalCount}}</Tab>
          <Tab value="apporval" @click="changeTab('apporval')">승인문서 {{skillStore.myApprovalStatusList.paging.totalCount}}</Tab>
          <Tab value="reject" @click="changeTab('reject')">반려문서 {{skillStore.myRejectStatusList.paging.totalCount}}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="all">
            <SupportRegister/>
          </TabPanel>
          <TabPanel value="apporval">
            <SupportApproval/>
          </TabPanel>
          <TabPanel value="reject">
            <SupportReject/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SupportRegister from '~/domains/skill/components/SupportRegister.vue';
import SupportApproval from '~/domains/skill/components/SupportApproval.vue';
import SupportReject from '~/domains/skill/components/SupportReject.vue';
import { useSkillStore } from '~/domains/skill/store';

definePageMeta({
  layout: 'pub',
});

const skillStore = useSkillStore();
const route = useRoute();

const dates = ref('2025.01.01 - 2025.01.01');

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);

const tab = ref<string | null>(route.query.tab as string);

const goApply = () => {
  navigateTo('/skill');
}

const changeTab = (target:string) => {
  tab.value = target;
  navigateTo(`/skill/detail?tab=${tab.value}`);
}

</script>
<style scoped>

</style>
