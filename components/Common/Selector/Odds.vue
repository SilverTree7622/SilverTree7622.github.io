<template>
    <USelect 
        v-model="odds"
        variant="outline"
        :options="opt.options"
        :class="`cursor-pointer`"
        @change="change"
    />
</template>

<script setup lang="ts">
import type { TSelectorOdds } from '~/types/Selector';

const selectorStore = useSelectorStore();
const settingStore = useSettingStore();

const opt = reactive({
    options: <string[]> [],
    idx: <number> 0,
    list: <TSelectorOdds[]> [],
});

const odds = ref(opt.options[0] ?? '');

const update = (data: TSelectorOdds[]) => {
    opt.options = data.map( item => `${ item.sp_view }` );
    odds.value = opt.options[0];
    opt.idx = 0;
    opt.list = data;
};

watch(
    () => selectorStore.getOdds(),
    async (p) => {
        update(p);
    }
);

const change = (value: string, isAuto: boolean = true) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_view === value );
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
    settingStore.setConfig({
        lang: opt.idx,
    });
    if (!isAuto) {
        odds.value = opt.options[opt.idx];
    }
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getOdds());
});

defineExpose({
    change,
});
</script>