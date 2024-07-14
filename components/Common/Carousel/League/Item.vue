<template>
    <h2
        :id="`accordion-example-heading-${ props.idx + 1 }`"
    >
        <button
            type="button"
            class="
                flex items-center justify-between w-full p-1 font-medium rtl:text-right
                border border-[#bcc1c8] text-gray-900 bg-[#e0e4ea] h-[35px]
            "
            :class="props.idx === 0 ? 'rounded-t-xl' : ((props.idx + 1 === props.length) && 'rounded-b-xl')"
            aria-expanded="true"
            aria-controls="accordion-example-body-1"
        >
            <div class="w-full h-auto flex items-center">
                <!-- :src="props.logo"   -->
                <img
                    src="/img/flag-circle-eng@2x.png"
                    class="w-[20px] h-[20px] ml-1"
                />
                <div class="ml-2 font-bold">
                    {{ props.title }}
                </div>
            </div>
            <svg
                data-accordion-icon
                class="w-6 h-6 -rotate-90 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </button>
    </h2>
    <div
        :id="`accordion-example-body-${ idx + 1 }`"
        class="hidden border border-gray-200 bg-[#f8f8f8] text-black font-bold pl-8 h-[35px] py-auto"
        :class="(props.idx + 1 === props.length) ? 'rounded-b-xl' : ''"
        :aria-labelledby="`accordion-example-heading-${ idx + 1 }`"
    >
        <div
            class="border border-gray-200 text-wrap overflow-hidden"
            :class="(props.idx + 1 === props.length) ? 'rounded-b-xl' : ''"
        >
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    idx: number;
    logo: string;
    title: string;
    length: number;
    isOpen: boolean;
}>();

onMounted(async () => {
    await nextTick();

});

onBeforeUnmount(() => {

});
</script>
