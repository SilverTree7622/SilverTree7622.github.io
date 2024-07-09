<template>
    <NuxtLink :to="`/search`">
        <div class="btn_-header_-circle">
            <img class="icon" src="/img/icon-searcher@2x.png" alt="Icon_Searcher" />
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
</script>

<style scoped>
.icon {
  height: 20px;
  left: 3.5px;
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