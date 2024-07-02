<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :pageIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'football'"
        :tab="opt.tab"
        :result="opt.result"
        :sortedList="list.sortedList"
        :changeTab="changeTab"
        :changeDate="changeDate"
        :toggleByTime="toggleByTime"
        :updateLiveRealTime="updateLiveRealTime"
    >
        <FootBallLiveMain
            v-if="opt.tab === 'live'"
            ref="$liveMain"
            :result_league_list="list.sortedList"
            :onMounted="updateLiveRealTime"
        />
        <FootBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league_list="list.sortedList"
        />
        <FootBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league_list="list.sortedList"
        />
        <FootBallResultMain
            v-if="opt.tab === 'result'"
            :result_league_list="list.sortedList"
        />
        <FootBallLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ECommonSportSectionValue, ECommonSportValue, type TCommonSportNavCode, type TCommonSportSection } from '~/types/Common/sport';
import type { TFootBallSchedule } from "~/types/FootBall/schedule";
import type { TCommonTabTypes } from "~/types/Common/tab";
import UtilDate from '~/utils/date';

const {
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
    tab: <TCommonTabTypes> route.query['tab'] as TCommonTabTypes ?? 'live',
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
    result: {
        nav_code: <TCommonSportNavCode> 'S001',
    },
});

const $liveMain = ref();

const list = reactive({
    // total list
    totalList: <TFootBallSchedule[]> [],
    totalKickOffList: <{ idx: number; match_id: string; ai_kickoff_timestamp: number; }[]> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TFootBallSchedule[]> [],
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
    // await callNextContents(true);
    await updateLiveRealTime();
};

const updateLiveRealTime = async () => {
    // const prevSortedList = [ ...list.sortedList ];
    // const prevSortedListMatchUpList = list.sortedList.map( item => item.match_id );
    // const prevSortedListHomeScoreList = list.sortedList.map( item => item.ai_home_scores[0] );
    // const prevSortedListAwayScoreList = list.sortedList.map( item => item.ai_away_scores[0] );
    // const prevSortedListMatchStatusList = list.sortedList.map( item => item.ai_status_id );
    // const prevSortedKickOffList = [ ...list.sortedKickOffList ];
    
    // list.totalList = liveIntervalLoadingStore.updateLiveRealTime(list.totalList);
    // list.totalKickOffList = liveIntervalLoadingStore.updateLiveKickOff(list.totalList);
    // list.sortedList = liveIntervalLoadingStore.updateLiveRealTime(list.sortedList);
    // list.sortedKickOffList = liveIntervalLoadingStore.updateLiveKickOff(list.sortedList);
    
    // await callNextContents(true);

    // const isListEqual = UtilObj.compareEquals(prevSortedList, list.sortedList);
    // // compare matchup id list
    // const newSortedListMatchUpList = list.sortedList.map( item => item.match_id );
    // const isMatchUpListEqual = UtilArray.compareList(
    //     prevSortedListMatchUpList, newSortedListMatchUpList
    // );
    // const newSortedListScore1List = list.sortedList.map( item => item.ai_home_scores[0] );
    // const isScore1ListEqual = UtilArray.compareList(
    //     prevSortedListHomeScoreList, newSortedListScore1List
    // );
    // const newSortedListScore2List = list.sortedList.map( item => item.ai_away_scores[0] );
    // const isScore2ListEqual = UtilArray.compareList(
    //     prevSortedListAwayScoreList, newSortedListScore2List
    // );
    // const isTimeListEqual = UtilArray.compareList(
    //     prevSortedKickOffList, list.sortedKickOffList
    // );

    // // console.log('prevSortedKickOffList, list.sortedKickOffList: ', prevSortedKickOffList, list.sortedKickOffList);
    // // if (
    // //     isListEqual && isMatchUpListEqual && isScore1ListEqual && isScore2ListEqual && isTimeListEqual
    // // ) {
    // //     console.log(`nothing changed`);
    // //     return;
    // // }

    // // 각 list에 있는 item의 component에 update 및 update에 필요한 값 넘겨주기
    // if (!$liveMain.value) return;
    // list.sortedList.map((item, idx) => {
    //     const filteredKickOffList = list.sortedKickOffList.find((filterItem) => {
    //         return filterItem.idx === idx;
    //     });
    //     const prevFilteredKickOffList = prevSortedKickOffList.find((filterItem) => {
    //         return filterItem.idx === idx;
    //     }) ?? 0;
    //     const ai_kickoff_timestamp = filteredKickOffList ?
    //         filteredKickOffList['ai_kickoff_timestamp'] :
    //         prevFilteredKickOffList['ai_kickoff_timestamp']
    //     ;
    //     const config = {};
    //     if (prevSortedListAwayScoreList[idx] !== item.ai_away_scores[0]) {
    //         config['ai_away_scores'] = item.ai_away_scores;
    //     }
    //     if (prevSortedListHomeScoreList[idx] !== item.ai_home_scores[0]) {
    //         config['ai_home_scores'] = item.ai_home_scores;
    //     }
    //     config['ai_kickoff_timestamp'] = ai_kickoff_timestamp;
    //     config['ai_match_status'] = item.ai_status_id;
    //     config['match_id'] = item.match_id;
    //     // console.log('config: ', config);
    //     $liveMain.value.update(idx, config);
    // });
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
        'football',
        opt.tab,
        {
            sid: ECommonSportValue[ ECommonSportSectionValue['football'] ],
            fromdate: isToday ? 0 : dateStore.getFromDate(),
        },
    );
    console.log('res from page index: ', res);
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
    // const {
    //     resTotalList,
    //     resTotalKickOffList,
    //     resSortedList,
    //     resSortedKickOffList,
    // } = await sportStore.res(
    //     list.totalList,
    //     list.totalKickOffList,
    //     list.sortedList,
    //     list.sortedKickOffList,
    //     $liveMain,
    //     'football',
    //     opt.tab,
    //     // loadSortedContent,
    //     callNextContents,
    //     () => {
    //         opt.isPending = false;
    //         opt.isBooting = false;
    //     }
    // );
    // list.totalList = resTotalList;
    // list.totalKickOffList = resTotalKickOffList;
    // list.sortedList = resSortedList;
    // list.sortedKickOffList = resSortedKickOffList;
};

/**
 * get paged list from total list (pagination)
 * @param isFilter 
 * @param list 
 */
const loadSortedContent = async (isFilter: boolean, list: any[]) => {
    if (list.length === 0) return list;
    if (isFilter) {
        console.log('page.idx from loadSortedContent: ', page.idx);
        return list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    }
    if (list.length < page.idx) {
        return list;
    }
    if (page.idx !== 0) page.isPending = true;
    console.log('add page idx');
    page.idx++;
    const slicedList = list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    page.isPending = false;
    return slicedList;
    // const {
    //     loadPageIdx,
    //     loadPageIsPending,
    //     loadSortedList,
    // } = await sportStore.loadSortedContent(
    //     page.idx,
    //     page.isPending,
    //     isFilter,
    //     list,
    // );
    // page.idx = loadPageIdx;
    // page.isPending = loadPageIsPending;

    // return {
    //     loadPageIdx,
    //     loadPageIsPending,
    //     loadSortedList,
    // };
};

/**
 * call next content (pagination)
 * @param isFilter 
 * @returns { Promise<boolean> } return is content is done or not
 */
const callNextContents = async (isFilter: boolean = false): Promise<boolean> => {
    const pagedList = filterStore.sortList(
        list.totalList,
        dateStore.getDate(),
        {
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
    // const {
    //     pageIdx,
    //     pageIsPending,
    //     isOutOfContent,
    //     sortedList,
    // } = await sportStore.callNextContents(
    //     page.idx,
    //     page.isPending,
    //     opt.isOutOfContent,
    //     list.totalList,
    //     list.sortedList,
    //     opt.tab,
    //     loadSortedContent,
    //     isFilter,
    // );
    // page.idx = pageIdx;
    // page.isPending = pageIsPending;
    // opt.isOutOfContent = isOutOfContent;
    // list.sortedList = sortedList;
    // return opt.isOutOfContent;
};

onMounted(async () => {
    opt.tab = route.query['tab'] as TCommonTabTypes ?? 'live';
    opt.isPending = true;
    await nextTick();
    scrollStore.setScroll2Top();
    await res();
    // const {
    //     totalList,
    //     totalKickOffList,
    //     sortedList,
    //     sortedKickOffList,
    // } = await sportStore.onMounted(
    //     list.totalList,
    //     list.totalKickOffList,
    //     list.sortedList,
    //     list.sortedKickOffList,
    //     $liveMain,
    //     'football',
    //     opt.tab,
    //     // loadSortedContent,
    //     callNextContents,
    //     () => {
    //         opt.isPending = false;
    //         opt.isBooting = false;
    //     }
    // );
    // list.totalList = totalList;
    // list.totalKickOffList = totalKickOffList;
    // list.sortedList = sortedList;
    // list.sortedKickOffList = sortedKickOffList;
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