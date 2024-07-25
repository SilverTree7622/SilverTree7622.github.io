<template>
  <div class="div-line-up-bench">
        <div class="div-2">On the bench</div>
        <!-- home away info -->
        <div class="div-3">
            <div class="div-4-logo-name-left px-auto">
                <img class="w-[25px] h-[25px]" :src="props.homeLogo" />
                <span>
                    {{ props.homeName }}
                </span>
            </div>
            <div class="div-7-logo-name-right px-auto">
                <img class="w-[25px] h-[25px]" :src="props.awayLogo" />
                <span>
                    {{ props.awayName }}
                </span>
            </div>
        </div>
        <template v-for="(item, idx) in opt.longestList">
            <div :class="((opt.longestList.length - 1) === idx) ? 'div-17' : 'div-10' ">
                <!-- home part -->
                <div class="div-11">
                    <template v-if="props.homeList[idx]" >
                        <div class="div-12">
                            {{ `#${ props.homeList[idx].shirt_number }` }}
                        </div>
                        <img
                            loading="lazy"
                            :src="props.homeList[idx].logo || '/img/non-available-player1-cirle-1@2x.png'"
                            class="img"
                        />
                        <div class="div-13">
                            {{ UtilString.convertLong2ShortName(props.homeList[idx].name) }}
                        </div>
                    </template>
                </div>
                <!-- away part -->
                <div class="div-14">
                    <template v-if="props.awayList[idx]" >
                        <div class="div-12">
                            {{ `#${ props.awayList[idx].shirt_number }` }}
                        </div>
                        <img
                            loading="lazy"
                            :src="props.awayList[idx].logo || '/img/non-available-player1-cirle-1@2x.png'"
                            class="img"
                        />
                        <div class="div-16">
                            {{ UtilString.convertLong2ShortName(props.awayList[idx].name) }}
                        </div>
                    </template>
                </div>
            </div>
        </template>
  </div>
</template>

<script setup lang="ts">
import type { TMatchUpLineUpPlayer } from '~/types/FootBall/lineUp';
import UtilString from '~/utils/string';

const props = defineProps<{
    homeLogo: string;
    homeName: string;
    homeList: TMatchUpLineUpPlayer[];
    awayLogo: string;
    awayName: string;
    awayList: TMatchUpLineUpPlayer[];
}>();

const opt = reactive({
    longestList: <TMatchUpLineUpPlayer[]> [],
});

onMounted(async () => {
    await nextTick();
    opt.longestList = props.homeList.length > props.awayList.length ? props.homeList : props.awayList;
});
</script>

<style scoped>
.div-line-up-bench {
  align-self: stretch;
  border-radius: 6px;
  background-color: #0c4aa4;
  display: flex;
  /* max-width: 360px; */
  flex-direction: column;
  color: #000;
  padding: 0 6px;
}
.div-2 {
  border-radius: 10px 10px 0px 0px;
  background-color: #0c4aa4;
  margin-top: 4px;
  color: #fff;
  padding: 8px 13px;
  font: 600 15px Pretendard, sans-serif;
}
.div-3 {
  display: flex;
  white-space: nowrap;
  text-align: center;
}
.div-4-logo-name-left {
  align-items: center;
  border-radius: 6px 0px 0px 0px;
  background-color: #e0e4ea;

  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-5 {
  align-self: stretch;
  margin: auto 0;
  font: 500 10px Pretendard, sans-serif;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
  align-self: stretch;
}
.div-6 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}

.div-7-logo-name-right {
  align-items: center;
  border-radius: 0px 6px 0px 0px;
  background-color: #e0e4ea;
  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-8 {
  align-self: stretch;
  margin: auto 0;
  font: 500 10px Pretendard, sans-serif;
}
.div-9 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}
.div-10 {
  display: flex;
  white-space: nowrap;
  text-align: center;
}
.div-11 {
  align-items: center;
  background-color: #f8f8f8;
  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-12 {
  align-self: stretch;
  margin: auto 0;
  font: 800 10px Pretendard, sans-serif;
  width: 16px;
  text-align: left;
  margin-left: 6px;
}
.div-13 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}
.div-14 {
  align-items: center;
  background-color: #f8f8f8;
  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-16 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}
.div-17 {
  display: flex;
  white-space: nowrap;
  text-align: center;
}
.div-18 {
  align-items: center;
  border-radius: 0px 0px 0px 6px;
  background-color: #f8f8f8;
  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-19 {
  align-self: stretch;
  margin: auto 0;
  font: 500 10px Pretendard, sans-serif;
}
.div-20 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}
.div-21 {
  align-items: center;
  border-radius: 0px 0px 6px 0px;
  background-color: #f8f8f8;
  display: flex;
  gap: 8px;
  flex: 1;
  padding: 4px;
  border: 1px solid rgba(224, 228, 234, 1);
}
.div-22 {
  align-self: stretch;
  margin: auto 0;
  font: 500 10px Pretendard, sans-serif;
}
.div-23 {
  align-self: stretch;
  margin: auto 0;
  font: 400 13px Pretendard, sans-serif;
}
</style>
