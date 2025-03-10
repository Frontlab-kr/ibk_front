<template>
  <div class="ibk-lectureroom-my">
    <pubMypagehead />
    <div class="ibk-inner">
      <div class="ibk-lectureroom-my-review">
        <h3>후기관리</h3>
        <Tabs value="0">
          <TabList>
            <Tab value="0">후기 작성 12</Tab>
            <Tab value="1">작성한 후기 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="ibk-lectureroom-my-review-none">
                <p>작성된 후기가 없습니다.</p>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="ibk-lectureroom-my-review-none">
                <p>작성된 후기가 없습니다.</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
import pubMypagehead from '@/components/pubMypagehead.vue';
const modal01 = ref(false);
const modal02 = ref(false);
const confirm = useConfirm();
const radio = ref('');
const checkbox = ref('');
const rating = ref(4);

const confirm1 = () => {
  confirm.require({
    message: '변경 신청 되었습니다.',
    rejectProps: {
      label: '닫기',
      severity: 'link',
      size: 'large',
    },
    acceptProps: {
      label: '확인',
      severity: 'link',
      size: 'large',
    },
    accept: () => {
      confirm.close();
    },
    reject: () => {
      confirm.close();
    },
  });
};

import pubProduct from '~/domains/myLearn/components/MyLearnProduct.vue';
</script>
