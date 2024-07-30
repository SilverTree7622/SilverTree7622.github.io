<template>
    <!-- set group tag or border line -->
    <CommonContentHeadDate
        :season="props.league.ai_season_id"
        :id="props.league.ai_competition_id"
        :idx="props.idx"
        :title="contentStore.getLeagueName(props.league)"
        :sportSection="props.sportSection"
        :hasLeagueTag="contentStore.setLeagueGroup(props.league)"
        :src="contentStore.getLeagueFlag(props.league)"
        :alt="contentStore.getLeagueAlt(props.league)"
    />
    <!-- <div class="live_-match" @click="goLiveTracker(league)">
        <div class="live-match-Y6utjY live-match">
            <div class="group-5-Z7bohL group-5">
                <img class="aston-villa-1xcxXp aston-villa" :src="contentStore.getParticipantSrc(props.league, 0)" :alt="contentStore.getParticipantName(props.league, 0)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(league, 0) }}</div>
            </div>
            <div class="flex-col-result">
                <div class="overlap-group">
                    <img class="vector" src="~/public/img/vector@2x.png" alt="Vector" />
                    <img class="vector-1" src="~/public/img/vector-1@2x.png" alt="Vector" />
                    <div class="text text-center text-xs">{{ contentStore.getMatchTime(league) }}</div>
                    <div class="ft-4 text-xs">FT</div>
                    <div class="number number-2 pretendard-semi-bold-black-20px">{{ getScore('home', league)[0] }}</div>
                    <div class="number-1 number-2 pretendard-semi-bold-black-20px">{{ getScore('away', league)[0] }}</div>
                </div>
                <div class="btn_-statistics text-[13px]">
                    <div class="statistics">STATISTICS</div>
                </div>
            </div>
            <div class="group-6-Z7bohL group-6">
                <img class="arsenal-xEfJsb arsenal" :src="contentStore.getParticipantSrc(props.league, 1)" :alt="contentStore.getParticipantName(props.league, 1)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(league, 1) }}</div>
            </div>
        </div>
        <div class="btn_-favorite_-check">
            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
            <div class="group-29-rplUIj smart-layers-pointers">
                <img class="star" src="/img/star-24@2x.png" alt="Star" />
            </div>
        </div>
    </div> -->
    <!-- match content via conditions -->
    <div v-if="hasSlot('default')">
        <!-- custom default style -->
        <slot
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getScore(props.sportSection, 'home', props.league)"
            :time="contentStore.getMatchTime(league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getScore(props.sportSection, 'away', props.league)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
    <div v-else-if="!useSettingStore().getData().isDefault">
        <!-- classic style -->
        <CommonContentSportStyleResultClassic
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getScore(props.sportSection, 'home', props.league)"
            :time="contentStore.getMatchTime(league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getScore(props.sportSection, 'away', props.league)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
    <div v-else>
        <!-- default style item -->
        <CommonContentSportStyleResultDefault
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getScore(props.sportSection, 'home', props.league)[0]"
            :time="contentStore.getMatchTime(league)"
            :prefix="contentStore.getPrefix(props.sportSection, opt.ai_match_status, opt.ai_kickoff_timestamp)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getScore(props.sportSection, 'away', props.league)[0]"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    idx: number;
    sportSection: TCommonSportSection;
    league: TFootBallSchedule;
}>();


const goStore = useGoStore();
const contentStore = useContentStore();
const slots = useSlots();

const opt = reactive({
    ai_away_scores: <TCommonLiveRealTime['ai_away_scores']> contentStore.getScore(props.sportSection, 'away', props.league),
    ai_home_scores: <TCommonLiveRealTime['ai_home_scores']> contentStore.getScore(props.sportSection, 'home', props.league),
    ai_kickoff_timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> props.league.ai_kickoff_timestamp ?? 0,
    ai_match_status: <TCommonLiveRealTime['ai_match_status']> props.league.ai_status_id,
    match_id: <TCommonLiveRealTime['match_id']> props.league.match_id,
});

const hasSlot = (name) => {
    return !!slots[name];
};

const goLiveTracker = (league: TFootBallSchedule) => {
    goStore.go_livetraker(league.match_id, props.sportSection, league);
};

onMounted(async () => {
    await nextTick();
    if (!props.league.ai_season_id) console.log('no season id props.league: ', props.league.ai_competition_name, props.league);
});
</script>

<style scoped>
.flex-col-result {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-top: 24.0px;
}

.overlap-group1 {
    align-items: center;
    display: flex;
    gap: 4px;
    height: 108px;
    left: 74px;
    min-width: 209px;
    position: relative;
    top: 0;
}

.overlap-group {
    height: 42px;
    position: absolute;
    width: 132px;
}

.vector {
    height: 28px;
    left: 0;
    position: absolute;
    top: 14px;
    width: 132px;
}

.vector-1 {
    height: 19px;
    left: 45px;
    position: absolute;
    top: 16px;
    width: 41px;
}

.text {
    color: var(--bk);
    font-weight: 600;
    left: 50px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 33px;
}

.number {
    left: 90px;
    top: 16px;
}

.number-1 {
    left: 3px;
    top: 15px;
}

.btn_-statistics {
    display: flex;
    margin-right: 1.0px;
    width: 67px;
    top: 66px;
}

/* .statistics {
    color: var(--bk);
    font-weight: 600;
    height: 14px;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    width: 67px;
} */

.ft-4 {
    color: var(--bk);
    font-weight: 600;
    left: 54px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 17px;
    white-space: nowrap;
    width: 25px;
}

.number-2 {
    letter-spacing: -0.60px;
    line-height: normal;
    position: absolute;
    text-align: center;
    white-space: nowrap;
    width: 38px;
}
</style>