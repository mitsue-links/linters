// default-case-last
/* eslint-disable no-undef */
(function () {
    'use strict';

    switch (foo) {
    default:
        break;
    case 'bar':
        bar();
        break;
    }

    switch (foo) {
    case 'bar':
        bar();
        break;
    default:
        break;
    case 'baz':
        baz();
        break;
    }
}());
/* eslint-enable no-undef */

// no-useless-backreference
(function () {
    'use strict';

    /^(?:(?<test>a)|\1b)$/u.test('ab');
}());

// no-restricted-exports
