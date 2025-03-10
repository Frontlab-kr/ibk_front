<template>
  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="closeDialog" />
      </div>
      <div class="ibk-dialog-apply__title">연수 목록</div>
    </template>
    <div class="ibk-dialog-apply-training">
      <div class="ibk-dialog-apply-training-breadcrumb">
        <div class="ibk-breadcrumb">
<!--          <Breadcrumb :model="BreadcrumbItems" />-->
          {{ props.skllClsfPathNm }}
        </div>
      </div>
      <div class="ibk-dialog-apply-training-list">
        <SkillCourseItem v-for="(item, index) in store.skillCourseData.contents"
                         :item="item"
                         :key="`${item.dutyEdctCd}_${index}`"
                         @toggleLike="toggleLike(item)"
        />
      </div>
      <div class="ibk-dialog-apply-training-more">
        <Button v-if="Utility.hasMore(store.skillCourseData.paging)" icon="ibk-icon-16-more" iconPos="right" label="더보기" link @click="searchMore" />
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="primary" size="large" class="w-full" @click="closeDialog" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { SkillCourseSearchOptions } from '~/domains/skill/roadmap/type';
import { useSkillRoadmapStore } from '~/domains/skill/roadmap/store';
import Utility from '~/lib/Utility';
import type { SklRoadmapCourseOutVo } from '~/api-client';
const store = useSkillRoadmapStore();

const { visible } = defineModels<{
  visible: boolean;
}>();

const props = defineProps<{
  skllCd: string;
  skllClsfPathNm: string;
}>();

const INIT_PARAMS = (): SkillCourseSearchOptions => ({
  skllCd: props.skllCd,
  pageSize: 5,
  pageNo: 1,
});

const params = reactive<SkillCourseSearchOptions>(INIT_PARAMS());

const getSkillRoadmapCourseList = async (isFirst = true) => {
  await store.getSkillRoadmapCourseList(params, isFirst);
}

const fetchData = async (isFirst = true) => {
  await getSkillRoadmapCourseList(isFirst);
}

const searchMore = () => {
  params.pageNo!++;
  fetchData(false);
}

const closeDialog = () => {
  visible.value = false;
}

const toggleLike = (item: SklRoadmapCourseOutVo) => {
  item.likeYn = item.likeYn === 'Y' ? 'N' : 'Y';
}

onBeforeMount(()=>{
  fetchData();
})

</script>

<style scoped>

</style>
