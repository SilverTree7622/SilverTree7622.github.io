<template>
    <CommonCarouselDefault
        title="Top Scores"
        :list="props.list"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    list: any;
}>();
</script>