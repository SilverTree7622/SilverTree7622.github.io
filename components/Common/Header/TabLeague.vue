<template>
    <div class="tap-Mzx5SR mx-0">
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="matchup"
            :isToggled="props.tab === 'matchup'"
            :customHeading="`/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&tab=matchup`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="table"
            :isToggled="props.tab === 'table'"
            :customHeading="`/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&tab=table`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="odds"
            :isToggled="props.tab === 'odds'"
            :customHeading="`/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&tab=odds`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="result"
            :isToggled="props.tab === 'result'"
            :customHeading="`/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&tab=result`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="players"
            :isToggled="props.tab === 'players'"
            :customHeading="`/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&tab=players`"
        />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    sName: string;
    tab: string;
}>();

const leagueStore = useLeagueStore();

const opt = reactive({
    leagueId: <string> leagueStore.getConfig().leagueId,
});

onMounted(async () => {
    await nextTick();
    const {
        leagueId,
    } = leagueStore.getConfig();
    opt.leagueId = leagueId;
});
</script>

<style scoped></style>