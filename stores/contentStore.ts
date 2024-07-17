import { defineStore } from "pinia";
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TSportScheduleTypes } from "~/types/schedule";
import UtilDate from "~/utils/date";
import * as Types from '~/types';
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TCommonMatchStatus } from "~/types/Common/status";


export type TContentStorePrefix = '' | 'home' | 'away';

export type TInningDataClassic = {
    score: number;
    isBlack: boolean;
};

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

    // get score & time via custom function
    const getScore = (
        sportSection: TCommonSportSection,
        prefix: TContentStorePrefix, 
        schedule,
    ): number[] => {
        return [ Types.getScore(sportSection, prefix, schedule) ];
    };
    
    const getTime = (
        sportSection: TCommonSportSection,
        ai_match_status: TCommonMatchStatus,
        ai_kickoff_timestamp: number,
    ): string => {
        return Types.getTime(sportSection, ai_match_status, ai_kickoff_timestamp);
    };

    const getPrefix = (
        sportSection: TCommonSportSection,
        ai_match_status: TCommonLiveRealTime['ai_match_status'],
        ai_kickoff_timestamp: number,
    ): string => {
        return Types.getPrefix(sportSection, ai_match_status, ai_kickoff_timestamp);
    };

    const getLeagueTime = (
        idx: number,
        sportSection: TCommonSportSection,
        ai_match_status: TCommonLiveRealTime['ai_match_status'],
        ai_kickoff_timestamp: number,
    ): {
        prevTimestamp: number;
        matchUpTime: string;
    } => {
        const kickOffTime = ai_kickoff_timestamp;
        let dateTime: string = `0`;
        if (kickOffTime !== 0) {
            dateTime = getTime(sportSection, ai_match_status, ai_kickoff_timestamp);
        } else {
            // dateTime = currentTime - props.league.ai_match_time;
        }

        if (idx === 0) {
            // console.log('kickOffTime, dateTime, props.league.ai_match_time: ', kickOffTime, dateTime, props.league.ai_match_time);
        }
        return {
            prevTimestamp: kickOffTime,
            matchUpTime: dateTime,
        };
    };

    const getOddsTime = (
        sportSection: TCommonSportSection,
        league: TSportScheduleTypes,
    ): {
        isLiving: boolean;
        time: string;
    } => {
        const { ai_match_status } = league;
        const isLiving = Types.isLive(sportSection, ai_match_status);
        if (isLiving && league['ai_kickoff_timestamp'] !== undefined) {
            return {
                isLiving,
                time: getLeagueTime(0, sportSection, ai_match_status, league['ai_kickoff_timestamp']).matchUpTime,
            };
        } else {
            return {
                isLiving,
                time: getMatchTime(league),
            };
        }
    };

    const getInningClassic = (
        sportSection: TCommonSportSection,
        prefix: TContentStorePrefix,
        league: TSportScheduleTypes,
    ): TInningDataClassic[] => {
        const homeScoreList = Types.getScoreList(sportSection, 'home', league);
        const awayScoreList = Types.getScoreList(sportSection, 'away', league);
        if (prefix === 'home') {
            return homeScoreList.map((item, idx) => {
                return {
                    score: item,
                    isBlack: (item >= awayScoreList[idx]),
                };
            });
        }
        if (prefix === 'away') {
            return awayScoreList.map((item, idx) => {
                return {
                    score: item,
                    isBlack: (item >= homeScoreList[idx]),
                };
            });
        }
        return [];
    };

    const getCurrentInningSpotlightIdx = (
        sportSection: TCommonSportSection,
        schedule: TSportScheduleTypes,
    ): number => {
        return Types.getCurrentInningSpotlightIdx(sportSection, schedule);
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
        getScore,
        getTime,
        getPrefix,
        getLeagueTime,
        getOddsTime,
        getInningClassic,
        getCurrentInningSpotlightIdx,
    };
});