<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :league="league"
                    :getScore="getScore"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TVolleyBallSchedule } from "~/types/VolleyBall/schedule";

const props = defineProps<{
    result_league_list: TVolleyBallSchedule[];
}>();

const getScore = (prefix: TContentStorePrefix, schedule) => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
</style>