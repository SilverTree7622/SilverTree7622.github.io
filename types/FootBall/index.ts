import UtilDate from "~/utils/date";
import type { TFootBallSchedule } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    // console.log('ai_status_id from football isLive: ', ai_status_id);
    return (
        ai_status_id === 2 ||
        ai_status_id === 3 ||
        ai_status_id === 4 ||
        ai_status_id === 5 ||
        ai_status_id === 6 ||
        ai_status_id === 7
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 8 ||
        ai_status_id === 9 ||
        ai_status_id === 10 ||
        ai_status_id === 11 ||
        ai_status_id === 12 ||
        ai_status_id === 13
    );
};

export const getScore = (prefix: TContentStorePrefix, schedule: TFootBallSchedule): number => {
    return getScoreList(prefix, schedule)[0];
};

export const getScoreViaIdx = (
    prefix: TContentStorePrefix,
    schedule: TFootBallSchedule,
    idx: number = 0,
): number => {
    return getScoreList(prefix, schedule)[idx];
};

export const getCurrentInningSpotlightIdx = (
    schedule: TFootBallSchedule,
): number => {
    return 0;
};

export const getScoreList = (
    prefix: TContentStorePrefix,
    schedule: TFootBallSchedule,
): TFootBallSchedule['ai_home_scores'] => {
    return schedule[`ai_${ prefix }_scores`];
};

export const getPrefix = (ai_match_status: number) => {
    if (ai_match_status === 2) {
        return '1H';
    }
    else if (ai_match_status === 3) {
        return 'Half'
    }
    else {
        return '2H';
    }
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = 0;
    if (ai_match_status === 2) {
        dateTime = gapTime / 60 + 1;
    }
    if (ai_match_status === 3) {
        dateTime = 45;
    }
    if (
        ai_match_status === 4 ||
        ai_match_status === 5 ||
        ai_match_status === 6 ||
        ai_match_status === 7
    ) {
        dateTime = gapTime / 60 + 45 + 1;
    }
    const matchUpTime = `${ UtilDate.syncDigit(~~(dateTime)) }’`;
    return matchUpTime;
};