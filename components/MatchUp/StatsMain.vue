<template>
    <div class="px-2">
        <MatchUpStatsMatchStats />
        <MatchUpH2h :isLastMatches="true" :name="'matchup-lastmatches'"/>
        <!-- <MatchUpStatsTopPlayers /> -->
        <MatchUpStatsOdds />
        
        <!-- only after live is over statistics -->
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

const setPosition2Selected = () => {

};

</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>