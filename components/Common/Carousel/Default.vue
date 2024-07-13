<template>
    <div class="topu95scoresu95latest screen">
        <div class="frame-577">
            <div class="top_-scores">
                <div class="frame-572">
                    <div class="top-scores biggerbody">{{ props.title }}</div>
                </div>
                <div
                    v-if="props.tab !== 'league'"
                    id="carousel-example"
                    class="relative w-full z-10"
                >
                    <!-- Carousel wrapper -->
                    <div 
                        class="relative overflow-hidden rounded-lg"
                        :class="`h-[${ props.height ?? 181 }px]`"
                    >
                        <div
                            v-for="(item, idx) in props.list"
                            :id="`carousel-item-${ idx + 1 }`"
                            class="hidden ease-in-out"
                            :class="`duration-${ opt.animationDuration }`"
                        >
                            <CommonCarouselLiveItem
                                v-if="props.tab === 'live'"
                                :item="item"
                            />
                            <CommonCarouselFixturesItem
                                v-if="props.tab === 'fixtures'"
                                :item="item"
                            />
                            <CommonCarouselOddsItem
                                v-if="props.tab === 'odds'"
                                :item="item"
                            />
                            <CommonCarouselResultItem
                                v-if="props.tab === 'result'"
                                :item="item"
                            />
                        </div>
                    </div>
                    <!-- Slider indicators -->
                    <div class="absolute bottom-[4px] left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
                        <button 
                            v-for="(item, idx) in props.list"
                            :id="`carousel-indicator-${ idx + 1 }`"
                            type="button"
                            class="h-[8px] w-[8px] rounded-full bg-transparent"
                            :aria-current="(idx === 0)"
                            :aria-label="`Slide ${ idx + 1 }`"
                            :data-carousel-slide-to="`${ idx }`"
                        ></button>
                    </div>
                    <!-- Slider controls -->
                    <button 
                        v-if="props.list.length >= 2"
                        id="data-carousel-prev"
                        type="button"
                        class="group absolute left-0 top-0 z-30 flex h-[50%] mt-[8%] cursor-pointer justify-center px-4 focus:outline-none"
                    >
                        <span
                            class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50"
                        >
                            <svg class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="hidden">Previous</span>
                        </span>
                    </button>
                    <button
                        v-if="props.list.length >= 2"
                        id="data-carousel-next"
                        type="button"
                        class="group absolute right-0 top-0 z-30 flex h-[50%] mt-[8%] cursor-pointer justify-center px-4 focus:outline-none"
                    >
                        <span
                            class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50"
                        >
                            <svg class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="hidden">Next</span>
                        </span>
                    </button>
                </div>
                <!-- league content -->
                <CommonCarouselLeagueFrame
                    v-else
                    :list="props.list"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Carousel } from 'flowbite';
import { useFlowbite } from '~/composables/useFlowbite';
import type { CarouselItem, CarouselOptions, CarouselInterface, IndicatorItem, } from 'flowbite';
import type { TCommonTabTypes } from '~/types/Common/tab';
import type { TCarouselTitle } from '~/types/Common/Carousel';

const props = defineProps<{
    title: TCarouselTitle;
    tab: TCommonTabTypes;
    list: any[];
    height?: number;
}>();

const opt = reactive({
    touchstartX: <number>0,
    touchendX: <number>0,
    isInAnimation: <boolean>false,
    animationDuration: <number>700,
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
    // carousel.value.cycle();
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
        const items: CarouselItem[] = [];
        const indicatorList: IndicatorItem[] = [];
        props.list.map((item, idx) => {
            items.push(
                {
                    position: idx,
                    el: document.getElementById(`carousel-item-${ idx + 1 }`) as HTMLElement,
                }
            );
            indicatorList.push(
                {
                    position: idx,
                    el: document.getElementById(`carousel-indicator-${ idx + 1 }`) as HTMLElement,
                }
            );
        });

        // set modal options
        const carouselOptions: CarouselOptions = {
            defaultPosition: 1,
            indicators: {
                activeClasses: 'bg-[#0C4ba7] border-[#0C4ba7] border-2',
                inactiveClasses: 'border-[#0C4ba7] border-2',
                items: indicatorList,
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
        carousel.value.slideTo(0);

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

<style scoped>

.topu95scoresu95latest {
  align-items: flex-start;
  background-color: var(--wt);
  display: flex;
  flex-direction: column;
  position: relative;
}

.frame-577 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 2px 0px;
  position: relative;
  width: 100%;
}

.top_-scores {
  align-items: flex-end;
  align-self: stretch;
  background-color: #0c4aa4;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* height: 221px; */
  overflow: hidden;
  padding: 6px;
  position: relative;
  width: 100%;
}

.frame-572 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  padding: 2px 0px 2px 6px;
  position: relative;
  width: 100%;
}

.top-scores {
  color: var(--wt);
  font-weight: 600;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>