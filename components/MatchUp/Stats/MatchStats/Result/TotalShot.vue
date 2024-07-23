<template>
    <div class="div-11">
        <div class="div-12">Total Shots</div>
        <div class="div-13">
            <div class="div-14">
                <div class="div-15">
                    {{ props.shotTargetOn.home + props.shotTargetOff.home }}
                </div>
                <div class="div-16"></div>
            </div>
            <div class="div-17">
                <div class="div-18"></div>
                <div class="div-19">
                    {{ props.shotTargetOn.away + props.shotTargetOff.away }}
                </div>
            </div>
        </div>
        <div class="div-20">
            <span style="color: rgba(98, 98, 98, 1)">Shots off target</span> / Shots
            on target
        </div>
        <div class="div-21">
            <div class="div-22">
                <div class="div-23">
                    {{ props.shotTargetOff.home }}
                </div>
                <div class="relative mx-auto">
                    <img loading="lazy"
                        src="/img/Football_Goal_Post.svg"
                        class="img"
                    />
                    <div
                        class="
                            absolute rounded-full bg-[#ff5500] text-white text-center p-2 w-[36px] h-[36px]
                            transform left-1/2 top-1/2 -translate-x-1/2
                        "
                    >
                        {{ props.shotTargetOn.home }}
                    </div>
                </div>
            </div>
            <div class="div-24">
                <div class="div-25">
                    {{ props.shotTargetOff.away }}
                </div>
                <div class="relative mx-auto">
                    <img loading="lazy"
                        src="/img/Football_Goal_Post.svg"
                        class="img"
                    />
                    <div
                        class="
                            absolute rounded-full bg-[#001a32] text-white text-center p-2 w-[36px] h-[36px]
                            transform left-1/2 top-1/2 -translate-x-1/2
                        "
                    >
                        {{ props.shotTargetOn.away }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TMatchUpStatsStatsFootball } from '~/types/FootBall/stats';

const props = defineProps<{
    shotTargetOn: TMatchUpStatsStatsFootball;
    shotTargetOff: TMatchUpStatsStatsFootball;
}>();

</script>

<style scoped>

.div-11 {
    justify-content: center;
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    padding: 10px 4px;
}

.div-12 {
    text-align: center;
    font-family: Pretendard, sans-serif;
    width: 100%;
}

.div-13 {
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

.div-14 {
    justify-content: end;
    display: flex;
    gap: 10px;
    flex: 1;
    padding: 0 2px;
}

.div-15 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-16 {
    border-radius: 3px;
    background-color: #f50;
    width: 135px;
    height: 20px;
}

.div-17 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-18 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-19 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-20 {
    text-align: center;
    font-family: Pretendard, sans-serif;
    margin-top: 4px;
    width: 100%;
}

.div-21 {
    justify-content: center;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
}

.div-22 {
    align-items: flex-end;
    border-radius: 3px;
    background-color: #f8e7de;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 4px 20px;
}

.div-23 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 18px;
    background-color: #e0e4ea;
    align-self: end;
    margin-right: 23px;
    padding: 8px 12px;
}

.img {
    aspect-ratio: 1.85;
    object-fit: auto;
    object-position: center;
    width: 127px;
    align-self: center;
    margin-top: 10px;
}

.div-24 {
    align-items: center;
    border-radius: 3px;
    background-color: #d0d9e2;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 4px 20px;
}

.div-25 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 18px;
    background-color: #e0e4ea;
    align-self: start;
    margin-left: 27px;
    padding: 8px 13px;
}
</style>