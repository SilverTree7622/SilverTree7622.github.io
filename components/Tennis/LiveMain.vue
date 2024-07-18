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
                    :sportSection="'tennis'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('tennis', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('tennis', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('tennis', 'away', league)"
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
                    :sportSection="'tennis'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('tennis', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('tennis', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('tennis', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from '~/types/Common/Live';
import type { TTennisSchedule } from '~/types/Tennis/schedule';

const props = defineProps<{
    result_league_list: TTennisSchedule[];
    onMounted: () => Promise<void>;
}>();

const opt = reactive({
    list: <TTennisSchedule[]> [],
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
    await liveIntervalLoadingStore.onMounted('tennis');
    await props.onMounted();
    
    const tmpData: TTennisSchedule = {
        "ai_away_team_id": "8yomojfvgz2q0j6",
        "ai_away_team_img": "",
        "ai_away_team_name": "Kevin Krawietz/Tim Puetz",
        "ai_category_id": "kn54ql4fx0yrvy9",
        "ai_category_name": "Davis Cup",
        "ai_competition_id": "d23xmvvfdwdmg8n",
        "ai_competition_img": "https://img.thesports.com/v2/unique-tournament/b7a0e207a379ba87d6900250f531e121.png",
        "ai_competition_name": "Davis Cup",
        "ai_home_team_id": "3glrw2fndj1rdyj",
        "ai_home_team_img": "",
        "ai_home_team_name": "Nikola Cacic/Novak Djokovic",
        "ai_match_time": 1638043500,
        "ai_scores": {
            "ft": [
                1,
                2
            ],
            "p1": [
                6,
                7
            ],
            "p2": [
                6,
                3
            ],
            "p3": [
                6,
                7
            ],
            "x1": [
                5,
                7
            ],
            "x3": [
                5,
                7
            ]
        },
        "ai_season_id": "vjxm85f40ylm6od",
        "ai_season_name": "Davis Cup 2020",
        "ai_season_short_name": "DC 2020/21",
        "ai_season_year": "2020-2021",
        "ai_status_id": 100,
        "match_id": "ednm9efxeyxpryo"
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