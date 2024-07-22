import { defineStore } from "pinia";
import { getScore, isLive } from "~/types";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpH2HSport } from "~/types/h2h";
import type { TMatchUpLineUpSport } from "~/types/lineUp";
import type { TMatchUpStoreConfig, TMatchUpStoreStatsIncident } from "~/types/matchUp";
import type { TSportScheduleTypes } from "~/types/schedule";
import type { TMatchUpStatsSport } from "~/types/stats";
import type { TContentStoreHomeAwayPrefix } from "./contentStore";


export const useMatchUpStore = defineStore('matchUpStore', () => {
    const opt = reactive({
        isLineUpExist: <boolean> true,
    });

    const config = reactive<TMatchUpStoreConfig>({
        sportSection: 'football',
        match_id: '',
        leagueName: '',
        timestamp: 0,
        homeLogo: '',
        homeName: '',
        homeScore: 0,
        awayLogo: '',
        awayName: '',
        awayScore: 0,
        matchStatus: 1,
    });

    const statsConfig = reactive<TMatchUpStatsSport>({
        id: '',
        incidents: [],
        score: {} as any,
        stats: [],
    });

    const lineUpConfig = reactive<TMatchUpLineUpSport>({
        away_formation: '',
        coach_id: {
            home: '',
            away: '',
        },
        confirmed: 0,
        home_formation: '',
        injury: {
            home: [],
            away: [],
        },
        lineup: {
            home: [],
            away: [],
        },
    });

    const h2hConfig = reactive<TMatchUpH2HSport['history']>({
        home: [],
        away: [],
        vs: [],
    });

    const init = () => {
        config.sportSection = 'football';
        config.match_id = '';
        config.matchStatus = 1;
        config.leagueName = '';
        config.timestamp = 0;
        config.homeLogo = '';
        config.homeName = '';
        config.homeScore = 0;
        config.awayLogo = '';
        config.awayName = '';
        config.awayScore = 0;
    };

    const setConfig = (sportSection: TCommonSportSection, schedule: TSportScheduleTypes) => {
        config.sportSection = sportSection;
        config.match_id = schedule.match_id;
        config.matchStatus = schedule.ai_status_id;
        config.leagueName = schedule.ai_competition_name;
        config.timestamp = schedule.ai_match_time;
        config.homeLogo = schedule.ai_home_team_img;
        config.homeName = schedule.ai_home_team_name;
        config.homeScore = getScore(sportSection, 'home', schedule);
        config.awayLogo = schedule.ai_away_team_img;
        config.awayName = schedule.ai_away_team_name;
        config.awayScore = getScore(sportSection, 'away', schedule);
    };

    const setConfigStats = (data: TMatchUpStatsSport) => {
        for (const item in data) {
            statsConfig[item] = data[item];
        }
        console.log('statsConfig: ', statsConfig);

    };

    const setConfigLineUp = (data: TMatchUpLineUpSport) => {
        for (const item in data) {
            lineUpConfig[item] = data[item];
        }
        console.log('lineUpConfig: ', lineUpConfig);
    };

    const setConfigH2h = (data: TMatchUpH2HSport) => {
        for (const item in data.history) {
            h2hConfig[item] = data.history[item];
        }
    };

    const setIsLineUpExist = (value: boolean) => {
        opt.isLineUpExist = value;
    };

    const getOpt = () => {
        return opt;
    };

    const getConfig = () => {
        return config;
    };

    const getConfigStats = () => {
        return statsConfig;
    };

    const getConfigH2h = () => {
        return h2hConfig;
    };

    const chckIsLive = (): boolean => {
        return isLive(config.sportSection, config.matchStatus);
    };

    const getIncidentScore = (
        idx: number,
        homeAwayPrefix: TContentStoreHomeAwayPrefix,
        list: TMatchUpStoreStatsIncident[],
    ): number => {
        // config.sportSection === 'football'

        const standardIdx = list.length - idx;
        // ISSUE: 
        // console.log('standardIdx: ', standardIdx);
        const goalList = list.filter( item => item.type === 1 );
        const prevList = goalList.filter((item, listIdx) => listIdx < idx);
        // console.log('idx, prevList: ', idx, prevList);
        if (prevList.length) {
            let score = 0;
            prevList.map((item) => {
                const prop = (homeAwayPrefix === 'home' ? 'home_score' : 'away_score');
                if (item[prop] === undefined) return;
                score = item[prop] as number;
                // console.log('item.time: ', item.time);
            });
            return score;
        }
        return 0;
    };

    return {
        init,
        setConfig,
        setConfigLineUp,
        setConfigStats,
        setIsLineUpExist,
        setConfigH2h,
        getOpt,
        getConfig,
        getConfigStats,
        getConfigH2h,
        chckIsLive,
        getIncidentScore,
    };
});