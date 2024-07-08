import { defineStore } from "pinia";
import type { TCommonTabTypes } from "~/types/Common/tab";
import UtilDate from "~/utils/date";
import type { TCacheStoreSection } from "./cacheStore";
import { ECommonSportSectionValue, ECommonSportValue } from "~/types/Common/sport";
import UtilObj from "~/utils/obj";
import type { TSportScheduleTypes } from "~/types/schedule";
import UtilArray from "~/utils/array";


export type TSportStoreKickOffList = { idx: number; match_id: string; ai_kickoff_timestamp: number; }[];

export const useSportStore = defineStore('sportStore', () => {
    const {
        MAX_PAGINATION_CONTENT,
    } = useRuntimeConfig().public.CONSTANTS;

    const res = async (
        totalList: TSportScheduleTypes[],
        totalKickOffList: TSportStoreKickOffList,
        sortedList: TSportScheduleTypes[],
        sortedKickOffList: TSportStoreKickOffList,
        $liveMain,
        sportSection: TCacheStoreSection,
        tab: TCommonTabTypes,
        // loadSortedContent: (isFilter: boolean, list: any[]) => Promise<{ loadPageIdx: number; loadPageIsPending: boolean; loadSortedList: any[]; }>,
        callNextContents: (isFilter?: boolean) => Promise<boolean>,
        endCallback: () => void = () => {},
    ): Promise<{
        resTotalList: TSportScheduleTypes[];
        resTotalKickOffList: TSportStoreKickOffList;
        resSortedList: TSportScheduleTypes[];
        resSortedKickOffList: TSportStoreKickOffList;
    }> => {
        const isToday = UtilDate.chckDateIsToday(
            UtilDate.addMillisecond(useDateStore().getFromDate())
        );
        const res = await useCacheStore().onMountedTab(
            sportSection,
            tab,
            {
                sid: ECommonSportValue[ ECommonSportSectionValue[sportSection] ],
                fromdate: isToday ? 0 : useDateStore().getFromDate(),
            },
        );
        // 
        try {
            totalList = res['data'];
            await callNextContents();
            if (tab === 'live') {
                await updateLiveRealTime(
                    totalList,
                    totalKickOffList,
                    sortedList,
                    sortedKickOffList,
                    $liveMain,
                    callNextContents,
                );
            }
        } catch (e) {
            console.warn('e from sportStore res: ', e);
        }
        endCallback && endCallback();
        console.log('sortedList, sortedList.length: ', sortedList, sortedList.length);
        return {
            resTotalList: totalList,
            resTotalKickOffList: totalKickOffList,
            resSortedList: sortedList,
            resSortedKickOffList: sortedKickOffList,
        };
    };
    
    const updateLiveRealTime = async (
        totalList: TSportScheduleTypes[],
        totalKickOffList: TSportStoreKickOffList,
        sortedList: TSportScheduleTypes[],
        sortedKickOffList: TSportStoreKickOffList,
        $liveMain,
        // loadSortedContent: (isFilter: boolean, list: any[]) => Promise<{ loadPageIdx: number; loadPageIsPending: boolean; loadSortedList: any[]; }>,
        callNextContents: (isFilter?: boolean) => Promise<boolean>,
    ) => {
        const prevSortedList = [ ...sortedList ];
        const prevSortedListMatchUpList = sortedList.map( item => item.match_id );
        const prevSortedListHomeScoreList = sortedList.map( item => item.ai_home_scores[0] );
        const prevSortedListAwayScoreList = sortedList.map( item => item.ai_away_scores[0] );
        const prevSortedListMatchStatusList = sortedList.map( item => item.ai_status_id );
        const prevSortedKickOffList = [ ...sortedKickOffList ];
        
        totalList = useLiveIntervalLoadingStore().updateLiveRealTime(totalList);
        totalKickOffList = useLiveIntervalLoadingStore().updateLiveKickOff(totalList);
        sortedList = useLiveIntervalLoadingStore().updateLiveRealTime(sortedList);
        sortedKickOffList = useLiveIntervalLoadingStore().updateLiveKickOff(sortedList);
        
        await callNextContents(true);

        const isListEqual = UtilObj.compareEquals(prevSortedList, sortedList);
        // compare matchup id list
        const newSortedListMatchUpList = sortedList.map( item => item.match_id );
        const isMatchUpListEqual = UtilArray.compareList(
            prevSortedListMatchUpList, newSortedListMatchUpList
        );
        const newSortedListScore1List = sortedList.map( item => item.ai_home_scores[0] );
        const isScore1ListEqual = UtilArray.compareList(
            prevSortedListHomeScoreList, newSortedListScore1List
        );
        const newSortedListScore2List = sortedList.map( item => item.ai_away_scores[0] );
        const isScore2ListEqual = UtilArray.compareList(
            prevSortedListAwayScoreList, newSortedListScore2List
        );
        const isTimeListEqual = UtilArray.compareList(
            prevSortedKickOffList, sortedKickOffList
        );

        // console.log('prevSortedKickOffList, sortedKickOffList: ', prevSortedKickOffList, sortedKickOffList);
        // if (
        //     isListEqual && isMatchUpListEqual && isScore1ListEqual && isScore2ListEqual && isTimeListEqual
        // ) {
        //     console.log(`nothing changed`);
        //     return;
        // }

        // 각 list에 있는 item의 component에 update 및 update에 필요한 값 넘겨주기
        if (!$liveMain.value) {
            return {
                totalList,
                totalKickOffList,
                sortedList,
                sortedKickOffList,
            };
        }
        sortedList.map((item, idx) => {
            const filteredKickOffList = sortedKickOffList.find((filterItem) => {
                return filterItem.idx === idx;
            });
            const prevFilteredKickOffList = prevSortedKickOffList.find((filterItem) => {
                return filterItem.idx === idx;
            }) ?? 0;
            const ai_kickoff_timestamp = filteredKickOffList ?
                filteredKickOffList['ai_kickoff_timestamp'] :
                prevFilteredKickOffList['ai_kickoff_timestamp']
            ;
            const config = {};
            if (prevSortedListAwayScoreList[idx] !== item.ai_away_scores[0]) {
                config['ai_away_scores'] = item.ai_away_scores;
            }
            if (prevSortedListHomeScoreList[idx] !== item.ai_home_scores[0]) {
                config['ai_home_scores'] = item.ai_home_scores;
            }
            config['ai_kickoff_timestamp'] = ai_kickoff_timestamp;
            config['ai_match_status'] = item.ai_status_id;
            config['match_id'] = item.match_id;
            // console.log('config: ', config);
            $liveMain.value.update(idx, config);
        });
        return {
            totalList,
            totalKickOffList,
            sortedList,
            sortedKickOffList,
        };
    };

    /**
     * call next content (pagination)
     * @param isFilter 
     * @returns { Promise<boolean> } return is content is done or not
     */
    const callNextContents = async (
        pageIdx: number,
        pageIsPending: boolean,
        isOutOfContent: boolean,
        totalList: TSportScheduleTypes[],
        sortedList: TSportScheduleTypes[],
        tab: TCommonTabTypes,
        loadSortedContent: (isFilter: boolean, list: any[]) => Promise<{ loadPageIdx: number; loadPageIsPending: boolean; loadSortedList: any[]; }>,
        isFilter: boolean = false,
    ): Promise<{
        pageIdx: number;
        pageIsPending: boolean;
        isOutOfContent: boolean;
        sortedList: TSportScheduleTypes[];
    }> => {
        const pagedList = useFilterStore().sortList(
            totalList,
            useDateStore().getDate(),
            {
                tab,
                date: (item) => {
                    return UtilDate.addMillisecond(item.ai_match_time);
                },
                league: (item) => {
                    return item.ai_competition_id;
                }
            }
        );
        // is content done (out of item)
        if ((pagedList.length === sortedList.length) && pagedList.length !== 0) {
            if (isFilter) sortedList = pagedList;
            isOutOfContent = true;
            return {
                pageIdx,
                pageIsPending,
                isOutOfContent,
                sortedList,
            };
        }
        const {
            loadPageIdx,
            loadPageIsPending,
            loadSortedList,
        } = await loadSortedContent(isFilter, sortedList);
        sortedList = loadSortedList;
        isOutOfContent = (pagedList.length === sortedList.length);
        return {
            pageIdx: loadPageIdx,
            pageIsPending: loadPageIsPending,
            isOutOfContent,
            sortedList,
        };
    };

    /**
     * get paged list from total list (pagination via page idx)
     * @param isFilter 
     * @param list 
     */
    const loadSortedContent = async (
        pageIdx: number,
        pageIsPending: boolean,
        isFilter: boolean,
        list: any[],
    ): Promise<{
        loadPageIdx: number;
        loadPageIsPending: boolean;
        loadSortedList: any[];
    }> => {
        if (list.length === 0) {
            return {
                loadPageIdx: pageIdx, loadPageIsPending: pageIsPending, loadSortedList: list,
            };
        }
        if (isFilter) {
            return {
                loadPageIdx: pageIdx,
                loadPageIsPending: pageIsPending,
                loadSortedList: list.slice(0, MAX_PAGINATION_CONTENT * pageIdx),
            };
        }
        if (list.length < pageIdx) {
            return {
                loadPageIdx: pageIdx,
                loadPageIsPending: pageIsPending,
                loadSortedList: list,
            };
        }
        if (pageIdx !== 0) pageIsPending = true;
        // load next content
        pageIdx++;
        const slicedList = list.slice(0, MAX_PAGINATION_CONTENT * pageIdx);
        pageIsPending = false;
        return {
            loadPageIdx: pageIdx,
            loadPageIsPending: pageIsPending,
            loadSortedList: slicedList,
        };
    };

    const onMounted = async (
        totalList: TSportScheduleTypes[],
        totalKickOffList: TSportStoreKickOffList,
        sortedList: TSportScheduleTypes[],
        sortedKickOffList: TSportStoreKickOffList,
        $liveMain,
        sportSection: TCacheStoreSection,
        tab: TCommonTabTypes,
        // loadSortedContent: (isFilter: boolean, list: any[]) => Promise<{ loadPageIdx: number; loadPageIsPending: boolean; loadSortedList: any[]; }>,
        callNextContents: (isFilter?: boolean) => Promise<boolean>,
        endCallback: () => void = () => {}
    ): Promise<{
        totalList: TSportScheduleTypes[];
        totalKickOffList: TSportStoreKickOffList;
        sortedList: TSportScheduleTypes[];
        sortedKickOffList: TSportStoreKickOffList;
    }> => {
        const {
            resTotalList,
            resTotalKickOffList,
            resSortedList,
            resSortedKickOffList,
        } = await res(
            totalList,
            totalKickOffList,
            sortedList,
            sortedKickOffList,
            $liveMain,
            sportSection,
            tab,
            // loadSortedContent,
            callNextContents,
            endCallback,
        );
        return {
            totalList: resTotalList,
            totalKickOffList: resTotalKickOffList,
            sortedList: resSortedList,
            sortedKickOffList: resSortedKickOffList,
        };
    };

    return {
        res,
        updateLiveRealTime,
        callNextContents,
        loadSortedContent,
        onMounted,
    };
});