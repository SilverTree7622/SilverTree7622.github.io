<template>
    <div class="fr_-contents_-football_-fixtures_-upper" :class="props.isLast ? 'rounded-b-lg' : 'rounded-t-lg'">
        <CommonContentHeadDate
            :id="props.id"
            :idx="props.idx"
            :name="'league_name'"
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
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string;
    idx: number;
    date: number;
    isLast?: boolean;
}>();

const dateStore = useDateStore();

</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.fr_-contents_-football_-fixtures_-upper {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--bggray);
  /* border-radius: 10px 10px 0px 0px; */
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