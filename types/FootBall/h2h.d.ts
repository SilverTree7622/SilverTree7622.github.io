
export type TMatchUpH2H = {
    future: TMatchUpH2HFuture;
    goal_distribution: TMatchUpH2HGoalDist;
    history: TMatchUpH2HHistory;
    info: TMatchUpH2HInfo;
};

export type TMatchUpH2HFuture = {
    home: TMatchUpTeamInfo[];
    away: TMatchUpTeamInfo[];
};

export type TMatchUpH2HGoalDist = {
    home: {
        home: TMatchUpH2HGoalDistListItem;
        away: TMatchUpH2HGoalDistListItem;
        all: TMatchUpH2HGoalDistListItem;
    };
    away: {
        home: TMatchUpH2HGoalDistListItem;
        away: TMatchUpH2HGoalDistListItem;
        all: TMatchUpH2HGoalDistListItem;
    };
};

export type TMatchUpH2HGoalDistListItem = {
    conceded: [
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
    ];
    matches: number;
    scored: [
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
        TMatchUpH2HGoalDistListItemEle,
    ];
};

export type TMatchUpH2HGoalDistListItemEle = [
    number,
    number,
    number,
    number,
];

export type TMatchUpH2HHistory = {
    home: TMatchUpTeamInfo[];
    away: TMatchUpTeamInfo[];
    vs: TMatchUpTeamInfo[];
};

export type TMatchUpH2HInfo = TMatchUpTeamInfo;

export type TMatchUpTeamInfo = [
    string,
    string,
    number,
    number,
    number,
    [
        string,
        string,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ],
    [
        string,
        string,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ],
    string[],
    [
        string,
        number,
        number,
    ],
    [
        string,
        string,
    ],
];