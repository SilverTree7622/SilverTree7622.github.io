import UtilDate from "~/utils/date";
import type { TBasketBallSchedule } from "./schedule";
import type { TSportScheduleTypes } from "../schedule";
import type { TCommonSportSection } from "../Common/sport";
import type { TMatchUpH2HBasketball, TMatchUpTeamInfoBasketball } from "./h2h";


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

export const getScore = (prefix: TContentStoreHomeAwayPrefix, schedule: TBasketBallSchedule): number => {
    if (typeof getScoreList(prefix, schedule) === 'string') {
        return JSON.parse(getScoreList(prefix, schedule) as any)[0];
    }
    return getScoreList(prefix, schedule)[0];
};

export const getScoreViaIdx = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TBasketBallSchedule,
    idx: number = 0,
): number => {
    return getScoreList(prefix, schedule)[idx];
};

export const getCurrentInningSpotlightIdx = (
    schedule: TBasketBallSchedule,
): number => {
    if (schedule.ai_status_id === 2 || schedule.ai_status_id === 3) {
        return 0;
    }
    if (schedule.ai_status_id === 4 || schedule.ai_status_id === 5) {
        return 1;
    }
    if (schedule.ai_status_id === 6 || schedule.ai_status_id === 7) {
        return 2;
    }
    return 3;
    // if (schedule.ai_status_id === 8 || schedule.ai_status_id === 9) {
    //     return 3;
    // }
};

export const getScoreList = (
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TBasketBallSchedule,
): TBasketBallSchedule['ai_home_scores'] => {
    return schedule[`ai_${ prefix }_scores`];
};

export const getPrefix = (ai_match_status: number) => {
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

export const getPrefixViaIdx = (idx: number): string => {
    if (idx === 0) return '1Q';
    if (idx === 1) return '2Q';
    if (idx === 2) return '3Q';
    if (idx === 3) return '4Q';
    return '';
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

export const getTimeViaIdx = (
    currentIdx: number,
    inningIdx: number,
    schedule: TBasketBallSchedule,
): string => {
    if (currentIdx === inningIdx) {
        return getTime(schedule.ai_status_id, schedule['ai_kickoff_timestamp'] ?? 0);
    }
    return 'Ended';
};

export const getMatchUpH2hInfo = (
    type: string,
    item: TMatchUpTeamInfoBasketball,
) => {
    if (type === 'season_id') return item[9][0];
    if (type === 'match_id') return item[0];
    if (type === 'competition_id') return item[2];
    if (type === 'home_id') return item[6][0];
    if (type === 'away_id') return item[7][0];
    if (type === 'time') return item[4];
    if (type === 'is_home_win') {
        const totalScoreHome = item[6][2] + item[6][3] + item[6][4] + item[6][5] + item[6][6];
        const totalScoreAway = item[7][2] + item[7][3] + item[7][4] + item[7][5] + item[7][6];
        if (totalScoreHome > totalScoreAway) return 'win';
        if (totalScoreHome < totalScoreAway) return 'lose';
        return 'draw';
    }
    return item[0];
};