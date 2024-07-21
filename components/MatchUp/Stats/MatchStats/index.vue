<template>
    <div class="frmu95mobileu95matchup headline screen">
        <CommonHeaderLiveTracker :match_id="matchUpStore.getConfig().match_id" />
        <MatchUpStatsMatchStatsChart1 />
        <MatchUpStatsMatchStatsChart2 />
        <MatchUpStatsMatchStatsChart3 />
        <MatchUpStatsMatchStatsIncidents
            :list="[]"
        />
        <!-- <MatchUpStatsMatchStatsIncidents :list="[]" /> -->
    </div>
</template>

<script setup lang="ts">
const matchUpStore = useMatchUpStore();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped></style>
