<template>
    <div class="frame-4">
        <div v-if="props.side === 'left'" class="flex-row">
            <div class="text caption">{{ `${ props.item.time }’` }}</div>
            <MatchUpStatsMatchStatsIncidentsTypeSwitch
                :in="''"
                :out="''"
            />
        </div>

        <!--  -->
        <div v-if="props.side === 'right'" class="flex-row-1 flex-row-13">
            <div class="frame-481">
                <div class="name name-6 body">Ollie Watkins</div>
                <div class="assist-youri-tielemans caption">Assist: Youri Tielemans</div>
            </div>
            <div class="frame-480">
                <div class="text-1 body">0-2</div>
            </div>
            <img class="btn-1 btn-2" src="/img/btn-shot@2x.png" alt="Btn_Shot" />
            <div class="text-2 caption">87’</div>
        </div>

        <!-- left foul -->
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
    </div>
</template>

<script setup lang="ts">
import type { TCommonSportSection } from '~/types/Common/sport';
import type { TMatchUpStoreStatsIncident } from '~/types/matchUp';

const props = defineProps<{
    side?: 'left' | 'right';
    sportSection: TCommonSportSection;
    item: TMatchUpStoreStatsIncident;

}>();
</script>