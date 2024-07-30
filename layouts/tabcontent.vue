<template>
    <div class="frmu95mobile screen" style="background: white;">
        <CommonHeaderMain :result_nav_code="props.result.nav_code" />
        <CommonHeaderTabMain :sName="props.sName" :tab="opt.tab" />

        <div class="pt-[2px]"></div>

        <!-- carousel section -->
        <CommonCarouselSport
            ref="$carousel"
            :sName="props.sName"
            :tab="props.tab"
            :isPending="props.isPending"
            :list="carouselOpt.list.length ? carouselOpt.list : []"
        />

        <div class="pt-[2px]"></div>

        <div class="contents_-football_-live">
            <div class="frame-315">
                <!-- sport, filter options section -->
                <div v-if="props.tab !== 'league'" class="frame-369">
                    <div class="frame-5 biggerbody">
                        <div class="football-3 valign-text-middle football-4">
                            {{ ECommonSportSectionValue[ props.sName ] }}
                        </div>
                        <div class="text-1 valign-text-middle">
                            ({{ props.isPending ? 0 : props.pagedList.length }})
                        </div>
                    </div>
                    <div class="sport-title_-date_-set">
                        <CommonFilterByTime />
                        <CommonFilterDate ref="$date" :date="new Date()" @prev-tab="prevDate" @next-tab="nextDate" />
                    </div>
                </div>
                <!-- league tab exclusive section -->
                <div v-else class="frame-369">
                    <div class="frame-5 biggerbody text-white">
                        POPULAR COUNTRIES
                    </div>
                </div>
                <div class="frame-578">
                    <!-- init content loading skeletons -->
                    <div v-show="props.isPending" class="mx-auto mt-10">
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </div>

                    <slot v-if="!props.isPending"></slot>

                    <!-- center content loading -->
                    <div v-show="props.contentIsPending" class="mx-auto mt-10">
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </div>
                    <!-- down stroke icon -->
                    <div v-show="!props.isOutOfContent && !props.isPending && !props.contentIsPending" class="mx-auto">
                        <svg data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            class="mx-auto h-8 w-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
                        </svg>
                    </div>
                    <!-- display this when slot has no items -->
                    <div v-show="!props.sortedList.length && !props.isPending" class="w-full text-center mb-16">
                        <CommonContentEmptyList />
                    </div>
                </div>
            </div>
        </div>
        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
import type { TCarouselUpdate } from '~/types/Common/Carousel';
import { ECommonSportSectionValue, type TCommonSportSection } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';
import type { TSportScheduleTypes } from '~/types/schedule';
import UtilDate from '~/utils/date';

const props = defineProps<{
    isPending: boolean;
    contentIsPending: boolean;
    isOutOfContent: boolean;
    sName: TCommonSportSection;
    tab: TCommonTabTypes;
    result: any;
    sortedList: TSportScheduleTypes[];
    pagedList: TSportScheduleTypes[];
    changeTab: () => Promise<void>;
    changeDate: () => Promise<void>;
    toggleByTime: () => Promise<void>;
    updateLiveRealTime: () => Promise<void>;
}>();

const opt = reactive({
    tab: <TCommonTabTypes>props.tab,
    useInitForChangingTab: <boolean>true,      // when init date filter section
});

const carouselOpt = reactive({
    list: <TSportScheduleTypes[]> [],
});

const {
    MAX_SHOW_CAROUSEL_CNT,
} = useRuntimeConfig().public.CONSTANTS;
const filterStore = useFilterStore();
const dateStore = useDateStore();
const liveIntervalLoadingStore = useLiveIntervalLoadingStore();
const leftStore = useLeftStore();
const contentStore = useContentStore();
const route = useRoute();

const $date = ref();
const $carousel = ref();

// tab changed evt
watch(
    () => route.fullPath,
    async (p) => {
        filterStore.init();
        if (opt.useInitForChangingTab) {
            $date.value && $date.value.init();
        }
        opt.tab = route.query['tab'] as TCommonTabTypes;
        if (opt.useInitForChangingTab) {
            await props.changeTab();
            await liveIntervalLoadingStore.changeTab(opt.tab);
        }
        if (!opt.useInitForChangingTab) {
            opt.useInitForChangingTab = true;
        }
    }
);

// date changed evt
watch(
    () => dateStore.getDate(),
    async (p) => {
        await props.changeDate();
        liveIntervalLoadingStore.setTabActive(false);
    }
);

// by time toggle evt
watch(
    () => filterStore.getTimeIsToggled(),
    async (p) => {
        await props.toggleByTime();
    }
);

// live tab, update infos
watch(
    () => liveIntervalLoadingStore.getRealTimeData(),
    async () => {
        await props.updateLiveRealTime();
        updateCarouselListViaLive();
    }
);

// watch list item length for the time update && search for the 
watch(
    () => props.sortedList.length,
    async (p) => {
        await update();
    },
);

const prevDate = (date: Date) => {
    const getNow = new Date(Date.now());
    const getDate = new Date(date);
    if (getNow.getTime() < getDate.getTime()) {
        return;
    }
    const tab = route.query['tab'];
    let targetTab = '';
    if (
        tab === undefined ||
        tab === 'live' ||
        tab === 'fixtures'
    ) targetTab = 'result';
    // exception conditions
    if (!targetTab) {
        return;
    }
    if (tab === 'fixtures' && UtilDate.chckDateIsToday(date)) {
        return;
    }
    // change tab
    if (UtilDate.chckDateIsToday(date)) {
        opt.useInitForChangingTab = false;
    }
    navigateTo({
        path: `/${ECommonSportSectionValue[props.sName]}`,
        query: {
            tab: targetTab,
        }
    });
};

const nextDate = (date: Date) => {
    const getNow = new Date(Date.now());
    const getDate = new Date(date);
    if (getNow.getTime() > getDate.getTime()) {
        return;
    }
    const tab = route.query['tab'];
    let targetTab = '';
    if (
        tab === undefined ||
        tab === 'live' ||
        tab === 'result'
    ) targetTab = 'fixtures';
    if (!targetTab) {
        return;
    }
    // change tab
    if (UtilDate.chckDateIsToday(date)) {
        opt.useInitForChangingTab = false;
    }
    navigateTo({
        path: `/${ECommonSportSectionValue[props.sName]}`,
        query: {
            tab: targetTab,
        }
    });
};

const update = async () => {
    await props.updateLiveRealTime();
    await updateCarouselList();
    updateCarouselListViaLive();
};

const updateCarouselList = async () => {
    carouselOpt.list = [];
    await nextTick();
    const prevList: TSportScheduleTypes[] = props.pagedList.filter( sortedItem => (sortedItem['topscore_id'] ?? 0) > 0 );
    if (prevList.length > MAX_SHOW_CAROUSEL_CNT) {
        prevList.sort((a, b) => new Date(a.ai_match_time).getTime() - new Date(b.ai_match_time).getTime() );
        carouselOpt.list = [];
        for (let i = 0; i++; i < MAX_SHOW_CAROUSEL_CNT) {
            carouselOpt.list.push(prevList[i]);
        }
        return;
    }
    carouselOpt.list = prevList;
};

// update scores & time & inning mostly
const updateCarouselListViaLive = () => {
    if (!$carousel.value) return;
    if (!$carousel.value.update) return;
    $carousel.value.update([] as TCarouselUpdate[]);
};

onMounted(async () => {
    await nextTick();
    leftStore.onMountedSport(props.sName);
    await update();
});

onBeforeUnmount(() => {
    leftStore.onBeforeUnmountSport();
});
</script>

<style scoped>
.contents_-football_-live {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 0px 2px;
  position: relative;
  width: 100%;
}


.frame-315 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--tory-blue);
  border-radius: 6px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 1px 0px 4px;
  position: relative;
  width: 100%;
}

.frame-5 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.frame-369 {
  align-items: center;
  align-self: stretch;
  background-color: var(--tory-blue);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  height: 34px;
  justify-content: space-between;
  overflow: hidden;
  padding: 4px 6px 4px 13px;
  position: relative;
  width: 100%;
}

.sport-title_-date_-set {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  justify-content: flex-end;
  position: relative;
}

.frame-578 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.text-1 {
  color: #92b8ef;
  font-weight: 600;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>