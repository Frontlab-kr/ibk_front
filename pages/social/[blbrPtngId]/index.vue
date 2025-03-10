<template>
  <div class="ibk-inner">
    <div class="ibk-board">
      <div class="ibk-board-head">
        <div class="ibk-board-head__button">
          <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined @click="goBack"/>
        </div>
      </div>
      <div class="ibk-board-inner">
        <div class="ibk-board-detail">
          <div class="ibk-board-detail-head">
            <div class="ibk-board-detail-head__title">
              <p>{{ socialBoardContentsDetail?.bltApowTtlNm }}</p>
            </div>

            <div class="ibk-board-detail-head-contents">
              <div class="ibk-board-detail-head__info">
                <ul>
                  <li>
                    <strong>{{ socialBoardContentsDetail?.cncrNm }}</strong>
                  </li>
                  <li>{{ socialBoardContentsDetail?.cretTs }}</li>
                  <li>
                    <i class="ibk-icon-16-view"></i>
                    {{ socialBoardContentsDetail?.inqCnt?.toLocaleString() || 0 }}
                  </li>
                </ul>
              </div>
              <div class="ibk-board-detail-head__button">
                <Button v-if="isMe" label="삭제" severity="secondary" outlined class="text-red-500" @click="delBoardContents" />
                <Button v-if="isMe" label="수정" severity="secondary" @click="goEdit"/>
              </div>
            </div>
          </div>
          <div class="ibk-board-detail-contents">
            <p v-html="socialBoardContentsDetail?.bltApowCon"></p>
          </div>
          <div v-if="socialBoardContentsDetail.commonAttachFileOutList && socialBoardContentsDetail.commonAttachFileOutList.length > 0"
               class="ibk-board-detail-file">
            <ul>
              <li v-for="(item, index) of socialBoardContentsDetail.commonAttachFileOutList">
                <NuxtLink @click="handleFileDownload(item.atchId, item.atchSqn, item.orcpFileNm)" class="ibk-board-detail-file__text">
                  <i class="ibk-icon-24-folder"></i>
                  <p style="cursor: pointer">{{ item.orcpFileNm }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="ibk-board-detail-like" :class="isLiked ? 'active' : ''">
            <Button
              :icon="isLiked ? 'ibk-icon-32-like-active' : 'ibk-icon-32-like'"
              severity="secondary"
              rounded
              size="large"
              @click="saveBoardContentsLike"
            />
            <p>좋아요</p>
          </div>
          <SocialBoardComment :blbrNo="socialBoardContentsDetail.blbrNo" :blbrPtngId="route.params.blbrPtngId" :commentCount="socialBoardContentsDetail.commentCnt" @refresh="commentRefresh"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { type SocialBoardContents, useSocialStore } from '~/domains/social';

useHead({
  htmlAttrs: {
    class: 'mobile-header-hide',
  },
});

import SocialBoardComment from '~/domains/social/components/SocialBoardComments.vue';
import { useAuthStore } from '~/domains/auth';
import downloadFile from '~/lib/CommonFileDown';

const route = useRoute();
const router = useRouter();
const store = useSocialStore();
const authStore = useAuthStore();

const socialBoardContentsDetail = reactive<SocialBoardContents>({
  blbrNo: undefined,
  blbrPtngId: undefined,
  likeYn: 'N',
  bltApowTtlNm: '',
  bltApowCon: '',
  cncrId: '',
  inqCnt: 0,
  likeCnt: 0,
  commentCnt: 0,
  blbrCtgyId: undefined
});


const isLiked = computed(()=>{
  return socialBoardContentsDetail?.likeYn === 'Y' ? true : false;
});

const isMe = computed(()=> authStore.userInfo && authStore.userInfo.userId === socialBoardContentsDetail.cncrId);


const goEdit = () => {
  router.push({ path: '/social/edit', query: {blbrPtngId: route.params.blbrPtngId}})
}

const saveBoardContentsLike = async () => {
  const result = await store.saveBoardContentsLike(socialBoardContentsDetail.blbrNo, socialBoardContentsDetail?.blbrPtngId);

  if(result.success) {
    socialBoardContentsDetail.likeYn = isLiked.value ? 'N' : 'Y';
    //socialBoardContentsDetail.value?.likeYn = 'Y';
  }
}

const delBoardContents = async () => {
  if(!confirm('정말 삭제하시겠습니까?')) return;

  const result = await store.delBoardContents({ blbrNo: socialBoardContentsDetail.blbrNo, blbrPtngId:socialBoardContentsDetail?.blbrPtngId });

  if(result.success) {
    alert('정상 처리 되었습니다');
    router.replace('/social');
  }
}

const getBoardContentsCommentList = async () => {
  await store.getBoardContentsCommentList(Number(route.params.blbrPtngId));
}

const commentRefresh = async () => {
  const result = await store.getBoardContentsDetail(Number(route.params.blbrPtngId));
  Object.assign(socialBoardContentsDetail, result);
  getBoardContentsCommentList();
}

const goBack = () => {
  // router.push('/social');
  // 통합검색에서도 쓰므로 뒤로가기 사용
  router.go(-1);
}

const handleFileDownload = async (atchId: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/social/${atchId}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};

onBeforeMount(async ()=> {
  if(route.params.blbrPtngId) {
    const result = await store.getBoardContentsDetail(Number(route.params.blbrPtngId));

    if(!result) {
      alert('해당 게시글이 없습니다');
      router.go(-1);
    } else {
      Object.assign(socialBoardContentsDetail, result);
      getBoardContentsCommentList();
    }
  } else {
    alert('해당 게시글이 없습니다');
    router.go(-1);
  }
});



</script>
