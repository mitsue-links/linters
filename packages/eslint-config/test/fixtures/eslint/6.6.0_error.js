// use-isnan
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    const indexOf = [1, 2, 3].indexOf(NaN);
    const lastIndexOf = [1, 2, 3].lastIndexOf(NaN);
}());
/* eslint-enable no-unused-vars */

// no-unsafe-negation
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    const a = 3;
    const b = 5;
    const foo = !a < b;
}());
/* eslint-enable no-unused-vars */

