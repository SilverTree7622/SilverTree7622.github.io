<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :league="league"
                    :getScore="(prefix, schedule) => Types.getScore('tennis', prefix, schedule)"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Types from '~/types/';
import type { TTennisSchedule } from '~/types/Tennis/schedule';

const props = defineProps<{
    result_league_list: TTennisSchedule[];
}>();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
</style>