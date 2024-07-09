<template>
    <div id="overlay-left" class="overlay-base z-10 overflow-hidden">
        <div class="left-header">
            <img class="btn_-menu cursor-pointer" src="/img/btn-menu@2x.png" alt="Btn_Menu" @click="hide" />
            <NuxtLink to="/FootBall" @click="go2Link">
                <div class="oddsnavicom">ODDSNAVI.COM</div>
            </NuxtLink>
        </div>
        <div class="left screen overflow-hidden !pt-0">
            <NuxtScrollbar tag="aside" @ps-scroll-y="() => { }" class="overflow-x-hidden">
                <div v-show="opt.popular.length" class="frame-621 frame">
                    <div class="frame-62 frame">
                        <div class="r-leagues headline2">POPULAR LEAGUES</div>
                        <img class="line-10" src="/img/line-white@2x.png" alt="Line 10" />
                    </div>
                    <div class="frame-302 frame">
                        <template v-for="(item, idx) in opt.popular">
                            <NuxtLink :to="`/League?id=${item.ai_id}`">
                                <article class="btn_-round-square3">
                                    <div class="premier_-league_logo-3">
                                        <img :src="item.category_logo" />
                                    </div>
                                    <div class="champions-league-left body">{{ item.category_name }}</div>
                                </article>
                            </NuxtLink>
                        </template>
                    </div>
                </div>
                <div v-show="opt.etc.length" class="frame-302-1">
                    <div class="frame-62 frame">
                        <div class="r-leagues headline2">OTHER LEAGUES [A-Z]</div>
                        <img class="line-10" src="/img/line-white@2x.png" alt="Line 10" />
                    </div>
                    <template v-for="(item, idx) in opt.etc">
                        <div class="frame-62-2 frame-62-3 cursor-pointer" @click="toggleEtcCategory(item.category)">
                            <img v-if="item.leagueList[0].catetory_logo" :src="item.leagueList[0].catetory_logo"
                                class="w-7 h-5" />
                            <div class="basketball headline3">{{ item.category }}</div>
                        </div>
                        <div v-if="config.isStretch && (item.category === config.toggledCategory)"
                            v-for="(league) in item.leagueList" class="frame-62-1 frame-62-3">
                            <NuxtLink :to="`/League?id=${league.ai_id}`">
                                <article class="btn_-round-square3">
                                    <div class="premier_-league_logo-3-10">
                                        <img :src="league.competition_logo" />
                                    </div>
                                    <div class="champions-league-left body">{{ league.competition_name }}</div>
                                </article>
                            </NuxtLink>
                        </div>
                    </template>
                </div>
                <div class="py-10 bg-[--frblue]"></div>
            </NuxtScrollbar>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { TInitDataLeaguePopular } from '~/types/loading';

const overlayStore = useOverlayStore();
const leftStore = useLeftStore();
const scrollStore = useScrollStore();

const opt = reactive<TLeftStoreUpdate>({
    popular: <TInitDataLeaguePopular[]>[],
    etc: <TLeftStoreUpdate['etc']>[],
});

const config = reactive({
    toggledCategory: <string>'',
    isStretch: <boolean>false,
});

const toggleEtcCategory = (category: string) => {
    if (config.toggledCategory === '' || config.toggledCategory === category) {
        config.isStretch = !config.isStretch;
    } else {
        config.toggledCategory = category;
    }
    if (config.isStretch) {
        config.toggledCategory = '';
        config.isStretch = false;
        setTimeout(() => {
            config.toggledCategory = category;
            config.isStretch = true;
        }, 0);
    } else {
        config.toggledCategory = '';
    }
};

const hide = () => {
    overlayStore.HideOverlay('left', 'animate-appear');
};

const go2Link = () => {
    overlayStore.HideOverlay('left', 'animate-appear');
    scrollStore.setScroll2Top();
};

const updateList = (
    popular: TInitDataLeaguePopular[],
    etc: TLeftStoreUpdate['etc']
) => {
    opt.popular = [];
    opt.etc = [];
    opt.popular = popular;
    opt.etc = etc;
    opt.popular.length && console.log('opt popular from left side updateList: ', opt.popular);
    opt.etc.length && console.log('opt etc from left side updateList: ', opt.etc);
};

onMounted(async () => {
    await nextTick();
    overlayStore.closeOutsideOverlay("left");
    leftStore.register(updateList);
});

onBeforeUnmount(() => {

});
</script>

<style scoped>
/* screen - left */
.left-header {
    align-items: center;
    justify-items: center;
    background-color: var(--bg);
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 8px;
    position: relative;
    flex: 0 0 auto;
    width: 225px;
}

.left-header .btn_-menu {
    height: 20px;
    position: relative;
    width: 22px;
}

.left-header .oddsnavicom {
    color: var(--ptyellow);
    cursor: pointer;
    font-family: var(--font-family-pretendard-semibold);
    font-size: var(--font-size-xxl);
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}

.left {
    align-items: flex-start;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    position: relative;
}

.left .frame-619 {
    align-items: flex-start;
    display: inline-flex;
    gap: 10px;
}

.left .btn_-menu {
    height: 20px;
    position: relative;
    width: 22px;
}

.left .oddsnavicom {
    color: var(--ptyellow);
    cursor: pointer;
    font-family: var(--font-family-pretendard-semibold);
    font-size: var(--font-size-xxl);
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}

.left .frame-621 {
    align-items: flex-start;
    align-self: stretch;
    background-color: var(--frblue);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 4px 0px;
    width: 100%;
}

.left .frame-62 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0px 6px;
    width: 100%;
}

.left .r-leagues {
    align-self: stretch;
    color: var(--wt);
    font-weight: 600;
    height: 17px;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
}

.left .line-10 {
    align-self: stretch;
    height: 1px;
    object-fit: cover;
    position: relative;
    width: 100%;
}

.left .frame-302 {
    align-items: flex-start;
    align-self: stretch;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    padding-right: 24px;
    padding-top: 8px;
    padding-left: 12px;
}

.left .btn_-round-square3 {
    align-items: center;
    align-self: stretch;
    background-color: var(--catalina-blue);
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    height: 26px;
    padding: 0px 6px;
    position: relative;
    width: 100%;
}

.left .premier_-league_logo-3 {
    /* background-image: url(../img/premier-league-logo-1@2x.png); */
    background-size: 100% 100%;
    height: 16px;
    position: relative;
    width: 13px;
}

.left .champions-league-left {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: var(--wt);
    display: -webkit-box;
    font-weight: 400;
    line-height: normal;
    margin-right: -2.00px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    width: 123px;
}

.left .premier_-league_logo-3-1 {
    background-image: url(../img/uefa-europa-league@2x.png);
}

.left .premier_-league_logo-3-2 {
    background-image: url(../img/uefa-champions-league@2x.png);
}

.left .premier_-league_logo-3-7 {
    background-image: url(../img/uefa-europa-conference-league@2x.png);
}

.left .premier_-league_logo-3-3 {
    background-image: url(../img/french-ligue-1@2x.png);
}

.left .premier_-league_logo-3-4 {
    background-image: url(../img/bundesliga@2x.png);
}

.left .premier_-league_logo-3-8 {
    background-image: url(../img/spanish-la-liga@2x.png);
}

.left .premier_-league_logo-3-5 {
    background-image: url(../img/italian-serie-a@2x.png);
}

.left .premier_-league_logo-3-6 {
    background-image: url(../img/argentine-division-1@2x.png);
}

.left .premier_-league_logo-3-9 {
    background-image: url(../img/netherlands-eredivisie@2x.png);
}

.left .frame-302-1 {
    align-items: center;
    align-self: stretch;
    background-color: var(--frblue);
    border-radius: 5px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 4px 0px;
    position: relative;
    width: 100%;
}

.left .frame-624 {
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 8px 8px 2px;
    width: 100%;
}

.left .tennis {
    color: var(--wt);
    flex: 1;
    font-weight: 600;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
}

.left .frame-62-1 {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
    padding: 4px 12px 1px;
}

.left .frame-62-2 {
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 4px 8px 2px;
}

.left .basketball {
    color: var(--wt);
    flex: 1;
    font-weight: 600;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
}

.left .volleyball {
    color: var(--wt);
    flex: 1;
    font-weight: 600;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
}

.left .frame {
    flex: 0 0 auto;
    position: relative;
}

.left .frame-62-3 {
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
}

.left .premier_-league_logo-3-10 {
    background-size: 100% 100%;
    height: 16px;
    position: relative;
    width: 13px;
}
</style>