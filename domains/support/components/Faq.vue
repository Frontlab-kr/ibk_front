<template>
  <div class="pc">
    <div class="ibk-board-category">
      <Button v-for="(item,idx) of faqCates" :label="item.ctgyNm"
              :severity="activeIndex === idx ? 'contrast' : 'secondary'" rounded @click="toggleFaqCtgyId(idx, item)" />
    </div>
  </div>
  <div class="ibk-board-list-head">
    <div class="pc">
      <div class="ibk-board-list-head__start">
        <h2>
          전체
          <strong>{{ totalCount }}</strong>
        </h2>
      </div>
    </div>
    <div class="ibk-board-list-head__end">
      <div class="w-full">
        <div class="ibk-board-search">
          <IconField>
            <InputIcon class="ibk-icon-16-search" />
            <InputText placeholder="검색어를 입력하세요." v-model="searchParam.searchText" />
          </IconField>
          <div class="ibk-board-search__button">
            <Button label="검색" severity="primary" @click="getFaq" />
          </div>
        </div>
        <div class="mo">
          <div class="ibk-board-category">
            <Button v-for="(item,idx) of faqCates" :label="item.ctgyNm"
                    :severity="activeIndex === idx ? 'contrast' : 'secondary'" rounded
                    @click="toggleFaqCtgyId(idx, item)" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ibk-board-faq">
    <div class="mo">
      <h2>
        전체
        <strong>{{ totalCount }}</strong>
      </h2>
    </div>
    <Accordion v-if="totalCount > 0">
      <AccordionPanel v-for="(item, idx) in faq" :key="idx" :value="idx">
        <AccordionHeader>
          <p>
            <Badge :value="item.ctgyNm" style="background: #f2f2f2; color: #5a5e6c"></Badge>
            <span class="ibk-board-faq__text"> {{ item.faqTtlNm }} </span>
          </p>
        </AccordionHeader>
        <AccordionContent>
          <div v-html="item.faqCon"></div>
          <div v-if="Array.isArray(item.commonAttachFileOutList) && item.commonAttachFileOutList.length > 0"
               class="ibk-board-detail-file">
            <ul>
              <li v-for="(item2, index2) in item.commonAttachFileOutList" :key="index2">
                <NuxtLink @click="handleFileDownload(item2.atchId, item2.atchSqn, item2.orcpFileNm)"
                          class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p style="cursor: pointer">{{ item2.orcpFileNm }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <template v-else>
      <div class="ibk-board-list-none">
        <div class="ibk-board-list-none__text">
          <span class="text-primary">{{ searchedText }}</span> 에 대한 검색 결과가 없습니다.
        </div>
      </div>
    </template>
    <Paginator :rows="searchParam.pageSize" :totalRecords="totalCount" @page="changePage" />
  </div>
</template>

<script setup lang="ts">
import type { FaqOptions } from '~/domains/support/type';
import { ref } from 'vue';
import { useSupportStore } from '~/domains/support/store';
import type { FaqCategoryOutVo, FaqPageInqInVo } from '~/api-client';
import Utility from '~/lib/Utility';
import downloadFile from '~/lib/CommonFileDown';

const props = withDefaults(
  defineProps<{
    items: FaqOptions | null
  }>(),
  {
    items: null,
  },
);
const emits = defineEmits<{
  (e: 'refresh'): void;
}>();
const route = useRoute();
const store = useSupportStore();

const faq = ref<any>();
const faqCates = reactive<FaqCategoryOutVo>({});
const activeIndex = ref(null);
const totalCount = ref<number>(0);
const searchedText = ref<string>('');

const searchParam = reactive<FaqPageInqInVo>({
  pageNo: 1,
  pageSize: 10,
  ctgyId: 0,
  searchText: '',
});

const toggleFaqCtgyId = async (idx: any, item: FaqCategoryOutVo) => {
  if (activeIndex.value === idx) {
    activeIndex.value = null;
    searchParam.ctgyId = 0;
  } else {
    activeIndex.value = idx;
    searchParam.ctgyId = item.ctgyId;
  }
  await getFaq();
};

const getFaqCategoryList = async () => {
  let cateRes = await $wrap($request().inqFaqCategoryList({}));
  const cateData = $response<FaqCategoryOutVo>(cateRes);
  if (Utility.isSuccess(cateData)) {
    Object.assign(faqCates, cateData.response);
  }
};

const getFaq = async () => {
  faq.value = [];
  await store.getFaqList(searchParam);
  if (store.faqData.data && store.faqData.data.response.contentsNbi > 0) {
    faq.value = store.faqData.data.response.contents;
    totalCount.value = store.faqData.data.response.ttalDataNbi;
    faq.value.forEach((x: any) => {
      x.cretTs = x.cretTs.length > 0 ? x.cretTs.substring(0, 10) : '';
    });
  } else {
    searchedText.value = searchParam.searchText;
    totalCount.value = 0;
    faq.value = {
      success: true,
      response: { contents: [], contentsNbi: 0, pageNo: 1, pageSize: 10, totalPages: 1, ttalDataNbi: 0 },
      error: null,
    };
  }
};

const handleFileDownload = async (atchId: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/faq/${atchId}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

const changePage = (page: any) => {
  searchParam.pageNo = page.page + 1;
  getFaq();
};

onMounted(async () => {
  await getFaqCategoryList();
  await getFaq();
});
</script>
