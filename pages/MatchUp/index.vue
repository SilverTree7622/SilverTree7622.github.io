<template>
    <NuxtLayout
        name="matchupcontent"
        :isPending="opt.isPending"
        :sName="'MatchUp'"
        :tab="opt.tab"
        :result="'dummy'"
        :changeTab="changeTab"
        @clickTab="clickTab"
    >
        <MatchUpStatsMain
            v-if="!opt.isPending && opt.tab === 'stats'"
            ref="$stats"
            :selectedIdx="statsOpt.selectedIdx"
        />
        <MatchUpNavitalkMain
            v-if="!opt.isPending && opt.tab === 'navitalk'"
            :result_league="list.sortedLeagueList"
        />
        <MatchUpOddsMain
            v-if="!opt.isPending && opt.tab === 'odds'"
        />
        <MatchUpLineUpMain
            v-if="!opt.isPending && opt.tab === 'lineup'"
        />
        <MatchUpH2hMain
            v-if="!opt.isPending && opt.tab === 'h2h' && matchUpStore.getConfigH2h().isExist"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { GetSportSectionUpperCase, type TCommonSportSection } from '~/types/Common/sport';
import UtilObj from '~/utils/obj';

const matchUpStore = useMatchUpStore();
const route = useRoute();

const opt = reactive({
    isBooting: <boolean> true,
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as string ?? 'stats',
    sportSection: <TCommonSportSection> route.query['sport'] as TCommonSportSection ?? 'football',
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
};

const chckMatchId = (): string => {
    return route.query['uuid'] as string;
};

const chckLineUpInfo = async () => {
    const matchid = chckMatchId();
    const {
        sportSection,
    } = matchUpStore.getConfig();
    const lineUpRes = await useApiFetch(
        'MatchLineUp',
        { method: 'POST', },
        {
            matchid,
            sports: GetSportSectionUpperCase(sportSection),
        },
    );
    if ((lineUpRes.data as any)['data']) {
        const lineUpdata = (lineUpRes.data as any)['data']['LineUp'] ?? {};
        if (!UtilObj.chckIsEmpty(lineUpdata)) {
            matchUpStore.setIsLineUpExist(true);
            matchUpStore.setConfigLineUp(lineUpdata);
            return;
        }
    }
    matchUpStore.setIsLineUpExist(false);
    if (opt.tab !== 'lineup') return;
    navigateTo(`/MatchUp?tab=stats&uuid=${ matchid }&sport=${ opt.sportSection }`);
};

const res = async () => {
    const matchid = chckMatchId();
    let path = 'MatchStats';
    if (opt.tab === 'h2h') {
        path = 'MatchH2H';
    }
    const statsRes = await useApiFetch(
        path,
        { method: 'POST', },
        {
            matchid,
            sports: GetSportSectionUpperCase(opt.sportSection),
        }
    );
    const data = (statsRes.data as any)['data'] ?? {};
    matchUpStore.setConfig(opt.sportSection, data['data']);
    matchUpStore.setConfigStats(data['overview']);
    matchUpStore.setConfigH2h(data['H2H']);
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    await chckLineUpInfo();
    await res();
    opt.isBooting = false;
    opt.isPending = false;
});

onBeforeUnmount(() => {
    matchUpStore.init();
});
</script>

<style scoped>

</style>