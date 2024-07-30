import type { TCommonSchedule } from "./Common/schedule";


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

export type TLeagueTableRes = {
    data: TLeagueMatchUpResData;
    season: TLeagueTablePlayer[];
    table: {
        promotions: TLeagueTablePromotion[];
        tables: TLeagueTableTable[];
    };
    result: number;
};

export type TLeagueTablePlayer = {
    "ai_competition_id": string;
    "ai_end_time": number;
    "ai_has_player_stats": number;
    "ai_has_table": number;
    "ai_has_team_stats": number;
    "ai_id": string;
    "ai_index": number;
    "ai_is_current": number;
    "ai_start_time": number;
    "ai_update_timestamp": number;
    "ai_year": string;
};

export type TLeagueTablePromotion = {
    "color": string;
    "id": string;
    "name": string;
}

export type TLeagueTableTable = {
    "conference": string;
    "group": number;
    "id": string;
    "rows": TLeagueTableTableRow[];
    "stage_id": string;
};

export type TLeagueTableTableRow = {
    "away_draw": number;
    "away_goal_diff": number;
    "away_goals": number;
    "away_goals_against": number;
    "away_loss": number;
    "away_points": number;
    "away_position": number;
    "away_total": number;
    "away_won": number;
    "deduct_points": number;
    "draw": number;
    "goal_diff": number;
    "goals": number;
    "goals_against": number;
    "home_draw": number;
    "home_goal_diff": number;
    "home_goals": number;
    "home_goals_against": number;
    "home_loss": number;
    "home_points": number;
    "home_position": number;
    "home_total": number;
    "home_won": number;
    "loss": number;
    "note": string;
    "points": number;
    "position": number;
    "promotion_id": string;
    "team_id": string;
    "total": number;
    "updated_at": number;
    "won": number;
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
