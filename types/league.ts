import type { TCommonSchedule } from "./Common/schedule";
import type { TCommonSportSection } from "./Common/sport";

export type TLeagueStoreConfig = {
    leagueLogo: string;
    leagueTitle: string;
    countryLogo: string;
    countryName: string;
    isFavorite: boolean;
};

export type TLeagueMatchUpRes = {
    data: TLeagueMatchUpResData;
    matchup: TCommonSchedule[];
    nav_code: string;
    result: number;
};

export type TLeagueMatchUpResData = {
    ai_id: string;
    ai_type: number;
    category_name: string;
    catetory_logo: string;
    competition_logo: string;
    competition_name: string;
    competition_short_name: string;
};
