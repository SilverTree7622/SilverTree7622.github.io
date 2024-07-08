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
    >
        <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240227155250/up.png" 
            class="w-16 h-16 rounded-full bg-white" alt=""
        >
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    isDisable?: boolean;
}>();
const $scrollToTopButton = ref();

const opt = reactive({
    isVisible: <boolean> false,
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