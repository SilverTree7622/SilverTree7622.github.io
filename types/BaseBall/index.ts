import UtilDate from "~/utils/date";
import type { TBaseBallSchedule } from "./schedule";


export const isLive = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 432 ||
        ai_status_id === 452 ||
        ai_status_id === 433 ||
        ai_status_id === 453 ||
        ai_status_id === 434 ||
        ai_status_id === 454 ||
        ai_status_id === 435 ||
        ai_status_id === 455 ||
        ai_status_id === 436 ||
        ai_status_id === 456 ||
        ai_status_id === 437 ||
        ai_status_id === 457 ||
        ai_status_id === 438 ||
        ai_status_id === 458 ||
        ai_status_id === 439 ||
        ai_status_id === 459 ||
        ai_status_id === 440 ||
        ai_status_id === 460 ||
        ai_status_id === 411 ||
        ai_status_id === 461 ||
        ai_status_id === 412 ||
        ai_status_id === 462 ||
        ai_status_id === 413 ||
        ai_status_id === 463 ||
        ai_status_id === 414 ||
        ai_status_id === 464 ||
        ai_status_id === 415 ||
        ai_status_id === 465 ||
        ai_status_id === 416 ||
        ai_status_id === 466 ||
        ai_status_id === 417 ||
        ai_status_id === 467 ||
        ai_status_id === 418 ||
        ai_status_id === 468 ||
        ai_status_id === 419 ||
        ai_status_id === 469 ||
        ai_status_id === 420 ||
        ai_status_id === 470 ||
        ai_status_id === 421
    );
};

export const isResult = (ai_status_id: number): boolean => {
    return (
        ai_status_id === 100 ||
        ai_status_id === 14 ||
        ai_status_id === 15 ||
        ai_status_id === 16 ||
        ai_status_id === 17 ||
        ai_status_id === 19 ||
        ai_status_id === 99
    );
};

export const getScore = (prefix: TContentStorePrefix, schedule: TBaseBallSchedule): number => {
    return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
};

export const getScoreViaIdx = (
    prefix: TContentStorePrefix,
    schedule: TBaseBallSchedule,
    idx: number | string = 0,
): number => {
    if (typeof idx === 'string') {
        return schedule['ai_scores'][idx][ prefix === 'home' ? 0 : 1 ];
    }
    if (idx === 0) return schedule['ai_scores']['ft'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 1) return schedule['ai_scores']['p1'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 2) return schedule['ai_scores']['p2'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 3) return schedule['ai_scores']['p3'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 4) return schedule['ai_scores']['p4'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 5) return schedule['ai_scores']['p5'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 6) return schedule['ai_scores']['p6'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 7) return schedule['ai_scores']['p7'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 8) return schedule['ai_scores']['p8'][ prefix === 'home' ? 0 : 1 ];
    if (idx === 9) return schedule['ai_scores']['p9'][ prefix === 'home' ? 0 : 1 ];
    return 0;
};

export const getCurrentInningSpotlightIdx = (
    schedule: TBaseBallSchedule,
): number => {
    const timeStr = getTime(schedule.ai_match_status, 0);
    if (timeStr === '1th') return 0;
    if (timeStr === '2nd') return 1;
    if (timeStr === '3rd') return 2;
    if (timeStr === '4th') return 3;
    if (timeStr === '5th') return 4;
    if (timeStr === '6th') return 5;
    if (timeStr === '7th') return 6;
    if (timeStr === '8th') return 7;
    else return 8;
    // if (timeStr === '9th') return 8;
};

export const getScoreList = (
    prefix: TContentStorePrefix,
    schedule: TBaseBallSchedule,
): number[] => {
    const inningList = [ 'ft', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9' ];
    const returnList: number[] = [];
    for (const item of inningList) {
        if (schedule['ai_scores'][item]) {
            returnList.push(schedule['ai_scores'][item][ prefix === 'home' ? 0 : 1 ]);
        }
        break;
    }
    return returnList;
};

export const getPrefix = (ai_match_status: number) => {
    return 'INN';
};

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): string => {

    // 432 |                                       // FIRST_INNING_TOP
    // 452 |                                       // BREAK_TOP1_BOTTOM1
    // 433 |                                       // THIRD_SET
    // 453 |                                       // FOURTH_SET
    // 434 |                                       // FIFTH_SET
    if (
        ai_match_status === 432 || ai_match_status === 452 || ai_match_status === 433 || ai_match_status === 453 || ai_match_status === 434
    ) {
        return '1st';
    }
    // 454 |                                       // BREAK_TOP2_BOTTOM2
    // 435 |                                       // SECOND_INNING_BOTTOM
    if (
        ai_match_status === 454 || ai_match_status === 435
    ) {
        return '2nd';
    }
    // 455 |                                       // BREAK_TOP3_BOTTOM2
    // 436 |                                       // THIRD_INNING_TOP
    // 456 |                                       // BREAK_TOP3_BOTTOM3
    // 437 |                                       // THIRD_INNING_BOTTOM
    if (
        ai_match_status === 455 || ai_match_status === 436 || ai_match_status === 456 || ai_match_status === 437
    ) {
        return '3rd';
    }
    // 457 |                                       // BREAK_TOP4_BOTTOM3
    // 438 |                                       // FOURTH_INNING_TOP
    // 458 |                                       // BREAK_TOP4_BOTTOM4
    // 439 |                                       // FOURTH_INNING_BOTTOM
    if (
        ai_match_status === 457 || ai_match_status === 438 || ai_match_status === 458 || ai_match_status === 439
    ) {
        return '4th';
    }
    // 459 |                                       // BREAK_TOP5_BOTTOM4
    // 440 |                                       // FIFTH_INNING_TOP
    // 460 |                                       // BREAK_TOP5_BOTTOM5
    // 411 |                                       // FIFTH_INNING_BOTTOM
    if (
        ai_match_status === 459 || ai_match_status === 440 || ai_match_status === 460 || ai_match_status === 411
    ) {
        return '5th';
    }
    // 461 |                                       // BREAK_TOP6_BOTTOM5
    // 412 |                                       // SIXTH_INNING_TOP
    // 462 |                                       // BREAK_TOP6_BOTTOM6
    // 413 |                                       // SIXTH_INNING_BOTTOM
    if (
        ai_match_status === 461 || ai_match_status === 412 || ai_match_status === 462 || ai_match_status === 413
    ) {
        return '6th';
    }

    // 463 |                                       // BREAK_TOP7_BOTTOM6
    // 414 |                                       // SEVENTH_INNING_TOP
    // 464 |                                       // BREAK_TOP7_BOTTOM7
    // 415 |                                       // SEVENTH_INNING_BOTTOM
    if (
        ai_match_status === 463 || ai_match_status === 414 || ai_match_status === 464 || ai_match_status === 415
    ) {
        return '7th';
    }
    // 465 |                                       // BREAK_TOP8_BOTTOM7
    // 416 |                                       // EIGHTH_INNING_TOP
    // 466 |                                       // BREAK_TOP8_BOTTOM8
    // 417 |                                       // EIGHTH_INNING_BOTTOM
    if (
        ai_match_status === 465 || ai_match_status === 416 || ai_match_status === 466 || ai_match_status === 417
    ) {
        return '8th';
    }

    // 467 |                                       // BREAK_TOP9_BOTTOM8
    // 418 |                                       // NINTH_INNING_TOP
    // 468 |                                       // BREAK_TOP9_BOTTOM9
    // 419 |                                       // NINTH_INNING_BOTTOM
    // 469 |                                       // BREAK_TOPEI_BOTTOM9
    if (
        ai_match_status === 467 || ai_match_status === 418 || ai_match_status === 468 || ai_match_status === 419 || ai_match_status === 469
    ) {
        return '9th';
    }
    // 420 |                                       // EXTRA_INNING_TOP
    // 470 |                                       // BREAK_TOPEI_BOTTOMEI
    // 421 |                                       // EXTRA_INNING_BOTTOM
    return '9th';
};