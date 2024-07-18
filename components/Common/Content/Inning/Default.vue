<template>
  <div class="div-inning">
        <img 
            v-if="getIsOverMaxCnt()"
            class=""
            src="/img/3dots.svg"
        />
        <div v-for="(item, idx) in getSortedList(props.list)" class="div-2">
            <div class="div-3">
                <div :class="getCurrentInningSpotlightIdx(idx, props.list) ? 'div-19' : 'div-4'">
                    {{ item.prefix }}
                </div>
                <div class="div-5">{{ item.time }}</div>
            </div>
            <div class="div-6">
                <span :class="getCurrentInningSpotlightIdx(idx, props.list) && item.isHomeScoreBlack && 'text-black'">
                    {{ item.homeScore }}
                </span>
                -
                <span :class="getCurrentInningSpotlightIdx(idx, props.list) && item.isAwayScoreBlack && 'text-black'">
                    {{ item.awayScore }}
                </span>
            </div>
        </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    list: TInningDataSet[];
}>();

const {
    MAX_SHOW_INNING_CNT,
} = useRuntimeConfig().public.CONSTANTS;

const getIsOverMaxCnt = (): boolean => {
    return props.list.length > MAX_SHOW_INNING_CNT;
};

const getSortedList = (list: TInningDataSet[]): TInningDataSet[] => {
    const isOver = getIsOverMaxCnt();
    if (isOver) {
        const length = list.length;
        const value = length - MAX_SHOW_INNING_CNT;
        const tmpList: TInningDataSet[] = [];
        list.map((item, idx) => {
            if (idx < value) return false;
            return tmpList.push(list[idx]);
        });
        return tmpList;
    }
    return list;
};

const getCurrentInningSpotlightIdx = (idx: number, list: TInningDataSet[]): boolean => {
    const length = getSortedList(list).length;
    return (length - 1) === idx;
};

onMounted(async () => {
    await nextTick();    
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
