<template>
  <div class="ibk-background"></div>

  <ConfirmDialog></ConfirmDialog>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-file">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
      </div>
      <div class="ibk-dialog-file__title">자료실</div>
    </template>

    <div class="ibk-dialog-file__text">
      <strong>학습 자료 다운로드</strong>
      <p>기업구조조정의 이해 및 활용</p>
    </div>
    <div class="ibk-dialog-file-list">
      <ul>
        <li v-for="i of 40">
          <NuxtLink to="/" class="ibk-dialog-file-list__text">
            <i class="ibk-icon-24-download"></i>
            <p>구조조정펀드 사례 분석 참고자료.pdf</p>
            <strong>1.0MB</strong>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <template #footer>
      <div class="ibk-dialog-file__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal01 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-apply">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
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
                <tr>
                  <th>신청자 정보</th>
                  <td colspan="3">본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                  <td>2028.01.27 - 2028.02.14</td>
                  <th>신청일</th>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                  <td colspan="3">
                    구성원 개개인의 업무수행 커뮤니케이션 능력을 통해, 단순화된 조직의 성과를 극대화할 수 있다. 비즈니스
                    커뮤니케이션의 정확한 개념과 업무 수행과의 연관성을 이해한다. 업무 수행 과정에서 발생되는 분야별
                    커뮤니케이션 기능의 핵심 내용을 학습한다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mo">
            <table>
              <tbody>
                <tr>
                  <th>신청자 정보</th>
                </tr>
                <tr>
                  <td>본부・ 인재개발 ・ 김인재</td>
                </tr>
                <tr>
                  <th>연수기간</th>
                </tr>
                <tr>
                  <td>2028.01.27 - 2028.02.14</td>
                </tr>
                <tr>
                  <th>신청일</th>
                </tr>
                <tr>
                  <td>2028.01.27・10:00 - 11:00</td>
                </tr>
                <tr>
                  <th>학습내용</th>
                </tr>
                <tr>
                  <td>
                    구성원 개개인의 업무수행 커뮤니케이션 능력을 통해, 단순화된 조직의 성과를 극대화할 수 있다. 비즈니스
                    커뮤니케이션의 정확한 개념과 업무 수행과의 연관성을 이해한다. 업무 수행 과정에서 발생되는 분야별
                    커뮤니케이션 기능의 핵심 내용을 학습한다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item ibk-dialog-apply-item--line">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">도서 배송 주소</div>
        </div>
        <div class="ibk-dialog-apply-address">
          <div class="grid">
            <div class="col-12">
              <div class="ibk-dialog-apply-address__radio">
                <div class="flex align-items-center">
                  <RadioButton v-model="radioAddress" inputId="radioAddress1" value="radioAddress1" />
                  <label for="radioAddress1" class="ml-2">기본주소</label>
                </div>
                <div class="flex align-items-center">
                  <RadioButton v-model="radioAddress" inputId="radioAddress2" value="radioAddress2" />
                  <label for="radioAddress2" class="ml-2">이전배송주소</label>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>배송지</label>
                <div class="ibk-dialog-apply-address__input">
                  <div>
                    <InputText type="text" size="large" class="w-full" />
                    <Button label="우편번호 찾기" severity="secondary" outlined size="large" />
                  </div>
                  <div>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                  <div>
                    <InputText type="text" size="large" class="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-6 col-12">
              <div class="field">
                <label>회사전화</label>
                <div>
                  <InputText type="text" size="large" placeholder="회사 전화번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="lg:col-6 col-12">
              <div class="field">
                <label>휴대폰번호</label>
                <div>
                  <InputText type="text" size="large" placeholder="휴대폰 번호를 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>이메일</label>
                <div>
                  <InputText type="text" size="large" placeholder="이메일을 입력해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">결제정보</div>
          <Button label="최근 결제라인 지정" severity="secondary" outlined />
        </div>
        <div class="ibk-dialog-apply-confirm">
          <div class="grid">
            <div class="col-12">
              <div class="field">
                <label>1차 결재</label>
                <div class="ibk-dialog-apply-confirm-list__input">
                  <InputText type="text" size="large" placeholder="결재자를 선택해주세요." class="w-full" />
                  <div class="ibk-dialog-apply-confirm-list__text">서무</div>
                  <Button label="검색" size="large" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>2차 결재</label>
                <div class="ibk-dialog-apply-confirm-list__input">
                  <InputText type="text" size="large" placeholder="결재자를 선택해주세요." class="w-full" />
                  <div class="ibk-dialog-apply-confirm-list__text">팀장</div>
                  <Button label="검색" size="large" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>3차 결재</label>
                <div class="ibk-dialog-apply-confirm-list__input">
                  <InputText type="text" size="large" placeholder="결재자를 선택해주세요." class="w-full" />
                  <div class="ibk-dialog-apply-confirm-list__text">본부장</div>
                  <Button label="검색" size="large" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="field">
                <label>의견</label>
                <div>
                  <InputText type="text" size="large" placeholder="의견을 작성해주세요." class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">파일 업로드하기</div>
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
            <FileUpload
              name="demo[]"
              url="/api/upload"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <span>파일을 여기로 drag and drop해서 업로드 해주세요.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div class="ibk-dialog-apply-item">
        <div class="ibk-dialog-apply-item-head">
          <div class="ibk-dialog-apply-item-head__title">첨부파일<strong class="text-primary">2</strong></div>
        </div>
        <div class="ibk-write-list-file">
          <ul>
            <li v-for="i of 2">
              <NuxtLink to="/" class="ibk-write-list-file__text">
                <!-- <i class="ibk-icon-24-folder"></i> -->
                <p>온상 잉글리쉬 과제 참고자료.pdf</p>
                <strong>1.0MB</strong>
              </NuxtLink>
              <div class="ibk-write-list-file__delete">
                <Button icon="ibk-icon-24-close" link rounded />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="ibk-dialog-apply-button">
        <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal02 = false" />
        <Button label="다음" severity="primary" size="large" class="w-full" @click="modal02 = false" />
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-preview">
    <template #container>
      <div class="ibk-dialog-preview-head">
        <div class="ibk-dialog-preview-head__title">IBK 회계의 이해</div>
        <div class="ibk-dialog-preview-head__close">
          <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined @click="modal03 = false" />
        </div>
      </div>
      <div class="ibk-dialog-preview-contents">
        <div class="ibk-dialog-preview-movie">
          <video controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="ibk-dialog-preview-info">
          <div class="ibk-dialog-preview-info-head">
            <div class="ibk-dialog-preview-info-head__badge">
              <Badge style="background: #e4f2ff; color: #2873e3"><i class="ibk-icon-12-play mr-1"></i> VOD</Badge>
            </div>
            <div class="ibk-dialog-preview-info-head__view">
              <i class="ibk-icon-24-view"></i>
              355
            </div>
          </div>
          <div class="ibk-dialog-preview-info__title">
            <p>1. 사이버 기업회계</p>
            Chapter. 1-1. 기업회계 기초 | 2022.10.27.목 - 2022.10.30.일 | 2022.10.30 23:59까지
          </div>
        </div>
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="modal04" modal class="ibk-dialog ibk-dialog-target">
    <template #header>
      <div class="ibk-dialog-back">
        <Button icon="ibk-icon-24-back-black" text @click="modal04 = false" />
      </div>
      <div class="ibk-dialog-target__title">결재 대상자 검색</div>
    </template>

    <div class="ibk-dialog-target-list">
      <div class="grid">
        <div class="col-12">
          <div class="field">
            <label>아이디 검색</label>
            <div class="ibk-dialog-target-list__search">
              <InputText type="text" class="w-full" placeholder="검색어를 입력해주세요." size="large" />
              <Button label="검색" severity="primary" size="large" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="field">
            <label>검색결과</label>

            <div class="pc">
              <div class="ibk-dialog-target-list__table">
                <table>
                  <colgroup>
                    <col style="width: 80px" />
                    <col style="width: 240px" />
                    <col style="width: 240px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">선택</th>
                    <th>성명</th>
                    <th>닉네임</th>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, index) in rows"
                      :key="index"
                      :class="{ active: selectedValue === row.value }"
                      @click="selectRow(row.value)"
                    >
                      <td class="text-center">
                        <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                      </td>
                      <td>
                        <strong>{{ row.name }}</strong>
                      </td>
                      <td>{{ row.nickname }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mo">
              <div class="ibk-dialog-target-list__list">
                <ul>
                  <li
                    v-for="(row, index) in rows"
                    :key="index"
                    :class="{ active: selectedValue === row.value }"
                    @click="selectRow(row.value)"
                  >
                    <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                    <table>
                      <tbody>
                        <tr>
                          <th>성명</th>
                          <td>{{ row.name }}</td>
                        </tr>
                        <tr>
                          <th>닉네임</th>
                          <td>{{ row.nickname }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li
                    v-for="(row, index) in rows"
                    :key="index"
                    :class="{ active: selectedValue === row.value }"
                    @click="selectRow(row.value)"
                  >
                    <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                    <table>
                      <tbody>
                        <tr>
                          <th>성명</th>
                          <td>{{ row.name }}</td>
                        </tr>
                        <tr>
                          <th>닉네임</th>
                          <td>{{ row.nickname }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="ibk-dialog-target-none">검색결과가 없습니다.</div> -->
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="ibk-dialog-target__button">
        <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal04 = false" />
        <Button label="등록" severity="primary" size="large" class="w-full" @click="modal04 = false" />
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="confirm1()" label="연수 신청 완료"></Button><br /><br />
    <Button @click="confirm2()" label="수강신청 확인"></Button><br /><br />
    <Button @click="confirm3()" label="다운로드 완료"></Button><br /><br />

    <Button @click="modal01 = true" label="자료실"></Button><br /><br />
    <Button @click="modal02 = true" label="연수 신청하기"></Button><br /><br />
    <Button @click="modal03 = true" label="미리보기"></Button><br /><br />
    <Button @click="modal04 = true" label="결재 대상자 검색"></Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);
const modal04 = ref(false);
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: '연수 신청이 완료되었습니다.',
    rejectProps: {
      label: '닫기',
      severity: 'link',
      size: 'large',
    },
    acceptProps: {
      label: '신청내역 확인',
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

const radioAddress = ref('');
const checkConfirm = ref('');

// 테이블 행 데이터
const rows = ref([
  {
    value: 1,
    name: '이인재',
    nickname: '기업은행 124',
  },
  {
    value: 2,
    name: '김기은',
    nickname: '기업은행 124',
  },
  {
    value: 3,
    name: '박은행',
    nickname: '기업은행 124',
  },
  {
    value: 4,
    name: '이기업',
    nickname: '기업은행 124',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref
const selectedValue = ref(null);

// td 클릭 시 해당 행의 라디오 버튼을 선택하는 함수
const selectRow = (value) => {
  selectedValue.value = value;
};
</script>
