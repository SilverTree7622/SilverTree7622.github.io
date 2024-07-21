<template>
    <MatchUpH2h
        :data="props.data"
    />
</template>

<script setup lang="ts">
import type { TMatchUpH2HCommon } from '~/types/h2h';

const props = defineProps<{
    data: TMatchUpH2HCommon;
}>();
</script>

<style scoped>

</style>