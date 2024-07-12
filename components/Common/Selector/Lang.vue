<template>
    <USelect 
        v-model="lang"
        variant="outline"
        :options="opt.options"
        :class="`cursor-pointer bg-white`"
        @change="change"
    />
</template>

<script setup lang="ts">
import type { TSelectorLang } from '~/types/Selector';

const selectorStore = useSelectorStore();
const settingStore = useSettingStore();

const opt = reactive({
    options: <string[]> selectorStore.getLang(),
    idx: <number> 0,
    list: <TSelectorLang[]> selectorStore.getLang(),
});

const lang = ref(opt.options[ opt.idx ] ?? '');

const update = (data: TSelectorLang[]) => {
    opt.options = data;
    const { lang: langIdx } = settingStore.getData();
    lang.value = opt.options[langIdx];
    opt.idx = langIdx;
    opt.list = data;
};

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item === value);
    if (selectedIdx < 0) {
        opt.idx = 0
        settingStore.setConfig({
            lang: 0
        }); 
        return;
    }
    opt.idx = selectedIdx;
    settingStore.setConfig({
        lang: opt.idx,
    });
};

const updateValue = (idx: number) => {
    lang.value = opt.options[idx];
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getLang());
});

defineExpose({
    updateValue,
});
</script>

<style scoped>

</style>