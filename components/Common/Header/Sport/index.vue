<template>
    <div class="sub-header">
        <CommonHeaderSportCommon
            :name="'football'"
            :icon="`icon-football-3@2x.png`"
        />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.sub-header {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--frblue);
  display: flex;
  flex: 0 0 auto;
  gap: 2px;
  padding: 6px 10px 11px;
  position: relative;
  width: 100%;
}

</style>