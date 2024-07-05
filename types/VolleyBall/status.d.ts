
export type TVolleyBallMatchStatus =
    // fixtures
    0 |                                         // Abnormal(suggest hiding)
    1 |                                         // NOT_STARTED
    // live scope
    432 |                                       // FIRST_SET
    434 |                                       // SECOND_SET
    436 |                                       // THIRD_SET
    438 |                                       // FOURTH_SET
    440 |                                       // FIFTH_SET
    // result
    100 |                                       // ENDED
    14 |                                        // POSTPONED
    15 |                                        // DELAYED
    16 |                                        // CANCELED
    17 |                                        // INTERRUPTED
    19 |                                        // Cut in half
    99                                          // To be determined
;
