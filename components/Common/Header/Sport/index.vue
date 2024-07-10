<template>
    <div class="sub-header">
        <CommonHeaderSportCommon
            :name="'football'"
            :icon="`icon-football-3@2x.png`"
            :hoverIcon="`Icon_Football_Hover.png`"
            :isToggled="(props.result_nav_code === 'S001' || props.result_nav_code === 'S002')"
        />
        <CommonHeaderSportCommon
            :name="'basketball'"
            :icon="`Icon_Basketball.svg`"
            :isToggled="props.result_nav_code === 'S003'"
        />
        <CommonHeaderSportCommon
            :name="'baseball'"
            :icon="`Icon_Baseball.svg`"
            :isToggled="props.result_nav_code === 'S004'"
        />
        <CommonHeaderSportCommon
            :name="'volleyball'"
            :icon="`Icon_Vollyball.svg`"
            :isToggled="props.result_nav_code === 'S005'"
        />
        <CommonHeaderSportCommon
            :name="'tennis'"
            :icon="`Icon_Tennis.svg`"
            :isToggled="props.result_nav_code === 'S006'"
        />
        <CommonHeaderSportCommon
            :name="'icehockey'"
            :icon="`Icon_Icehockey.svg`"
            :isToggled="props.result_nav_code === 'S007'"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    result_nav_code: string;
}>();
</script>

<style scoped>
.sub-header {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--frblue2);
  display: flex;
  flex: 0 0 auto;
  gap: 2px;
  padding: 6px 10px 11px;
  position: relative;
  width: 100%;
}

</style>