<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :sportSection="'football'"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonSchedule } from '~/types/Common/schedule';

const props = defineProps<{
    result_league_list: TCommonSchedule[];
}>();

const chckIsLast = (idx: number) => {
    return idx === (props.result_league_list.length - 1);
};

onMounted(async () => {
    await nextTick();
});

</script>

<style scoped>

.contents_-football {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 10px 8px;
  position: relative;
  width: 100%;
}

</style>