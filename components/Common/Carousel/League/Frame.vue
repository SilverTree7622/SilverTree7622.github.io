<template>
    <div ref="$accordion" :id="`accordion-${ props.name }`" class="w-full h-auto rounded-xl">
        <CommonCarouselLeagueItem
            v-for="(item, idx) in props.list"
            :idx="idx"
            :logo="''"
            :title="item.name"
            :length="props.list.length"
            :isOpen="opt.openList[idx] ?? false"
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
    name: string;
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
        const triggerElId = `accordion-${ props.name ?? 'example' }-heading-${ idx + 1 }`;
        accordionItems.push({
            id: triggerElId,
            triggerEl: document.querySelector(`#${ triggerElId }`),
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
        id: `accordion-${ props.name }`,
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