import type { TCommonScore } from "./score";
import type { TCommonMatchStatus } from "./status";
import type { TCommonLocationCategory, TCommonLocationCountry } from "./location";


export type TCommonSchedule = 
    TCommonSchedulePropsCategory &
    TCommonSchedulePropsCompetition &
    TCommonSchedulePropsCountry &
    TCommonSchedulePropsMatch &
    TCommonSchedulePropsHome & 
    TCommonSchedulePropsAway &
    {
        "ai_away_scores": TCommonScore;
        "ai_home_scores": TCommonScore;
        "ai_status_id": TCommonMatchStatus | number;

        "ai_kickoff_timestamp"?: number;
    }
;

export type TCommonSchedulePropsCategory = {
    "ai_category_id": string;
    "ai_category_name": TCommonLocationCategory;
};

export type TCommonSchedulePropsCompetition = {
    "ai_competition_id": string;
    "ai_competition_img": string;
    "ai_competition_name": string;
    "ai_competition_short_name": string;
};

export type TCommonSchedulePropsCountry = {
    "ai_country_id": string;
    "ai_country_img": string | null;
    "ai_country_name": TCommonLocationCountry | null;
};

export type TCommonSchedulePropsMatch = {
    "ai_match_time": number;
    "ai_season_id": string;
    "match_id": string;
    "topscore_id"?: number;                  // 0 => no top scores, value > 0 => top scores
    "hasLeagueTag"?: boolean;
};

export type TCommonSchedulePropsHome = {
    "ai_home_team_id": string;
    "ai_home_team_img": string;
    "ai_home_team_name": string;
};

export type TCommonSchedulePropsAway = {
    "ai_away_team_id": string;
    "ai_away_team_img": string;
    "ai_away_team_name": string;
};
