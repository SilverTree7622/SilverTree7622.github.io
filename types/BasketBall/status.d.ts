
export type TBasketBallMatchStatus =
    // fixtures
    0 |                                         // Abnormal(suggest hiding)
    1 |                                         // Not started
    // live scope
    2 |                                         // Section One
    3 |                                         // Section One Over
    4 |                                         // Section Two
    5 |                                         // Section Two Over
    6 |                                         // Section Three
    7 |                                         // Section Three Over
    8 |                                         // Section Four
    9 |                                         // Overtime
    // result
    10 |                                        // End
    11 |                                        // Interrupt
    12 |                                        // Cancel
    13 |                                        // Extension
    14 |                                        // Cut in half
    15                                          // To be determined
;
