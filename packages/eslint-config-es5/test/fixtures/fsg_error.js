// 2-1
/* eslint-disable no-unused-vars, strict */
alpha = 'foo';

(function () {
    alpha = 'foo';
}());

(function () {
    var beta = 12.34,
        gamma = false,
        items = [1, 3, 5, 7, 11, 13, 17];
        nitems = items.length,
        i, item;
}());
/* eslint-enable no-unused-vars, strict */

// 3-1
/* eslint-disable no-global-assign, no-undef */
(function () {
    'use strict';

    if (changed) { status = 'ok'; }
}());
/* eslint-enable no-global-assign, no-undef */

// 4-1
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    var test_variable_name;

    var testConstName;

    var testConstructorName = function () {
        // ...
    };
}());
/* eslint-enable no-unused-vars */

// 5-1
(function () {
    'use strict';

    parseInt('0xFF');
    parseInt('0377');
}());

// 6-1
/* eslint-disable no-unused-vars, vars-on-top */
(function () {
    'use strict';

    eval('{"danger": true}');

    var f = new Function('this', 'is', 'danger', 'return this + is + danger');
}());
/* eslint-enable no-unused-vars, vars-on-top */

// 7-1
(function () {
    'use strict';

    var someFunctionName = function () {
        // ...
    };

    setTimeout(
        // ...
        'someFunctionName()',
        1000
    );
}());

// 8-1
/* eslint-disable no-undef, no-unused-vars, strict */
(function () {
    function hoge() {
        arguments.callee();
    }

    with (FugaFugaBarBar) {
        hoge1();
        hoge2();
        hoge3();
    }
}());
/* eslint-enable no-undef, no-unused-vars, strict */

// 9-1
/* eslint-disable no-unused-expressions, strict, vars-on-top */
(function () {
    010;

    escape();
    unescape();

    'string'.substr(1, 3);

    var date = new Date();

    date.getYear();
    date.setYear(0);
    date.toGMTString();
}());
/* eslint-enable no-unused-expressions, strict, vars-on-top */

// 11-1
/* eslint-disable no-unused-expressions */
(function () {
    'use strict';

    0 == '';
}());
/* eslint-enable no-unused-expressions */

// 12-1
(function () {
    return true;
}());

// 13-1
/* eslint-disable no-undef */
(function () {
	'use strict';

	if (changed) {
	    if (converted) {
	        return false;
	    }
	}

	return true;
}());
/* eslint-enable no-undef */

// 15-1
/* eslint-disable no-unused-vars, no-undef, vars-on-top, no-redeclare */
(function () {
    'use strict';

    var foo = 'alpha',bar = 100,baz = false;

    var notes = {
        gears:'of',
        war:3,
    };

    var notes = {
        gears : 'of',
        war : 3,
    };

    switch (type) {
    case 'success' :
        // ...
        break;
    case 'error' :
        // ...
        break;
    default :
        break;
    }

    var str = 'checked: '+c+', type: '+t;

    if (value)
        ret = value;

    var sum = - 2;

    sum ++;
}());
/* eslint-enable no-unused-vars, no-undef, vars-on-top, no-redeclare */
