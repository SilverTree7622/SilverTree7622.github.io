<template>
    <div :class="getTopClassViaPosition(props.item.position)">
        <template v-if="props.item.position === 0">
            {{ getNeutral() }}
        </template>
        <div v-else :class="getSubClassViaPosition(props.item.position)">
            <div v-if="props.item.position === 1" class="text caption">
                {{ `${ props.item.time }’` }}
            </div>
            <MatchUpStatsMatchStatsIncidentsTypeGoal
                v-if="props.item.type === 1"
                :goalPlayer="props.item.player_id && props.item.player_name ? props.item.player_name : ''"
                :assistPlayer1="props.item.assist1_id && props.item.assist1_name ? props.item.assist1_name : ''"
                :assistPlayer2="props.item.assist2_id && props.item.assist2_name ? props.item.assist2_name : ''"
                :homeScore="props.item.home_score ? props.item.home_score : 0"
                :awayScore="props.item.away_score ? props.item.away_score : 0"
            />
            <MatchUpStatsMatchStatsIncidentsTypeSwitch
                v-if="props.item.type === 9"
                :in="props.item.in_player_id && props.item.in_player_name ? props.item.in_player_name : ''"
                :out="props.item.out_player_id && props.item.out_player_name ? props.item.out_player_name : ''"
            />
            <MatchUpStatsMatchStatsIncidentsTypeCard
                v-if="props.item.type === 3 || props.item.type === 4"
                :position="props.item.position"
                :type="props.item.type"
                :player="props.item.player_name ?? ''"
            />
            <div v-if="props.item.position === 2" class="text-2 caption">
                {{ `${ props.item.time }’` }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TMatchUpStoreStatsIncident } from '~/types/matchUp';
import { TMatchUpStatisticsNeutralFootball } from '~/types/FootBall/statistics'

const props = defineProps<{
    idx: number;
    item: TMatchUpStoreStatsIncident;
    list: TMatchUpStoreStatsIncident[];
}>();

const matchUpStore = useMatchUpStore();

const getTopClassViaPosition = (position: number): string => {
    if (position === 0) {
        return 'ft-0-2 py-2';
    }
    return 'frame-4';
};

const getSubClassViaPosition = (position: number): string => {
    if (position === 1) {
        return 'flex-row';
    }
    return 'flex-row-1 flex-row-13';
};

const getNeutral = (): string => {
    const prefix = TMatchUpStatisticsNeutralFootball[ props.item.type ];
    const homeScore = matchUpStore.getIncidentScore(props.idx, 'home', props.list);
    const awayScore = matchUpStore.getIncidentScore(props.idx, 'away', props.list);
    return `${ prefix } ${ homeScore } - ${ awayScore }`;
};

onMounted(async () => {
    await nextTick();
    if (props.item.type === 3 || props.item.type === 4) {
        console.log('props.item: ', props.item);
    }
});
</script>

<style scoped>

@import '@/public/css/matchup/stats/incidents/globals.css';
@import '@/public/css/matchup/stats/incidents/styleguide.css';
@import '@/public/css/matchup/stats/incidents/tmpu95incidentu95list.css';


.div-2 {
    color: #000;
    text-align: center;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    align-self: center;
    margin-top: 5px;
    font: 600 14px Pretendard, sans-serif;
}

.div-3 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 3px 0;
}

.div-4 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-15 {
    color: #626262;
    text-align: right;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-16 {
    display: flex;
    margin-top: 9px;
    gap: 4px;
    padding: 2px 80px;
}

</style>