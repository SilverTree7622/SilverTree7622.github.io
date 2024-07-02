import { defineStore } from "pinia";
import UtilDate from "~/utils/date";


export const useDateStore = defineStore('dateStore', () => {

    const opt = reactive({
        date: <any> new Date(Date.now()),
    });

    const init = () => {
        opt.date = new Date();
    };

    const setDate = (date: Date) => {
        opt.date = date;
    };

    const getDate = (): Date => {
        return opt.date;
    };

    const getFilterFormat = (time: Date) => {
        const year = JSON.stringify(time.getFullYear()).slice(2, 4);
        const month = (time.getMonth() + 1).toString().length === 1 ? `0${ time.getMonth() + 1 }` : (time.getMonth() + 1);
        const day = time.getDate().toString().length === 1 ? `0${ time.getDate() }` : time.getDate();
        return month + '/' + day + '/' + year;
    };

    const getLeagueFormat = (time: Date, isShowInDetail: boolean = true) => {
        const year = time.getFullYear();
        const month = (time.getMonth() + 1).toString().length === 1 ? `0${ time.getMonth() + 1 }` : (time.getMonth() + 1);
        const day = time.getDate().toString().length === 1 ? `0${ time.getDate() }` : time.getDate();
        const weekDay = time.getDay(); 
        const dayNames = ["SUN", "MON", "TUE", 'WED', 'THU', 'FRI', 'SAT'];
        return month + '/' + day + '/' + year + ', ' + dayNames[weekDay] + (isShowInDetail ? ` // ${ time.toString() }` : '');
    };

    const getFromDate = (): number => {
        return UtilDate.getWithOutMillisecond(getDate().getTime());
    };

    return {
        init,
        setDate,
        getDate,
        getFilterFormat,
        getLeagueFormat,
        getFromDate,
    };
});