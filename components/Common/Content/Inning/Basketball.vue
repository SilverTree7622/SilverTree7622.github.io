<template>
  <div class="div-inning">
    <div class="div-2">
        <div class="div-3">
            <div class="div-4">1Q</div>
            <div class="div-5">Ended</div>
        </div>
        <div class="div-6">1 - 6</div>
    </div>
    <div class="div-7">
        <div class="div-8">
            <div class="div-9">2Q</div>
            <div class="div-10">Ended</div>
        </div>
        <div class="div-11">1 - 6</div>
    </div>
    <div class="div-12">
        <div class="div-13">
            <div class="div-14">3Q</div>
            <div class="div-15">Ended</div>
        </div>
        <div class="div-16">1 - 6</div>
    </div>
    <div class="div-17">
        <div class="div-18">
            <div class="div-19">4Q</div>
            <div class="div-20">00’</div>
        </div>
        <div class="div-21">1 - 6</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TBasketBallSchedule } from '~/types/BasketBall/schedule';

const props = defineProps<{
    league: TBasketBallSchedule;
}>();

const opt = reactive({
    spotlightCurrent: <number> 0,
    // scores
});

onMounted(async () => {
    await nextTick();
    
    console.log('props.league: ', props.league);
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
