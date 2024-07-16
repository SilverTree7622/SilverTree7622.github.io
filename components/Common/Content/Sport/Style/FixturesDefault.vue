<template>
    <!-- <div class="live_-match" @click="goLiveTracker(league)">
        <div class="live-match-Y6utjY live-match">
            <div class="group-5-Z7bohL group-5">
                <img class="aston-villa-1xcxXp aston-villa" :src="contentStore.getParticipantSrc(props.league, 0)" :alt="contentStore.getParticipantName(props.league, 0)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(props.league, 0) }}</div>
            </div>
            <div class="vs-Z7bohL vs">
                <div class="x19-30 headline">{{ contentStore.getMatchTime(props.league) }}</div>
                <div class="vs-ij0TdP vs headline">VS</div>
            </div>
            <div class="frame-303-Z7bohL frame-303">
                <img class="btn_-round-square2-qGs8vj btn_-round-square2"
                    src="/img/btn-roundsquare2-2@2x.png" alt="Btn_RoundSquare2" />
                <div class="matchup valign-text-middle body2">MATCHUP</div>
            </div>
            <div class="group-6-Z7bohL group-6">
                <img class="arsenal-xEfJsb arsenal" :src="contentStore.getParticipantSrc(props.league, 1)" :alt="contentStore.getParticipantName(props.league, 1)" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ contentStore.getParticipantName(props.league, 1) }}</div>
            </div>
        </div>
        <div class="btn_-favorite_-check">
            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
            <div class="group-29-rplUIj smart-layers-pointers">
                <img class="star" src="/img/star-24@2x.png" alt="Star" />
            </div>
        </div>
    </div> -->
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
                    <div v-show="props.isToday" class="div-8">
                        <div class="div-9">TODAY</div>
                        <div class="div-10">{{ props.time }}</div>
                    </div>
                    <div v-show="!props.isToday" class="div-8">
                        <div class="div-9-not-today">Fixtures</div>
                        <div class="div-10">{{ props.time }}</div>
                    </div>
                    <div class="vs-fixtures headline">VS</div>
                    <img
                        loading="lazy"
                        src="/img/Btn_Matchup_Default.svg"
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
  time: string;
  awayLogo: string;
  awayName: string;
  goLiveTracker: () => void;
  isFavorite?: boolean;
  isToday?: boolean;
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
  min-height: 108px;
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
    #cc5c5c 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  padding: 0 10px 0 2px;
  padding-left: 4px;
}

.div-9-not-today {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background: conic-gradient(
    from 191deg at 112.82% -69.44%,
    #af5ecc 0deg,
    #dde0e3 360deg
  );
  color: #fff;
  text-align: right;
  padding: 0 10px 0 2px;
  padding-left: 4px;
}

.div-10 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  background-color: #dde0e3;
  color: #000;
  white-space: nowrap;
  padding-right: 2px;
}

.vs-fixtures {
  color: var(--bk);
  font-style: normal;
  font-weight: 600;
  height: 29px;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 32px;
  margin-top: 6px;
  font-size: x-large;
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
