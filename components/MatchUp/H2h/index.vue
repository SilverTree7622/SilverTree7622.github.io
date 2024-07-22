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
                        <div class="number-17 valign-text-middle leaguetitle">14</div>
                        <div class="win-2 valign-text-middle win-7 headline2">WIN</div>
                    </div>
                    <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 27" />
                    <div class="frame-527">
                        <div class="number-18 valign-text-middle leaguetitle">1</div>
                        <div class="drawn-1 valign-text-middle drawn-3 headline2">DRAWN</div>
                    </div>
                    <img class="line-2-h2h" src="/img/line-27@2x.png" alt="Line 28" />
                    <div class="frame-528">
                        <div class="number-19 valign-text-middle leaguetitle">5</div>
                        <div class="lose valign-text-middle lose-3 headline2">LOSE</div>
                    </div>
                </div>
                <div class="table-5 table-9">
                    <div class="row-27 row-35">
                        <div class="cell-32">
                            <div class="content-21">
                                <div class="flag_-circle_eng-h2h"></div>
                                <div class="ex valign-text-middle body">EnglandL English Premier :League</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-8 table-9">
                    <article class="row-28 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time body2">15 APRIL<br />2024</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="asoton-villa valign-text-middle body">Asoton Villa</div>
                                </div>
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="arsenal-8 valign-text-middle body">Arsenal</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-22 headline3">
                                <div class="score-1 valign-text-middle score-8">2</div>
                                <div class="score-8 valign-text-middle">0</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-win_new img_-matchup_h2-h_-tag_">
                                    <div class="win-3 valign-text-middle win-7 caption">WIN</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-29 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time-7 body2">10 DEC<br />2023</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="asoton-villa-1 valign-text-middle asoton-villa-7 body">Asoton Villa
                                    </div>
                                </div>
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="arsenal-9 valign-text-middle body">Arsenal</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-2 score-8">1</div>
                                <div class="score-8">2</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-lose_new img_-matchup_h2-h_-tag_">
                                    <div class="lose-1 valign-text-middle lose-3 caption">LOSE</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-30 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time-7 body2">18 FEB<br />2023</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="asoton-villa-2 valign-text-middle asoton-villa-7 body">Arsenal</div>
                                </div>
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="arsenal-10 valign-text-middle body">Asoton Villa</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-3 score-8">1</div>
                                <div class="score-8">3</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-win_new img_-matchup_h2-h_-tag_">
                                    <div class="win-4 valign-text-middle win-7 caption">WIN</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-31 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time-7 body2">01 SEP<br />2022</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="asoton-villa-3 valign-text-middle asoton-villa-7 body">Asoton Villa
                                    </div>
                                </div>
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="arsenal-11 valign-text-middle body">Arsenal</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-4 score-8">3</div>
                                <div class="score-8">0</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-win_new img_-matchup_h2-h_-tag_">
                                    <div class="win-5 valign-text-middle win-7 caption">WIN</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-32 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time-7 body2">19 MAR<br />2022</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="asoton-villa-4 valign-text-middle asoton-villa-7 body">Arsenal</div>
                                </div>
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="arsenal-12 valign-text-middle body">Asoton Villa</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-5 score-8">0</div>
                                <div class="score-8">4</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-win_new img_-matchup_h2-h_-tag_">
                                    <div class="win-6 valign-text-middle win-7 caption">WIN</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-33 row-35">
                        <div class="cell-13">
                            <div class="content-13">
                                <div class="time-time-7 body2">23 OCT<br />2021</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="asoton-villa-5 valign-text-middle asoton-villa-7 body">Asoton Villa
                                    </div>
                                </div>
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="arsenal-13 valign-text-middle body">Arsenal</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-6 score-8">0</div>
                                <div class="score-8">5</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-lose_new img_-matchup_h2-h_-tag_">
                                    <div class="lose-2 valign-text-middle lose-3 caption">LOSE</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row-34 row-35">
                        <div class="cell-33">
                            <div class="content-23">
                                <div class="time-time-7 body2">06 FEB<br />2021</div>
                            </div>
                        </div>
                        <div class="cell-14">
                            <div class="content-14">
                                <div class="frame-41">
                                    <div class="arsenal-1"></div>
                                    <div class="asoton-villa-6 valign-text-middle asoton-villa-7 body">Arsenal</div>
                                </div>
                                <div class="frame-41">
                                    <div class="aston-villa-4"></div>
                                    <div class="arsenal-14 valign-text-middle body">Asoton Villa</div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-13">
                            <div class="content-16 headline3">
                                <div class="score-7 score-8">2</div>
                                <div class="score-8">2</div>
                            </div>
                        </div>
                        <div class="cell-type5">
                            <div class="content-15">
                                <div class="img_-matchup_h2-h_-tag_-drawn_new img_-matchup_h2-h_-tag_">
                                    <div class="drawn-2 valign-text-middle drawn-3 caption">DRAWN</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TMatchUpH2HSport } from '~/types/h2h';

const matchUpStore = useMatchUpStore();

const opt = reactive({
    homeName: <string> '',
    homeLogo: <string> '',
    awayName: <string> '',
    awayLogo: <string> '',
});

const config = reactive<TMatchUpH2HSport['history']>({
    home: [],
    away: [],
    vs: [],
});

const filterOpt = reactive({
    selectedIdx: <number> 0,
    isHome: <boolean> true,
    isThisLeague: <boolean> false,
});

const clickSelection = (idx: number) => {
    if (idx === 0) {
        filterOpt.isHome = true;
    } else {
        filterOpt.isHome = false;
    }
    filterOpt.selectedIdx = idx;
};

const clickHome = (value: boolean) => {
    clickSelection(value ? 0 : 1);
};

const clickThisLeague = (value: boolean) => {
    filterOpt.isThisLeague = value;
};

onMounted(async () => {
    await nextTick();
    const {
        homeName, homeLogo, awayName, awayLogo,
    } = matchUpStore.getConfig();
    const {
        home, away, vs,
    } = matchUpStore.getConfigH2h();
    opt.homeName = homeName;
    opt.homeLogo = homeLogo;
    opt.awayName = awayName;
    opt.awayLogo = awayLogo;
    config.home = home;
    config.away = away;
    config.vs = vs;
    console.log('opt, config: ', opt, config);
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