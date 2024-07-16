<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportOdds 
                    :idx="idx"
                    :sportSection="'tennis'"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TTennisSchedule } from '~/types/Tennis/schedule';

const props = defineProps<{
    result_league_list: TTennisSchedule[];
}>();
</script>

<style scoped></style>