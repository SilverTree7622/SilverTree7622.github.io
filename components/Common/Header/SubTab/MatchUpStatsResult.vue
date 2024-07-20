<template>
    <div class="div-sub-tab-stats-result">
        <div class="div-2" :class="props.selectedIdx === 0 ? 'bg-[#627bcd]' : 'bg-[#8c9db6] cursor-pointer'" @click="clickTab(0)">match</div>
        <div class="div-3" :class="props.selectedIdx === 1 ? 'bg-[#627bcd]' : 'bg-[#8c9db6] cursor-pointer'" @click="clickTab(1)">1st half</div>
        <div class="div-4" :class="props.selectedIdx === 2 ? 'bg-[#627bcd]' : 'bg-[#8c9db6] cursor-pointer'" @click="clickTab(2)">2st half</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    selectedIdx: number;
}>();

const emit = defineEmits<{
  (e: 'selectTab', idx: number): void
}>();

const clickTab = (idx: number) => {
    if (props.selectedIdx === idx) return;
    emit('selectTab', idx);
};

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
.div-sub-tab-stats-result {
  align-self: stretch;
  border-radius: 0px 0px 6px 6px;
  overflow-x: auto;
  background-color: #0c4ba7;
  display: flex;
  gap: 4px;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 0 6px 10px;
}
.div-sub-tab-stats-result .div-2 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  padding: 4px 10px;
}
.div-sub-tab-stats-result .div-3 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  padding: 4px 10px;
}
.div-sub-tab-stats-result .div-4 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  padding: 4px 10px;
}
.div-sub-tab-stats-result .div-5 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  z-index: 10;
  white-space: nowrap;
  padding: 4px 10px;
}
</style>
