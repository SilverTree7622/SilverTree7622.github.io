

export type TAuthUser = {
    _platform: string;
    _platform_uid: number;
    _platform_gid: number;
    _platform_bid: number;
    _platform_ver: string;
    _connect_time: number;
    _memid: number;
};

// sid 는 스포츠 종목 : loading 때 id값을 줌 default : 축구
// fromdate는 timestamp로 UTC  : default : today
export type TAuthGuest = {
    "param": {
        "sid"?: number;
        "fromdate"?: number;
    }
};