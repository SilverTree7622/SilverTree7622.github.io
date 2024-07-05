<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template
                v-for="(league, idx) in props.result_league_list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportLive
                    ref="$live"
                    :idx="idx"
                    :league="league"
                    :getScore="getScore"
                    :getTime="getTime"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTimeConfig } from "~/types/Common/Live";
import type { TVolleyBallSchedule } from "~/types/VolleyBall/schedule";
import UtilDate from "~/utils/date";

const props = defineProps<{
    result_league_list: TVolleyBallSchedule[];
    onMounted: () => Promise<void>;
}>();

const $live = ref();

const liveIntervalLoadingStore = useLiveIntervalLoadingStore();

const getScore = (prefix: TContentStorePrefix, schedule) => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): number => {
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = 0;
    if (ai_match_status === 432) {
        dateTime = gapTime / 60 + 1;
    }
    if (ai_match_status === 3) {
        dateTime = 45;
    }
    if (
        ai_match_status === 434 ||
        ai_match_status === 436 ||
        ai_match_status === 438 ||
        ai_match_status === 440
    ) {
        dateTime = gapTime / 60 + 45 + 1;
    }
    return dateTime;
};

const update = (idx: number, newLeague: TCommonLiveRealTimeConfig) => {
    if (!$live.value) return;
    if (!$live.value[idx]) return;
    $live.value[idx].update(newLeague);
};

onMounted(async () => {
    await nextTick();
    await liveIntervalLoadingStore.onMounted('volleyball');
    await props.onMounted();
});

onBeforeUnmount(() => {
    liveIntervalLoadingStore.onBeforeUnmount();
});

defineExpose({
    update,
});
</script>

<style scoped>

</style>