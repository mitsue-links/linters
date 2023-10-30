// use-isnan
/* eslint-disable no-unused-vars */
(function () {
    const indexOf = [1, 2, 3].findIndex(Number.isNaN);
    const hasNaN = [1, 2, 3].includes(NaN);
}());
/* eslint-enable no-unused-vars */

// no-unsafe-negation
/* eslint-disable no-unused-vars */
(function () {
    const a = 3;
    const b = 5;
    const foo = !(a < b);
}());
/* eslint-enable no-unused-vars */
