<template>
  <TabPanel v-if="isReady" value="exam">
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">신청정보</div>
        </div>
        <div class="ibk-dialog-apply-item__table">
          <div class="pc">
            <table>
              <colgroup>
                <col style="width: 168px" />
                <col style="width: 552px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                  <td>{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</td>
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
              </tbody>
            </table>
          </div>
        </div>
        <div class="ibk-dialog-apply-item-sub">
          <div class="ibk-dialog-apply-item-sub-item">
            <h5>취득자격증</h5>
            <div class="ibk-table ibk-table--scroll-x">
              <table>
                <colgroup>
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                  <col style="width: 16.6%" />
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">취득내역</th>
                    <th colspan="2">등급</th>
                    <th colspan="2">취득일자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center" colspan="2">{{ props.item.qlcrNm }}</td>
                    <td class="text-center" colspan="2">{{ props.item.qlcrGdcdNm }}</td>
                    <td class="text-center" colspan="2">{{ props.item.qlacYmd }}</td>
                  </tr>
                  <tr>
                    <th class="text-center">카드승인일자</th>
                    <td colspan="2">{{ props.item.crdAthzYmd }}</td>
                    <th class="text-center">
                      응시료<br />
                      (카드승인금액)
                    </th>
                    <td colspan="2">{{ Utility.setCommaPer3Digit(props.item.crahAmt) }}원</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <col style="width: 128px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>카드번호</th>
                  <td>{{ props.item.encpCardNo }}</td>
                </tr>
                <tr>
                  <th>승인번호</th>
                  <td>{{ props.item.crdApn }}</td>
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
                  <td>{{ props.item.crdApn }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item&#45;&#45;line">
        <div class="ibk-board-detail-file">
          <h3>첨부파일 <strong>{{ props.item.attachFileList.length }}</strong></h3>
          <ul>
            <li v-for="(file, index) of props.item.attachFileList">
              <NuxtLink @click="handleFileDownload(file.onslDvlpSprnAplcDcd, file.sqc, file.atchSqn, file.orcpFileNm)" class="ibk-board-detail-file__text">
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

<!--      <div class="ibk-dialog-apply-item ibk-dialog-apply-item&#45;&#45;line">
        <div class="ibk-board-detail-file">
          <h3>첨부파일 <strong>3</strong></h3>
          <ul>
            <li>
              <NuxtLink to="/" class="ibk-board-detail-file__text">
                <i class="ibk-icon-24-download"></i>
                <div>
                  <p>Dashboard prototype recording.mp4</p>
                </div>
                <strong>1.0MB</strong>
              </NuxtLink>
            </li>
            <li class="ibk-board-detail-file-ing">
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
            </li>
          </ul>
        </div>
      </div>-->

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

const handleFileDownload = async (onslDvlpSprnAplcDcd: string, sqc: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/idi/exam/cost/file/${onslDvlpSprnAplcDcd}/${sqc}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

onBeforeMount(async () => {
  isReady.value = true;
})

</script>
