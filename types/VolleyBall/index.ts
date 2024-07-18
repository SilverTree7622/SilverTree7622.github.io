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


export const getScore = (prefix: TContentStoreHomeAwayPrefix, schedule: TVolleyBallSchedule): number => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

export const getScoreViaIdx = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TVolleyBallSchedule,
    idx: number | string = 0,
): number => {
    if (typeof idx === 'string') {
        return schedule['ai_scores'][idx][ prefix === 'home' ? 0 : 1 ];
    }
    if (idx === 0) return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 1) return schedule['ai_scores']['p1'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 2) return schedule['ai_scores']['p2'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 3) return schedule['ai_scores']['p3'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 4) return schedule['ai_scores']['p4'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 5) return schedule['ai_scores']['p5'][ prefix === 'home' ? 0 : 1 ];
    return 0;
};

export const getCurrentInningSpotlightIdx = (
    schedule: TVolleyBallSchedule,
): number => {
    const timeStr = getTime(schedule.ai_match_status, 0);
    if (timeStr === '1') return 0;
    if (timeStr === '2') return 1;
    if (timeStr === '3') return 2;
    if (timeStr === '4') return 3;
    else return 4;
};

export const getScoreList = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TVolleyBallSchedule,
): number[] => {
    const inningList = [ 'ft', 'p1', 'p2', 'p3', 'p4', 'p5', ];
    const returnList: number[] = [];
    for (const item of inningList) {
        if (schedule['ai_scores'][item]) {
            returnList.push(schedule['ai_scores'][item][ prefix === 'home' ? 0 : 1 ]);
            continue;
        }
        break;
    }
    return returnList;
};

export const getPrefix = (ai_match_status: number): string => {
    return 'SET';
};

export const getPrefixViaIdx = (idx: number): string => {
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

export const getTimeViaIdx = (
    currentIdx: number,
    inningIdx: number,
    schedule: TVolleyBallSchedule,
): string => {
    return `${ inningIdx + 1 }`;
};