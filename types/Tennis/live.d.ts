import type { TCommonLiveRealTimeCommon } from "../Common/Live";
import type { TTennisSchedule } from "./schedule";


export type TTennisLiveRealTime = TCommonLiveRealTimeCommon & {
    ai_scores: TTennisSchedule['ai_scores'];
};