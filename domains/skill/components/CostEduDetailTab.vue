<template>
  <TabPanel v-if="isReady" value="edu">
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>수강방식</th>
                  <td colspan="3">{{ props.item.edctMthdDsncNm }}</td>
                </tr>
                <tr>
                  <th>수강분야</th>
                  <td colspan="3">{{ props.item.onslDvlpSprnAplcDcdNm }}</td>
                </tr>
                <tr>
                  <th>교육기관명</th>
                  <td colspan="3">{{ props.item.edinNm }}</td>
                </tr>
                <tr>
                  <th>수강연수명</th>
                  <td colspan="3">{{ props.item.edctProcNm }}</td>
                </tr>
                <tr>
                  <th>수강기간</th>
                  <td colspan="3">{{ props.item.lcteSttgYmd }}~{{ props.item.lcteFnshYmd }}</td>
                </tr>
                <tr>
                  <th>신청분기</th>
                  <td></td>
                  <th>분기 자동 한도</th>
                  <td></td>
                </tr>
                <tr>
                  <th>학원비 (수강료)</th>
                  <td>{{ Utility.setCommaPer3Digit(props.item.trngAtlcAmt) }}원</td>
                  <th>실지원 금액</th>
                  <td>{{ Utility.setCommaPer3Digit(props.item.pamtAmt) }}원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%" />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2">신청자 정보</th>
                </tr>
                <tr>
                  <td colspan="2">{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>수강방식</th>
                  <th>수강분야</th>
                </tr>
                <tr>
                  <td>{{ props.item.edctMthdDsncVl }}</td>
                  <td>{{ props.item.onslDvlpSprnAplcDcdNm }}</td>
                </tr>
                <tr>
                  <th colspan="2">교육기관명</th>
                </tr>
                <tr>
                  <td colspan="2">{{ props.item.edinNm }}</td>
                </tr>
                <tr>
                  <th colspan="2">수강연수명</th>
                </tr>
                <tr>
                  <td colspan="2">{{ props.item.edctProcNm }}</td>
                </tr>
                <tr>
                  <th colspan="2">수강기간</th>
                </tr>
                <tr>
                  <td colspan="2">{{ props.item.lcteSttgYmd }}~{{ props.item.lcteFnshYmd }}</td>
                </tr>
                <tr>
                  <th colspan="2">신청분기</th>
                </tr>
                <tr>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2">분기한도</th>
                </tr>
                <tr>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2">학원비(수강료)</th>
                </tr>
                <tr>
                  <td colspan="2">{{ Utility.setCommaPer3Digit(props.item.trngAtlcAmt) }}원</td>
                </tr>
                <tr>
                  <th colspan="2">실지원금액</th>
                </tr>
                <tr>
                  <td colspan="2">{{ Utility.setCommaPer3Digit(props.item.pamtAmt) }}원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col style="width: 240px" />
                <col style="width: 120px" />
                <col style="width: 240px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>카드번호</th>
                  <td colspan="3">{{ props.item.encpCardNo }}</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                  <td colspan="3">{{ props.item.cardApn }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>카드번호</th>
                </tr>
                <tr>
                  <td>{{ props.item.encpCardNo }}</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                </tr>
                <tr>
                  <td>{{ props.item.cardApn }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-board-detail-file">
          <h3>첨부파일 <strong>{{ props.item.attachFileList.length }}</strong></h3>
          <ul>
            <li v-for="(file, index) of props.item.attachFileList">
              <NuxtLink @click="handleFileDownload(file.spmyAplcDcd, file.sqc, file.atchSqn, file.orcpFileNm)" class="ibk-board-detail-file__text">
                <i class="ibk-icon-24-download"></i>
                <div>
                  <p>{{ file.orcpFileNm }}</p>
                </div>
                <strong>{{ Utility.bytesToMB(file.flszVl) }}</strong>
              </NuxtLink>
            </li>
<!--            <li class="ibk-board-detail-file-ing">
              <NuxtLink to="/" class="ibk-board-detail-file__text">
                <i class="ibk-icon-24-download"></i>
                <div>
                  <p>Dashboard prototype recording.mp4</p>
                  <div class="mo">
                    <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
                  </div>
                </div>
                <strong>1.0MB</strong>
              </NuxtLink>
              <div class="pc">
                <strong class="text-primary-600"> 무해화 검증 중입니다. </strong>
              </div>
            </li>
            <li class="ibk-board-detail-file-ing">
              <NuxtLink to="/" class="ibk-board-detail-file__text">
                <i class="ibk-icon-24-download"></i>
                <div>
                  <p>
                    Dashboard prototype recording sapiente delectus, ut aut Dashboard prototype recording sapiente
                    delectus, ut aut
                  </p>
                  <div class="mo">
                    <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
                  </div>
                </div>
                <strong>1.0MB</strong>
              </NuxtLink>
              <div class="pc">
                <strong class="text-red-500"> 무해화 검증이 실패 했습니다.</strong>
              </div>
            </li>-->
          </ul>
        </div>
      </div>

      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 유의사항</p>
          <p>2. 유의사항</p>
          <p>3. 유의사항</p>
        </div>
      </div>
    </div>
  </TabPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/domains/auth';
import type { EduCostApplyOptions } from '~/domains/skill/type';
import { useSkillStore } from '~/domains/skill/store';
import Utility from '../../../lib/Utility';
import downloadFile from '~/lib/CommonFileDown';
const route = useRoute();
const authStore = useAuthStore();
const tab = ref<string | null>(route.query.tab as string);
const store = useSkillStore();
const isReady = ref(false);
const props = withDefaults(
	defineProps<{
    item: EduCostApplyOptions | null,
	}>(),
	{
    item: null,
  }
);

const handleFileDownload = async (spmyAplcDcd: string, sqc: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/idi/edu/cost/file/${spmyAplcDcd}/${sqc}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

onBeforeMount(async () => {
  if(props.item.edctMthdDsncVl === 'ONLINE'){
    props.item.edctMthdDsncNm = '온라인';
  }else if(props.item.edctMthdDsncVl === 'OFFLINE'){
    props.item.edctMthdDsncNm = '오프라인';
  }

  isReady.value = true;
})

</script>
