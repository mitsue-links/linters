// require-unicode-regexp
(function () {
    'use strict';

    /\d{4}-\d{2}-\d{2}/.exec('2020-01-03');
}());

// prefer-named-capture-group
/* eslint-disable no-console */
(function () {
    'use strict';

    var match = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-01-03');
    var year;
    var month;
    var day;

    if (match) {
        year = match[0];
        month = match[1];
        day = match[2];

        console.log(year, month, day);
    }
}());
/* eslint-enable no-console */
