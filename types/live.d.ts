import type { TBaseBallLiveRealTime } from "./BaseBall/live";
import type { TBasketBallLiveRealTime } from "./BasketBall/live";
import type { TFootBallLiveRealTime } from "./FootBall/live";
import type { TIceHockeyLiveRealTime } from "./IceHockey/live";
import type { TTennisLiveRealTime } from "./Tennis/live";
import type { TVolleyBallLiveRealTime } from "./VolleyBall/live";


export type TSportLiveRealTimeTypes = 
    TFootBallLiveRealTime |
    TBasketBallLiveRealTime |
    TBaseBallLiveRealTime |
    TVolleyBallLiveRealTime | 
    TTennisLiveRealTime | 
    TIceHockeyLiveRealTime
;