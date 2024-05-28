// no-prototype-builtins
/* eslint-disable no-console, prefer-object-has-own */
(() => {
    const obj = Object.create(null);

    obj.foo = 'bar';

    for (const key of Object.keys(obj)) {
        console.log(key, obj[key]);
    }

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(key, obj[key]);
        }
    }
})();
/* eslint-enable no-console */
