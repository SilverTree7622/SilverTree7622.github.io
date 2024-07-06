import type { TCommonLiveRealTime, TCommonLiveRealTimeCommon } from "../Common/Live";
import type { TBaseBallSchedule } from "./schedule";


export type TBaseBallLiveRealTime = TCommonLiveRealTimeCommon & {
    ai_scores: TBaseBallSchedule['ai_scores'];
};