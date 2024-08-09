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
    id: string;                                 // match id
    unique_tournament_id: string;               // Competition id
    season_id: string;                          // Season id
    tournament_id: string;                      // Stage id
    venue_id: string;                           // Venue id
    home_team_id: string;                       // Home team id
    away_team_id: string;                       // Away team id
    status_id: number;                          // Match status，please refer to Status code->Match
    match_time: number;                         // Match time
    neutral: number;                            // Is it neutral，1-Yes、0-No
    bestof: number;                             // Number of sets，3-BO3、5-BO5、0-Unknown
    coverage: {                                 // Animation
        mlive: number;                          // Is there any animation，1-yes、0-no
    };      
    scores: TTennisSchedule['ai_scores'];       // Score data（May be empty）
    weather: {                                  // Match environment（No data, field does not exist）
        desc: string;                           // Weather description
        pressure: number;                       // Air pressure mmHg
        temp: number;                           // Temperature ℃
        wind: number;                           // Wind speed m/s
        humidity: number;                       // Humidity %
    };      
    updated_at: number;                         // Update time
};