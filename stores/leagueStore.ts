import { defineStore } from "pinia";
import { isFixtures, isFixturesAdvanced, isLive, isResult } from "~/types";
import type { TCommonSchedule } from "~/types/Common/schedule";
import { GetSportSectionUpperCase, type TCommonSportSection } from "~/types/Common/sport";
import { type TLeagueTableRes, type TLeagueMatchUpRes, type TLeagueStoreConfig, type TLeagueTableTableRow, type TLeagueTableSeason } from "~/types/league";
import UtilDate from "~/utils/date";
import UtilObj from "~/utils/obj";


export const useLeagueStore = defineStore('leagueStore', () => {
    const opt = reactive({
        isPending: <boolean> true,
        pageIdx: <number> 0,
        pageIsPending: <boolean> false,
        pageIsOutOfContent: <boolean> false,
        isTableExist: <boolean> false,
    });

    const matchUpConfig = reactive({
        list: <TLeagueMatchUpRes['matchup']> [],
    });

    const headerConfig = reactive<TLeagueStoreConfig>({
        leagueLogo: <string> '',
        leagueTitle: <string> '',
        countryLogo: <string> '',
        countryName: <string> '',
        seasonList: <TLeagueTableSeason[]> [],
        isFavorite: <boolean> false,
    });

    const tableConfig = reactive({
        selectedIdx: <number> 0,
        list: <TLeagueTableTableRow[]> [],
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

    const onMountedHeader = (data: TLeagueMatchUpRes) => {
        const {
            competition_logo,
            competition_name,
            catetory_logo,
            category_name,
        } = data['data'];
        headerConfig.leagueLogo = competition_logo;
        headerConfig.leagueTitle = competition_name;
        headerConfig.countryLogo = catetory_logo;
        headerConfig.countryName = category_name;
        headerConfig.seasonList = data.season;
    };

    const onMountedMatchUp = async (
        callback: Function,
    ) => {
        opt.isPending = true;
        config.seasonId = await chckIsSeasonId();
        config.leagueId = await chckIsLeagueId();
        opt.isTableExist = !!config.seasonId;
        const res = await useApiFetch<TLeagueMatchUpRes>(
            'LeagueMatchUp',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
                seasonid: config.seasonId,
            },
        );
        const data: TLeagueMatchUpRes | {} = (res.data as any)['data'] ?? {};
        if (UtilObj.chckIsEmpty(data)) {
            return;
        }
        if (data !== null) {
            onMountedHeader(data as TLeagueMatchUpRes);
        }
        if (data['matchup']) {
            matchUpConfig.list = data['matchup'];
        }
        callback();
        opt.isPending = false;
    };

    const onMountedTable = async (
        callback: Function,
    ) => {
        opt.isPending = true;
        config.seasonId = await chckIsSeasonId();
        config.leagueId = await chckIsLeagueId();
        opt.isTableExist = !!config.seasonId;
        const res = await useApiFetch<TLeagueTableRes>(
            'LeagueTable',
            { method: 'POST', },
            {
                competitionid: config.leagueId,
                sports: GetSportSectionUpperCase(config.sportSection),
                seasonid: config.seasonId,
            },
        );
        const data: TLeagueTableRes | {} = (res.data as any)['data'] ?? {};
        console.log('data from table mount: ', data);
        if (data !== null) {
            onMountedHeader(data as TLeagueMatchUpRes);
        }
        if (data['season']) {
            // tableConfig.
        }
        if (data['table'] && data['table']['tables'] && data['table']['tables'].length) {
            const { rows } = data['table']['tables'][0];
            tableConfig.list = rows;
        }
        tableConfig.selectedIdx = 0;
        callback();
        opt.isPending = false;
    };

    const setTableSubTabSelectedIdx = (idx: number) => {
        tableConfig.selectedIdx = idx;
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

    const filterResult = (matchUpList: TCommonSchedule[]): TCommonSchedule[] => {
        const finalList = matchUpList.filter((item) => {
            return isResult(config.sportSection, item.ai_status_id);
        });
        return filterMatchUp(finalList);
    };

    const getTimeTitle = (schedule: TCommonSchedule): string => {
        const time = UtilDate.addMillisecond(schedule.ai_match_time);
        const month = time.getUTCMonth() + 1;
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
    
    const chckIsLeagueId = async () => {
        return await useRoute().query['id'] as string;
    };
    
    const chckIsSeasonId = async () => {
        return await useRoute().query['season'] as string;
    };

    const getHeaderConfig = () => { return headerConfig; };

    const getMatchUpConfig = () => { return matchUpConfig; };

    const getConfig = () => { return config; };

    const getOpt = () => { return opt; };

    const getTableConfig = () => { return tableConfig; };

    const getMatchUpType = (schedule: TCommonSchedule): 'result' | 'fixtures' => {
        if (isFixturesAdvanced(config.sportSection, schedule)) {
            return 'fixtures';
        }
        const { ai_status_id, } = schedule;
        if (isResult(config.sportSection, ai_status_id)) return 'result';
        return 'result';
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

    return {
        onMountedHeader,
        onMountedMatchUp,
        onMountedTable,
        setTableSubTabSelectedIdx,
        setOpt,
        filterMatchUp,
        filterResult,
        getTimeTitle,
        mountTeam,
        mountLeague,
        chckIsLeagueId,
        chckIsSeasonId,
        getHeaderConfig,
        getMatchUpConfig,
        getConfig,
        getOpt,
        getTableConfig,
        getMatchUpType,
        getTeamLogo,
        getTeamName,
        getLeagueTitle,
        getLeagueLogo,
    };
});