
const UtilDate = {
    syncDigit: (time: string | number, digits: number = 2): string => {
        if (typeof time === 'number') {
            time = `${ time }`;
        }
        if (time.length === 1) {
            time = `0${ time }`;
        }
        return time;
    },

    /**
     * utc based chck is same day
     * @param d1 compare date 1
     * @param d2 compare date 2
     * @returns
     */
    chckSameDay: (d1: Date, d2: Date): boolean => {
        return d1.getUTCFullYear() === d2.getUTCFullYear() &&
        d1.getUTCMonth() === d2.getUTCMonth() &&
        d1.getUTCDate() === d2.getUTCDate();
    },

    chckDateIsToday: (d: Date): boolean => {
        return UtilDate.chckSameDay(d, new Date(Date.now()));
    },

    chckIsYesterday: (d: Date): boolean => {
        const isToday = UtilDate.chckDateIsToday(d);
        if (isToday) {
            return false;
        }
        return new Date(d).getTime() < new Date(Date.now()).getTime();
    },

    getWithOutMillisecond: (timestamp?: number): number => {
        return ~~( ( timestamp ?? new Date(Date.now()).getTime() ) / 1000 );
    },

    addMillisecond: (timestamp: number) => {
        return new Date( Number(`${ timestamp }000`) );
    },
};

export default UtilDate;