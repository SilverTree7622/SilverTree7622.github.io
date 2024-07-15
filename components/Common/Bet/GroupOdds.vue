<template>
    <div class="div-odds" @click="click">
        <div class="div-2-odds">{{ props.value[0] }}</div>
        <div class="div-3-odds">{{ props.value[1] }}</div>
        <div class="div-4-odds">{{ props.value[2] }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: number[];
}>();

const click = () => {
    console.log('click group odds');
};

</script>

<style scoped>

.div-odds {
    display: flex;
    gap: 8px;
    font-size: 12px;
    color: #000;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
}

.div-2-odds {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 3px;
    background-color: #e7e7e7;
    padding: 2px 40px;
}

.div-3-odds {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 3px;
    background-color: #e7e7e7;
    padding: 2px 40px;
}

.div-4-odds {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 3px;
    background-color: #e7e7e7;
    padding: 2px 40px;
}
</style>