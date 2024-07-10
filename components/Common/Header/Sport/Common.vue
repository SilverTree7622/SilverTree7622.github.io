<template>
    <NuxtLink :to="`/${ ECommonSportSectionValue[ props.name ] }`">
        <article 
            :class="`btn_-sports-icon ${ (props.isToggled || opt.isHover) ? 'bg-[#0C4BA7]' : 'bg-[color:var(--catalina-blue)]' }`"
            @pointerover="opt.isHover = true"
            @pointerleave="opt.isHover = false"
        >
            <img 
                v-show="!props.isToggled && !opt.isHover"
                :class="`icon-1`"
                :src="`/img/${ props.icon }`"
                :alt="ECommonSportSectionValue[ props.name ]"
            />
            <!-- no hover icon -->
            <img
                v-show="!props.hoverIcon && (props.isToggled || opt.isHover)"
                class="icon-1 text-[color:var(--ptyellow)] !stroke-[color:var(--ptyellow)]"
                :src="`/img/${ props.icon }`"
                :alt="ECommonSportSectionValue[ props.name ]"
            />
            <!-- hover icon -->
            <img
                v-show="props.hoverIcon && (props.isToggled || opt.isHover)"
                class="icon-1"
                :src="`/img/${ props.hoverIcon }`"
                :alt="ECommonSportSectionValue[ props.name ]"
            />
            <div
                :class="`
                    football-1 football-4 smallsportsicon
                    ${ (props.isToggled || opt.isHover) && 'text-[color:var(--ptyellow)]' }
                `"
            >
                {{ ECommonSportSectionValue[ props.name ] }}
            </div>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import { ECommonSportSectionValue, type TCommonSportSection } from '~/types/Common/sport';

const props = defineProps<{
    name: TCommonSportSection;
    icon: string;
    hoverIcon?: string;
    isToggled?: boolean;
}>();

const opt = reactive({
    isHover: <boolean> false,
});

</script>

<style scoped>
.icon-1 {
  height: 30px;
  position: relative;
  width: 30px;
  /* color: white; */
}

.btn_-sports-icon {
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  height: 55px;
  padding: 5px 3px;
  position: relative;
}

.football {
  color: var(--wt);
  margin-left: -1.00px;
  margin-right: -1.00px;
  text-align: center;
}

.football-1 {
  text-align: center;
}

.football-4 {
  font-weight: 600;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.smallsportsicon {
  font-family: var(--font-family-pretendard-semibold);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0;
}
</style>