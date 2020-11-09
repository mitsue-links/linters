// use-isnan
/* eslint-disable no-undef */
(function () {
    'use strict';

    switch (foo) {
    case NaN:
        bar();
        break;
    default:
        break;
    }

    switch (NaN) {
    case a:
        bar();
        break;
    default:
        break;
    }
}());
/* eslint-enable no-undef */
