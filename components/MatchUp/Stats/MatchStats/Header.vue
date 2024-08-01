<template>
  <div class="w-full bg-[--tory-blue]">
    <div class="div-match-stats-header">
      <div class="div-2">
        <div class="div-3"></div>
        <div class="div-4">
          {{ props.home }}
        </div>
      </div>
      <div class="div-5">
        <div class="div-6">
          {{ props.away }}
        </div>
        <div class="div-7"></div>
      </div>
    </div>
    <div class="flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  home: string;
  away: string;
}>();
</script>

<style scoped>
.div-match-stats-header {
  border-radius: 10px 10px 0px 0px;
  background-color: rgba(12, 74, 164, 1);
  display: flex;
  /* max-width: 348px; */
  width: 100%;
  gap: 5px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.56px;
  justify-content: space-between;
  padding: 7px 10px;
}
.div-2 {
  border-radius: 10px 10px 0px 0px;
  display: flex;
  gap: 4px;
}
.div-3 {
  background-color: rgba(255, 85, 0, 1);
  width: 11px;
  height: 20px;
}
.div-4 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
.div-5 {
  display: flex;
  gap: 4px;
  white-space: nowrap;
}
.div-6 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
.div-7 {
  background-color: rgba(0, 26, 50, 1);
  width: 10px;
  height: 20px;
}
</style>
