
export type TTennisMatchStatus =
    // fixtures
    0 |                                         // Abnormal(suggest hiding)
    1 |                                         // NOT_STARTED
    // live scope
    3 |                                         // IN_PROGRESS
    51 |                                        // FIRST_SET
    52 |                                        // SECOND_SET
    53 |                                        // THIRD_SET
    54 |                                        // FOURTH_SET
    55 |                                        // FIFTH_SET
    // result
    100 |                                       // ENDED
    20 |                                        // RETIRED
    21 |                                        // WALKOVER
    22 |                                        // WALKOVER1
    23 |                                        // WALKOVER2
    24 |                                        // RETIRED1
    25 |                                        // RETIRED2
    26 |                                        // DEFAULTED1
    27 |                                        // DEFAULTED2
    14 |                                        // POSTPONED
    15 |                                        // DELAYED
    16 |                                        // CANCELED
    17 |                                        // INTERRUPTED
    18 |                                        // SUSPENSION
    19 |                                        // Cut in half
    99                                          // To be determined
;