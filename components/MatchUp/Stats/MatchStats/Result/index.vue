<template>
    <div class="div-stats-result">
        <!-- <div class="flex flex-row mb-2">
            <MatchUpH2hFilter
                :title="'Match'"
                :isChecked="filterOpt.idx === 0"
                class="mr-2"
                @toggle="(value: boolean) => { value && toggleFilter(0) }"
            />
            <MatchUpH2hFilter
                :title="'1st HALF'"
                :isChecked="filterOpt.idx === 1"
                class="mr-2"
                @toggle="(value: boolean) => { value && toggleFilter(1) }"
            />
            <MatchUpH2hFilter
                :title="'2nd HALF'"
                :isChecked="filterOpt.idx === 2"
                class="mr-2"
                @toggle="(value: boolean) => { value && toggleFilter(2) }"
            />
        </div> -->

        <MatchUpStatsMatchStatsResultTotalShot
            v-if="(opt.shotTarget.on.type as number) !== 0 && (opt.shotTarget.off.type as number) !== 0"
            :shotTargetOn="opt.shotTarget.on"
            :shotTargetOff="opt.shotTarget.off"
        />

        <div v-for="(item, idx) in opt.list" class="div-2">
            <div class="div-3">
                {{ TMatchUpStatistics2TitleFootball[ item.type ] }}
            </div>
            <div class="div-4">
                <div class="div-5">
                    <div class="div-6">
                        {{ `${ item.home }${ item.type === 25 ? '%' : '' }` }}
                    </div>
                    <div
                        :class="`div-7 w-[${ item.homeW }%]`"
                    ></div>
                </div>
                <div class="div-8">
                    <div
                        :class="`div-9 w-[${ item.awayW }%]`"
                    ></div>
                    <div class="div-10">
                        {{ `${ item.away }${ item.type === 25 ? '%' : '' }` }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TSportStatistics } from '~/types/statistics';
import type { TMatchUpStatsSport } from '~/types/stats';
import { TMatchUpStatistics2TitleFootball } from '~/types/FootBall/statistics';
import type { TMatchUpStatsStatsFootball } from '~/types/FootBall/stats';

const matchUpStore = useMatchUpStore();

type TMatchStatsResult = (TMatchUpStatsStatsFootball & { homeW: number; awayW: number; });

const opt = reactive({
    shotTarget: {
        on: <TMatchStatsResult> {
            home: <number> 0,
            away: <number> 0,
            type: <TSportStatistics> 0,
            homeW: <number> 0,
            awayW: <number> 0,
        },
        off: <TMatchStatsResult> {
            home: <number> 0,
            away: <number> 0,
            type: <TSportStatistics> 0,
            homeW: <number> 0,
            awayW: <number> 0,
        },
    },
    list: <TMatchStatsResult[]> [],
});

const filterOpt = reactive({
    idx: <number> 0,
});

const getWidthClass = (score: number, totalScore: number): number => {
    return (totalScore === 0) ? 0 : Math.floor(score / totalScore * 100);
};

const toggleFilter = (idx: number) => {
    filterOpt.idx = idx;
};

onMounted(async () => {
    await nextTick();
    const { stats, } = matchUpStore.getConfigStats();
    if (!stats.length) return;
    const shotTargetOn = stats.findIndex( item => item.type === 21 );
    const shotTargetOff = stats.findIndex( item => item.type === 22 );
    if (shotTargetOn >= 0) {
        const total = stats[shotTargetOn].home + stats[shotTargetOn].away;
        opt.shotTarget.on = {
            ...stats[shotTargetOn],
            homeW: getWidthClass(stats[shotTargetOn].home, total),
            awayW: getWidthClass(stats[shotTargetOn].away, total),
        };
    }
    if (shotTargetOff >= 0) {
        const total = stats[shotTargetOff].home + stats[shotTargetOff].away;
        opt.shotTarget.off = {
            ...stats[shotTargetOff],
            homeW: getWidthClass(stats[shotTargetOff].home, total),
            awayW: getWidthClass(stats[shotTargetOff].away, total),
        };
    }
    opt.list = stats.filter((item, idx) => {
        return (
            item.type !== 21 &&
            item.type !== 22
        );
    }).map((item, idx) => {
        const total = item.home + item.away;
        return {
            ...item,
            homeW: getWidthClass(item.home, total),
            awayW: getWidthClass(item.away, total),
        };
    });
    console.log('opt.list: ', opt.list);

});
</script>

<style scoped>
.div-stats-result {
    align-self: stretch;
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #000;
}

.div-2 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-3 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-4 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-5 {
    justify-content: end;
    display: flex;
    gap: 10px;
    flex: 1;
    padding: 0 2px;
}

.div-6 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-7 {
    border-radius: 3px;
    background-color: #f50;
    height: 20px;
}

.div-8 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-9 {
    border-radius: 3px;
    background-color: #001a32;
    height: 20px;
}

.div-10 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-26 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-27 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-28 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-29 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-30 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-31 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-32 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-33 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-34 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-35 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-36 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-37 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-38 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-39 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-40 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-41 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-42 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-43 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-44 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    white-space: nowrap;
    padding: 10px 4px;
}

.div-45 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-46 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-47 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-48 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-49 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-50 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-51 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-52 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-53 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-54 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-55 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-56 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-57 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-58 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-59 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-60 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-61 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}
</style>