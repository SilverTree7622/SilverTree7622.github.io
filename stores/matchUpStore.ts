import { defineStore } from "pinia";
import { getScore, isLive } from "~/types";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpLineUpCommon } from "~/types/lineUp";
import type { TMatchUpStoreConfig } from "~/types/matchUp";
import type { TSportScheduleTypes } from "~/types/schedule";


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

    const lineUpConfig = reactive<TMatchUpLineUpCommon>({
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

    const setConfigLineUp = (data: TMatchUpLineUpCommon) => {
        for (const item in data) {
            lineUpConfig[item] = data[item];
        }
        console.log('lineUpConfig: ', lineUpConfig);

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

    const chckIsLive = (): boolean => {
        return isLive(config.sportSection, config.matchStatus);
    };

    return {
        init,
        setConfig,
        setConfigLineUp,
        setIsLineUpExist,
        getOpt,
        getConfig,
        chckIsLive,
    };
});