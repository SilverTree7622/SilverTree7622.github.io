<template>
    <div class="tap-Mzx5SR mx-0">
        <NuxtLink :to="`/${ props.sName }?tab=stats&uuid=${ opt.uuid }`">
            <!-- <a href="/{{result.sName}}?tab=stats"> -->
            <div class="tap_-live-6bZO9Y">
                <div class="btn_-tap_-dis-selected">
                    <div class="btn_-tap_-hov">
                        <div class="rectangle-2044"></div>
                        <div class="rectangle-21"></div>
                        <div class="fixtures-qbwaZH valign-text-middle fixtures headline3"
                            style="left:calc(50.00% - 20px)">STATS</div>
                    </div>
                    <div class="btn_-tap_-def-Lux0a9 smart-layers-pointers">
                        <div v-if="props.tab === 'stats'">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-qbwaZH valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 20px)">STATS</div>
                        </div>
                        <div v-else>
                            <div class="rectangle-20"></div>
                            <div class="fixtures-c3kZMm valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 20px)">STATS</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </a> -->
        </NuxtLink>
        <NuxtLink :to="`/${ props.sName }?tab=navitalk&uuid=${ opt.uuid }`">
            <!-- <a href="/{{result.sName}}?tab=navitalk"> -->
            <div class="tap_-fixtures-6bZO9Y">
                <div class="btn_-tap_-dis-selected">
                    <div class="btn_-tap_-hov">
                        <div class="rectangle-2044"></div>
                        <div class="rectangle-21"></div>
                        <div class="fixtures-LrzrRe valign-text-middle fixtures headline3">NAVITALK</div>
                    </div>
                    <div class="btn_-tap_-def-1Psg5i smart-layers-pointers">
                        <div v-if="props.tab === 'navitalk'">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-LrzrRe valign-text-middle fixtures headline3">NAVITALK</div>
                        </div>
                        <div v-else>
                            <div class="rectangle-20"></div>
                            <div class="fixtures-0OqZlW valign-text-middle fixtures headline3">NAVITALK</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </a> -->
        </NuxtLink>
        <NuxtLink :to="`/${ props.sName }?tab=odds&uuid=${ opt.uuid }`">
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
        <NuxtLink :to="`/${ props.sName }?tab=lineup&uuid=${ opt.uuid }`">
            <!-- <a href="/{{result.sName}}?tab=lineup"> -->
            <div class="tap_-league-6bZO9Y">
                <div class="btn_-tap_-dis-selected">
                    <div class="btn_-tap_-hov">
                        <div class="rectangle-2044"></div>
                        <div class="rectangle-21"></div>
                        <div class="fixtures-aLf6B4 valign-text-middle fixtures headline3">LINEUP</div>
                    </div>
                    <div class="btn_-tap_-def-5FcGMS smart-layers-pointers">
                        <div v-if="props.tab === 'lineup'">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-aLf6B4 valign-text-middle fixtures headline3">LINEUP</div>
                        </div>
                        <div v-else>
                            <div class="rectangle-20"></div>
                            <div class="fixtures-YT1vnF valign-text-middle fixtures headline3">LINEUP</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </a> -->
        </NuxtLink>
        <NuxtLink :to="`/${ props.sName }?tab=h2h&uuid=${ opt.uuid }`">
            <!-- <a href="/{{result.sName}}?tab=h2h"> -->
            <div class="tap_-result-6bZO9Y">
                <div class="btn_-tap_-dis-selected">
                    <div class="btn_-tap_-hov">
                        <div class="rectangle-2044"></div>
                        <div class="rectangle-21"></div>
                        <div class="fixtures-qnaMQx valign-text-middle fixtures headline3"
                            style="left:calc(50.00% - 14px)">H2H</div>
                    </div>
                    <div class="btn_-tap_-def-2tDpsJ smart-layers-pointers">
                        <div v-if="props.tab === 'h2h'">
                            <div class="rectangle-2044"></div>
                            <div class="rectangle-21"></div>
                            <div class="fixtures-qnaMQx valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 14px)">H2H</div>
                        </div>
                        <div v-else>
                            <div class="rectangle-20"></div>
                            <div class="fixtures-1AFXNR valign-text-middle fixtures headline3"
                                style="left:calc(50.00% - 14px)">H2H</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </a> -->
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { ECommonSportSectionValue } from '~/types/Common/sport';

const props = defineProps<{
    sName: string;
    tab: string;
}>();

const opt = reactive({
    uuid: <string> '',
});

const matchUpStore = useMatchUpStore();
const route = useRoute();

onMounted(async () => {
    await nextTick();
    const {
        match_id,
        sportSection,
    } = matchUpStore.getConfig();
    opt.uuid = (route.query["uuid"] as string) ?? match_id;
    if (opt.uuid !== '') return;
    // redirect to live home?
    navigateTo(`/${ ECommonSportSectionValue[sportSection] ?? 'FootBall' }`);
})
</script>
