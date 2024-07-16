import type { TCommonSchedule, TCommonSchedulePropsAway, TCommonSchedulePropsCategory, TCommonSchedulePropsCompetition, TCommonSchedulePropsCountry, TCommonSchedulePropsHome, TCommonSchedulePropsMatch } from "../Common/schedule";
import type { TCommonMatchStatus } from "../Common/status";


export type TBasketBallSchedule = 
    TCommonSchedulePropsCategory &
    TCommonSchedulePropsCompetition &
    TCommonSchedulePropsCountry &
    TCommonSchedulePropsMatch &
    TCommonSchedulePropsHome & 
    TCommonSchedulePropsAway &
    {
        "ai_away_scores": [
            number,
            number,
            number,
            number,
            number,
        ];
        "ai_home_scores": [
            number,
            number,
            number,
            number,
            number,
        ];
        "ai_status_id": TCommonMatchStatus;

        "ai_kickoff_timestamp"?: number;
    }
;