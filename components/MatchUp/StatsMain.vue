<template>
    <div class="bg-white">
        <MatchUpStatsMatchStats class="bg-white mb-1" />
        <MatchUpH2h :isLastMatches="true" :name="'matchup-lastmatches'" class="mb-1" />
        <!-- <MatchUpStatsTopPlayers /> -->
        <MatchUpStatsOdds />
        
        <!-- only after live is over statistics -->
        <MatchUpStatsMatchStatsResult
            v-if="!matchUpStore.chckIsLive()"
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