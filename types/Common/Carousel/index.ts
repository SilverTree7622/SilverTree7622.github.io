import type { TCommonTabTypes } from "../tab";


export type TCarouselTitle = 'Top Scores' | 'Top Matchup' | 'Top Matchup' | 'Result' | 'BEST LEAGUE';

export type TCarouselUpdate = {
    prefix: string;
    time: string;
    homeScore: number | string;
    awayScore: number | string;
    isHomeFavorite?: boolean;
    isAwayFavorite?: boolean;
};

export const getTitle = (tab: TCommonTabTypes): TCarouselTitle => {
    if (tab === 'live') return 'Top Scores';
    if (tab === 'fixtures') return 'Top Matchup';
    if (tab === 'odds') return 'Top Matchup';
    if (tab === 'result') return 'Result';
    if (tab === 'league') return 'BEST LEAGUE';
    return 'Top Scores';
};