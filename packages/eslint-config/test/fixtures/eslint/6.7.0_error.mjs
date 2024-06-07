// grouped-accessor-pairs
/* eslint-disable no-unused-vars */
(function () {
    class Foo {
        get value() {
            return this._value;
        }

        increment() {
            this._value++;
        }

        set value(value) {
            this.value = value;
        }
    }
}());
/* eslint-enable no-unused-vars */

// no-constructor-return
/* eslint-disable no-unused-vars */
(function () {
    class Foo {
        constructor(value) {
            if (!value) {
                return 'Error';
            }

            this.value = value;
        }
    }
}());
/* eslint-enable no-unused-vars */

// no-dupe-else-if
/* eslint-disable no-undef */
(function () {
    const abc = '';

    if (abc) {
        foo();
    } else if (abc) {
        bar();
    }
}());
/* eslint-enable no-undef */

// no-setter-return
/* eslint-disable no-unused-vars */
(function () {
    class Foo {
        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;

            return this._value;
        }
    }
}());
/* eslint-enable no-unused-vars */

// prefer-exponentiation-operator
/* eslint-disable no-unused-vars */
(function () {
    const foo = Math.pow(2, 4);
}());
/* eslint-enable no-unused-vars */

// no-useless-computed-key
/* eslint-disable no-unused-vars, class-methods-use-this, no-empty-function, getter-return */
(function () {
    class Foo {
        [0]() {}

        ['a']() {}

        get ['b']() {}

        set ['b'](value) {}

        static ['c']() {}
    }
}());
/* eslint-enable no-unused-vars, class-methods-use-this, no-empty-function, getter-return */
