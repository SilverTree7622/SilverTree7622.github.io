import type { TCommonSportSectionTabName } from "./Common/sport";
import type { TSelectorOdds, TSelectorSports, TSelectorTime } from "./Selector";

export type TInitDataLeaguePopular = {
    ai_id: string;
    ai_index: number;
    ai_sort: number;
    ai_sports: TCommonSportSectionTabName;
    category_logo: string;
    category_name: string;
    category_short_name: string;
    reg_timestamp: number;
};

export type TInitDataLeagueEtc = {
    ai_id: string;
    ai_type: number;
    catetory_logo: string;
    category_name: string;
    competition_logo: string;
    competition_name: string;
    competition_short_name: string;
};

export type TInitData = {
    left_menu: {
        popular?: TInitDataLeaguePopular[];
        etc1?: TInitDataLeagueEtc[];
        etc2?: TInitDataLeagueEtc[];
    };
    nav_code: string;
    st_odds: TSelectorOdds[];
    st_sports: TSelectorSports[];
    st_time: TSelectorTime[];
    result: number;
};

export type TInitDataMatchState = {
    [ key: number ]: string;
}

export type TInitDataFootball = TInitData & {
    st_matchstate: TInitDataMatchState;
};


export type TInitDateTypes = TInitData | {};