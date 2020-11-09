// default-case-last
/* eslint-disable no-undef */
(function () {
    'use strict';

    switch (foo) {
    case 'bar':
        bar();
        break;
    default:
        break;
    }

    switch (foo) {
    case 'bar':
        bar();
        break;
    case 'baz':
        baz();
        break;
    default:
        break;
    }
}());
/* eslint-enable no-undef */

// no-useless-backreference
(function () {
    'use strict';

    /^(?:(?<test>a)|b)$/u.test('ab');
}());

// no-restricted-exports
