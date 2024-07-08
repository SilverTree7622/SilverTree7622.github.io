<template>
    <button
        v-show="opt.isVisible"
        ref="$scrollToTopButton"
        @click="scrollToTop()"
        class="
            scroll-to-top fixed bottom-4 right-4 
            bg-gray-800 text-black rounded-full 
            transition duration-300 hover:bg-gray-700 
            hover:text-gray-200
        "
        @pointerenter="opt.isHover = true"
        @pointerleave="opt.isHover = false"
    >
        <img
            v-show="opt.isHover"
            class="w-16 h-16 rounded-full bg-white"
            src="~/public/img/Btn_ScrollToTop_Hover.svg"
            alt=""
        />
        <img
            v-show="!opt.isHover"
            class="w-16 h-16 rounded-full bg-white"
            src="~/public/img/Btn_ScrollToTop_Default.svg"
            alt=""
        />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    isDisable?: boolean;
}>();
const $scrollToTopButton = ref();

const opt = reactive({
    isVisible: <boolean> false,
    isHover: <boolean> false,
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const detectScrollEvt = () => {
    if (!$scrollToTopButton.value) return;
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll === 0) {
        opt.isVisible = false;
    } else {
        opt.isVisible = true;
    }
};

onMounted(async () => {
    await nextTick();
    if (props.isDisable) return;
    window.addEventListener('scroll', detectScrollEvt);
});

onBeforeUnmount(() => {
    if (props.isDisable) return;
    window.removeEventListener('scroll', detectScrollEvt);
});
</script>