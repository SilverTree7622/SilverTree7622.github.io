<template>
    <div class="frame-426">
        <div class="number-6 caption">
            {{ props.home }}
        </div>
        <div class="flex-col flex">
            <div class="shots-on-target body w-auto">
                {{ props.title }}
            </div>
            <div class="vector-container">
                <div ref="$home" class="vector-2 home-bar"></div>
                <div ref="$away" class="vector-2 away-bar"></div>
            </div>
        </div>
        <div class="number-7 caption">
            {{ props.away }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    home: number;
    away: number;
}>();

const $home = ref();
const $away = ref();

const getWidthClass = (score: number, totalScore: number): string => {
    return (totalScore === 0) ? '0' : `${ Math.floor(score / totalScore * 100) }%`;
};

onMounted(async () => {
    await nextTick();
    const totalScore = props.home + props.away;
    if ($home.value) {
        $home.value.style.width = getWidthClass(props.home, totalScore);
    }
    if ($away.value) {
        $away.value.style.width = getWidthClass(props.away, totalScore);
    }
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
@import '@/public/css/matchup/stats/chart/chart2/globals.css';
@import '@/public/css/matchup/stats/chart/chart2/styleguide.css';
@import '@/public/css/matchup/stats/chart/chart2/statchart2.css';

.home-bar {
    background-color: #f50;
    /* height: 20px; */
}

.away-bar {
    background-color: #001A32;
    /* height: 20px; */
}
</style>