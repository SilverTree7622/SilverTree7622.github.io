<template>
    <div class="div-h2h-filter cursor-pointer" @click="setIsChecked(!props.isChecked)">
        <img
            v-show="props.isChecked"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e486fe478a01389f55efc1d0015a38c1351af0d31a2c2346dc0f081f7bd5c08?"
            class="img"
        />
        <div
            v-show="!props.isChecked"
            class="div-2-empty"
        ></div>
        <div class="div-2">
            {{ props.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    isChecked: boolean;
}>();

const emit = defineEmits<{
    (e: 'toggle', value: boolean): void,
}>();

const setIsChecked = (value: boolean) => {
    emit('toggle', value);
};
</script>

<style scoped>
.div-h2h-filter {
  justify-content: center;
  border-radius: 3px;
  border-color: rgba(175, 175, 175, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #f3f3f3;
  display: flex;
  gap: 3px;
  font-size: 13px;
  color: #626262;
  font-weight: 400;
  text-align: center;
  /* padding: 0 4px; */
  width: auto;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
}

.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  fill: #00b1ff;
  margin: auto 0;
}

.div-2 {
  font-family: Pretendard, sans-serif;
}

.div-2-empty {
  border-radius: 3px;
  border-color: rgba(98, 98, 98, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  width: 15px;
  height: 15px;
  margin: auto 0;
}

</style>
