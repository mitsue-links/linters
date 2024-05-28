// prefer-object-has-own
/* eslint-disable no-console */
(() => {
    const obj = Object.create(null);

    obj.foo = 'bar';

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(key, obj[key]);
        }
    }
})();
