<template>
    <div>
        <template v-if="(displayFile?.length ?? 0) > 0">
            <Chip v-for="(item, index) of displayFile" :key="`files_${index}`" style="margin-bottom: 10px;">
                <span class="p-chip-icon bi bi-file-earmark-text" data-pc-section="icon"></span>
                <a href="javascript:void(0);" class="text-600 hover:underline" @click="onFileDown(item)">{{
                    item.orcpFileNm }}</a>
                <span class="p-chip-icon bi bi-x-circle cursor-pointer " data-pc-section="icon"
                    @click="onFileRemove(item, index)"></span>
            </Chip>
        </template>
        <FileUploadForm v-model="file" @select="onSelectedFiles" :key="redrawIndex" />
    </div>
</template>
<script setup lang="ts">

const { displayFile, file, onFileRemove }  = defineModels<{
    displayFile: any[],
    file: any[],
    onFileRemove: (item: any, index: number) => void
}>()
const redrawIndex = ref(0);
watch(file, (newVal) => {
    if (newVal == null || newVal.length == 0) {
        // file 이 clear 됐다.
        // console.log('file', newVal); 
        redrawIndex.value++; 
    }
}, {deep: true});

async function onFileDown(file: any) {
    // console.log(file);
}

function onSelectedFiles(event: any) {
    // console.log('onSelectedFiles', event);
    
}
</script>
