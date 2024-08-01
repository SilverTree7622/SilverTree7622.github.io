<template>
    <!-- <div class="div-stats-incidents">
        <MatchUpStatsMatchStatsIncidentsItem
            v-for="(item, idx) in props.list"
            :idx="idx"
            :list="props.list"
            :item="item"
        />
    </div> -->
    <div class="tmpu95incidentu95list screen">
      <div class="contents_-football_">
        <div class="match_-stats_chart4">
            <div class="frame-491 headline3 overflow-hidden">
                <!-- <div class="ft-0-2">FT 0-2</div>
                <div class="frame-4">
                    <div class="flex-row">
                        <div class="text caption">87’</div>
                        <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                        <div class="frame-490">
                        <div class="in-edward-nketiah body">In: Edward Nketiah</div>
                        <div class="out-oleksndr-zinchenko caption">Out: Oleksndr Zinchenko</div>
                        </div>
                    </div>
                </div> -->


                <MatchUpStatsMatchStatsIncidentsItem
                    v-for="(item, idx) in props.list"
                    :idx="idx"
                    :list="props.list"
                    :item="item"
                />
<!-- 

                <div class="frame-4">
                    <div class="flex-row-1 flex-row-13">
                        <div class="frame-481">
                        <div class="name name-6 body">Ollie Watkins</div>
                        <div class="assist-youri-tielemans caption">Assist: Youri Tielemans</div>
                        </div>
                        <div class="frame-480"><div class="text-1 body">0-2</div></div>
                        <img class="btn-1 btn-2" src="/img/btn-shot@2x.png" alt="Btn_Shot" />
                        <div class="text-2 caption">87’</div>
                    </div>
                </div>
                <div class="frame-4">
                    <div class="flex-row-2 flex-row-13">
                        <div class="frame-479">
                        <div class="name-1 name-6 body">Leon Bailey</div>
                        <div class="assist-lucas-digne caption">Assist: Lucas Digne</div>
                        </div>
                        <div class="frame-478"><div class="text-1 body">0-1</div></div>
                        <img class="btn-1 btn-2" src="/img/btn-shot@2x.png" alt="Btn_Shot" />
                        <div class="text-2 caption">84’</div>
                    </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-3 flex-row-13">
                    <div class="frame-477">
                    <div class="in-alex-moreno body">In: Alex Moreno</div>
                    <div class="out-nicolo-zaniolo caption">Out: Nicolo Zaniolo</div>
                    </div>
                    <img class="btn-1 btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="text-2 caption">79’</div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-4 flex-row-13">
                    <div class="text caption">79’</div>
                    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="frame-489">
                    <div class="in-jorginho body">In: Jorginho</div>
                    <div class="out-gabriel-jesus caption">Out: Gabriel Jesus</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-5 flex-row-13">
                    <div class="text caption">79’</div>
                    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="frame-488">
                    <div class="in-emile-smith-rowe body">In: Emile Smith Rowe</div>
                    <div class="out-martin-odegaard caption">Out: Martin Odegaard</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-6 flex-row-13">
                    <div class="text caption">67’</div>
                    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="frame-487">
                    <div class="in-gabriel-martinelli body">In: Gabriel Martinelli</div>
                    <div class="out-leandro-trossard caption">Out: Leandro Trossard</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-7 flex-row-13">
                    <div class="text caption">67’</div>
                    <img class="btn btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="frame-486">
                    <div class="in-takehiro-tomiyasu body">In: Takehiro Tomiyasu</div>
                    <div class="out-ben-white caption">Out: Ben White</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-8 flex-row-13">
                    <div class="text caption">63’</div>
                    <img class="btn btn-2" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                    <div class="frame-485">
                    <div class="name-6 body">Kai Havertz</div>
                    <div class="not-retreating caption">Not Retreating</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-9 flex-row-13">
                    <div class="frame-463">
                    <div class="in-leon-bailey body">In: Leon Bailey</div>
                    <div class="out-moussa-diaby caption">Out: Moussa Diaby</div>
                    </div>
                    <img class="btn-1 btn-2" src="/img/btn-replacement@2x.png" alt="Btn_Replacement" />
                    <div class="text-12 caption">61’</div>
                </div>
                </div>
                <div class="ht-0-0">HT 0-0</div>
                <div class="frame-4">
                <div class="flex-row-10 flex-row-13">
                    <div class="text caption">45’</div>
                    <img class="btn btn-2" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                    <div class="frame-484">
                    <div class="name-6 body">Gabriel dos Santos Magalhaes</div>
                    <div class="foul-3 caption">Foul</div>
                    </div>
                </div>
                </div>
                <div class="frame-468">
                <div class="flex-row-11 flex-row-13">
                    <div class="text caption">36’</div>
                    <img class="btn btn-2" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                    <div class="frame-483">
                    <div class="name-6 body">Ben White</div>
                    <div class="foul-3 caption">Foul</div>
                    </div>
                </div>
                </div>
                <div class="frame-4">
                <div class="flex-row-12 flex-row-13">
                    <div class="frame-482">
                    <div class="name-5 name-6 body">Morgan Elliot Rogers</div>
                    <div class="foul-2 foul-3 caption">Foul</div>
                    </div>
                    <img class="btn_-yellow-card" src="/img/btn-yellowcard@2x.png" alt="Btn_YellowCard" />
                    <div class="text-15 caption">14’</div>
                </div>
                </div> -->
            </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { TMatchUpStatsSport } from '~/types/stats';

const props = defineProps<{
    list: TMatchUpStatsSport['incidents'];
}>();

onMounted(async () => {
    await nextTick();
    console.log('props.list: ', props.list);
});
</script>

<style scoped>
@import '@/public/css/matchup/stats/incidents/globals.css';
@import '@/public/css/matchup/stats/incidents/styleguide.css';
@import '@/public/css/matchup/stats/incidents/tmpu95incidentu95list.css';

.div-stats-incidents {
    align-self: stretch;
    border-radius: 10px;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 7px;
}

.div-2 {
    color: #000;
    text-align: center;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    align-self: center;
    margin-top: 5px;
    font: 600 14px Pretendard, sans-serif;
}

.div-3 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 3px 0;
}

.div-4 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-5 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 20px;
    align-self: start;
}

.div-6 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-7 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-8 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-9 {
    display: flex;
    margin-top: 9px;
    gap: 8px;
    padding: 3px 80px;
}

.div-10 {
    display: flex;
    align-items: start;
    gap: 4px;
}

.div-11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    text-align: right;
}

.div-12 {
    color: #000;
    align-self: end;
    font: 400 13px Pretendard, sans-serif;
}

.div-13 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-14 {
    border-radius: 5px;
    background-color: #001a32;
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    padding: 5px 6px;
    font: 400 13px Pretendard, sans-serif;
}

.img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 20px;
}

.div-15 {
    color: #626262;
    text-align: right;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-16 {
    display: flex;
    margin-top: 9px;
    gap: 4px;
    padding: 2px 80px;
}

.div-17 {
    display: flex;
    flex-direction: column;
    text-align: right;
}

.div-18 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-19 {
    color: #626262;
    font: 500 10px Pretendard, sans-serif;
}

.div-20 {
    border-radius: 5px;
    background-color: #001a32;
    align-self: start;
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    padding: 5px 0;
    font: 400 13px Pretendard, sans-serif;
}

.div-21 {
    color: #626262;
    text-align: right;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-22 {
    display: flex;
    margin-top: 9px;
    gap: 8px;
    text-align: right;
    padding: 3px 80px;
}

.div-23 {
    display: flex;
    gap: 4px;
}

.div-24 {
    display: flex;
    flex-direction: column;
}

.div-25 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-26 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-27 {
    color: #626262;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-28 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 3px 0;
}

.div-29 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-30 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.div-31 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-32 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-33 {
    color: #626262;
    font: 500 10px Pretendard, sans-serif;
}

.div-34 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 2px 0;
}

.div-35 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-36 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.div-37 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-38 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-39 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-40 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 3px 0;
}

.div-41 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-42 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.div-43 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-44 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-45 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-46 {
    display: flex;
    margin-top: 9px;
    gap: 11px;
    padding: 3px 0;
}

.div-47 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-48 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.div-49 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-50 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-51 {
    color: #626262;
    font: 500 10px Pretendard, sans-serif;
}

.div-52 {
    display: flex;
    margin-top: 9px;
    gap: 10px;
    padding: 2px 80px 2px 0;
}

.div-53 {
    color: #626262;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-54 {
    display: flex;
    gap: 3px;
}

.div-55 {
    display: flex;
    flex-direction: column;
}

.div-56 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-57 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-58 {
    display: flex;
    margin-top: 9px;
    gap: 8px;
    text-align: right;
    padding: 2px 80px;
}

.div-59 {
    display: flex;
    gap: 4px;
}

.div-60 {
    display: flex;
    flex-direction: column;
}

.div-61 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-62 {
    color: #626262;
    font: 500 10px Pretendard, sans-serif;
}

.div-63 {
    color: #626262;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-64 {
    color: #000;
    text-align: center;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    align-self: center;
    margin-top: 9px;
    font: 600 14px Pretendard, sans-serif;
}

.div-65 {
    display: flex;
    margin-top: 9px;
    gap: 10px;
    padding: 3px 0;
}

.div-66 {
    color: #626262;
    flex-grow: 1;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-67 {
    display: flex;
    gap: 3px;
    flex-grow: 1;
    flex-basis: auto;
}

.div-68 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
}

.div-69 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-70 {
    color: #626262;
    font: 500 10px Pretendard, sans-serif;
}

.div-71 {
    display: flex;
    margin-top: 9px;
    gap: 10px;
    padding: 3px 80px 3px 0;
}

.div-72 {
    color: #626262;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}

.div-73 {
    display: flex;
    gap: 3px;
}

.div-74 {
    display: flex;
    flex-direction: column;
}

.div-75 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-76 {
    color: #626262;
    margin-top: 6px;
    font: 500 10px Pretendard, sans-serif;
}

.div-77 {
    display: flex;
    margin-top: 9px;
    gap: 6px;
    text-align: right;
    padding: 3px 80px;
}

.div-78 {
    display: flex;
    flex-direction: column;
}

.div-79 {
    color: #000;
    font: 400 13px Pretendard, sans-serif;
}

.div-80 {
    color: #626262;
    align-self: end;
    font: 500 10px Pretendard, sans-serif;
}

.div-81 {
    color: #626262;
    margin: auto 0;
    font: 500 10px Pretendard, sans-serif;
}
</style>