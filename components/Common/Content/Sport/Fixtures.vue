
<template>
    <!-- set group tag or border line -->
    <CommonContentHeadDate
        :season="props.league.ai_season_id"
        :id="props.league.ai_competition_id"
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
            :time="contentStore.getMatchTime(props.league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
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
            :time="contentStore.getMatchTime(props.league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
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
            :time="contentStore.getMatchTime(props.league)"
            :awayLogo="contentStore.getParticipantSrc(props.league, 1)"
            :awayName="contentStore.getParticipantName(props.league, 1)"
            :goLiveTracker="() => goLiveTracker(props.league)"
            :isFavorite="false"
            :isToday="getIsToday()"
        />
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";
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

const getIsToday = () => {
    const isToday = UtilDate.chckDateIsToday(
        UtilDate.addMillisecond(props.league.ai_match_time)
    );
    return isToday;
};

const goLiveTracker = (league: TSportScheduleTypes) => {
    goStore.go_livetraker(league.match_id, props.sportSection, league);
};

</script>