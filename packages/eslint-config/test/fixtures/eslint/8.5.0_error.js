// prefer-object-has-own
/* eslint prefer-object-has-own: 2 */
/* eslint-disable no-console */
(() => {
    'use strict';

    const obj = Object.create(null);

    obj.foo = 'bar';

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(key, obj[key]);
        }
    }
})();
