<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportOdds 
                    :idx="idx"
                    :sportSection="'icehockey'"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TIceHockeySchedule } from '~/types/IceHockey/schedule';

const props = defineProps<{
    result_league_list: TIceHockeySchedule[];
}>();

</script>

<style scoped></style>