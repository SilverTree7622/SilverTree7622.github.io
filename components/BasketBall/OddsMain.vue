<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportOdds 
                    :idx="idx"
                    :sportSection="'basketball'"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TBasketBallSchedule } from "~/types/BasketBall/schedule";

const props = defineProps<{
    result_league_list: TBasketBallSchedule[];
}>();
</script>

<style scoped></style>