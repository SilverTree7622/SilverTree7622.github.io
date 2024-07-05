<template>
    <div class="odds_-grop-odds mb-2">
        <!-- <NuxtLink to="/OddsTop"> -->
        <NuxtLink to="/">
            <div class="frame-30">
                <div class="text-26 valign-text-middle body2">{{ setFormat(props.top) }}</div>
            </div>
        </NuxtLink>
        <!-- <NuxtLink to="/OddsDraw"> -->
        <NuxtLink to="/">
            <div class="frame-30">
                <div class="text-27 valign-text-middle body2">{{ setFormat(props.draw) }}</div>
            </div>
        </NuxtLink>
        <!-- <NuxtLink to="/OddsLow"> -->
        <NuxtLink to="/">
            <div class="frame-306-odds">
                <div class="text-28 valign-text-middle body2">{{ setFormat(props.low) }}</div>
            </div>
        </NuxtLink>
        <div class="frame-307-odds">
            <div class="text-29 valign-text-middle headline3">{{ setFormatValue(props.value) }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    top: number;
    draw: number;
    low: number;
    value: number;
}>();

const setFormat = (value: number) => {
    return value.toString();
};

const setFormatValue = (value: number) => {
    return `+${ value }`;
};

</script>

<style scoped>
.odds_-grop-odds {
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 5px;
    height: 30px;
    justify-content: center;
    position: relative;
    /* width: 100%; */
}

.frame-30 {
  align-items: center;
  background-image: url(../img/btn-roundsquare2-2@2x.png);
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  position: relative;
  width: 89px;
}

.frame-306-odds {
  background-image: url(../img/btn-roundsquare2-2@2x.png);
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  position: relative;
  width: 89px;
}

.frame-307-odds {
  display: flex;
  height: 30px;
  justify-content: flex-end;
  position: relative;
  width: 25px;
}

.text-26 {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 33px;
}

.text-27 {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  margin-left: -1px;
  text-align: center;
  white-space: nowrap;
  width: 32px;
}

.text-28 {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  margin-left: -1px;
  margin-top: 8px;
  text-align: center;
  white-space: nowrap;
  width: 24px;
}

.text-29 {
  color: var(--bk);
  font-weight: 600;
  height: 17px;
  line-height: normal;
  margin-top: 7px;
  text-align: center;
  width: 25px;
}
</style>