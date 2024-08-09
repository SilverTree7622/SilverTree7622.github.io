import { defineStore } from "pinia";
import { getMatchUpH2hInfo, getScore, isLive } from "~/types";
import { GetSportSectionUpperCase, type TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpH2HSportCommon, TMatchUpTeamInfoCommon } from "~/types/h2h";
import type { TMatchUpLineUpSport } from "~/types/lineUp";
import type { TMatchUpStoreConfig, TMatchUpStoreStatsIncident } from "~/types/matchUp";
import type { TSportScheduleTypes } from "~/types/schedule";
import type { TMatchUpStatsSport } from "~/types/stats";
import type { TContentStoreHomeAwayPrefix } from "./contentStore";
import UtilObj from "~/utils/obj";


export type TH2hTeamRes = {
    "ai_competition_id": string;
    "ai_country_id": string;
    "ai_id": string;
    "ai_index": number;
    "ai_logo_img": string;
    "ai_name_eng": string;
    "ai_short_name": string;
};

export type TH2hLeaugeRes = {
    "ai_id": string;
    "ai_type": number;
    "category_name": string;
    "catetory_logo": string;
    "competition_logo": string;
    "competition_name": string;
    "competition_short_name": string;
};

export const useMatchUpStore = defineStore('matchUpStore', () => {
    const opt = reactive({
        isLineUpExist: <boolean> true,
    });

    const config = reactive<TMatchUpStoreConfig>({
        sportSection: 'football',
        match_id: '',
        leagueName: '',
        leagueId: '',
        timestamp: 0,
        homeLogo: '',
        homeName: '',
        homeTeamId: '',
        homeScore: 0,
        awayLogo: '',
        awayName: '',
        awayTeamId: '',
        awayScore: 0,
        matchStatus: 1,
    });

    const statsConfig = reactive<TMatchUpStatsSport & { isExist: boolean; }>({
        isExist: <boolean> false,
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

    const h2hConfig = reactive({
        isExist: <boolean> false,
        home: [],
        away: [],
        vs: [],
    });

    const resourceListConfig = reactive({
        team: <TH2hTeamRes[]> [],
        league: <TH2hLeaugeRes[]> [],
    });

    const onMounted = async () => {
        
    };

    const onBeforeUnmountPage = () => {
        resourceListConfig.team = [];
        resourceListConfig.league = [];
    };

    const init = () => {
        config.sportSection = 'football';
        config.match_id = '';
        config.matchStatus = 1;
        config.leagueName = '';
        config.leagueId = '';
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
        config.leagueId = schedule.ai_competition_id;
        config.timestamp = schedule.ai_match_time;
        config.homeLogo = schedule.ai_home_team_img;
        config.homeName = schedule.ai_home_team_name;
        config.homeTeamId = schedule.ai_home_team_id;
        config.homeScore = getScore(sportSection, 'home', schedule);
        config.awayLogo = schedule.ai_away_team_img;
        config.awayName = schedule.ai_away_team_name;
        config.awayTeamId = schedule.ai_away_team_id;
        config.awayScore = getScore(sportSection, 'away', schedule);
    };

    const setConfigStats = (data: TMatchUpStatsSport) => {
        for (const item in data) {
            statsConfig[item] = data[item];
        }
        if (
            statsConfig.incidents.length === 0 &&
            UtilObj.chckIsEmpty(statsConfig.score) &&
            statsConfig.stats.length === 0
        ) {
            statsConfig.isExist = false;
        } else {
            statsConfig.isExist = true;
        }
    };

    const setConfigLineUp = (data: TMatchUpLineUpSport) => {
        for (const item in data) {
            lineUpConfig[item] = data[item];
        }
    };

    const setConfigH2h = (data: TMatchUpH2HSportCommon) => {
        if (typeof data === 'string' || (typeof data === 'object' && UtilObj.chckIsEmpty(data))) {
            h2hConfig.isExist = false;
            return;
        }
        h2hConfig.isExist = true;
        for (const item in data.history) {
            h2hConfig[item] = data.history[item];
        }
        // for (const item in data.future) {
        //     h2hConfig[item].push(...data.future[item]);
        // }
    };

    const setIsLineUpExist = (value: boolean) => {
        opt.isLineUpExist = value;
    };

    const mountTeam = async (teamid: string[]) => {
        try {
            const res = await useApiFetch(
                `GetTeam`,
                { method: 'POST', },
                {
                    teamid,
                    sports: GetSportSectionUpperCase(config.sportSection),
                }
            );
            const data = (res.data as any)['data'] ?? {};
            const prevList = [
                ...data['data'],
                ...resourceListConfig.team,
            ];
            resourceListConfig.team = [ ...new Set(prevList) ];
        }
        catch (e) {
            console.warn('e from get team api: ', e);
        }
    };

    const mountLeague = async (leagueid: string[]) => {
        try {
            const res = await useApiFetch(
                `GetCompetition`,
                { method: 'POST', },
                {
                    competitionid: leagueid,
                    sports: GetSportSectionUpperCase(config.sportSection),
                }
            );
            const data = (res.data as any)['data'] ?? {};
            const prevList = [
                ...data['data'],
                ...resourceListConfig.league,
            ];
            resourceListConfig.league = [ ...new Set(prevList) ];
        }
        catch (e) {
            console.warn('e from get league api: ', e);
        }
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

    const getConfigLineUp = () => {
        return lineUpConfig;
    };

    const getConfigH2h = () => {
        return h2hConfig;
    };

    const getResourceListConfig = () => {
        return resourceListConfig;
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
    
    const getTeamLogo = (teamId: string): string => {
        return resourceListConfig.team.find( item => item.ai_id === teamId )?.ai_logo_img ?? '';
    };

    const getTeamName = (teamId: string): string => {
        return resourceListConfig.team.find( item => item.ai_id === teamId )?.ai_name_eng ?? '';
    };

    const getLeagueTitle = (leagueId: string): string => {
        return resourceListConfig.league.find( leagueItem => leagueItem.ai_id === leagueId )?.competition_name ?? '';
    };

    const getLeagueLogo = (leagueId: string): string => {
        return resourceListConfig.league.find( leagueItem => leagueItem.ai_id === leagueId )?.competition_logo ?? '';
    };

    const getH2hInfo = (sportSection: TCommonSportSection, type: string, item: TMatchUpTeamInfoCommon) => {
        return getMatchUpH2hInfo(sportSection, type, item);
    };

    return {
        onMounted,
        onBeforeUnmountPage,
        init,
        setConfig,
        setConfigLineUp,
        setConfigStats,
        setIsLineUpExist,
        setConfigH2h,
        mountTeam,
        mountLeague,
        getOpt,
        getConfig,
        getConfigStats,
        getConfigLineUp,
        getConfigH2h,
        getResourceListConfig,
        chckIsLive,
        getIncidentScore,
        getTeamLogo,
        getTeamName,
        getLeagueTitle,
        getLeagueLogo,
        getH2hInfo,
    };
});