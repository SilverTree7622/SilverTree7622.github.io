<template>
    <div class="container-center-horizontal">
        <div class="statchart2 screen w-full">
            <div class="match_-stats_chart2 w-full">
                <div class="frame-432">
                    <MatchUpStatsMatchStatsChart2GraphCircle
                        :title="'Attacks'"
                        :home="config.attacks.home"
                        :away="config.attacks.away"
                        :middleType="'attacks'"
                    />
                    <MatchUpStatsMatchStatsChart2GraphCircle
                        :title="'Dangerous Attack'"
                        :home="config.dangerousAttack.home"
                        :away="config.dangerousAttack.away"
                        :middleType="'dangerous_attack'"
                    />
                    <MatchUpStatsMatchStatsChart2GraphCircle
                        :title="'Ball Possession'"
                        :home="config.ballPossession.home"
                        :away="config.ballPossession.away"
                        :middleType="'ball_possession'"
                    />
                </div>
                <div class="frame-434">
                    <MatchUpStatsMatchStatsChart2Cards
                        :corner="cardConfig.corner.home"
                        :redCard="cardConfig.redCard.home"
                        :yellowCard="cardConfig.yellowCard.home"
                    />
                    <div class="frame-433">
                        <MatchUpStatsMatchStatsChart2GraphBar
                            :title="'Shots on target'"
                            :home="config.shotsOnTarget.home"
                            :away="config.shotsOnTarget.away"
                        />
                        <MatchUpStatsMatchStatsChart2GraphBar
                            :title="'Shots off target / blocked'"
                            :home="config.shotsOffTarget.home"
                            :away="config.shotsOffTarget.away"
                        />
                    </div>
                    <MatchUpStatsMatchStatsChart2Cards
                        :corner="cardConfig.corner.away"
                        :redCard="cardConfig.redCard.away"
                        :yellowCard="cardConfig.yellowCard.away" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const matchUpStore = useMatchUpStore();

type TMatchUpStatsConfig = {
    home: number;
    away: number;
};

const config = reactive({
    attacks: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    dangerousAttack: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    ballPossession: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    shotsOnTarget: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    shotsOffTarget: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
});

const cardConfig = reactive({
    corner: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    redCard: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
    yellowCard: <TMatchUpStatsConfig> {
        home: 0,
        away: 0,
    },
});

onMounted(async () => {
    await nextTick();
    const {
        stats,
    } = matchUpStore.getConfigStats();
    config.attacks.home = (stats.find( item => item.type === 23 ) ?? 0)['home'] ?? 0;
    config.attacks.away = (stats.find( item => item.type === 23 ) ?? 0)['away'] ?? 0;
    config.dangerousAttack.home = (stats.find( item => item.type === 24 ) ?? 0)['home'] ?? 0;
    config.dangerousAttack.away = (stats.find( item => item.type === 24 ) ?? 0)['away'] ?? 0;
    config.ballPossession.home = (stats.find( item => item.type === 25 ) ?? 0)['home'] ?? 0;
    config.ballPossession.away = (stats.find( item => item.type === 25 ) ?? 0)['away'] ?? 0;
    config.shotsOnTarget.home = (stats.find( item => item.type === 21 ) ?? 0)['home'] ?? 0;
    config.shotsOnTarget.away = (stats.find( item => item.type === 21 ) ?? 0)['away'] ?? 0;
    config.shotsOffTarget.home = (stats.find( item => item.type === 22 ) ?? 0)['home'] ?? 0;
    config.shotsOffTarget.away = (stats.find( item => item.type === 22 ) ?? 0)['away'] ?? 0;

    cardConfig.corner.home = (stats.find( item => item.type === 2 ) ?? 0)['home'] ?? 0;
    cardConfig.corner.away = (stats.find( item => item.type === 2 ) ?? 0)['away'] ?? 0;
    cardConfig.redCard.home = (stats.find( item => item.type === 4 ) ?? 0)['home'] ?? 0;
    cardConfig.redCard.away = (stats.find( item => item.type === 4 ) ?? 0)['away'] ?? 0;
    cardConfig.yellowCard.home = (stats.find( item => item.type === 3 ) ?? 0)['home'] ?? 0;
    cardConfig.yellowCard.away = (stats.find( item => item.type === 3 ) ?? 0)['away'] ?? 0;
});
</script>

<style scoped>
@import '@/public/css/matchup/stats/chart/chart2/globals.css';
@import '@/public/css/matchup/stats/chart/chart2/styleguide.css';
@import '@/public/css/matchup/stats/chart/chart2/statchart2.css';
</style>