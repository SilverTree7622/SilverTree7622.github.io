<template>
    <div class="topu95scoresu95latest screen">
        <div class="frame-577">
            <div class="top_-scores">
                <div class="frame-572">
                    <div class="top-scores biggerbody">{{ props.title }}</div>
                </div>
                <div class="w-full" :class="`h-[${ props.height ?? 181 }px]`">
                    <div
                        class="
                            flex items-center space-x-4
                            w-[315px] mx-auto mt-[25px] mb-[20px]
                        "
                    >
                        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
                        <div class="space-y-2">
                            <USkeleton class="h-4 w-[250px]" />
                            <USkeleton class="h-4 w-[200px]" />
                        </div>
                    </div>
                    <div
                        class="
                            flex items-center space-x-4
                            w-[315px] mx-auto mt-[2px] mb-[20px]
                        "
                    >
                        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
                        <div class="space-y-2">
                            <USkeleton class="h-4 w-[250px]" />
                            <USkeleton class="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    height?: number;
}>();
</script>

<style scoped>
.topu95scoresu95latest {
    align-items: flex-start;
    background-color: var(--wt);
    display: flex;
    flex-direction: column;
    position: relative;
}

.frame-577 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    padding: 2px 0px;
    position: relative;
    width: 100%;
}

.top_-scores {
    align-items: flex-end;
    align-self: stretch;
    background-color: #0c4aa4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* height: 221px; */
    overflow: hidden;
    padding: 6px;
    position: relative;
    width: 100%;
}

.frame-572 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    padding: 2px 0px 2px 6px;
    position: relative;
    width: 100%;
}

.top-scores {
    color: var(--wt);
    font-weight: 600;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
}
</style>