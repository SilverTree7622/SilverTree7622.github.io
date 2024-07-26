<template>
    <div class="frame-440">
        <div class="frame-container-1 frame-container-4">
            <div class="frame-44 headline3">
                <div class="number">
                    {{ getPercentage(props.home) }}
                </div>
                <div class="number-1">
                    {{ getPercentage(props.away) }}
                </div>
            </div>
            <svg viewBox="0 0 36 36" class="circle-svg">
                <path class="around" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                <path class="percent" :stroke-dasharray="`${ getPercentage(props.home) }, ${ getPercentage(props.away) } `" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                <text x="18" y="14" text-anchor="middle" dy="7" font-size="20">
                    {{ getMiddleSign(props.home, props.away, props.middleType === 'dangerous_attack') }}
                </text>
            </svg>
        </div>
        <div class="frame-448">
            <div class="attacks body text-center">
                {{ props.title }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    home: number;
    away: number;
    middleType: 'attacks' | 'dangerous_attack' | 'ball_possession';
}>();

const getPercentage = (value: number): number => {
    const total = props.home + props.away;
    return Math.round(value / total * 100);
};

const getMiddleSign = (home: number, away: number, isPercentage: boolean = false): string => {
    if (isPercentage) return '%';
    if (home > away) return '>';
    if (home < away) return '<';
    return '=';
};

onMounted(async () => {
    await nextTick();
    

});

onBeforeUnmount(() => {

});
</script>

<style scoped>
@import '@/public/css/matchup/stats/chart/chart2/globals.css';
@import '@/public/css/matchup/stats/chart/chart2/styleguide.css';
@import '@/public/css/matchup/stats/chart/chart2/statchart2.css';

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
.circle-svg {
  display: block;
  margin: 10px auto;
  max-height: 80px;
  width: 40px;
}
.circle-svg text {
  text-align:center;
  color:black;
  font-size:10px
}
.circle-svg path.percent {
  stroke: #031b57;
  fill: none;
  stroke-width: 3.2;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}
.circle-svg path.around {
    stroke: #FF5500;
    fill: none;
    stroke-width: 3.2;
}
</style>