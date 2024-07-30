<template>
    <div class="tap-Mzx5SR mx-0">
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="matchup"
            :isToggled="props.tab === 'matchup'"
            :customHeading="getCustomHeading('matchup')"
        />
        <CommonHeaderTabCommon
            v-if="useLeagueStore().getOpt().isTableExist"
            :sName="props.sName"
            name="table"
            :isToggled="props.tab === 'table'"
            :customHeading="getCustomHeading('table')"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="odds"
            :isToggled="props.tab === 'odds'"
            :customHeading="getCustomHeading('odds')"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="result"
            :isToggled="props.tab === 'result'"
            :customHeading="getCustomHeading('result')"
        />
        <!-- <CommonHeaderTabCommon
            :sName="props.sName"
            name="players"
            :isToggled="props.tab === 'players'"
            :customHeading="getCustomHeading('players')"
        /> -->
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

const getCustomHeading = (tab: string): string => {
    return `/${props.sName}?id=${ useLeagueStore().getConfig().leagueId }&season=${ useLeagueStore().getConfig().seasonId }&sport=${ useLeagueStore().getConfig().sportSection }&tab=${ tab }`
};

onMounted(async () => {
    await nextTick();
    const {
        leagueId,
    } = leagueStore.getConfig();
    opt.leagueId = leagueId;
});
</script>

<style scoped></style>