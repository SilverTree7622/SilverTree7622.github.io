<template>
    <div class="div-5">
        <img class="img" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
        <div class="div-6">
            <div class="div-7">
                {{ `In: ${ props.in }` }}
            </div>
            <div class="div-8">
                {{ `Out: ${ props.out }` }}
            </div>
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

.div-5 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 20px;
    align-self: start;
}

.div-6 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-7 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-8 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

</style>