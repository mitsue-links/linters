// comma-dangle
/* eslint-disable no-console */
(function () {
    'use strict';

    var a = 2;
    var b = 3;
    var c = 5;

    console.log([a, b, c]);
    console.log([
        a,
        b,
        c, // カンマ
    ]);

    console.log({
        a: a,
        b: b,
        c: c, // カンマ
    });

    function f1(x, y, z) {
        return x * y * z;
    }

    console.log(f1(7, 11, 13));

    function f2(
        x,
        y,
        z
    ) {
        return x * y * z;
    }

    console.log(f2(7, 11, 13));
}());
/* eslint-enable no-console */
