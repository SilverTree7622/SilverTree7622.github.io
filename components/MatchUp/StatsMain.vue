<template>
    <div class="px-2">
        <MatchUpStatsMatchStats />
        <MatchUpStatsLastMatches />
        <!-- <MatchUpStatsTopPlayers /> -->
        <MatchUpStatsOdds />
        
        <MatchUpStatsMatchStatsResult
            v-if="!matchUpStore.chckIsLive()"
            :list="[]"
        />
    </div>
</template>

<script setup lang="ts">
const matchUpStore = useMatchUpStore();

const props = defineProps<{
    selectedIdx: number;
}>();


const update = () => {

};

defineExpose({
    update,
});
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>