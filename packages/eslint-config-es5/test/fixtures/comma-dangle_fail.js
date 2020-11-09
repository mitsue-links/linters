// comma-dangle
/* eslint-disable no-console */
(function () {
    'use strict';

    function f1(x, y, z) {
        return x * y * z;
    }

    console.log(f1(7, 11, 13));

    function f2(
        x,
        y,
        z, // カンマ
    ) {
        return x * y * z;
    }

    console.log(f2(7, 11, 13));
}());
/* eslint-enable no-console */
