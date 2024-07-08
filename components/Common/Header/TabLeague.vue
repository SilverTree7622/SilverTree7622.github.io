<template>
    <div>
        <div class="tap-Mzx5SR">
            <NuxtLink :to="`/${props.sName}?tab=matchup`">
                <!-- <a href="/{{result.sName}}?tab=matchup"> -->
                <div class="tap_-live-6bZO9Y ">
                    <div class="btn_-tap_-dis-selected">
                        <div class="btn_-tap_-hov">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-qbwaZH valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 32px)">MATCHUP</div>
                        </div>
                        <div class="btn_-tap_-def-Lux0a9 smart-layers-pointers">
                            <div v-if="props.tab === 'matchup'">
                                <div class="rectangle-2044"></div>
                                <div class="rectangle-21"></div>
                                <div class="fixtures-qbwaZH valign-text-middle fixtures headline3"
                                    style="left:calc(50.00% - 32px)">MATCHUP</div>
                            </div>
                            <div v-else>
                                <div class="rectangle-20"></div>
                                <div class="fixtures-c3kZMm valign-text-middle fixtures headline3"
                                    style="left:calc(50.00% - 32px)">MATCHUP</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </a> -->
            </NuxtLink>
            <NuxtLink :to="`/${props.sName}?tab=table`">
                <!-- <a href="/{{result.sName}}?tab=table"> -->
                <div class="tap_-fixtures-6bZO9Y">
                    <div class="btn_-tap_-dis-selected">
                        <div class="btn_-tap_-hov">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-LrzrRe valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 20px)">TABLE</div>
                        </div>
                        <div class="btn_-tap_-def-1Psg5i smart-layers-pointers">
                            <div v-if="props.tab === 'table'">
                                <div class="rectangle-2044"></div>
                                <div class="rectangle-21"></div>
                                <div class="fixtures-LrzrRe valign-text-middle fixtures headline3"
                                    style="left:calc(50.00% - 20px)">TABLE</div>
                            </div>
                            <div v-else>
                                <div class="rectangle-20"></div>
                                <div class="fixtures-0OqZlW valign-text-middle fixtures headline3"
                                    style="left:calc(50.00% - 20px)">TABLE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </a> -->
            </NuxtLink>
            <NuxtLink :to="`/${props.sName}?tab=odds`">
                <!-- <a href="/{{result.sName}}?tab=odds"> -->
                <div class="tap_-odds-6bZO9Y">
                    <div class="btn_-tap_-dis-selected">
                        <div class="btn_-tap_-hov">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-ifjvvx valign-text-middle fixtures headline3">ODDS</div>
                        </div>
                        <div class="btn_-tap_-def-yUFm6E smart-layers-pointers">
                            <div v-if="props.tab === 'odds'">
                                <div class="rectangle-2044"></div>
                                <div class="rectangle-21"></div>
                                <div class="fixtures-ifjvvx valign-text-middle fixtures headline3">ODDS</div>
                            </div>
                            <div v-else>
                                <div class="rectangle-20"></div>
                                <div class="fixtures-8485cn valign-text-middle fixtures headline3">ODDS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </a> -->
            </NuxtLink>
            <NuxtLink :to="`/${props.sName}?tab=result`">
                <!-- <a href="/{{result.sName}}?tab=result"> -->
                <div class="tap_-league-6bZO9Y">
                    <div class="btn_-tap_-dis-selected">
                        <div class="btn_-tap_-hov">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-aLf6B4 valign-text-middle fixtures headline3">RESULT</div>
                        </div>
                        <div class="btn_-tap_-def-5FcGMS smart-layers-pointers">
                            <div v-if="props.tab === 'result'">
                                <div class="rectangle-2044"></div>
                                <div class="rectangle-21"></div>
                                <div class="fixtures-aLf6B4 valign-text-middle fixtures headline3">RESULT</div>
                            </div>
                            <div v-else>
                                <div class="rectangle-20"></div>
                                <div class="fixtures-YT1vnF valign-text-middle fixtures headline3">RESULT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </a> -->
            </NuxtLink>
            <NuxtLink :to="`/${props.sName}?tab=players`">
                <!-- <a href="/{{result.sName}}?tab=players"> -->
                <div class="tap_-result-6bZO9Y">
                    <div class="btn_-tap_-dis-selected">
                        <div class="btn_-tap_-hov">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-qnaMQx valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 29px)">PLAYERS</div>
                        </div>
                        <div class="btn_-tap_-def-2tDpsJ smart-layers-pointers">
                            <div v-if="props.tab === 'players'">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-qnaMQx valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 29px)">PLAYERS</div>
                            </div>
                            <div v-else>
                            <div class="rectangle-20"></div>
                            <div class="fixtures-1AFXNR valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 29px)">PLAYERS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </a> -->
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    sName: string;
    tab: string;
}>();

</script>

<style scoped></style>