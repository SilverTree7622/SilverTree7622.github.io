import { defineStore } from "pinia";
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TSportScheduleTypes } from "~/types/schedule";
import UtilDate from "~/utils/date";


export type TContentStorePrefix = '' | 'home' | 'away';

export const useContentStore = defineStore('contentStore', () => {

    const go_prefix_via_position = (position: number = 0): TContentStorePrefix => {
        let prefix: TContentStorePrefix = '';
        if (position === 0) {
            prefix = 'home';
        }
        if (position === 1) {
            prefix = 'away';
        }
        return prefix;
    };
    
    const setLeagueGroup = (league): boolean => {
        return league.hasLeagueTag ?? false;
    };

    const getLeagueFlag = (league: TSportScheduleTypes): string => {
        return league.ai_competition_img;
    };

    const getLeagueAlt = (league: TSportScheduleTypes): string => {
        return league.ai_competition_short_name;
    };

    const getLeagueName = (league: TSportScheduleTypes): string => {
        return league.ai_competition_name;
    };
    
    const getLeagueScore = (newLeague: TCommonLiveRealTime, position: number = 0): number => {
        // ISSUE: make oppositie for just now something wrong
        if (position === 0) position = 1;
        else position = 0;
        // end
        const prefix = go_prefix_via_position(position);
        return newLeague[`ai_${ prefix }_scores`][0];
    };

    const getParticipantName = (league: TSportScheduleTypes, position: number = 0): string => {
        const prefix = go_prefix_via_position(position);
        return league[`ai_${ prefix }_team_name`];
    };

    const getParticipantSrc = (league: TSportScheduleTypes, position: number = 0): string => {
        const prefix = go_prefix_via_position(position);
        return league[`ai_${ prefix }_team_img`];
    };

    // const getParticipantsScore = (league: TSportScheduleTypes, position: number = 0): string => {
    //     const prefix = go_prefix_via_position(position);
    //     return league[`ai_${ prefix }_team_img`];
    // };

    const getLeagueScoreResult = (league: TSportScheduleTypes, position: number = 0): number => {
        const prefix = go_prefix_via_position(position);
        return league[`ai_${ prefix }_scores`][0];
    };

    const getMatchTime = (league: TSportScheduleTypes): string => {
        const timestamp = UtilDate.addMillisecond(league.ai_match_time);
        const time = `${ UtilDate.syncDigit(timestamp.getUTCHours()) }:${ UtilDate.syncDigit(timestamp.getUTCMinutes()) }`;
        return time;
    };

    return {
        setLeagueGroup,
        getLeagueFlag,
        getLeagueAlt,
        getLeagueName,
        getLeagueScore,
        getParticipantName,
        getParticipantSrc,
        getLeagueScoreResult,
        getMatchTime,
    };
});