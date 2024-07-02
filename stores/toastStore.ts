import { defineStore } from "pinia";
import { useToast } from 'vue-toastification'


export const useToastStore = defineStore('toastStore', () => {
    const toast = useToast();

    const opt = reactive({
        duration: <number> 3500,
    });

    const success = (context: string) => {
        toast.success(context, {
            timeout: opt.duration,
        });
    };
    const error = (context: string) => {
        toast.error(context, {
            timeout: opt.duration,
        });
    };
    const info = (context: string) => {
        toast.info(context, {
            timeout: opt.duration,
        });
    };
    const warn = (context: string) => {
        toast.warning(context, {
            timeout: opt.duration,
        });
    };

    return {
        success,
        error,
        info,
        warn,
    };
});