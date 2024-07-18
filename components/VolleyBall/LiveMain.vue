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
                    :sportSection="'volleyball'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('volleyball', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('volleyball', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('volleyball', 'away', league)"
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
                    :sportSection="'volleyball'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('volleyball', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('volleyball', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('volleyball', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TVolleyBallSchedule } from "~/types/VolleyBall/schedule";

const props = defineProps<{
    result_league_list: TVolleyBallSchedule[];
    onMounted: () => Promise<void>;
}>();

const opt = reactive({
    list: <TVolleyBallSchedule[]> [],
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
    await liveIntervalLoadingStore.onMounted('volleyball');
    await props.onMounted();

    const tmpData: TVolleyBallSchedule = {
        "ai_away_team_id": "ednm9vh5y56qyox",
        "ai_away_team_img": "https://img.thesports.com/volleyball/team/d37289f7a3f107fe81d58ac54ae604d4.png",
        "ai_away_team_name": "Romania U18",
        "ai_category_id": "",
        "ai_category_name": null,
        "ai_competition_id": "e4wyrn3heovm86p",
        "ai_competition_img": "https://img.thesports.com/volleyball/competition/297a3d58230ee3d0df2dba278bc91750.png",
        "ai_competition_name": "European Championships U18",
        "ai_competition_short_name": "",
        "ai_country_id": "",
        "ai_country_img": null,
        "ai_country_name": null,
        "ai_home_team_id": "965mkdh8d85r1ge",
        "ai_home_team_img": "https://img.thesports.com/volleyball/team/6196b217c74313ed212d0aaa350dd6d1.png",
        "ai_home_team_name": "Slovenia U18",
        "ai_match_time": 1721304000,
        "ai_scores": {
            "ft": [
                0,
                0
            ],
            "p1": [
                1,
                0,
            ],
            "p2": [
                2,
                0,
            ],
            "p3": [
                3,
                0,
            ],
            "p4": [
                4,
                0,
            ],
            "p5": [
                5,
                0,
            ],
        },
        "ai_season_id": "y0or58henkorwzv",
        "ai_status_id": 440,
        "match_id": "y0or58hnd3lzrwz"
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