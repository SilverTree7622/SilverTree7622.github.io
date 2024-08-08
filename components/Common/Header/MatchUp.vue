<template>
    <div class="header screen">
        <div class="frame-410 frame-1">
            <a target="_blank"><img class="icon_-line-arrow-1" src="/img/icon-linearrow-1@2x.png" alt="Icon_LineArrow"
                    @click="clickBack" />
            </a>
            <div class="frame-415 frame-1 ml-10">
                <div class="premier-league leaguetitle !text-2xl">{{ props.leagueName }}</div>
                <!-- <div class="x0000-04092024-tue body2">00:00, 04/09/2024, TUE</div> -->
                <div class="x0000-04092024-tue body2">{{ getTime(props.timestamp) }}</div>
            </div>
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="mr-2" />
        </div>
        <div class="live_-match-matchup">
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="mr-4" />
            <div class="live-match-matchup">
                <div class="frame-414 frame-1">
                    <img class="aston-villa-2" :src="props.homeLogo" :alt="props.homeName" />
                    <div class="aston-villa-3 valign-text-middle body2">{{ props.homeName }}</div>
                </div>
                <div class="frame-matchup frame-1">
                    <div class="frame frame-1">
                        <div v-if="getIsFinished(props.matchStatus) ?? false" class="finished headline3">{{ 'FINISHED' }}</div>
                        <div v-else class="finished headline3 w-full h-full p-1">{{ '' }}</div>

                        <h1 class="text-2 title !text-4xl">{{ getScore(props.matchStatus, props.homeScore, props.awayScore) }}</h1>
                    </div>
                    <a target="_blank"><img class="btn_-live-tracker-matchup"
                            src="/img/btn-livetracker@2x.png" alt="Btn_LiveTracker" />
                    </a>
                </div>
                <div class="frame-414 frame-1">
                    <img class="arsenal-2" :src="props.awayLogo" :alt="props.awayName" />
                    <div class="aston-villa-3 valign-text-middle body2">{{ props.awayName }}</div>
                </div>
            </div>
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TMatchUpStoreConfig } from '~/types/matchUp';
import UtilDate from '~/utils/date';

const props = defineProps<TMatchUpStoreConfig>();

const dateStore = useDateStore();
const matchUpStore = useMatchUpStore();
const router = useRouter();

const clickBack = () => {
    router.back();
};

const getScore = (matchStatus: number, homeScore: number | string, awayScore: number | string) => {
    const isFixtures = (
        matchStatus === 0 ||
        matchStatus === 1
    );
    return isFixtures ? `` : `${ homeScore ?? '' } - ${ awayScore ?? '' }`;
};

const getTime = (timestamp: number) => {
    // 00:00, 04/09/2024, TUE
    const standard = new Date(UtilDate.addMillisecond(timestamp));
    const time = `${ UtilDate.syncDigit(standard.getUTCHours()) }:${ UtilDate.syncDigit(standard.getUTCMinutes()) }`;
    const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][standard.getUTCDay()];
    return `${ time }, ${ dateStore.getFilterFormat(standard) }, ${ weekday }`;
};

const getIsFinished = (matchStatus: number): boolean => {
    return !matchUpStore.chckIsLive();
};

onMounted(async () => {
    await nextTick();
    
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
@import '@/public/css/matchup/header/styleguide.css';
@import '@/public/css/matchup/header/globals.css';
@import '@/public/css/matchup/header/frame-342-all-breakpoints.css';

.header .live_-match-matchup {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
}

.header .live-match-matchup {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 5px 2px;
  position: relative;
}

.header .btn_-live-tracker-matchup {
  /* cursor: pointer; */
  height: 24px;
  position: relative;
  width: 36px;
}

.header .frame-412-matchup {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 12px 5px;
}

.header .frame-matchup {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
}
</style>