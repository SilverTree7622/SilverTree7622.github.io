import type { TCommonSportSection } from "./Common/sport";
import type { TCommonMatchStatus } from "./Common/status";
import type { TMatchUpH2H } from "./FootBall/h2h";
import type { TMatchUpStatistics } from "./FootBall/statistics";
import type { TSportScheduleTypes } from "./schedule";


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

export type TMatchUpRes = {
    H2H: TMatchUpH2H;
    data: TSportScheduleTypes;
    nav_code: string;
    overview: {};
    result: number;
};

export type TMatchUpStoreStatsIncident = {
    away_score: number;
    home_score: number;
    time: number;           // unit is minute
    type: TMatchUpStatistics;
};

export type TMatchUpStoreStats = {

};

