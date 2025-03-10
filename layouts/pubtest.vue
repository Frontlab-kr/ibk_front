<template>
  <div class="ibk" :class="{ 'ibk--menu': ibkMenu }">
    <header class="ibk-header-test">
      <div class="ibk-header-test__start">
        <div class="ibk-header-test__menu">
          <Button icon="ibk-icon-16-menu" severity="secondary" outlined @click="ibkMenu = !ibkMenu" />
        </div>
        <div class="ibk-header-test__title">
          <p>IBK 회계의 이해 IBK 회계의 이해 IBK 회계의 이해 IBK 회계의 이해 IBK 회계의 이해</p>
        </div>
      </div>
      <div class="ibk-header-test__end">
        <div class="ibk-header-test__close">
          <Button icon="ibk-icon-16-close" label="나가기" severity="secondary" outlined />
        </div>
      </div>
    </header>

    <Drawer v-model:visible="ibkMenu" class="ibk-header-menu">
      <template #header>
        <div class="ibk-header-menu-head"><strong>연수 목차</strong>10/30 완료됨</div>
      </template>
      <Accordion :value="['0']" multiple>
        <AccordionPanel value="0">
          <AccordionHeader>
            <div class="ibk-header-menu-list-title">
              <div class="ibk-header-menu-list-item__icon">
                <i class="ibk-icon-lectureroom-folder-plus"></i>
              </div>
              <div class="ibk-header-menu-list-title__text">
                챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터
              </div>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="ibk-header-menu-list">
              <button class="ibk-header-menu-list-item active">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-camera"></i>
                  <i class="ibk-icon-lectureroom-camera-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">동영상 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-tv"></i>
                  <i class="ibk-icon-lectureroom-tv-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">외부 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-play"></i>
                  <i class="ibk-icon-lectureroom-play-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">LIVE</div>
                  <div class="ibk-header-menu-list-item__info">
                    34:00
                    <hr />
                    <strong class="text-primary-600">50%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-intersection"></i>
                  <i class="ibk-icon-lectureroom-intersection-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">집합연수</div>
                  <div class="ibk-header-menu-list-item__info">
                    <strong class="text-primary-600">진행중</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-book"></i>
                  <i class="ibk-icon-lectureroom-book-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-document"></i>
                  <i class="ibk-icon-lectureroom-document-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-chat"></i>
                  <i class="ibk-icon-lectureroom-chat-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">설문</div>
                  <div class="ibk-header-menu-list-item__info">
                    과정 종료 시 진행
                    <hr />
                    <strong class="text-primary-600">연수중</strong>
                  </div>
                </div>
              </button>
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>
            <div class="ibk-header-menu-list-title">
              <div class="ibk-header-menu-list-item__icon">
                <i class="ibk-icon-lectureroom-folder-plus"></i>
              </div>
              <div class="ibk-header-menu-list-title__text">
                챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터
              </div>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="ibk-header-menu-list">
              <button class="ibk-header-menu-list-item active">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-camera"></i>
                  <i class="ibk-icon-lectureroom-camera-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">동영상 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-tv"></i>
                  <i class="ibk-icon-lectureroom-tv-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">외부 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-play"></i>
                  <i class="ibk-icon-lectureroom-play-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">LIVE</div>
                  <div class="ibk-header-menu-list-item__info">
                    34:00
                    <hr />
                    <strong class="text-primary-600">50%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-intersection"></i>
                  <i class="ibk-icon-lectureroom-intersection-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">집합연수</div>
                  <div class="ibk-header-menu-list-item__info">
                    <strong class="text-primary-600">진행중</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-book"></i>
                  <i class="ibk-icon-lectureroom-book-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-document"></i>
                  <i class="ibk-icon-lectureroom-document-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-chat"></i>
                  <i class="ibk-icon-lectureroom-chat-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">설문</div>
                  <div class="ibk-header-menu-list-item__info">
                    과정 종료 시 진행
                    <hr />
                    <strong class="text-primary-600">연수중</strong>
                  </div>
                </div>
              </button>
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>
            <div class="ibk-header-menu-list-title">
              <div class="ibk-header-menu-list-item__icon">
                <i class="ibk-icon-lectureroom-folder-plus"></i>
              </div>
              <div class="ibk-header-menu-list-title__text">
                챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터 챕터
              </div>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="ibk-header-menu-list">
              <button class="ibk-header-menu-list-item active">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-camera"></i>
                  <i class="ibk-icon-lectureroom-camera-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">동영상 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-tv"></i>
                  <i class="ibk-icon-lectureroom-tv-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">외부 콘텐츠</div>
                  <div class="ibk-header-menu-list-item__info">
                    12:00
                    <hr />
                    <strong class="text-primary-600">40%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-play"></i>
                  <i class="ibk-icon-lectureroom-play-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">LIVE</div>
                  <div class="ibk-header-menu-list-item__info">
                    34:00
                    <hr />
                    <strong class="text-primary-600">50%</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-intersection"></i>
                  <i class="ibk-icon-lectureroom-intersection-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">집합연수</div>
                  <div class="ibk-header-menu-list-item__info">
                    <strong class="text-primary-600">진행중</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-book"></i>
                  <i class="ibk-icon-lectureroom-book-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-document"></i>
                  <i class="ibk-icon-lectureroom-document-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">시험</div>
                  <div class="ibk-header-menu-list-item__info">
                    2025.12.00~2025.12.00
                    <hr />
                    <strong class="text-red-500">미진행</strong>
                  </div>
                </div>
              </button>
              <button class="ibk-header-menu-list-item">
                <div class="ibk-header-menu-list-item__icon">
                  <i class="ibk-icon-lectureroom-chat"></i>
                  <i class="ibk-icon-lectureroom-chat-on"></i>
                </div>
                <div class="ibk-header-menu-list-item__text">
                  <div class="ibk-header-menu-list-item__title">설문</div>
                  <div class="ibk-header-menu-list-item__info">
                    과정 종료 시 진행
                    <hr />
                    <strong class="text-primary-600">연수중</strong>
                  </div>
                </div>
              </button>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </Drawer>

    <div class="ibk-body">
      <div class="ibk-contents">
        <slot />
      </div>
    </div>

    <div class="ibk-footer">
      <div class="ibk-inner">
        <div class="ibk-footer-head">
          <div class="ibk-footer-head__start">
            <div class="ibk-footer-logo"></div>
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
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

// 레이아웃에서 `ibkMenu` 상태를 정의
const ibkMenu = ref(false);

// 하위 컴포넌트에서 `ibkMenu`를 사용할 수 있도록 provide
provide('ibkMenu', ibkMenu);

// 하위 컴포넌트에서 `ibkMenu`를 변경할 수 있도록 함수도 provide
const setIbkMenu = (value) => {
  ibkMenu.value = value;
};
provide('setIbkMenu', setIbkMenu);
</script>
