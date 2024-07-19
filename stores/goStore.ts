import { defineStore } from "pinia";
import type { TCommonSportSection } from "~/types/Common/sport";
import type { TMatchUpStoreConfig } from "~/types/matchUp";


export const useGoStore = defineStore('goStore', () => {
    
    const go_matchup = (loc?: string) => {
        if (loc === 'home'){
            navigateTo('/Matchup?tab=matchup');
        } else{
            navigateTo('/Matchup?tab=matchup');
        }
    };

    const go_league = (loc?: string) => {
        if (loc === 'home'){
            navigateTo('/League?id=stats');
        } else{
            navigateTo('/League?id=stats');
        }
    };
    
    const go_livetraker = (match_id: string, config: TMatchUpStoreConfig) => {
        useMatchUpStore().setConfig(config);
        navigateTo(`/Matchup?tab=stats&uuid=${ match_id }`);
    };

    return {
        go_matchup,
        go_league,
        go_livetraker,
    };
});