<template>
    <CommonContentSportLeague
        :list="props.list"
    />
</template>


<script setup lang="ts">
const props = defineProps<{
    list: any[];
}>();

</script>

<style scoped></style>