
<template>
    <!-- match content -->
    <div class="live_-match">
        <div class="live-match-Jbo1mR live-match">
            <div class="group-5-AKR3e5 group-5">
                <img class="aston-villa-oDU2Nu aston-villa" :src="props.homeLogo" :alt="props.homeName" />
                <div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">{{ props.homeName }}</div>
            </div>
            <div class="score-AKR3e5 score">
                <img class="vector-eyBPRK vector" src="/img/vector-27@2x.png" alt="Vector" />
                <img class="vector-n1oFur vector" src="/img/vector-28@2x.png" alt="Vector" />
                <img class="vector-z3kuGS vector" src="/img/vector-29@2x.png" alt="Vector" />
                <div class="txt-live !text-[10px] mt-[1px]">LIVE</div>
                <div class="x100new pretendard-semi-bold-black-12px">
                    <span v-if="props.updateOpt.time" class="span0-TpclY9 body2">{{ props.time }}</span>
                    <!-- <span v-else class="span0-TpclY9 body2">{{ getLeagueTime(opt) }}</span> -->
                    <span class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span>
                </div>
                <div v-if="props.updateOpt.score1" class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">{{ props.homeScore }}</div>
                <div v-if="props.updateOpt.score2" class="x000-n1oFur x000 pretendard-semi-bold-black-20px">{{ props.awayScore }}</div>
            </div>
            <div class="group-6-AKR3e5 group-6">
                <img class="arsenal-x4WW4Z arsenal" :src="props.awayLogo" :alt="props.awayName" />
                <div class="arsenal-tGhDC5 valign-text-middle arsenal body2 !text-center !h-[24px]">{{ props.awayName }}</div>
            </div>
        </div>
        <CommonFavoriteStar :isToggled="false" />
        <div class="live-tracker">
            <a href="javascript:;" @click="props.goLiveTracker()">
                <img class="btn_-live-tracker" src="/img/btn-livetracker-9@2x.png" alt="Btn_LiveTracker" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    idx: number;
    homeLogo: string;
    homeName: string;
    homeScore: number;
    time: string;
    awayLogo: string;
    awayName: string;
    awayScore: number;
    goLiveTracker: () => void;
    updateOpt: {
        time: boolean;
        score1: boolean;
        score2: boolean;
    };
    isFavorite?: boolean;
}>();

onMounted(async () => {
    await nextTick();
});
</script>