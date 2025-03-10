<template>
  <div class="ibk-lectureroom-lecture">
    <div class="ibk-inner">
      <div class="ibk-lectureroom-lecture-live" style="padding: 50px;">
        <AttandenceQrCode />
      </div>
      <div class="ibk-lectureroom-lecture-info">
        <div class="ibk-lectureroom-lecture-info-contents">
          <div class="flex align-items-center">

            <div class="ibk-lectureroom-lecture-info-item">
              <TitleBar />
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
const compLearning = useCompLearning() 
onMounted(() => {

compLearning.onLessonMounted();
})

</script>
