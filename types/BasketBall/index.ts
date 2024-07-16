import UtilDate from "~/utils/date";
import type { TBasketBallSchedule } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 2 ||
        ai_status_id === 3 ||
        ai_status_id === 4 ||
        ai_status_id === 5 ||
        ai_status_id === 6 ||
        ai_status_id === 7 ||
        ai_status_id === 8 ||
        ai_status_id === 9
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 10 ||
        ai_status_id === 11 ||
        ai_status_id === 12 ||
        ai_status_id === 13 ||
        ai_status_id === 14 ||
        ai_status_id === 15
    );
};

export const getScore = (prefix: TContentStorePrefix, schedule: TBasketBallSchedule): number => {
    return schedule[`ai_${ prefix }_scores`][0];
};

export const getPrefix = (ai_match_status: number, ai_kickoff_timestamp: number) => {
    if (ai_match_status === 2 || ai_match_status === 3) {
        return 'Q1';
    }
    else if (ai_match_status === 4 || ai_match_status === 5) {
        return 'Q2';
    }
    else if (ai_match_status === 6 || ai_match_status === 7) {
        return 'Q3';
    }
    else if (ai_match_status === 7 || ai_match_status === 8) {
        return 'Q4';
    }
    else {
        return 'Q4';
    }
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    // default time calculation via match status
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = gapTime / 60 + 1;
    const matchUpTime = `${ UtilDate.syncDigit(~~(dateTime)) }’`;
    return matchUpTime;
};