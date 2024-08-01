import type { TCommonSchedule, TCommonSchedulePropsAway, TCommonSchedulePropsCategory, TCommonSchedulePropsCompetition, TCommonSchedulePropsCountry, TCommonSchedulePropsHome, TCommonSchedulePropsMatch } from "../Common/schedule";
import type { TCommonMatchStatus } from "../Common/status";


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
                string,                 // Home team score
                string,                 // Away team score
            ];
            "ot"?: [                    // Overtime score(Does not include regular scores, only overtime score)
                string,                 // Home team score
                string,                 // Away team score
            ];
            "e"?: [                     // Error, the number of mistakes made by the entire team on defense
                string,                 // Home team score
                string,                 // Away team score
            ];
            "h"?: [                     // Hit, the total number of hits
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p1"?: [                    // Single inning score(* - Number of inning, 1、2、3...)
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p2"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p3"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p4"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p5"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p6"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p7"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p8"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
            "p9"?: [
                string,                 // Home team score
                string,                 // Away team score
            ];
        },
        "ai_status_id": number;

        "ai_kickoff_timestamp"?: number;
    }
;