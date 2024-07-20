<template>
    <div class="px-2">
        <MatchUpStatsMatchStats v-if="matchUpStore.chckIsLive() && props.selectedIdx === 0" />
        <MatchUpStatsLastMatches v-if="matchUpStore.chckIsLive() && props.selectedIdx === 1" />
        <MatchUpStatsTopPlayers v-if="matchUpStore.chckIsLive() && props.selectedIdx === 2" />
        <MatchUpStatsOdds v-if="matchUpStore.chckIsLive() && props.selectedIdx === 3" />
        
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