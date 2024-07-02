import type { TFetchReq } from "~/types";


const fetchTrial = async <T> (
    apiURL: string, url: string, reqConfig: TFetchReq, config, trialCnt: number,
): Promise<{
    data: T | {};
    pending: boolean;
    error: boolean;
}> => {
    const {
        FETCH_TRIAL_MAX_CNT,
    } = useRuntimeConfig().public.CONSTANTS;
    const opt = reactive({
        delayTime: 1500,
    });
    const fetchConfig = {
        ...config,
    };
    if (config.method === 'POST' || config.method === 'PUT') {
        fetchConfig.body = {
            ...reqConfig,
        };
    }
    const { data, pending, error, refresh } = await useFetch<T>(
        `${ apiURL }/${ url }`, fetchConfig,
    );
    if (error.value) {
        if (trialCnt >= FETCH_TRIAL_MAX_CNT) {
            return {
                data: {}, pending: pending.value, error: !!error.value,
            };
        }
        return await fetchTrial(apiURL, url, reqConfig, config, trialCnt + 1);
    }
    if (!data.value) {
        if (trialCnt >= FETCH_TRIAL_MAX_CNT) {
            return {
                data: {}, pending: pending.value, error: !!error.value,
            };
        }
        return await fetchTrial(apiURL, url, reqConfig, config, trialCnt + 1);
    }
    const trialResult = {
        data: data.value,
        pending: pending.value,
        error: !!error.value,
    };
    console.log('url, trialCnt, trialResult, fetchConfig: ', url, trialCnt, trialResult, fetchConfig);
    return trialResult;
};


export const useApiFetch = async <T> (
    url: string,
    config,
    param?,
    devConfig?
): Promise<{
    data: T | {};
    pending: boolean;
    error: boolean;
}> => {
    if (devConfig && Object.keys(devConfig).length) {
        return await new Promise((res, rej) => {
            console.time(`${ url }_time`);
            setTimeout(() => {
                res(true);
            }, (Math.random() + 1) * 2 * 1000);
        }).then(
            () => {
                console.timeEnd(`${ url }_time`);
                console.log(`${ url }_time data:`, devConfig);
                return {
                    data: devConfig as T, pending: false, error: false,
                };
            },
        );
    }

    const {
        apiURL,
    } = useRuntimeConfig().public;

    const authStore = useAuthStore();
    
    const reqConfig: TFetchReq = {
        a: {
            sessionid: 0,
            ODDSNAVI_IS_CAKE: '',
        },
        b: {
            _platform: '',
            _platform_uid: 0,
            _platform_gid: 0,
            _platform_bid: 0,
            _platform_ver: '',
            _connect_time: 0,
            _memid: 0,
        },
        c: {
            param: {
                sid: 0,
                fromdate: 0,
            }
        },
    };

    if (authStore.getIsSignIn()) {
        const {
            _platform, _platform_uid, _platform_gid, _platform_bid, _platform_ver, _connect_time, _memid,
        } = authStore.getUser();
        reqConfig.a.sessionid = 1;
        reqConfig.a.ODDSNAVI_IS_CAKE = '';
        reqConfig.b._platform = _platform;
        reqConfig.b._platform_uid = _platform_uid;
        reqConfig.b._platform_gid = _platform_gid;
        reqConfig.b._platform_bid = _platform_bid;
        reqConfig.b._platform_ver = _platform_ver;
        reqConfig.b._connect_time = _connect_time;
        reqConfig.b._memid = _memid;
    } else {
        if (param) {
            reqConfig.c.param.sid = param['sid'] ?? 0;
            reqConfig.c.param.fromdate = param['fromdate'] ?? 0;
        }
    }

    // console.log('url, reqConfig: ', url, reqConfig);

    const opt = reactive({
        trialCnt: <number> 0,
    });

    return await fetchTrial<T>(
        apiURL,
        url,
        reqConfig,
        config,
        opt.trialCnt
    );
};