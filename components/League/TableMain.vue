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