
<template>
    <!-- set group tag or border line -->
    <CommonContentHeadDate
        :idx="props.idx"
        :title="contentStore.getLeagueName(props.league)"
        :hasLeagueTag="contentStore.setLeagueGroup(props.league)"
        :src="contentStore.getLeagueFlag(props.league)"
        :alt="contentStore.getLeagueAlt(props.league)"
    />
    <!-- match content -->
    <div class="live_-match">
        <div class="live-match-Jbo1mR live-match">
            <div class="group-5-AKR3e5 group-5">
                <img class="aston-villa-oDU2Nu aston-villa" :src="contentStore.getParticipantSrc(props.league, 0)" :alt="contentStore.getParticipantName(props.league, 0)" />
                <div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(props.league, 0) }}</div>
            </div>
            <div class="score-AKR3e5 score">
                <img class="vector-eyBPRK vector" src="/img/vector-27@2x.png" alt="Vector" />
                <img class="vector-n1oFur vector" src="/img/vector-28@2x.png" alt="Vector" />
                <img class="vector-z3kuGS vector" src="/img/vector-29@2x.png" alt="Vector" />
                <div class="txt-live !text-[10px] mt-[1px]">LIVE</div>
                <div class="x100new pretendard-semi-bold-black-12px">
                    <span v-if="updateOpt.time" class="span0-TpclY9 body2">{{ getLeagueTime(opt.ai_match_status, opt.ai_kickoff_timestamp) }}</span>
                    <!-- <span v-else class="span0-TpclY9 body2">{{ getLeagueTime(opt) }}</span> -->
                    <span class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span>
                </div>
                <div v-if="updateOpt.score1" class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">{{ contentStore.getLeagueScore(opt, 0) }}</div>
                <div v-if="updateOpt.score2" class="x000-n1oFur x000 pretendard-semi-bold-black-20px">{{ contentStore.getLeagueScore(opt, 1) }}</div>
            </div>
            <div class="group-6-AKR3e5 group-6">
                <img class="arsenal-x4WW4Z arsenal" :src="contentStore.getParticipantSrc(props.league, 1)" :alt="contentStore.getParticipantName(props.league, 1)" />
                <div class="arsenal-tGhDC5 valign-text-middle arsenal body2 !text-center !h-[24px]">{{ contentStore.getParticipantName(props.league, 1) }}</div>
            </div>
        </div>
        <CommonFavoriteStar :isToggled="false" />
        <div class="live-tracker">
            <a href="javascript:;" @click="goLiveTracker(league)">
                <img class="btn_-live-tracker" src="/img/btn-livetracker-9@2x.png" alt="Btn_LiveTracker" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import UtilDate from "~/utils/date";
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TMatchUpStoreConfig } from "~/types/matchUp";
import type { TCommonSchedule } from "~/types/Common/schedule";

const props = defineProps<{
    idx: number;
    league: TCommonSchedule;
    getScore?: (prefix: TContentStorePrefix, schedule) => number;
    getTime?: (ai_match_status: number, ai_kickoff_timestamp: number) => number;
}>();

const prev = reactive({
    timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> 0,
});

const getScore = (prefix: TContentStorePrefix, schedule): number[] => {
    if (props?.getScore) {
        return [ props.getScore(prefix, schedule) ];
    } else {
        // default scores from schedule item
        return schedule[`ai_${ prefix }_scores`];
    }
};

const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): number => {
    if (props?.getTime) {
        return props.getTime(ai_match_status, ai_kickoff_timestamp);
    } else {
        // default time calculation via match status
        const currentTime = UtilDate.getWithOutMillisecond();
        const kickOffTime = ai_kickoff_timestamp;
        const gapTime = currentTime - kickOffTime;
        let dateTime = 0;
        if (ai_match_status === 2) {
            dateTime = gapTime / 60 + 1;
        }
        if (ai_match_status === 3) {
            dateTime = 45;
        }
        if (
            ai_match_status === 4 ||
            ai_match_status === 5 ||
            ai_match_status === 6 ||
            ai_match_status === 7
        ) {
            dateTime = gapTime / 60 + 45 + 1;
        }
        return dateTime;
    }
};

const opt = reactive({
    ai_away_scores: <TCommonLiveRealTime['ai_away_scores']> getScore('away', props.league),
    ai_home_scores: <TCommonLiveRealTime['ai_home_scores']> getScore('home', props.league),
    ai_kickoff_timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> props.league.ai_kickoff_timestamp ?? 0,
    ai_match_status: <TCommonLiveRealTime['ai_match_status']> props.league.ai_status_id,
    match_id: <TCommonLiveRealTime['match_id']> props.league.match_id,
});

const goStore = useGoStore();
const contentStore = useContentStore();

const updateOpt = reactive({
    time: <boolean> true,
    score1: <boolean> true,
    score2: <boolean> true,
});

const getLeagueTime = (
    ai_match_status: TCommonLiveRealTime['ai_match_status'],
    ai_kickoff_timestamp: number,
): string => {
    const kickOffTime = ai_kickoff_timestamp;
    let dateTime = 0;
    if (kickOffTime !== 0) {
        dateTime = getTime(ai_match_status, ai_kickoff_timestamp);
    } else {
        // dateTime = currentTime - props.league.ai_match_time;
    }

    if (props.idx === 0) {
        // console.log('kickOffTime, dateTime, props.league.ai_match_time: ', kickOffTime, dateTime, props.league.ai_match_time);
    }

    const matchUpTime = `${ UtilDate.syncDigit(~~(dateTime)) }’`;
    prev.timestamp = kickOffTime;
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

const goLiveTracker = (league: TCommonSchedule) => {
    const config: TMatchUpStoreConfig = {
        match_id: league.match_id,
        leagueName: league.ai_competition_name,
        timestamp: league.ai_match_time,
        homeLogo: league.ai_home_team_img,
        homeName: league.ai_home_team_name,
        homeScore: getScore('home', league)[0],
        awayLogo: league.ai_away_team_img,
        awayName: league.ai_away_team_name,
        awayScore: getScore('away', league)[0],
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