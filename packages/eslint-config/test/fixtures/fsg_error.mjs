// 2-1
/* eslint-disable no-unused-vars */
alpha = 'foo';

(function () {
    alpha = 'foo';
}());

(function () {
    const beta = 12.34,
        gamma = false,
        items = [1, 3, 5, 7, 11, 13, 17];
        nitems = items.length,
        i, item;
}());
/* eslint-enable no-unused-vars */

// 3-1
/* eslint-disable no-global-assign, no-undef */
(function () {
    if (changed) { status = 'ok'; }
}());
/* eslint-enable no-global-assign, no-undef */

// 4-1
/* eslint-disable no-unused-vars */
(function () {
    let test_variable_name;

    let testConstName;

    const testConstructorName = function () {
        // ...
    };
}());
/* eslint-enable no-unused-vars */

// 6-1
/* eslint-disable no-unused-vars */
(function () {
    eval('{"danger": true}');

    const f = new Function('this', 'is', 'danger', 'return this + is + danger');
}());
/* eslint-enable no-unused-vars, vars-on-top */

// 7-1
(function () {
    const someFunctionName = function () {
        // ...
    };

    setTimeout(
        // ...
        'someFunctionName()',
        1000,
    );
}());

// 8-1
/* eslint-disable no-unused-vars */
(function () {
    function hoge() {
        arguments.callee();
    }
}());
/* eslint-enable no-unused-vars */

// 9-1
(function () {
    escape();
    unescape();

    'string'.substr(1, 3);

    const date = new Date();

    date.getYear();
    date.setYear(0);
    date.toGMTString();

    ' string'.trimLeft();
    'string '.trimRight();
}());

// 11-1
/* eslint-disable no-unused-expressions */
(function () {
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
	if (changed) {
	    if (converted) {
	        return false;
	    }
	}

	return true;
}());
/* eslint-enable no-undef */

// 15-1
/* eslint-disable no-unused-vars, no-undef, prefer-template */
(function () {
    const foo = 'alpha',bar = 100,baz = false;

    const notes = {
        gears:'of',
        war:3,
    };
}());

(function () {
    const notes = {
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

    const str = 'checked: '+c+', type: '+t;

    if (value)
        ret = value;

    let sum = - 2;

    sum ++;
}());
/* eslint-enable no-unused-vars, no-undef, prefer-template */
