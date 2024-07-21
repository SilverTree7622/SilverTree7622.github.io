<template>
    <NuxtLayout
        name="matchupcontent"
        :isPending="opt.isPending"
        :sName="'MatchUp'"
        :tab="opt.tab"
        :result="opt.result"
        :changeTab="changeTab"
        @clickTab="clickTab"
    >
        <MatchUpStatsMain
            v-if="opt.tab === 'stats'"
            ref="$stats"
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
import { GetSportSectionUpperCase } from '~/types/Common/sport';

const matchUpStore = useMatchUpStore();
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

const changeTab = async () => {
    opt.tab = route.query['tab'] as string;
    opt.result.league = [];
    opt.isPending = true;
    await res();
};

const chckMatchId = (): string => {
    return route.query['uuid'] as string;
};

const res = async () => {
    const matchid = chckMatchId();
    const {
        sportSection,
    } = matchUpStore.getConfig();
    const res = await useApiFetch(
        'MatchStats',
        { method: 'POST', },
        {
            matchid,
            sports: GetSportSectionUpperCase(sportSection),
        },
    );
    const data = (res.data as any)['data'] ?? {};
    console.log('res, data: ', res, data);
    matchUpStore.setConfig(sportSection, data['data']);
    opt.isBooting = false;
    opt.isPending = false;
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    await res();

});

onBeforeUnmount(() => {
    matchUpStore.init();
});
</script>

<style scoped>

</style>