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

export const isFixtures = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 0 ||
        ai_status_id === 1
    );
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


export const getScore = (sportSection: TCommonSportSection, prefix: TContentStorePrefix, schedule: TCommonSchedule): number => {
    if (sportSection === 'football') {
        return football.getScore(prefix, schedule);
    }
    if (sportSection === 'basketball') {
        return basketball.getScore(prefix, schedule);
    }
    if (sportSection === 'baseball') {
        return baseball.getScore(prefix, schedule);
    }
    if (sportSection === 'volleyball') {
        return volleyball.getScore(prefix, schedule);
    }
    if (sportSection === 'tennis') {
        return tennis.getScore(prefix, schedule);
    }
    if (sportSection === 'icehockey') {
        return icehockey.getScore(prefix, schedule);
    }
    return 0;
};

export const getPrefix = (
    sportSection: TCommonSportSection, ai_match_status: number, ai_kickoff_timestamp: number
): string => {
    if (sportSection === 'football') {
        return football.getPrefix(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'basketball') {
        return basketball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'baseball') {
        return baseball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'volleyball') {
        return volleyball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'tennis') {
        return tennis.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'icehockey') {
        return icehockey.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    return `00`;
};

export const getTime = (
    sportSection: TCommonSportSection, ai_match_status: number, ai_kickoff_timestamp: number
): string => {
    if (sportSection === 'football') {
        return football.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'basketball') {
        return basketball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'baseball') {
        return baseball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'volleyball') {
        return volleyball.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'tennis') {
        return tennis.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    if (sportSection === 'icehockey') {
        return icehockey.getTime(ai_match_status, ai_kickoff_timestamp);
    }
    return `00`;
};