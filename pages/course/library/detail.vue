<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined @click="moveToList"/>
        </div>
      </div>
      <div class="ibk-board-inner">
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <div class="ibk-board-detail-head__badge">
                <Badge value="자료실" style="background: #f2f2f2; color: #5a5e6c"></Badge>
              </div>
              <p>{{ params.ttlNm }}</p>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>{{ params.cretTs }}</li>
<!--                  <li>
                    <i class="ibk-icon-16-view"></i>
                    1,777
                  </li>-->
                </ul>
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents" v-html="params.edctRflbCon"></div>
          <div v-if="params.courseBoardAtchOutList" class="ibk-board-detail-file cursor-pointer">
            <ul>
              <li v-for="(item, index) of params.courseBoardAtchOutList">
                <NuxtLink @click="handleFileDownload(
                  params.dutyEdctCd,
                  params.edctDsprNo,
                  item.objcDsncVl,
                  item.edctAtchObjcNo,
                  item.edctAtchSqn
                )" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p>{{item.orcpFileNm}}</p>
                </NuxtLink>
<!--                <strong>1.0MB</strong>-->
              </li>
            </ul>
          </div>
<!--          <div class="ibk-board-detail-button">
            <Button label="이전" severity="secondary" outlined size="large" />
            <Button label="다음" severity="primary" size="large" />
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Utility from '~/lib/Utility';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

import { ref } from 'vue';
import type { CourseLibraryOptions } from '~/domains/course/library/type';
import downloadFile from '~/lib/CommonFileDown';

const route = useRoute();
const atchNo = ref<string | null>(route.query.atchNo as string);

const params = reactive<CourseLibraryOptions>({
  atchNo: Number(atchNo.value),
  dutyEdctCd: '',
  edctDsprNo: 0,
  ttlNm: '',
  edctRflbCon: '',
  useYn: 'Y'
});

const getCourseLibraryDetail = async () => {
  let res = await $request().inqCourseLibraryDtl({atchNo: Number(atchNo.value)});
  const data = $response<CourseLibraryOptions>(res);
  if(Utility.isSuccess(data)){
    Object.assign(params, data.response);
    params.cretTs = params.cretTs?.substring(0,10);
    // console.log('params : ',params)
  }
}

const router = useRouter();
const moveToList = () => {
  // 마이페이지에도 쓰고 있으므로 뒤로 보내 버림
  router.back();
}

const handleFileDownload = async (dutyEdctCd: string,
                                  edctDsprNo: number,
                                  objcDsncVl: string,
                                  edctAtchObjcNo: number,
                                  edctAtchSqn: number
) => {
  const url = `/v1/file/download/course/${dutyEdctCd}/${edctDsprNo}/${objcDsncVl}/${edctAtchObjcNo}/${edctAtchSqn}`;
  await downloadFile(url, "");
};

onMounted(async () => {
  if(Number(atchNo.value) > 0){
    await getCourseLibraryDetail();
  }
})
</script>
