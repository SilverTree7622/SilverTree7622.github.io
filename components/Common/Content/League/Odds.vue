<template>
    <div class="frame-317" :class="props.isLast ? 'rounded-b-lg' : 'rounded-t-lg'">
        <CommonContentHeadDate
            :id="''"
            :idx="props.idx"
            :title="dateStore.getLeagueFormat(props.date, false)"
        />
        <div class="live_-match">
            <CommonContentCountry :title="'ASTON VILLA'" :src="'/img/astonvilla@2x.png'" />
            <CommonContentMatch :time="'19:30'" />
            <CommonContentCountry :title="'ARSENAL'" :src="'/img/arsenal@2x.png'" />
            <CommonFavoriteStar
                :isToggled="false"
            />
        </div>
        <CommonContentOddsGrop
            :top="56"
            :draw="13.5"
            :low="1.05"
            :value="25"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    idx: number;
    date: Date;
    isLast?: boolean;
}>();

const dateStore = useDateStore();


</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.frame-317 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--bggray);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.live_-match {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  padding: 0px 10px;
  position: relative;
  /* width: 100%; */
}

.line {
  align-self: stretch;
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 100%;
}
</style>