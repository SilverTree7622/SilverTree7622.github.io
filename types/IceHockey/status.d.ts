
export type TIceHockeyMatchStatus =
    // fixtures
    0 |                                         // Abnormal(suggest hiding)
    1 |                                         // NOT_STARTED
    // live scope
    30 |                                        // FIRST_PERIOD
    331 |                                       // FIRST_PAUSE
    31 |                                        // SECOND_PERIOD
    332 |                                       // SECOND_PAUSE
    32 |                                        // THIRD_PERIOD
    // result
    100 |                                       // ENDED
    6 |                                         // AWAITING_OT
    10 |                                        // OVERTIME
    105 |                                       // AFTER_OT
    8 |                                         // AWAITING_PENALTIES
    13 |                                        // PENALTY_SHOOTING
    110 |                                       // AFTER_PENALTIES
    14 |                                        // POSTPONED
    15 |                                        // DELAYED
    16 |                                        // CANCELED
    17 |                                        // INTERRUPTED
    18 |                                        // SUSPENSION
    19 |                                        // Cut in half
    99                                          // To be determined
;