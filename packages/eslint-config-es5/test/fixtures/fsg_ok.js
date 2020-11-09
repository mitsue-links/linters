// 2-1
(function () {
    'use strict';

    return true;
}());


// 3-1
/* eslint-disable no-global-assign, no-undef, no-unused-vars, vars-on-top */
(function () {
    'use strict';

    (function () {
        // ...
    }());

    var foo = function () {
        // ...
    };

    function Bar() {
        // ...
    }

    var baz = function () {
        return true;
    };

    var a = [
        'alpha',
        'beta',
        'gamma',
    ];

    var o = {
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
/* eslint-enable no-global-assign, no-undef, no-unused-vars, vars-on-top */

// 4-1
/* eslint-disable no-redeclare, no-unused-vars, vars-on-top */
(function () {
    'use strict';

    var testVariableName;

    var TEST_CONST_NAME;

    var TestConstructorName = function () {
        // ...
    };

    TestConstructorName.prototype = {
        // ...
    };

    function TestConstructorName() {
        // ...
    }

    TestConstructorName.prototype = {
        // ...
    };

    var test = {
        checkAll: function () {
            // ...
        },
    };
}());
/* eslint-enable no-redeclare, no-unused-vars, vars-on-top */

// 5-1
(function () {
    'use strict';

    parseInt('255', 10);
    parseInt('255px', 10);
    parseInt('FF', 16);
    parseInt('377', 8);
    parseInt('11111111', 2);
}());

// 6-1
(function () {
    'use strict';

    JSON.parse('{"secure": true}');
}());

// 7-1
/* eslint-disable vars-on-top */
(function () {
    'use strict';

    setTimeout(function () {
        // ...
    }, 1000);

    var someFunctionName = function () {
        // ...
    };

    setTimeout(
        someFunctionName,
        1000
    );
}());
/* eslint-enable vars-on-top */

// 8-1
/* eslint-disable no-undef, no-unused-vars, no-shadow, vars-on-top */
(function () {
    'use strict';

    function hoge() {
        // ...
        hoge();
    }

    var fuga = FugaFugaBarBar;

    fuga.hoge1();
    fuga.hoge2();
    fuga.hoge3();
}());
/* eslint-enable no-undef, no-unused-vars, no-shadow, vars-on-top */

// 11-1
/* eslint-disable no-unused-expressions */
(function () {
    'use strict';

    0 === '';
}());
/* eslint-enable no-unused-expressions */

// 12-1
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    return true;
}());

function hoge() {
    'use strict';

    return true;
}
/* eslint-enable no-unused-vars */

// 13-1
/* eslint-disable no-undef */
(function () {
    'use strict';

    if (changed) {
        // ...
        if (converted) {
            // ...
        }
    }
}());
/* eslint-enable no-undef */

// 15-1
/* eslint-disable no-unused-vars, no-undef, vars-on-top */
(function () {
    'use strict';

    var foo = 'alpha';
    var bar = 100;
    var baz = false;

    var names = ['alpha', 'beta', 'gamma'];

    var notes = {
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

    var result = 123 + 456;

    var str = 'checked: ' + c + ', type: ' + t;

    if (value) {
        // ...
    } else if (notice) {
        // ...
    } else {
        // ...
    }

    var i = -2;

    sum++;
}());
/* eslint-enable no-unused-vars, no-undef, vars-on-top */
