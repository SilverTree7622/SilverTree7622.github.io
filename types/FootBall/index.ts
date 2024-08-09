import UtilDate from "~/utils/date";
import type { TFootBallSchedule } from "./schedule";
import type { TCommonSportSection } from "../Common/sport";
import type { TMatchUpH2HSportCommon } from "../h2h";
import type { TMatchUpH2HFootball, TMatchUpTeamInfoFootball } from "./h2h";


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

export const getScore = (prefix: TContentStoreHomeAwayPrefix, schedule: TFootBallSchedule): number => {
    // ISSUE: WITH SCORE VISE VERSA
    // if (prefix === 'home') prefix = 'away';
    // if (prefix === 'away') prefix = 'home';
    if (typeof getScoreList(prefix, schedule) === 'string') {
        return JSON.parse(getScoreList(prefix, schedule) as any)[0];
    }
    return getScoreList(prefix, schedule)[0];
};

export const getScoreViaIdx = (
    prefix: TContentStoreHomeAwayPrefix,
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
    prefix: TContentStoreHomeAwayPrefix,
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

export const getPrefixViaIdx = (idx: number): string => {
    return '';
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

export const getTimeViaIdx = (
    currentIdx: number,
    inningIdx: number,
    schedule: TFootBallSchedule,
): string => {
    return '';
};

export const getMatchUpH2hInfo = (
    type: string,
    item: TMatchUpTeamInfoFootball,
) => {
    if (type === 'season_id') return item[9][0];
    if (type === 'match_id') return item[0];
    if (type === 'competition_id') return item[1];
    if (type === 'home_id') return item[5][0];
    if (type === 'away_id') return item[6][0];
    if (type === 'time') return item[3];
    if (type === 'home_score') return item[5][2];
    if (type === 'away_score') return item[6][2];
    if (type === 'is_home_win') {
        if (item[5][2] > item[6][2]) return 'win';
        if (item[5][2] < item[6][2]) return 'lose';
        return 'draw';
    }
    return item[0];
};