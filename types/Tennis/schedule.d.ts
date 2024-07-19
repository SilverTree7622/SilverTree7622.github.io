import type { TCommonSchedule, TCommonSchedulePropsAway, TCommonSchedulePropsCategory, TCommonSchedulePropsCompetition, TCommonSchedulePropsCountry, TCommonSchedulePropsHome, TCommonSchedulePropsMatch } from "../Common/schedule";
import type { TCommonMatchStatus } from "../Common/status";


export type TTennisSchedule = 
    TCommonSchedulePropsCategory &
    TCommonSchedulePropsCompetition &
    TCommonSchedulePropsCountry &
    TCommonSchedulePropsMatch &
    TCommonSchedulePropsHome & 
    TCommonSchedulePropsAway &
    {
        "ai_scores": {
            "ft": [                     // Total Score
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p1"?: [                    // Single set score(* - Number of sets, 1、2、3...)
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p2"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p3"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p4"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p5"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            
            "x1"?: [                    // Grab 7 points(* - Number of sets, 1、2、3...)
                number,                 // Home team score
                number,                 // Away team score
            ];
            "x2"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "x3"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "x4"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];

            "pt"?: [                    // Real-time score
                number,                 // Home team score
                number,                 // Away team score
            ];
        },
        "ai_status_id": TCommonMatchStatus;

        "ai_kickoff_timestamp"?: number;
    }
;