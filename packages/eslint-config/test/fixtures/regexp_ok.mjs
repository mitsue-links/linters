// require-unicode-regexp
(() => {
    /\d{4}-\d{2}-\d{2}/u.exec('2020-01-03');
})();

// prefer-named-capture-group
/* eslint-disable no-console */
(() => {
    const match = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u.exec('2020-01-03');

    if (match) {
        const {year, month, day} = match.groups;

        console.log(year, month, day);
    }

    /(?:\d{4})-(?:\d{2})-(?:\d{2})/u.exec('2020-01-03');
})();
/* eslint-enable no-console */
