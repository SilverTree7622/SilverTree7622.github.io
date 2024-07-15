<template>
    <div ref="$accordion" id="accordion-example" class="w-full h-auto rounded-xl">
        <CommonCarouselLeagueItem
            v-for="(item, idx) in props.list"
            :idx="idx"
            :logo="''"
            :title="item.name"
            :length="props.list.length"
            :isOpen="opt.openList[idx]"
            :name="props.name ?? 'example'"
        >
            {{ `context: ${ item.name }` }}
        </CommonCarouselLeagueItem>
    </div>
</template>

<script setup lang="ts">
import { Accordion } from "flowbite";

const $accordion = ref();

const props = defineProps<{
    list: any[];
    name?: string;
}>();

const opt = reactive({
    openList: <boolean[]> [],
});

onMounted(async () => {
    await nextTick();
    if (!props.list.length) return;
    if (!$accordion.value) return;
    
    const accordionItems: any[] = [];
    props.list.map((item, idx) => {
        accordionItems.push({
            id: `accordion-example-heading-${ idx + 1 }`,
            triggerEl: document.querySelector(`#accordion-${ props.name ?? 'example' }-heading-${ idx + 1 }`),
            targetEl: document.querySelector(`#accordion-${ props.name ?? 'example' }-body-${ idx + 1 }`),
            active: false,
        });
        opt.openList.push(false);
    });

    // options with default values
    const options = {
        alwaysOpen: false,
        onOpen: (obj, ele) => {
            const idx = obj._items.findIndex( item => item.id === ele.id );
            if (idx < 0) return;
            opt.openList[idx] = true;
        },
        onClose: (obj, ele) => {
            const idx = obj._items.findIndex( item => item.id === ele.id );
            if (idx < 0) return;
            opt.openList[idx] = false;
        },
    };

    // instance options object
    const instanceOptions = {
        id: "accordion-example",
        override: true,
    };

    const accordion = new Accordion(
        $accordion.value,
        accordionItems,
        options,
        instanceOptions
    );
});

onBeforeUnmount(() => {
    
});
</script>

<style scoped>

</style>