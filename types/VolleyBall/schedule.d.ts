import type { TCommonSchedule, TCommonSchedulePropsAway, TCommonSchedulePropsCategory, TCommonSchedulePropsCompetition, TCommonSchedulePropsCountry, TCommonSchedulePropsHome, TCommonSchedulePropsMatch } from "../Common/schedule";
import type { TCommonMatchStatus } from "../Common/status";


export type TVolleyBallSchedule = 
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
            "p1"?: [
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
        },
        "ai_status_id": TCommonMatchStatus;

        "ai_kickoff_timestamp"?: number;
    }
;