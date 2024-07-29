import { defineStore } from "pinia";
import { isFixtures, isLive, isResult } from "~/types";
import type { TCommonSchedule } from "~/types/Common/schedule";
import { GetSportSectionUpperCase, type TCommonSportSection } from "~/types/Common/sport";
import type { TLeagueMatchUpRes, TLeagueStoreConfig } from "~/types/league";


export const useLeagueStore = defineStore('leagueStore', () => {
    const opt = reactive({
        isPending: <boolean> true,
        pageIdx: <number> 0,
        pageIsPending: <boolean> false,
        pageIsOutOfContent: <boolean> false,
    });

    const matchUpConfig = reactive({
        list: <TLeagueMatchUpRes['matchup']> [],
    });

    const headerConfig = reactive<TLeagueStoreConfig>({
        leagueLogo: <string> '',
        leagueTitle: <string> '',
        countryLogo: <string> '',
        countryName: <string> '',
        isFavorite: <boolean> false,
    });

    const tableConfig = reactive({
        all: <any[]> [],
        topScorer: <any[]> [],
        home: <any[]> [],
        away: <any[]> [],
    });

    const config = reactive({
        seasonId: <string> '',
        leagueId: <string> '',
        sportSection: <TCommonSportSection> 'football',
    });

    const onMountedHeader = (data: TLeagueMatchUpRes['data']) => {
        headerConfig.leagueLogo = data.competition_logo;
        headerConfig.leagueTitle = data.competition_name;
        headerConfig.countryLogo = data.catetory_logo;
        headerConfig.countryName = data.category_name;
    };

    const onMountedMatchUp = async (
        seasonId: string,
        leagueId: string,
        callback: Function,
    ) => {
        opt.isPending = true;
        config.seasonId = seasonId;
        config.leagueId = leagueId;
        const res = await useApiFetch<TLeagueMatchUpRes>(
            'LeagueMatchUp',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
            },
        );
        const data = (res.data as any)['data'] ?? {};
        console.log('data from league mount: ', data);
        onMountedHeader(data.data);
        matchUpConfig.list = data.matchup;        
        callback();
        opt.isPending = false;
    };

    const onMountedTable = async (callback: Function) => {
        opt.isPending = true;
        if (!config.seasonId && useRoute().query['season']) {
            config.seasonId = useRoute().query['season'] as string;
        }
        const res = await useApiFetch(
            'LeagueTable',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
                seasonid: config.seasonId,
            },
        );
        const data = (res.data as any)['data'] ?? {};
        console.log('data from table mount: ', data);
        tableConfig
        callback();
        opt.isPending = false;
    };

    const setOpt = (
        value: {
            isPending?: boolean;
            pageIdx?: number;
            pageIsPending?: boolean;
            pageIsOutOfContent?: boolean;
        }
    ) => {
        if (value.isPending !== undefined) opt.isPending = value.isPending;
        if (value.pageIdx !== undefined) opt.pageIdx = value.pageIdx;
        if (value.pageIsPending !== undefined) opt.pageIsPending = value.pageIsPending;
        if (value.pageIsOutOfContent !== undefined) opt.pageIsOutOfContent = value.pageIsOutOfContent;
    };

    const hasTimeTag = (schedule: TCommonSchedule): boolean => {
        return true;
    };

    const getTimeTitle = (schedule: TCommonSchedule): string => {
        return '';
    };

    const getHeaderConfig = () => { return headerConfig; };

    const getMatchUpConfig = () => { return matchUpConfig; };

    const getConfig = () => { return config; };

    const getOpt = () => { return opt; };

    const getTableConfig = () => { return tableConfig; };

    const getMatchUpType = (schedule: TCommonSchedule): 'result' | 'fixtures' => {
        if (isResult(config.sportSection, schedule.ai_status_id)) return 'result';
        if (isFixtures(schedule.ai_status_id)) return 'fixtures';
        return 'result';
    };

    return {
        onMountedHeader,
        onMountedMatchUp,
        onMountedTable,
        setOpt,
        getTimeTitle,
        hasTimeTag,
        getHeaderConfig,
        getMatchUpConfig,
        getConfig,
        getOpt,
        getTableConfig,
        getMatchUpType,
    };
});