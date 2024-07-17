<template>
  <div class="div-inning">
        <div v-for="(item, idx) in opt.list" class="div-2">
            <div class="div-3">
                <div :class="opt.currentSpotlight === idx ? 'div-19' : 'div-4'">
                    {{ item.prefix }}
                </div>
                <div class="div-5">{{ item.time }}</div>
            </div>
            <div class="div-6">
                <span :class="opt.currentSpotlight === idx && item.isHomeScoreBlack && 'text-black'">
                    {{ item.homeScore }}
                </span>
                -
                <span :class="opt.currentSpotlight === idx && item.isAwayScoreBlack && 'text-black'">
                    {{ item.awayScore }}
                </span>
            </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '~/types';
import { getPrefix } from '~/types';
import type { TBasketBallSchedule } from '~/types/BasketBall/schedule';

const props = defineProps<{
    league: TBasketBallSchedule;
}>();

type TInningDataSet = {
    prefix: string;
    time: string;
    homeScore: number;
    awayScore: number;
    isHomeScoreBlack: boolean;
    isAwayScoreBlack: boolean;
};

const opt = reactive({
    currentSpotlight: <number> 0,
    list: <TInningDataSet[]> [],
});

const update = () => {
    const ai_kickoff_timestamp = props.league['ai_kickoff_timestamp'] ?? 0;
    const tmpOptList: TInningDataSet[] = [];
    const dummyData: TInningDataSet = {
        prefix: getPrefix('basketball', props.league.ai_status_id),
        time: getTime('basketball', props.league.ai_status_id, ai_kickoff_timestamp),
        homeScore: props.league.ai_home_scores[1],
        awayScore: props.league.ai_away_scores[1],
        isHomeScoreBlack: props.league.ai_home_scores[1] >= props.league.ai_away_scores[1],
        isAwayScoreBlack: props.league.ai_home_scores[1] <= props.league.ai_away_scores[1],
    };

    if (props.league.ai_status_id >= 2) tmpOptList.push(dummyData);
    if (props.league.ai_status_id >= 4) tmpOptList.push(dummyData);
    if (props.league.ai_status_id >= 6) tmpOptList.push(dummyData);
    if (props.league.ai_status_id >= 8) tmpOptList.push(dummyData);

    if (props.league.ai_status_id === 2 || props.league.ai_status_id === 3) {
        opt.currentSpotlight = 0;
        tmpOptList[0].homeScore = props.league.ai_home_scores[1];
        tmpOptList[0].awayScore = props.league.ai_away_scores[1];
        const { homeScore, awayScore, } = tmpOptList[0];
        tmpOptList[0].isHomeScoreBlack = (homeScore >= awayScore);
        tmpOptList[0].isAwayScoreBlack = (homeScore <= awayScore);
    }
    if (props.league.ai_status_id === 3) {
        tmpOptList[0].time = 'Ended';
    }
    
    if (props.league.ai_status_id === 4 || props.league.ai_status_id === 5) {
        opt.currentSpotlight = 1;
        tmpOptList[1].homeScore = props.league.ai_home_scores[2];
        tmpOptList[1].awayScore = props.league.ai_away_scores[2];
        const { homeScore, awayScore, } = tmpOptList[1];
        tmpOptList[1].isHomeScoreBlack = (homeScore >= awayScore);
        tmpOptList[1].isAwayScoreBlack = (homeScore <= awayScore);
    }
    if (props.league.ai_status_id === 5) {
        tmpOptList[1].time = 'Ended';
    }
        
    if (props.league.ai_status_id === 6 || props.league.ai_status_id === 7) {
        opt.currentSpotlight = 2;
        tmpOptList[2].homeScore = props.league.ai_home_scores[3];
        tmpOptList[2].awayScore = props.league.ai_away_scores[3];
        const { homeScore, awayScore, } = tmpOptList[2];
        tmpOptList[2].isHomeScoreBlack = (homeScore >= awayScore);
        tmpOptList[2].isAwayScoreBlack = (homeScore <= awayScore);
    }
    if (props.league.ai_status_id === 7) {
        tmpOptList[2].time = 'Ended';
    }
        
    if (props.league.ai_status_id === 8 || props.league.ai_status_id === 9) {
        opt.currentSpotlight = 3;
        tmpOptList[3].homeScore = props.league.ai_home_scores[4];
        tmpOptList[3].awayScore = props.league.ai_away_scores[4];
        const { homeScore, awayScore, } = tmpOptList[3];
        tmpOptList[3].isHomeScoreBlack = (homeScore >= awayScore);
        tmpOptList[3].isAwayScoreBlack = (homeScore <= awayScore);
    }
    if (props.league.ai_status_id === 9) {
        tmpOptList[3].time = 'Ended';
    }

    opt.list = tmpOptList;
};

onMounted(async () => {
    await nextTick();
    update();
});
</script>

<style scoped>
.div-inning {
  justify-content: center;
  align-self: stretch;
  display: flex;
  gap: 20px;
  font-weight: 600;
  padding: 0 2px;
}
.div-inning .div-2 {
  display: flex;
  flex-direction: column;
}
.div-inning .div-3 {
  justify-content: center;
  display: flex;
  gap: 0px;
  font-size: 8px;
  white-space: nowrap;
}
.div-inning .div-4 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #6d6f74 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  padding: 0 10px 0 2px;
}
.div-inning .div-5 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  padding-right: 2px;
}
.div-inning .div-6 {
  color: #85878e;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  font: 12px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-inning .div-7 {
  display: flex;
  flex-direction: column;
}
.div-inning .div-8 {
  justify-content: center;
  display: flex;
  gap: 0px;
  font-size: 8px;
}
.div-inning .div-9 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #6d6f74 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  padding: 0 10px 0 2px;
}
.div-inning .div-10 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
}
.div-inning .div-11 {
  color: #85878e;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  font: 12px Pretendard, sans-serif;
}
.div-inning .div-12 {
  display: flex;
  flex-direction: column;
}
.div-inning .div-13 {
  justify-content: center;
  display: flex;
  gap: 0px;
  font-size: 8px;
}
.div-inning .div-14 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #6d6f74 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  padding: 0 10px 0 2px;
}
.div-inning .div-15 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
}
.div-inning .div-16 {
  color: #85878e;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  font: 12px Pretendard, sans-serif;
}
.div-inning .div-17 {
  display: flex;
  flex-direction: column;
}
.div-inning .div-18 {
  justify-content: center;
  display: flex;
  gap: 0px;
  font-size: 8px;
}
.div-inning .div-19 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #617acc 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  padding: 0 10px 0 2px;
}
.div-inning .div-20 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
}
.div-inning .div-21 {
  color: #000;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  font: 12px Pretendard, sans-serif;
}
</style>
