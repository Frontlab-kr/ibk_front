<template>
  <div class="ibk-apply-list">
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">학술연수 신청</div>
          <ul>
            <li>
              <strong>지원대상</strong>
              <p>관리자에서 작성한 내용이 노출 됩니다.</p>
            </li>
            <li>
              <strong>지원기간</strong>
              <p>관리자에서 작성된 내용이 노출 됩니다.</p>
            </li>
          </ul>
        </div>
        <div class="ibk-info">
          <p>관련안내 문구가 노출됩니다.</p>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-head">
        <h4>지원 안내</h4>
      </div>
      <div class="ibk-apply-list-item-body">
        <div class="ibk-table ibk-table--scroll-x">
          <table>
            <colgroup>
              <col style="width: 160px" />
              <col style="width: 1040px" />
            </colgroup>
            <thead>
              <tr>
                <th class="text-left">분야</th>
                <th class="text-left">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>국내</td>
                <td>작성정보가 노출 됩니다. 작성정보가 노출 됩니다. 작성정보가 노출 됩니다</td>
              </tr>
              <tr>
                <td>해외</td>
                <td>작성정보가 노출 됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">지원절차</div>
          <ul>
            <li>
              <strong>01. 수강등록</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>02. 지원신청</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>03. 검증 ・ 승인</strong>
              <p>
                중복지급불가<br />
                학원 수강료/응시료 지원금과 선택적 복지비의 중복 지급은 불가하오니 유의 바랍니다.<br />
                - 복지비 카드 시스템 --> 자동 승인 건의 경우 반드시 ‘신청제외’ 등록<br />
                * 신정제외’등록 후 전산 반영에 2 영업일 소요
              </p>
            </li>
            <li>
              <strong>04. 학원비 지원</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
            <li>
              <strong>05. 결과등록</strong>
              <p>작성정보가 노출됩니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-item">
      <div class="ibk-apply-list-item-body">
        <div class="ibk-apply-info">
          <div class="ibk-apply-info__title">증빙서류</div>
          <ul>
            <li>
              <strong>신청</strong>
              <p>수강증 ・ 영수증</p>
            </li>
            <li>
              <strong>학습결과 등록</strong>
              <p>수료증</p>
            </li>
          </ul>
        </div>
        <div class="ibk-info">
          <p>자세한 세부내용은 화면 상단에 있는 학원비 지원 안내 참조</p>
        </div>
        <div class="ibk-apply-list-item-check">
          <Checkbox v-model="checkbox01" inputId="checkbox1" value="checkbox1" />
          <label for="checkbox1">동의완료</label>
        </div>
      </div>
    </div>
    <div class="ibk-apply-list-button">
      <Button label="지원신청" size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
