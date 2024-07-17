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
                    :sportSection="'basketball'"
                    :league="league"
                />
            </template>
            <template
                v-for="(league, idx) in opt.list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportLive
                    ref="$live"
                    :idx="idx"
                    :sportSection="'basketball'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningBasketballDefault
                            :league="league"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningBasketballClassic
                            :currentSpotlightIdx="contentStore.getCurrentInningSpotlightIdx('basketball', league)"
                            :list="contentStore.getInningClassic('basketball', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningBasketballClassic
                            :currentSpotlightIdx="contentStore.getCurrentInningSpotlightIdx('basketball', league)"
                            :list="contentStore.getInningClassic('basketball', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TBasketBallSchedule } from "~/types/BasketBall/schedule";

const props = defineProps<{
    result_league_list: TBasketBallSchedule[];
    onMounted: () => Promise<void>;
}>();

const opt = reactive({
    list: <TBasketBallSchedule[]> [],
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
    await liveIntervalLoadingStore.onMounted('basketball');
    await props.onMounted();
    
    const tmpData: TBasketBallSchedule = {
        "ai_away_scores": [
            0,
            0,
            0,
            0,
            0
        ],
        "ai_away_team_id": "e4wyrn1tnzkq86p",
        "ai_away_team_img": "https://img.thesports.com/basketball/team/d4bf8cea96ee46c1cfef025d542b2626.png",
        "ai_away_team_name": "Great Britain U20",
        "ai_category_id": "0gx7lm73tor2wdk",
        "ai_category_name": "Europe",
        "ai_competition_id": "9k82re8t8drepzj",
        "ai_competition_img": "https://img.thesports.com/basketball/competition/eac199878c23a77664f4e93905451724.jpg",
        "ai_competition_name": "Europe U20 Championship Division B",
        "ai_competition_short_name": "Europe EBC U20B",
        "ai_country_id": "",
        "ai_country_img": null,
        "ai_country_name": null,
        "ai_home_scores": [
            0,
            0,
            0,
            0,
            0
        ],
        "ai_home_team_id": "v2y8m4pt90jml07",
        "ai_home_team_img": "https://img.thesports.com/basketball/team/0972dc9300c7a46523929e287805fbad.png",
        "ai_home_team_name": "Portugal U20",
        "ai_match_time": 1721142000,
        "ai_season_id": "4zp5rzkt7l3r82w",
        "ai_status_id": 2,
        "match_id": "dn1m17tp75ljmoe"
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