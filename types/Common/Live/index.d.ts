import type { TCommonScore } from "../score";
import type { TCommonMatchStatus } from "../status";

export type TCommonLiveRealTime = TCommonLiveRealTimeCommon & {
    "ai_away_scores": TCommonScore;
    "ai_home_scores": TCommonScore;
};

export type TCommonLiveRealTimeCommon = {
    "ai_kickoff_timestamp": number;
    "ai_match_status": TCommonMatchStatus;
    "match_id": string;
};