<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in list.sortedList">
                <CommonContentLeagueMatchUp
                    :idx="idx"
                    :sportSection="'basketball'"
                    :league="league"
                    :type="leagueStore.getMatchUpType(league)"
                    :hasLeagueTag="league.hasLeagueTag ?? false"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonSchedule } from '~/types/Common/schedule';
import type { TLeagueMatchUpRes } from '~/types/league';
import UtilDate from '~/utils/date';

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
const leagueStore = useLeagueStore();
const filterStore = useFilterStore();
const dateStore = useDateStore();
const scrollStore = useScrollStore();
const route = useRoute();

const scroll = reactive({
    key: <string> 'tab',
});

const opt = reactive({
    isBooting: <boolean> true,
    isPending: <boolean> true,
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
    result: {
        nav_code: 'S003',
    },
});

const list = reactive({
    // total list
    totalList: <TLeagueMatchUpRes['matchup']> [],
    totalKickOffList: <{ idx: number; match_id: string; ai_kickoff_timestamp: number; }[]> [],
    // paged list
    pagedList: <TLeagueMatchUpRes['matchup']> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TLeagueMatchUpRes['matchup']> [],
});

const page = reactive({
    isPending: <boolean> false,
    idx: <number> 0,
});

const chckIsLast = (idx: number) => {
    return idx === (list.sortedList.length - 1);
};

const chckIsLeagueId = () => {
    return route.query['id'] as string;
};

const chckIsSeasonId = () => {
    return route.query['season'] as string;
};

/**
 * res from first page entrance
 */
 const res = async () => {
    await leagueStore.onMountedMatchUp(
        chckIsSeasonId(),
        chckIsLeagueId(),
        () => {
            
        }
    );
    const {
        list: matchUpList,
    } = leagueStore.getMatchUpConfig();
    list.totalList = leagueStore.filterMatchUp(matchUpList);
    try {
        await callNextContents();
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
    list.pagedList = list.totalList;
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
            return result;
        }
    );
});

</script>

<style scoped>

.contents_-football {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 10px 8px;
  position: relative;
  width: 100%;
}

</style>