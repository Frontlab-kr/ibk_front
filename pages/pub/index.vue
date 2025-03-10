<template>
  <div class="ibk-background p-6">
    <div class="ibk-inner">
      <Card class="mb-6">
        <template #title>로그인</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_001">SC_USR_00_001~06_로그인</a>
            </li>
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_001_02">SC_USR_00_001~06_로그인</a>
            </li>
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_002">SC_USR_00_001~06_로그인 선택</a>
            </li>
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_003">SC_USR_00_001~06_로그인 mOTP</a>
            </li>
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_004">SC_USR_00_001~06_로그인 휴대폰인증</a>
            </li>
            <li class="my-3">
              <a href="/pub/login/SC_USR_00_005">SC_USR_00_001~06_로그인 이메일인증</a>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>메인</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <a href="/pub/main/main01">My Skill</a>
            </li>
            <li class="my-3">
              <a href="/pub/main/main02">My HRD - 3급 부점장 보임자격 </a>
            </li>
            <li class="my-3">
              <a href="/pub/main/main03">My HRD - 4급 행내 연수 운용기준 </a>
            </li>
            <li class="my-3">
              <a href="/pub/main/main04">My HRD - 5급 행내 연수 운용기준 </a>
            </li>
            <li class="my-3">
              <a href="/pub/main/main05">Talents Board(스킬지수&로드맵) </a>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>공통>통합검색</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <a href="/pub/common/SC_USR_00_007">SC_USR_00_007_메인_GNB_검색</a>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>이메일</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <a href="/mail/mail01.html" target="_blank">비밀번호찾기</a>
            </li>
            <li class="my-3">
              <a href="/mail/mail02.html" target="_blank">학습독려</a>
            </li>
            <li class="my-3">
              <a href="/mail/mail03.html" target="_blank">수강신청</a>
            </li>
            <li class="my-3">
              <a href="/mail/mail04.html" target="_blank">1:1문의</a>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>연수신청</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/training/SC_USR_06_001">연수신청메인</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/training/SC_USR_06_001_02">맞춤형검색결과없음</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/training/SC_USR_06_001_03">맞춤형검색결과</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/training/SC_USR_06_002">직무아카데미</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/training/SC_USR_06_003">팝업화면</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>나의 강의실</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_05_006">SC_USR_05_006_나의강의실_학습중인과정 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_05_014">SC_USR_05_014~016_연수내역 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>학습홈 & 학습창</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_001"> SC_USR_04_001~003, 011_강의실 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_004_movie"> SC_USR_04_004_동영상(675) </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_004_PDF"> SC_USR_04_004_PDF </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_004_live"> SC_USR_04_013_라이브_줌 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_004_live02"> SC_USR_04_013_라이브_줌 02</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_004_link"> SC_USR_04_002_외부CP및링크 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_005"> SC_USR_04_005_시험 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_006"> SC_USR_04_006_과제 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_007"> SC_USR_04_007_설문 </NuxtLink>
            </li>

            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_010">
                SC_USR_04_010_공지사항<br />
                SC_USR_04_010_공지사항 (과정운영자)
              </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_008">
                SC_USR_04_008_자료실<br />
                SC_USR_04_008_자료실 (과정운영자)
              </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_008_02"> SC_USR_04_008_검색결과 N (공통) </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_010_02"> SC_USR_04_010_공지사항/자료실상세 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_009"> SC_USR_04_009_Q&A </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_009_02">
                SC_USR_04_009_Q&A 작성 (파일첨부전)<br />
                SC_USR_04_009_Q&A 작성 (파일첨부후)
              </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/lectureroom/SC_USR_04_009_03">
                SC_USR_04_009_Q&A-상세(처리중)<br />
                SC_USR_04_009_Q&A-상세(처리완료)
              </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 메인</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/main01"> 3급 팀장급 이하 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/mypage/main02"> 4급 팀장급 이하(대상) </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/mypage/main03"> 4급 팀장급 이하(미대상) </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/mypage/main04"> 5급 팀장급 이하 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 시설신청내역현황</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_07_000"> SC_USR_07_000_시설신청내역 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 후기관리</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_04_007"> SC_USR_04_007_후기관리 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_04_007_02"> SC_USR_04_007_후기관리 없음</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 결재관리</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_01_002"> SC_USR_01_002_결재할문서 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 역략지원신청</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_08_001"> SC_USR_역량지원신청 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>마이페이지 - 학습마일리지</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_07_002"> SC_USR_07_002_학습마일리지 </NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/mypage/SC_USR_05_012"> SC_USR_05_012_MY학습일정 </NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>소셜러닝</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/social/SC_USR_07_001">SC_USR_07_001_소셜러닝</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/social/SC_USR_07_002">SC_USR_07_002_소셜러닝</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/social/SC_USR_07_002_02">SC_USR_07_002_소셜러닝</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/social/SC_USR_07_002_03">SC_USR_07_002_소셜러닝</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>커뮤니티</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/community/SC_USR_03_001">SC_USR_03_001~002_공통_공지사항</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/community/SC_USR_03_002">SC_USR_03_001~002_공통_공지사항</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>학습지원</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/backup/SC_USR_03_005">SC_USR_03_005_1:1문의</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/backup/SC_USR_03_005_02">SC_USR_03_005_1:1문의</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/backup/SC_USR_03_005_03">SC_USR_03_005_1:1문의</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>별도</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/etc/SC_USR_03_000">개인정보 처리방침</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/etc/SC_USR_03_000_02">에러</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>사용시설신청</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/apply/SC_USR_02_001">휴양동</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/apply/SC_USR_07_000">시설신청내역_강의실</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>

      <Card class="mb-6">
        <template #title>역량개발지원</template>
        <template #content>
          <ul class="list-disc">
            <li class="my-3">
              <NuxtLink to="/pub/apply/SC_USR_08_001">SC_USR_08_001_학원수강료/응시료</NuxtLink>
            </li>
            <li class="my-3">
              <NuxtLink to="/pub/apply/SC_USR_08_002">SC_USR_역량개발지원 신청현황</NuxtLink>
            </li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});
</script>
