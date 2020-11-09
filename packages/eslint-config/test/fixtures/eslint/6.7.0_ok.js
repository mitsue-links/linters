// grouped-accessor-pairs
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    class Foo {
        get value() {
            return this._value;
        }

        set value(value) {
            this.value = value;
        }

        increment() {
            this._value++;
        }
    }
}());
/* eslint-enable no-unused-vars */

// no-constructor-return
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    class Foo {
        constructor(value) {
            if (!value) {
                return;
            }

            this.value = value;
        }
    }
}());
/* eslint-enable no-unused-vars */

// no-dupe-else-if
/* eslint-disable no-undef */
(function () {
    'use strict';

    const abc = '';

    if (abc) {
        foo();
    } else if (!abc) {
        bar();
    }
}());
/* eslint-enable no-undef */

// no-setter-return
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    class Foo {
        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
        }
    }
}());
/* eslint-enable no-unused-vars */

// prefer-exponentiation-operator
/* eslint-disable no-unused-vars */
(function () {
    'use strict';

    const foo = 2 ** 4;
}());
/* eslint-enable no-unused-vars */

// no-useless-computed-key
/* eslint-disable no-unused-vars, class-methods-use-this, no-empty-function, getter-return */
(function () {
    'use strict';

    class Foo {
        0() {}

        a() {}

        get b() {}

        set b(value) {}

        static c() {}
    }
}());
/* eslint-enable no-unused-vars, class-methods-use-this, no-empty-function, getter-return */
