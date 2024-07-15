<template>
  <div class="div-one-x-two">
    <div class="div-2 cursor-pointer" @click="click">
      <div class="div-3">1</div>
      <div class="div-4">{{ props.value[0] }}</div>
    </div>
    <div class="div-5 cursor-pointer"@click="click">
      <div class="div-6">X</div>
      <div class="div-7">{{ props.value[1] }}</div>
    </div>
    <div class="div-8 cursor-pointer"@click="click">
      <div class="div-9">2</div>
      <div class="div-10">{{ props.value[2] }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: number[];
}>();

const click = () => {
    console.log('click group odds');
};

</script>

<style scoped>
.div-one-x-two {
  display: flex;
  gap: 2px;
  color: #000;
  font-weight: bolder;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  width: auto;
  
}
.div-2 {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}
.div-3 {
  letter-spacing: -0.56px;
  font: 14px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-4 {
  justify-content: center;
  border-radius: 3px;
  background-color: #e7e7e7;
  margin-top: 4px;
  padding: 2px 7px;
  font: 12px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-5 {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}
.div-6 {
  letter-spacing: -0.56px;
  font: 14px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-7 {
  justify-content: center;
  border-radius: 3px;
  background-color: #e7e7e7;
  margin-top: 4px;
  padding: 2px 7px;
  font: 12px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-8 {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}
.div-9 {
  letter-spacing: -0.56px;
  font: 14px Pretendard, sans-serif;
  font-weight: bolder;
}
.div-10 {
  justify-content: center;
  border-radius: 3px;
  background-color: #e7e7e7;
  margin-top: 4px;
  padding: 2px 7px;
  font: 12px Pretendard, sans-serif;
  font-weight: bolder;
}
</style>
