
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
    conceded: TMatchUpH2HGoalDistListItemEle[];
    matches: number;                            // matches
    scored: TMatchUpH2HGoalDistListItemEle[];
};

export type TMatchUpH2HGoalDistListItemEle = [
    number,     // Number
    number,     // percentage(%)
    number,     // Start time(minutes)
    number,     // End Time(minutes)
];

export type TMatchUpH2HHistory = {
    home: TMatchUpTeamInfo[];
    away: TMatchUpTeamInfo[];
    vs: TMatchUpTeamInfo[];
};

export type TMatchUpH2HInfo = TMatchUpTeamInfo;

export type TMatchUpTeamInfo = [
    string,         // match id
    string,         // competiton id
    number,         // match status
    number,         // Match time stamp
    number,         // Kick-off timestamp，kick-off time of the first/second half
    [
        string,     // Home team id
        string,     // Home League Ranking
        number,     // Home Team Score (regular time)
        number,     // Home Team Halftime score
        number,     // Home Team Red cards
        number,     // Home Team Yellow cards
        number,     // Home Team Corners，-1 means no corner kick data
        number,     // Home Team Overtime score (120 minutes，including regular time)，only available in overtime
        number,     // Home Team Penalty shootout score，only penalty shootout
    ],
    [
        string,     // Away team id
        string,     // Away League Ranking
        number,     // Away Team Score (regular time)
        number,     // Away Team Halftime score
        number,     // Away Team Red cards
        number,     // Away Team Yellow cards
        number,     // Away Team Corners，-1 means no corner kick data
        number,     // Away Team Overtime score (120 minutes，including regular time)，only available in overtime
        number,     // Away Team Penalty shootout score，only penalty shootout
    ],
    [
        string,     // (Asian plate) home win,handicap,away win,whether to close (1-Yes，0-No)
        string,     // (European plate) Win,draw,lose,whether to close (1-Yes，0-No)
        string,     // (Size Ball plate) Big,handicap,small,whether to close (1-Yes，0-No)
        string,     // (Corner plate) Big,handicap,small,whether to close (1-Yes，0-No)
    ],
    [
        string,     // Match description
        number,     // Is it neutral，1-Yes 0-No
        number,     // Match round
    ],
    [
        string,     // Season id
        string,     // Season year
    ],
];