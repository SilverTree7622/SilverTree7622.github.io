import * as football from './FootBall';
import * as basketball from './BasketBall';
import * as baseball from './BaseBall';
import * as volleyball from './VolleyBall';
import * as tennis from './Tennis';
import * as icehockey from './IceHockey';
import type { TCommonSportSection } from "./Common/sport";
import type { TAuthGuest, TAuthUser } from "./Auth";
import type { TCommonSchedule } from "./Common/schedule";
import type { TSelectorTime } from "./Selector";
import type { TSportScheduleTypes } from './schedule';
import type { TFootBallSchedule } from './FootBall/schedule';
import type { TBasketBallSchedule } from './BasketBall/schedule';
import type { TBaseBallSchedule } from './BaseBall/schedule';
import type { TVolleyBallSchedule } from './VolleyBall/schedule';
import type { TTennisSchedule } from './Tennis/schedule';
import type { TIceHockeySchedule } from './IceHockey/schedule';
import UtilDate from '~/utils/date';
import type { TMatchUpH2HSportCommon, TMatchUpTeamInfoCommon } from './h2h';
import type { TMatchUpH2HBasketball, TMatchUpTeamInfoBasketball } from './BasketBall/h2h';
import type { TMatchUpH2HFootball, TMatchUpTeamInfoFootball } from './FootBall/h2h';
import type { TMatchUpH2HTennis, TMatchUpTeamInfoTennis } from './Tennis/h2h';

// export enum EError {
//     SUCCESS = { code: 0, type: null, title: '', message: '', },
//     FAILURE = { code: 1, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
//     SESSION_NOT_EXISTS = { code: 2, type: 2, title: 'LOST CONNECTION', message: 'The connection has been lost. Please retry when connection is established again.', },
//     SESSION_FAILURE = { code: 3, type: 2, title: 'LOST CONNECTION', message: 'The connection has been lost. Please retry when connection is established again.', },
//     PARAMETER_FAILED = { code: 10, type: 1, title: 'NOTICE', message: 'These are not normal parameters. Please try again.', },
//     USER_NOT_FOUND = { code: 100, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
//     STRUCT_NOT_FOUND = { code: 200, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
//     BUSINESS_NOT_FOUND = { code: 900, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
//     BUSINESS_CONNECTION_FAIL = { code: 999, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
//     INTERNAL_SERVER_ERROR = { code: 20200103, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
// };

export type TContent = {
    date: Date;
    lg_name: string;
    hasLeagueTag: boolean;
};

export type TFetchReq = {
    // 로그인시 a, b 채워줘서 req
    "a": {
        "sessionid": number;
        "ODDSNAVI_IS_CAKE": string;
    };
    "b": TAuthUser;
    // 비로그인시 param 채워서 보내기
    "c": TAuthGuest;
};

export type TFetchCommonRes = {
    isError: boolean;
    isSuccess: boolean;
    msg: string;
};

export type TFetchRes = {

};

export const isLive = (sportSection: TCommonSportSection, ai_status_id: number): boolean => {
    if (sportSection === 'football') {
        return football.isLive(ai_status_id);
    }
    if (sportSection === 'basketball') {
        return basketball.isLive(ai_status_id);
    }
    if (sportSection === 'baseball') {
        return baseball.isLive(ai_status_id);
    }
    if (sportSection === 'volleyball') {
        return volleyball.isLive(ai_status_id);
    }
    if (sportSection === 'tennis') {
        return tennis.isLive(ai_status_id);
    }
    if (sportSection === 'icehockey') {
        return icehockey.isLive(ai_status_id);
    }
    return false;
};

export const isFixtures = (sportSection: TCommonSportSection, ai_status_id: number): boolean => {
    if (isLive(sportSection, ai_status_id)) {
        return false;
    }
    if (isResult(sportSection, ai_status_id)) {
        return false;
    }
    return true;
};

export const isFixturesAdvanced = (sportSection: TCommonSportSection, schedule: TCommonSchedule): boolean => {
    const { ai_status_id, ai_match_time, } = schedule;
    if (isLive(sportSection, ai_status_id)) {
        return false;
    }
    if (isResult(sportSection, ai_status_id)) {
        return false;
    }
    if (ai_status_id === 1) {
        return new Date(Date.now()) < UtilDate.addMillisecond(ai_match_time);
    }
    return true;
};

export const isResult = (sportSection: TCommonSportSection, ai_status_id: number): boolean => {
    if (sportSection === 'football') {
        return football.isResult(ai_status_id);
    }
    if (sportSection === 'basketball') {
        return basketball.isResult(ai_status_id);
    }
    if (sportSection === 'baseball') {
        return baseball.isResult(ai_status_id);
    }
    if (sportSection === 'volleyball') {
        return volleyball.isResult(ai_status_id);
    }
    if (sportSection === 'tennis') {
        return tennis.isResult(ai_status_id);
    }
    if (sportSection === 'icehockey') {
        return icehockey.isResult(ai_status_id);
    }
    return false;
};

export const getScore = (
    sportSection: TCommonSportSection,
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TSportScheduleTypes,
): number => {
    if (sportSection === 'football') {
        return football.getScore(prefix, schedule as TFootBallSchedule);
    }
    if (sportSection === 'basketball') {
        return basketball.getScore(prefix, schedule as TBasketBallSchedule);
    }
    if (sportSection === 'baseball') {
        return baseball.getScore(prefix, schedule as TBaseBallSchedule);
    }
    if (sportSection === 'volleyball') {
        return volleyball.getScore(prefix, schedule as TVolleyBallSchedule);
    }
    if (sportSection === 'tennis') {
        return tennis.getScore(prefix, schedule as TTennisSchedule);
    }
    if (sportSection === 'icehockey') {
        return icehockey.getScore(prefix, schedule as TIceHockeySchedule);
    }
    return 0;
};

export const getScoreViaIdx = (
    sportSection: TCommonSportSection,
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TSportScheduleTypes,
    idx: number = 0,
): number => {
    if (sportSection === 'football') return football.getScoreViaIdx(prefix, schedule as TFootBallSchedule, idx);
    if (sportSection === 'basketball') return basketball.getScoreViaIdx(prefix, schedule as TBasketBallSchedule, idx);
    if (sportSection === 'baseball') return baseball.getScoreViaIdx(prefix, schedule as TBaseBallSchedule, idx);
    if (sportSection === 'volleyball') return volleyball.getScoreViaIdx(prefix, schedule as TVolleyBallSchedule, idx);
    if (sportSection === 'tennis') return tennis.getScoreViaIdx(prefix, schedule as TTennisSchedule, idx);
    if (sportSection === 'icehockey') return icehockey.getScoreViaIdx(prefix, schedule as TIceHockeySchedule, idx);
    return 0;
};

export const getScoreList = (
    sportSection: TCommonSportSection,
    prefix: TContentStoreHomeAwayPrefix,
    schedule: TSportScheduleTypes,
): number[] => {
    if (sportSection === 'football') return football.getScoreList(prefix, schedule as TFootBallSchedule);
    if (sportSection === 'basketball') return basketball.getScoreList(prefix, schedule as TBasketBallSchedule);
    if (sportSection === 'baseball') return baseball.getScoreList(prefix, schedule as TBaseBallSchedule);
    if (sportSection === 'volleyball') return volleyball.getScoreList(prefix, schedule as TVolleyBallSchedule);
    if (sportSection === 'tennis') return tennis.getScoreList(prefix, schedule as TTennisSchedule);
    if (sportSection === 'icehockey') return icehockey.getScoreList(prefix, schedule as TIceHockeySchedule);
    return [];
};

export const getCurrentInningSpotlightIdx = (
    sportSection: TCommonSportSection,
    schedule: TSportScheduleTypes,
): number => {
    if (sportSection === 'football') return football.getCurrentInningSpotlightIdx(schedule as TFootBallSchedule);
    if (sportSection === 'basketball') return basketball.getCurrentInningSpotlightIdx(schedule as TBasketBallSchedule);
    if (sportSection === 'baseball') return baseball.getCurrentInningSpotlightIdx(schedule as TBaseBallSchedule);
    if (sportSection === 'volleyball') return volleyball.getCurrentInningSpotlightIdx(schedule as TVolleyBallSchedule);
    if (sportSection === 'tennis') return tennis.getCurrentInningSpotlightIdx(schedule as TTennisSchedule);
    if (sportSection === 'icehockey') return icehockey.getCurrentInningSpotlightIdx(schedule as TIceHockeySchedule);
    return 0;
};

export const getPrefix = (
    sportSection: TCommonSportSection,
    ai_match_status: number,
    ai_kickoff_timestamp?: number
): string => {
    if (sportSection === 'football') return football.getPrefix(ai_match_status);
    if (sportSection === 'basketball') return basketball.getPrefix(ai_match_status);
    if (sportSection === 'baseball') return baseball.getPrefix(ai_match_status);
    if (sportSection === 'volleyball') return volleyball.getPrefix(ai_match_status);
    if (sportSection === 'tennis') return tennis.getPrefix(ai_match_status);
    if (sportSection === 'icehockey') return icehockey.getPrefix(ai_match_status);
    return `00`;
};

export const getPrefixViaIdx = (
    sportSection: TCommonSportSection,
    idx: number
): string => {
    if (sportSection === 'football') return football.getPrefixViaIdx(idx);
    if (sportSection === 'basketball') return basketball.getPrefixViaIdx(idx);
    if (sportSection === 'baseball') return baseball.getPrefixViaIdx(idx);
    if (sportSection === 'volleyball') return volleyball.getPrefixViaIdx(idx);
    if (sportSection === 'tennis') return tennis.getPrefixViaIdx(idx);
    if (sportSection === 'icehockey') return icehockey.getPrefixViaIdx(idx);
    return '';
};

export const getTime = (
    sportSection: TCommonSportSection,
    ai_match_status: number,
    ai_kickoff_timestamp: number,
): string => {
    if (sportSection === 'football') return football.getTime(ai_match_status, ai_kickoff_timestamp);
    if (sportSection === 'basketball') return basketball.getTime(ai_match_status, ai_kickoff_timestamp);
    if (sportSection === 'baseball') return baseball.getTime(ai_match_status, ai_kickoff_timestamp);
    if (sportSection === 'volleyball') return volleyball.getTime(ai_match_status, ai_kickoff_timestamp);
    if (sportSection === 'tennis') return tennis.getTime(ai_match_status, ai_kickoff_timestamp);
    if (sportSection === 'icehockey') return icehockey.getTime(ai_match_status, ai_kickoff_timestamp);
    return `00`;
};

export const getTimeViaIdx = (
    sportSection: TCommonSportSection,
    currentIdx: number,
    inningIdx: number,
    schedule: TSportScheduleTypes,
): string => {
    if (sportSection === 'football') return football.getTimeViaIdx(currentIdx, inningIdx, schedule as TFootBallSchedule);
    if (sportSection === 'basketball') return basketball.getTimeViaIdx(currentIdx, inningIdx, schedule as TBasketBallSchedule);
    if (sportSection === 'baseball') return baseball.getTimeViaIdx(currentIdx, inningIdx, schedule as TBaseBallSchedule);
    if (sportSection === 'volleyball') return volleyball.getTimeViaIdx(currentIdx, inningIdx, schedule as TVolleyBallSchedule);
    if (sportSection === 'tennis') return tennis.getTimeViaIdx(currentIdx, inningIdx, schedule as TTennisSchedule);
    if (sportSection === 'icehockey') return icehockey.getTimeViaIdx(currentIdx, inningIdx, schedule as TIceHockeySchedule);
    return ``;
};

export const getMatchUpH2hInfo = (
    sportSection: TCommonSportSection,
    type: string,
    item: TMatchUpTeamInfoCommon,
) => {
    if (sportSection === 'football') return football.getMatchUpH2hInfo(type, item as TMatchUpTeamInfoFootball);
    if (sportSection === 'basketball') return basketball.getMatchUpH2hInfo(type, item as TMatchUpTeamInfoBasketball);
    if (sportSection === 'tennis') return tennis.getMatchUpH2hInfo(type, item as TMatchUpTeamInfoTennis);
    console.warn(`${ sportSection } sport has not h2h data`);
    return ``;
};