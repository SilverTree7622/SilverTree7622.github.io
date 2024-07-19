import type { TCommonSchedule, TCommonSchedulePropsAway, TCommonSchedulePropsCategory, TCommonSchedulePropsCompetition, TCommonSchedulePropsCountry, TCommonSchedulePropsHome, TCommonSchedulePropsMatch } from "../Common/schedule";
import type { TCommonMatchStatus } from "../Common/status";


export type TIceHockeySchedule = 
    TCommonSchedulePropsCategory &
    TCommonSchedulePropsCompetition &
    TCommonSchedulePropsCountry &
    TCommonSchedulePropsMatch &
    TCommonSchedulePropsHome & 
    TCommonSchedulePropsAway &
    {
        "ai_scores": {
            "ft": [                     // Regular score
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p1"?: [                    // Single inning score(* - Number of inning, 1、2、3...)
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
            "p6"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p7"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p8"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "p9"?: [
                number,                 // Home team score
                number,                 // Away team score
            ];
            "ot"?: [                    // Overtime score(Contains regular scores)
                number,                 // Home team score
                number,                 // Away team score
            ];
            "pt"?: [                    // Penalty score(Contains overtime scores)
                number,                 // Home team score
                number,                 // Away team score
            ];
        },
        "ai_status_id": TCommonMatchStatus;

        "ai_kickoff_timestamp"?: number;
    }
;