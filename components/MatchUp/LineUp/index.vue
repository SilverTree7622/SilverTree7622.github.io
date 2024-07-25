<template>
    <div class="frmu95mobileu95matchup">
        <div class="frmu95mobileu95matchup-item-2" id="contents_-football_-matchup_-lineup">
            <div class="contents_-football_-2 contents_-football_-6">
                <div class="starting-lineups valign-text-middle headline3">STARTING LINEUPS</div>
            </div>
            <div class="contents_-football_-3 contents_-football_-6">
                <div class="matchup_-lineup_-home-team_-info">
                    <div class="matchup_-lineup_-home-team-strategy">
                        <img :src="teamOpt.homeLogo" class="w-[25px] h-[25px]" />
                        <div class="text-15 valign-text-middle headline3">
                            {{ formationOpt.home }}
                        </div>
                    </div>
                    <!-- <div class="matchup_-lineup_-home-team-manager">
                        <div class="overlap-group-4">
                            <div class="unai-emery valign-text-middle body">

                            </div>
                            <img class="non_-available_-player1_-cirle" src="/img/non-available-player1-cirle@2x.png"
                                alt="Non_Available_Player1_Cirle" />
                        </div>
                    </div> -->
                </div>
                
                <div class="contents_-football_-4 contents_-football_-6">
                    <div class="contents_-football_-5 contents_-football_-6 h-[820px]">
                        <img ref="$bg" class="absolute overflow-hidden" :src="props?.bg ?? '/img/Lineup_BG_Football.svg'" @load="onLoadBg"/>
                        <div class="contents_-football contents_">
                            <div
                                v-for="(playerLine, lineIdx) in fieldOpt.homeList"
                                class="match_-lineup_-player_-line"
                            >
                                <article 
                                    v-for="(player, line) in playerLine"
                                    class="match_-lineup_-player match_-lineup_"
                                >
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img 
                                                class="_-cirle-1"
                                                :src="player.logo ?? '/img/non-available-player1-cirle-1@2x.png'"
                                                :alt="UtilString.convertLong2ShortName(player.name)"
                                            />
                                            <div class="player_-grade_9 player_">
                                                <div class="text-3 valign-text-middle caption">
                                                    {{ player.rating }}
                                                </div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">
                                                {{ `#${ player.shirt_number }` }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">
                                        {{ UtilString.convertLong2ShortName(player.name) }}
                                    </div>
                                </article>
                            </div>
                        </div>
                        
                        <div class="contents_-football contents_">
                            <div
                                v-for="(playerLine, lineIdx) in fieldOpt.awayList"
                                class="match_-lineup_-player_-line-2 match_-lineup_-player_-line-3"
                            >
                                <article 
                                    v-for="(player, line) in playerLine"
                                    class="match_-lineup_-player match_-lineup_"
                                >
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img 
                                                class="_-cirle-1"
                                                :src="player.logo ?? '/img/non-available-player1-cirle-1@2x.png'"
                                                :alt="UtilString.convertLong2ShortName(player.name)"
                                            />
                                            <div class="player_-grade_9 player_">
                                                <div class="text-3 valign-text-middle caption">
                                                    {{ player.rating }}
                                                </div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">
                                                {{ `#${ player.shirt_number }` }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">
                                        {{ UtilString.convertLong2ShortName(player.name) }}
                                    </div>
                                </article>
                            </div>
                        </div>

                        <!-- <div class="contents_-football contents_">
                            <div class="match_-lineup_-player_-line-2 match_-lineup_-player_-line-3">
                                <article class="match_-lineup_-player1-1">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/erling-haland-cirle@2x.png"
                                                alt="Erling Haland_Cirle" />
                                            <div class="player_-grade_9 player_">
                                                <div class="text-3 valign-text-middle caption">9. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#29</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">E.Haland</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/darwin-nunez-cirle-1@2x.png"
                                                alt="Darwin Nunez_Cirle" />
                                            <div class="player_-grade_9 player_">
                                                <div class="text-3 valign-text-middle caption">9. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#7</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">D.Nunez</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/leandro-trossard-cirle-1@2x.png"
                                                alt="Leandro Trossard_Cirle" />
                                            <div class="player_-grade_9 player_">
                                                <div class="text-3 valign-text-middle caption">9. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#9</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">L.Trossard</div>
                                </article>
                            </div>
                            <div class="match_-lineup_-player_-line-2 match_-lineup_-player_-line-3">
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/dominic-solanke-cirle-1@2x.png"
                                                alt="Dominic Solanke_Cirle" />
                                            <div class="player_-grade_8 player_">
                                                <div class="text-3 valign-text-middle caption">8. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#19</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">D.Solanke</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/kai-havertz-cirle-1@2x.png"
                                                alt="Kai Havertz_Cirle" />
                                            <div class="player_-grade_7 player_">
                                                <div class="text-4 valign-text-middle caption">7. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#8</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">K.Havertz</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/heung-minson-cirle@2x.png"
                                                alt="Heung-MinSon_Cirle" />
                                            <div class="player_-grade_5 player_">
                                                <div class="text-5 valign-text-middle caption">5. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#4</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">H.Son</div>
                                </article>
                            </div>
                            <div class="match_-lineup_-player_-line">
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/bruno-fernandes-cirle-2@2x.png"
                                                alt="Bruno Fernandes_Cirle" />
                                            <div class="player_-grade_6 player_">
                                                <div class="text-3 valign-text-middle caption">6. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#41</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">B.Fernandes</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/carlton-morris-cirle-2@2x.png"
                                                alt="Carlton Morris_Cirle" />
                                            <div class="player_-grade_4 player_">
                                                <div class="text-34 valign-text-middle caption">4. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#2</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">C.Morris</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/non-available-player1-cirle-2@2x.png"
                                                alt="Non_Available_Player1_Cirle" />
                                            <div class="player_-grade_3 player_">
                                                <div class="text-35 valign-text-middle caption">3. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#6</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">B.Saka</div>
                                </article>
                                <article class="match_-lineup_-player match_-lineup_">
                                    <div class="match_-lineup_-player_-upper">
                                        <div class="overlap-group-2">
                                            <img class="_-cirle-1" src="/img/matheus-cunha-cirle-1@2x.png"
                                                alt="Matheus Cunha_Cirle" />
                                            <div class="player_-grade_1 player_">
                                                <div class="text-3 valign-text-middle caption">1. 8</div>
                                            </div>
                                            <div class="x35-22 valign-text-middle headline3">#11</div>
                                        </div>
                                    </div>
                                    <div class="b-saka valign-text-middle caption">M.Cunha</div>
                                </article>
                            </div>
                            <div class="match_-lineup_-player1 match_-lineup_">
                                <div class="match_-lineup_-player_-upper">
                                    <div class="overlap-group-2">
                                        <img class="_-cirle-1" src="/img/alexander-isak-cirle-1@2x.png"
                                            alt="Alexander Isak_Cirle" />
                                        <div class="player_-grade_2 player_">
                                            <div class="text-3 valign-text-middle caption">2. 8</div>
                                        </div>
                                        <div class="x35-22 valign-text-middle headline3">#41</div>
                                    </div>
                                </div>
                                <div class="b-saka valign-text-middle caption">A.Isak</div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="matchup_-lineup_-away-team_-info">
                    <div class="matchup_-lineup_-away-team-strategy">
                        <!-- <div class="arsenal-6"></div> -->
                        <img :src="teamOpt.awayLogo" class="w-[25px] h-[25px]" />
                        <div class="text-38 valign-text-middle headline3">
                            {{ formationOpt.away }}
                        </div>
                    </div>
                    <!-- <div class="matchup_-lineup_-away-team-manager">
                        <div class="overlap-group-5">
                            <div class="name-1 valign-text-middle name-2 body">
                            </div>
                            <img class="non_-available_-player1_-cirle" src="/img/non-available-player1-cirle-3@2x.png"
                                alt="Non_Available_Player1_Cirle" />
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <MatchUpLineUpBench
            v-if="benchOpt.isExist"
            class="mx-[10px]"
            :homeLogo="teamOpt.homeLogo"
            :homeName="teamOpt.homeName"
            :homeList="benchOpt.homeList"
            :awayLogo="teamOpt.awayLogo"
            :awayName="teamOpt.awayName"
            :awayList="benchOpt.awayList"
        />
    </div>
</template>

<script setup lang="ts">
import UtilString from '~/utils/string';
import type { TMatchUpLineUpPlayer } from '~/types/FootBall/lineUp';
import type { TMatchUpLineUpSport } from '~/types/lineUp';

const props = defineProps<{
    bg?: string;
}>();

const matchUpStore = useMatchUpStore();

const teamOpt = reactive({
    homeTeamId: <string> '',
    homeName: <string> '',
    homeLogo: <string> '',
    awayTeamId: <string> '',
    awayName: <string> '',
    awayLogo: <string> '',
});

const lineOpt = reactive({
    home: <TMatchUpLineUpPlayer[]> [],
    away: <TMatchUpLineUpPlayer[]> [],
});

const formationOpt = reactive({
    home: <TMatchUpLineUpSport['home_formation']> '',
    away: <TMatchUpLineUpSport['away_formation']> '',
});

const fieldOpt = reactive({
    homeList: <TMatchUpLineUpPlayer[][]> [],
    awayList: <TMatchUpLineUpPlayer[][]> [],
});

const benchOpt = reactive({
    isExist: <boolean> false,
    homeList: <TMatchUpLineUpPlayer[]> [],
    awayList: <TMatchUpLineUpPlayer[]> [],
});

const posOpt = reactive({
    width: <number> 0,
    height: <number> 0,
});

const $bg = ref();

const onLoadBg = () => {
    if (!$bg.value) return;
    posOpt.width = $bg.value.width;
    posOpt.height = $bg.value.height;
};

const setLineUp = (playerList: TMatchUpLineUpPlayer[], isAway: boolean = false) => {
    const posYTypes = [ ...new Set(playerList.map( player => player.y )) ].sort();
    const resList: any[] = [];
    posYTypes.map( () => resList.push([]) );
    playerList.map((player) => {
        const idx = posYTypes.findIndex( yType => yType === player.y );
        resList[idx].push(player);
    });
    if (isAway) {
        resList.forEach( player => player.reverse() );
        resList.reverse();
    }
    return resList;
};

const setRatingColor = (rating: string): string => {
    return '';
};

onMounted(async () => {
    await nextTick();
    const {
        away_formation,
        home_formation,
        lineup,
    } = matchUpStore.getConfigLineUp();
    const {
        homeTeamId, homeName, homeLogo,
        awayTeamId, awayName, awayLogo,
    } = matchUpStore.getConfig();
    lineOpt.home = lineup.home;
    lineOpt.away = lineup.away;
    formationOpt.home = home_formation;
    formationOpt.away = away_formation;
    teamOpt.homeTeamId = homeTeamId;
    teamOpt.homeName = homeName;
    teamOpt.awayTeamId = awayTeamId;
    teamOpt.awayName = awayName;
    if (!homeLogo || !awayLogo) {
        await matchUpStore.mountTeam([ homeTeamId ]);
        teamOpt.homeLogo = matchUpStore.getTeamLogo(homeTeamId);
        teamOpt.awayLogo = matchUpStore.getTeamLogo(awayTeamId);
    } else {
        teamOpt.homeLogo = homeLogo;
        teamOpt.awayLogo = awayLogo;
    }
    const tmpFieldOptHomeList: TMatchUpLineUpPlayer[] = [];
    const tmpFieldOptAwayList: TMatchUpLineUpPlayer[] = [];
    lineup.home.map((player) => {
        if (player.x === 0 && player.y === 0) {
            benchOpt.homeList.push(player);
        } else {
            tmpFieldOptHomeList.push(player);
        }
    });
    lineup.away.map((player) => {
        if (player.x === 0 && player.y === 0) {
            benchOpt.awayList.push(player);
        } else {
            tmpFieldOptAwayList.push(player);
        }
    });
    // position x, y 0 means on the bench
    if (benchOpt.homeList.length || benchOpt.awayList.length) {
        benchOpt.isExist = true;
    } else {
        benchOpt.isExist = false;
    }
    fieldOpt.homeList = setLineUp(tmpFieldOptHomeList);
    fieldOpt.awayList = setLineUp(tmpFieldOptAwayList, true);
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';
@import '@/public/css/frmu95mobileu95matchup.css';
</style>