<template>
    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
    <div class="frame-490">
        <div class="in-edward-nketiah body">In: Edward Nketiah</div>
        <div class="out-oleksndr-zinchenko caption">Out: Oleksndr Zinchenko</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    in: string;
    out: string;
}>();
</script>