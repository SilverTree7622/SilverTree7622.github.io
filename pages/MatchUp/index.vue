<template>
    <NuxtLayout
        name="matchupcontent"
        :isPending="opt.isPending"
        :sName="'MatchUp'"
        :tab="opt.tab"
        :result="opt.result"
        @clickTab="clickTab"
    >
        <MatchUpStatsMain
            v-if="opt.tab === 'stats'"
            :selectedIdx="statsOpt.selectedIdx"
        />
        <MatchUpNavitalkMain
            v-if="opt.tab === 'navitalk'"
            :result_league="list.sortedLeagueList"
        />
        <MatchUpOddsMain
            v-if="opt.tab === 'odds'"
        />
        <MatchUpLineUpMain
            v-if="opt.tab === 'lineup'"
        />
        <MatchUpH2hMain
            v-if="opt.tab === 'h2h'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();

const opt = reactive({
    isBooting: <boolean> true,
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as string ?? 'stats',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
    },
});

const statsOpt = reactive({
    selectedIdx: <number> 0,
});

const list = reactive({
    sortedLeagueList: <any[]> [],
});

const clickTab = (idx: number) => {
    statsOpt.selectedIdx = idx;
};

watch(
    () => route.fullPath,
    async (p) => {
        opt.tab = route.query['tab'] as string;
        opt.result.league = [];
        opt.isPending = true;
        await res();
    }
);

const chckMatchId = (): string => {
    return route.query['uuid'] as string;
};

const res = async () => {
    const matchid = chckMatchId();
    const res = await useApiFetch(
        'MatchStats',
        { method: 'POST', },
        {
            matchid,
            sports: 'FOOTBALL',
        },
    );
    const data = (res.data as any)['data'] ?? {};
    console.log('res, data: ', res, data);
    opt.isBooting = false;
    opt.isPending = false;
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    await res();

});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
});
</script>

<style scoped>

</style>