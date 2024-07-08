<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :pageIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'BasketBall'"
        :tab="opt.tab"
        :result="opt.result"
        :sortedList="list.sortedList"
        :changeTab="changeTab"
        :changeDate="changeDate"
        :toggleByTime="toggleByTime"
        :updateLiveRealTime="updateLiveRealTime"
    >
        <BasketBallLiveMain
            v-if="opt.tab === 'live'"
            ref="$liveMain"
            :result_league_list="list.sortedList"
            :onMounted="updateLiveRealTime"
        />
        <BasketBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league_list="list.sortedList"
        />
        <BasketBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league_list="list.sortedList"
        />
        <BasketBallResultMain
            v-if="opt.tab === 'result'"
            :result_league_list="list.sortedList"
        />
        <BasketBallLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ECommonSportSectionValue, ECommonSportValue } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';
import type { TBasketBallSchedule } from "~/types/BasketBall/schedule";
import UtilDate from '~/utils/date';

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
const filterStore = useFilterStore();
const dateStore = useDateStore();
const scrollStore = useScrollStore();
const cacheStore = useCacheStore();
const sportStore = useSportStore();
const route = useRoute();

const scroll = reactive({
    key: <string> 'tab',
});

const opt = reactive({
    isBooting: <boolean> true,
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as TCommonTabTypes ?? 'live',
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
    result: {
        nav_code: 'S003',
    },
});

const $liveMain = ref();

const list = reactive({
    // total list
    totalList: <TBasketBallSchedule[]> [],
    totalKickOffList: <{ idx: number; match_id: string; ai_kickoff_timestamp: number; }[]> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TBasketBallSchedule[]> [],
    sortedKickOffList: <{ idx: number; match_id: string; ai_kickoff_timestamp: number; }[]> [],
});

const page = reactive({
    isPending: <boolean> false,
    idx: <number> 0,
});

const init = () => {
    filterStore.init();
    scrollStore.setScroll2Top();
    page.idx = 0;
    list.sortedList = [];
    scrollStore.setIsOutOfContent(scroll.key, false);
};

const changeTab = async () => {
    opt.tab = route.query['tab'] as TCommonTabTypes ?? 'live';
    list.totalList = [];
    opt.isBooting = true;
    opt.isPending = true;
    init();
    await res();
};

const changeDate = async () => {
    if (opt.isBooting) return;
    init();
    opt.isPending = true;
    if (opt.tab === 'live') {
        await callNextContents();
    } else {
        await res();
    }
    opt.isPending = false;
};

const toggleByTime = async () => {
    await updateLiveRealTime();
};

const updateLiveRealTime = async () => {
    const {
        totalList,
        totalKickOffList,
        sortedList,
        sortedKickOffList,
    } = await sportStore.updateLiveRealTime(
        list.totalList,
        list.totalKickOffList,
        list.sortedList,
        list.sortedKickOffList,
        $liveMain,
        callNextContents,
    );
    list.totalList = totalList;
    list.totalKickOffList = totalKickOffList;
    list.sortedList = sortedList;
    list.sortedKickOffList = sortedKickOffList;
};

/**
 * res from first page entrance
 */
const res = async () => {
    const isToday = UtilDate.chckDateIsToday(
        UtilDate.addMillisecond(dateStore.getFromDate())
    );
    const res = await cacheStore.onMountedTab(
        'basketball',
        opt.tab,
        {
            sid: ECommonSportValue[ ECommonSportSectionValue['basketball'] ],
            fromdate: isToday ? 0 : dateStore.getFromDate(),
        },
    );
    
    try {
        list.totalList = res['data'];
        await callNextContents();
        if (opt.tab === 'live') {
            await updateLiveRealTime();
        }
    } catch (e) {

    }
    opt.isPending = false;
    opt.isBooting = false;
};

/**
 * get paged list from total list (pagination)
 * @param isFilter 
 * @param list 
 */
const loadSortedContent = async (isFilter: boolean, list: any[]) => {
    if (list.length === 0) return list;
    if (isFilter) {
        return list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    }
    if (list.length < page.idx) {
        return list;
    }
    if (page.idx !== 0) page.isPending = true;
    page.idx++;
    const slicedList = list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    page.isPending = false;
    return slicedList;
};

/**
 * call next content (pagination)
 * @param isFilter 
 */
const callNextContents = async (isFilter: boolean = false): Promise<boolean> => {
    const pagedList = filterStore.sortList(
        list.totalList,
        dateStore.getDate(),
        {
            sportSection: 'basketball',
            tab: opt.tab,
            date: (item) => {
                return UtilDate.addMillisecond(item.ai_match_time);
            },
            league: (item) => {
                return item.ai_competition_id;
            }
        }
    );
    if ((pagedList.length === list.sortedList.length) && pagedList.length !== 0) {
        if (isFilter) list.sortedList = pagedList;
        opt.isOutOfContent = true;
        return opt.isOutOfContent;
    }
    list.sortedList = await loadSortedContent(isFilter, pagedList);
    opt.isOutOfContent = (pagedList.length === list.sortedList.length);
    return opt.isOutOfContent;
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    scrollStore.setScroll2Top();
    await res();
    scrollStore.register(
        scroll.key,
        async () => {
            const result = await callNextContents();
            await updateLiveRealTime();
            return result;
        }
    );
});

onBeforeUnmount(async () => {
    init();
    scrollStore.onBeforeUnmount(scroll.key);
});
</script>

<style scoped>

</style>