<template>
    <div class="top_-scores_-content h-[181px]">
        <div class="top-scores_-top top-scores_">
            <div class="frame-594">
                <div class="premier_-league_logo-1"></div>
                <div class="top-scores_-league top-scores_">
                    <div class="epl body2">EPL</div>
                </div>
            </div>
            <div class="top-scores_-latest_-reply caption">
                <div class="text-1 text">영구23456</div>
                <div class="rectangle-21063"></div>
                <p class="text-2 text">심판 편파 오지네 ㅋㅋㅋㅋㅋㅋ드럽다정말 돈을얼마나 바른거야 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
            </div>
            <div class="btn_reply">
                <div class="frame-571">
                    <img class="icon_-reply" draggable="false" src="/img/icon-reply@2x.png" alt="Icon_Reply" />
                    <div class="x00-m caption">0.0 M</div>
                </div>
            </div>
        </div>
        <div class="frame-576">
            <div class="top-matchup_-favourite_-right-team">
                <CommonFavoriteStar class="pr-7" />
                <div class="top-scores_-right-team">
                    <div class="chelsea"></div>
                    <div class="name valign-text-middle body2">CHELSEA</div>
                </div>
            </div>
            <div class="top-matchup_-fixture top-matchup_">
                <div class="top-matchup_-time top-matchup_">
                    <div class="frame-573">
                        <div class="today body2">Today</div>
                    </div>
                    <div class="frame-574">
                        <div class="text-3 text body2">18:00</div>
                    </div>
                </div>
                <div class="vs valign-text-middle midbold">VS</div>
            </div>
            <div class="top-matchup_-favourite_-right-team-1">
                <CommonFavoriteStar class="pr-7" />
                <div class="top-scores_-right-team-1">
                    <div class="manchester-city">
                        <img class="manchester-city-1" src="/img/manchestercity@2x.png" alt="ManchesterCity" />
                    </div>
                    <div class="manchester-city-2 valign-text-middle body2">MANCHESTER<br />CITY</div>
                </div>
            </div>
        </div>
        <img class="btn_-live-center cursor-pointer" src="/img/Btn_VeiwMatchup.svg" @click="clickViewMatchUp" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    leagueLogo?: string;
    commentId?: string;
    commentContext?: string;
    commentLength?: number;
    homeLogo?: string;
    homeName?: string;
    homeScore?: string;
    awayLogo?: string;
    awayName?: string;
    awayScore?: string;
    match_id?: string;
    time1?: string;
    time2?: string;
}>();

const goStore = useGoStore();

const clickViewMatchUp = () => {
    // goStore.go_matchup();
};

onMounted(async () => {
    await nextTick();

});

onBeforeUnmount(() => {

});
</script>

<style scoped>
/* screen - fixturesu95carouselu95contentu95latest */
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
  width: 41px;
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
  gap: 4px;
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
  height: 108px;
  padding: 11px 0px 9px;
  width: 86px;
}

.top-matchup_-time {
  align-self: stretch;
  height: 14px;
  width: 100%;
}

.frame-573 {
  align-items: center;
  background: conic-gradient(from 180deg at 50% 50%, rgb(204, 92, 92) 0deg, rgb(221, 224, 227) 360deg);
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 0px 10px 0px 2px;
  position: relative;
}

.today {
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
  font-weight: 600;
  margin-top: -1.00px;
  width: fit-content;
}

.vs {
  align-self: stretch;
  color: var(--bk);
  font-weight: 600;
  line-height: normal;
  position: relative;
  text-align: center;
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
  gap: 4px;
  position: relative;
  transform: rotate(180deg);
}

.manchester-city {
  height: 64.66px;
  position: relative;
  width: 98px;
}

.manchester-city-1 {
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 98px;
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
  background: conic-gradient(from 180deg at 50% 50%, rgb(129, 154, 236) 0deg, rgb(72, 97, 179) 180deg);
  background-image: url(../img/livecenter-mask@2x.png);
  background-size: 100% 100%;
  border: 1px solid;
  border-color: #a2b7f9;
  border-radius: 3px;
  height: 22px;
  overflow: hidden;
  position: relative;
  width: 186px;
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
  white-space: nowrap;
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

</style>