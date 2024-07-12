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
    const { time: timeIdx } = settingStore.getData();
    time.value = opt.options[timeIdx];
    opt.idx = timeIdx;
    opt.list = data;
};

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_name === value.split(' ')[0]);
    if (selectedIdx < 0) {
        opt.idx = 0
        settingStore.setConfig({
            time: 0
        }); 
        return;
    }
    opt.idx = selectedIdx;
    settingStore.setConfig({
        time: opt.idx,
    });
};

const updateValue = (idx: number) => {
    time.value = opt.options[idx];
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getTime());
});

defineExpose({
    updateValue,
});
</script>