<template>
    <div class="top_-scores_-content h-[181px]">
        <div class="top-scores_-top">
            <div class="frame-594">
                <img class="premier_-league_logo-1" :src="props.background ? `/img/${ props.background }` : `/img/premier-league-logo-1@2x.png`" />
                <div class="top-scores_-league">
                    <div class="epl body2">
                        {{ contentStore.getLeagueName(props.item) }}
                    </div>
                </div>
            </div>
            <div class="top-scores_-latest_-reply caption">
                <!-- <div class="text-1 text">{{ props.commentId }}</div> -->
                <div class="text-1 text">영구23456</div>
                <div class="rectangle-21063"></div>
                <p class="text-2 text-item">
                    <!-- {{ props.commentContext }} -->
                    심판 편파 오지네 ㅋㅋㅋㅋㅋㅋ드럽다정말 돈을얼마나 바른거야 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                </p>
            </div>
            <div class="btn_reply">
                <div class="frame-571">
                    <img class="icon_-reply" draggable="false" src="/img/icon-reply@2x.png" alt="Icon_Reply" />
                    <div class="x00-m caption">0.0 M</div>
                </div>
            </div>
        </div>
        <div class="frame-576">
            <div class="top-score">
                <img class="top-scores_-team-bg" draggable="false" :src="props.arrow ? `/img/${ props.arrow }` : `/img/topscores-teambg@2x.png`" alt="TopScores_TeamBG" />
                <div class="top-scores_-left_-team -mt-[88px]">
                    <div class="top-scores_-favourite_-left-team">
                        <CommonFavoriteStar class="pr-7" />
                        <div class="top-scores_-left-team">
                            <img
                                class="manchester-city"
                                draggable="false"
                                :src="contentStore.getParticipantSrc(props.item, 0)"
                                :alt="contentStore.getParticipantName(props.item, 0)"
                            />
                            <div class="manchester-city-2 valign-text-middle body2">
                                {{ contentStore.getParticipantName(props.item, 0) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="frame-575">
                <div class="top-scores_-time">
                    <div class="div-8 !font-bolder">
                        <div class="div-9 !font-bolder">
                            {{ getPrefix(props.sportSection, props.item.ai_status_id) }}
                        </div>
                        <div class="div-10 !font-bolder">
                            {{ getLeagueTime() }}
                        </div>
                    </div>
                    <!-- <div class="frame-573">
                        <div class="x1-h body2">
                            <span class="body2">
                                {{ getPrefix(props.sportSection, props.item.ai_status_id) }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-574">
                        <div class="text-3 text body2">
                            {{ getLeagueTime() }}
                        </div>
                    </div> -->
                </div>
                <div class="top-scores_-scoreboard">
                    <div class="flex-row y-full my-auto py-auto mt-[6px]">
                        <div class="number number-2 headline2 mr-3">
                            {{ contentStore.getScore(props.sportSection, 'home', props.item)[0] }}
                        </div>
                        <div class="text-4 text body2">:</div>
                        <div class="number-1 number-2 headline2">
                            {{ contentStore.getScore(props.sportSection, 'away', props.item)[0] }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-score">
                <img class="top-scores_-team-bg" draggable="false" :src="props.arrow ? `/img/${ props.arrow }` : `/img/topscores-teambg@2x.png`" alt="TopScores_TeamBG" style="transform:rotate(180deg);" />
                <div class="top-scores_-right_-team -mt-[88px]">
                    <div class="top-scores_-favourite_-right-team">
                        <CommonFavoriteStar class="pr-7" />
                        <div class="top-scores_-right-team">
                            <img
                                class="manchester-city"
                                draggable="false"
                                :src="contentStore.getParticipantSrc(props.item, 1)"
                                :alt="contentStore.getParticipantName(props.item, 1)"
                            />
                            <div class="manchester-city-2 valign-text-middle body2">
                                {{ contentStore.getParticipantName(props.item, 1) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img
            class="btn_-live-center cursor-pointer"
            src="/img/Btn_LiveCenter.svg"
            @click="clickLiveCenter"
        />
    </div>
</template>

<script setup lang="ts">
import { getPrefix } from '~/types';
import type { TCarouselUpdate } from '~/types/Common/Carousel';
import type { TCommonLiveRealTime } from '~/types/Common/Live';
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TMatchUpStoreConfig } from '~/types/matchUp';
import type { TSportScheduleTypes } from '~/types/schedule';

const props = defineProps<{
    sportSection: TCommonSportSection;
    item: TSportScheduleTypes;
    updateConfig?: TCarouselUpdate[];
    background?: string;
    arrow?: string;
}>();

const prev = reactive({
    timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> 0,
});

const contentStore = useContentStore();
const goStore = useGoStore();

const opt = reactive({
    ai_away_scores: <TCommonLiveRealTime['ai_away_scores']> contentStore.getScore(props.sportSection, 'away', props.item),
    ai_home_scores: <TCommonLiveRealTime['ai_home_scores']> contentStore.getScore(props.sportSection, 'home', props.item),
    ai_kickoff_timestamp: <TCommonLiveRealTime['ai_kickoff_timestamp']> props.item.ai_kickoff_timestamp ?? 0,
    ai_match_status: <TCommonLiveRealTime['ai_match_status']> props.item.ai_status_id,
    match_id: <TCommonLiveRealTime['match_id']> props.item.match_id,
});

const clickLiveCenter = () => {
    const config: TMatchUpStoreConfig = {
        match_id: props.item.match_id,
        leagueName: props.item.ai_competition_name,
        timestamp: props.item.ai_match_time,
        homeLogo: props.item.ai_home_team_img,
        homeName: props.item.ai_home_team_name,
        homeScore: contentStore.getScore(props.sportSection, 'home', props.item)[0],
        awayLogo: props.item.ai_away_team_img,
        awayName: props.item.ai_away_team_name,
        awayScore: contentStore.getScore(props.sportSection, 'away', props.item)[0],
        matchStatus: props.item.ai_status_id,
    };
    goStore.go_livetraker(props.item.match_id ?? '', config);
};

const getLeagueTime = () => {
    const {
        prevTimestamp,
        matchUpTime,
    } = contentStore.getLeagueTime(
        0, props.sportSection, opt.ai_match_status, opt.ai_kickoff_timestamp,
    );
    prev.timestamp = prevTimestamp;
    return matchUpTime;
};

onMounted(async () => {
    await nextTick();
    
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
/* screen - topu95scoresu95latest */

.top_-scores_-content {
    align-items: center;
    align-self: stretch;
    background-image: url(../img/top-scores-content-football@2x.png);
    background-position: 50% 50%;
    background-size: cover;
    object-fit: contain;
    border-radius: 6px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
    overflow: hidden;
    padding: 4px 0px;
    position: relative;
    width: 100%;
}

.top-scores_-top {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 0px 10px;
    position: relative;
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
    color: black;
}

.top-scores_-league {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 21px;
}

.epl {
    color: var(--wt);
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
    background-color: #0c4aa480;
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
    color: var(--wt);
    display: -webkit-box;
    font-weight: 500;
    height: 12px;
    overflow: hidden;
    position: relative;
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
    color: var(--wt);
    display: -webkit-box;
    flex: 1;
    font-weight: 500;
    height: 12px;
    overflow: hidden;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
}

.btn_reply {
    align-items: center;
    border-radius: 3px;
    display: flex;
    height: 14px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 47px;
}

.frame-571 {
    display: flex;
    gap: 5px;
    height: 14px;
    width: 47px;
}

.icon_-reply {
    height: 13px;
    width: 13px;
}

.x00-m {
    align-self: center;
    color: var(--wt);
    font-weight: 500;
    height: 12px;
    line-height: normal;
    margin-top: -2px;
    text-align: center;
    white-space: nowrap;
    width: 26px;
}

.frame-576 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    position: relative;
    width: 100%;
}

.top-score {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    height: 86px;
    position: relative;
}

.top-scores_-team-bg {
    align-self: stretch;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
    height: 88px;
}

.top-scores_-left_-team {
    display: flex;
    height: 86px;
    /* margin-top: -99px; */
    overflow: hidden;
    position: relative;
    width: 130px;
}

.top-scores_-favourite_-left-team {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 86px;
    justify-content: flex-end;
    padding: 0px 30px 0px 10px;
    position: relative;
    width: 141px;
}

.icon_-favourite_-default {
    background-image: url(../img/icon-favourite-default@2x.png);
    background-size: 100% 100%;
    height: 15px;
    position: relative;
    width: 15px;
}

.top-scores_-left-team {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 77px;
    justify-content: space-between;
    position: relative;
    width: 81px;
}

.chelsea {
    align-self: stretch;
    background-image: url(../img/chelsea@2x.png);
    background-size: 100% 100%;
    height: 45px;
    position: relative;
    width: 100%;
}

.name {
    align-self: stretch;
    color: var(--wt);
    font-weight: 600;
    height: 28px;
    line-height: normal;
    position: relative;
    text-align: center;
}

.frame-575 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0px 0px 20px;
    position: relative;
    width: 76px;
    /* padding-top: 42px; */
}

.top-scores_-time {
    align-items: center;
    align-self: stretch;
    display: flex;
    height: 17px;
    justify-content: center;
    position: relative;
    width: 100%;
}

.div-8 {
    justify-content: center;
    display: flex;
    gap: 0px;
    font-size: 12px;
}
.div-9 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #617acc 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  padding: 0 4px 0 2px;
}
.div-10 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
  padding-left: 4px;
}

.frame-573 {
    align-items: center;
    background: conic-gradient(from 180deg at 50% 50%, rgb(97, 122, 204) 0deg, rgb(221, 224, 227) 360deg);
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 0px 10px 0px 2px;
    position: relative;
}

.x1-h {
    color: var(--wt);
    font-weight: 600;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
}

.frame-574 {
    align-items: center;
    background-color: #dde0e3;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 0px 2px 0px 0px;
    position: relative;
}

.text-3 {
    color: var(--bk);
    font-weight: 600;
    margin-top: -1.00px;
    position: relative;
    width: fit-content;
}

.top-scores_-scoreboard {
    background-image: url(../img/vector-carousel@2x.png);
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

.top-scores_-right_-team {
    display: flex;
    height: 86px;
    /* margin-top: -99px; */
    overflow: hidden;
    position: relative;
    transform: rotate(180deg);
    width: 130px;
}

.top-scores_-favourite_-right-team {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 86px;
    padding: 0px 0px 0px 10px;
    position: relative;
    width: 141px;
}

.icon_-favourite_-default-1 {
    display: flex;
    height: 15px;
    position: relative;
    width: 15px;
}

.icon_-favourite_-default-2 {
    flex: 1;
    transform: rotate(-180deg);
    width: 15px;
}

.top-scores_-right-team {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 77px;
    justify-content: space-between;
    position: relative;
    transform: rotate(180deg);
    width: 81px;
}

.manchester-city {
    align-self: stretch;
    display: flex;
    height: 45px;
    position: relative;
    width: 100%;
    object-fit: contain;
}

.manchester-city-1 {
    flex: 1;
    transform: rotate(-360deg);
    width: 81px;
}

.manchester-city-2 {
    align-self: stretch;
    color: var(--wt);
    font-weight: 600;
    height: 28px;
    line-height: normal;
    margin-top: -79px;
    position: relative;
    text-align: center;
}

.btn_-live-center {
    align-items: center;
    /* background: conic-gradient(from 180deg at 50% 50%, rgb(129, 154, 236) 0deg, rgb(72, 97, 179) 180deg);
  background-image: url(../img/livecenter-mask@2x.png);
  background-size: 100% 100%; */
    border: 1px solid;
    border-color: #a2b6f8;
    border-radius: 3px;
    display: flex;
    height: 22px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    /* width: 186px; */
}

.frame-641 {
    display: flex;
    gap: 4px;
    margin-left: 1px;
    margin-top: 1px;
    width: 105px;
}

.icon_-live {
    height: 10px;
    margin-top: 3px;
    width: 20px;
}

.live-center {
    align-self: center;
    color: var(--wt);
    font-weight: 600;
    height: 17px;
    line-height: normal;
    text-align: center;
    width: 81px;
}

.number-2 {
  font-weight: 600;
  line-height: normal;
  min-height: 19px;
  min-width: 21px;
  text-align: center;
  white-space: nowrap;
}

.text-item {
    line-height: normal;
    /* white-space: nowrap; */
}
</style>