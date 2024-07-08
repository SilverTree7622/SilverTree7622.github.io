<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        
        <CommonHeaderLeague
            :title="'Premier League'"
            :flag="'/img/flag-circle-eng@2x.png'"
            :country="'England'"
            :level="'Division Level 1'"
            :bet="'11.1 B€'"
            :isStarToggled="false"
        />

        <CommonHeaderTabLeague
            :sName="'League'"
            :tab="opt.tab"
        />
        
        <!-- init content loading skeletons -->
        <LoadingSkeleton v-show="props.isPending" />
        <LoadingSkeleton v-show="props.isPending" />
        <LoadingSkeleton v-show="props.isPending" />

        <div class="">
            <slot v-if="!props.isPending"></slot>
            <!-- center content loading -->
            <div v-show="props.pageIsPending" class="mt-10">
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>
            <!-- page scroll guide indicator -->
            <div
                v-if="!props.isOutOfContent && !props.isPending && !props.pageIsPending"
                class="mx-auto my-4"
            >
                <svg
                    data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    class="mx-auto h-8 w-8 text-gray-500"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
                </svg>
            </div>
        </div>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    isPending: boolean;
    pageIsPending: boolean;
    isOutOfContent: boolean;
    sName: string;
    tab: string;
    result: any;
}>();

const opt = reactive({
    tab: <string> props.tab,
});

const route = useRoute();

watch(
    () => route.fullPath,
    async (p) => {
        opt.tab = route.query['tab'] as string;
    }
);

const nextTab = () => {
    const tab = route.query['tab'];
    let resultTab = 'live';
    if (tab === 'live' || tab === undefined) resultTab = 'fixtures';
    if (tab === 'fixtures') resultTab = 'odds';
    if (tab === 'odds') resultTab = 'result';
    if (tab === 'result') resultTab = 'league';
    if (tab === 'league') resultTab = 'live';
    navigateTo({
        path: `/${ props.sName }`,
        query: {
            tab: resultTab,
        }
    });
};


</script>
