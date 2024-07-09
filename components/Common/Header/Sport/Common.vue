<template>
    <NuxtLink :to="`/${ ECommonSportSectionValue[ props.name ] }`">
        <article class="btn_-sports-icon">
            <img class="icon-1" :src="`/img/${ props.icon }`" :alt="ECommonSportSectionValue[ props.name ]" />
            <div class="football-1 football-4 smallsportsicon">{{ ECommonSportSectionValue[ props.name ] }}</div>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import { ECommonSportSectionValue, type TCommonSportSection } from '~/types/Common/sport';

const props = defineProps<{
    name: TCommonSportSection;
    icon: string;
}>();
</script>

<style scoped>
.icon-1 {
  height: 30px;
  position: relative;
  width: 30px;
}

.btn_-sports-icon {
  align-items: center;
  background-color: var(--catalina-blue);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  height: 55px;
  padding: 5px 3px;
  position: relative;
}

.football {
  color: var(--wt);
  margin-left: -1.00px;
  margin-right: -1.00px;
  text-align: center;
}

.football-1 {
  color: var(--wt);
  text-align: center;
}

.football-4 {
  font-weight: 600;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.smallsportsicon {
  font-family: var(--font-family-pretendard-semibold);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0;
}
</style>