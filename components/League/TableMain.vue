<template>
    <div v-if="!opt.isPending" class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="frmu95mobileu95league w-full">
            <div class="contents_-football">
                <div class="frame-315">
                    <article class="row row-43">
                        <div class="cell cell-24 !bg-transparent">
                            <div class="content-11">
                                <div class="h valign-text-middle h-8 body2">#</div>
                            </div>
                        </div>
                        <div class="cell-1 cell-24 !bg-transparent">
                            <div class="content-12">
                                <div class="valign-text-middle h-8 body2">TEAM</div>
                            </div>
                        </div>
                        <div class="cell-2 cell-24 !bg-transparent">
                            <div class="content">
                                <div class="valign-text-middle h-8 body2">P</div>
                            </div>
                        </div>
                        <div class="cell-3 cell-24 !bg-transparent">
                            <div class="content-13">
                                <div class="a valign-text-middle a-104 body2">W</div>
                            </div>
                        </div>
                        <div class="cell-2 cell-24 !bg-transparent">
                            <div class="content">
                                <div class="valign-text-middle h-8 body2">D</div>
                            </div>
                        </div>
                        <div class="cell-2 cell-24 !bg-transparent">
                            <div class="content">
                                <div class="valign-text-middle h-8 body2">L</div>
                            </div>
                        </div>
                        <div class="cell-3 cell-24 !bg-transparent">
                            <div class="content">
                                <div class="valign-text-middle h-8 body2">GOALS</div>
                            </div>
                        </div>
                        <div class="cell-3 cell-24 !bg-transparent">
                            <div class="content-14">
                                <div class="valign-text-middle h-8 body2">±</div>
                            </div>
                        </div>
                        <div class="cell-3 cell-24 !bg-transparent">
                            <div class="content">
                                <div class="valign-text-middle h-8 body2">PTS</div>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="table-1 table-3">
                    <article v-for="(item, idx) in config.list" class="table-1-item">
                        <div class="cell cell-24">
                            <div class="content-1">
                                <div class="a-104 valign-text-middle body2">{{ idx + 1 }}</div>
                            </div>
                        </div>
                        <div class="cell-4 cell-24">
                            <div class="content-2">
                                <USkeleton v-if="opt.isResourcePending" class="w-[15px] h-[15px] relative rounded-full" />
                                <USkeleton v-if="opt.isResourcePending" class="w-[100px] h-[15px]" />
                                <template v-else>
                                    <img class="arsenal-3" :src="leagueStore.getTeamLogo(item.team_id)"/>
                                    <div class="b valign-text-middle b-20 body">
                                        {{ leagueStore.getTeamName(item.team_id) }}
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="cell-17 cell-24">
                            <div class="content-1">
                                <div class="a-104 valign-text-middle body2">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'total', 'home_total', 'away_total' ]) ] }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-5 cell-24">
                            <div class="content-1">
                                <div class="a-104 valign-text-middle body2">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'won', 'home_won', 'away_won' ]) ] }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-6 cell-24">
                            <div class="content-1">
                                <div class="a-104 valign-text-middle body2">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'draw', 'home_draw', 'away_draw' ]) ] }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-7 cell-24">
                            <div class="content-1">
                                <div class="a-104 valign-text-middle body2">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'loss', 'home_loss', 'away_loss' ]) ] }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-8 cell-24">
                            <div class="content-1">
                                <div class="text-2-1 valign-text-middle body2">
                                    {{ getGoals(leagueStore.getTableConfig().selectedIdx, item) }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-18 cell-24">
                            <div class="content-1">
                                <div class="x75-74 valign-text-middle body2">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'goal_diff', 'home_goal_diff', 'away_goal_diff' ]) ] }}
                                </div>
                            </div>
                        </div>
                        <div class="cell-9 cell-24">
                            <div class="content-1">
                                <div class="number valign-text-middle number-43 headline3">
                                    {{ item[ getPrefix(leagueStore.getTableConfig().selectedIdx, [ 'points', 'home_points', 'away_points' ]) ] }}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- <div class="table table-3 mt-4">
                    <article class="row-43">
                        <div class="cell-19 cell-24">
                            <div class="content-4">
                                <div class="text-24 body2">#</div>
                            </div>
                        </div>
                        <div class="cell-1 cell-24">
                            <div class="content-4">
                                <div class="x123-22 body2">PLAYERS</div>
                            </div>
                        </div>
                        <div class="cell-20 cell-24">
                            <div class="content-4">
                                <div class="x123-22 body2">TEAM</div>
                            </div>
                        </div>
                        <div class="cell-11 cell-24">
                            <div class="content-4">
                                <div class="x123-22 body2">GOALS</div>
                            </div>
                        </div>
                        <div class="cell-11 cell-24">
                            <div class="content-4">
                                <div class="x123-22 body2">ASSISTS</div>
                            </div>
                        </div>
                    </article>

                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="number-1 number-43 body2">1</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="erling-haland"></div>
                                <div class="erling-haland-2 valign-text-middle erling-haland-22 body">Erling Haland
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Manchester City</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-2 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-3 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">2</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <img class="non_-available_" src="/img/non-available-player@2x.png"
                                    alt="Non_Available_Player" />
                                <div class="erling-haland-3 valign-text-middle erling-haland-22 body">Cole Palmer</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Chelsea</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-4 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-5 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">3</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="alexander-isak"></div>
                                <div class="erling-haland-4 valign-text-middle erling-haland-22 body">Alexander Isak
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Newcastle</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-6 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-7 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">4</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="ollie-watkins"></div>
                                <div class="erling-haland-5 valign-text-middle erling-haland-22 body">Ollie Watkins
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Aston Villa</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-8 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-9 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">5</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="dominic-solanke"></div>
                                <div class="erling-haland-6 valign-text-middle erling-haland-22 body">Dominic Solanke
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Bournemouth</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-10 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-11 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">6</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="mohamed-salah"></div>
                                <div class="erling-haland-7 valign-text-middle erling-haland-22 body">Mohamed Salah
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Liverpool</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-12 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-13 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">7</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="phil-foden"></div>
                                <div class="erling-haland-8 valign-text-middle erling-haland-22 body">Phil Foden</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Manchester City</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-14 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-15 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">8</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="heung-min-son"></div>
                                <div class="erling-haland-9 valign-text-middle erling-haland-22 body">Heung-Min Son
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Tottenham Hotspur</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-16 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-17 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">9</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="jarrod-bowen"></div>
                                <div class="erling-haland-10 valign-text-middle erling-haland-22 body">Jarrod Bowen
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">West Ham</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-18 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-19 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">10</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="bukayo-saka"></div>
                                <div class="erling-haland-11 valign-text-middle erling-haland-22 body">Bukayo Saka</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Arsenal</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-20 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-21 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">11</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="chris-wood"></div>
                                <div class="erling-haland-12 valign-text-middle erling-haland-22 body">Chris Wood</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Nottingham Forest</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-22 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-23 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="number-24 number-43 body2">12</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <img class="non_-available_" src="/img/non-available-player@2x.png"
                                    alt="Non_Available_Player" />
                                <div class="erling-haland-13 valign-text-middle erling-haland-22 body">Hee-chan Hwang
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Wolverhampton</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-25 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-26 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">13</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="jean-philippe-mateta"></div>
                                <div class="erling-haland-14 valign-text-middle erling-haland-22 body">Jean-Philippe
                                    Mateta</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Crystal Palace</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-27 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-28 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">14</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="matheus-cunha"></div>
                                <div class="erling-haland-15 valign-text-middle erling-haland-22 body">Matheus Cunha
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city-5 valign-text-middle body">Wolverhampton</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-29 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-30 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">15</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="darwin-nunez"></div>
                                <div class="erling-haland-16 valign-text-middle erling-haland-22 body">Darwin Nunez
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Liverpool</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-31 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-32 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">16</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="leandro-trossard"></div>
                                <div class="erling-haland-17 valign-text-middle erling-haland-22 body">Leandro Trossard
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Arsenal</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-33 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-34 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">17</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="bruno-fernandes"></div>
                                <div class="erling-haland-18 valign-text-middle erling-haland-22 body">Bruno Fernandes
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Manchester United</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-35 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-36 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">18</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="carlton-morris"></div>
                                <div class="erling-haland-19 valign-text-middle erling-haland-22 body">Carlton Morris
                                </div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Luton Town</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-37 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-38 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">19</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <img class="non_-available_" src="/img/non-available-player@2x.png"
                                    alt="Non_Available_Player" />
                                <div class="erling-haland-20 valign-text-middle erling-haland-22 body">Diogo Jota</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Liverpool</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-39 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-40 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                    <article class="row-43">
                        <div class="cell-12 cell-24">
                            <div class="content-5">
                                <div class="x123-22 body2">20</div>
                            </div>
                        </div>
                        <div class="cell-13 cell-24">
                            <div class="content-6">
                                <div class="kai-havertz"></div>
                                <div class="erling-haland-21 valign-text-middle erling-haland-22 body">Kai Havertz</div>
                            </div>
                        </div>
                        <div class="cell-14 cell-24">
                            <div class="content-7">
                                <div class="manchester-city valign-text-middle body">Arsenal</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-41 number-43 body2">123</div>
                            </div>
                        </div>
                        <div class="cell-15 cell-24">
                            <div class="content-5">
                                <div class="number-42 number-43 body2">123</div>
                            </div>
                        </div>
                    </article>
                </div> -->
                <div class="contents_-bottom-bg"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TLeagueTableTableRow } from '~/types/league';

const leagueStore = useLeagueStore();

const opt = reactive({
    isPending: <boolean> true,
    isResourcePending: <boolean> true,
});

const config = reactive({
    list: <TLeagueTableTableRow[]> [],
});

const getPrefix = (selectedIdx: number, prefixList: string[]): string => {
    return prefixList[selectedIdx];
};

const getGoals = (selectedIdx: number, item: TLeagueTableTableRow): string => {
    const plusGoal = item[ getPrefix(selectedIdx, [ 'goals', 'home_goals', 'away_goals' ]) ];
    const minusGoal = plusGoal - item[ getPrefix(selectedIdx, [ 'goal_diff', 'home_goal_diff', 'away_goal_diff' ]) ];
    return `${ plusGoal }-${ minusGoal }`;
};

onMounted(async () => {
    opt.isPending = true;
    opt.isResourcePending = true;
    await nextTick();
    await leagueStore.onMountedTable(() => {

    });
    const {
        list
    } = leagueStore.getTableConfig();
    config.list = list;
    opt.isPending = false;

    const teamIdList = config.list.map( item => item.team_id );
    await leagueStore.mountTeam(teamIdList);
    opt.isResourcePending = false;
});
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95league.css';
</style>