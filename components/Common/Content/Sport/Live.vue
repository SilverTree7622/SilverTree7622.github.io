
<template>
    <!-- set group tag or border line -->
    <CommonContentHeadDate
        :idx="props.idx"
        :title="contentStore.getLeagueName(props.league)"
        :hasLeagueTag="contentStore.setLeagueGroup(props.league)"
        :src="contentStore.getLeagueFlag(props.league)"
        :alt="contentStore.getLeagueAlt(props.league)"
    />
    <!-- match content via conditions -->
    <div v-if="hasSlot('default')">
        <!-- custom default style -->
        <slot
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getLeagueScore(opt, 0)"
            :time="getLeagueTime()"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :updateOpt="{
                time: updateOpt.time,
                score1: updateOpt.score1,
                score2: updateOpt.score2,
            }"
            :isFavorite="false"
        />
    </div>
    <div v-else-if="!useSettingStore().getData().isDefault">
        <!-- classic style -->
        <CommonContentSportStyleLiveClassic
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getLeagueScore(opt, 0)"
            :time="getLeagueTime()"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :updateOpt="{
                time: updateOpt.time,
                score1: updateOpt.score1,
                score2: updateOpt.score2,
            }"
            :isFavorite="false"
        >
            <template #inning-classic-home>
                <slot name="inning-classic-home" />
            </template>
            <template #inning-classic-away>
                <slot name="inning-classic-away" />
            </template>
        </CommonContentSportStyleLiveClassic>
    </div>
    <div v-else>
        <!-- default style item -->
        <CommonContentSportStyleLiveDefault
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getLeagueScore(opt, 0)"
            :time="getLeagueTime()"
            :prefix="contentStore.getPrefix(props.sportSection, opt.ai_match_status, opt.ai_kickoff_timestamp)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :updateOpt="{
                time: updateOpt.time,
                score1: updateOpt.score1,
                score2: updateOpt.score2,
            }"
            :isFavorite="false"
        >
            <template #inning-default>
                <slot name="inning-default" />
            </template>
        </CommonContentSportStyleLiveDefault>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TMatchUpStoreConfig } from "~/types/matchUp";
import type { TCommonSchedule } from "~/types/Common/schedule";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TSportScheduleTypes } from "~/types/schedule";

const props = defineProps<{
    idx: number;
    sportSection: TCommonSportSection;
    league: TSportScheduleTypes;
}>();

const prev = reactive({
    timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> 0,
});

const contentStore = useContentStore();

const opt = reactive({
    ai_away_scores: <TCommonLiveRealTime['ai_away_scores']> contentStore.getScore(props.sportSection, 'away', props.league),
    ai_home_scores: <TCommonLiveRealTime['ai_home_scores']> contentStore.getScore(props.sportSection, 'home', props.league),
    ai_kickoff_timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> props.league.ai_kickoff_timestamp ?? 0,
    ai_match_status: <TCommonLiveRealTime['ai_match_status']> props.league.ai_status_id,
    match_id: <TCommonLiveRealTime['match_id']> props.league.match_id,
});

const goStore = useGoStore();
const slots = useSlots();

const updateOpt = reactive({
    time: <boolean> true,
    score1: <boolean> true,
    score2: <boolean> true,
});

const hasSlot = (name) => {
    return !!slots[name];
};

const getLeagueTime = () => {
    const {
        prevTimestamp,
        matchUpTime,
    } = contentStore.getLeagueTime(
        props.idx, props.sportSection, opt.ai_match_status, opt.ai_kickoff_timestamp,
    );
    prev.timestamp = prevTimestamp;
    return matchUpTime;
};

const update = (newLeague: TCommonLiveRealTime) => {
    // console.log('newLeague: ', newLeague);
    if (newLeague?.ai_home_scores) {
        opt.ai_home_scores = newLeague.ai_home_scores;
    }
    if (newLeague?.ai_away_scores) {
        opt.ai_away_scores = newLeague.ai_away_scores;
    }
    const isKickOffTimestampChanged = newLeague?.ai_kickoff_timestamp !== prev.timestamp;
    if (isKickOffTimestampChanged) {
        opt.ai_kickoff_timestamp = newLeague.ai_kickoff_timestamp ?? prev.timestamp;
    }
    opt.ai_match_status = newLeague.ai_match_status;
    off(
        !!newLeague?.ai_home_scores,
        !!newLeague?.ai_away_scores,
        isKickOffTimestampChanged,
    );
    setTimeout(() => {
        on(
            !!newLeague?.ai_home_scores,
            !!newLeague?.ai_away_scores,
            isKickOffTimestampChanged,
        );
    }, 0);
};

const off = (home: boolean, away: boolean, time: boolean) => {
    if (home || away) {
        updateOpt.score1 = false;
        updateOpt.score2 = false;
    }
    if (time) updateOpt.time = false;
};

const on = (home: boolean, away: boolean, time: boolean) => {
    if (home || away) {
        updateOpt.score1 = true;
        updateOpt.score2 = true;
    }
    if (time) updateOpt.time = true;
};

const goLiveTracker = (league: TSportScheduleTypes) => {
    const config: TMatchUpStoreConfig = {
        sportSection: props.sportSection,
        match_id: league.match_id,
        leagueName: league.ai_competition_name,
        timestamp: league.ai_match_time,
        homeLogo: league.ai_home_team_img,
        homeName: league.ai_home_team_name,
        homeScore: contentStore.getScore(props.sportSection, 'home', league)[0],
        awayLogo: league.ai_away_team_img,
        awayName: league.ai_away_team_name,
        awayScore: contentStore.getScore(props.sportSection, 'away', league)[0],
        matchStatus: league.ai_status_id,
    };
    goStore.go_livetraker(league.match_id, config);
};

onMounted(async () => {
    await nextTick();
});

defineExpose({
    update,
});
</script>