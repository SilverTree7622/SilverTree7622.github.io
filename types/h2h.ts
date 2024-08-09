import type { TMatchUpH2HBasketball, TMatchUpTeamInfoBasketball } from "./BasketBall/h2h";
import type { TMatchUpH2HFootball, TMatchUpTeamInfoFootball } from "./FootBall/h2h";
import type { TMatchUpH2HTennis, TMatchUpTeamInfoTennis } from "./Tennis/h2h";

export type TMatchUpH2HSportCommon = TMatchUpH2HFootball | TMatchUpH2HBasketball | TMatchUpH2HTennis | '';

export type TMatchUpTeamInfoCommon = TMatchUpTeamInfoFootball | TMatchUpTeamInfoBasketball | TMatchUpTeamInfoTennis;