<template>
  <div class="ibk-comment">
    <div class="ibk-comment__title">댓글 <strong>12</strong></div>
    <div class="ibk-comment-form">
      <div class="ibk-comment-form__name">여승환</div>
      <div class="ibk-comment-form__textarea">
        <Textarea />
      </div>
      <div class="ibk-comment-form__button">
        <Button label="취소" severity="secondary" text />
        <Button label="등록" severity="primary" class="tonal" disabled />
      </div>
    </div>
    <div class="ibk-comment-list">
      <div :class="{ 'ibk-comment-list-item active': isActive, 'ibk-comment-list-item': !isActive }">
        <div class="ibk-comment-list-item__info">
          <strong>강인영</strong>
          3일 전
        </div>
        <div class="ibk-comment-list-item__text">
          은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이 무엇인지,
          어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다.
        </div>
        <div class="ibk-comment-list-item__menu">
          <ul>
            <li>
              <button><i class="ibk-icon-16-like"></i>16</button>
            </li>
            <li>
              <button class="text-primary" @click="toggleActive">
                <i class="ibk-icon-16-reply-primary"></i>답글 1개<i class="ibk-icon-16-reply-arrow"></i>
              </button>
            </li>
          </ul>
        </div>
        <div class="ibk-comment">
          <div class="ibk-comment-form">
            <div class="ibk-comment-form__name">여승환</div>
            <div class="ibk-comment-form__textarea">
              <Textarea
                value="은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다.  은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다."
              />
            </div>
            <div class="ibk-comment-form__button">
              <Button label="취소" severity="secondary" text />
              <Button label="등록" severity="primary" class="tonal" />
            </div>
          </div>
          <div class="ibk-comment-list">
            <div class="ibk-comment-list-item">
              <div class="ibk-comment-list-item__info">
                <strong>신강호</strong>
                3일 전
              </div>
              <div class="ibk-comment-list-item__text">
                은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이
                무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해
                나아가야합니다.
              </div>
              <div class="ibk-comment-list-item__button">
                <Button label="삭제" text class="text-red-500" />
                <Button label="수정" text class="text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'ibk-comment-list-item active': isActive, 'ibk-comment-list-item': !isActive }">
        <div class="ibk-comment-list-item__info">
          <strong>조유미</strong>
          3일 전
        </div>
        <div class="ibk-comment-list-item__text">
          은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이 무엇인지,
          어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다.
        </div>
        <div class="ibk-comment-list-item__menu">
          <ul>
            <li>
              <button><i class="ibk-icon-16-like"></i>16</button>
            </li>
            <li>
              <button class="text-primary" @click="toggleActive">
                <i class="ibk-icon-16-reply-primary"></i>답글 4개<i class="ibk-icon-16-reply-arrow"></i>
              </button>
            </li>
          </ul>
        </div>
        <div class="ibk-comment">
          <div class="ibk-comment-form">
            <div class="ibk-comment-form__name">여승환</div>
            <div class="ibk-comment-form__textarea">
              <Textarea
                value="은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다.  은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다."
              />
            </div>
            <div class="ibk-comment-form__button">
              <Button label="취소" severity="secondary" text />
              <Button label="등록" severity="primary" class="tonal" />
            </div>
          </div>
          <div class="ibk-comment-list">
            <div class="ibk-comment-list-item">
              <div class="ibk-comment-list-item__info">
                <strong>신강호</strong>
                3일 전
              </div>
              <div class="ibk-comment-list-item__text">
                은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이
                무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해
                나아가야합니다.
              </div>
              <div class="ibk-comment-list-item__button">
                <Button label="삭제" text class="text-red-500" />
                <Button label="수정" text class="text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'ibk-comment-list-item active': isActive, 'ibk-comment-list-item': !isActive }">
        <div class="ibk-comment-list-item__info">
          <strong>김소희</strong>
          7일 전
        </div>
        <div class="ibk-comment-list-item__text">
          은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 은행원에게 필요한 자질이 무엇인지,
          어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다.
        </div>
        <div class="ibk-comment-list-item__menu">
          <ul>
            <li>
              <button><i class="ibk-icon-16-like"></i>16</button>
            </li>
            <li>
              <button class="text-primary" @click="toggleActive">
                <i class="ibk-icon-16-reply-primary"></i>답글쓰기
              </button>
            </li>
          </ul>
        </div>
        <div class="ibk-comment">
          <div class="ibk-comment-form">
            <div class="ibk-comment-form__name">여승환</div>
            <div class="ibk-comment-form__textarea">
              <Textarea
                value="은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다.  은행원에게 필요한 자질이 무엇인지, 어떤 것을 해가야할지 알 수 있었습니다. 모든 업무에 있어서 커뮤니케이션 능력 향상을 위해 나아가야합니다."
              />
            </div>
            <div class="ibk-comment-form__button">
              <Button label="취소" severity="secondary" text />
              <Button label="등록" severity="primary" class="tonal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ibk-comment-more">
      <Button icon="ibk-icon-16-more" iconPos="right" label="더보기" link />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>
