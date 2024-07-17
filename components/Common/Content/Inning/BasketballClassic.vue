<template>
    <div class="div-inning-classic my-auto py-auto h-full mr-2">
        <div
            v-for="(item, idx) in props.list"
            class="my-auto py-auto mx-[2px]"
            :class="props.currentSpotlightIdx && item.isBlack ? 'div-4' : 'div-2'"
        >
            {{ item.score }}
        </div>
    </div>

    <!-- <div v-for="(item, idx) in opt.list" class="div-2">
        <div class="div-3">
            <div :class="opt.currentSpotlight === idx ? 'div-19' : 'div-4'">
                {{ item.prefix }}
            </div>
            <div class="div-5">{{ item.time }}</div>
        </div>
        <div :class="opt.currentSpotlight === idx ? 'div-6-highlight' : 'div-6'">
            {{ `${ item.homeScore } - ${ item.awayScore }` }}
        </div>
    </div> -->
</template>

<script setup lang="ts">
import type { TInningDataClassic } from '~/stores/contentStore';

const props = defineProps<{
    currentSpotlightIdx: number;
    list: TInningDataClassic[];
}>();

onMounted(async () => {
    await nextTick();
    console.log('props.currentSpotlightIdx: ', props.currentSpotlightIdx);
});
</script>

<style scoped>
.div-inning-classic {
    display: flex;
    gap: 2px;
    font-size: 8px;
    color: #6a6a6a;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    justify-content: space-between;
}
.div-inning-classic .div-2 {
    font-family: Pretendard, sans-serif;
}
.div-inning-classic .div-3 {
    font-family: Pretendard, sans-serif;
}
.div-inning-classic .div-4 {
    color: #000;
    font-family: Pretendard, sans-serif;
}
.div-inning-classic .div-5 {
    font-family: Pretendard, sans-serif;
}
</style>
