<template>
    <div id="carousel-example" class="relative w-full z-10">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96">
            <!-- Item 1 -->
            <div id="carousel-item-1" class="hidden ease-in-out" :class="`duration-${ opt.animationDuration }`">
                <img
                    draggable="false"
                    src="/public/img/Top_Scores_BG 1.svg"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            <!-- Item 2 -->
            <div id="carousel-item-2" class="hidden ease-in-out" :class="`duration-${ opt.animationDuration }`">
                <img
                    draggable="false" 
                    src="/public/img/icon-basketball@2x.png"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            <!-- Item 3 -->
            <div id="carousel-item-3" class="hidden ease-in-out" :class="`duration-${ opt.animationDuration }`">
                <img
                    draggable="false"
                    src="/public/img/icon-baseball@2x.png"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            <!-- Item 4 -->
            <div id="carousel-item-4" class="hidden ease-in-out" :class="`duration-${ opt.animationDuration }`">
                <img
                    draggable="false"
                    src="/public/img/icon-icehackey-3@2x.png"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute bottom-5 left-1/2 z-300 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            <button id="carousel-indicator-1" type="button" class="h-3 w-3 rounded-full" aria-current="true"
                aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button id="carousel-indicator-2" type="button" class="h-3 w-3 rounded-full" aria-current="false"
                aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button id="carousel-indicator-3" type="button" class="h-3 w-3 rounded-full" aria-current="false"
                aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button id="carousel-indicator-4" type="button" class="h-3 w-3 rounded-full" aria-current="false"
                aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>
        <!-- Slider controls -->
        <button id="data-carousel-prev" type="button"
            class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none">
            <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <svg class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button id="data-carousel-next" type="button"
            class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none">
            <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <svg class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { Carousel } from 'flowbite';
import { useFlowbite } from '~/composables/useFlowbite';
import type { CarouselItem, CarouselOptions, CarouselInterface, } from 'flowbite';

const props = defineProps<{
    list: any[];
    background?: string;
}>();

const {
    CAROUSEL_INTERVAL_DURAITON,
} = useRuntimeConfig().public.CONSTANTS;

const opt = reactive({
    touchstartX: <number> 0,
    touchendX: <number> 0,
    isInAnimation: <boolean> false,
    animationDuration: <number> 700,
});

const carouselEle = ref();
const carousel = ref<CarouselInterface>();

const checkDirection = () => {
    if (opt.touchendX < opt.touchstartX) {
        setTimeout(() => { next(); }, 0);
    }
    if (opt.touchendX > opt.touchstartX) {
        setTimeout(() => { prev(); }, 0);
    }
};

const mouseOver = () => {
    if (!carousel.value) return;
    carousel.value.pause();
};

const mouseLeave = () => {
    if (!carousel.value) return;
    carousel.value.cycle();
};

const touchStart = (e) => {
    if (e?.changedTouches) {
        opt.touchstartX = e.changedTouches[0].screenX;
    }
    if (e?.screenX) {
        opt.touchstartX = e.screenX;
    }
};

const touchEnd = (e) => {
    if (e?.changedTouches) {
        opt.touchendX = e.changedTouches[0].screenX;
    }
    if (e?.screenX) {
        opt.touchendX = e.screenX;
    }
    checkDirection();
};

const actAnim = () => {
    opt.isInAnimation = true;
    setTimeout(() => {
        opt.isInAnimation = false;
    }, opt.animationDuration);
};

const prev = (ignoreInAnimation: boolean = false) => {
    if (!carousel.value) return;
    if (!ignoreInAnimation) {
        if (opt.isInAnimation) return;
    }
    carousel.value.prev();
};

const next = (ignoreInAnimation: boolean = false) => {
    if (!carousel.value) return;
    if (!ignoreInAnimation) {
        if (opt.isInAnimation) return;
    }
    carousel.value.next();
};

onMounted(async () => {
    await nextTick();
    useFlowbite(() => {
        carouselEle.value = document.getElementById('carousel-example');
        const items: CarouselItem[] = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1') as HTMLElement,
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2') as HTMLElement,
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3') as HTMLElement,
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4') as HTMLElement,
            },
        ];
        // set modal options
        const carouselOptions: CarouselOptions = {
            defaultPosition: 1,
            interval: CAROUSEL_INTERVAL_DURAITON,
            indicators: {
                activeClasses: 'bg-white dark:bg-gray-800',
                inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                items,
            },
            onNext: () => { actAnim(); },
            onPrev: () => { actAnim(); },
            onChange: () => {

            },
        };

        if (!carouselEle.value) return;
        carouselEle.value.addEventListener('mouseover', mouseOver);
        carouselEle.value.addEventListener('mouseleave', mouseLeave);
        carouselEle.value.addEventListener('mousedown', touchStart);
        carouselEle.value.addEventListener('mouseup', touchEnd);
        carouselEle.value.addEventListener('touchstart', touchStart);
        carouselEle.value.addEventListener('touchend', touchEnd);
        
        // instance options object
        const instanceOptions = {
            id: 'carousel-example',
            override: true,
        };

        carousel.value = new Carousel(
            carouselEle.value, items, carouselOptions, instanceOptions
        );
        carousel.value.cycle();

        // set event listeners for prev and next buttons
        const $prevButton = document.getElementById('data-carousel-prev');
        const $nextButton = document.getElementById('data-carousel-next');
        if (!$prevButton) return;
        if (!$nextButton) return;
        $prevButton.addEventListener('click', () => { prev(); });
        $nextButton.addEventListener('click', () => { next(); });
    });
});

onBeforeUnmount(() => {
    if (!carouselEle.value) return;
    carouselEle.value.removeEventListener('mouseover', mouseOver);
    carouselEle.value.removeEventListener('mouseleave', mouseLeave);
    carouselEle.value.removeEventListener('mousedown', touchStart);
    carouselEle.value.removeEventListener('mouseup', touchEnd);
    carouselEle.value.removeEventListener('touchstart', touchStart);
    carouselEle.value.removeEventListener('touchend', touchEnd);
});
</script>

<style scoped></style>