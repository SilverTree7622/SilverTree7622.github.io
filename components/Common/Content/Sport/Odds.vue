<template>
    <CommonContentHeadDate
        :idx="props.idx"
        :title="contentStore.getLeagueName(props.league)"
        :hasLeagueTag="contentStore.setLeagueGroup(props.league)"
        :src="contentStore.getLeagueFlag(props.league)"
        :alt="contentStore.getLeagueAlt(props.league)"
    />
    <!-- <div class="live_-match">
        <CommonContentCountry :title="contentStore.getParticipantName(props.league, 0)" :src="contentStore.getParticipantSrc(props.league, 0)" />
        <CommonContentMatch :time="contentStore.getMatchTime(props.league)" />
        <CommonContentCountry :title="contentStore.getParticipantName(props.league, 1)" :src="contentStore.getParticipantSrc(props.league, 1)" />
        <CommonFavoriteStar
            :isToggled="false"
        />
    </div>
    <CommonContentOddsGrop
        :top="56"
        :draw="13.5"
        :low="1.05"
        :value="25"
    /> -->
    
    <!-- match content via conditions -->
    <div v-if="hasSlot('default')">
        <!-- custom default style -->
        <slot
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :time="contentStore.getMatchTime(props.league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
        />
    </div>
    <div v-else-if="!useSettingStore().getData().isDefault">
        <!-- classic style -->
        <CommonContentSportStyleOddsClassic
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :time="getTime()"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isLiving="getIsLiving()"
            :isFavorite="false"
        />
    </div>
    <div v-else>
        <!-- default style item -->
        <CommonContentSportStyleOddsDefault
            :idx="props.idx"
            :homeLogo="contentStore.getParticipantSrc(props.league, 0)"
            :homeName="contentStore.getParticipantName(props.league, 0)"
            :time="getTime()"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
            :isToday="getIsToday()"
        />
    </div>
</template>

<script setup lang="ts">
import type { TCommonSchedule } from "~/types/Common/schedule";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";
import type { TMatchUpStoreConfig } from "~/types/matchUp";
import UtilDate from "~/utils/date";

const props = defineProps<{
    idx: number;
    sportSection: TCommonSportSection;
    league: TFootBallSchedule;
    isLast: boolean;
}>();

const goStore = useGoStore();
const contentStore = useContentStore();
const slots = useSlots();

const hasSlot = (name) => {
    return !!slots[name];
};

const getIsLiving = () => {
    const {
        isLiving,
    } = contentStore.getOddsTime(
        'football',
        props.league,
    );
    return isLiving;
};

const getTime = () => {
    const {
        time,
    } = contentStore.getOddsTime(
        'football',
        props.league,
    );
    return time;
};

const getIsToday = () => {
    return UtilDate.chckDateIsToday(new Date(Date.now()));
};

const goLiveTracker = (league: TCommonSchedule) => {
    const config: TMatchUpStoreConfig = {
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
</script>

<style scoped>
</style>