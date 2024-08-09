
export type TMatchUpH2HBasketball = {
    future: TMatchUpH2HFutureBasketball;
    history: TMatchUpH2HHistoryBasketball;
    info: TMatchUpH2HInfoBasketball;
};

export type TMatchUpH2HFutureBasketball = {
    home: TMatchUpTeamInfoBasketball[];
    away: TMatchUpTeamInfoBasketball[];
};

export type TMatchUpH2HHistoryBasketball = {
    home: TMatchUpTeamInfoBasketball[];
    away: TMatchUpTeamInfoBasketball[];
    vs: TMatchUpTeamInfoBasketball[];
};

export type TMatchUpH2HInfoBasketball = TMatchUpTeamInfoBasketball;

export type TMatchUpTeamInfoBasketball = [
    string,         // match id
    number,         // Total quarters of the match
    string,         // competiton id
    number,         // match status
    number,         // Match time
    number,         // Remaining time of the match section (seconds)
    [
        string,     // Home team id
        string,     // Home team ranking，no ranking is empty
        number,     // Home Section 1 Score
        number,     // Home Section 2 Score
        number,     // Home Section 3 Score
        number,     // Home Section 4 Score
        number,     // Home overtime score
    ],
    [
        string,     // Away team id
        string,     // Away team ranking，no ranking is empty
        number,     // Away Section 1 Score
        number,     // Away Section 2 Score
        number,     // Away Section 3 Score
        number,     // Away Section 4 Score
        number,     // Away overtime score
    ],
    [
        string,     // (BET365 Asian plate Beginning) home win,handicap,away win,whether to close (1-Yes，0-No)
        string,     // (BET365 European plate Beginning) Win,draw,lose,whether to close (1-Yes，0-No)
        string,     // (BET365 Size Ball plate Beginning) Big,handicap,small,whether to close (1-Yes，0-No)
        string,     // Compatible，please ignore
    ],
    [
        string,     // Match description
        string,     // Compatible，please ignore
    ],
];