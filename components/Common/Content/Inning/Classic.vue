<template>
    <div class="div-inning-classic my-auto py-auto h-full mr-2">
        <img 
            v-if="getIsOverMaxCnt()"
            class="w-[10px] h-[2px] my-auto"
            src="/img/3dots_small.svg"
        />
        <div
            v-for="(item, idx) in getSortedList(props.list)"
            class="my-auto py-auto mx-[2px]"
            :class="getCurrentInningSpotlightIdx(idx, props.list) && item.isBlack ? 'div-4' : 'div-2'"
        >
            {{ item.score }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TInningDataClassic } from '~/stores/contentStore';

const props = defineProps<{
    list: TInningDataClassic[];
}>();

const {
    MAX_SHOW_INNING_CNT,
} = useRuntimeConfig().public.CONSTANTS;

const getIsOverMaxCnt = (): boolean => {
    return props.list.length > MAX_SHOW_INNING_CNT;
};

const getSortedList = (list: TInningDataClassic[]): TInningDataClassic[] => {
    const isOver = getIsOverMaxCnt();
    if (isOver) {
        const length = list.length;
        const value = length - MAX_SHOW_INNING_CNT;
        const tmpList: TInningDataClassic[] = [];
        list.map((item, idx) => {
            if (idx < value) return false;
            return tmpList.push(list[idx]);
        });
        return tmpList;
    }
    return list;
};

const getCurrentInningSpotlightIdx = (idx: number, list: TInningDataClassic[]): boolean => {
    const length = getSortedList(list).length;
    return (length - 1) === idx;
};

onMounted(async () => {
    await nextTick();
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
