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
        c
    ]);

    console.log({
        a: a,
        b: b,
        c: c
    });
}());
/* eslint-enable no-console */
