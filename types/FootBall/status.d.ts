
export type TFootBallMatchStatus =
    // fixtures
    0 |                                         // Abnormal(suggest hiding)
    1 |                                         // Not started
    // live scope
    2 |                                         // First half
    3 |                                         // Half-time
    4 |                                         // Second half
    5 |                                         // Overtime
    6 |                                         // Overtime(deprecated)
    7 |                                         // Penalty Shoot-out
    // result
    8 |                                         // End
    9 |                                         // Delay
    10 |                                        // Interrupt
    11 |                                        // Cut in half
    12 |                                        // Cancel
    13                                          // To be determined
;
