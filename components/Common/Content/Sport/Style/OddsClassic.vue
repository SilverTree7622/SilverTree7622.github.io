<template>
  <div class="div-odds-classic" :class="props.isLast ? 'rounded-b-lg' : ''">
    <div class="div-4">
      <div class="div-5" :class="props.isLiving ? 'text-[#b14646]' : 'text-black'">
        {{ props.time }}
      </div>
      <div class="div-6">
        <div class="div-7">
          <div class="div-8">
            <img
              loading="lazy"
              :src="props.homeLogo"
              :alt="props.homeName"
              class="img-2"
            />
            <div class="div-9">
              {{ props.homeName }}
            </div>
          </div>
          <div class="div-10">
            <CommonFavoriteStar :isFavorite="false" class="mr-2" />
          </div>
        </div>
        <div class="div-12">
          <div class="div-13">
            <img
              loading="lazy"
              :src="props.awayLogo"
              :alt="props.awayName"
              class="img-4"
            />
            <div class="div-14">
              {{ props.awayName }}
            </div>
          </div>
          <div class="div-15">
            <CommonFavoriteStar :isFavorite="false" class="mr-2" />
          </div>
        </div>
      </div>
      <CommonBetOneXTwo
        :value="[ 1.55, 1.55, 1.55 ]"
        class="my-auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  idx: number;
  homeLogo: string;
  homeName: string;
  time: string;
  awayLogo: string;
  awayName: string;
  isLiving: boolean;
  isFavorite?: boolean;
  isLast?: boolean;
}>();

onMounted(async () => {
  await nextTick();
});
</script>

<style scoped>
.div-odds-classic {
  align-self: stretch;
  /* border-color: rgba(224, 228, 234, 1);
  border-style: solid;
  border-bottom-width: 1px;
  background-color: #f8f8f8; */
  display: flex;
  min-height: 64px;
  flex-direction: column;
  justify-items: center;
}
.div-2 {
  justify-content: center;
  border-radius: 3px;
  align-self: end;
  display: flex;
  margin-top: 4px;
  gap: 6px;
  font-size: 10px;
  color: #b8bbc1;
  font-weight: 500;
  text-align: center;
  padding: 1px 0;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 13px;
}
.div-3 {
  font-family: Pretendard, sans-serif;
  margin: auto 0;
}
.div-4 {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 3px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.56px;
  padding: 2px 6px 2px;
  margin-top: auto;
  margin-bottom: auto;
}
.div-5 {
  font-family: Pretendard, sans-serif;
  align-self: stretch;
  margin: auto 0;
  width: 46px;
  text-align: center;
  padding-right: 4px;
}
.div-6 {
  border-color: rgba(224, 228, 234, 1);
  border-style: solid;
  border-right-width: 1px;
  border-left-width: 1px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 8px;
  margin-top: auto;
  margin-bottom: auto;
}
.div-7 {
  justify-content: space-between;
  display: flex;
  gap: 0px;
}
.div-8 {
  display: flex;
  gap: 4px;
  color: #000;
  flex: 1;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
}
.div-9 {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Pretendard, sans-serif;
  flex: 1;
}
.div-10 {
  display: flex;
  gap: 6px;
  color: #6a6a6a;
  white-space: nowrap;
  text-align: center;
}
.div-11 {
  font-family: Pretendard, sans-serif;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  stroke-width: 1px;
  stroke: #f6d04e;
  border-color: rgba(246, 208, 78, 1);
  border-style: solid;
  border-width: 1px;
}
.div-12 {
  justify-content: space-between;
  display: flex;
  margin-top: 8px;
  gap: 0px;
  color: #000;
  white-space: nowrap;
}
.div-13 {
  display: flex;
  gap: 4px;
  flex: 1;
}
.img-4 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
}
.div-14 {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Pretendard, sans-serif;
  flex: 1;
}
.div-15 {
  display: flex;
  gap: 6px;
  text-align: center;
}
.div-16 {
  font-family: Pretendard, sans-serif;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  fill: #f6d04e;
}
.img-6 {
  aspect-ratio: 2.33;
  object-fit: auto;
  object-position: center;
  width: 64px;
  align-self: stretch;
  margin: auto 0;
}
</style>
