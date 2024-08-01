<template>
    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
    <div class="frame-490">
        <div class="in-edward-nketiah body">
            {{ `In: ${ props.in }` }}
        </div>
        <div class="out-oleksndr-zinchenko caption">
            {{ `Out: ${ props.out }` }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    in: string;
    out: string;
}>();
</script>

<style scoped>
@import '@/public/css/matchup/stats/incidents/globals.css';
@import '@/public/css/matchup/stats/incidents/styleguide.css';
@import '@/public/css/matchup/stats/incidents/tmpu95incidentu95list.css';
</style>