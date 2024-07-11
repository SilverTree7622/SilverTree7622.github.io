<template>
    <div class="w-full h-auto">
        <CommonCarouselEmpty
            v-show="props.list.length === 0 && !props.isPending"
            :title="getTitle(props.tab)"
        />
        <!-- football -->
        <CommonCarouselDefault
            v-if="props.sName === 'football' && props.tab === 'live' && props.list.length !== 0"
            :title="getTitle(props.tab)"
            :list="props.list"
        />
        <!-- <CommonCarouselLiveFootBall
            v-if="props.sName === 'football' && props.tab === 'live' && props.list.length !== 0"
            :list="props.list"
        /> -->

    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';

const props = defineProps<{
    sName: TCommonSportSection;
    tab: TCommonTabTypes;
    isPending: boolean;
    list: any[];
}>();

const getTitle = (tab: TCommonTabTypes): string => {
    if (tab === 'live') return 'Top Scores';
    if (tab === 'fixtures') return 'Top Matchup';
    if (tab === 'odds') return 'Top Matchup';
    if (tab === 'result') return 'Result';
    if (tab === 'league') return 'Best League';
    return '';
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(() => {

});
</script>