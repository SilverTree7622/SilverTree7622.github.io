import type { TCommonTabTypes } from "../tab";


export type TCarouselTitle = 'Top Scores' | 'Top Matchup' | 'Top Matchup' | 'Result' | 'Best League';

export const getTitle = (tab: TCommonTabTypes): TCarouselTitle => {
    if (tab === 'live') return 'Top Scores';
    if (tab === 'fixtures') return 'Top Matchup';
    if (tab === 'odds') return 'Top Matchup';
    if (tab === 'result') return 'Result';
    if (tab === 'league') return 'Best League';
    return 'Top Scores';
};