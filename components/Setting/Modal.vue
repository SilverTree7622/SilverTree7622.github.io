<template>
    <UModal 
        v-model="opt.isOpen"
        :ui="{
            wrapper: 'bg-transparent p-0 m-0',
            base: 'p-0 m-0 items-center',
            rounded: '',
            width: 'w-[320px]',
            height: 'h-[320px]',
            container: '!items-center',
        }"
    >
        <div class="div">
            <div class="div-2">
                <div class="div-3">SETTINGS</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2119dd6fcb0d91ec24c8722878ba6ec6b7de70e8c93b4b5c372e28a257fd7f4a?"
                    class="img cursor-pointer"
                    @click="hide"
                />
            </div>
            <div class="div-4"></div>
            <div class="div-5">
                <div class="div-6">Language</div>
                <CommonSelectorLang ref="$lang" class="div-7" />
            </div>
            <div class="div-10">
                <div class="div-11">Time Zone</div>
                <CommonSelectorTime ref="$time" class="div-7" />
            </div>
            <div class="div-15">
                <div class="div-16">ODDS FORMAT</div>
                <CommonSelectorOdds ref="$odds" class="div-7" />
            </div>
            <div class="div-20"></div>
            <div class="div-21">select scoreboard format</div>
            <div class="div-22">
                <div class="div-23">
                    <div class="div-24">Default</div>
                    <img v-if="config.isDefault" loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d22a9698f6d15e1ac4912354886c20595f9f2a34f0061a77beb539396200cc?"
                        class="img-5" />
                    <div v-else class="div-25" @click="toggleScoreboardFormat">
                        <div class="div-26"></div>
                    </div>
                </div>
            </div>
            <div class="div-27">
                <div class="div-28">
                    <div class="div-29">Classic</div>
                    <div v-if="config.isDefault" class="div-25" @click="toggleScoreboardFormat">
                        <div class="div-26"></div>
                    </div>
                    <img v-else loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d22a9698f6d15e1ac4912354886c20595f9f2a34f0061a77beb539396200cc?"
                        class="img-5" />
                </div>
            </div>
        </div>

    </UModal>
</template>

<script setup lang="ts">
const settingStore = useSettingStore();

const $lang = ref();
const $time = ref();
const $odds = ref();

const opt = reactive({
    isOpen: <boolean> false,
});

const config = reactive({
    lang: <number> 0,
    time: <number> 0,
    odds: <number> 0,
    isDefault: <boolean> true,
});

const update = () => {
    const {
        lang, time, odds, isDefault,
    } = settingStore.getData();
    config.lang = lang;
    config.time = time;
    config.odds = odds;
    config.isDefault = isDefault;
};

const show = () => {
    update();
    opt.isOpen = true;
    setTimeout(() => {
        if ($lang.value) $lang.value.updateValue(config.lang);
        if ($time.value) $time.value.updateValue(config.time);
        if ($odds.value) $odds.value.updateValue(config.odds);
    }, 0);
};

const hide = () => {
    opt.isOpen = false;
};

const toggleScoreboardFormat = () => {
    config.isDefault = !config.isDefault;
    settingStore.setConfig({
        isDefault: config.isDefault,
    });
};

onMounted(async () => {
    await nextTick();
    settingStore.register(show, hide);
    update();
});
</script>

<style scoped>
.div {
    justify-content: center;
    background-color: #fff;
    display: flex;
    max-width: 360px;
    flex-direction: column;
    padding: 20px 0;
}

.div-2 {
    justify-content: space-between;
    display: flex;
    width: 100%;
    gap: 20px;
    font-size: 17px;
    color: #000;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 20px;
}

.div-3 {
    font-family: Pretendard, sans-serif;
}

.img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 15px;
    margin: auto 0;
}

.div-4 {
    border-color: rgba(224, 228, 234, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #e0e4ea;
    align-self: center;
    margin-top: 19px;
    width: 320px;
    max-width: 100%;
    height: 1px;
}

.div-5 {
    justify-content: space-between;
    display: flex;
    margin-top: 20px;
    width: 100%;
    gap: 20px;
    padding: 0 20px;
}

.div-6 {
    color: #000;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    margin: auto 0;
    font: 600 14px Pretendard, sans-serif;
}

.div-7 {
    justify-content: space-between;
    /* border-radius: 3px;
    border-color: rgba(0, 177, 255, 1);
    border-style: solid;
    border-width: 1px; */
    background-color: #fff;
    display: flex;
    gap: 20px;
    padding: 4px 4px 4px 8px;
}

.div-8 {
    color: #626262;
    font: 600 15px Pretendard, sans-serif;
}

.div-9 {
    align-items: center;
    border-radius: 3px;
    background-color: #00b1ff;
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 7px 4px;
}

.img-2 {
    aspect-ratio: 2;
    object-fit: auto;
    object-position: center;
    width: 12px;
    stroke-width: 2px;
    stroke: #fff;
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 2px;
}

.div-10 {
    justify-content: space-between;
    display: flex;
    margin-top: 18px;
    width: 100%;
    gap: 20px;
    padding: 0 20px;
}

.div-11 {
    color: #000;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    margin: auto 0;
    font: 600 14px Pretendard, sans-serif;
}

.div-12 {
    justify-content: space-between;
    border-radius: 3px;
    border-color: rgba(0, 177, 255, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    display: flex;
    gap: 20px;
    padding: 4px 4px 4px 8px;
}

.div-13 {
    color: #626262;
    font: 600 15px Pretendard, sans-serif;
}

.div-14 {
    align-items: center;
    border-radius: 3px;
    background-color: #00b1ff;
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 7px 4px;
}

.img-3 {
    aspect-ratio: 2;
    object-fit: auto;
    object-position: center;
    width: 12px;
    stroke-width: 2px;
    stroke: #fff;
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 2px;
}

.div-15 {
    justify-content: space-between;
    display: flex;
    margin-top: 18px;
    width: 100%;
    gap: 20px;
    padding: 0 20px;
}

.div-16 {
    color: #000;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    margin: auto 0;
    font: 600 14px Pretendard, sans-serif;
}

.div-17 {
    justify-content: space-between;
    border-radius: 3px;
    border-color: rgba(0, 177, 255, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    display: flex;
    gap: 20px;
    padding: 4px 4px 4px 8px;
}

.div-18 {
    color: #626262;
    font: 600 15px Pretendard, sans-serif;
}

.div-19 {
    align-items: center;
    border-radius: 3px;
    background-color: #00b1ff;
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 7px 4px;
}

.img-4 {
    aspect-ratio: 2;
    object-fit: auto;
    object-position: center;
    width: 12px;
    stroke-width: 2px;
    stroke: #fff;
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 2px;
}

.div-20 {
    border-color: rgba(224, 228, 234, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #e0e4ea;
    align-self: center;
    margin-top: 19px;
    width: 320px;
    max-width: 100%;
    height: 1px;
}

.div-21 {
    color: #000;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    align-self: center;
    margin-top: 20px;
    font: 600 14px Pretendard, sans-serif;
}

.div-22 {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 20px;
    width: 100%;
    padding: 0 60px;
}

.div-23 {
    display: flex;
    width: 117px;
    max-width: 100%;
    gap: 20px;
    justify-content: space-between;
}

.div-24 {
    color: #626262;
    text-transform: uppercase;
    font: 600 12px Pretendard, sans-serif;
}

.div-25 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    cursor: pointer;
}

.div-26 {
    stroke-width: 1px;
    border-color: rgba(184, 187, 193, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
}

.div-27 {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 7px;
    width: 100%;
    font-size: 12px;
    color: #626262;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 60px;
}

.div-28 {
    display: flex;
    width: 116px;
    max-width: 100%;
    gap: 20px;
    justify-content: space-between;
}

.div-29 {
    font-family: Pretendard, sans-serif;
}

.img-5 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 10px;
    margin: auto 0;
}
</style>