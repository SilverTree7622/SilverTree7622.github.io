<template>
    <div class="tap">
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="live"
            :isToggled="props.tab === 'live'"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="fixtures"
            :isToggled="props.tab === 'fixtures'"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="odds"
            :isToggled="props.tab === 'odds'"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="result"
            :isToggled="props.tab === 'result'"
        />
        <CommonHeaderTabCommon
            :sName="props.sName"
            name="league"
            :isToggled="props.tab === 'league'"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    sName: string;
    tab: string;
}>();
</script>

<style scoped>
.tap {
  align-items: flex-end;
  align-self: stretch;
  background-color: var(--catalina-blue);
  border-radius: 0px 0px 6px 6px;
  display: flex;
  height: 26px;
  justify-content: center;
  padding: 0px 10px;
  position: relative;
  width: 100%;
}

</style>