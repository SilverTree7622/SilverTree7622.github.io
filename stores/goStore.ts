import { defineStore } from "pinia";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpStoreConfig } from "~/types/matchUp";
import type { TSportScheduleTypes } from "~/types/schedule";


export const useGoStore = defineStore('goStore', () => {
    
    const go_matchup = (loc?: string) => {
        if (loc === 'home'){
            navigateTo('/Matchup?tab=matchup');
        } else{
            navigateTo('/Matchup?tab=matchup');
        }
    };

    const go_league = (seasonId: string, leagueId: string) => {
        navigateTo(`/League?id=${ leagueId }&season=${ seasonId }`);
    };
    
    const go_livetraker = (match_id: string, sportSection: TCommonSportSection, schedule: TSportScheduleTypes) => {
        useMatchUpStore().setConfig(sportSection, schedule);
        navigateTo(`/Matchup?tab=stats&uuid=${ match_id }`);
    };

    return {
        go_matchup,
        go_league,
        go_livetraker,
    };
});