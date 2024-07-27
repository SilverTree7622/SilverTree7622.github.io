<template>
    <NuxtLink :to="getHeading()">
        <div 
            :class="`
                tap_ cursor-pointer
                ${ (props.isToggled || opt.isHover) ? 'tap_-selected' : 'tap_-default' }
            `"
            @pointerover="opt.isHover = true"
            @pointerleave="opt.isHover = false"
        >
            <div
                :class="`
                    live tapselected
                    ${
                        (props.isToggled || opt.isHover) ?
                        'font-bold text-[color:var(--ptyellow)]' :
                        'font-normal text-white'
                    }
                `"
            >
                {{ props.name.toUpperCase() }}
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    sName: string;
    name: string;
    isToggled: boolean;
    customHeading?: string;
}>();

const opt = reactive({
    isHover: <boolean> false,
});

const getHeading = (): string => {
    if (props.customHeading) {
        return props.customHeading;
    } else {
        return `/${ props.sName }?tab=${ props.name }`;
    }
};
</script>

<style scoped>
.tap_-selected {
  background-color: var(--tory-blue);
  border-color: var(--ptyellow);
  border-top-style: solid;
  border-top-width: 3px;
  height: 31px;
  margin-top: -5.00px;
  padding: 0px 16px;
}

.tap_-default {
  align-self: stretch;
  background-color: var(--catalina-blue);
  padding: 0px 16px;
}

.tap_ {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;
}
</style>