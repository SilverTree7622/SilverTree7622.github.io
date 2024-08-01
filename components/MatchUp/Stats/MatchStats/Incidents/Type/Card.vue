<template>
    <template v-if="props.position === 1">
        <img v-if="props.type === 3" class="btn btn-2" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
        <img v-if="props.type === 4" class="btn btn-2" src="/img/btn-redcard@2x.png" alt="Btn_RedCard" />
    </template>
    <div :class="props.position === 1 ? 'frame-484' : 'frame-482'" >
        <div class="name-6 body" :class="props.position === 1 ? '' : 'name-5'">
            {{ props.player }}
        </div>
        <div class="foul-3 caption"  :class="props.position === 1 ? '' : 'foul-2'">
            {{ getTypeMeaning(props.type) }}
        </div>
    </div>
    <template v-if="props.position === 2">
        <img v-if="props.type === 3" class="btn_-yellow-card" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
        <img v-if="props.type === 4" class="btn btn-2" src="/img/btn-redcard@2x.png" alt="Btn_RedCard" />
    </template>
</template>

<script setup lang="ts">
const props = defineProps<{
    position: number;
    type: number;
    player: string;
}>();

const getTypeMeaning = (type: number): string => {
    if (type === 3) {
        return 'Foul';
    }
    return 'Red Card';
};

onMounted(async () => {
    await nextTick();
    // console.log('props from card: ', props);
});
</script>

<style scoped>
@import '@/public/css/matchup/stats/incidents/globals.css';
@import '@/public/css/matchup/stats/incidents/styleguide.css';
@import '@/public/css/matchup/stats/incidents/tmpu95incidentu95list.css';
</style>