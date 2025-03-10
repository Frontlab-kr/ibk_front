<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head ibk-board-head--tab">
        <h1>학습지원</h1>

        <div class="mo">
          <div class="ibk-board-list-head__write">
            <Button label="1:1 문의하기" severity="primary" rounded outlined />
          </div>
        </div>
      </div>
      <Tabs value="0">
        <TabList>
          <Tab value="0">1:1 문의</Tab>
          <Tab value="1">자주하는 질문</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="ibk-board-list-head">
              <div class="pc">
                <div class="ibk-board-list-head__start">
                  <h2>
                    전체
                    <strong>25</strong>
                  </h2>
                </div>
              </div>
              <div class="ibk-board-list-head__end">
                <div class="ibk-board-search">
                  <IconField>
                    <InputIcon class="ibk-icon-16-search" />
                    <InputText placeholder="검색어를 입력하세요." />
                  </IconField>
                  <div class="ibk-board-search__button">
                    <Button label="검색" severity="primary" />
                  </div>
                </div>
                <div class="pc">
                  <div class="ibk-board-list-head__write">
                    <Button label="1:1 문의하기" severity="primary" rounded outlined />
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-board-list">
              <div class="mo">
                <h2>
                  전체
                  <strong>25</strong>
                </h2>
              </div>
              <NuxtLink to="/" class="ibk-board-list-item" v-for="i of 3">
                <div class="ibk-board-list-item__start">
                  <div class="ibk-board-list-item__number">1</div>
                  <div class="ibk-board-list-item__title">
                    <div class="ibk-board-list-item__badge">
                      <Badge value="답변 대기" style="background: #e4f2ff; color: #1654d1"></Badge>
                    </div>
                    <p>
                      2024년 4월 온라인아카데미 수강신청 안내2024년 4월 온라인아카데미 수강신청 안내2024년 4월
                      온라인아카데미 수강신청 안내2024년 4월 온라인아카데미 수강신청 안내
                    </p>
                    <i class="ibk-icon-24-clip"></i>
                  </div>
                </div>
                <div class="ibk-board-list-item__end">
                  <div class="ibk-board-list-item__date">2025.07.24</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="ibk-board-list-item" v-for="i of 3">
                <div class="ibk-board-list-item__start">
                  <div class="ibk-board-list-item__number">1</div>
                  <div class="ibk-board-list-item__title">
                    <div class="ibk-board-list-item__badge">
                      <Badge value="답변 완료" style="background: #234eaa; color: #ffffff"></Badge>
                    </div>
                    <i class="ibk-icon-24-lock"></i>
                    <p>IBK 퀴즈 재 참여 요청 안내</p>
                    <i class="ibk-icon-24-clip"></i>
                  </div>
                </div>
                <div class="ibk-board-list-item__end">
                  <div class="ibk-board-list-item__date">2025.07.24</div>
                </div>
              </NuxtLink>
              <Paginator :rows="10" :totalRecords="120"></Paginator>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="pc">
              <div class="ibk-board-category">
                <Button label="연수수강" severity="contrast" rounded />
                <Button label="결제관련" severity="secondary" rounded />
                <Button label="평가" severity="secondary" rounded />
                <Button label="스킬" severity="secondary" rounded />
                <Button label="동영상플레이어" severity="secondary" rounded />
              </div>
            </div>
            <div class="ibk-board-list-head">
              <div class="pc">
                <div class="ibk-board-list-head__start">
                  <h2>
                    전체
                    <strong>25</strong>
                  </h2>
                </div>
              </div>
              <div class="ibk-board-list-head__end">
                <div class="w-full">
                  <div class="ibk-board-search">
                    <IconField>
                      <InputIcon class="ibk-icon-16-search" />
                      <InputText placeholder="검색어를 입력하세요." />
                    </IconField>
                    <div class="ibk-board-search__button">
                      <Button label="검색" severity="primary" />
                    </div>
                  </div>
                  <div class="mo">
                    <div class="ibk-board-category">
                      <Button label="연수수강" severity="contrast" rounded />
                      <Button label="결제관련" severity="secondary" rounded />
                      <Button label="평가" severity="secondary" rounded />
                      <Button label="스킬" severity="secondary" rounded />
                      <Button label="동영상플레이어" severity="secondary" rounded />
                      <Button label="결제관련" severity="secondary" rounded />
                      <Button label="평가" severity="secondary" rounded />
                      <Button label="스킬" severity="secondary" rounded />
                      <Button label="동영상플레이어" severity="secondary" rounded />
                      <Button label="결제관련" severity="secondary" rounded />
                      <Button label="평가" severity="secondary" rounded />
                      <Button label="스킬" severity="secondary" rounded />
                      <Button label="동영상플레이어" severity="secondary" rounded />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ibk-board-faq">
              <div class="mo">
                <h2>
                  전체
                  <strong>25</strong>
                </h2>
              </div>
              <Accordion value="0">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <p>
                      <Badge value="카테고리" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                      <span class="ibk-board-faq__text"> 강의 공지사항은 어디에서 보나요? </span>
                    </p>
                  </AccordionHeader>
                  <AccordionContent>
                    강의와 관련한 공지사항은 대부분 IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                    공지사항은 대부분 IBK 사이버연수원<br />
                    내 공지사항 탭에서 확인하실 수 있습니다.<br />
                    <br />
                    IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                  <AccordionHeader>
                    <p>
                      <Badge value="카테고리" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                      <span class="ibk-board-faq__text"> IE 8에서 동영상 재생이 안돼요</span>
                    </p>
                  </AccordionHeader>
                  <AccordionContent>
                    강의와 관련한 공지사항은 대부분 IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                    공지사항은 대부분 IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다.<br />
                    <br />
                    IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                  <AccordionHeader>
                    <p>
                      <Badge value="카테고리" style="background: #f2f2f2; color: #5a5e6c"></Badge>
                      <span class="ibk-board-faq__text"> IE 8에서 동영상 재생 어떻게 해야 하나요?</span>
                    </p>
                  </AccordionHeader>
                  <AccordionContent>
                    강의와 관련한 공지사항은 대부분 IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                    공지사항은 대부분 IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다.<br />
                    <br />
                    IBK 사이버연수원 내 공지사항 탭에서 확인하실 수 있습니다. 
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
              <Paginator :rows="10" :totalRecords="120"></Paginator>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
</script>
