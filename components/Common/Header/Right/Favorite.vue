<template>
    <NuxtLink :to="`/favorite`">
        <div class="btn_-header_-circle">
            <div class="icon_-favourite_-default"></div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
</script>

<style scoped>
.icon_-favourite_-default {
  background-image: url(../img/icon-favourite-default@2x.png);
  background-size: 100% 100%;
  height: 20px;
  left: 3.7px;
  position: absolute;
  top: 2px;
  width: 18px;
}

.btn_-header_-circle {
  background-color: var(--catalina-blue);
  border-radius: 20px;
  height: 25px;
  position: relative;
  width: 25px;
}
</style>