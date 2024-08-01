<template>
  <div class="div-h2h-team-selection">
    <div class="div-2" :class="props.isSelectedIdx === 1 && 'cursor-pointer'">
      <div :class="props.isSelectedIdx === 0 ? 'div-3' : 'div-6'" @click="click(0)">
        <img
          loading="lazy"
          class="img"
          :src="props.homeLogo"
        />
        <div class="div-4">
            {{ props.homeName }}
        </div>
      </div>
    </div>
    <div class="div-5" :class="props.isSelectedIdx === 0 && 'cursor-pointer'">
      <div :class="props.isSelectedIdx === 1 ? 'div-3' : 'div-6'" @click="click(1)">
        <div class="div-7">
            {{ props.awayName }}
        </div>
        <img
          loading="lazy"
          class="img"
          :src="props.awayLogo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    homeName: string;
    homeLogo: string;
    awayName: string;
    awayLogo: string;
    isSelectedIdx: number;
}>();

const emit = defineEmits<{
  (e: 'toggle', idx: number): void,
}>();

const click = (idx: number) => {
    if (props.isSelectedIdx === idx) return;
    emit('toggle', idx);
};
</script>

<style scoped>
.div-h2h-team-selection {
  justify-content: center;
  align-self: stretch;
  display: flex;
  padding-bottom: 8px;
  gap: 0px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}
.div-2 {
  justify-content: center;
  display: flex;
  /* margin-top: 4px; */
  flex-direction: column;
  /* color: #fff; */
  flex: 1;
}
.div-3 {
  justify-content: center;
  border-radius: 6px 0px 0px 6px;
  border-color: rgba(98, 123, 205, 1);
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  background-color: #627bcd;
  color: #fff;
  display: flex;
  gap: 0px;
  padding: 0 5px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.img {
  aspect-ratio: 1.28;
  object-fit: auto;
  object-position: center;
  width: 69px;
}
.div-4 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
.div-5 {
  justify-content: center;
  display: flex;
  /* margin-top: 4px; */
  flex-direction: column;
  /* color: #000; */
  white-space: nowrap;
  flex: 1;
}
.div-6 {
  justify-content: center;
  border-radius: 0px 6px 6px 0px;
  border-color: rgba(98, 123, 205, 1);
  border-style: solid;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  background-color: #f8f8f8;
  color: #000;
  display: flex;
  gap: 0px;
  padding: 0 20px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.div-7 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
</style>
