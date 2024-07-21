<template>
    <div class="ft-0-2">
        <!-- FT 0-2 -->
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>