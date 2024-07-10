<template>
    <div>
        <header class="header-Mzx5SR">
            <CommonLogo class="h-full ml-3" />
            <div class="mr-3">
                <CommonHeaderRight />
            </div>
        </header>
        <div class="frame-322-Mzx5SR">
            <CommonHeaderSport
                :result_nav_code="props.result_nav_code"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    result_nav_code: string;
}>();
</script>

<style scoped>

.btn_-menu {
  height: 20px;
  position: relative;
  width: 22px;
  left: 11px;
  top: 11px;
}
</style>