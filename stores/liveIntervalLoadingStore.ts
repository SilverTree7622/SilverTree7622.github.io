import { defineStore } from "pinia";
import { ECommonSportSectionValue, ECommonSportValue, type TCommonSportSection } from "~/types/Common/sport";
import type { TCommonTabTypes } from "~/types/Common/tab";
import type { TSportLiveRealTimeTypes } from "~/types/live";
import type { TSportScheduleTypes } from "~/types/schedule";


export const useLiveIntervalLoadingStore = defineStore('liveIntervalLoadingStore', () => {
    const opt = reactive({
        sport: <TCommonSportSection> 'football',
        isOnLiveTab: <boolean> false,
        isPending: <boolean> false,
        termDuration: <number> 10 * 1000,
        realTimeData: <TSportLiveRealTimeTypes[] | []> [],
        timeOutInstance: <any> undefined,
    });

    const tmp = reactive({
        cnt: <number> 0,
    });

    const callLoading = async () => {
        if (!opt.isOnLiveTab) return;
        opt.isPending = true;
        tmp.cnt++;
        const res = await useApiFetch<TSportLiveRealTimeTypes>(
            `${ ECommonSportSectionValue[ opt.sport ] }RealTime`,
            {
                method: 'POST',
            },
            {
                sid: ECommonSportValue[ ECommonSportSectionValue['football'] ],
                fromdate: useDateStore().getFromDate(),
            },
        );
        opt.realTimeData = res['data']['data']['data'];
        console.log('cnt, res from interval loading: ', tmp.cnt, opt.realTimeData.length, res);
        opt.isPending = false;
        opt.timeOutInstance = setTimeout(async () => {
            if (!opt.isOnLiveTab) return;
            await callLoading();
        }, opt.termDuration);
    };
    
    const onMounted = async (sport: TCommonSportSection) => {
        opt.isOnLiveTab = true;
        opt.sport = sport;
        await callLoading();
    };

    const onBeforeUnmount = () => {
        setTabActive(false);
    };

    const changeTab = async (tabName: TCommonTabTypes) => {
        setTabActive(tabName === 'live');
        if (opt.isOnLiveTab) {
            await callLoading();
        }
    };

    const setTabActive = (value: boolean) => {
        opt.isOnLiveTab = value;
        if (value === false) {
            clearTimeout(opt.timeOutInstance);
            opt.timeOutInstance = undefined;
        }
    };

    const updateLiveRealTime = (list: TSportScheduleTypes[]): TSportScheduleTypes[] => {
        const returnList = [ ...list ];
        opt.realTimeData.map((item: TSportLiveRealTimeTypes) => {
            const { match_id } = item;
            const matchedIdx = returnList.findIndex( totalItem => totalItem.match_id === match_id );
            if (matchedIdx < 0) return;
            // find matchup via id
            if (item['ai_scores']) {
                returnList[ matchedIdx ]['ai_scores'] = item['ai_scores'];
            } else {
                returnList[ matchedIdx ].ai_away_scores = item['ai_away_scores'];
                returnList[ matchedIdx ].ai_home_scores = item['ai_home_scores'];
            }
            returnList[ matchedIdx ].ai_status_id = item.ai_match_status;
        });
        return returnList;
    };

    const updateLiveKickOff = (list: TSportScheduleTypes[]): {
        idx: number;
        match_id: string;
        ai_kickoff_timestamp: number;
    }[] => {
        const kickOffList: { idx: number; match_id: string; ai_kickoff_timestamp: number; }[] = [];
        opt.realTimeData.map((item: TSportLiveRealTimeTypes) => {
            const { match_id } = item;
            const totalIdx = list.findIndex( totalItem => totalItem.match_id === match_id );
            if (totalIdx < 0) return;
            // find matchup via id
            kickOffList.push({
                idx: totalIdx,
                match_id: match_id,
                ai_kickoff_timestamp: item.ai_kickoff_timestamp
            });
        });
        return kickOffList;
    };

    const getRealTimeData = () => {
        return opt.realTimeData;
    };

    return {
        onMounted,
        onBeforeUnmount,
        changeTab,
        setTabActive,
        updateLiveRealTime,
        updateLiveKickOff,
        getRealTimeData,
    };
});