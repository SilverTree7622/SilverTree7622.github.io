<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :contentIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'baseball'"
        :tab="opt.tab"
        :result="opt.result"
        :sortedList="list.sortedList"
        :pagedList="list.pagedList"
        :changeTab="changeTab"
        :changeDate="changeDate"
        :toggleByTime="toggleByTime"
        :updateLiveRealTime="updateLiveRealTime"
    >
        <BaseBallLiveMain
            v-if="opt.tab === 'live'"
            ref="$liveMain"
            :result_league_list="list.sortedList"
            :onMounted="updateLiveRealTime"
        />
        <BaseBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league_list="list.sortedList"
        />
        <BaseBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league_list="list.sortedList"
        />
        <BaseBallResultMain
            v-if="opt.tab === 'result'"
            :result_league_list="list.sortedList"
        />
        <BaseBallLeagueMain
            v-if="opt.tab === 'league'"
            :list="[ { name: 'context1' }, { name: 'context2' }, { name: 'context3' } ]"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ECommonSportSectionValue, ECommonSportValue } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';
import type { TBaseBallSchedule } from '~/types/BaseBall/schedule';
import UtilDate from '~/utils/date';
import UtilObj from '~/utils/obj';
import UtilArray from '~/utils/array';

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
const filterStore = useFilterStore();
const dateStore = useDateStore();
const scrollStore = useScrollStore();
const cacheStore = useCacheStore();
const liveIntervalLoadingStore = useLiveIntervalLoadingStore();
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
        nav_code: 'S004',
    },
});

const $liveMain = ref();

const list = reactive({
    // total list
    totalList: <TBaseBallSchedule[]> [],
    totalKickOffList: <{ idx: number; match_id: string; ai_kickoff_timestamp: number; }[]> [],
    // paged list
    pagedList: <TBaseBallSchedule[]> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TBaseBallSchedule[]> [],
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
    if (opt.tab === 'live') {
        await callNextContents();
    } else {
        await res();
    }
    opt.isPending = false;
};

const toggleByTime = async () => {
    await callNextContents(true);
};

const updateLiveRealTime = async () => {
    const prevSortedList = [ ...list.sortedList ];
    const prevSortedListMatchUpList = list.sortedList.map( item => item.match_id );
    const prevSortedListHomeScoreList = list.sortedList.map( item => item.ai_scores['ft'][0] );
    const prevSortedListAwayScoreList = list.sortedList.map( item => item.ai_scores['ft'][1] );
    const prevSortedListMatchStatusList = list.sortedList.map( item => item.ai_status_id );
    const prevSortedKickOffList = [ ...list.sortedKickOffList ];
    
    list.totalList = liveIntervalLoadingStore.updateLiveRealTime(list.totalList);
    list.totalKickOffList = liveIntervalLoadingStore.updateLiveKickOff(list.totalList);
    list.sortedList = liveIntervalLoadingStore.updateLiveRealTime(list.sortedList);
    list.sortedKickOffList = liveIntervalLoadingStore.updateLiveKickOff(list.sortedList);
    
    await callNextContents(true);

    const isListEqual = UtilObj.compareEquals(prevSortedList, list.sortedList);
    // compare matchup id list
    const newSortedListMatchUpList = list.sortedList.map( item => item.match_id );
    const isMatchUpListEqual = UtilArray.compareList(
        prevSortedListMatchUpList, newSortedListMatchUpList
    );
    const newSortedListScore1List = list.sortedList.map( item => item.ai_scores['ft'][0] );
    const isScore1ListEqual = UtilArray.compareList(
        prevSortedListHomeScoreList, newSortedListScore1List
    );
    const newSortedListScore2List = list.sortedList.map( item => item.ai_scores['ft'][1] );
    const isScore2ListEqual = UtilArray.compareList(
        prevSortedListAwayScoreList, newSortedListScore2List
    );
    const isTimeListEqual = UtilArray.compareList(
        prevSortedKickOffList, list.sortedKickOffList
    );

    // console.log('prevSortedKickOffList, list.sortedKickOffList: ', prevSortedKickOffList, list.sortedKickOffList);
    // if (
    //     isListEqual && isMatchUpListEqual && isScore1ListEqual && isScore2ListEqual && isTimeListEqual
    // ) {
    //     console.log(`nothing changed`);
    //     return;
    // }

    // 각 list에 있는 item의 component에 update 및 update에 필요한 값 넘겨주기
    if (!$liveMain.value) return;
    list.sortedList.map((item, idx) => {
        const filteredKickOffList = list.sortedKickOffList.find((filterItem) => {
            return filterItem.idx === idx;
        });
        const prevFilteredKickOffList = prevSortedKickOffList.find((filterItem) => {
            return filterItem.idx === idx;
        }) ?? 0;
        const ai_kickoff_timestamp = filteredKickOffList ?
            filteredKickOffList['ai_kickoff_timestamp'] :
            prevFilteredKickOffList['ai_kickoff_timestamp']
        ;
        const config = {};
        config['ai_scores']['ft'] = item.ai_scores['ft'];
        config['ai_kickoff_timestamp'] = ai_kickoff_timestamp;
        config['ai_match_status'] = item.ai_status_id;
        config['match_id'] = item.match_id;
        // console.log('config: ', config);
        $liveMain.value.update(idx, config);
    });
};

/**
 * res from first page entrance
 */
const res = async () => {
    const isToday = UtilDate.chckDateIsToday(
        UtilDate.addMillisecond(dateStore.getFromDate())
    );
    const res = await cacheStore.onMountedTab(
        'baseball',
        opt.tab,
        {
            sid: ECommonSportValue[ ECommonSportSectionValue['baseball'] ],
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
    list.pagedList = filterStore.sortList(
        list.totalList,
        dateStore.getDate(),
        {
            sportSection: 'baseball',
            tab: opt.tab,
            date: (item) => {
                return UtilDate.addMillisecond(item.ai_match_time);
            },
            league: (item) => {
                return item.ai_competition_id;
            }
        }
    );
    if ((list.pagedList.length === list.sortedList.length) && list.pagedList.length !== 0) {
        if (isFilter) list.sortedList = list.pagedList;
        opt.isOutOfContent = true;
        return opt.isOutOfContent;
    }
    list.sortedList = await loadSortedContent(isFilter, list.pagedList);
    opt.isOutOfContent = (list.pagedList.length === list.sortedList.length);
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
    cacheStore.onBeforeUnmountTab();
});
</script>

<style scoped>

</style>