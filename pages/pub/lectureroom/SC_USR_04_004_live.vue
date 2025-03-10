<template>
  <div class="ibk-background">
    <div class="ibk-lectureroom-lecture">
      <div class="ibk-inner">
        <div class="ibk-lectureroom-lecture-live">
          <img src="../../../assets/images/livezoom.png" alt="" />
          <div class="ibk-lectureroom-lecture-live__button">
            <Button label="비대면 연수 참여" size="large" />
          </div>
        </div>
        <div class="ibk-lectureroom-lecture-info">
          <div class="ibk-lectureroom-lecture-info-contents">
            <div class="flex align-items-center">
              <div class="pc">
                <div class="ibk-lectureroom-lecture-info__number">
                  회의실번호
                  <strong>1134</strong>
                </div>
              </div>
              <div class="ibk-lectureroom-lecture-info-item">
                <div class="ibk-lectureroom-lecture-info__title">
                  <p>1. 사이버 기업회계</p>
                  <div class="ibk-lectureroom-lecture-info__badge">
                    <Badge style="background: #7151ff; color: #fff"
                      ><i class="ibk-icon-12-play-white mr-1"></i> LIVE</Badge
                    >
                  </div>
                </div>
                <div class="ibk-lectureroom-lecture-info__text">
                  <div>
                    Chapter. 1-1. 기업회계 기초
                    <hr />
                  </div>
                  <div>
                    2022.10.27.목 - 2022.10.30.일
                    <hr />
                    2022.10.30 23:59까지
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-lectureroom-lecture-info__view">
              <i class="ibk-icon-24-view"></i>
              2574
            </div>
          </div>
          <div class="mo">
            <div class="ibk-lectureroom-lecture-info__number">
              회의실번호
              <strong>1134</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="modal01" modal class="ibk-dialog ibk-dialog-note">
    <template #container>
      <div class="ibk-dialog-note-head">
        <div class="ibk-dialog-note-head__title">연수생 유의사항</div>
        <div class="ibk-dialog-note-head__close">
          <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined @click="modal01 = false" />
        </div>
      </div>
      <div class="ibk-dialog-note-contents">
        <div class="ibk-dialog-note-preview">
          <h3>1. 비디오 미리보기</h3>
          <div class="ibk-dialog-note-preview__video"></div>
          <div class="ibk-dialog-note-preview__checkbox">
            <Checkbox v-model="checkbox" inputId="checkbox1" name="checkbox" value="checkbox" />
            <label for="checkbox1" class="ml-2">
              비디오 회의에서 참가할 때 항상 미리보기 대화 상자를 표시합니다.
            </label>
          </div>
          <div class="ibk-dialog-note-preview__button">
            <Button label="비디오를 사용하여 참가하기" size="large" severity="primary" class="tonal"></Button>
            <Button label="비디오를 사용하지 않고 참가하기" size="large" outlined severity="secondary"></Button>
          </div>
          <div class="ibk-dialog-note-preview__text">
            화면에 전체 얼굴이 나와야 합니다.<br />
            카메라 각도를 잘 맞추고 수업 종료까지 유지해 주세요.
          </div>
        </div>
        <div class="ibk-dialog-note-image">
          <h3>2. 설정</h3>
          <img src="../../../assets/images/livezoom3.png" alt="" />
        </div>
        <div class="ibk-dialog-note-caution">
          <h3>3. 참여 중 주의 사항</h3>
          <div class="ibk-dialog-note-caution__text">
            <img src="../../../assets/images/livezoom4.png" alt="" />
            <ul>
              <li>미팅 중에는 다른 작업을 최소화 해주세요</li>
              <li>소음이 발생하지 않도록 주의해 주세요</li>
              <li>카메라를 켜고 참여해 주세요</li>
            </ul>
            <p>
              유의 사항 및 주의사항을 모두 확인하시고<br />
              다대면 연수에 참여해 주세요
            </p>
          </div>
          <div class="ibk-dialog-note-caution__button">
            <Button label="비대면 연수 참여하기" size="large" class="w-full"></Button>
          </div>
        </div>
      </div>
    </template>
  </Dialog>

  <div style="position: fixed; right: 0; bottom: 0; padding: 20px; background: rgba(0, 0, 0, 0.5); z-index: 100">
    <Button @click="modal01 = true" label="SC_USR_04_013_라이브_연수생 popup"></Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pubtest',
});
useHead({
  htmlAttrs: {
    class: 'mobile-footer-hide mobile-menu-fixed',
  },
});
import { onMounted, inject, ref } from 'vue';

const modal01 = ref(false);
const checkbox = ref();

// 레이아웃에서 제공한 `setIbkMenu` 함수를 inject
const setIbkMenu = inject('setIbkMenu');

// 현재 화면 크기를 저장할 ref
const screenWidth = ref(window.innerWidth);

// 화면 크기에 따라 `ibkMenu` 상태를 변경하는 함수
const updateMenuState = () => {
  if (setIbkMenu) {
    if (screenWidth.value <= 992) {
      setIbkMenu(true); // 화면 크기가 992px 이하일 때 `ibkMenu`를 true로 설정
    } else {
      setIbkMenu(false); // 화면 크기가 992px 초과일 때 `ibkMenu`를 false로 설정
    }
  }
};

// `onMounted` 훅에서 페이지 로드 시 상태를 설정
onMounted(() => {
  updateMenuState();
  // 화면 크기 변경에 따른 상태 업데이트
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
});

// `onUnmounted` 훅에서 `resize` 이벤트 리스너 제거
import { onUnmounted } from 'vue';

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
    updateMenuState();
  });
});
</script>
