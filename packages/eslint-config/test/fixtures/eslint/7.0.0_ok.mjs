// default-case-last
/* eslint-disable no-undef */
(function () {
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
    /^(?:(?<test>a)|b)$/u.test('ab');
}());

// no-restricted-exports
