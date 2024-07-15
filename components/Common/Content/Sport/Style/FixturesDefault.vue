<template>
  <div class="live-match-default">
    <div class="div">
      <div class="div-2 mr-4">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b030b330a14507ae7bc561988ace8c9d732e6bab57d62be5414bbadbc69f44?"
            class="img"
        />
        <div class="div-3">0.0 M</div>
      </div>
      <div class="div-4">
        <CommonFavoriteStar :isFavorite="false" />
        <div class="div-5">
            <img loading="lazy" class="img-3" :src="props.homeLogo" :alt="props.homeName" />
            <div class="div-6">
                {{ props.homeName }}
            </div>
        </div>
        <div class="div-7">
            <div class="div-8">
                <div class="div-9">1 H</div>
                <div class="div-10">{{ props.time }}</div>
            </div>
            <div class="div-11">
                <div class="div-12">{{ props.homeScore }}</div>
                <div class="div-13">:</div>
                <div class="div-14">{{ props.awayScore }}</div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcfc3d3b9f672dda4a04926881018ca0991d53f999c04d40a2bd7594a6984eff?"
                class="img-4 cursor-pointer"
                @click="props.goLiveTracker()"
            />
        </div>
        <div class="div-15">
            <img loading="lazy" :src="props.awayLogo" :alt="props.awayName" class="img-5" />
            <div class="div-16">
                {{ props.awayName }}
            </div>
        </div>
        <CommonFavoriteStar :isFavorite="false" class="mr-4" />
      </div>
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

<style scoped>
.live-match-default {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 4px 0px;
  justify-content: center;
  padding: 0px 4px;
  position: relative;
  width: 100%;
}

.div {
  align-self: stretch;
  border-color: rgba(224, 228, 234, 1);
  border-style: solid;
  border-bottom-width: 1px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.div-2 {
  justify-content: center;
  border-radius: 3px;
  align-self: end;
  display: flex;
  margin-top: 4px;
  gap: 6px;
  font-size: 10px;
  color: #b8bbc1;
  font-weight: 500;
  text-align: center;
  padding: 1px 0;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 13px;
}
.div-3 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
.div-4 {
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 4px;
  gap: 4px;
  font-weight: 600;
  padding: 2px 10px;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
}
.div-5 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 4px;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
  align-self: center;
}
.div-6 {
  font-family: Pretendard, sans-serif;
  margin-top: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: auto;
}
.div-7 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0 8px;
}
.div-8 {
  justify-content: center;
  display: flex;
  gap: 0px;
  font-size: 12px;
  text-transform: uppercase;
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
  padding: 0 10px 0 2px;
}
.div-10 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
}
.div-11 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  margin-top: 4px;
  gap: 10px;
  font-size: 24px;
  color: #000;
  white-space: nowrap;
  text-align: center;
}
.div-12 {
  color: #6a6a6a;
  font-family: Pretendard, sans-serif;
}
.div-13 {
  font-family: Pretendard, sans-serif;
}
.div-14 {
  font-family: Pretendard, sans-serif;
}
.img-4 {
  aspect-ratio: 3.13;
  object-fit: auto;
  object-position: center;

  margin-top: 4px;
}
.div-15 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #000;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  padding: 4px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
  align-self: center;
}
.div-16 {
  font-family: Pretendard, sans-serif;
  margin-top: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: auto;
}
.img-6 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
}
</style>
