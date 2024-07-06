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
                    :getScore="(prefix, schedule) => Types.getScore('football', prefix, schedule)"
                    :getTime="(ai_match_status: number, ai_kickoff_timestamp: number) => Types.getTime('football', ai_match_status, ai_kickoff_timestamp)"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Types from '~/types';
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    result_league_list: TFootBallSchedule[];
    onMounted: () => Promise<void>;
}>();

const $live = ref();

const liveIntervalLoadingStore = useLiveIntervalLoadingStore();

const update = (idx: number, newLeague: TCommonLiveRealTime) => {
    if (!$live.value) return;
    if (!$live.value[idx]) return;
    $live.value[idx].update(newLeague);
};

onMounted(async () => {
    await nextTick();
    await liveIntervalLoadingStore.onMounted('football');
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