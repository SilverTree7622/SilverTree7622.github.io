<template>
    <div class="frame-431">
        <div class="frame-container">
            <div class="frame-4-1">
                <img class="btn" src="/img/btn-cornerkick@2x.png" alt="Btn_CornerKick" />
                <div class="number-2 caption">
                    {{ props.corner }}
                </div>
            </div>
            <div class="frame-4-1">
                <img class="btn" src="/img/btn-redcard@2x.png" alt="Btn_RedCard" />
                <div class="number-2 caption">
                    {{ props.redCard }}
                </div>
            </div>
            <div class="frame-4-1">
                <img class="btn" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                <div class="number-2 caption">
                    {{ props.yellowCard }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    corner: number;
    redCard: number;
    yellowCard: number;
}>();

onMounted(async () => {
    await nextTick();
    
});
</script>

<style scoped>
@import '@/public/css/matchup/stats/chart/chart2/globals.css';
@import '@/public/css/matchup/stats/chart/chart2/styleguide.css';
@import '@/public/css/matchup/stats/chart/chart2/statchart2.css';
</style>