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
                    :sportSection="'baseball'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('baseball', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('baseball', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('baseball', 'away', league)"
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
                    :sportSection="'baseball'"
                    :league="league"
                >
                    <template #inning-default>
                        <CommonContentInningDefault
                            :list="contentStore.getInningSets('baseball', league)"
                        />
                    </template>
                    <template #inning-classic-home>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('baseball', 'home', league)"
                        />
                    </template>
                    <template #inning-classic-away>
                        <CommonContentInningClassic
                            :list="contentStore.getInningClassic('baseball', 'away', league)"
                        />
                    </template>
                </CommonContentSportLive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from '~/types/Common/Live';
import type { TBaseBallSchedule } from '~/types/BaseBall/schedule';

const props = defineProps<{
    result_league_list: TBaseBallSchedule[];
    onMounted: () => Promise<void>;
}>();

const opt = reactive({
    list: <TBaseBallSchedule[]> [],
});

const $live = ref();

const contentStore = useContentStore();
const liveIntervalLoadingStore = useLiveIntervalLoadingStore();

const update = (idx: number, newLeague: TCommonLiveRealTime) => {
    if (!$live.value) return;
    if (!$live.value[idx]) return;
    $live.value[idx].update(newLeague);
};

onMounted(async () => {
    await nextTick();
    await liveIntervalLoadingStore.onMounted('baseball');
    await props.onMounted();
    
    const tmpData: TBaseBallSchedule = {
        "ai_away_team_id": "4zp5rzvs9x9q82w",
        "ai_away_team_img": "https://img.thesports.com/baseball/team/89891c4f9ce82a115f1e88763d5cff4c.png",
        "ai_away_team_name": "Hanwha Eagles",
        "ai_category_id": "",
        "ai_category_name": null,
        "ai_competition_id": "56ypq36s0o9qd7o",
        "ai_competition_img": "https://img.thesports.com/baseball/competition/193e6eaf6922cb6dee10747bb8bac504.png",
        "ai_competition_name": "KBO",
        "ai_competition_short_name": "",
        "ai_country_id": "gy0or56s47mwzv3",
        "ai_country_img": "https://img.thesports.com/country/kor.png",
        "ai_country_name": "South Korea",
        "ai_home_team_id": "z318q63spnoqo9j",
        "ai_home_team_img": "https://img.thesports.com/baseball/team/6eb66e5f7c82e7cfaaf20eb74a62d0a8.png",
        "ai_home_team_name": "NC Dinos",
        "ai_match_time": 1721295000,
        "ai_scores": {
            "ft": [
                "0",
                "0"
            ],
            "p1": [
                "0",
                "1",
            ],
            "p2": [
                "0",
                "2",
            ],
            "p3": [
                "0",
                "3",
            ],
            "p4": [
                "0",
                "4",
            ],
            "p5": [
                "0",
                "5",
            ],
            "p6": [
                "0",
                "6",
            ],
        },
        "ai_season_id": "23xmv7sd8g3mg8n",
        "ai_status_id": 461,
        "match_id": "l7oqdoso827em51"
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