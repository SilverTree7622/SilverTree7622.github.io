import { defineStore } from "pinia";
import { POSITION, TYPE, useToast } from 'vue-toastification'
import type { ToastOptions } from "vue-toastification/dist/types/types";


export type TToastStoreSuccess = ToastOptions & { type?: TYPE.SUCCESS | undefined; };
export type TToastStoreError = ToastOptions & { type?: TYPE.ERROR | undefined; };
export type TToastStoreInfo = ToastOptions & { type?: TYPE.INFO | undefined; };
export type TToastStoreWarn = ToastOptions & { type?: TYPE.WARNING | undefined; };
export type TToastStoreTypes = TToastStoreSuccess | TToastStoreError | TToastStoreInfo | TToastStoreWarn;

export const useToastStore = defineStore('toastStore', () => {
    const toast = useToast();
    
    const opt = reactive<TToastStoreTypes>({
        position: "bottom-center" as POSITION,
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: true,
        closeButton: "button",
        icon: false,
        rtl: false,
    });

    const success = (context: string) => {
        toast.success(context, opt as TToastStoreSuccess);
    };
    const error = (context: string) => {
        toast.error(context, opt as TToastStoreError);
    };
    const info = (context: string) => {
        toast.info(context, opt as TToastStoreInfo);
    };
    const warn = (context: string) => {
        toast.warning(context, opt as TToastStoreWarn);
    };

    return {
        success,
        error,
        info,
        warn,
    };
});