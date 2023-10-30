// no-prototype-builtins
/* eslint-disable no-console */
(() => {
    const obj = Object.create(null);

    obj.foo = 'bar';

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
})();
/* eslint-enable no-console */
