<template>
    <div class="w-full h-auto">
        <CommonCarouselEmpty
            v-show="props.list.length === 0 && !props.isPending"
            :title="getTitle(props.tab)"
        />
        <CommonCarouselSkeleton
            v-show="props.isPending"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
        />
        <!-- football live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'league')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
    </div>
</template>

<script setup lang="ts">
import { getTitle } from '~/types/Common/Carousel';
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';

const props = defineProps<{
    sName: TCommonSportSection;
    tab: TCommonTabTypes;
    isPending: boolean;
    list: any[];
}>();

const getShowCondition = (sName: TCommonSportSection, tab: TCommonTabTypes) => {
    return !props.isPending && props.sName === sName && props.tab === tab && props.list.length !== 0;
};

const getHeight = (tab: TCommonTabTypes): number => {
    return tab === 'odds' ? 202 : 181;
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(() => {

});
</script>