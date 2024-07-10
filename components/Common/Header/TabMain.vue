<template>
    <div>
        <CommonHeaderTab
            v-show="true"
            :sName="props.sName"
            :tab="props.tab"
        />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    sName: string;
    tab: string;
}>();
</script>

<style scoped>
</style>