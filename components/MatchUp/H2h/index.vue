<template>
    <div class="frmu95mobileu95matchup">
        <MatchUpH2hHeader>
            <div class="frmu95mobileu95matchup-item-2">
                <MatchUpH2hTeamSelection
                    v-if="props.isLastMatches"
                    :homeName="opt.homeName"
                    :homeLogo="opt.homeLogo"
                    :awayName="opt.awayName"
                    :awayLogo="opt.awayLogo"
                    :isSelectedIdx="filterOpt.selectedIdx"
                    @toggle="clickSelection"
                />
                <div class="frame-315-2 frame-315-3">
                    <div class="surname-1 surname-2 headline3 flex flex-row">
                        <MatchUpH2hFilter
                            :title="`Home${ props.isLastMatches ? '' : ` - ${ opt.homeName }` }`"
                            :isChecked="filterOpt.isHome"
                            class="mr-2"
                            @toggle="clickHome"
                        />
                        <MatchUpH2hFilter
                            :title="'This league'"
                            :isChecked="filterOpt.isThisLeague"
                            @toggle="clickThisLeague"
                        />
                    </div>
                </div>
                <div class="frame-532">
                    <div class="frame-531">
                        <div class="frame-526">
                            <div class="number-17 valign-text-middle leaguetitle">
                                {{ scoreOpt.win }}
                            </div>
                            <div class="win-2 valign-text-middle win-7 headline2">WIN</div>
                        </div>
                        <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 27" />
                        <div class="frame-527">
                            <div class="number-18 valign-text-middle leaguetitle">
                                {{ scoreOpt.draw }}
                            </div>
                            <div class="drawn-1 valign-text-middle drawn-3 headline2">DRAW</div>
                        </div>
                        <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 28" />
                        <div class="frame-528">
                            <div class="number-19 valign-text-middle leaguetitle">
                                {{ scoreOpt.lose }}
                            </div>
                            <div class="lose valign-text-middle lose-3 headline2">LOSE</div>
                        </div>
                    </div>
                    <div class="table-8 table-9">
                        <template v-for="(item, idx) in filterOpt.selectedList">
                            <CommonContentHeadDate
                                :season="getSeason(item)"
                                :id="getCompetitionId(item)"
                                :idx="idx"
                                :title="getLeagueTitle(item)"
                                :sportSection="opt.sportSection"
                                :hasLeagueTag="filterOpt.selectedTagList[idx] ?? false"
                                :src="getLeagueLogo(item)"
                                :alt="getLeagueTitle(item)"
                                :isPending="pendingOpt.league"
                            />
                            <article class="row-28 row-35">
                                <div class="cell-13">
                                    <div class="content-13 w-[54px]">
                                        <div class="time-time body2 mx-auto">
                                            {{ getTime(item) }}<br />
                                            {{ getYear(item) }}
                                        </div>
                                    </div>
                                </div>
                                <div class="cell-14">
                                    <div class="content-14">
                                        <!-- home section -->
                                        <div class="frame-41">
                                            <USkeleton v-if="pendingOpt.team" class="w-[15px] h-[15px] relative rounded-full" />
                                            <USkeleton v-if="pendingOpt.team" class="w-[100px] h-[15px]" />
                                            <template v-else>
                                                <img :src="getTeamLogo('home', item)" style=" height: 15px; position: relative; width: 15px;" />
                                                <!-- home name -->
                                                <div
                                                    class="valign-text-middle body"
                                                    :class="chckIsHomeId('home', item) ? 'asoton-villa' : 'arsenal-8'"
                                                >
                                                    {{ getTeamName('home', item) }}
                                                </div>
                                            </template>
                                        </div>
                                        <!-- away section -->
                                        <div class="frame-41">
                                            <USkeleton v-if="pendingOpt.team" class="w-[15px] h-[15px] relative rounded-full" />
                                            <USkeleton v-if="pendingOpt.team" class="w-[100px] h-[15px]" />
                                            <template v-else>
                                                <img :src="getTeamLogo('away', item)" style=" height: 15px; position: relative; width: 15px;" />
                                                <!-- away name -->
                                                <div 
                                                    class="valign-text-middle body"
                                                    :class="chckIsHomeId('away', item) ? 'asoton-villa' : 'arsenal-8'"
                                                >
                                                    {{ getTeamName('away', item) }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell-13">
                                    <div class="content-22 headline3">
                                        <div class="score-1 valign-text-middle score-8">    <!-- home score -->
                                            {{ getScore('home', item) }}
                                        </div>
                                        <div class="score-8 valign-text-middle">            <!-- away score -->
                                            {{ getScore('away', item) }}
                                        </div>
                                    </div>
                                </div>
                                <div class="cell-type5">
                                    <div class="content-15">
                                        <div v-if="chckIsFilteredWinLoseDraw(item) === 'win'" class="img_-matchup_h2-h_-tag_-win_new img_-matchup_h2-h_-tag_">
                                            <div class="win-3 valign-text-middle win-7 caption">WIN</div>
                                        </div>
                                        <div v-if="chckIsFilteredWinLoseDraw(item) === 'lose'" class="img_-matchup_h2-h_-tag_-lose_new img_-matchup_h2-h_-tag_">
                                            <div class="lose-1 valign-text-middle lose-3 caption">LOSE</div>
                                        </div>
                                        <div v-if="chckIsFilteredWinLoseDraw(item) === 'draw'" class="img_-matchup_h2-h_-tag_-drawn_new img_-matchup_h2-h_-tag_">
                                            <div class="drawn-2 valign-text-middle drawn-3 caption">DRAW</div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </template>
                    </div>
                </div>
            </div>
        </MatchUpH2hHeader>
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TMatchUpTeamInfoCommon } from '~/types/h2h';
import UtilDate from '~/utils/date';

const props = defineProps<{
    isLastMatches?: boolean;
}>();

const matchUpStore = useMatchUpStore();

const opt = reactive({
    sportSection: <TCommonSportSection> 'football',
    leagueId: <string> '',
    homeName: <string> '',
    homeLogo: <string> '',
    homeTeamId: <string> '',
    awayName: <string> '',
    awayLogo: <string> '',
    awayTeamId: <string> '',
});

const config = reactive({
    home: [],
    away: [],
    vs: [],
});

const filterOpt = reactive({
    selectedIdx: <number> 0,
    selectedTeamId: <string> '',
    selectedList: <TMatchUpTeamInfoCommon[]> [],
    selectedTagList: <boolean[]> [],
    isHome: <boolean> false,
    isThisLeague: <boolean> false,
});

const scoreOpt = reactive({
    win: <number> 0,
    draw: <number> 0,
    lose: <number> 0,
});

const pendingOpt = reactive({
    league: <boolean> true,
    team: <boolean> true,
});

const updateTotalValues = () => {
    scoreOpt.win = getTotalWin(filterOpt.selectedList);
    scoreOpt.draw = getTotalDraw(filterOpt.selectedList);
    scoreOpt.lose = getTotalLose(filterOpt.selectedList);
};

// watch filter options
watch(
    () => [ filterOpt.selectedIdx, filterOpt.isHome, filterOpt.isThisLeague, ],
    async (p) => {
        await nextTick();
        updateTotalValues();
    }
);

const setTeamIdViaOpts = (): string => {
    return (filterOpt.selectedIdx === 0) ? opt.homeTeamId : opt.awayTeamId;
};

const setListViaOpts = (): TMatchUpTeamInfoCommon[]  => {
    if (props.isLastMatches) {
        return (filterOpt.selectedIdx === 0) ? config.home : config.away;
    }
    return config.vs;
};

const clickSelection = (idx: number) => {
    filterOpt.selectedIdx = idx;
    filterOpt.selectedList = setListViaOpts();
    filterOpt.selectedTeamId = setTeamIdViaOpts();
    clickHome(false);
    clickThisLeague(false);
};

const clickHome = (value: boolean) => {
    if (value) {
        const prevList = [ ...filterOpt.selectedList, ];
        const teamId = setTeamIdViaOpts();
        filterOpt.selectedList = prevList.filter( item => item[5][0] === teamId );
    } else {
        filterOpt.selectedList = setListViaOpts();
    }
    sortLeagueTag(filterOpt.selectedList);
    filterOpt.isHome = value;
};

const clickThisLeague = (value: boolean) => {
    if (value) {
        const prevList = [ ...filterOpt.selectedList, ];
        filterOpt.selectedList = prevList.filter( item => item[1] === opt.leagueId );
    } else {
        filterOpt.selectedList = setListViaOpts();
    }
    sortLeagueTag(filterOpt.selectedList);
    filterOpt.isThisLeague = value;
};

const getSeason = (item: TMatchUpTeamInfoCommon) => {
    return matchUpStore.getH2hInfo(opt.sportSection, 'season_id', item);
};

const getCompetitionId = (item: TMatchUpTeamInfoCommon) => {
    return matchUpStore.getH2hInfo(opt.sportSection, 'competition_id', item)
};

const getLeagueTitle = (item: TMatchUpTeamInfoCommon): string => {
    const leagueId = matchUpStore.getH2hInfo(opt.sportSection, 'competiton_id', item);
    const leagueTitle = matchUpStore.getLeagueTitle(leagueId);
    return leagueTitle;
};

const getLeagueLogo = (item: TMatchUpTeamInfoCommon): string => {
    const leagueId = matchUpStore.getH2hInfo(opt.sportSection, 'competiton_id', item);
    return matchUpStore.getLeagueLogo(leagueId);
};

const getTime = (item: TMatchUpTeamInfoCommon): string => {
    const time = matchUpStore.getH2hInfo(opt.sportSection, 'time', item);
    const date = UtilDate.addMillisecond(time);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    return `${ day } ${ UtilDate.changeMonthNum2Str(month) }`;
};

const getYear = (item: TMatchUpTeamInfoCommon): string => {
    const time = matchUpStore.getH2hInfo(opt.sportSection, 'time', item);
    const date = UtilDate.addMillisecond(time);
    const year = date.getUTCFullYear();
    return `${ year }`;
};

const getTeamLogo = (prefix: TContentStoreHomeAwayPrefix, item: TMatchUpTeamInfoCommon): string => {
    const teamId = matchUpStore.getH2hInfo(opt.sportSection, `${ prefix }_id`, item);
    return matchUpStore.getTeamLogo(teamId);
};

const getTeamName = (prefix: TContentStoreHomeAwayPrefix, item: TMatchUpTeamInfoCommon): string => {
    const teamId = matchUpStore.getH2hInfo(opt.sportSection, `${ prefix }_id`, item);
    return matchUpStore.getTeamName(teamId);
};

const getScore = (prefix: TContentStoreHomeAwayPrefix, item: TMatchUpTeamInfoCommon) => {
    return matchUpStore.getH2hInfo(opt.sportSection, `${ prefix }_score`, item);
};

const getIsHomeWin = (item: TMatchUpTeamInfoCommon): 'win' | 'lose' | 'draw' => {
    return matchUpStore.getH2hInfo(opt.sportSection, 'is_home_win', item);
};

const chckIsFilteredWinLoseDraw = (item: TMatchUpTeamInfoCommon): 'win' | 'lose' | 'draw' => {
    const homeId = matchUpStore.getH2hInfo(opt.sportSection, 'home_id', item);
    if (homeId === filterOpt.selectedTeamId) {
        return getIsHomeWin(item);
    }
    const result = getIsHomeWin(item);
    if (result === 'win') return 'lose';
    if (result === 'lose') return 'win';
    return 'draw';
};

const chckIsHomeId = (prefix: TContentStoreHomeAwayPrefix, item: TMatchUpTeamInfoCommon): boolean => {
    return matchUpStore.getH2hInfo(opt.sportSection, `${ prefix }_id`, item) === filterOpt.selectedTeamId;
};

const getTotalWin = (targetList: TMatchUpTeamInfoCommon[]): number => {
    let winCnt = 0;
    for (const item of targetList) {
        const homeId = matchUpStore.getH2hInfo(opt.sportSection, 'home_id', item);
        const awayId = matchUpStore.getH2hInfo(opt.sportSection, 'away_id', item);
        if (homeId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'win') {
                winCnt++;
            }
        }
        if (awayId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'lose') {
                winCnt++;
            }
        }
    }
    return winCnt;
};

const getTotalDraw = (targetList: TMatchUpTeamInfoCommon[]): number => {
    let drawCnt = 0;
    for (const item of targetList) {
        const homeId = matchUpStore.getH2hInfo(opt.sportSection, 'home_id', item);
        const awayId = matchUpStore.getH2hInfo(opt.sportSection, 'away_id', item);
        if (homeId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'draw') {
                drawCnt++;
            }
        }
        if (awayId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'draw') {
                drawCnt++;
            }
        }
    }
    return drawCnt;
};

const getTotalLose = (targetList: TMatchUpTeamInfoCommon[]): number => {
    let loseCnt = 0;
    for (const item of targetList) {
        const homeId = matchUpStore.getH2hInfo(opt.sportSection, 'home_id', item);
        const awayId = matchUpStore.getH2hInfo(opt.sportSection, 'away_id', item);
        if (homeId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'lose') {
                loseCnt++;
            }
        }
        if (awayId === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'win') {
                loseCnt++;
            }
        }
    }
    return loseCnt;  
};

const sortLeagueTag = (list: TMatchUpTeamInfoCommon[]) => {
    const getDatePath = (item: TMatchUpTeamInfoCommon) => {
        const time = matchUpStore.getH2hInfo(opt.sportSection, 'time', item);
        return new Date(time);
    };
    list.forEach((item, idx) => {
        (item as any).push(false);
    });
    const groupedLeague = list.reduce((acc, match) => {
        if (!acc[getLeagueTitle(match)]) {
            acc[getLeagueTitle(match)] = [];
        }
        acc[getLeagueTitle(match)].push(match);
        return acc;
    }, {});
    const sortedLeague = Object.entries(groupedLeague).map((item) => {
        const [ lg_name, matches, ] = item;
        const matchesList = matches as any;
        matchesList.sort((a, b) => getDatePath(a).getTime() - getDatePath(b).getTime());
        matchesList.forEach((match, index) => {
            if (typeof match === 'object') {
                match['hasLeagueTag'] = (index === 0);
            } else {
                if (typeof match[ match.length - 1 ] === 'boolean') {
                    match[ match.length - 1 ] = (index === 0);
                } else {
                    match[ match.length ] = (index === 0);
                }
            }
        });
        return {
            lg_name,
            matches: matchesList,
        };
    });
    const finalList: any[] = [];
    filterOpt.selectedTagList = [];
    const testList: any[] = [];
    sortedLeague.map((item) => {
        finalList.push(...item.matches);
    });
    console.log('finalList: ', finalList);

    finalList.map((finalItem) => {
        let hasLeagueTag = false;
        if (typeof finalItem === 'object') {
            hasLeagueTag = finalItem['hasLeagueTag'];
        } else {
            hasLeagueTag = finalItem[ finalItem.length ];
        }
        filterOpt.selectedTagList.push(hasLeagueTag);
        testList.push(finalItem[1]);
    });
};

onMounted(async () => {
    await nextTick();
    // setting config & opt
    const {
        sportSection,
        homeName, homeLogo, homeTeamId,
        awayName, awayLogo, awayTeamId,
        leagueId,
    } = matchUpStore.getConfig();
    const {
        home, away, vs,
    } = matchUpStore.getConfigH2h();
    opt.sportSection = sportSection;
    opt.leagueId = leagueId;
    opt.homeName = homeName;
    opt.homeLogo = homeLogo;
    opt.homeTeamId = homeTeamId;
    opt.awayName = awayName;
    opt.awayLogo = awayLogo;
    opt.awayTeamId = awayTeamId;
    config.home = home;
    config.away = away;
    config.vs = vs;
    filterOpt.selectedTeamId = opt.homeTeamId;
    filterOpt.selectedList = setListViaOpts();
    updateTotalValues();
    // setting team & competition resource list
    let totalList: TMatchUpTeamInfoCommon[] = [];
    if (props.isLastMatches) {
        totalList = [ ...config.home, ...config.away, ...config.vs ];
    } else {
        totalList = [ ...config.vs ];
    }
    const prevTeamid = [
        ...totalList.map( item => matchUpStore.getH2hInfo(opt.sportSection, 'home_id', item) ),
        ...totalList.map( item => matchUpStore.getH2hInfo(opt.sportSection, 'away_id', item) ),
    ];
    const teamId = [ ...new Set(prevTeamid) ];
    console.log('teamId: ', teamId);
    const prevCompetitionId = [
        ...totalList.map( item => matchUpStore.getH2hInfo(opt.sportSection, 'competition_id', item) )
    ];
    const competitionId = [ ...new Set(prevCompetitionId) ];
    console.log('competitionId: ', competitionId);
    if (teamId.length) {
        await matchUpStore.mountTeam(teamId);
    }
    pendingOpt.team = false;
    if (competitionId.length) {
        await matchUpStore.mountLeague(competitionId);
    }
    pendingOpt.league = false;
    sortLeagueTag(filterOpt.selectedList);
});
</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';
@import '@/public/css/frmu95mobileu95matchup.css';

.flag_-circle_eng-h2h {
  background-image: url(../img/flag-circle-eng@2x.png);
  background-size: 100% 100%;
  height: 25px;
  position: relative;
  width: 25px;
}

.line-2-h2h {
  height: 21.06px;
  object-fit: cover;
  position: relative;
  width: 14.58px;
}

.win-7 {
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  padding-top: 4px;
  padding-bottom: 2px;
}

.lose-3 {
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  padding-top: 4px;
  padding-bottom: 2px;
}

.drawn-3 {
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  padding-top: 4px;
  padding-bottom: 2px;
}

</style>