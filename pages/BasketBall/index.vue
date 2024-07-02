<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :pageIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'BasketBall'"
        :tab="opt.tab"
        :result="opt.result"
        :changeTab="changeTab"
        :changeDate="changeDate"
        :toggleByTime="toggleByTime"
    >
        <BasketBallLiveMain
            v-if="opt.tab === 'live'"
            :result_league_list="list.sortedList"
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
import type { TBasketBallFixtures } from '~/types/BasketBall/fixtures';
import { ECommonSportValue } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
const filterStore = useFilterStore();
const dateStore = useDateStore();
const scrollStore = useScrollStore();
const cacheStore = useCacheStore();
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

const list = reactive({
    // total list
    totalList: <TBasketBallFixtures[]> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TBasketBallFixtures[]> [],
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
    opt.tab = route.query['tab'] as TCommonTabTypes;
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
    await callNextContents();
    opt.isPending = false;
};

const toggleByTime = async () => {
    await callNextContents(true);
};

/**
 * res from first page entrance
 */
const res = async () => {
    const res = await cacheStore.onMountedTab(
        'basketball', opt.tab, 'fixtures',
        {
            sid: ECommonSportValue['BasketBall'],
            fromdate: dateStore.getDate().getTime(),
        }
    );
    list.totalList = res['data']['Body'];
    await callNextContents();
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
    const isWholeDate = (opt.tab === 'odds' || opt.tab === 'league');
    const isResult = (opt.tab === 'result');
    const pagedList = filterStore.sortList(
        list.totalList,
        dateStore.getDate(),
        {
            isWholeDate,
            isResult,
            date: (item) => {
                return new Date(item.Fixture.StartDate);
            },
            league: (item) => {
                return item.Fixture.League.Id;
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
    scrollStore.register(scroll.key, callNextContents);
});

onBeforeUnmount(async () => {
    init();
    scrollStore.onBeforeUnmount(scroll.key);
    cacheStore.onBeforeUnmountTab();
});
</script>

<style scoped>

</style>