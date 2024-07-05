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

export const getTime = (ai_match_status: number, ai_kickoff_timestamp: number): number => {
    const currentTime = UtilDate.getWithOutMillisecond();
    const kickOffTime = ai_kickoff_timestamp;
    const gapTime = currentTime - kickOffTime;
    let dateTime = 0;
    if (ai_match_status === 432) {
        dateTime = gapTime / 60 + 1;
    }
    if (ai_match_status === 3) {
        dateTime = 45;
    }
    if (
        ai_match_status === 434 ||
        ai_match_status === 436 ||
        ai_match_status === 438 ||
        ai_match_status === 440
    ) {
        dateTime = gapTime / 60 + 45 + 1;
    }
    return dateTime;
};