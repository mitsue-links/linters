// prefer-object-has-own
/* eslint-disable no-console */
(() => {
    'use strict';

    const obj = Object.create(null);

    obj.foo = 'bar';

    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            console.log(key, obj[key]);
        }
    }
})();
