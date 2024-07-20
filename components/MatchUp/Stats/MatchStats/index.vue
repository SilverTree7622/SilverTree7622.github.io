<template>
    <div class="frmu95mobileu95matchup headline screen">
        <CommonHeaderLiveTracker
            :match_id="matchUpStore.getConfig().match_id"
        />
        <MatchUpStatsMatchStatsIncidents
            :list="[]"
        />
        <div class="contents_-football_ contents_">
            <div class="frame-315">
                <p class="statistics-season-so-far headline2">STATISTICS - SEASON SO FAR</p>
            </div>
            <div class="live_-match-2 live_-match-3">
                <div class="live-match-1 live-match-4">
                    <div class="frame">
                        <img class="aston-villa-7" src="/img/astonvilla.png" alt="AstonVilla" />
                        <div class="aston-villa-8 valign-text-middle body2">ASTON VILLA</div>
                    </div>
                    <img class="vs-1" src="/img/vs-1@2x.png" alt="VS 1" />
                    <div class="frame">
                        <img class="arsenal-4" src="/img/arsenal.png" alt="Arsenal" />
                        <div class="arsenal-5 valign-text-middle body2">ARSENAL</div>
                    </div>
                </div>
            </div>
            <div class="frame-354">
                <div class="frame-341">
                    <div class="surname valign-text-middle surname-2 body">Ball Possession</div>
                    <div class="frame-338-1">
                        <div class="frame-501">
                            <div class="percent valign-text-middle percent-2 headline2">48%</div>
                        </div>
                        <div class="frame-500">
                            <div class="percent-1 valign-text-middle percent-2 headline2">52%</div>
                        </div>
                    </div>
                </div>
                <div class="frame-340">
                    <div class="flex-col body">
                        <div class="total-shots valign-text-middle">Total Shots</div>
                        <div class="frame-33">
                            <div class="frame-505">
                                <div class="number-2 valign-text-middle headline2">11</div>
                            </div>
                            <div class="frame-504">
                                <div class="number-3 valign-text-middle headline2">18</div>
                            </div>
                        </div>
                        <p class="shots-off-target-shots-on-target valign-text-middle">
                            <span><span class="span0 body">Shots off target</span><span class="span1 body"> / Shots on
                                    target</span>
                            </span>
                        </p>
                        <div class="frame-33">
                            <div class="frame-503">
                                <div class="overlap-group-3">
                                    <div class="number-4 valign-text-middle headline2">2</div>
                                </div>
                                <div class="overlap-group1-2">
                                    <div class="number-5 valign-text-middle headline2">4</div>
                                </div>
                            </div>
                            <div class="frame-502">
                                <div class="overlap-group3">
                                    <div class="number-6 valign-text-middle headline2">8</div>
                                </div>
                                <div class="overlap-group2">
                                    <div class="number-7 valign-text-middle headline2">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="frame-33-1 frame-33-3">
                    <div class="blocked-shots valign-text-middle body">Blocked Shots</div>
                    <div class="frame-338">
                        <div class="frame-507">
                            <div class="number-8 valign-text-middle headline2">5</div>
                        </div>
                        <div class="frame-506">
                            <div class="number-9 valign-text-middle headline2">6</div>
                        </div>
                    </div>
                </div>
                <div class="frame-33-2 frame-33-3">
                    <div class="corner-kicks valign-text-middle body">Corner Kicks</div>
                    <div class="frame-338">
                        <div class="frame-509">
                            <div class="number-10 valign-text-middle headline2">6</div>
                        </div>
                        <div class="frame-508">
                            <div class="number-11 valign-text-middle headline2">4</div>
                        </div>
                    </div>
                </div>
                <div class="frame-33-1 frame-33-3">
                    <div class="offsides valign-text-middle body">Offsides</div>
                    <div class="frame-338">
                        <div class="frame-51">
                            <div class="number-12 valign-text-middle headline2">1</div>
                        </div>
                        <div class="frame-510">
                            <div class="number-13 valign-text-middle headline2">5</div>
                        </div>
                    </div>
                </div>
                <div class="frame-33-2 frame-33-3">
                    <div class="yellow-cards valign-text-middle body">Yellow Cards</div>
                    <div class="frame-338">
                        <div class="frame-51">
                            <div class="number-14 valign-text-middle headline2">1</div>
                        </div>
                        <div class="frame-512">
                            <div class="number-15 valign-text-middle headline2">3</div>
                        </div>
                    </div>
                </div>
                <div class="contents_-bottom-bg"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const matchUpStore = useMatchUpStore();

// const opt = reactive({
//     isLive: <boolean> matchUpStore.chckIsLive(),
// });

onMounted(async () => {
    await nextTick();
    console.log('match stats mounted');
});
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>