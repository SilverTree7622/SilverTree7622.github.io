<template>
    <div class="frmu95mobileu95matchup headline screen">
        <CommonHeaderLiveTracker :match_id="matchUpStore.getConfig().match_id" />
        <MatchUpStatsMatchStatsChart1 />
        <MatchUpStatsMatchStatsChart2 v-if="chckIsVisible()" />
        <!-- <MatchUpStatsMatchStatsChart3 /> -->
        <MatchUpStatsMatchStatsIncidents />
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';

const matchUpStore = useMatchUpStore();

const opt = reactive({
    isPending: <boolean> true,
    isIncidentsExist: <boolean> false,
    sportSection: <TCommonSportSection> 'football',
});

const chckIsVisible = (): boolean => {
    return !opt.isPending && opt.isIncidentsExist;
};

onMounted(async () => {
    await nextTick();
    const {
        sportSection,
    } = matchUpStore.getConfig();
    const {
        incidents,
    } = matchUpStore.getConfigStats();
    opt.sportSection = sportSection;
    opt.isIncidentsExist = !!incidents.length;
    opt.isPending = false;
});

onBeforeUnmount(() => {
    opt.isIncidentsExist = false;
    opt.isPending = true;
});
</script>

<style scoped></style>
