<template>
    <div class="container-center-horizontal">
        <div class="statchart2 screen">
            <div class="match_-stats_chart2">
                <div class="frame-432">
                    <div class="frame-440">
                        <div class="frame-container-1 frame-container-4">
                            <div class="frame-44 headline3">
                                <div class="number">94</div>
                                <div class="number-1">68</div>
                            </div>
                            <img class="frame-4" src="/img/frame-447@2x.png" alt="Frame 447" />
                        </div>
                        <div class="frame-448">
                            <div class="attacks body">Attacks</div>
                        </div>
                    </div>
                    <div class="frame-439">
                        <div class="frame-container-2 frame-container-4">
                            <div class="frame-444">
                                <div class="text-2 headline3">%</div>
                            </div>
                            <div class="frame-442 headline3">
                                <div class="number-3">52</div>
                                <div class="number-1">48</div>
                            </div>
                        </div>
                        <div class="dangerous-attack body">Dangerous Attack</div>
                    </div>
                    <div class="frame-441">
                        <div class="frame-container-3 frame-container-4">
                            <img class="frame-4" src="/img/frame-450@2x.png" alt="Frame 450" />
                            <div class="frame-44 headline3">
                                <div class="number">63</div>
                                <div class="number-1">37</div>
                            </div>
                        </div>
                        <div class="frame-452">
                            <div class="surname body">Ball Possession</div>
                        </div>
                    </div>
                </div>
                <div class="frame-434">
                    <div class="frame-431">
                        <div class="frame-container">
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-cornerkick@2x.png" alt="Btn_CornerKick" />
                                <div class="number-2 caption">4</div>
                            </div>
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-redcard@2x.png" alt="Btn_RedCard" />
                                <div class="number-2 caption">0</div>
                            </div>
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                                <div class="number-2 caption">3</div>
                            </div>
                        </div>
                    </div>
                    <div class="frame-433">
                        <div class="frame-427">
                            <p class="shots-off-target-blocked body">Shots off target / blocked</p>
                            <div class="flex-row flex caption">
                                <div class="number-4">14</div>
                                <img class="vector" src="/img/vector@2x.png" alt="Vector" />
                                <img class="vector-1" src="/img/vector-1@2x.png" alt="Vector" />
                                <div class="number-5">9</div>
                            </div>
                        </div>
                        <div class="frame-426">
                            <div class="number-6 caption">4</div>
                            <div class="flex-col flex">
                                <div class="shots-on-target body">Shots on target</div>
                                <div class="vector-container">
                                    <img class="vector-2" src="/img/vector-3@2x.png" alt="Vector" />
                                    <img class="vector-3" src="/img/vector-2@2x.png" alt="Vector" />
                                </div>
                            </div>
                            <div class="number-7 caption">2</div>
                        </div>
                    </div>
                    <div class="frame-435">
                        <div class="frame-container">
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-cornerkick@2x.png" alt="Btn_CornerKick" />
                                <div class="number-2 caption">4</div>
                            </div>
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-redcard@2x.png" alt="Btn_RedCard" />
                                <div class="number-2 caption">0</div>
                            </div>
                            <div class="frame-4-1">
                                <img class="btn" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                                <div class="number-2 caption">3</div>
                            </div>
                        </div>
                    </div>
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
});
</script>

<style scoped>
@import '@/public/css/matchup/stats/chart/chart2/globals.css';
@import '@/public/css/matchup/stats/chart/chart2/styleguide.css';
@import '@/public/css/matchup/stats/chart/chart2/statchart2.css';
</style>