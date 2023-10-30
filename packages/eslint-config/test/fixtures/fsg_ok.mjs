// 2-1
(function () {
    return true;
}());


// 3-1
/* eslint-disable no-global-assign, no-undef, no-unused-vars */
(function () {
    (function () {
        // ...
    }());

    const foo = function () {
        // ...
    };

    function Bar() {
        // ...
    }

    const baz = function () {
        return true;
    };

    const a = [
        'alpha',
        'beta',
        'gamma',
    ];

    const o = {
        checked: false,
        type: 'stable',
    };

    if (changed) {
        status = 'ok';
    }

    for (i = 0; i < nitems; i++) {
        // ...
    }
}());
/* eslint-enable no-global-assign, no-undef, no-unused-vars */

// 4-1
/* eslint-disable no-unused-vars */
(function () {
    let testVariableName;

    let TEST_CONST_NAME;

    const TestConstructorName = function () {
        // ...
    };

    TestConstructorName.prototype = {
        // ...
    };
}());

(function () {
    function TestConstructorName() {
        // ...
    }

    TestConstructorName.prototype = {
        // ...
    };

    const test = {
        checkAll() {
            // ...
        },
    };
}());
/* eslint-enable no-unused-vars */

// 6-1
(function () {
    JSON.parse('{"secure": true}');
}());

// 7-1
(function () {
    setTimeout(() => {
        // ...
    }, 1000);

    const someFunctionName = function () {
        // ...
    };

    setTimeout(
        someFunctionName,
        1000,
    );
}());

// 8-1
/* eslint-disable no-undef, no-unused-vars, no-shadow */
(function () {
    function hoge() {
        // ...
        hoge();
    }

    const fuga = FugaFugaBarBar;
    fuga.hoge1();
    fuga.hoge2();
    fuga.hoge3();
}());
/* eslint-enable no-undef, no-unused-vars, no-shadow */

// 11-1
/* eslint-disable no-unused-expressions */
(function () {
    0 === '';
}());
/* eslint-enable no-unused-expressions */

// 12-1
/* eslint-disable no-unused-vars */
(function () {
    return true;
}());

function hoge() {
    return true;
}
/* eslint-enable no-unused-vars */

// 13-1
/* eslint-disable no-undef */
(function () {
    if (changed) {
        // ...
        if (converted) {
            // ...
        }
    }
}());
/* eslint-enable no-undef */

// 15-1
/* eslint-disable no-unused-vars, no-undef, prefer-template */
(function () {
    const foo = 'alpha';
    const bar = 100;
    const baz = false;

    const names = ['alpha', 'beta', 'gamma'];

    const notes = {
        gears: 'of',
        war: 3,
    };

    switch (type) {
    case 'success':
        // ...
        break;
    case 'error':
        // ...
        break;
    default:
        break;
    }

    const result = 123 + 456;

    const str = 'checked: ' + c + ', type: ' + t;

    if (value) {
        // ...
    } else if (notice) {
        // ...
    } else {
        // ...
    }

    const i = -2;
    sum++;
}());
/* eslint-enable no-unused-vars, no-undef, prefer-template */
