import UtilDate from "~/utils/date";
import type { TVolleyBallSchedule } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 432 ||
        ai_status_id === 434 ||
        ai_status_id === 436 ||
        ai_status_id === 438 ||
        ai_status_id === 440
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 100 ||
        ai_status_id === 14 ||
        ai_status_id === 15 ||
        ai_status_id === 16 ||
        ai_status_id === 17 ||
        ai_status_id === 19 ||
        ai_status_id === 99
    );
};


export const getScore = (prefix: TContentStorePrefix, schedule: TVolleyBallSchedule): number => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

export const getPrefix = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    return 'SET';
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    if (ai_match_status === 432) {
        return '1';
    }
    if (ai_match_status === 434) {
        return '2';
    }
    if (ai_match_status === 436) {
        return '3';
    }
    if (ai_match_status === 438) {
        return '4';
    }
    return '5'
};