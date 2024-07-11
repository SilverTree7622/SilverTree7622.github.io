<template>
	<Html>
		<Head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
			<Link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
			<meta name="og:type" content="website" />
			<meta name="twitter:card" content="photo" />
			<Script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></Script>
			<Script defer src="https://animaapp.s3.amazonaws.com/launchpad-static/launchpad.js"></Script>
		</Head>

		<Body :style="'margin: 0; background-color: #001226'">
			<NuxtLoadingIndicator />
			<input type="hidden" id="anPageName" name="page" value="frmu95mobile" />
			<NuxtPage />
			<CommonLeftMain />
		</Body>
		<SignModal />
		<CommonBtnTop />
        <SettingModal />
	</Html>
</template>

<script lang="ts" setup>
import UtilObj from '~/utils/obj';
import { ECommonSportInitDataPrefix } from "~/types/Common/sport";
import type { TCommonSportSectionTabName } from "~/types/Common/sport";
import type { TInitData } from "~/types/loading";

const selectorStore = useSelectorStore();
const matchStateStore = useMatchStateStore();
const leftStore = useLeftStore();
const itemStyleStore = useItemStyleStore();
const cacheStore = useCacheStore();
const route = useRoute();

// watch route change in sport sections
watch(
	() => route.name,
	async () => {
		if (!leftStore.chckIsSportRoute(route.name as string)) {
			return;
		}
		await getInitData();
	}
);

const getInitData = async () => {
	const sportType = route.name as TCommonSportSectionTabName;
	let initData: TInitData | {} = {};
	let res = {};
	try {
		res = await useApiFetch<TInitData>(
			`${ ECommonSportInitDataPrefix[sportType] ?? '' }loading`,
			{ method: 'GET', },
		);
	}
	catch (e) {
		console.warn('e from loading: ', e);
		res = await useApiFetch<TInitData>(
			'loading',
			{ method: 'GET', },
		);
	}
	console.log('res: ', res);
	if (UtilObj.chckIsEmpty(res)) {
		return;
	}
	initData = res['data']['data'] ?? {};
	selectorStore.onMounted(
		initData['st_time'] ?? [],
		initData['st_odds'] ?? [],
		initData['st_sports'] ?? [],
	);
	matchStateStore.onMounted(initData);
	leftStore.onMounted(sportType, initData);
};

onMounted(async () => {
	await getInitData();
	await nextTick();
	itemStyleStore.onMounted();
	cacheStore.onMountedBased();
});

onBeforeUnmount(() => {
	cacheStore.onBeforeUnmountBased();
	leftStore.onBeforeUnmount();
});
</script>

<style>
@import '@/public/css/left.css';
@import '@/public/css/frmu95mobile.css';
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';
</style>