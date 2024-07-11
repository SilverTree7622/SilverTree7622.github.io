<template>
    <div class="frmu95mobile screen" style="background: white;">
        <CommonHeaderMain :result_nav_code="props.result.nav_code" />
        <CommonHeaderTabMain :sName="props.sName" :tab="opt.tab" />

        <div class="pt-[2px]"></div>

        <!-- carousel section -->
        <CommonCarouselSport
            :sName="props.sName"
            :tab="props.tab"
            :isPending="props.isPending"
            :list="props.sortedList"
        />

        <div class="pt-[2px]"></div>

        <div class="contents_-football_-live">
            <div class="frame-315">
                <div class="frame-369">
                    <div class="frame-5 biggerbody">
                        <div class="football-3 valign-text-middle football-4">{{ ECommonSportSectionValue[ props.sName ] }}</div>
                        <div class="text-1 valign-text-middle">({{ props.pagedListLength }})</div>
                    </div>
                    <div class="sport-title_-date_-set">
                        <CommonFilterByTime />
                        <CommonFilterDate ref="$date" :date="new Date()" @prev-tab="prevDate" @next-tab="nextDate" />
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
    pagedListLength: number;
    changeTab: () => Promise<void>;
    changeDate: () => Promise<void>;
    toggleByTime: () => Promise<void>;
    updateLiveRealTime: () => void;
}>();

const emit = defineEmits<{
    (e: 'change-tab'): void;
    (e: 'change-date'): void;
}>();

const opt = reactive({
    tab: <TCommonTabTypes>props.tab,
    useInitForChangingTab: <boolean>true,      // when init date filter section
});

const filterStore = useFilterStore();
const dateStore = useDateStore();
const liveIntervalLoadingStore = useLiveIntervalLoadingStore();
const leftStore = useLeftStore();
const route = useRoute();

const $date = ref();

// tab changed evt
watch(
    () => route.fullPath,
    async (p) => {
        filterStore.init();
        if (opt.useInitForChangingTab) {
            $date.value.init();
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
    }
);

// watch list item length for the time update
watch(
    () => props.sortedList.length,
    async (p) => {
        await props.updateLiveRealTime();
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

onMounted(async () => {
    await nextTick();
    await props.updateLiveRealTime();
    leftStore.onMountedSport(props.sName);
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
  padding: 1px 6px;
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