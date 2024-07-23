<template>
    <div class="frmu95mobile screen" style="background: #001226">
        <CommonHeaderMain :result_nav_code="props.result.nav_code" />

        <div ref="$headerSticky" class="sticky top-0 z-[1]">
            <CommonHeaderMatchUp ref="$controlMatchUp" v-if="!props.isPending" v-show="!opt.isSticky && updateOpt.basic"
                :sportSection="info.sportSection" :match_id="info.match_id" :matchStatus="info.matchStatus"
                :leagueName="info.leagueName" :timestamp="info.timestamp" :homeLogo="info.homeLogo"
                :homeName="info.homeName" :homeScore="info.homeScore" :awayLogo="info.awayLogo"
                :awayName="info.awayName" :awayScore="info.awayScore" />
        </div>

        <div class="sticky top-0 z-[1] p-0 m-0">
            <CommonHeaderMatchUpSticky ref="$controlMatchUpSticky" v-if="!props.isPending" v-show="opt.isSticky && updateOpt.sticky"
                :sportSection="info.sportSection" :match_id="info.match_id" :matchStatus="info.matchStatus"
                :leagueName="info.leagueName" :timestamp="info.timestamp" :homeLogo="info.homeLogo"
                :homeName="info.homeName" :homeScore="info.homeScore" :awayLogo="info.awayLogo"
                :awayName="info.awayName" :awayScore="info.awayScore" />
            <CommonHeaderTabMatchUp v-if="!props.isPending" :sName="props.sName" :tab="props.tab" />
            <CommonHeaderSubTabMatchUpStatsLive v-if="!props.isPending && props.tab === 'stats'"
                :selectedIdx="opt.selectedIdx" @selectTab="clickTab" />
            <CommonHeaderSubTabMatchUpOdds v-if="props.tab === 'odds'" :selectedIdx="odds.selectedIdx"
                @selectTab="clickTabOdds" />
        </div>

        <LoadingSpinner v-show="props.isPending" style="margin-top: 30px; margin-bottom: 50px" />
        <div ref="$content" class="">
            <slot v-if="!props.isPending"></slot>
        </div>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TCommonMatchStatus } from "~/types/Common/status";
import type { TMatchUpStoreConfig } from "~/types/matchUp";

const props = defineProps<{
    isPending: boolean;
    sName: string;
    tab: string;
    changeTab: () => Promise<void>;
    result: any;
}>();

const emit = defineEmits<{
    (e: "clickTab", idx: number): void;
    (e: "clickTabOdds", idx: number): void;
}>();

const matchUpStore = useMatchUpStore();
const scrollStore = useScrollStore();
const route = useRoute();

const $controlMatchUp = ref();
const $controlMatchUpSticky = ref();

const updateOpt = reactive({
    basic: <boolean>true,
    sticky: <boolean>true,
});

const opt = reactive({
    isSticky: <boolean>false,
    stickyStandardValue: <number>180,
    selectedIdx: <number>0,
    scrollPosition: <number>0,
    observer: <IntersectionObserver | undefined>undefined,
});

const info = reactive<TMatchUpStoreConfig>({
    sportSection: <TCommonSportSection>"football",
    match_id: <string>"",
    matchStatus: <TCommonMatchStatus>0,
    leagueName: <string>"",
    timestamp: <number>0,
    homeLogo: <string>"",
    homeName: <string>"",
    homeScore: <number>0,
    awayLogo: <string>"",
    awayName: <string>"",
    awayScore: <number>0,
});

const odds = reactive({
    selectedIdx: <number>0,
});

const $headerSticky = ref();
const $content = ref();

// watch tab changed
watch(
    () => route.fullPath,
    async (p) => {
        await props.changeTab();
    }
);

// watch pending
watch(
    () => props.isPending,
    async (p) => {
        if (p) return;
        updateInfo();
    }
);

const clickTab = (idx: number) => {
    opt.selectedIdx = idx;
    emit("clickTab", opt.selectedIdx);
};

const clickTabOdds = (idx: number) => {
    odds.selectedIdx = idx;
    emit("clickTab", odds.selectedIdx);
};

const updateInfo = () => {
    // set matchup info config
    const matchUpConfig = matchUpStore.getConfig();
    info.match_id = (route.query["uuid"] as string) ?? matchUpConfig.match_id;
    info.matchStatus = matchUpConfig.matchStatus;
    info.leagueName = matchUpConfig.leagueName;
    info.timestamp = matchUpConfig.timestamp;
    info.homeLogo = matchUpConfig.homeLogo;
    info.homeName = matchUpConfig.homeName;
    info.homeScore = matchUpConfig.homeScore;
    info.awayLogo = matchUpConfig.awayLogo;
    info.awayName = matchUpConfig.awayName;
    info.awayScore = matchUpConfig.awayScore;
};

onBeforeUnmount(async () => {

});

onMounted(async () => {
    await nextTick();
    scrollStore.setScroll2Top();
    updateInfo();
    // set sticky logic
    if ($headerSticky.value) {
        opt.observer = undefined;
        opt.observer = new IntersectionObserver(
            ([e]) => {
                // console.log('e: ', e);
                if (!e.isIntersecting) {
                    opt.isSticky = true;
                } else {
                    opt.isSticky = false;
                }
            },
            {
                threshold: [1],
                rootMargin: "-4% 0px 0px 0px",
            }
        );
        opt.observer.observe($headerSticky.value);
    }

    updateOpt.basic = false;
    updateOpt.sticky = false;
    await nextTick();
    updateOpt.basic = true;
    updateOpt.sticky = true;
});

onBeforeUnmount(() => {
    if (opt.observer) {
        opt.observer.unobserve($headerSticky.value);
        opt.observer.disconnect();
        opt.observer = undefined;
    }
});
</script>

<style scoped></style>
