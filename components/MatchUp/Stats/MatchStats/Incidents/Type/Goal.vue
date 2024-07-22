<template>
    <div class="div-10">
        <div class="div-11">
            <div class="div-12">
                {{ props.goalPlayer }}
            </div>
            <div v-if="props.assistPlayer1" class="div-13">
                {{ `Assist: ${ props.assistPlayer1 }` }}
            </div>
            <div v-if="props.assistPlayer2" class="div-13">
                {{ `Assist: ${ props.assistPlayer2 }` }}
            </div>
        </div>
        <div class="div-14">
            {{ `${ props.homeScore }-${ props.awayScore }` }}
        </div>
        <img class="img-2" src="/img/btn-shot@2x.png" alt="Btn_Shot" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    goalPlayer: string;
    assistPlayer1?: string;
    assistPlayer2?: string;
    homeScore: number;
    awayScore: number;
}>();
</script>

<style scoped>

.div-10 {
    display: flex;
    align-items: start;
    gap: 4px;
}

.div-11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    text-align: right;
}

.div-12 {
    color: #000;
    align-self: end;
    font: 400 13px Pretendard, sans-serif;
}

.div-13 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-14 {
    border-radius: 5px;
    background-color: #001a32;
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    padding: 5px 6px;
    font: 400 13px Pretendard, sans-serif;
}

.img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 20px;
}
</style>