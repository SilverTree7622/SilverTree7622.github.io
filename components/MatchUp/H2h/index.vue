<template>
    <div class="frmu95mobileu95matchup">
        <div class="frmu95mobileu95matchup-item-2">
            <MatchUpH2hTeamSelection
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
                        :title="'Home'"
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
                            {{ getTotalWin(filterOpt.selectedList) }}
                        </div>
                        <div class="win-2 valign-text-middle win-7 headline2">WIN</div>
                    </div>
                    <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 27" />
                    <div class="frame-527">
                        <div class="number-18 valign-text-middle leaguetitle">
                            {{ getTotalDraw(filterOpt.selectedList) }}
                        </div>
                        <div class="drawn-1 valign-text-middle drawn-3 headline2">DRAW</div>
                    </div>
                    <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 28" />
                    <div class="frame-528">
                        <div class="number-19 valign-text-middle leaguetitle">
                            {{ getTotalLose(filterOpt.selectedList) }}
                        </div>
                        <div class="lose valign-text-middle lose-3 headline2">LOSE</div>
                    </div>
                </div>
                <div class="table-8 table-9">
                    <template v-for="(item, idx) in config.home">
                        <CommonContentHeadDate
                            :idx="idx"
                            :title="getLeagueTitle(item)"
                            :hasLeagueTag="item.hasLeagueTag"
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
import { GetSportSectionUpperCase } from '~/types/Common/sport';
import type { TMatchUpTeamInfo } from '~/types/FootBall/h2h';
import type { TMatchUpH2HSport } from '~/types/h2h';
import UtilDate from '~/utils/date';

const contentStore = useContentStore();
const matchUpStore = useMatchUpStore();
const filterStore = useFilterStore();

type TH2hTeamRes = {
    "ai_competition_id": string;
    "ai_country_id": string;
    "ai_id": string;
    "ai_index": number;
    "ai_logo_img": string;
    "ai_name_eng": string;
    "ai_short_name": string;
};

type TH2hLeaugeRes = {
    "ai_id": string;
    "ai_type": number;
    "category_name": string;
    "catetory_logo": string;
    "competition_logo": string;
    "competition_name": string;
    "competition_short_name": string;
};

type TH2hSelectedTeam = TMatchUpTeamInfo & {
    hasLeagueTag: boolean;
};

const opt = reactive({
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
    selectedList: <TH2hSelectedTeam[]> [],
    isHome: <boolean> true,
    isThisLeague: <boolean> false,
});

const resourceOpt = reactive({
    teamList: <TH2hTeamRes[]> [],
    leagueList: <TH2hLeaugeRes[]> [],
});

const pendingOpt = reactive({
    league: <boolean> true,
    team: <boolean> true,
});

const clickSelection = (idx: number) => {
    if (idx === 0) {
        filterOpt.isHome = true;
    } else {
        filterOpt.isHome = false;
    }
    filterOpt.selectedIdx = idx;
    filterOpt.selectedList = filterOpt.isHome ? config.home : config.away;
};

const clickHome = (value: boolean) => {
    clickSelection(value ? 0 : 1);
};

const clickThisLeague = (value: boolean) => {
    filterOpt.isThisLeague = value;
};

const getLeagueTitle = (item: TMatchUpTeamInfo): string => {
    return resourceOpt.leagueList.find( item => item.ai_id === item[1] )?.competition_name ?? '';
};

const getLeagueLogo = (item: TMatchUpTeamInfo): string => {
    return resourceOpt.leagueList.find( item => item.ai_id === item[1] )?.competition_logo ?? '';
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
    return resourceOpt.teamList.find( item => item.ai_id === teamId )?.ai_logo_img ?? '';
};

const getTeamName = (teamId: string): string => {
    return resourceOpt.teamList.find( item => item.ai_id === teamId )?.ai_name_eng ?? '';
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

const sortLeagueTag = (list: TMatchUpTeamInfo): TH2hSelectedTeam => {
    // const getDatePath = customPath?.date ?? ((item) => { return item.date });
    // const getLeaguePath = customPath?.league ?? ((item) => { return item.lg_name });
    // list.map((item) => {
    //     item.hasLeagueTag = false;
    // });
    // const groupedLeague = list.reduce((acc, match) => {
    //     if (!acc[getLeaguePath(match)]) {
    //         acc[getLeaguePath(match)] = [];
    //     }
    //     acc[getLeaguePath(match)].push(match);
    //     return acc;
    // }, {});
    // const sortedLeague = Object.entries(groupedLeague).map((item) => {
    //     const [ lg_name, matches, ] = item;
    //     // const rlg_name = getLeaguePath(matches);
    //     const matchesList = matches as any;
    //     matchesList.sort((a, b) => getDatePath(a).getTime() - getDatePath(b).getTime());
    //     matchesList.forEach((match, index) => {
    //         match.hasLeagueTag = index === 0;
    //     });
    //     return {
    //         lg_name,
    //         matches: matchesList,
    //     };
    // });
    // const finalList: any[] = [];
    // // const sortedLeagueViaTime = sortedLeague.sort((a, b) => {
    // //     return getDatePath(a.matches[0]).getTime() - getDatePath(b.matches[0]).getTime();
    // // })
    // // sortedLeagueViaTime.map((item) => {finalList.push(...item.matches); });
    // sortedLeague.map((item) => {
    //     finalList.push(...item.matches);
    // });
};

onMounted(async () => {
    await nextTick();
    const {
        sportSection,
        homeName, homeLogo, homeTeamId,
        awayName, awayLogo, awayTeamId,
    } = matchUpStore.getConfig();
    const {
        home, away, vs,
    } = matchUpStore.getConfigH2h();
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
    filterOpt.selectedList = sortLeagueTag(config.home);

    // filterOpt.selectedList = filterStore.sortOnlyLeagueTag(config.home, {
    //     date: (item) => {
    //         return new Date(item[3]);
    //     },
    // });
    
    const totalList = [ ...config.home, ...config.away, ...config.vs ];
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
        try {
            const res = await useApiFetch(
                `GetTeam`,
                { method: 'POST', },
                {
                    teamid,
                    sports: GetSportSectionUpperCase(sportSection),
                }
            );
            const data = (res.data as any)['data'] ?? {};
            resourceOpt.teamList = data['data'];
            pendingOpt.team = false;
        }
        catch (e) {
            console.warn('e from get team api: ', e);
        }
    } else {
        pendingOpt.team = false;
    }
    if (competitionid.length) {
        try {
            const res = await useApiFetch(
                `GetCompetition`,
                { method: 'POST', },
                {
                    competitionid,
                    sports: GetSportSectionUpperCase(sportSection),
                }
            );
            const data = (res.data as any)['data'] ?? {};
            resourceOpt.leagueList = data['data'];
            pendingOpt.league = false;
            console.log('resourceOpt.leagueList: ', resourceOpt.leagueList);
        }
        catch (e) {
            console.warn('e from get team api: ', e);
        }
    } else {
        pendingOpt.league = false;
    }
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