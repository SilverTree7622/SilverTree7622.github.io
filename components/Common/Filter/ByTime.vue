<template>
    <a class="cursor-pointer w-[60px]" @click="toggle">
        <img class="btn_-by-time" :src="opt.isToggled ? '/img/Btn_ByTime_toggled.svg' : '/img/Btn_ByTime_disable.svg'">
        <div class="by-time body centered">By time</div>
    </a>
</template>

<script setup lang="ts">

const filterStore = useFilterStore();

const opt = reactive({
    isToggled: <boolean>filterStore.getTimeIsToggled(),
});

watch(
    () => filterStore.getTimeIsToggled(),
    (p) => {
        opt.isToggled = filterStore.getTimeIsToggled();
    }
)

const toggle = () => {
    opt.isToggled = filterStore.toggle();
};
</script>

<style scoped>
.btn_-by-time {
    align-items: center;
    border: 1px solid;
    border-color: #a2b6f8;
    border-radius: 3px;
    display: flex;
    height: 25px;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.by-time {
    position: relative;
    color: var(--wt);
    font-weight: 400;
    height: 16px;
    line-height: normal;
    margin-top: 1px;
    text-align: center;
}

.centered {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(20%, -50%);
}
</style>