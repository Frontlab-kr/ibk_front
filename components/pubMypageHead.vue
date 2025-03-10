<template>
  <div class="ibk-mypage-main-head">
    <div class="ibk-inner">
      <div class="ibk-mypage-main-head__start">
        <div class="ibk-mypage-main-head-badge">
          <Badge value="과장4급" style="background: #fff; color: #616dd6"></Badge>
          <Badge value="여신그룹 · 여신심사부" style="background: #fff; color: #5a5e6c"></Badge>
        </div>
        <h2>
          김기은님
          <Button icon="ibk-icon-20-modify" text />
          <span>|</span>
          <strong> <i class="ibk-icon-24-certification"></i>디지털 </strong>
        </h2>
        <div class="ibk-mypage-main-head-link">
          <p>
            <NuxtLink to="/">
              학습현황
              <strong>27</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/">
              학습일정
              <strong>24</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/">
              연수내역
              <strong>23</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/">
              찜한연수
              <strong>8</strong>
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/">
              수강후기
              <strong>5</strong>
            </NuxtLink>
          </p>
        </div>
      </div>
      <div class="ibk-mypage-main-head__end">
        <div class="ibk-mypage-main-head-button">
          <Button icon="ibk-icon-16-play" label="나의 강의실가기" rounded />
          <Button icon="ibk-icon-16-favorites-primary" label="나의 대표 Skill 설정 " rounded severity="white" />
        </div>
        <hr />

        <div class="ibk-mypage-main-head-menu">
          <NuxtLink to="/">
            <p>
              <i class="ibk-icon-20-mileage-primary"></i>
              마일리지 현황
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
          <NuxtLink to="/">
            <p>
              <i class="ibk-icon-20-home-primary"></i>
              시설 신청
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
          <NuxtLink to="/">
            <p>
              <i class="ibk-icon-20-wallet-primary"></i>
              결제관리
            </p>
            <i class="ibk-icon-16-arrow-primary"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
