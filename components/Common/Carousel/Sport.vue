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
            :updateConfigList="updateOpt.configList"
        />

        <!-- football live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'live')"
            :sportSection="'football'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'fixtures')"
            :sportSection="'football'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'odds')"
            :sportSection="'football'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'result')"
            :sportSection="'football'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('football', 'league')"
            :sportSection="'football'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />

        <!-- basketball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'live')"
            :sportSection="'basketball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :background="'TopScore_BG_Basketball.svg'"
            :arrow="`TopScore_Left_TEAM_Basketball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'fixtures')"
            :sportSection="'basketball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'odds')"
            :sportSection="'basketball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'result')"
            :sportSection="'basketball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('basketball', 'league')"
            :sportSection="'basketball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- baseball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'live')"
            :sportSection="'baseball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :background="'TopScore_BG_Baseball.svg'"
            :arrow="`TopScore_Left_TEAM_Baseball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'fixtures')"
            :sportSection="'baseball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'odds')"
            :sportSection="'baseball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'result')"
            :sportSection="'baseball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('baseball', 'league')"
            :sportSection="'baseball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- volleyball live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'live')"
            :sportSection="'volleyball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :background="'TopScore_BG_Volleyball.svg'"
            :arrow="`TopScore_Left_TEAM_Volleyball.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'fixtures')"
            :sportSection="'volleyball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'odds')"
            :sportSection="'volleyball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'result')"
            :sportSection="'volleyball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('volleyball', 'league')"
            :sportSection="'volleyball'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- tennis live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'live')"
            :sportSection="'tennis'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :background="'TopScore_BG_Tennis.svg'"
            :arrow="`TopScore_Left_TEAM_Tennis.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'fixtures')"
            :sportSection="'tennis'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'odds')"
            :sportSection="'tennis'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'result')"
            :sportSection="'tennis'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('tennis', 'league')"
            :sportSection="'tennis'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        
        <!-- icehockey live, fixtures, odds, result, league -->
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'live')"
            :sportSection="'icehockey'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :background="'TopScore_BG_IceHockey.svg'"
            :arrow="`TopScore_Left_TEAM_Icehockey.svg`"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'fixtures')"
            :sportSection="'icehockey'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'odds')"
            :sportSection="'icehockey'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'result')"
            :sportSection="'icehockey'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
        <CommonCarouselDefault
            v-if="getShowCondition('icehockey', 'league')"
            :sportSection="'icehockey'"
            :title="getTitle(props.tab)"
            :height="getHeight(props.tab)"
            :updateConfigList="updateOpt.configList"
            :tab="props.tab"
            :list="props.list"
        />
    </div>
</template>

<script setup lang="ts">
import { getTitle, type TCarouselUpdate } from '~/types/Common/Carousel';
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TCommonTabTypes } from '~/types/Common/tab';

const props = defineProps<{
    sName: TCommonSportSection;
    tab: TCommonTabTypes;
    isPending: boolean;
    list: any[];
}>();

const updateOpt = reactive({
    configList: <TCarouselUpdate[]> [],
});

const getShowCondition = (sName: TCommonSportSection, tab: TCommonTabTypes) => {
    return !props.isPending && props.sName === sName && props.tab === tab && props.list.length !== 0;
};

const getHeight = (tab: TCommonTabTypes): number => {
    return tab === 'odds' ? 202 : 181;
};

const update = (configList: TCarouselUpdate[]) => {
    updateOpt.configList = configList;
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(() => {

});

defineExpose({
    update,
});
</script>