import UtilDate from "~/utils/date";
import type { TTennisSchedule } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 3 ||
        ai_status_id === 51 ||
        ai_status_id === 52 ||
        ai_status_id === 53 ||
        ai_status_id === 54 ||
        ai_status_id === 55
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 100 ||
        ai_status_id === 20 ||
        ai_status_id === 21 ||
        ai_status_id === 22 ||
        ai_status_id === 23 ||
        ai_status_id === 24 ||
        ai_status_id === 25 ||
        ai_status_id === 26 ||
        ai_status_id === 27 ||
        ai_status_id === 14 ||
        ai_status_id === 15 ||
        ai_status_id === 16 ||
        ai_status_id === 17 ||
        ai_status_id === 18 ||
        ai_status_id === 19 ||
        ai_status_id === 99
    );
};

export const getScore = (prefix: TContentStorePrefix, schedule: TTennisSchedule): number => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = gapTime / 60 + 1;
    const matchUpTime = `${ UtilDate.syncDigit(~~(dateTime)) }’`;
    return matchUpTime;
};