<template>
    <div class="ibk-lectureroom-lecture">
        <div class="ibk-inner">
            <div class="ibk-lectureroom-lecture-movie">
                <log v-model="learningStore.currentLesson" />
                <vue-plyr ref="plyrPlayer" :options="plyrOptions">
                    <video ref="videoPlayer" controls crossorigin playsinline @ended="onVideoEnded"
                        @pause="onVideoPaused" @play="onVideoStarted" @timeupdate="onTimeUpdate"
                        @canplay="onVideoCanPlay" @seeking="handleSeeking">
                        <source :src="vodUrl" type="video/mp4" />
                    </video>
                </vue-plyr>
            </div>
            <div class="ibk-lectureroom-lecture-info">
                <div class="ibk-lectureroom-lecture-info-contents">
                    <TitleBar />
                    <div class="ibk-lectureroom-lecture-info__view" v-if="false">
                        <i class="ibk-icon-24-view"></i>
                        {{ learningStore.currentLesson?.acmlCnfgRto?.toFixed(2) }}%
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ManagerLearning from '../../../lib/ManagerLearning'
import Utility from '../../../lib/Utility';
import { useLearningStore } from '../store';
// @ts-ignore
import VuePlyr from '@skjnldsv/vue-plyr'
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

const managerLearning = ManagerLearning.getIns()
const learningStore = useLearningStore()

const plyrPlayer = ref(null)
const videoPlayer = ref<HTMLVideoElement | null>(null)
const currentTime = ref(0)
const summaryInterval = ref<NodeJS.Timeout | null>(null)
const isVodPlaying = ref(false)
const summarnyIntervalTime = 10
const isVideoReady = ref(false)


const vodUrl = await Utility.getVodUrl(learningStore.currentLesson?.vod)


const plyrOptions = computed(() => ({
    // https://github.com/sampotts/plyr#options  참고
    controls: [
        'play-large', // 큰 재생 버튼
        'play', // 재생 버튼
        learningStore.currentLesson!.psiCntlYn === 'Y' ? 'progress' : '',
        'current-time',
        'mute',
        'volume',
        'settings', // 설정
        'fullscreen'
    ].filter(Boolean),
    settings: ['quality', learningStore.currentLesson!.vlctCntlYn === 'Y' ? 'speed' : ''],
    speed: {
        selected: 1,
        options:
            [0.5, 0.75, 1, 1.25, 1.5, 2]

    },
    storage: {
        enabled: false,
        key: 'ibk-plyr-video-player'
    },
    // 자동 숨김 설정
    hideControls: true,
    // 클릭으로 재생/일시정지
    clickToPlay: true,
    // 우클릭 메뉴 비활성화
    disableContextMenu: true,
    hideYouTubeDOMError: true,
    // 품질 설정
    quality: {
        default: 576,
        options: [720, 576, 480, 360]
    },
    // 키보드 단축키 설정
    keyboard: { focused: true, global: false },
    seekTime: learningStore.currentLesson!.psiCntlYn === 'Y' ? 10 : 0,
    blankVideo: null, // default 로 cdn 에서 가져오는부분이 있음. 그래서 null 처리. 추후 빈 mp4 를 넣어도됨.
    // 내가 sprite 를 추가하겠다 라는 의미.
    loadSprite: false,
    // 여기에 모든 svg 가 들어 있다는 의미.
    // svg 를 가져와 해당 sprite.svg 에 해당 부분을 교체하는 방식.
    iconUrl: '/images/sprite/sprite.svg'  // 로컬 asset 경로로 변경
}))

const startSummaryInterval = () => {
    managerLearning.sendSummary(summarnyIntervalTime, currentTime.value)
    summaryInterval.value = setInterval(() => {
        if (isVodPlaying.value) {
            managerLearning.sendSummary(summarnyIntervalTime, currentTime.value)
        }
    }, summarnyIntervalTime * 1000)
}

const stopSummaryInterval = () => {
    if (summaryInterval.value) {
        clearInterval(summaryInterval.value)
        summaryInterval.value = null
    }
}

const onVideoStarted = () => {
    isVodPlaying.value = true
/* 
    if ($isEmpty(learningStore.currentLesson?.acmlCnfgRto) || learningStore.currentLesson?.acmlCnfgRto == 0) {
        managerLearning.makeLessonStartPercentage()
    } */
    startSummaryInterval()
}

const onVideoEnded = () => {
    isVodPlaying.value = false
    managerLearning.sendSummary(summarnyIntervalTime, currentTime.value)
    stopSummaryInterval()
}

const onVideoPaused = () => {
    isVodPlaying.value = false
    stopSummaryInterval()
}

const onVideoCanPlay = () => {
    console.log('onVideoCanPlay')
    isVideoReady.value = true;
}
const previousTime = ref(0) // 이전 시간을 저장할 변수 추가
const maxWatchedTime = ref(0)
const onTimeUpdate = () => {
    if (videoPlayer.value) {
        const current = videoPlayer.value.currentTime
        const timeGap = current - previousTime.value

        // 이후로 가는 점프만 잡기 (차이가 1초 이상이고, 현재 시간이 이전 시간보다 큰 경우)
        if (learningStore.currentLesson!.sttgAhtPsiCntlYn === 'N' &&
            isVideoReady.value == true &&
            timeGap > 1 &&
            current > maxWatchedTime.value) {  // 최대 시청 시간을 넘어가는 경우만 체크
            console.log(`시간 점프 발생: ${previousTime.value.toFixed(2)}초 -> ${current.toFixed(2)}초`)
            videoPlayer.value.currentTime = maxWatchedTime.value  // 최대 시청 시간으로 강제 이동
            return;
        }

        // 현재 시간 업데이트
        currentTime.value = current
        // 이전 시간 업데이트
        previousTime.value = current
        // 최대 시청 시간 업데이트
        if (current > maxWatchedTime.value) {
            maxWatchedTime.value = current
        }
    }
}
const handleSeeking = () => {
    if (isVideoReady.value == false) return;
    // 앞으로 이동 제한 체크 (재생 중에도 적용)
    if (learningStore.currentLesson!.sttgAhtPsiCntlYn === 'N' && videoPlayer.value) {
        const newTime = videoPlayer.value.currentTime
        const maxAllowedTime = maxWatchedTime.value // 최대 시청 시간 사용
        // 현재 시점 이후로 이동하려고 할 때만 제한
        if (newTime > maxAllowedTime) {
            videoPlayer.value.currentTime = maxAllowedTime
        }
    }
}

 

const compLearning = useCompLearning()
onMounted(async () => {
    compLearning.onLessonMounted()

    if (learningStore.currentLesson!.fmtsPsiStrgYn === 'Y'
        // && learningStore.lastLesson?.lastLrngLssoNo &&
        //     (learningStore.lastLesson.lastLrngLssoNo as any) == learningStore.currentLesson!.edctDsprLssoNo
    ) {
        nextTick(() => {
            if (videoPlayer.value) {
                // @ts-ignore
                // videoPlayer.value!.currentTime = learningStore.lastLesson?.lastVl
                // 해당 영상의 위치에서 재생하도록 수정.
                videoPlayer.value.currentTime = learningStore.currentLesson?.acmlPictLen ?? 0;
                // videoPlayer.value.currentTime = 10
            }
        })
    }
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
    stopSummaryInterval();
})
</script>

<style>
.plyr--full-ui input[type=range] {
    color: #308af2;
}
</style>
