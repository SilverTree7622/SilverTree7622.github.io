<template>
  <div class="div">
    <div class="div-2">match stats</div>
    <div class="div-3">last matches</div>
    <div class="div-4">top players</div>
    <div class="div-5">odds</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.div {
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
.div-2 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  background-color: #627bcd;
  padding: 4px 10px;
}
.div-3 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  background-color: #8c9db6;
  padding: 4px 10px;
}
.div-4 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  background-color: #8c9db6;
  padding: 4px 10px;
}
.div-5 {
  font-family: Pretendard, sans-serif;
  justify-content: center;
  border-radius: 6px;
  background-color: #8c9db6;
  z-index: 10;
  white-space: nowrap;
  padding: 4px 10px;
}
</style>
