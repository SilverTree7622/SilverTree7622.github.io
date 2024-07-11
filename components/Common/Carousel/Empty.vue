<template>
    <div class="frame-577">
        <div class="top_-scores h-[183px]">
            <div class="frame-572">
                <div class="top-scores biggerbody">{{ props.title }}</div>
            </div>
            <div class="top_-scores_-content">
                <p class="there-are-no-live-ma text-xl">There are no live matches in progress at this time.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<style scoped>
.biggerbody {
    font-family: var(--font-family-pretendard-semibold);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;
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
    background-color: var(--tory-blue);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    gap: 4px;
    padding: 2px 0px 2px 10px;
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

.top_-scores_-content {
    align-items: center;
    align-self: stretch;
    background-image: url(../img/top-scores-content-empty@2x.png);
    /* background-image: url(../img/top_scores_empty_bg.svg); */
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 6px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
    justify-content: center;
    overflow: hidden;
    padding: 12px 0px;
    position: relative;
    width: 100%;
}

.there-are-no-live-ma {
    color: var(--bk);
    font-family: var(--font-family-pretendard-semibold);
    /* font-size: 13px; */
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
    width: fit-content;
}
</style>