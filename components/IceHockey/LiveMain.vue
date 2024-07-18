<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template 
                v-for="(league, idx) in props.result_league_list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportLive
                    ref="$live"
                    :idx="idx"
                    :sportSection="'icehockey'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('icehockey', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('icehockey', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('icehockey', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
            <template
                v-if="!props.result_league_list.length"
                v-for="(league, idx) in opt.list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportLive
                    ref="$live"
                    :idx="idx"
                    :sportSection="'icehockey'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('icehockey', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('icehockey', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('icehockey', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from '~/types/Common/Live';
import type { TIceHockeySchedule } from '~/types/IceHockey/schedule';

const props = defineProps<{
    result_league_list: TIceHockeySchedule[];
    onMounted: () => Promise<void>;
}>();

const opt = reactive({
    list: <TIceHockeySchedule[]> [],
});

const $live = ref();

const liveIntervalLoadingStore = useLiveIntervalLoadingStore();
const contentStore = useContentStore();

const update = (idx: number, newLeague: TCommonLiveRealTime) => {
    if (!$live.value) return;
    if (!$live.value[idx]) return;
    $live.value[idx].update(newLeague);
};

onMounted(async () => {
    await nextTick();
    await liveIntervalLoadingStore.onMounted('baseball');
    await props.onMounted();
    
    const tmpData: TIceHockeySchedule = {
        "ai_away_team_id": "l5erg6bwongq8k0",
        "ai_away_team_img": "https://img.thesports.com/v2/team/fc37d933b43683cc0ae51c76e6b70d72.png",
        "ai_away_team_name": "EC Die Adler Kitzbuhel",
        "ai_category_id": "d23xmv0bdn6rg8n",
        "ai_category_name": "International",
        "ai_competition_id": "p3glrwdbd63qdyj",
        "ai_competition_img": "https://img.thesports.com/v2/unique-tournament/74ac3c28f234e6ba56c48481ea7611de.png",
        "ai_competition_name": "Alps Hockey League",
        "ai_competition_short_name": "",
        "ai_country_id": "",
        "ai_country_img": null,
        "ai_country_name": null,
        "ai_home_team_id": "2y8m43bw2wyrl07",
        "ai_home_team_img": "https://img.thesports.com/v2/team/4c0ceb173c3081542fb575eb10ad3c3c.png",
        "ai_home_team_name": "Vienna Capitals",
        "ai_match_time": 1638037500,
        "ai_scores": {
            "ft": [
                9,
                12,
            ],
            "p1": [
                1,
                2,
            ],
            "p2": [
                3,
                4,
            ],
            "p3": [
                5,
                6,
            ],
        },
        "ai_season_id": "x7lm78bon6nq2wd",
        "ai_status_id": 32,
        "match_id": "ednm95bxgdjvryo"
    };
    opt.list = [ tmpData ];
});

onBeforeUnmount(() => {
    liveIntervalLoadingStore.onBeforeUnmount();
});

defineExpose({
    update,
});
</script>

<style scoped>

</style>