import type { TCommonLiveRealTimeCommon } from "../Common/Live";
import type { TIceHockeySchedule } from "./schedule";


export type TIceHockeyLiveRealTime = TCommonLiveRealTimeCommon & {
    ai_scores: TIceHockeySchedule['ai_scores'];
};