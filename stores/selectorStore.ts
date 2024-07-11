import { defineStore } from "pinia";
import moment from 'moment-timezone';
import type { TSelectorLang, TSelectorOdds, TSelectorSports, TSelectorTime } from "~/types/Selector";


export const useSelectorStore = defineStore('selectorStore', () => {
    const opt = reactive({
        lang: <TSelectorLang[]> [
            'EN', 'KR', 'CN', 'FR',
        ],
        time: <TSelectorTime[]> [],
        odds: <TSelectorOdds[]> [],
        sports: <TSelectorSports[]> [],
    });

    const setTimeFormat = (nation: string): string => {
        const now = moment().tz(nation);
        const utcOffset = now.format('Z');
        return `${ nation } (${ utcOffset })`;
    };

    const onMounted = (
        time: TSelectorTime[],
        odds: TSelectorOdds[],
        sports: TSelectorSports[],
    ) => {
        opt.time = time;
        opt.odds = odds;
        opt.sports = sports;
    };

    const getLang = () => {
        return opt.lang;
    };

    const getTime = () => {
        return opt.time;
    };

    const getOdds = () => {
        return opt.odds;
    };

    const getSports = () => {
        return opt.sports;
    };

    return {
        onMounted,
        setTimeFormat,
        getLang,
        getTime,
        getOdds,
        getSports,
    };
});