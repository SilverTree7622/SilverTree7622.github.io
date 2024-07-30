<template>
    <USelect 
        v-model="season"
        variant="outline"
        :options="opt.options"
        :class="`cursor-pointer bg-white`"
        @change="change"
    />
</template>

<script setup lang="ts">
import type { TLeagueTableSeason } from '~/types/league';
import UtilDate from '~/utils/date';

const selectorStore = useSelectorStore();

const opt = reactive({
    options: <string[]> [],
    idx: <number> 0,
    list: <TLeagueTableSeason[]> [],
});

const season = ref(opt.options[ opt.idx ] ?? '');

const update = (data: TLeagueTableSeason[]) => {
    const filteredList = data.filter( item => item.ai_is_current === 1 || UtilDate.chckYearIsSame(item.ai_year));
    console.log('filteredList: ', filteredList);
    opt.options = filteredList.map( item => item.ai_year );
    opt.list = filteredList;
    console.log('opt from update: ', opt);
};

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.ai_year === value);
    if (selectedIdx < 0) {
        opt.idx = 0;
        return;
    }
    opt.idx = selectedIdx;
};

const updateValue = (idx: number) => {
    season.value = opt.options[idx];
};

onMounted(async () => {
    await nextTick();
    update(selectorStore.getSeason());
});

defineExpose({
    updateValue,
});
</script>

<style scoped>

</style>