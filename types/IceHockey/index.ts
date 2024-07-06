import UtilDate from "~/utils/date";
import type { TIceHockeySchedule, } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 30 ||
        ai_status_id === 331 ||
        ai_status_id === 31 ||
        ai_status_id === 332 ||
        ai_status_id === 32
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 100 ||
        ai_status_id === 6 ||
        ai_status_id === 10 ||
        ai_status_id === 105 ||
        ai_status_id === 8 ||
        ai_status_id === 13 ||
        ai_status_id === 110 ||
        ai_status_id === 14 ||
        ai_status_id === 15 ||
        ai_status_id === 16 ||
        ai_status_id === 17 ||
        ai_status_id === 18 ||
        ai_status_id === 19 ||
        ai_status_id === 99
    );
};

export const getScore = (prefix: TContentStorePrefix, schedule: TIceHockeySchedule): number => {
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