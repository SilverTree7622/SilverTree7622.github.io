import { defineStore } from "pinia";
import { getScore, isLive } from "~/types";
import { GetSportSectionUpperCase, type TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpH2HSport } from "~/types/h2h";
import type { TMatchUpLineUpSport } from "~/types/lineUp";
import type { TMatchUpStoreConfig, TMatchUpStoreStatsIncident } from "~/types/matchUp";
import type { TSportScheduleTypes } from "~/types/schedule";
import type { TMatchUpStatsSport } from "~/types/stats";
import type { TContentStoreHomeAwayPrefix } from "./contentStore";


export const useLeagueStore = defineStore('leagueStore', () => {

    const headerConfig = reactive({
        leagueLogo: <string> '',
        leagueTitle: <string> '',
        countryLogo: <string> '',
        countryName: <string> '',
        level: <string> '',
        bet: <string> '',
        isFavorite: <boolean> false,
    });

    const config = reactive({
        leagueId: <string> '',
        sportSection: <TCommonSportSection> 'football',
    });

    const onMountedMatchUp = async (leagueId: string, callback: Function) => {
        config.leagueId = leagueId;
        console.log('config.leagueId from league store: ', config.leagueId);
        const res = await useApiFetch(
            'LeagueMatchUp',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
            },
        );
        const data = (res.data as any)['data'] ?? {};
        console.log('data from league mount: ', data);
        callback();
    };

    const onMountedTable = async (callback: Function) => {
        console.log('config.leagueId from league store: ', config.leagueId);
        const res = await useApiFetch(
            'LeagueTable',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
            },
        );
        const data = (res.data as any)['data'] ?? {};
        console.log('data from table mount: ', data);
        callback();
        
    };

    const getHeaderConfig = () => { return headerConfig; };

    const getConfig = () => { return config; };

    return {
        onMountedMatchUp,
        onMountedTable,
        getHeaderConfig,
        getConfig,
    };
});