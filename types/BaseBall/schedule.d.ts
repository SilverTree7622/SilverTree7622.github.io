import type { TCommonSchedule } from "../Common/schedule";


export type TBaseBallSchedule = 
    TCommonSchedulePropsCategory &
    TCommonSchedulePropsCompetition &
    TCommonSchedulePropsCountry &
    TCommonSchedulePropsMatch &
    TCommonSchedulePropsHome & 
    TCommonSchedulePropsAway &
    {
        "ai_scores": {
            "ft"?: [                    // Regular score
                number,                 // Home team score
                number,                 // Away team score
            ];
            "ot"?: [                    // Overtime score(Does not include regular scores, only overtime score)
                number,                 // Home team score
                number,                 // Away team score
            ];
            "e"?: [                     // Error, the number of mistakes made by the entire team on defense
                number,                 // Home team score
                number,                 // Away team score
            ];
            "h"?: [                     // Hit, the total number of hits
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
        },
        "ai_status_id": TCommonMatchStatus;

        "ai_kickoff_timestamp"?: number;
    }
;