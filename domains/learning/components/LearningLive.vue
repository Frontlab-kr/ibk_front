<template>
  <div class="ibk-background">
    <div class="ibk-lectureroom-lecture">
      <div class="ibk-inner">
        <div class="mo">
          <div class="ibk-lectureroom-lecture-live">
            <img src="../../../assets/images/livezoom.png" alt="" />
            <div class="ibk-lectureroom-lecture-live__button">
              <Button label="비대면 연수 참여" size="large" @click="visibleNoticeDialog = true" />
            </div>
          </div>
        </div>
        <div class="pc">
          <div class="ibk-lectureroom-lecture-contents">
            <div class="ibk-lectureroom-lecture-contents-title">연수생 유의사항</div>
            <div class="ibk-dialog-note-contents">
              <div class="ibk-dialog-note-preview">
                <h3>1. 비디오 미리보기</h3>
                <div class="ibk-dialog-note-preview__video">
                  <img src="../../../assets/images/livezoom6.png" alt="" />
                </div>
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
                <img src="../../../assets/images/livezoom5.png" alt="" />
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
                  <!-- pc -->
                  <Button label="비대면 연수 참여하기" size="large" class="w-full" @click="enterLiveZoom"></Button>
                  <p>모두 확인하셨다면 참여하기 버튼을 눌러주세요!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ibk-lectureroom-lecture-info">
          <div class="ibk-lectureroom-lecture-info-contents">
            <div class="flex align-items-center">
              <div class="pc">
                <div class="ibk-lectureroom-lecture-info__number">
                  회의실번호
                  <strong>{{ learningStore.currentLesson?.conePlacNm }}</strong>
                </div>
              </div>
              <div class="ibk-lectureroom-lecture-info-item">
                <TitleBar/> 
              </div>
            </div>
            <!-- 기능 없음 -->
            <div class="ibk-lectureroom-lecture-info__view" v-if="false">
              <i class="ibk-icon-24-view"></i>
              2574
            </div>
          </div>
          <div class="mo">
            <div class="ibk-lectureroom-lecture-info__number">
              회의실번호
              <strong>{{ learningStore.currentLesson?.conePlacNm }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="visibleNoticeDialog" modal class="ibk-dialog ibk-dialog-note">
    <template #container>
      <div class="ibk-dialog-note-head">
        <div class="ibk-dialog-note-head__title">연수생 유의사항</div>
        <div class="ibk-dialog-note-head__close">
          <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined
            @click="visibleNoticeDialog = false" />
        </div>
        <div class="ibk-dialog-back">
          <Button icon="ibk-icon-24-back-black" text @click="visibleNoticeDialog = false" />
        </div>
      </div>
      <div class="ibk-dialog-note-contents">
        <div class="ibk-dialog-note-preview">
          <h3>1. 비디오 미리보기</h3>
          <div class="ibk-dialog-note-preview__video">
            <img src="../../../assets/images/livezoom6.png" alt="" />
          </div>
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
            <!-- mobile  -->
            <Button label="비대면 연수 참여하기" size="large" class="w-full" @click="enterLiveZoom"></Button>
            <p>모두 확인하셨다면 참여하기 버튼을 눌러주세요!</p>
          </div>
        </div>
      </div>
    </template>
  </Dialog>


</template>

<script setup lang="ts">
import { useLearningStore } from '../store';


const compLearning = useCompLearning()
const visibleNoticeDialog = ref(false);
const checkbox = ref();
const learningStore = useLearningStore()
async function enterLiveZoom() {
  const zoomUrl = learningStore.currentLesson?.cctnUrlAdr;
  if ($isEmpty(zoomUrl)) {
    alert('줌 링크가 없습니다.')
    return;
  }
  window.open(zoomUrl, '_blank')
}

onMounted(() => {

  compLearning.onLessonMounted();
})
</script>
