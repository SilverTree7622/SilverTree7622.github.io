<template>
    <div class="top_-scores_-content h-[181px]">
        <div class="frame-576">
            <div class="top-matchup_-favourite_-right-team mr-5">
                <CommonFavoriteStar class="pr-7" />
                <div class="top-scores_-right-team">
                    <div class="manchester-city">
                        <img class="manchester-city-1" src="/img/manchestercity@2x.png" alt="ManchesterCity" />
                    </div>
                    <div class="name valign-text-middle body2">
                        CHELSEA
                    </div>
                </div>
            </div>
            <div class="div top-matchup_">
                <div class="frame-matchup-league">
                    {{ props.item.name }}
                </div>
                <div class="div-3">
                    <div class="div-4">FINISHED</div>
                    <div class="div-5">FT</div>
                </div>
                <div class="div-6">
                    <div class="div-7">00</div>
                    <div class="div-8">:</div>
                    <div class="div-9">00</div>
                </div>
            </div>
            <div class="top-matchup_-favourite_-right-team-1 ml-5">
                <CommonFavoriteStar class="pr-7" />
                <div class="top-scores_-right-team-1">
                    <div class="manchester-city">
                        <img class="manchester-city-1" src="/img/manchestercity@2x.png" alt="ManchesterCity" />
                    </div>
                    <div class="manchester-city-2 valign-text-middle body2">
                        MANCHESTER<br />CITY
                    </div>
                </div>
            </div>
        </div>
        <img class="btn_-veiw-matchup cursor-pointer" src="~/public/img/Btn_Statistics.svg" @click="clickStatistics" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    item: any;
    // leagueLogo?: string;
    // commentId?: string;
    // commentContext?: string;
    // commentLength?: number;
    // homeLogo?: string;
    // homeName?: string;
    // homeScore?: string;
    // awayLogo?: string;
    // awayName?: string;
    // awayScore?: string;
    // match_id?: string;
    // time1?: string;
    // time2?: string;
}>();

const goStore = useGoStore();

const clickStatistics = () => {
    // goStore.go_matchup();
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
.top_-scores_-content {
    align-items: center;
    align-self: stretch;
    background-color: var(--wt);
    border-radius: 6px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    padding: 12px 0px;
    position: relative;
    width: 100%;
}

.top-scores_-top {
    align-self: stretch;
    flex: 0 0 auto;
    gap: 8px;
    padding: 0px 10px;
    width: 100%;
}

.frame-594 {
    align-items: center;
    align-self: stretch;
    border-radius: 3px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 2px;
    justify-content: center;
    padding: 3px 4px;
    position: relative;
}

.premier_-league_logo-1 {
    background-image: url(../img/premier-league-logo-1@2x.png);
    background-size: 100% 100%;
    height: 15px;
    position: relative;
    width: 15.75px;
}

.top-scores_-league {
    justify-content: center;
    width: 21px;
}

.epl {
    color: var(--bk);
    font-weight: 600;
    line-height: normal;
    margin-top: -2.00px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
}

.top-scores_-latest_-reply {
    align-items: center;
    align-self: stretch;
    border-radius: 3px;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 5px;
    padding: 3px 4px;
    position: relative;
}

.text-1 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    font-weight: 500;
    height: 12px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    width: auto;
}

.rectangle-21063 {
    background-color: #e0e4ea;
    height: 15px;
    position: relative;
    width: 1px;
}

.text-2 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    flex: 1;
    font-weight: 500;
    height: 12px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
}

.btn_reply {
    border-radius: 3px;
    height: 14px;
    overflow: hidden;
    position: relative;
    width: 47px;
}

.frame-571 {
    align-items: flex-start;
    display: flex;
    gap: 5px;
    height: 14px;
    min-width: 47px;
}

.icon_-reply {
    height: 13px;
    width: 13px;
}

.x00-m {
    color: #b7bbc0;
    font-weight: 500;
    line-height: normal;
    margin-top: -1px;
    min-height: 12px;
    min-width: 26px;
    text-align: center;
    white-space: nowrap;
}

.frame-576 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 2px;
    justify-content: center;
    position: relative;
    width: 100%;
}

.top-matchup_-favourite_-right-team {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 2px;
    margin-left: -3.00px;
    padding: 0px 0px 0px 10px;
    position: relative;
}

.icon_-favourite_-default {
    height: 22px;
    position: relative;
    width: 22px;
}

.icon_-favourite_-default-1 {
    top: 0;
}

.top-scores_-right-team {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 30px;
    position: relative;
}

.chelsea {
    background-image: url(../img/chelsea@2x.png);
    background-size: 100% 100%;
    height: 64.66px;
    position: relative;
    width: 98px;
}

.name {
    color: var(--bk);
    font-weight: 600;
    height: 28px;
    line-height: normal;
    position: relative;
    text-align: center;
    width: 98px;
}

.top-matchup_-fixture {
    flex-direction: column;
    gap: 4px;
    height: 118px;
    /* padding: 11px 0px 9px; */
    width: 86px;
}

.top-matchup_ {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
}

.frame-matchup-league {
    width: auto;
    max-width: 80px;
    justify-content: center;
    border-color: #6C6E71;
    border-style: solid;
    border-bottom-width: 4px;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    font: 600 12px Pretendard, sans-serif;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
}

.top-matchup_-time {
    align-self: stretch;
    height: 14px;
    width: 100%;
}

.text-3 {
    font-weight: 600;
    margin-top: -1.00px;
    width: fit-content;
}


.top-matchup_-favourite_-right-team-1 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 2px;
    margin-right: -3.00px;
    padding: 0px 0px 0px 10px;
    position: relative;
    transform: rotate(180deg);
}

.icon_-favourite_-default-2 {
    top: 2px;
    transform: rotate(-180deg);
}

.top-scores_-right-team-1 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 30px;
    position: relative;
    transform: rotate(180deg);
}

.manchester-city {
    height: 64.66px;
    position: relative;
    width: 98px;
}

.manchester-city-1 {
    height: 86px;
    left: 0;
    position: relative;
    top: 0;
    margin: auto;
}

.manchester-city-2 {
    color: var(--bk);
    font-weight: 600;
    height: 28px;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    text-align: center;
    width: 98px;
}

.btn_-veiw-matchup {
    height: 20px;
    position: relative;
    width: 172px;
}

.view-matchup {
    color: var(--wt);
    font-weight: 600;
    left: 42px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 2px;
}

.btn_-goround_-set {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
}

.btn_-goround-1 {
    background-color: var(--tory-blue);
    border-radius: 3px;
    height: 6px;
    position: relative;
    width: 6px;
}

.btn_-goround {
    border: 1px solid;
    border-color: var(--tory-blue);
    border-radius: 3px;
    height: 6px;
    position: relative;
    width: 6px;
}

.icon_-favourite_-default-3 {
    height: 20px;
    left: 1px;
    position: absolute;
    width: 21px;
}

.text {
    color: var(--bk);
    line-height: normal;
    position: relative;
    /* white-space: nowrap; */
}

.top-matchup_ {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
}

.top-scores_ {
    align-items: center;
    display: flex;
    position: relative;
}


.top-scores_-scoreboard {
    background-size: 100% 100%;
    height: 30px;
    position: relative;
    width: 75px;
}

.flex-row {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    /* gap: 7px;
    height: 19px;
    left: 8px;
    min-width: 60px;
    top: 4px; */
}

.number {
    color: var(--bk);
}

.text-4 {
    color: var(--bk);
    font-weight: 600;
    margin-top: 1.0px;
    min-height: 14px;
    min-width: 4px;
    text-align: center;
}

.number-1 {
    color: #6a6a6a;
}

.number-2 {
    font-weight: 600;
    line-height: normal;
    min-height: 19px;
    min-width: 21px;
    text-align: center;
    white-space: nowrap;
    font-size: xx-large;
}


.div {
    display: flex;
    max-width: 84px;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    padding: 11px 0 9px;
}

.div-2 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-color: rgba(108, 110, 113, 1);
    border-style: solid;
    border-bottom-width: 2px;
    align-self: center;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    padding: 0 20px;
}

.div-3 {
    justify-content: center;
    display: flex;
    margin-top: 4px;
    gap: 0px;
    padding: 0 1px;
}

.div-4 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    background: conic-gradient(from 187deg at 103.08% -71.43%,
            #6b6d6f 0deg,
            #dde0e3 360deg);
    color: #fff;
    text-align: right;
    text-transform: capitalize;
    padding: 0 10px 0 2px;
}

.div-5 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    background-color: #dde0e3;
    color: #000;
    text-transform: uppercase;
    padding: 0 2px 0 20px;
}

.div-6 {
    justify-content: center;
    display: flex;
    margin-top: 4px;
    gap: 10px;
    font-size: 24px;
    color: #000;
    text-align: center;
    padding: 0 20px;
}

.div-7 {
    color: #6a6a6a;
    font-family: Pretendard, sans-serif;
}

.div-8 {
    font-family: Pretendard, sans-serif;
}

.div-9 {
    font-family: Pretendard, sans-serif;
}
</style>