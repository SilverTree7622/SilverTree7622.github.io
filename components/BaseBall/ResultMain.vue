<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :sportSection="'baseball'"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Types from '~/types/';
import type { TBaseBallSchedule } from '~/types/BaseBall/schedule';

const props = defineProps<{
    result_league_list: TBaseBallSchedule[];
}>();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
</style>