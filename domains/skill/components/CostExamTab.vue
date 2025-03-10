<template>
  <TabPanel value="exam">
    <div class="ibk-dialog-apply-contents">
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title ibk-dialog-apply-item-head__title--line">신청정보</div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="field">
              <label>신청자 정보</label>
              <div class="ibk-dialog-apply-item-text">{{ authStore.userInfo.deptDsncNm }}・{{ authStore.userInfo.blngHdqrDsncNm }}・{{ authStore.userInfo.userNm }}</div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <div class="ibk-dialog-apply-item-sub-head">
                <label>취득자격증</label>
              </div>
              <div class="ibk-dialog-apply-item-search">
                <InputText v-model="searchParam.qlcrNm" type="text" size="large" class="w-full" placeholder="취득자격증명을 입력해주세요." :disabled="props.item.sqc > 0" />
                <Button label="취득자격증 검색" severity="primary" size="large" @click="getLicenses"/>
              </div>
            </div>
          </div>
          <div v-if="isSearched" class="col-12">
            <div class="field">
              <div class="ibk-dialog-apply-item-sub-head">
                <label>검색결과</label>
              </div>
              <div class="pc">
                  <div class="ibk-dialog-apply-list__table">
                    <table>
                      <colgroup>
                        <col style="width: 10%" />
                        <col style="width: 30%" />
                        <col style="width: 30%" />
                        <col style="width: 30%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">선택</th>
                          <th>취득내역</th>
                          <th>등급</th>
                          <th>취득일자</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="skillStore.licenseHistoryData.contents.length > 0"
                          v-for="(item, index) in skillStore.licenseHistoryData.contents"
                          :key="index"
                          :class="{ active: props.item.qlcrDsncVl === item.qlcrDsncVl }"
                        >
                          <td class="text-center">
                            <RadioButton v-model="props.item.qlcrDsncVl" :value="item.qlcrDsncVl" variant="filled" />
                          </td>
                          <td class="text-center">{{ item.qlcrNm }}</td>
                          <td class="text-left">{{ item.qlcrGdcdNm }}</td>
                          <td class="text-left">{{ item.acqtYmd }}</td>
                        </tr>
                        <tr v-else>
                          <td colspan="4" class="text-center">검색 결과가 없습니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="mo">
                  <div class="ibk-dialog-apply-list__list">
                    <ul>
                      <li v-if="skillStore.licenseHistoryData.contents.length > 0"
                        v-for="(item, index) in skillStore.licenseHistoryData.contents"
                        :key="index"
                        :class="{ active: props.item.qlcrDsncVl === item.value }"
                      >
                        <RadioButton v-model="props.item.qlcrDsncVl" :value="item.qlcrDsncVl" variant="filled" />
                        <table>
                          <tbody>
                            <tr>
                              <th>취득내역</th>
                              <td>{{ item.qlcrNm }}</td>
                            </tr>
                            <tr>
                              <th>등급</th>
                              <td>{{ item.qlcrGdcdNm }}</td>
                            </tr>
                            <tr>
                              <th>취득일자</th>
                              <td>{{ item.acqtYmd }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li v-else>
                        <table>
                          <tbody>
                            <tr>
                              검색결과가 없습니다
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
          <div v-if="props.item.qlcrDsncVl" class="col-12">
            <div class="field">
              <label>취득자격증</label>
              <div>
                <InputText v-model="selectedLicense" type="text" size="large" class="w-full" disabled/>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>카드승인일자</label>
              <div class="ibk-dialog-apply-item-search">
                <div class="ibk-datepicker-input">
                  <DatePicker
                    v-model="selectedDate"
                    :enable-time-picker="false"
                    :manualInput="false"
                    locale="ko"
                    auto-apply
                    :month-change-on-scroll="false"
                    class="w-full p-datepicker-lg"
                  />
                </div>
                <Button style="margin-left: auto;" label="복지비 내역조회" severity="primary" size="large" @click.stop="searchWelfareFee"/>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="field">
              <label>응시료(카드승인금액)</label>
              <InputText v-model="props.item.crahAmt" type="text" size="large" class="w-full" placeholder="응시료를 입력해주세요." />
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
        </div>
        <div class="ibk-dialog-apply-confirm">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>카드번호</label>
                <InputText v-model="props.item.encpCardNo" type="text" size="large" class="w-full" placeholder="카드번호를 입력해주세요." />
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>승인번호</label>
                <InputText v-model="props.item.crdApn" type="text" size="large" class="w-full" placeholder="승인번호를 입력해주세요." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류 업로드하기</div>
        </div>
        <div class="ibk-write-list-upload">
          <div class="ibk-write-list-upload__caution">
            <ul>
              <li>파일을 drag and drop 해주거나 영역을 클릭해주세요.</li>
              <li>업로드 확장자: SVG, PNG, JPG or GIF , PDF, PPTX, XLSX, DOCX, HWP, MP4</li>
            </ul>
          </div>
          <div class="ibk-write-list-upload__form">
            <Toast />
            <FileUpload v-model="props.item.uploadFileList">
              <template #empty>
                <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div v-if="props.item.uploadFileList.length > 0" class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류<strong class="text-primary">{{ props.item.uploadFileList.length }}</strong></div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="(file, index) of props.item.uploadFileList" :key="file.name + file.type + file.size">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <i class="ibk-icon-24-folder"></i>
                <p>{{file.name}}</p>
                <strong>{{Utility.formatSize(file.size)}}</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded @click="fileRemove(null, index)"/>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">증빙서류 제출 시 유의사항</div>
        </div>
        <div class="ibk-dialog-apply-caution">
          <p>1. 유의사항</p>
          <p>2. 유의사항</p>
          <p>3. 유의사항</p>
        </div>
      </div>
    </div>
  </TabPanel>
  <WelfareFeeDialog v-if="welfareFeeDialogParams.visible" v-model:visible="welfareFeeDialogParams.visible" modal/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { IdiLicenseHistoryInVo } from '~/api-client';
import Utility from '~/lib/Utility';
import { useAuthStore } from '~/domains/auth';
import { useSkillStore } from '~/domains/skill/store';
import type { ExamCostApplyOptions, WelfareFeeDialogOptions } from '~/domains/skill/type';
const route = useRoute();
const authStore = useAuthStore();
const skillStore = useSkillStore();
const isSearched = ref<boolean>(false);
const selectedLicense = computed(() => {
  return skillStore.licenseHistoryData.contents.filter(x => x.qlcrDsncVl == props.item.qlcrDsncVl).map(y => y.qlcrNm);
});
const props = withDefaults(
	defineProps<{
    item: ExamCostApplyOptions | null,
	}>(),
	{
    item: null,
  }
);

const searchParam = reactive<IdiLicenseHistoryInVo>({
  qlcrNm: ''
});

const welfareFeeDialogParams = reactive<WelfareFeeDialogOptions>({
  visible: false,
  item: {},
});

const selectedDate = ref('');

const searchWelfareFee = async () => {
  await skillStore.fetchWelfareFeeList({emplNo : authStore.userInfo.emplNo});
  welfareFeeDialogParams.visible = true;
}

watch(selectedDate, (newDates) => {
  props.item.crdAthzYmd = formatDate(newDates);
});

const getLicenses = async () => {
  isSearched.value = true;
  await skillStore.fetchIdiLicenseHistoryList(searchParam);
}

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

watch(() => props.item.qlcrDsncVl, () => {
  props.item.qlcrNm = skillStore.licenseHistoryData.contents.filter(x => props.item.qlcrDsncVl === x.qlcrDsncVl).map(x => x.qlcrNm)[0];
  props.item.qlacYmd = skillStore.licenseHistoryData.contents.filter(x => props.item.qlcrDsncVl === x.qlcrDsncVl).map(x => x.acqtYmd)[0];
})

onMounted(async () => {
  if(props.item.qlcrDsncVl){
    await getLicenses();
  }
  selectedDate.value = props.item.crdAthzYmd ? new Date(props.item.crdAthzYmd) : '';
})

</script>
