// require-unicode-regexp
(() => {
    'use strict';

    /\d{4}-\d{2}-\d{2}/.exec('2020-01-03');
})();

// prefer-named-capture-group
/* eslint-disable no-console */
(() => {
    'use strict';

    const match = /(\d{4})-(\d{2})-(\d{2})/u.exec('2020-01-03');

    if (match) {
        const [, year, month, day] = match;

        console.log(year, month, day);
    }
})();
/* eslint-enable no-console */
