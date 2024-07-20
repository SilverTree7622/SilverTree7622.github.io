import type { TMatchUpStatisics } from "../FootBall/statistics";


export type TStatsMatchStatsIncident = {
    away_score: number;
    home_score: number;
    time: number;           // unit is minute
    type: TMatchUpStatisics;
};

export type TStatsMatchStatsScore = {
    away_score: number;
    home_score: number;
    time: number;           // unit is minute
    type: TMatchUpStatisics;
};