<template>
    <div class="frame-440">
        <div class="frame-container-1 frame-container-4">
            <div class="frame-44 headline3">
                <div class="number">
                    {{ getPercentage(props.homeNum) }}
                </div>
                <div class="number-1">
                    {{ getPercentage(props.awayNum) }}
                </div>
            </div>
            <img class="frame-4" src="/img/frame-447@2x.png" alt="Frame 447" />
        </div>
        <div class="frame-448">
            <div class="attacks body">Attacks</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    homeNum: number;
    awayNum: number;
    middleType: 'attacks' | 'dangerous_attack' | 'ball_possession';
}>();

const getPercentage = (value: number): number => {
    const total = props.homeNum + props.awayNum;
    return value / total * 100;
};


onMounted(async () => {

});

onBeforeUnmount(() => {

});
</script>

<style scoped>

</style>