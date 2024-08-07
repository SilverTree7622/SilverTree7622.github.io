<template>
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
import type { TSportScheduleTypes } from "~/types/schedule";
import UtilDate from "~/utils/date";

const props = defineProps<{
    idx: number;
    sportSection: TCommonSportSection;
    league: TFootBallSchedule;
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

const getIsToday = (): number => {
    const measureDate = UtilDate.addMillisecond(props.league.ai_match_time);
    const isToday = UtilDate.chckDateIsToday(measureDate);
    if (isToday) {
        return 0;
    }
    if (UtilDate.chckIsYesterday(measureDate)) {
        return -1;
    }
    return 1;
};

const goLiveTracker = (league: TSportScheduleTypes) => {
    goStore.go_livetracker(league.match_id, props.sportSection, league);
};
</script>

<style scoped>
</style>