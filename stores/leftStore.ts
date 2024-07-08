import { defineStore } from "pinia";
import { ECommonSportSection, ECommonSportSectionValue, type TCommonSportSection, type TCommonSportSectionTabName } from "~/types/Common/sport";
import type { TInitData, TInitDataLeaguePopular, TInitDataLeagueEtc, TInitDateTypes } from "~/types/loading";
import UtilObj from "~/utils/obj";


export const useLeftStore = defineStore('leftStore', () => {
    const opt = reactive<TInitData>({
        left_menu: {},
        nav_code: '',
        result: 0,
        st_odds: [],
        st_sports: [],
        st_time: [],
    });

    type TUpdateCallback = (popular: TInitDataLeaguePopular[], etc: TInitDataLeagueEtc[]) => void;

    const config = reactive({
        currentSport: <TCommonSportSection> 'football',
        popular: <TInitData['left_menu']['popular']> [],
        etc: <TInitData['left_menu']['etc1']> [],
        updateCallback: <TUpdateCallback> (popular: TInitDataLeaguePopular[], etc: TInitDataLeagueEtc[], ) => {},
    });

    const sortViaSport = (sport: TCommonSportSection): {
        popular: TInitDataLeaguePopular[];
        etc: TInitDataLeagueEtc[];
    } => {
        const res = {
            popular: <TInitDataLeaguePopular[]> [],
            etc: <TInitDataLeagueEtc[]> [],
        };
        if (opt.left_menu['popular']) {
            res.popular = opt.left_menu['popular'].filter( item => item.ai_sports === ECommonSportSectionValue[sport] );
        }
        if (opt.left_menu['etc1']) {
            // res.etc = opt.left_menu['etc1'].filter( item => item.ai_sports === ECommonSportSectionValue[sport] );
            res.etc = opt.left_menu['etc1'];
        }
        if (opt.left_menu['etc2']) {
            res.etc.push(
                // ...opt.left_menu['etc2'].filter( item => item.ai_sports === ECommonSportSectionValue[sport] )
                ...opt.left_menu['etc2'],
            );
        }
        if (res.etc.length) {
            const groupedLeague = res.etc.reduce((acc, match) => {
                if (!acc[match.category_name]) {
                    acc[match.category_name] = [];
                }
                acc[match.category_name].push(match);
                return acc;
            }, {});
            const sortedLeague = Object.entries(groupedLeague).map((item) => {
                const [ country, league, ] = item;
                const leagueList = league as any;
                return {
                    country,
                    leagueList,
                };
            });
            const finalList: any[] = [];
            sortedLeague.map((item) => {
                finalList.push(...item.leagueList);
            });
            res.etc = finalList;
        }
        return res;
    };

    const register = (updateCallback: TUpdateCallback) => {
        config.updateCallback = updateCallback;
    };
    
    const onMounted = (sportTabName: TCommonSportSectionTabName, initData: TInitDateTypes) => {
        const {
            INIT_DATA,
        } = useRuntimeConfig().public.CONSTANTS;
        if (UtilObj.chckIsEmpty(initData['left_menu'])) {
            return;
        }
        for (const props in initData) {
            if (opt[props]) {
                opt[props] = initData[props];
            }
        }
        // const key = `${ INIT_DATA }_LOADING`;
        // localStorage.setItem(key, JSON.stringify(opt));
        onMountedSport(ECommonSportSection[sportTabName]);
    };

    const onBeforeUnmount = () => {
        
    };

    const onMountedSport = (sport: TCommonSportSection) => {
        config.currentSport = sport;
        const { popular, etc, } = sortViaSport(config.currentSport);
        config.popular = popular;
        config.etc = etc;
        config.updateCallback(config.popular, config.etc);
    };
    
    const onBeforeUnmountSport = () => {
        config.popular = [];
        config.etc = [];
    };

    const addFavorite = (ai_id: string) => {
        // config.popular?.push({
        //     // ai_id: string;
        //     // ai_index: number;
        //     // ai_sort: number;
        //     // ai_sports: TCommonSportSectionTabName;
        //     // category_logo: string;
        //     // category_name: string;
        //     // category_short_name: string;
        //     // reg_timestamp: number;
        // });
    };

    const removeFavorite = (ai_id: string) => {
        config.popular = config.popular?.filter( item => item.ai_id !== ai_id );
    };

    const getData = (): { popular: typeof config.popular; etc: typeof config.etc; } => {
        return {
            popular: config.popular,
            etc: config.etc,
        };
    };

    const getWatchProps = () => {
        return config.currentSport;
    };

    return {
        register,
        onMounted,
        onBeforeUnmount,
        onMountedSport,
        onBeforeUnmountSport,
        addFavorite,
        removeFavorite,
        getData,
        getWatchProps,

    };
});