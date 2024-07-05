<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template
                v-for="(league, idx) in props.result_league_list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportFixtures
                    ref="$fixtures"
                    :idx="idx"
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

const $fixtures = ref();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped></style>