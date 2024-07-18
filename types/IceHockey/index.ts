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

export const getScore = (prefix: TContentStoreHomeAwayPrefix, schedule: TIceHockeySchedule): number => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

export const getScoreViaIdx = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TIceHockeySchedule,
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
    if (idx === 6) return schedule['ai_scores']['p6'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 7) return schedule['ai_scores']['p7'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 8) return schedule['ai_scores']['p8'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 9) return schedule['ai_scores']['p9'][ prefix === 'home' ? 0 : 1 ];
    return 0;
};

export const getCurrentInningSpotlightIdx = (
    schedule: TIceHockeySchedule,
): number => {
    const timeStr = getPrefix(schedule.ai_match_status);
    if (timeStr === '1PER') return 0;
    if (timeStr === '2PER') return 1;
    if (timeStr === '3PER') return 2;
    else return 2;
};

export const getScoreList = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TIceHockeySchedule,
): number[] => {
    const inningList = [ 'ft', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', ];
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
    if (ai_match_status === 30 || ai_match_status === 331) {
        return '1PER';
    }
    if (ai_match_status === 31 || ai_match_status === 332) {
        return '2PER';
    }
    return '3PER';
};

export const getPrefixViaIdx = (idx: number): string => {
    if (idx === 0) return '1PER';
    if (idx === 1) return '2PER';
    if (idx === 2) return '3PER';
    return '';
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = gapTime / 60 + 1;
    const matchUpTime = `${ UtilDate.syncDigit(~~(dateTime)) }’`;
    return matchUpTime;
};

export const getTimeViaIdx = (
    currentIdx: number,
    inningIdx: number,
    schedule: TIceHockeySchedule,
): string => {
    if (currentIdx === inningIdx) {
        return getTime(schedule.ai_status_id, schedule['ai_kickoff_timestamp'] ?? 0);
    }
    return 'ENDED';
};