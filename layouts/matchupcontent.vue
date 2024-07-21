<template>
  <div class="frmu95mobile screen" style="background: #001226">
    <CommonHeaderMain :result_nav_code="props.result.nav_code" />

    <div ref="$headerSticky" class="sticky top-0 z-[1]">
      <CommonHeaderMatchUp
        ref="controlMatchUp"
        v-show="!opt.isSticky && updateOpt.basic"
        :sportSection="info.sportSection"
        :match_id="info.match_id"
        :matchStatus="info.matchStatus"
        :leagueName="info.leagueName"
        :timestamp="info.timestamp"
        :homeLogo="info.homeLogo"
        :homeName="info.homeName"
        :homeScore="info.homeScore"
        :awayLogo="info.awayLogo"
        :awayName="info.awayName"
        :awayScore="info.awayScore"
      />
    </div>

    <div class="sticky top-0 z-[1] p-0 m-0">
      <CommonHeaderMatchUpSticky
        ref="controlMatchUpSticky"
        v-show="opt.isSticky && updateOpt.sticky"
        :sportSection="info.sportSection"
        :match_id="info.match_id"
        :matchStatus="info.matchStatus"
        :leagueName="info.leagueName"
        :timestamp="info.timestamp"
        :homeLogo="info.homeLogo"
        :homeName="info.homeName"
        :homeScore="info.homeScore"
        :awayLogo="info.awayLogo"
        :awayName="info.awayName"
        :awayScore="info.awayScore"
      />
      <!-- <CommonHeaderLiveTracker v-show="!opt.isSticky" :match_id="info.match_id" /> -->
      <CommonHeaderTabMatchUp :sName="props.sName" :tab="props.tab" />
      <!-- <CommonHeader -->
      <CommonHeaderSubTabMatchUpStatsLive
        v-if="matchUpStore.chckIsLive() && props.tab === 'stats'"
        :selectedIdx="opt.selectedIdx"
        @selectTab="clickTab"
      /><CommonHeaderSubTabMatchUpStatsResult
        v-if="!matchUpStore.chckIsLive() && props.tab === 'stats'"
        :selectedIdx="opt.selectedIdx"
        @selectTab="clickTab"
      />
      <CommonHeaderSubTabMatchUpOdds
        v-if="props.tab === 'odds'"
        :selectedIdx="odds.selectedIdx"
        @selectTab="clickTabOdds"
      />
      <!-- <MatchUpStatsMainTab v-if="props.tab === 'stats'" :selectedIdx="opt.selectedIdx" @selectTab="clickTab" /> -->
    </div>

    <LoadingSpinner
      v-show="props.isPending"
      style="margin-top: 30px; margin-bottom: 50px"
    />
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

const { INIT_DATA } = useRuntimeConfig().public.CONSTANTS;
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

const clickTab = (idx: number) => {
  opt.selectedIdx = idx;
  emit("clickTab", opt.selectedIdx);
};

const clickTabOdds = (idx: number) => {
  odds.selectedIdx = idx;
  emit("clickTab", odds.selectedIdx);
};

onBeforeUnmount(async () => {
    
});

onMounted(async () => {
  await nextTick();
  scrollStore.setScroll2Top();
  // set matchup info config
  const matchUpConfig = matchUpStore.getConfig();
  info.match_id = (route.query["uuid"] as string) ?? matchUpConfig.match_id;
  const storageKey = `${INIT_DATA}_${"matchup"}_${info.match_id}`;
  const storageItem = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
  info.matchStatus = matchUpConfig.matchStatus || storageItem.matchStatus;
  info.leagueName = matchUpConfig.leagueName || storageItem.leagueName;
  info.timestamp = matchUpConfig.timestamp || storageItem.timestamp;
  info.homeLogo = matchUpConfig.homeLogo || storageItem.homeLogo;
  info.homeName = matchUpConfig.homeName || storageItem.homeName;
  info.homeScore = matchUpConfig.homeScore || (storageItem.homeScore ?? "");
  info.awayLogo = matchUpConfig.awayLogo || storageItem.awayLogo;
  info.awayName = matchUpConfig.awayName || storageItem.awayName;
  info.awayScore = matchUpConfig.awayScore || (storageItem.awayScore ?? "");
  if (info.leagueName) {
    localStorage.setItem(storageKey, JSON.stringify(info));
  }

  console.log("storageKey: ", storageKey);
  console.log("matchUpConfig: ", matchUpConfig);
  console.log("storageItem: ", storageItem);
  console.log("info: ", info);
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
        rootMargin: "-3% 0px 0px 0px",
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
