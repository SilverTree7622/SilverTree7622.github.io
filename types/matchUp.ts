import type { TCommonSportSection } from "./Common/sport";
import type { TCommonMatchStatus } from "./Common/status";
import type { TMatchUpH2H } from "./FootBall/h2h";
import type { TMatchUpStatsIncidentFootball } from "./FootBall/stats";
import type { TMatchUpH2HSport } from "./h2h";
import type { TSportScheduleTypes } from "./schedule";
import type { TSportStatistics } from "./statistics";
import type { TMatchUpStatsSport } from "./stats";


export type TMatchUpStoreConfig = {
    sportSection: TCommonSportSection;
    match_id: string;
    matchStatus: TCommonMatchStatus;
    leagueName: string;
    leagueId: string;
    timestamp: number;
    homeLogo: string;
    homeName: string;
    homeTeamId: string;
    homeScore: number | string;
    awayLogo: string;
    awayName: string;
    awayTeamId: string;
    awayScore: number | string;
};

export type TMatchUpStatsRes = {
    H2H: TMatchUpH2HSport;
    data: TSportScheduleTypes;
    nav_code: string;
    overview: TMatchUpStatsSport;
    result: number;
};

export type TMatchUpStoreStatsIncident = TMatchUpStatsIncidentFootball;

export type TMatchUpStoreStats = {

};

