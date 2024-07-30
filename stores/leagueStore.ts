import { defineStore } from "pinia";
import { isFixtures, isLive, isResult } from "~/types";
import type { TCommonSchedule } from "~/types/Common/schedule";
import { GetSportSectionUpperCase, type TCommonSportSection } from "~/types/Common/sport";
import type { TLeagueMatchUpRes, TLeagueStoreConfig } from "~/types/league";
import UtilDate from "~/utils/date";


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
    
    const resourceListConfig = reactive({
        team: <TH2hTeamRes[]> [],
        league: <TH2hLeaugeRes[]> [],
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
        if (data['data'] !== null) {
            onMountedHeader(data.data);
        }
        if (data.matchup) {
            matchUpConfig.list = data.matchup;
        }
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
        if (data['data'] !== null) {
            onMountedHeader(data.data);
        }
        if (data.matchup) {
            // tableConfig.list = data.matchup;
        }
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

    const filterMatchUp = (matchUpList: TCommonSchedule[]): TCommonSchedule[] => {
        matchUpList.sort((a, b) => {
            return a.ai_match_time - b.ai_match_time;
        });
        matchUpList.map( item => item.hasLeagueTag = false );
        const groupedLeague = matchUpList.reduce((acc, match) => {
            if (!acc[getTimeTitle(match)]) {
                acc[getTimeTitle(match)] = [];
            }
            acc[getTimeTitle(match)].push(match);
            return acc;
        }, {});
        const sortedLeague = Object.entries(groupedLeague).map((item) => {
            const [ lg_name, matches, ] = item;
            const matchesList = matches as any;
            matchesList.forEach((match, index) => {
                match.hasLeagueTag = index === 0;
            });
            return {
                lg_name,
                matches: matchesList,
            };
        });
        const finalList: any[] = [];
        sortedLeague.map((item) => {
            finalList.push(...item.matches);
        });
        return finalList;
    };

    const getTimeTitle = (schedule: TCommonSchedule): string => {
        const time = UtilDate.addMillisecond(schedule.ai_match_time);
        const month = time.getUTCMonth();
        const resultMonth = JSON.stringify(month).length === 1 ? `0${ month }` : month;
        const day = time.getUTCDate();
        const resultDay = JSON.stringify(day).length === 1 ? `0${ day }` : day;
        const year = time.getUTCFullYear();
        return `${ resultMonth }/${ resultDay }/${ year }`;
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
        filterMatchUp,
        getTimeTitle,
        getHeaderConfig,
        getMatchUpConfig,
        getConfig,
        getOpt,
        getTableConfig,
        getMatchUpType,
    };
});