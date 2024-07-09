<template>
    <div class="flex flex-row gap-2 items-center">
        <img class="btn_-menu cursor-pointer" src="/img/btn-menu@2x.png" alt="Btn_Menu" @click="hide" />
        <NuxtLink to="/FootBall" @click="go2Link">
            <div class="oddsnavicom">ODDSNAVI.COM</div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    isHidingMenu?: boolean;
}>();
const overlayStore = useOverlayStore();
const scrollStore = useScrollStore();

const hide = () => {
    if (props.isHidingMenu) {
        overlayStore.HideOverlay('left', 'animate-appear');
        return;
    }
    overlayStore.ShowOverlay('left', 'animate-appear');
};
const go2Link = () => {
    overlayStore.HideOverlay('left', 'animate-appear');
    scrollStore.setScroll2Top();
};
</script>

<style scoped>
.btn_-menu {
    height: 20px;
    position: relative;
    width: 22px;
}

.oddsnavicom {
    color: var(--ptyellow);
    cursor: pointer;
    font-family: var(--font-family-pretendard-semibold);
    font-size: var(--font-size-xxl);
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}
</style>