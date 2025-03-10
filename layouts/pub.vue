<template>
  <div class="ibk">
    <div class="ibk-banner">
      <div class="pc">
        <img src="https://picsum.photos/1920/56" alt="" />
      </div>
      <div class="mo">
        <img src="https://picsum.photos/1984/80" alt="" />
      </div>
      <div class="ibk-inner">
        <Button icon="ibk-icon-16-banner-close" link />
      </div>
    </div>
    <header class="ibk-header">
      <div class="ibk-inner">
        <div class="ibk-header-head">
          <div class="ibk-header-head__start">
            <NuxtLink to="/pub" class="ibk-header-head-logo"><img src="../assets/images/logo.png" alt="" /></NuxtLink>
            <div class="ibk-header-head-search">
              <IconField @click="menuSearchToggle">
                <InputIcon class="ibk-icon-16-search" />
                <InputText placeholder="검색어를 입력하세요." />
              </IconField>
            </div>
            <Menu ref="menuSearch" :popup="true" class="ibk-header-head-search-layer">
              <template #start>
                <div class="ibk-header-head-search-layer__title">최근 검색어</div>
              </template>
              <template #end>
                <!-- <div class="ibk-header-head-search-layer-list">
                  <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
                    <p>최근 검색어 노출</p>
                  </NuxtLink>
                  <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
                    <p>최근 검색어 노출</p>
                  </NuxtLink>
                  <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
                    <p>신입사원 연수신입사원 연수신입사원 연수신입사원 연수신입사원 연수신입사원 연수</p>
                  </NuxtLink>
                  <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
                    <p>ㄱㄴㄷ</p>
                  </NuxtLink>
                  <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
                    <p>ㄱㄴㄷ</p>
                  </NuxtLink>
                </div> -->
                <div class="ibk-header-head-search-layer__none">
                  <p>최근 검색내역이 없습니다.</p>
                </div>
              </template>
            </Menu>
          </div>
          <div class="ibk-header-head__end">
            <div class="pc">
              <div class="ibk-header-head-alarm ibk-header-head-alarm--new">
                <Button icon="ibk-icon-36-alarm" link rounded @click="menuAlarmToggle" />
              </div>
            </div>
            <div class="pc">
              <Button icon="ibk-icon-24-exit" label="로그아웃" severity="secondary" outlined />
            </div>
            <div class="mo" v-if="mobileMenu === false">
              <Button icon="ibk-icon-32-alarm" text @click="modal01 = true" />
            </div>
            <div class="mo" v-if="mobileMenu === false">
              <Button icon="ibk-icon-32-search" text @click="modal02 = true" />
            </div>
            <div class="mo" v-if="mobileMenu === false">
              <Button icon="ibk-icon-32-menu" text @click="mobileMenu = true" />
            </div>
            <div class="mo" v-if="mobileMenu === true">
              <Button icon="ibk-icon-32-close" text @click="mobileMenu = false" />
            </div>
            <Menu ref="menuAlarm" :popup="true" class="ibk-header-alarm">
              <template #start>
                <div class="ibk-header-alarm-head">
                  <h5>알림</h5>
                  <Button label="전체읽음" text />
                </div>
              </template>
              <template #end>
                <div class="ibk-header-alarm-list">
                  <!-- <div class="ibk-header-alarm-none">알림이 없습니다.</div> -->
                  <NuxtLink to="/" class="ibk-header-alarm-list-item" v-for="i of 5">
                    <div class="ibk-header-alarm-list-item-head">
                      <p>알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀</p>
                      <strong>1분 전</strong>
                    </div>
                    <div class="ibk-header-alarm-list-item-text">
                      알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림
                      내용이 여기에 표시됩니다.
                    </div>
                  </NuxtLink>
                  <div class="ibk-header-alarm-more">
                    <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
                  </div>
                </div>
                <div class="ibk-header-alarm-button">
                  <Button
                    label="닫기 "
                    severity="secondary"
                    outlined
                    class="w-full"
                    size="large"
                    @click="menuAlarmToggle"
                  />
                </div>
              </template>
            </Menu>
          </div>
        </div>
        <div class="ibk-header-gnb">
          <NuxtLink to="/" class="ibk-header-gnb-item">마이페이지</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">연수신청</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">소셜러닝</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">역량개발지원</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">사용시설신청</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">커뮤니티</NuxtLink>
          <NuxtLink to="/" class="ibk-header-gnb-item">학습지원</NuxtLink>
        </div>
      </div>
    </header>
    <div class="ibk-body" v-if="mobileMenu === false">
      <div class="ibk-contents">
        <slot />
      </div>
    </div>

    <div v-if="mobileMenu === true">
      <div class="ibk-menu">
        <div class="ibk-menu-head">
          <div class="ibk-menu-head-inner">
            <h2>
              김기은님
              <strong> <i class="ibk-icon-24-certification"></i>디지털 </strong>
            </h2>
            <div class="ibk-menu-head-badge">
              <Badge value="과장4급" style="background: #fff; color: #616dd6"></Badge>
              <Badge value="여신그룹 · 여신심사부" style="background: #fff; color: #5a5e6c"></Badge>
            </div>
          </div>
        </div>
        <div class="ibk-menu-menu">
          <NuxtLink to="/" class="ibk-menu-menu-item"> 마이페이지 </NuxtLink>
          <NuxtLink to="/" class="ibk-menu-menu-item active"> 연수신청 </NuxtLink>
          <NuxtLink to="/" class="ibk-menu-menu-item"> 소셜러닝 </NuxtLink>
          <NuxtLink to="/" class="ibk-menu-menu-item"> 역량개발지원 </NuxtLink>
          <NuxtLink to="/" class="ibk-menu-menu-item"> 시설사용신청 </NuxtLink>
          <NuxtLink to="/" class="ibk-menu-menu-item"> 커뮤니티 </NuxtLink>
        </div>
        <div class="ibk-menu-logout">
          <Button icon="ibk-icon-24-exit" label="로그아웃" severity="secondary" link />
        </div>
      </div>
    </div>

    <footer class="ibk-footer">
      <div class="ibk-inner">
        <div class="ibk-footer-chat">
          <NuxtLink @click="modal03 = true"><i class="ibk-icon-76-chat"></i></NuxtLink>
        </div>
        <div class="ibk-footer-head">
          <div class="ibk-footer-head__start">
            <div class="ibk-footer-logo">IBK 기업은행</div>
          </div>
          <div class="ibk-footer-head__end">
            <div class="ibk-footer-link">
              <NuxtLink to="" class="ibk-footer-link-item">공지사항</NuxtLink>
              <NuxtLink to="" class="ibk-footer-link-item">자주묻는 질문</NuxtLink>
              <NuxtLink to="" class="ibk-footer-link-item">개인정보처리방침</NuxtLink>
            </div>
          </div>
        </div>
        <div class="ibk-footer-copyright">
          본 사이트의 콘텐츠는 저작권법의 보호를 받는바, 무단등재, 복사,배포 등을 금합니다.<br />
          <address>Copyright. IBK(INDUSTRIAL BANK OF KOREA) All rights reserved.</address>
        </div>
      </div>
    </footer>

    <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-alarm">
      <template #header>
        <div class="ibk-dialog-back">
          <Button icon="ibk-icon-24-back-black" text @click="modal01 = false" />
        </div>
        <div class="ibk-dialog-alarm__title">알림</div>
      </template>

      <div class="ibk-header-alarm-list">
        <!-- <div class="ibk-header-alarm-none">알림이 없습니다.</div> -->
        <NuxtLink to="/" class="ibk-header-alarm-list-item" v-for="i of 5">
          <div class="ibk-header-alarm-list-item-head">
            <p>알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀알림 타이틀</p>
            <strong>1분 전</strong>
          </div>
          <div class="ibk-header-alarm-list-item-text">
            알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림 내용이 여기에 표시됩니다.알림 내용이 여기에
            표시됩니다.
          </div>
        </NuxtLink>
        <div class="ibk-header-alarm-more">
          <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
        </div>
      </div>

      <template #footer>
        <div class="ibk-dialog-alarm__button">
          <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal01 = false" />
        </div>
      </template>
    </Dialog>
    <Dialog v-model:visible="modal02" modal class="ibk-dialog ibk-dialog-searchform">
      <template #header>
        <div class="ibk-dialog-back">
          <Button icon="ibk-icon-24-back-black" text @click="modal02 = false" />
        </div>
        <div class="ibk-dialog-searchform__title">검색</div>
      </template>
      <div class="ibk-header-head-search-layer">
        <div class="ibk-header-head-search-layer-form">
          <IconField @click="menuSearchToggle">
            <InputIcon class="ibk-icon-16-search" />
            <InputText placeholder="검색어를 입력하세요." />
          </IconField>
        </div>
        <div class="ibk-header-head-search-layer__title">최근 검색어</div>
        <div class="ibk-header-head-search-layer-list">
          <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
            <p>최근 검색어 노출</p>
          </NuxtLink>
          <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
            <p>최근 검색어 노출</p>
          </NuxtLink>
          <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
            <p>신입사원 연수신입사원 연수신입사원 연수신입사원 연수신입사원 연수신입사원 연수</p>
          </NuxtLink>
          <NuxtLink to="/" class="ibk-header-head-search-layer-list-item">
            <p>ㄱㄴㄷ</p>
          </NuxtLink>
          <NuxtLink to="/" class="ibk-header-head-search-layer-list-item" v-for="i of 15">
            <p>ㄱㄴㄷ</p>
          </NuxtLink>
        </div>
      </div>
      <!-- <div class="ibk-header-head-search-layer__none">
        <p>최근 검색내역이 없습니다.</p>
      </div> -->
      <template #footer>
        <div class="ibk-dialog-searchform__button">
          <Button label="닫기" severity="secondary" outlined size="large" class="w-full" @click="modal02 = false" />
        </div>
      </template>
    </Dialog>
    <Dialog v-model:visible="modal03" modal class="ibk-dialog ibk-dialog-write">
      <template #header>
        <div class="ibk-dialog-back">
          <Button icon="ibk-icon-24-back-black" text @click="modal03 = false" />
        </div>
        <div class="ibk-dialog-write__title">1:1 문의</div>
      </template>
      <div class="ibk-dialog-write-contents">
        <div class="ibk-write-content">
          <div class="ibk-write-list">
            <div class="ibk-write-list-item">
              <div class="ibk-write-list-item__title"><p>제목</p></div>
              <div class="ibk-write-list-item__input">
                <InputText type="text" size="large" placeholder="제목을 입력해 주세요." class="w-full" />
              </div>
            </div>
            <div class="ibk-write-list-item">
              <div class="ibk-write-list-item__title"><p>내용</p></div>
              <div class="ibk-write-list-item__input">
                <froala :tag="'textarea'" v-model="content" :config="editorConfig"></froala>
              </div>
            </div>
            <div class="ibk-write-list-item">
              <div class="ibk-write-list-item__title"><p>파일 업로드하기</p></div>
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
            <div class="ibk-write-list-item">
              <div class="ibk-write-list-item__title">
                <p>첨부파일 <span class="ml-2 text-primary">2</span></p>
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

          <div class="ibk-write-button">
            <div class="ibk-write-button__check">
              <Checkbox v-model="secretmessage" inputId="secretmessage1" name="secretmessage" value="yes" />
              <label for="secretmessage1" class="ml-2"> 비밀글로 등록하기 </label>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="ibk-dialog-write-button">
          <Button label="닫기" severity="secondary" size="large" outlined class="w-full" @click="modal03 = false" />
          <Button label="등록하기" severity="primary" size="large" class="w-full" @click="modal03 = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuAlarm = ref();
const menuAlarmToggle = (event) => {
  menuAlarm.value.toggle(event);
};

const menuSearch = ref();
const menuSearchToggle = (event) => {
  menuSearch.value.toggle(event);
};

function handleScroll() {
  menuSearch.value?.hide();
  menuAlarm.value?.hide();
}
const topBanner = ref(false);
const mobileMenu = ref(false);
const modal01 = ref(false);
const modal02 = ref(false);
const modal03 = ref(false);

function handleResize() {
  if (window.innerWidth >= 992) {
    mobileMenu.value = false;
    modal01.value = false;
    modal02.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize(); // 초기 화면 크기 확인
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>
