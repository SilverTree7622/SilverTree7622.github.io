<template>
    <div class="div-last-matches w-full">Last Matches</div>
    <div class="flex flex-col w-full px-2 bg-[--tory-blue] pb-2 rounded-b-2xl">
        <slot />
    </div>
</template>

<style scoped>
.div-last-matches {
    border-radius: 10px 10px 0px 0px;
    background-color: rgba(12, 75, 167, 1);
    color: #fff;
    padding: 8px;
    font: 600 15px Pretendard, sans-serif;
}
</style>
