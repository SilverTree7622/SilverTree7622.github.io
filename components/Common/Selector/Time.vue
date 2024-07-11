<template>
    <USelect 
        v-model="time"
        variant="outline"
        :options="opt.options"
        :class="`cursor-pointer`"
        @change="change"
    />
</template>

<script setup lang="ts">
import type { TSelectorTime } from '~/types/Selector';

const selectorStore = useSelectorStore();
const settingStore = useSettingStore();

const opt = reactive({
    options: <string[]> [],
    idx: <number> 0,
    list: <TSelectorTime[]> [],
});

const time = ref(opt.options[0] ?? '');

const update = (data: TSelectorTime[]) => {
    opt.options = data.map( item => `${ item.sp_name } ${ item.sp_timestamp_view }` );
    time.value = opt.options[0];
    opt.idx = 0;
    opt.list = data;
};

watch(
    () => selectorStore.getTime(),
    async (p) => {
        update(p);
    }
);

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_name === value.split(' ')[0]);
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
    settingStore.setConfig({
        lang: opt.idx,
    });
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getTime());
});

defineExpose({
    change,
});
</script>