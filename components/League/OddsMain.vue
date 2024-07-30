<template>
    <div class="contents_-football">
        <template v-for="(league, idx) of props.result_league">
            <CommonContentLeagueOdds
                :season="chckIsSeasonId()"
                :id="chckIsLeagueId()"
                :idx="idx"
                :sportSection="'football'"
                :date="league.date"
                :isLast="chckIsLast(idx)"
            />
        </template>
    </div>
</template>


<script setup lang="ts">
const props = defineProps<{
    result_league;
}>();

const route = useRoute();

const chckIsLast = (idx: number) => {
    return idx === (props.result_league.length - 1);
};

const chckIsLeagueId = () => {
    return route.query['id'] as string;
};

const chckIsSeasonId = () => {
    return route.query['season'] as string;
};

</script>

<style>
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