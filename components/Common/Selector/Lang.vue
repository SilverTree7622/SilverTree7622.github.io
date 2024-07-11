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

const lang = ref(opt.options[0] ?? '');

const update = (data: TSelectorLang[]) => {
    opt.options = data;
    lang.value = opt.options[0];
    opt.idx = 0;
    opt.list = data;
};

watch(
    () => selectorStore.getLang(),
    async (p) => {
        update(p);
    }
);

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item === value);
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
    settingStore.setConfig({
        lang: opt.idx,
    });
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getLang());
});

defineExpose({
    change,
});
</script>

<style scoped>

</style>