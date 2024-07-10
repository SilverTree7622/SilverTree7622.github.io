<template>
    <NuxtLayout
        name="leaguecontent"
        :isPending="opt.isPending"
        :contentIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'League'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <LeagueMatchUpMain
            v-if="opt.tab == 'matchup'"
            :result_league="list.sortedLeagueList"
        />
        <LeagueTableMain
            v-if="opt.tab == 'table'"
        />
        <LeagueOddsMain
            v-if="opt.tab == 'odds'"
            :result_league="list.sortedLeagueList"
        />
        <LeagueResultMain
            v-if="opt.tab == 'result'"
            :result_league="list.sortedLeagueList"
        />
        <LeaguePlayersMain
            v-if="opt.tab == 'players'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
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
    tab: <string> route.query['tab'] as string ?? 'matchup',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
    },
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
});

const list = reactive({
    sortedLeagueList: <any[]> [],
});

const page = reactive({
    isPending: <boolean> false,
    idx: <number> 0,
});

const setTabException = () => {
    if (opt.tab === 'table' || opt.tab === 'players') {
        opt.isOutOfContent = true;
        scrollStore.setIsOutOfContent(scroll.key, true);
    }
};

// tab changed event
watch(
    () => route.fullPath,
    async (p) => {
        opt.tab = route.query['tab'] as string;
        opt.result.league = [];
        opt.isBooting = true;
        opt.isPending = true;
        init();
        await res();
    }
);

// date changed event
watch(
    () => dateStore.getDate(),
    async (p) => {
        if (opt.isBooting) return;
        init();
        opt.isPending = true;
        await callNextContents();
        opt.isPending = false;
    }
);

// ByTime toggled event
watch(
    () => filterStore.getTimeIsToggled(),
    async (p) => {
        await callNextContents(true);
    }
);

const init = () => {
    filterStore.init();
    scrollStore.setScroll2Top();
    page.idx = 0;
    list.sortedLeagueList = [];
    scrollStore.setIsOutOfContent(scroll.key, false);
    opt.isOutOfContent = false;
};

const res = async () => {
    setTimeout(async () => {
        // tmp for dummies
        const getTime = (day: number) => {
            const tmpDate = new Date(new Date().getTime() - (day * ONE_DAY_MILLISECOND));
            tmpDate.setTime(tmpDate.getTime() + (Math.random() * 5 * 60 * 1000));
            return tmpDate;
        };
        opt.result.league.push(
            { lg_name: 'dummy_lg_name1', date: getTime(0) },
            { lg_name: 'dummy_lg_name1', date: getTime(0) },
            { lg_name: 'dummy_lg_name1', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name2', date: getTime(0) },
            { lg_name: 'dummy_lg_name2', date: getTime(0) },
            { lg_name: 'dummy_lg_name2', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name3', date: getTime(0) },
            { lg_name: 'dummy_lg_name3', date: getTime(0) },
            { lg_name: 'dummy_lg_name3', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name4', date: getTime(0) },
            { lg_name: 'dummy_lg_name4', date: getTime(0) },
            { lg_name: 'dummy_lg_name4', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name5', date: getTime(0) },
            { lg_name: 'dummy_lg_name5', date: getTime(0) },
            { lg_name: 'dummy_lg_name5', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name6', date: getTime(0) },
            { lg_name: 'dummy_lg_name6', date: getTime(0) },
            { lg_name: 'dummy_lg_name6', date: getTime(0) },

            { lg_name: 'dummy_lg_name7', date: getTime(1) },
            { lg_name: 'dummy_lg_name7', date: getTime(1) },
            { lg_name: 'dummy_lg_name7', date: getTime(1) },
            
            { lg_name: 'dummy_lg_name8', date: getTime(1) },
            { lg_name: 'dummy_lg_name8', date: getTime(1) },
            { lg_name: 'dummy_lg_name8', date: getTime(1) },
        );
        await callNextContents();
        opt.isPending = false;
        opt.isBooting = false;
        setTabException();
    }, Math.random() * 1 * 1000);
};

const loadRes = async (isFilter: boolean, list: any[]) => {
    if (list.length === 0) return list;
    if (isFilter) {
        return list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    }
    if (list.length < page.idx) {
        return list;
    }
    if (page.idx !== 0) page.isPending = true;
    page.idx++;
    return new Promise((res, rej) => {
        setTimeout(() => {
            const pagedList = list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
            res(pagedList);
            page.isPending = false;
        }, (Math.random() + 1) * 1 * 1000);
    }).then((itemList: any) => {
        return itemList;
    });
};

const callNextContents = async (isFilter: boolean = false): Promise<boolean> => {
    const pagedList = filterStore.sortList(opt.result.league, dateStore.getDate());
    if ((pagedList.length === list.sortedLeagueList.length) && pagedList.length !== 0) {
        if (isFilter) list.sortedLeagueList = pagedList;
        opt.isOutOfContent = true;
        return opt.isOutOfContent;
    }
    list.sortedLeagueList = await loadRes(isFilter, pagedList);
    opt.isOutOfContent = (pagedList.length === list.sortedLeagueList.length);
    return opt.isOutOfContent;
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    scrollStore.setScroll2Top();
    scrollStore.register(scroll.key, callNextContents);
    await res();
});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
    init();
    filterStore.init();
    scrollStore.onBeforeUnmount(scroll.key);
});

</script>

<style scoped>

</style>