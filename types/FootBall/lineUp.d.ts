
export type TMatchUpLineUp = {
    "away_formation": string;                           // away formation ex) 4-4-2 
    "coach_id": {
        "away": string;                                 // away coach id
        "home": string;                                 // home coach id
    },
    "confirmed": number;                                     
    "home_formation": string;                           // home formation ex) 4-4-2
    "injury": {
        "away": [];                                     // 
        "home": [];                                     // 
    },
    "lineup": {
        "away": TMatchUpLineUpPlayer[];
        "home": TMatchUpLineUpPlayer[];
    }
};

export type TMatchUpLineUpPlayer = {
    "captain": number;
    "first": number;
    "id": string;
    "logo": string;
    "name": string;
    "position": string;             // ex) "D"
    "rating": string;               // ex) player rating
    "shirt_number": number;
    "x": number;                    // player position x in sport background img
    "y": number;                    // player position y in sport background img
    "incidents"?: [
        {
            "addtime": number;
            "away_score": number;
            "belong": number;
            "home_score": number;
            "minute": number;
            "player": {
                "id": string;
                "name": string;
            },
            "time": string;
            "type": number;         
        }
    ],
};