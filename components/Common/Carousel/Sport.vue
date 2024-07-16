<template>
    <div class="w-full h-auto">
        <!-- empty or loading components -->
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

        <!-- basketball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :background="'TopScore_BG_Basketball.svg'"
            :arrow="`TopScore_Left_TEAM_Basketball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'league')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- baseball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :background="'TopScore_BG_Baseball.svg'"
            :arrow="`TopScore_Left_TEAM_Baseball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'league')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- volleyball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :background="'TopScore_BG_Volleyball.svg'"
            :arrow="`TopScore_Left_TEAM_Volleyball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'league')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- tennis live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :background="'TopScore_BG_Tennis.svg'"
            :arrow="`TopScore_Left_TEAM_Tennis.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'league')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- icehockey live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'live')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :background="'TopScore_BG_IceHockey.svg'"
            :arrow="`TopScore_Left_TEAM_Icehockey.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'fixtures')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'odds')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'result')"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'league')"
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