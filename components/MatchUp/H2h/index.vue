<template>
    <div class="frmu95mobileu95matchup">
        <div class="frmu95mobileu95matchup-item-2">
            <MatchUpH2hTeamSelection
                v-if="props.isLastMatches"
                :homeName="opt.homeName"
                :homeLogo="opt.homeLogo"
                :awayName="opt.awayName"
                :awayLogo="opt.awayLogo"
                :isSelectedIdx="filterOpt.selectedIdx"
                class="mt-2"
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
                            :season="item[9][0]"
                            :id="item[1]"
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
                                    <div class="frame-41">
                                        <USkeleton v-if="pendingOpt.team" class="w-[15px] h-[15px] relative rounded-full" />
                                        <USkeleton v-if="pendingOpt.team" class="w-[100px] h-[15px]" />
                                        <template v-else>
                                            <img :src="getTeamLogo(item[5][0])" style=" height: 15px; position: relative; width: 15px;" />
                                            <!-- home name -->
                                            <div
                                                class="valign-text-middle body"
                                                :class="chckIsHomeId(item[5][0]) ? 'asoton-villa' : 'arsenal-8'"
                                            >
                                                {{ getTeamName(item[5][0]) }}
                                            </div>
                                        </template>
                                    </div>
                                    <div class="frame-41">
                                        <USkeleton v-if="pendingOpt.team" class="w-[15px] h-[15px] relative rounded-full" />
                                        <USkeleton v-if="pendingOpt.team" class="w-[100px] h-[15px]" />
                                        <template v-else>
                                            <img :src="getTeamLogo(item[6][0])" style=" height: 15px; position: relative; width: 15px;" />
                                            <!-- away name -->
                                            <div 
                                                class="valign-text-middle body"
                                                :class="chckIsHomeId(item[6][0]) ? 'asoton-villa' : 'arsenal-8'"
                                            >
                                                {{ getTeamName(item[6][0]) }}
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="cell-13">
                                <div class="content-22 headline3">
                                    <div class="score-1 valign-text-middle score-8">    <!-- home score -->
                                        {{ item[5][2] }}
                                    </div>
                                    <div class="score-8 valign-text-middle">            <!-- away score -->
                                        {{ item[6][2] }}
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
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TMatchUpTeamInfo } from '~/types/FootBall/h2h';
import type { TMatchUpH2HSport } from '~/types/h2h';
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

const config = reactive<TMatchUpH2HSport['history']>({
    home: [],
    away: [],
    vs: [],
});

const filterOpt = reactive({
    selectedIdx: <number> 0,
    selectedTeamId: <string> '',
    selectedList: <TMatchUpTeamInfo[]> [],
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

const setListViaOpts = (): TMatchUpTeamInfo[]  => {
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

const getLeagueTitle = (item: TMatchUpTeamInfo): string => {
    return matchUpStore.getLeagueTitle(item[1]);
};

const getLeagueLogo = (item: TMatchUpTeamInfo): string => {
    return matchUpStore.getLeagueLogo(item[1]);
};

const getTime = (item: TMatchUpTeamInfo): string => {
    const date = UtilDate.addMillisecond(item[3]);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    return `${ day } ${ UtilDate.changeMonthNum2Str(month) }`;
};

const getYear = (item: TMatchUpTeamInfo): string => {
    const date = UtilDate.addMillisecond(item[3]);
    const year = date.getUTCFullYear();
    return `${ year }`;
};

const getTeamLogo = (teamId: string): string => {
    return matchUpStore.getTeamLogo(teamId);
};

const getTeamName = (teamId: string): string => {
    return matchUpStore.getTeamName(teamId);
};

const getIsHomeWin = (item: TMatchUpTeamInfo): 'win' | 'lose' | 'draw' => {
    if (item[5][2] > item[6][2]) return 'win';
    if (item[5][2] < item[6][2]) return 'lose';
    return 'draw';
};

const chckIsFilteredWinLoseDraw = (item: TMatchUpTeamInfo): 'win' | 'lose' | 'draw' => {
    if (item[5][0] === filterOpt.selectedTeamId) {
        return getIsHomeWin(item);
    }
    const result = getIsHomeWin(item);
    if (result === 'win') return 'lose';
    if (result === 'lose') return 'win';
    return 'draw';
};

const chckIsHomeId = (id: string): boolean => {
    return id === filterOpt.selectedTeamId;
};

const getTotalWin = (targetList: TMatchUpTeamInfo[]): number => {
    let winCnt = 0;
    for (const item of targetList) {
        if (item[5][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'win') {
                winCnt++;
            }
        }
        if (item[6][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'lose') {
                winCnt++;
            }
        }
    }
    return winCnt;
};

const getTotalDraw = (targetList: TMatchUpTeamInfo[]): number => {
    let drawCnt = 0;
    for (const item of targetList) {
        if (item[5][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'draw') {
                drawCnt++;
            }
        }
        if (item[6][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'draw') {
                drawCnt++;
            }
        }
    }
    return drawCnt;
};

const getTotalLose = (targetList: TMatchUpTeamInfo[]): number => {
    let loseCnt = 0;
    for (const item of targetList) {
        if (item[5][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'lose') {
                loseCnt++;
            }
        }
        if (item[6][0] === filterOpt.selectedTeamId) {
            if (getIsHomeWin(item) === 'win') {
                loseCnt++;
            }
        }
    }
    return loseCnt;  
};

const sortLeagueTag = (list: TMatchUpTeamInfo[]) => {
    const getDatePath = (item: TMatchUpTeamInfo) => {
        return new Date(item[3]);
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
            match[10] = (index === 0);
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
    finalList.map((finalItem) => {
        filterOpt.selectedTagList.push(finalItem[10] ?? false);
        testList.push(finalItem[1]);
    });
};

onMounted(async () => {
    await nextTick();
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
    sortLeagueTag(filterOpt.selectedList);
    updateTotalValues();

    let totalList: TMatchUpTeamInfo[] = [];
    if (props.isLastMatches) {
        totalList = [ ...config.home, ...config.away, ...config.vs ];
    } else {
        totalList = [ ...config.vs ];
    }
    const prevTeamid = [
        ...totalList.map( item => item[5][0] ),
        ...totalList.map( item => item[6][0] ),
    ];
    const teamid = [ ...new Set(prevTeamid) ];
    const prevCompetitionid = [
        ...totalList.map( item => item[1] )
    ];
    const competitionid = [ ...new Set(prevCompetitionid) ];
    if (teamid.length) {
        await matchUpStore.mountTeam(teamid);
    }
    pendingOpt.team = false;
    if (competitionid.length) {
        await matchUpStore.mountLeague(competitionid);
    }
    pendingOpt.league = false;
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