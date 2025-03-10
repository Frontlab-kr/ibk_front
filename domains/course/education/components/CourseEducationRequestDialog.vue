<template>
  <div class="ibk-background"></div>
  <ConfirmDialog></ConfirmDialog>

  <Dialog v-model:visible="visible" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="visible = false" />
      </div>
      <div class="ibk-dialog-apply__title">연수 신청하기</div>
    </template>
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
                <!--!! 아래 mobile 부분도 수정할것. -->
                <tr>
                  <th>신청자 정보</th>

                  <td colspan="3">{{ userInfo.blngHdqrDsncNm }}・{{ userInfo.deptDsncNm }}・{{ userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                  <td>{{ formatDateRange(selectedCourseDegree?.lrngSttgTs, selectedCourseDegree?.lrngFnshTs) }}</td>
                  <th>신청일</th>
                  <td>{{ currentDate }}</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                  <td colspan="3">{{ courseInfo.dutyEdctObjtCon }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <!--!! 위 pc 부분도 수정할것. -->
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>{{ userInfo.blngHdqrDsncNm }}・{{ userInfo.deptDsncNm }}・{{ userInfo.userNm }}</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                </tr>
                <tr>
                  <td>{{ courseInfo.startDate }} - {{ courseInfo.endDate }}</td>
                </tr>
                <tr>
                  <th>신청일</th>
                </tr>
                <tr>
                  <td>{{ currentDate }}</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                </tr>
                <tr>
                  <td>{{ courseInfo.dutyEdctObjtCon }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line" v-if="courseInfo.dlplUseYn == 'Y'">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">도서 배송 주소</div>
        </div>
        <div class="ibk-dialog-apply-address">
          <div class="grid">
            <div class="col-12">
              <div class="ibk-dialog-apply-address__radio">
                <div class="flex items-center">
                  <RadioButton v-model="addressType" inputId="radioAddress1" value="default" @change="addressTypeChange" />
                  <label for="radioAddress1" class="ml-2">기본주소</label>
                </div>
                <div class="flex items-center">
                  <RadioButton v-model="addressType" inputId="radioAddress2" value="previous" @change="addressTypeChange" />
                  <label for="radioAddress2" class="ml-2">이전배송주소</label>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>배송지</label>
                <div class="ibk-dialog-apply-address__input">
                  <div>
                    <InputText v-model="requestCourse.dlplPssrNo" type="text" size="large" class="w-full"
                      :disabled="true" />
                    <Button label="우편번호 찾기" severity="secondary" outlined size="large" @click="findZipCode" />
                  </div>
                  <div>
                    <InputText v-model="requestCourse.dlplBscAdr" type="text" size="large" class="w-full"
                      :disabled="true" />
                  </div>
                  <div>
                    <InputText v-model="requestCourse.dlplDtlAdr" type="text" size="large" class="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-6 col-12">
              <div class="field">
                <label>회사전화</label>
                <div>
                  <InputText v-model="requestCourse.cmpnTpn" type="text" size="large"
                    placeholder="회사 전화번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="lg:col-6 col-12">
              <div class="field">
                <label>휴대폰번호</label>
                <div>
                  <InputText v-model="requestCourse.cpn" type="text" size="large" placeholder="휴대폰 번호를 입력해주세요."
                    class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>이메일</label>
                <div>
                  <InputText v-model="requestCourse.ead" type="text" size="large" placeholder="이메일을 입력해주세요."
                    class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item" v-if="courseInfo.deptSnctUseYn == 'Y'">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결재정보</div>
          <!-- 기능없어서 일단 뺌. -->
          <Button label="최근 결재라인 지정" severity="secondary" outlined @click="setRecentPaymentLine" v-if="false" />
        </div>
        <div class="ibk-dialog-apply-confirm">
          <div class="grid">
            <div class="col-12">
              <div class="ibk-dialog-apply-confirm-list">
                <ul>
                  <li v-for="(approver, index) in approvers" :key="index">
                    <div class="ibk-dialog-apply-confirm-list__check">

                      <label :for="`checkConfirm${index}`" class="ml-3" style="display:flex;align-items:center;"> {{
                        index + 1 }}차결재 <p v-if="approver.mndrYn == 'Y'" style="color:red;padding-left:8px;">*필수</p>
                      </label>
                    </div>
                    <div class="ibk-dialog-apply-confirm-list__input">
                      <InputText v-model="approver.snctUserNm" type="text" size="large" placeholder="결제자를 선택해주세요."
                        :disabled="true" class="w-full" />
                      <Button :label="approverSnpnDcd(approver.snpnDcd)" outlined size="large" :disabled="true" />
                      <Button label="검색" severity="secondary" outlined size="large" @click="onSearchUser(approver)" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>의견</label>
                <div>
                  <InputText v-model="requestCourse.aplcRsnCon" type="text" size="large" placeholder="의견을 작성해주세요."
                    class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ibk-dialog-apply-item" v-if="courseInfo.deptSnctUseYn == 'Y'">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">
            첨부파일<strong class="text-primary">{{ attachments.length }}</strong>
          </div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="(file, index) in attachments" :key="index">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <i class="ibk-icon-24-folder"></i>
                <p>{{ file.name }}</p>
                <strong>{{ file.size }}</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded @click="removeAttachment(index)" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ibk-dialog-apply-item" v-if="courseInfo.deptSnctUseYn == 'Y'">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">
            파일 업로드하기
          </div>
        </div>
        <div>
          <FileUploadFormWithDropdown v-model="attachments" @select="onSelectedFiles" :key="redrawIndex" />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="closeDialog" />
        <Button label="신청하기" severity="primary" size="large" class="w-full" @click="submitApplication" />
      </div>
    </template>
  </Dialog>

  <div v-if="false"
    style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm2()" label="수강신청 확인"></Button><br /><br />
    <Button @click="confirm3()" label="다운로드 완료"></Button><br /><br />

    <Button @click="modal01 = true" label="자료실"></Button><br /><br />
    <Button @click="visible = true" label="연수 신청하기"></Button><br /><br />
    <Button @click="modal03 = true" label="미리보기"></Button>
  </div>
  <AuthMemberUserDialog v-if="visibleAuthMemberUserDialog" v-model:visible="visibleAuthMemberUserDialog"
    @selectUser="selectApprover" />
  <AddressSearchDialog v-if="visibleAddressSearchDialog" v-model:visible="visibleAddressSearchDialog"
    @selectAddress="selectAddress" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import type { AddressOutVo, ApprovalLinListlnVo, CourseApplicationInVo, CourseDegreeOutVo, MasterCourseListOutVo, UserOutVo } from '../../../../api-client';
import { useEducationStore } from '../store';
import { useAuthStore } from '../../../auth';
import Utility from '../../../../lib/Utility';
import { useMyLearnStore } from '../../../myLearn/store';
import { de } from 'date-fns/locale';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});
const { visible, selectedCourseDegree } = defineModels<{
  visible: boolean;
  selectedCourseDegree: CourseDegreeOutVo;
}>();
const redrawIndex = ref(0);
const modal01 = ref(false);
const modal03 = ref(false);
const visibleAuthMemberUserDialog = ref(false);
const confirm = useConfirm();
const authStore = useAuthStore();
const visibleAddressSearchDialog = ref(false);


const confirm2 = () => {
  confirm.require({
    message: '수강신청이 완료되었습니다.',
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

const confirm3 = () => {
  confirm.require({
    message: '학습자료가 다운로드 되었습니다.',
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

const educationStore = useEducationStore();

const route = useRoute();

const userInfo = computed<UserOutVo>(() => authStore.userInfo);
const courseInfo = computed<MasterCourseListOutVo>(() => educationStore.detail);

const dutyEdctCd = ref<string>((route.query as CourseDegreeOutVo).dutyEdctCd as string);
const edctDsprNo = ref<number>(Number((route.query as CourseDegreeOutVo).edctDsprNo));

const requestCourse = reactive<
  CourseApplicationInVo & {
    companyPhone?: string;
    mobilePhone?: string;
    email?: string;
  }
>({
  dutyEdctCd: dutyEdctCd.value,
  edctDsprNo: edctDsprNo.value,
  userId: userInfo.value.userId,
  userNm: userInfo.value.userNm,
  deptDsncVl: userInfo.value.deptDsncVl,
  deptDsncNm: userInfo.value.deptDsncNm,
  rsptDsncVl: userInfo.value.rsptDsncVl,
  rsptDsncNm: userInfo.value.rsptDsncNm,
  jbttDsncVl: userInfo.value.jbttDsncVl,
  jbttDsncNm: userInfo.value.jbttDsncNm,
  atlcDfnnScd: '',
  atlcAplcTs: new Date().toISOString(),
  tomaYn: 'N',
  atlcMdcnDcd: '',
  edctAbncTcd: '',
  rmrkCon: '',
  useYn: 'Y',
  // Additional fields
  dlplPssrNo: '',
  dlplBscAdr: '',
  dlplDtlAdr: '',
  companyPhone: '',
  mobilePhone: '',
  email: '',
  aplcRsnCon: '',
});

const addressType = ref('default');

const addressTypeChange = () => {
  if(addressType.value == 'previous'){
    //이전 배송 주소를 가져 와야 한다.
    educationStore.getPreviousAddress().then(v=>{
      if(v){
        requestCourse.dlplPssrNo = v.dlplPssrNo ?? '';
        requestCourse.dlplBscAdr = v.dlplBscAdr ?? '';
        requestCourse.dlplDtlAdr = v.dlplDtlAdr ?? '';
        requestCourse.cpn = v.cpn ?? '';
        requestCourse.ead = v.ead ?? '';
        requestCourse.cmpnTpn = v.cmpnTpn ?? '';
      }
    });
  }else{
      requestCourse.dlplPssrNo = '';
      requestCourse.dlplBscAdr = '';
      requestCourse.dlplDtlAdr = '';
      requestCourse.cpn = '';
      requestCourse.ead = '';
      requestCourse.cmpnTpn = '';
  }
}

const attachments = ref<File[]>([]);

const currentDate = computed(() => {
  return new Date().toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
});
const approverCommonCode = Utility.getCommonCode('COM00024');
const approverSnpnDcd = (snpnDcd: string) => {
  return approverCommonCode.find((a) => a.cmcdVl == snpnDcd)?.cmcdVlNm
}

const onFileRemove = (item: any, index: number) => {
  // console.log(item, index);

  attachments.value.splice(index, 1);
};

const findZipCode = () => {
  visibleAddressSearchDialog.value = true;
};

const setRecentPaymentLine = () => {
  // Implement recent payment line setting
};
const currentApprover = ref<ApprovalLinListlnVo>();
function onSearchUser(approver: ApprovalLinListlnVo) {
  currentApprover.value = approver;
  visibleAuthMemberUserDialog.value = true;
}
const selectApprover = (userId: string, userNm: string, emplNo: string) => {

  currentApprover.value!.snctUserId = userId;
  // @ts-ignore
  currentApprover.value!.snctUserNm = userNm;
  // @ts-ignore
  currentApprover.value!.snctEmplNo = emplNo;

};
const selectAddress = (address: AddressOutVo) => {
  requestCourse.dlplPssrNo = address.zpcd;
  requestCourse.dlplBscAdr = Utility.getBaseAddress(address);
  requestCourse.dlplDtlAdr = "";
};

const onSelectedFiles = (event: any) => {
  // console.log('onSelectedFiles', event);
  // redrawIndex.value++;
};
const removeAttachment = (index: number) => {
  attachments.value.splice(index, 1);
};

async function validate() {
  if (courseInfo.value.dlplUseYn == 'Y') {
    if ($isEmpty(requestCourse.dlplBscAdr)) {
      await $alert('주소를 입력해주세요.');
      return false;
    }
    if ($isEmpty(requestCourse.dlplPssrNo)) {
      await $alert('우편번호를 입력해주세요.');
      return false;
    }
    if ($isEmpty(requestCourse.dlplDtlAdr)) {
      await $alert('상세주소를 입력해주세요.');
      return false;
    }
    if ($isEmpty(requestCourse.cmpnTpn)) {
      await $alert('회사 전화번호를 입력해주세요.');
      return false;
    }
    if ($isEmpty(requestCourse.cpn)) {
      await $alert('휴대폰 번호를 입력해주세요.');
      return false;
    }
    if ($isEmpty(requestCourse.ead)) {
      await $alert('이메일을 입력해주세요.');
      return false;
    }




  }
  if (courseInfo.value.deptSnctUseYn == 'Y') {
    if (approvers.value.some((a) => (a as any).mndrYn == 'Y' && $isEmpty(a.snctUserId))) {
      await $alert('결재자를 선택해주세요.');
      return false;
    }
  }

  return true;
}
const router = useRouter();
const approvers = ref<ApprovalLinListlnVo[]>([]);
const submitApplication = async () => {
  try {

    if ((await validate()) == false) {
      return;
    }
    const finalRequest: CourseApplicationInVo = {
      ...requestCourse,
      approvalLinList: approvers.value.filter((a) => a.snctUserId),
    };

    await educationStore.requestCourse(finalRequest, attachments.value);
    const isOk = await $confirm({
      message: '연수 신청이 완료되었습니다.',
      leftButtonLabel: '닫기',
      rightButtonLabel: '신청내역 확인',
    });

    closeDialog();

    if (isOk == true) {
      router.push('/myLearn');
    }


  } catch (error) {
    console.error('Course application failed:', error);
    // Handle error (show error message to user)
  }
};

const closeDialog = () => {
  visible.value = false;
};
if (courseInfo.value.deptSnctUseYn == 'Y') {
  educationStore.getApprovalLineList({
    dutyEdctCd: dutyEdctCd.value,
  }).then(v => {
    approvers.value = educationStore.approvalLineList;
  });
}
onMounted(async ()=>{

})
</script>
