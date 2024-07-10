<template>
    <div class="fr_-date">
        <!-- <UPopover :popper="{ placement: 'bottom-start' }">
            <div class="btn_-round-square-SqVRvm btn_-round-square" style="cursor: pointer;">
                <div class="group-24-vpjhxn group-24">
                    <div class="rectangle-13-NyCxgV"></div>
                    <div class="text-NyCxgV text body" style="left: 27px;">{{ opt.displayDate }}</div>
                </div>
                <div class="group-25-vpjhxn">
                    <div class="rectangle-13-JxJyba"></div>
                    <div class="text-JxJyba text body" style="left: 27px;">{{ opt.displayDate }}</div>
                </div>
            </div>
            <template #panel="{ close }">
                <CommonFilterDatePicker 
                    v-model="opt.date"
                    @update:model-value="updateCalendar"
                    is-required
                    @close="close"
                />
            </template>
        </UPopover> -->

        <div class="btn_-container">
            <div class="btn_-round-square">
                <div class="place valign-text-middle body">{{ opt.displayDate }}</div>
            </div>
            <div class="btn_-circle cursor-pointer" @click="prev">
                <img class="polygon-3" src="/img/polygon-4-1@2x.png" alt="Polygon 3" />
            </div>
            <div class="btn_-circle-1 cursor-pointer" @click="next">
                <img class="polygon-3-1" src="/img/polygon-4-1@2x.png" alt="Polygon 3" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    date: any;
}>(), {
    date: new Date(Date.now()),
});

const emit = defineEmits<{
    (e: 'prev-tab', date: Date): void;
    (e: 'next-tab', date: Date): void;
}>();

const {
    ONE_DAY_MILLISECOND,
} = useRuntimeConfig().public.CONSTANTS;
const dateStore = useDateStore();

const setFormat = (date?: Date) => {
    if (date) {
        opt.date = date;
    }
    const time = opt.date;
    opt.displayDate = dateStore.getFilterFormat(time);
    return opt.displayDate;
};

const opt = reactive({
    date: props.date,
    displayDate: dateStore.getFilterFormat(new Date(props.date)),
});

dateStore.setDate(opt.date);

watch(
    () => opt.date,
    async (p) => {
        setFormat();
        dateStore.setDate(opt.date);
    }
);

const init = () => {
    setFormat(new Date(Date.now()));
    dateStore.setDate(opt.date);
};

const prev = () => {
    const yesterday = new Date(opt.date.getTime() - ONE_DAY_MILLISECOND);
    setFormat(yesterday);
    emit('prev-tab', opt.date);
};

const next = () => {
    const tmpDate = new Date(opt.date.getTime() + ONE_DAY_MILLISECOND);
    setFormat(tmpDate);
    emit('next-tab', opt.date);
};

// const updateCalendar = (value) => {
//     if (new Date().getTime() > value.getTime()) {
//         return;
//     }
//     setFormat(new Date());
// };

defineExpose({
    init,
});
</script>

<style scoped>

.fr_-date {
  height: 25px;
  position: relative;
  width: 107px;
}

.btn_-container {
  border-radius: 15px;
  height: 25px;
  position: relative;
}

.btn_-round-square {
  align-items: center;
  border: 1px solid;
  border-color: #a2b7f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 25px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 107px;
}

.place {
  color: var(--wt);
  font-weight: 400;
  line-height: normal;
  position: relative;
  text-align: center;
  width: fit-content;
}

.btn_-circle {
  align-items: center;
  background-color: #627bcd;
  border-radius: 12.5px;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 25px;
}

.btn_-circle:hover {
  transform: translate(0, 5px);
}

.polygon-3 {
  height: 8px;
  margin-left: 1.0px;
  margin-top: 1.0px;
  width: 8px;
}

.btn_-circle-1 {
  align-items: center;
  background-color: #627bcd;
  border-radius: 12.5px;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  left: 82px;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 25px;
}

.btn_-circle-1:hover {
  transform: translate(0, 5px);
}

.polygon-3-1 {
  height: 8px;
  margin-left: 1.0px;
  margin-top: -1.0px;
  width: 8px;
  transform: rotate(-180deg);
}

</style>