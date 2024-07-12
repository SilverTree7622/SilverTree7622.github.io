import { defineStore } from "pinia";
import type { TSelectorLang, TSelectorOdds, TSelectorTime } from "~/types/Selector";


export const useSettingStore = defineStore('settingStore', () => {
    const {
        INIT_DATA,
    } = useRuntimeConfig().public.CONSTANTS;

    const opt = reactive({
        show: <Function> () => {},
        hide: <Function> () => {},
    });

    const config = reactive({
        lang: <number> 0,
        time: <number> 0,
        odds: <number> 0,
        isDefault: <boolean> true,
    });
    
    const register = (show: () => void, hide: () => void) => {
        opt.show = show;
        opt.hide = hide;
    };

    const show = () => {
        opt.show();
    };
    
    const hide = () => {
        opt.hide();
    };

    const setConfig = (newConfig: {
        lang?: number;
        time?: number;
        odds?: number;
        isDefault?: boolean;
    }) => {
        if (newConfig.lang !== undefined) config.lang = newConfig.lang;
        if (newConfig.time !== undefined) config.time = newConfig.time;
        if (newConfig.odds !== undefined) config.odds = newConfig.odds;
        if (newConfig.isDefault !== undefined) config.isDefault = newConfig.isDefault;
        save();
    };

    const save = () => {
        const key = `${ INIT_DATA }_setting`;
        localStorage.setItem(
            key,
            JSON.stringify({
                lang: config.lang ?? 0,
                time: config.time ?? 0,
                odds: config.odds ?? 0,
                isDefault: config.isDefault,
            })
        );
    };

    const getData = (): {
        lang: number;
        time: number;
        odds: number;
        isDefault: boolean;
    } => {
        const key = `${ INIT_DATA }_setting`;
        let data = JSON.parse(localStorage.getItem(key) ?? '{}');
        if (!data) {
            localStorage.setItem(key, JSON.stringify({
                lang: 0,
                time: 0,
                odds: 0,
                isDefault: true,
            }));
        }
        config.lang = data.lang ?? 0;
        config.time = data.time ?? 0;
        config.odds = data.odds ?? 0;
        config.isDefault = data.isDefault;
        return {
            lang: config.lang,
            time: config.time,
            odds: config.odds,
            isDefault: config.isDefault,
        };
    };

    return {
        register,
        show,
        hide,
        setConfig,
        save,
        getData,
    };
});