<template>
    <NuxtLayout
        name="leaguecontent"
        :isPending="leagueStore.getOpt().isPending"
        :contentIsPending="leagueStore.getOpt().pageIsPending"
        :isOutOfContent="leagueStore.getOpt().pageIsOutOfContent"
        :sName="'League'"
        :tab="opt.tab"
        :changeTab="changeTab"
        :result="opt.result"
    >
        <LeagueMatchUpMain
            v-if="opt.tab == 'matchup'"
        />
        <LeagueTableMain
            v-if="opt.tab == 'table'"
        />
        <LeagueOddsMain
            v-if="opt.tab == 'odds'"
            :result_league="[]"
        />
        <LeagueResultMain
            v-if="opt.tab == 'result'"
        />
        <LeaguePlayersMain
            v-if="opt.tab == 'players'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
const scrollStore = useScrollStore();
const leagueStore = useLeagueStore();
const route = useRoute();

const scroll = reactive({
    key: <string> 'tab',
});

const opt = reactive({
    tab: <string> route.query['tab'] as string ?? 'matchup',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
    },
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
});

const changeTab = () => {
    opt.tab = route.query['tab'] as string;
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(async () => {
    
});
</script>

<style scoped>

</style>