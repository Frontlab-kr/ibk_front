<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined />
        </div>
      </div>
      <div class="ibk-board-inner">
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <!-- <div class="ibk-board-detail-head__badge">
                <Badge value="공지" style="background: #f2f2f2; color: #5a5e6c"></Badge>
              </div>
              <i class="ibk-icon-24-lock"></i> -->
              <p>스마트러닝 APP 설치방법 안내</p>
            </div>
            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>관리자</li>
                  <li>2023.12.13 12:25</li>
                </ul>
              </div>
              <div class="ibk-board-detail-head__button">
                <Button label="삭제" severity="secondary" outlined class="text-red-500" />
                <Button label="수정" severity="secondary" />
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents">
            <p>
              <strong>안녕하세요, IBK 사이버 연수원 이용자 여러분.</strong><br />
              다음 안내를 따라, 스마트폰에 스마트러닝 APP 설치를 부탁드립니다. 
            </p>

            <p>
              <strong>[안드로이드 : 삼성, LG등]</strong><br />
              1. 스마트폰 인터넷에서 http://tb.ibk.co.kr 접속 후, 스마트러닝 다운로드<br />
              2. 다운로드후 완료알림을 터치하여 IBKSmartLearning_V2....apk 실행<br />
              3. '알 수 없는 앱을 설치할 수 없습니다' 알림 팝업시 설정 버튼을 누름<br />
              4. 안드로이드 설정에서 '이 출처 허용'을 누르고 뒤로가기<br />
              5. 다시 설치 진행<br />
              6. 설치 진행이 사라진경우, 파일탐색기를 실행하여 다운로드함에서 파일을 찾아서 설치
            </p>

            <p>
              <strong>[IOS : 아이폰]</strong><br />
              1. 사파리에서 http://tb.ibk.co.kr 접속 후, 스마트러닝 다운로드 <br />
                (IOS 정책에 따라 WiFi를 통해 다운로드)<br />
              2. 설정> 일반> 기기관리> Industrial Bank of Korea> 'Industrial Bank of Korea'을 신뢰함> 신뢰<br />
              3. 스마트러닝 실행
            </p>
            <img src="https://picsum.photos/960/480" alt="" />
          </div>
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
          <!-- <div class="ibk-board-detail-button">
            <Button label="이전" severity="secondary" outlined size="large" />
            <Button label="다음" severity="primary" size="large" />
          </div> -->
          <pubComent />
        </div>
      </div>
    </div>
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
import pubComent from '@/components/pubComent.vue';
</script>
