import type { TCommonSportSection } from "./Common/sport";
import type { TCommonMatchStatus } from "./Common/status";

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
