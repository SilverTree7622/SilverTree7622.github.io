<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        
        <CommonHeaderLeague
            v-if="!props.isPending"
        />

        <CommonHeaderTabLeague
            :sName="'League'"
            :tab="props.tab"
        />

        <CommonHeaderSubTabLeagueTable
            v-if="!props.isPending && props.tab === 'table'"
            :selectedIdx="opt.selectedIdx"
            @selectTab="clickTab"
        />
        
        <!-- init content loading skeletons -->
        <div class="mt-10">
            <LoadingSkeleton v-show="props.isPending" />
            <LoadingSkeleton v-show="props.isPending" />
            <LoadingSkeleton v-show="props.isPending" />
        </div>

        <div class="">
            <slot></slot>
            <!-- center content loading -->
            <div v-show="props.contentIsPending" class="mt-10">
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>
            <!-- page scroll guide indicator -->
            <div
                v-if="!props.isOutOfContent && !props.isPending && !props.contentIsPending"
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
    contentIsPending: boolean;
    isOutOfContent: boolean;
    sName: string;
    tab: string;
    changeTab: () => Promise<void>;
    result: any;
}>();

const emit = defineEmits<{
    (e: "clickTab", idx: number): void;
}>();

const opt = reactive({
    selectedIdx: <number> 0,
});

const leagueStore = useLeagueStore();
const route = useRoute();

// watch tab changed
watch(
    () => route.fullPath,
    async (p) => {
        await props.changeTab();
    }
);

const clickTab = (idx: number) => {
    opt.selectedIdx = idx;
    emit("clickTab", opt.selectedIdx);
};

onMounted(async () => {
    await nextTick();
});
</script>
