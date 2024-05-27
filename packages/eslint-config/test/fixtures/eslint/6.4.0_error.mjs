// no-import-assign

// /prefer-regex-literals
(function () {
    (new RegExp('abc', 'u')).test('abcdef');
}());

// default-param-last
(function () {
    function foo(a = 0, b) {
        return a + b;
    }

    foo(1); // => NaN
}());

// computed-property-spacing
/* eslint-disable no-unused-vars, no-undef */
(function () {
    class Foo {
        [a ]() {
            return this;
        }

        get [b ]() {
            return this.val;
        }

        set [b ](value) {
            this.val = value;
        }
    }
}());
/* eslint-enable no-unused-vars, no-undef */

// accessor-pairs
