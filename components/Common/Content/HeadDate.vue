<template>
    <div
        v-if="props.hasLeagueTag"
        :class="getClass()"
        @click="getClick()"
    >
        <USkeleton v-if="props.isPending === true" class="w-[15px] h-[15px] relative rounded-full" />
        <img v-if="!props.isPending && props.src" class="flag_-circle_eng" :src="props.src" :alt="props.alt ?? props.title" />
        <USkeleton v-if="props.isPending === true" class="w-[100px] h-[15px]" />
        <div v-if="!props.isPending" :class="props.src ? `premier-league-lE9kB9 premier-league headline2`: `x04092024-tue valign-text-middle headline2`">
            {{ props.title }}
        </div>
    </div>
    <!-- <img v-else class="line-1-head" src="/img/line-1@2x.png" alt="Line 1" /> -->
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';

const props = defineProps<{
    id: string;
    season: string;
    idx: number;
    title: string;
    sportSection: TCommonSportSection;
    hasLeagueTag?: boolean;
    src?: string;
    alt?: string;
    hasNoRouting?: boolean;
    isPending?: boolean;
}>();

const goStore = useGoStore();

const getClass = () => {
    const isPointer = props.hasNoRouting ? '' : 'cursor-pointer';
    return props.idx === 0 ? `${ isPointer } frame-384` : `${ isPointer } frame-17`;
};

const getClick = () => {
    if (props.hasNoRouting) {
        return;
    }
    goStore.go_league(props.season, props.id, props.sportSection);
};
</script>

<style scoped>
.frame-384 {
    align-items: center;
    align-self: stretch;
    background-color: #e0e4ea;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    gap: 6px;
    height: 34px;
    padding: 4px 13px;
    position: relative;
    width: 100%;
}

.frame-17 {
    align-items: center;
    align-self: stretch;
    background-color: #e0e4ea;
    display: flex;
    gap: 6px;
    height: 34px;
    padding: 4px 13px;
    position: relative;
    width: 100%;
}

.x04092024-tue {
    color: var(--bk);
    font-weight: 600;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}

.line-1-head {
  background-color: transparent;
  height: 1px;
  left: 6.94%;
  object-fit: cover;
  position: relative;
  /* top: 152px; */
  width: 86.67%;
}
</style>