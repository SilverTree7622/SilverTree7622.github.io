<template>
    <div class="btn_-favorite_-check2" @click="toggleStar">
        <div class="frame-container-2">
            <div v-show="!opt.isToggled">
                <div :class="`frame-411`"><img class="star" src="@/public/img/star@2x.png" alt="Star" /></div>
            </div>
            <div v-show="opt.isToggled">
                <div class="frame-411"><img class="star" src="@/public/img/star@2x.png" alt="Star" /></div>
                <div class="frame"><img class="star" src="@/public/img/star-1@2x.png" alt="Star" /></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    isToggled?: boolean;
    onEvt?: Function;
    offEvt?: Function;
}>(), {
    isToggled: false,
    onEvt: () => { },
    offEvt: () => { },
});

const opt = reactive({
    isToggled: <boolean>props.isToggled ?? false,
});

const init = () => {
    opt.isToggled = false;
};

const toggleStar = () => {
    opt.isToggled = !opt.isToggled;
    if (opt.isToggled) {
        props.onEvt();
    } else {
        props.offEvt();
    }
};

const getIsToggled = () => {
    return opt.isToggled;
};

defineExpose({
    init,
    getIsToggled,
});
</script>

<style scoped>
.btn_-favorite_-check2 {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    position: relative;
    width: 20px;
}

.frame-container-2 {
    height: 20px;
    position: relative;
}

.frame-411 {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease;
    width: 20px;
}

.frame {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease;
    width: 20px;
}

.frame:hover {
    opacity: 0;
}

.star {
    height: 18.09px;
    margin-top: -1.9px;
    width: 19.02px;
}
</style>