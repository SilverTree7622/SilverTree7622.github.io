import { defineStore } from "pinia";
import { isLive } from "~/types";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpStoreConfig } from "~/types/matchUp";


export const useMatchUpStore = defineStore('matchUpStore', () => {
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

    const init = () => {
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

    const setConfig = (infoConfig: TMatchUpStoreConfig) => {
        config.sportSection = infoConfig.sportSection;
        config.match_id = infoConfig.match_id;
        config.matchStatus = infoConfig.matchStatus;
        config.leagueName = infoConfig.leagueName;
        config.timestamp = infoConfig.timestamp;
        config.homeLogo = infoConfig.homeLogo;
        config.homeName = infoConfig.homeName;
        config.homeScore = infoConfig.homeScore;
        config.awayLogo = infoConfig.awayLogo;
        config.awayName = infoConfig.awayName;
        config.awayScore = infoConfig.awayScore;
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
        getConfig,
        chckIsLive,
    };
});