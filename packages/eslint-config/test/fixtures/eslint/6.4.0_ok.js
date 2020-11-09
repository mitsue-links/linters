// no-import-assign

// prefer-regex-literals
(function () {
    'use strict';

    const pattern = 'abc';

    (new RegExp(pattern, 'u')).test('abcdef');
    /abc/u.test('abcdef');
}());

// default-param-last
(function () {
    'use strict';

    function foo(a, b = 0) {
        return a + b;
    }

    foo(1); // => 1
}());

// computed-property-spacing
/* eslint-disable no-unused-vars, no-undef */
(function () {
    'use strict';

    class Foo {
        [a]() {
            return this;
        }

        get [b]() {
            return this.val;
        }

        set [b](value) {
            this.val = value;
        }
    }
}());
/* eslint-enable no-unused-vars, no-undef */

// accessor-pairs
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    class Foo {
        get a() {
            return this.val;
        }
    }
}());
/* eslint-enable no-unused-vars */
