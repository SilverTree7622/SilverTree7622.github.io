<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :league="league"
                    :getScore="(prefix, schedule) => Types.getScore('icehockey', prefix, schedule)"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Types from '~/types/';
import type { TIceHockeySchedule } from '~/types/IceHockey/schedule';

const props = defineProps<{
    result_league_list: TIceHockeySchedule[];
}>();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
</style>