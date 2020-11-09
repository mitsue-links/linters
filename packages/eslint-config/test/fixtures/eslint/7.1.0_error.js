// no-loss-of-precision
/* eslint-disable no-undef */
(() => {
    'use strict';

    const bigNumber = 9999999999999999;

    if (bigNumber === 10000000000000000) {
        lostPrecision();
    }

    const smallNumber = 0.50000000000000001;

    if (smallNumber === 0.5) {
        lostPrecision();
    }
})();
/* eslint-enable no-undef */
