import type { TCommonLiveRealTimeCommon } from "../Common/Live";
import type { TVolleyBallSchedule } from "./schedule";


export type TVolleyBallLiveRealTime = TCommonLiveRealTimeCommon & {
    ai_scores: TVolleyBallSchedule['ai_scores'];
};