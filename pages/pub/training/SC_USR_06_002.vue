<template>
  <div class="ibk-inner">
    <div class="ibk-breadcrumb">
      <Breadcrumb :model="BreadcrumbItems" />
    </div>
    <div class="ibk-academy-detail">
      <Card class="ibk-academy-detail-head">
        <template #content>
          <div class="ibk-academy-detail-head__start">
            <div class="ibk-academy-detail-head-thumb">
              <img src="https://picsum.photos/224/124" alt="" />
            </div>
            <div class="ibk-academy-detail-head-title">
              <h3>기업구조조정의 이해 및 활용</h3>
              <div class="ibk-academy-detail-head-title__text">
                <div>
                  수강기간 2022.12.19 - 2023.02.08
                  <hr />
                  12pt
                </div>

                <div>
                  콘텐츠 4개
                  <hr />
                  평가 2회
                  <hr />
                  설문 1회
                  <hr />
                  자격증 최소 2개 획득
                  <hr />
                  인재개발원
                </div>
              </div>
            </div>
          </div>
          <div class="ibk-academy-detail-head__end">
            <div class="ibk-academy-detail-head-button">
              <div class="ibk-academy-detail-head-button__book">
                <Button icon="ibk-icon-16-book" label="교재파일" severity="secondary" outlined />
              </div>
              <!-- <div class="ibk-academy-detail-head-button__play">
                <Button label="수강신청" rounded />
              </div> -->
            </div>
          </div>
        </template>
      </Card>
      <div class="ibk-academy-detail-contents">
        <div class="ibk-academy-detail-menu" ref="menu">
          <a
            href="#contents01"
            :class="{ active: activeTab === 'contents01' }"
            @click.prevent="scrollToSection('#contents01')"
          >
            연수내용
          </a>
          <a
            href="#contents02"
            :class="{ active: activeTab === 'contents02' }"
            @click.prevent="scrollToSection('#contents02')"
          >
            수강신청
          </a>
          <a
            href="#contents03"
            :class="{ active: activeTab === 'contents03' }"
            @click.prevent="scrollToSection('#contents03')"
          >
            학습목차
          </a>
          <a
            href="#contents04"
            :class="{ active: activeTab === 'contents04' }"
            @click.prevent="scrollToSection('#contents04')"
          >
            수료기준
          </a>
          <a
            href="#contents05"
            :class="{ active: activeTab === 'contents05' }"
            @click.prevent="scrollToSection('#contents05')"
          >
            수강후기 230
          </a>
        </div>
        <div class="ibk-academy-list">
          <div class="ibk-academy-list-item" id="contents01">
            <div class="ibk-academy-list-item__title">연수내용</div>
            <div class="ibk-academy-list-item__text">
              구성원 개개인의 업무수행 커뮤니케이션 능력을 통해, 단순화된 조직의 성과를 극대화할 수 있다. 비즈니스
              커뮤니케이션의 정확한 개념과 업무 수행과의 연관성을 이해한다. 업무 수행 과정에서 발생되는 분야별
              커뮤니케이션 기능의 핵심 내용을 학습한다.<br />
              <br />
              : 회의 / 보고 / 글쓰기 / 프레젠테이션 / 코칭 커뮤니케이션 효율적 의사소통과 업무 능률 향상을 위한 통합적
              커뮤니케이션 방법을 익힌다.
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents02">
            <div class="ibk-academy-list-item__title">수강신청</div>
            <div class="pc">
              <div class="ibk-academy-list-item__table">
                <table>
                  <colgroup>
                    <col style="width: 80px" />
                    <col style="width: 425px" />
                    <col style="width: 218px" />
                    <col style="width: 218px" />
                    <col style="width: 91px" />
                    <col style="width: 104px" />
                  </colgroup>
                  <thead>
                    <th class="text-center">선택</th>
                    <th>연수차수명</th>
                    <th>신청기간</th>
                    <th>교육기간</th>
                    <th>정원</th>
                    <th>신청인원</th>
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
                      <td>{{ row.applyPeriod }}</td>
                      <td>{{ row.educationPeriod }}</td>
                      <td>{{ row.capacity }}</td>
                      <td>{{ row.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mo">
              <div class="ibk-academy-list-item__list">
                <ul>
                  <li
                    v-for="(row, index) in rows"
                    :key="index"
                    :class="{ active: selectedValue === row.value }"
                    @click="selectRow(row.value)"
                  >
                    <RadioButton v-model="selectedValue" :value="row.value" variant="filled" />
                    <p>{{ row.name }}</p>
                    <table>
                      <tbody>
                        <tr>
                          <th>신청기간</th>
                          <td>{{ row.applyPeriod }}</td>
                        </tr>
                        <tr>
                          <th>교육기간</th>
                          <td>{{ row.educationPeriod }}</td>
                        </tr>
                        <tr>
                          <th>정원</th>
                          <td>{{ row.capacity }}</td>
                        </tr>
                        <tr>
                          <th>신청인원</th>
                          <td>{{ row.status }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ibk-academy-list-item__button">
              <Button label="수강신청" size="large" />
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents03">
            <div class="ibk-academy-list-item__title">연수목차 <strong>10/30 완료됨</strong></div>
            <div class="ibk-academy-list-item__index">
              <div class="ibk-lectureroom-index-list__title">
                <p>
                  <strong>Chapter 1</strong>
                  <span
                    >데이터 라벨링 기초 이론 데이터 라벨링 기초 이론 데이터 라벨링 기초 이론 데이터 라벨링 기초
                    이론</span
                  >
                </p>
                <Button label="미리보기" link size="large" />
              </div>
              <div class="ibk-lectureroom-index-list">
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-camera"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>
                        1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상
                        콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차
                        동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠
                        1회차 동영상 콘텐츠 1회차 동영상 콘텐츠
                      </p>
                      <div class="ibk-lectureroom-index-list-item__text">출석</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">출석</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="학습종료"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-tv"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>2회차 외부콘텐츠</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행중"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #308af2; color: #ffffff"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-play"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>3회차 LIVE</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #e4f2ff; color: #234eaa"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-intersection"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>4회차 집합연수</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #e4f2ff; color: #234eaa"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-book"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>5회차 과제</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="미제출"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #fae1df; color: #ee473d"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-document"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>6회차 시험</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="응시완료"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-chat"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>7호차 설문</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="참여예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibk-lectureroom-index-list__title">
                <p><strong>Chapter 2</strong> <span>데이터 라벨링 기초 이론</span></p>
                <Button label="미리보기" link size="large" />
              </div>
              <div class="ibk-lectureroom-index-list">
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-camera"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>
                        1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상
                        콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차
                        동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠 1회차 동영상 콘텐츠
                        1회차 동영상 콘텐츠 1회차 동영상 콘텐츠
                      </p>
                      <div class="ibk-lectureroom-index-list-item__text">출석</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">출석</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="학습종료"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-tv"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>2회차 외부콘텐츠</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행중"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #308af2; color: #ffffff"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-play"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>3회차 LIVE</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #e4f2ff; color: #234eaa"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-intersection"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>4회차 집합연수</p>
                      <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">30분</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="진행예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #e4f2ff; color: #234eaa"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-book"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>5회차 과제</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31~2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="미제출"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #fae1df; color: #ee473d"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-document"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>6회차 시험</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="응시완료"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
                <div class="ibk-lectureroom-index-list-item">
                  <div class="ibk-lectureroom-index-list-item__start">
                    <div class="ibk-lectureroom-index-list-item__icon">
                      <i class="ibk-icon-lectureroom-chat"></i>
                    </div>
                    <div class="ibk-lectureroom-index-list-item__title">
                      <p>7호차 설문</p>
                      <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    </div>
                  </div>
                  <div class="ibk-lectureroom-index-list-item__end">
                    <div class="ibk-lectureroom-index-list-item__text">2025.12.31</div>
                    <!-- <div class="ibk-lectureroom-index-list-item__badge">
                            <Badge
                              value="참여예정"
                              size="large"
                              class="p-badge-rounded"
                              style="background: #f3f4f7; color: #5a5e6c"
                            ></Badge>
                          </div> -->
                    <div class="ibk-lectureroom-index-list-item__button">
                      <Button label="강의보기" link class="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents04">
            <div class="ibk-academy-list-item__title">수료기준</div>
            <div class="ibk-academy-completion">
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>콘텐츠</strong>
                <p>진도율 80%이상 연수완료</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>평가</strong>
                <p>필수 참여</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>과제</strong>
                <p>필수 참여</p>
              </div>
              <div class="ibk-academy-completion-item">
                <i class="ibk-icon-24-completion"></i>
                <strong>설문</strong>
                <p>연수 종료 후 진행예정</p>
              </div>
            </div>
          </div>
          <div class="ibk-academy-list-item" id="contents05">
            <div class="ibk-academy-list-item__title">수강후기 <strong>182</strong></div>
            <div class="ibk-academy-review">
              <dl>
                <dt>사용자 총 평점</dt>
                <dd>
                  <strong>4.9</strong>
                </dd>
                <dd>
                  <Rating v-model="rating" :stars="5" class="p-rating--large p-rating--blue" readonly />
                </dd>
              </dl>
              <dl>
                <dt>전체 후기수</dt>
                <dd>
                  <strong>182</strong>
                </dd>
                <dd>
                  <i class="ibk-icon-48-message"></i>
                </dd>
              </dl>
              <div class="ibk-academy-review__progress">
                <ul>
                  <li>
                    <strong>5점</strong>
                    <ProgressBar :value="100"></ProgressBar>
                    <p>100</p>
                  </li>
                  <li>
                    <strong>4점</strong>
                    <ProgressBar :value="60"></ProgressBar>
                    <p>60</p>
                  </li>
                  <li>
                    <strong>3점</strong>
                    <ProgressBar :value="22"></ProgressBar>
                    <p>22</p>
                  </li>
                  <li>
                    <strong>2점</strong>
                    <ProgressBar :value="8"></ProgressBar>
                    <p>8</p>
                  </li>
                  <li>
                    <strong>1점</strong>
                    <ProgressBar :value="2"></ProgressBar>
                    <p>2</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pub',
});

const BreadcrumbItems = ref([{ label: '분류명' }, { label: '분류명' }]);
const rating = ref(4);

const radioValue01 = ref(null);

import { ref } from 'vue';

const activeTab = ref('contents01');
const menu = ref(null); // 메뉴 요소에 대한 참조

const getMenuHeight = () => {
  const isMobile = window.innerWidth <= 992;
  return isMobile ? 108 : 223;
};

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  const menuHeight = getMenuHeight(); // 화면 크기에 따라 메뉴 높이 설정

  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - menuHeight;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    activeTab.value = sectionId.replace('#', '');
  }
};

// 반응형을 위해 화면 크기 변화에 따른 menuHeight 업데이트를 감지
window.addEventListener('resize', () => {
  getMenuHeight();
});

// 테이블 행 데이터
const rows = ref([
  {
    value: 1,
    name: '기업구조조정의 이해 및 활용 (2025-01)',
    applyPeriod: '2025.06.00 - 2025.07.00',
    educationPeriod: '2025.06.00 - 2025.07.00',
    capacity: '200명',
    status: '정원초과',
  },
  {
    value: 2,
    name: '기업구조조정의 이해 및 활용 (2025-01)',
    applyPeriod: '2025.06.00 - 2025.07.00',
    educationPeriod: '2025.06.00 - 2025.07.00',
    capacity: '200명',
    status: '정원초과',
  },
  {
    value: 3,
    name: '기업구조조정의 이해 및 활용 (2025-01)',
    applyPeriod: '2025.06.00 - 2025.07.00',
    educationPeriod: '2025.06.00 - 2025.07.00',
    capacity: '200명',
    status: '정원초과',
  },
]);

// 선택된 라디오 버튼 값을 저장하는 ref
const selectedValue = ref(null);

// td 클릭 시 해당 행의 라디오 버튼을 선택하는 함수
const selectRow = (value) => {
  selectedValue.value = value;
};
</script>
