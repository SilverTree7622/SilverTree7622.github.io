

export const ECommonSportSection = {
    FootBall: 'football',
    BasketBall: 'basketball',
    BaseBall: 'baseball',
    VolleyBall: 'volleyball',
    Tennis: 'tennis',
    Icehockey: 'icehockey',
} as const;

export const ECommonSportSectionValue = {
    'football': 'FootBall',
    'basketball': 'BasketBall',
    'baseball': 'BaseBall',
    'volleyball': 'VolleyBall',
    'tennis': 'Tennis',
    'icehockey': 'IceHockey',
} as const;

export const ECommonSportValue = {
    FootBall: 6046,
    BasketBall: 48242,
    BaseBall: 154914,
    VolleyBall: 154830,
    Tennis: 54094,
    Icehockey: 35232,
} as const;

export const ECommonSportInitDataPrefix = {
    FootBall: 'fb',
    BasketBall: 'bk',
    BaseBall: 'bs',
    VolleyBall: 'vy',
    Tennis: 'ts',
    Icehockey: 'ih',
} as const;

export const ECommonSportNavCode = {
    FootBall: 'S001',
    FootBall2: 'S002',
    BasketBall: 'S003',
    BaseBall: 'S004',
    VolleyBall: 'S005',
    Tennis: 'S006',
    Icehockey: 'S007',
} as const;

export type TCommonSportSectionTabName = keyof typeof ECommonSportSection;

export const ECommonMatchUpSection = 'matchup';

export const ECommonLeagueSection = 'league';

export type TCommonSportSection = typeof ECommonSportSection[ keyof typeof ECommonSportSection ];

export type TCommonMatchUpSection = typeof ECommonMatchUpSection;

export type TCommonLeagueSection = typeof ECommonLeagueSection;

export type TCommonSportNavCode = typeof ECommonSportNavCode[ keyof typeof ECommonSportNavCode ];