
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
            :time="getLeagueTime(opt.ai_match_status, opt.ai_kickoff_timestamp)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
    <div v-else-if="!useSettingStore().getData().isDefault">
        <!-- classic style -->
        <CommonContentSportStyleFixturesClassic
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getLeagueScore(opt, 0)"
            :time="getLeagueTime(opt.ai_match_status, opt.ai_kickoff_timestamp)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
    <div v-else>
        <!-- default style item -->
        <CommonContentSportStyleFixturesDefault
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :homeScore="contentStore.getLeagueScore(opt, 0)"
            :time="getLeagueTime(opt.ai_match_status, opt.ai_kickoff_timestamp)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :awayScore="contentStore.getLeagueScore(opt, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>


    <!-- match content -->
    <div class="live_-match" @click="goLiveTracker(league)">
        <div class="live-match-Y6utjY live-match">
            <div class="group-5-Z7bohL group-5">
                <img class="aston-villa-1xcxXp aston-villa" :src="contentStore.getParticipantSrc(props.league, 0)" :alt="contentStore.getParticipantName(props.league, 0)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(props.league, 0) }}</div>
            </div>
            <div class="vs-Z7bohL vs">
                <div class="x19-30 headline">{{ contentStore.getMatchTime(props.league) }}</div>
                <div class="vs-ij0TdP vs headline">VS</div>
            </div>
            <div class="frame-303-Z7bohL frame-303">
                <img class="btn_-round-square2-qGs8vj btn_-round-square2"
                    src="/img/btn-roundsquare2-2@2x.png" alt="Btn_RoundSquare2" />
                <div class="matchup valign-text-middle body2">MATCHUP</div>
            </div>
            <div class="group-6-Z7bohL group-6">
                <img class="arsenal-xEfJsb arsenal" :src="contentStore.getParticipantSrc(props.league, 1)" :alt="contentStore.getParticipantName(props.league, 1)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(props.league, 1) }}</div>
            </div>
        </div>
        <div class="btn_-favorite_-check">
            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
            <div class="group-29-rplUIj smart-layers-pointers">
                <img class="star" src="/img/star-24@2x.png" alt="Star" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TFootBallSchedule } from "~/types/FootBall/schedule";
import type { TMatchUpStoreConfig } from "~/types/matchUp";

const props = defineProps<{
    idx: number;
    league: TFootBallSchedule;
    getScore?: (prefix: TContentStorePrefix, schedule) => number;
    getTime?: (ai_match_status: number, ai_kickoff_timestamp: number) => string;
}>();

const goStore = useGoStore();
const contentStore = useContentStore();

const goLiveTracker = (league: TFootBallSchedule) => {
    const config: TMatchUpStoreConfig = {
        match_id: league.match_id,
        leagueName: league.ai_competition_name,
        timestamp: league.ai_match_time,
        homeLogo: league.ai_home_team_img,
        homeName: league.ai_home_team_name,
        homeScore: league.ai_home_scores[0],
        awayLogo: league.ai_away_team_img,
        awayName: league.ai_away_team_name,
        awayScore: league.ai_away_scores[0],
        matchStatus: league.ai_status_id,
    };
    goStore.go_livetraker(league.match_id, config);
};

</script>