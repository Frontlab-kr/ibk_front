<template>
    <div class="ibk-inner">
        <div class="ibk-board">
            <div class="ibk-board-head">
                <div class="ibk-board-head__button">
                    <Button icon="ibk-icon-16-arrowleft" label="목록" severity="secondary" outlined
                        @click="goList" />
                </div>
            </div>
            <div class="ibk-board-inner">
                <div class="ibk-board-detail">
                    <div class="ibk-board-detail-head">
                        <div class="ibk-board-detail-head__title">
                            <template v-if="store.communityBoardContents?.ctgyNm">
                                <div class="ibk-board-detail-head__badge">
                                    <Badge :value="store.communityBoardContents?.ctgyNm"
                                        style="background: #f2f2f2; color: #5a5e6c"></Badge>
                                </div>
                            </template>
                            <p>{{ store.communityBoardContents?.bltApowTtlNm }}</p>
                        </div>
                        <div class="ibk-board-detail-head-contents">
                            <div class="ibk-board-detail-head__info">
                                <ul>
                                    <li>{{ store.communityBoardContents?.cncrName ??
                                        store.communityBoardContents?.cncrId }}</li>
                                    <li>{{ store.communityBoardContents?.cretTs }}</li>
                                    <li>
                                        <i class="ibk-icon-16-view"></i>
                                        {{ store.communityBoardContents?.inqCnt }}
                                    </li>
                                </ul>
                            </div>
                            <div class="ibk-board-detail-head__button" v-if="store.communityBoardContents?.blbrNo != 1 ||store.communityBoardContents?.blbrNo != 2">
                                <Button v-if="isMe" label="삭제" severity="secondary" outlined class="text-red-500" @click="deleteContents" />
                                <Button v-if="isMe" label="수정" severity="secondary" @click="editContents" />
                            </div>
                        </div>
                    </div>
                    <div class="ibk-board-detail-contents" v-html="store.communityBoardContents?.bltApowCon">
                    </div>
                    <div class="ibk-board-detail-file">
                        <h3>첨부파일 <strong>{{ store.communityBoardContents?.commonAttachFileOutList?.length ?? 0
                                }}</strong></h3>
                        <ul>
                            <template v-if="store.communityBoardContents?.commonAttachFileOutList?.length ?? 0 > 0">
                                <li v-for="(item) in store.communityBoardContents?.commonAttachFileOutList" :item="item"
                                    :key="item.atchSqn">
                                    <div class="ibk-board-detail-file__text">
                                        <i class="ibk-icon-24-download "></i>
                                        <div class="cursor-pointer">
                                            <a @click="handleFileDownload(item.atchId, item.atchSqn, item.orcpFileNm)"><p>{{ item.orcpFileNm }}</p></a>
                                        </div>
                                    </div>
                                </li>
                            </template>
                            <template v-else>
                                <li>
                                    <p>첨부파일이 없습니다.</p>
                                </li>
                            </template>
                            <!-- <li class="ibk-board-detail-file-ing">
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
                                            Dashboard prototype recording sapiente delectus, ut aut Dashboard prototype
                                            recording sapiente
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
                            </li> -->
                        </ul>
                    </div>
                    <!-- <div class="ibk-board-detail-button">
              <Button label="이전" severity="secondary" outlined size="large" />
              <Button label="다음" severity="primary" size="large" />
            </div> -->
                    <CommunityBoardComments :blbrNo="store.communityBoardContents?.blbrNo??0" :blbrPtngId="store.communityBoardContents?.blbrPtngId??0" :commentCount="store.communityBoardContents?.commentCnt??0" @refresh="commentRefresh"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type CommunityBoard, useCommunityStore } from '~/domains/community';
import { useAuthStore } from '~/domains/auth';
import CommunityBoardComments from '~/domains/community/components/CommunityBoardComments.vue';
import Utility from '~/lib/Utility';
import downloadFile from '~/lib/CommonFileDown';

// const props = defineProps<{
//     item: CommunityBoardContents
// }>();

const store = useCommunityStore();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const isMe = computed(()=> authStore.userInfo && authStore.userInfo.userId === store.communityBoardContents?.cncrId);

const deleteContents = async() => {
    // 권한 확인

    // 삭제 확인 : Utility.confirm 사용
    const isYesOrNo = await Utility.confirm("정말 삭제하시겠습니까?");
    if (!isYesOrNo) return;

    const result = await store.delBoardContents({ blbrNo: store.communityBoardContents?.blbrNo, blbrPtngId: store.communityBoardContents?.blbrPtngId });
    if (result.success) {
        Utility.alert('정상 처리 되었습니다');
        router.replace('/community');
    }
};

const editContents = () => {
    // 권한 확인
    // 수정창으로 연결
    router.push({ path: '/community/edit', query: {blbrPtngId: route.params.blbrPtngId}});
}

const goList = () => {
    router.push('/community');
}

const commentRefresh = async () => {
    const blbrPtngId = route.params.blbrPtngId;
    await store.getBoardContentsDetail({ blbrPtngId: Number(blbrPtngId) });

    if (store.communityBoardContents.commentCnt > 0) {
        await store.getBoardContentsCommentList(Number(blbrPtngId));
    } else {
        store.communityBoardContentsCommentList = [];
    }
}

/*const downloadFile = (fileOriginalName: string, fileUrl: string) => {
    if (!fileOriginalName || fileOriginalName.length == 0 || !fileUrl || fileUrl.length == 0) {
        Utility.alert('파일 정보가 없습니다.');
        return;
    }

    // store.downloadFile(fileOriginalName, fileUrl);
    Utility.alert('파일 다운로드');
}*/

const handleFileDownload = async (atchId: number, atchSqn: number, orcpFileNm: string) => {
  const url = `/v1/file/download/community/${atchId}/${atchSqn}`;
  await downloadFile(url, orcpFileNm);
};


</script>
