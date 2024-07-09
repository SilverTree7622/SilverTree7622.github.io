import { defineStore } from "pinia";


export const useScrollStore = defineStore('scrollStore', () => {
    type TScrollStoreOpt = {
        key: string;
        target: HTMLElement;
        isTargetCustom: boolean;
        callNextContentsPending: boolean;
        isOutOfContent: boolean;
        lastScroll: number;
        isBarExist: boolean;
        callNextContents: () => Promise<boolean>;    // return boolean is for check is out of content
    };

    const keys = reactive<TScrollStoreOpt[]>([]);
    
    const register = (
        key: string,
        callNextContents: () => Promise<boolean>,
        target?: HTMLElement,
    ) => {
        if (process.server) return;
        if (keys.length && key in keys.map( item => item.key )) {
            // return console.error(`${ key } same key is already exist`);
            return;
        }
        keys.push({
            key,
            target: target ?? window as any,
            isTargetCustom: !!target,
            callNextContentsPending: false,
            isOutOfContent: false,
            lastScroll: 0,
            isBarExist: false,
            callNextContents,
        });
        setTimeout(() => {
            // UtilStr.setBigIntIssue();
            const target = (getOpt(key)?.target as any);
            if (target) {
                target.addEventListener('scroll', () => detectScrollEnd(key) );
            }
            setTimeout(() => {
                chckIsBarExist(key);
            }, 100);
            // console.log(`scroll register ${ key } key & scroll key list length is: ${ keys.length } `);
            // console.log('keys:', keys);
        }, 1);
    };

    const onBeforeUnmount = (key: string) => {
        if (process.server) return;
        const target = (getOpt(key)?.target as any);
        if (target) {
            target.removeEventListener('scroll', () => detectScrollEnd(key) );
        }
        const idx = getIdx(key);
        if (idx < 0) {
            // return console.error(`${ key } key is not exist`);
            return;
        }
        keys.splice(idx, 1);
    };

    const getOpt = (key: string) => {
        if (!keys.length) return;
        const optData = keys.filter( item => item.key === key );
        if (!optData.length) {
            // return console.error(`${ key } key is not exist in scroll keys`);
            return;
        }
        return optData.pop();
    };

    const getIdx = (key: string): number => {
        return keys.findIndex( item => item.key === key);
    };

    const detectScrollDetection = (key: string) => {
        const opt = getOpt(key);
        if (!opt) return;
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0 && opt.lastScroll <= currentScroll) {
            // console.log('scroll down');
        } else {
            // console.log('scroll up');
        }
        opt.lastScroll = currentScroll;
    };

    const detectScrollEnd = async (key: string) => {
        const opt = getOpt(key);
        if (!opt) return;
        detectScrollDetection(key);
        let isScrollEnded = false;
        if (opt.isTargetCustom) {
            // isScrollEnded = opt.target.scrollTop + 1 >= opt.target.offsetHeight;
            const scrollY = opt.target.scrollHeight - opt.target.scrollTop;
            const height = opt.target.offsetHeight;
            const offset = height - scrollY;
            isScrollEnded = (offset > -1 && offset !== 0);
        } else {
            isScrollEnded = window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight;
        }
        if (!isScrollEnded) return;
        if (opt.callNextContentsPending) return;
        if (opt.isOutOfContent) return;
        await callNextContents(key);
    };

    const callNextContents = async (key: string) => {
        const opt = getOpt(key);
        if (!opt) return;
        opt.callNextContentsPending = true;
        const isOutOfContent = await opt.callNextContents();
        setIsOutOfContent(key, isOutOfContent);
        opt.callNextContentsPending = false;
        // setTimeout(() => {
        //     if (!opt.isOutOfContent) return;
        //     if (opt.isTargetCustom) {
        //         opt.target.scrollTo(0, document.body.clientHeight);
        //     } else {
        //         window.scrollTo(0, document.body.clientHeight);
        //     }
        // }, 50);
    };

    const chckIsBarExist = (key: string) => {
        const opt = getOpt(key);
        if (!opt) return;
        if (opt.callNextContentsPending) return;
        if (opt.isTargetCustom) {
            opt.isBarExist = (window.innerHeight !== document.body.clientHeight);
        } else {
            opt.isBarExist = (opt.target.clientHeight !== document.body.clientHeight);
        }
    };
    
    const setIsOutOfContent = (key: string, isOutOfContent: boolean) => {
        const idx = getIdx(key);
        if (idx < 0) {
            // return console.error(`${ key } key is not exist`);
            return;
        }
        keys[idx].isOutOfContent = isOutOfContent;
    };

    // init loader for not enough height device
    const showClick2GetNext = (key: string): undefined | boolean => {
        const opt = getOpt(key);
        if (!opt) return undefined;
        setTimeout(() => {
            return !opt.isBarExist && !opt.callNextContentsPending && !opt.isOutOfContent;
        }, 100);
    };

    const getIsOutOfContent = (key: string): undefined | boolean => {
        const opt = getOpt(key);
        if (!opt) return;
        return opt.isOutOfContent;
    };

    const getCallNextContentsPending = (key: string): undefined | boolean => {
        const opt = getOpt(key);
        if (!opt) return;
        return opt.callNextContentsPending;
    };

    const setScroll2Top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const init = (key: string) => {
        const idx = getIdx(key);
        if (idx < 0) {
            return;
        }
        keys[idx].callNextContentsPending = false;
        keys[idx].isOutOfContent = false;
        keys[idx].lastScroll = 0;
        keys[idx].isBarExist = false;
    };

    return {
        register,
        onBeforeUnmount,
        detectScrollEnd,
        setIsOutOfContent,
        callNextContents,
        showClick2GetNext,
        getIsOutOfContent,
        getCallNextContentsPending,
        setScroll2Top,
        init,
    };
});