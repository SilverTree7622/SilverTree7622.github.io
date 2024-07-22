import type { TSportStatistics } from "../statistics";
import type { TMatchUpStatisticsFootball } from "./statistics";

export type TMatchUpStatsFootball = {
    "id": string;
    "incidents": TMatchUpStatsIncidentFootball[];
    "score": TMatchUpStatsScoreFootball;
    "stats": TMatchUpStatsStatsFootball[];
};

export type TMatchUpStatsIncidentFootball = {
    "away_score"?: number;
    "home_score"?: number;
    "player_id"?: string;                   // Player id related to the incident，may not exist
    "player_name"?: string;
    "assist1_id"?: string;
    "assist1_name"?: string;
    "assist2_id"?: string;
    "assist2_name"?: string;
    "in_player_id"?: string;
    "in_player_name"?: string;
    "out_player_id"?: string;
    "out_player_name"?: string;
    "var_reason"?: number;
        // VAR reason，related to var incident
        // 1-Goal awarded
        // 2-Goal not awarded
        // 3-Penalty awarded
        // 4-Penalty not awarded
        // 5 -Red card given
        // 6-Card upgrade
        // 7-Mistaken identity
        // 0-Other
    "var_result"?: number;
        // VAR result，related to var incident
        // 1-Goal confirmed
        // 2-Goal cancelled
        // 3-Penalty confirmed
        // 4-Penalty cancelled
        // 5-Red card confirmed
        // 6-Red card cancelled
        // 7-Card upgrade confirmed
        // 8-Card upgrade cancelled
        // 9-Original decision
        // 10-Original decision changed
        // 0-Unknown
    "reason_type"?: number;
        // The reason for the red and yellow cards and substitution events, please refer to the status code -> event reason (the red and yellow cards and substitution events related field)
    "position": 0 | 1 | 2;                  // The incident occurred，0-neutral，1- home team，2- away team
    "time": number;                         // unit is minute
    "type": TMatchUpStatisticsFootball;
};

export type TMatchUpStatsScoreFootball = [
    string,         // id
    number,
    [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ],
    [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ],
    number,
    string,
];

export type TMatchUpStatsStatsFootball = {
    home: number;
    away: number;
    type: TSportStatistics;
};