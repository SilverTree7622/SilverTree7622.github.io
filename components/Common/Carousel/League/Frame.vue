<template>
    <div id="accordion-example" class="w-full h-auto">
        <CommonCarouselLeagueItem
            v-for="(item, idx) in props.list"
            :idx="idx"
            :logo="''"
            :title="item.name"
            :length="props.list.length"
        >
            {{ item.name }}
        </CommonCarouselLeagueItem>
    </div>
</template>

<script setup lang="ts">
import { Accordion } from "flowbite";

const props = defineProps<{
    list: any[];
}>();

onMounted(async () => {
    await nextTick();
    console.log('props.list.length: ', props.list.length);
    if (!props.list.length) return;

    const accordionElement = document.getElementById("accordion-example");
    // create an array of objects with the id, trigger element (eg. button), and the content element
    const accordionItems = [];

    props.list.map((item, idx) => {
        accordionItems.push({
            id: `accordion-example-heading-${ idx + 1 }`,
            triggerEl: document.querySelector(`#accordion-example-heading-${ idx + 1 }`),
            targetEl: document.querySelector(`#accordion-example-body-${ idx + 1 }`),
            active: false,
        });
    });

    // options with default values
    const options = {
        alwaysOpen: true,
        // activeClasses: "text-gray-900 bg-[#e0e4ea]",
        // inactiveClasses: "text-gray-900 bg-[#e0e4ea]",
        onOpen: (item) => {
            console.log("accordion item has been shown");
            console.log(item);
        },
        onClose: (item) => {
            console.log("accordion item has been hidden");
            console.log(item);
        },
        onToggle: (item) => {
            console.log("accordion item has been toggled");
            console.log(item);
        },
    };

    // instance options object
    const instanceOptions = {
        id: "accordion-example",
        override: true,
    };

    const accordion = new Accordion(
        accordionElement,
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