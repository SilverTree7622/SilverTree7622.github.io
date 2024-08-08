<template>
    <div class="frmu95mobileu95matchup headline screen">
        <CommonHeaderLiveTracker
            class="rounded-sm my-2 px-2"
            :match_id="matchUpStore.getConfig().match_id"
        />
        <MatchUpStatsMatchStatsHeader
            v-if="matchUpStore.getConfigStats().isExist"
            :home="getTeam('home')"
            :away="getTeam('away')"
        >
            <MatchUpStatsMatchStatsChart1 class="mb-2 px-2" />
            <MatchUpStatsMatchStatsChart2 v-if="chckIsVisible()" class="rounded mb-2 px-2" />
            <!-- <MatchUpStatsMatchStatsChart3 /> -->
            <MatchUpStatsMatchStatsIncidents
                v-if="chckIncidentList()"
                :list="getIncidentList()"
                class="rounded mb-2 px-2"
            />
        </MatchUpStatsMatchStatsHeader>
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TMatchUpStatsSport } from '~/types/stats';

const {
    MATCH_UP_HOME_STATS_INCIDENT_MIN_LENGTH,
} = useRuntimeConfig().public.CONSTANTS;
const matchUpStore = useMatchUpStore();

const opt = reactive({
    isPending: <boolean> true,
    isInfoExist: <boolean> false,
    sportSection: <TCommonSportSection> 'football',
});

const getTeam = (prefix: TContentStoreHomeAwayPrefix): string => {
    const {
        homeName, awayName,
    } = matchUpStore.getConfig();
    if (prefix === 'home') return homeName;
    if (prefix === 'away') return awayName;
    return homeName;
};

const chckIsVisible = (): boolean => {
    return !opt.isPending && opt.isInfoExist;
};

const chckIncidentList = (): boolean => {
    const list = getIncidentList();
    return (list.length > MATCH_UP_HOME_STATS_INCIDENT_MIN_LENGTH);
};

const getIncidentList = (): TMatchUpStatsSport['incidents']  => {
    return matchUpStore.getConfigStats().incidents.sort((a, b) => b.time - a.time );
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    const {
        sportSection,
    } = matchUpStore.getConfig();
    const {
        incidents,
    } = matchUpStore.getConfigStats();
    opt.sportSection = sportSection;
    opt.isInfoExist = !!incidents.length;
    opt.isPending = false;
});

onBeforeUnmount(() => {
    opt.isInfoExist = false;
});
</script>

<style scoped></style>
