<template>
    <div class="tap-Mzx5SR mx-0">
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="stats"
            :isToggled="props.tab === 'stats'"
            :customHeading="`/${props.sName}?uuid=${ opt.uuid }&tab=stats`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="navitalk"
            :isToggled="props.tab === 'navitalk'"
            :customHeading="`/${props.sName}?uuid=${ opt.uuid }&tab=navitalk`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="odds"
            :isToggled="props.tab === 'odds'"
            :customHeading="`/${props.sName}?uuid=${ opt.uuid }&tab=odds`"
        />
        <CommonHeaderTabCommon
            v-show="matchUpStore.getOpt().isLineUpExist"
            :sName="props.sName"
            name="lineup"
            :isToggled="props.tab === 'lineup'"
            :customHeading="`/${props.sName}?uuid=${ opt.uuid }&tab=lineup`"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="h2h"
            :isToggled="props.tab === 'h2h'"
            :customHeading="`/${props.sName}?uuid=${ opt.uuid }&tab=h2h`"
        />
    </div>
</template>

<script lang="ts" setup>
import { ECommonSportSectionValue } from '~/types/Common/sport';

const props = defineProps<{
    sName: string;
    tab: string;
}>();

const opt = reactive({
    uuid: <string> '',
});

const matchUpStore = useMatchUpStore();
const route = useRoute();

onMounted(async () => {
    await nextTick();
    const {
        match_id,
        sportSection,
    } = matchUpStore.getConfig();
    opt.uuid = (route.query["uuid"] as string) ?? match_id;
    if (opt.uuid !== '') return;
    // redirect to live home?
    navigateTo(`/${ ECommonSportSectionValue[sportSection] ?? 'FootBall' }`);
})
</script>
