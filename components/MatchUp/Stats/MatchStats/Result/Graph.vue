<template>
    <div class="div-3">
        {{ props.title }}
    </div>
    <div class="div-4">
        <div class="div-5">
            <div class="div-6">
                {{ `${ props.home }${ props.isPercentage ? '%' : '' }` }}
            </div>
            <div
                ref="$home"
                :class="`div-7`"
            ></div>
        </div>
        <div class="div-8">
            <div
                ref="$away"
                :class="`div-9`"
            ></div>
            <div class="div-10">
                {{ `${ props.away }${ props.isPercentage ? '%' : '' }` }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: any;
    home: number;
    away: number;
    isPercentage?: boolean;
}>();

const $home = ref();
const $away = ref();

const getWidthClass = (score: number, totalScore: number): string => {
    return (totalScore === 0) ? '0' : `${ Math.floor(score / totalScore * 100) }%`;
};

onMounted(async () => {
    await nextTick();
    const totalScore = props.home + props.away;
    if ($home.value) {
        $home.value.style.width = getWidthClass(props.home, totalScore);
    }
    if ($away.value) {
        $away.value.style.width = getWidthClass(props.away, totalScore);
    }
});
</script>

<style scoped>

.div-3 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-4 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-5 {
    justify-content: end;
    display: flex;
    gap: 10px;
    flex: 1;
    padding: 0 2px;
}

.div-6 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-7 {
    border-radius: 3px;
    background-color: #f50;
    height: 20px;
}

.div-8 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-9 {
    border-radius: 3px;
    background-color: #001a32;
    height: 20px;
}

.div-10 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

</style>