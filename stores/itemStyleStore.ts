import { defineStore } from "pinia";


export type TItemStyleStoreStyle = 'default' | 'classic';

export const useItemStyleStore = defineStore('itemStyleStore', () => {
    const {
        INIT_DATA,
    } = useRuntimeConfig().public.CONSTANTS;

    const opt = reactive({
        style: <TItemStyleStoreStyle> 'default',
    });
    
    const changeStyle = (style: TItemStyleStoreStyle = 'default') => {
        opt.style = (style === 'default' ? 'classic' : 'default');
        const key = `${ INIT_DATA }_ITEM_STYLE`;
        localStorage.setItem(key, opt.style);
    };

    const onMounted = () => {
        // get it from localstorage
        const key = `${ INIT_DATA }_ITEM_STYLE`;
        const storageItem = localStorage.getItem(key);
        if (storageItem) {
            opt.style = storageItem as TItemStyleStoreStyle;
        } else {
            opt.style = 'default';
            localStorage.setItem(key, opt.style);
        }
    };

    const onBeforeUnmount = () => {

    };

    const getStyle = (): TItemStyleStoreStyle => {
        return opt.style;
    };

    return {
        changeStyle,
        onMounted,
        onBeforeUnmount,
        getStyle,
    };
});