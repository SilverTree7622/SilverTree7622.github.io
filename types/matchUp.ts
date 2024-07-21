import type { TCommonSportSection } from "./Common/sport";
import type { TCommonMatchStatus } from "./Common/status";
import type { TMatchUpH2H } from "./FootBall/h2h";
import type { TMatchUpH2HCommon } from "./h2h";
import type { TSportScheduleTypes } from "./schedule";
import type { TSportStatistics } from "./statistics";


export type TMatchUpStoreConfig = {
    sportSection: TCommonSportSection;
    match_id: string;
    matchStatus: TCommonMatchStatus;
    leagueName: string;
    timestamp: number;
    homeLogo: string;
    homeName: string;
    homeScore: number | string;
    awayLogo: string;
    awayName: string;
    awayScore: number | string;
};

export type TMatchUpStatsRes = {
    H2H: TMatchUpH2HCommon;
    data: TSportScheduleTypes;
    nav_code: string;
    overview: {};
    result: number;
};

export type TMatchUpStoreStatsIncident = {
    away_score: number;
    home_score: number;
    time: number;           // unit is minute
    type: TSportStatistics;
};

export type TMatchUpStoreStats = {

};

