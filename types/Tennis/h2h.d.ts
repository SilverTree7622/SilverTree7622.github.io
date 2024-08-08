import type { TTennisSchedule } from "./schedule";

export type TMatchUpH2HTennis = {
    future: TMatchUpH2HFutureTennis;
    history: TMatchUpH2HHistoryTennis;
};

export type TMatchUpH2HFutureTennis = {
    home: TMatchUpTeamInfoTennis[];
    away: TMatchUpTeamInfoTennis[];
};

export type TMatchUpH2HHistoryTennis = {
    home: TMatchUpTeamInfoTennis[];
    away: TMatchUpTeamInfoTennis[];
    vs: TMatchUpTeamInfoTennis[];
};

export type TMatchUpTeamInfoTennis = {
    id: string;
    unique_tournament_id: string;
    season_id: string;
    tournament_id: string;
    venue_id: string;
    home_team_id: string;
    away_team_id: string;
    status_id: number;
    match_time: number;
    neutral: number;
    bestof: number;
    coverage: {
        mlive: number;
    };
    scores: TTennisSchedule['ai_scores'];
    weather: {
        desc: string;
        pressure: number;
        temp: number;
        wind: number;
        humidity: number;
    };
    updated_at: number;
};