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
    const { odds: oddsIdx } = settingStore.getData();
    odds.value = opt.options[oddsIdx];
    opt.idx = oddsIdx;
    opt.list = data;
};

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_view === value );
    if (selectedIdx < 0) {
        opt.idx = 0
        settingStore.setConfig({
            odds: 0
        }); 
        return;
    }
    opt.idx = selectedIdx;
    settingStore.setConfig({
        odds: opt.idx,
    });
};

const updateValue = (idx: number) => {
    odds.value = opt.options[idx];
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getOdds());
});

defineExpose({
    updateValue,
});
</script>